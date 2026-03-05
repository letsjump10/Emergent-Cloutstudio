from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import asyncio
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'hello@cloutstudio.co')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

# Define Models
class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: EmailStr
    business_name: Optional[str] = None
    website: Optional[str] = None
    services: List[str] = Field(default_factory=list)
    monthly_budget: Optional[str] = None
    callback_time: Optional[str] = None
    message: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"

class LeadCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    business_name: Optional[str] = None
    website: Optional[str] = None
    services: List[str] = Field(default_factory=list)
    monthly_budget: Optional[str] = None
    callback_time: Optional[str] = None
    message: Optional[str] = None

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

# Helper function to send email
async def send_lead_notification(lead: Lead):
    """Send email notification when a new lead is received"""
    if not resend.api_key:
        logger.warning("Resend API key not configured, skipping email notification")
        return
    
    services_list = "<br>".join([f"• {service}" for service in lead.services]) if lead.services else "Not specified"
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #00F0FF 0%, #007AFF 100%); color: white; padding: 20px; text-align: center; }}
            .content {{ background: #f9f9f9; padding: 30px; }}
            .field {{ margin-bottom: 15px; }}
            .label {{ font-weight: bold; color: #555; }}
            .value {{ color: #000; }}
            .footer {{ text-align: center; padding: 20px; color: #777; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 New Lead from Clout Studio Website</h1>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">Name:</span> <span class="value">{lead.name}</span>
                </div>
                <div class="field">
                    <span class="label">Email:</span> <span class="value">{lead.email}</span>
                </div>
                <div class="field">
                    <span class="label">Phone:</span> <span class="value">{lead.phone}</span>
                </div>
                <div class="field">
                    <span class="label">Business Name:</span> <span class="value">{lead.business_name or 'Not provided'}</span>
                </div>
                <div class="field">
                    <span class="label">Website:</span> <span class="value">{lead.website or 'Not provided'}</span>
                </div>
                <div class="field">
                    <span class="label">Services Interested In:</span><br>{services_list}
                </div>
                <div class="field">
                    <span class="label">Monthly Budget:</span> <span class="value">{lead.monthly_budget or 'Not specified'}</span>
                </div>
                <div class="field">
                    <span class="label">Preferred Callback Time:</span> <span class="value">{lead.callback_time or 'Not specified'}</span>
                </div>
                {f'<div class="field"><span class="label">Message:</span><br><span class="value">{lead.message}</span></div>' if lead.message else ''}
                <div class="field">
                    <span class="label">Timestamp:</span> <span class="value">{lead.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}</span>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from Clout Studio lead form.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    params = {
        "from": SENDER_EMAIL,
        "to": [NOTIFICATION_EMAIL],
        "subject": f"New Lead: {lead.name} - {', '.join(lead.services[:2]) if lead.services else 'Inquiry'}",
        "html": html_content
    }
    
    try:
        await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Lead notification email sent successfully for {lead.email}")
    except Exception as e:
        logger.error(f"Failed to send lead notification email: {str(e)}")

# Routes
@api_router.get("/")
async def root():
    return {"message": "Clout Studio API", "version": "1.0.0"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    """Create a new lead and send email notification"""
    lead_dict = input.model_dump()
    lead_obj = Lead(**lead_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = lead_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.leads.insert_one(doc)
    
    # Send email notification in background (don't wait)
    asyncio.create_task(send_lead_notification(lead_obj))
    
    return lead_obj

@api_router.get("/leads", response_model=List[Lead])
async def get_leads(skip: int = 0, limit: int = 50):
    """Get leads with pagination (for admin purposes)"""
    leads = await db.leads.find({}, {"_id": 0}).sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
    
    # Convert ISO string timestamps back to datetime objects
    for lead in leads:
        if isinstance(lead['timestamp'], str):
            lead['timestamp'] = datetime.fromisoformat(lead['timestamp'])
    
    return leads

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    """Create a contact message"""
    message_dict = input.model_dump()
    message_obj = ContactMessage(**message_dict)
    
    doc = message_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contact_messages.insert_one(doc)
    
    # Send email notification
    if resend.api_key:
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif;">
            <h2>New Contact Message from Clout Studio</h2>
            <p><strong>Name:</strong> {message_obj.name}</p>
            <p><strong>Email:</strong> {message_obj.email}</p>
            <p><strong>Phone:</strong> {message_obj.phone}</p>
            <p><strong>Message:</strong><br>{message_obj.message}</p>
            <p><strong>Timestamp:</strong> {message_obj.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
        </body>
        </html>
        """
        
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFICATION_EMAIL],
            "subject": f"Contact Form: {message_obj.name}",
            "html": html_content
        }
        
        try:
            asyncio.create_task(asyncio.to_thread(resend.Emails.send, params))
        except Exception as e:
            logger.error(f"Failed to send contact notification: {str(e)}")
    
    return message_obj

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()