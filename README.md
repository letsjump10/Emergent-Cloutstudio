# Clout Studio - Digital Marketing Agency Website

A high-conversion, futuristic website for a digital marketing agency based in Roorkee, Uttarakhand.

## Features

- **Modern Tech Stack:** React + FastAPI + MongoDB
- **Clean Professional UI:** White background with blue & orange gradient brand palette
- **11 Services:** Complete digital marketing solutions
- **Lead Generation:** Forms with MongoDB storage + Resend email notifications
- **Case Studies:** 6 detailed case studies with results
- **SEO Optimized:** Schema markup, meta tags, clean URLs
- **Mobile Responsive:** Mobile-first design with sticky CTA bar
- **Animations:** Framer Motion for smooth interactions

## Pages

1. **Home** - Hero, Services Grid, Stats, Autopilot System, Case Studies, Process, Pricing, Testimonials, FAQ, Lead Form
2. **Services** - Overview of all 11 services
3. **Service Detail** - Individual service pages with details, FAQs
4. **About** - Mission, values, team, local presence
5. **Work** - Case studies with filtering (SEO, PPC, Social, Website, Automation)
6. **Case Study Detail** - Full case study with problem, strategy, execution, results
7. **Contact** - Contact form, info, Google Maps embed

## Setup Instructions

### 1. Backend Configuration

Edit `/app/backend/.env`:

```bash
# Required: Add your Resend API key for email notifications
RESEND_API_KEY="re_your_actual_api_key_here"

# Optional: Change sender email (default works in test mode)
SENDER_EMAIL="onboarding@resend.dev"

# Where lead notifications are sent
NOTIFICATION_EMAIL="hello@cloutstudio.co"
```

**Get Resend API Key:**
1. Sign up at https://resend.com
2. Go to API Keys → Create API Key
3. Copy the key (starts with `re_`)

After adding the key, restart backend:
```bash
sudo supervisorctl restart backend
```

### 2. Google Analytics & Meta Pixel

Edit `/app/frontend/public/index.html`:

- Uncomment Google Analytics section and replace `G-XXXXXXXXXX` with your tracking ID
- Uncomment Meta Pixel section and replace `YOUR_PIXEL_ID` with your pixel ID

### 3. Company Details

To update company information, edit:

**Frontend:**
- `/app/frontend/src/components/Footer.js` - Footer contact info
- `/app/frontend/src/components/Navbar.js` - Phone number in navbar
- `/app/frontend/src/pages/Contact.js` - Contact page details

**Backend:**
- `/app/backend/.env` - Email notification settings

## Project Structure

```
/app/
├── backend/
│   ├── server.py           # FastAPI server with lead management
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/        # Shadcn UI components
│   │   │   └── home/      # Home page sections
│   │   ├── pages/         # Page components
│   │   ├── data/          # Services & case studies data
│   │   ├── App.js         # Main app with routing
│   │   └── index.css      # Global styles with Tailwind
│   ├── public/
│   │   └── index.html     # HTML with analytics placeholders
│   └── package.json       # Node dependencies
└── design_guidelines.json  # Design system reference
```

## Customization Guide

### Update Services

Edit `/app/frontend/src/data/servicesData.js`:
- Add/remove/edit services
- Update descriptions, deliverables, FAQs

### Update Case Studies

Edit `/app/frontend/src/data/caseStudiesData.js`:
- Add/remove case studies
- Update client names, results, testimonials

### Update Pricing

Edit `/app/frontend/src/components/home/Pricing.js`:
- Modify tier names, prices, features

### Update Colors

Edit `/app/frontend/tailwind.config.js`:
- Change neon colors (cyan, blue, violet)
- Update background colors

## API Endpoints

### Backend (FastAPI)

- `POST /api/leads` - Create new lead
- `GET /api/leads` - Get all leads (admin)
- `POST /api/contact` - Submit contact form

### Testing API

```bash
# Test lead submission
curl -X POST https://your-app.preview.emergentagent.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "services": ["SEO Services", "PPC Advertising"],
    "monthly_budget": "₹50,000 - ₹1,00,000/month"
  }'
```

## Design System

**Colors:**
- Background: White (#FFFFFF)
- Primary Blue: #2563EB
- Primary Orange: #F97316
- Gradient: Blue to Orange (135deg)
- Text: Gray-900 (#111827), Gray-600 (#4B5563)

**Typography:**
- Headings: Syne (Bold 700, 800)
- Body: DM Sans (Regular 400, Medium 500, Bold 700)
- Mono: JetBrains Mono (Regular 400)

**Components:**
- Cards: White background with gray-200 border, subtle shadow
- Gradient text: Blue to orange linear gradient
- Buttons: Blue/orange gradient primary, blue outline secondary

## Performance

- Fonts loaded via @fontsource (local)
- Images from Unsplash (optimized)
- Lazy loading for images
- Mobile-first responsive design
- Core Web Vitals optimized

## Local SEO

The site includes:
- LocalBusiness schema for Roorkee location
- Service schema for each service page
- FAQ schema for FAQ sections
- Clean SEO-friendly URLs

## Support

For questions or issues:
- Email: hello@cloutstudio.co
- Phone: +91 97409 59176
- WhatsApp: https://wa.me/919740959176

## Next Steps

1. Add Resend API key for email notifications
2. Add Google Analytics & Meta Pixel tracking codes
3. Update company contact details
4. Customize services and case studies
5. Replace placeholder images with actual photos
6. Set up Calendly booking link (currently placeholder)
7. Configure Google Business Profile for local SEO

## Technologies Used

- **Frontend:** React 19, React Router, Tailwind CSS, Framer Motion
- **Backend:** FastAPI, Motor (MongoDB async driver)
- **Database:** MongoDB
- **Email:** Resend
- **UI Components:** Shadcn/UI, Lucide React icons
- **Forms:** Sonner (toasts), React Helmet (SEO)

## License

Built for Clout Studio by Emergent AI Agent.
