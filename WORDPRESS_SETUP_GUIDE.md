# Clout Studio - WordPress Setup Guide
## Complete Installation & Customization Instructions

---

## 📋 PART 1: PREREQUISITES

### What You Need:
1. ✅ Hostinger WordPress hosting (you have this)
2. ✅ Domain connected (you have this)
3. 💳 Budget: $59 for Astra Pro theme (one-time payment)
4. ⏱️ Time: 1-2 hours to complete setup

---

## 🚀 PART 2: WORDPRESS INSTALLATION

### Step 1: Install WordPress on Hostinger

1. Log in to Hostinger control panel
2. Go to **Website** → **Auto Installer**
3. Click **WordPress**
4. Select your domain
5. Create admin credentials:
   - Username: `admin` (or your choice)
   - Password: (create strong password)
   - Email: `hello@cloutstudio.co`
6. Click **Install**
7. Wait 2-3 minutes

### Step 2: Access WordPress Admin

1. Go to: `https://yourdomain.com/wp-admin`
2. Login with credentials from Step 1
3. You should see WordPress dashboard

---

## 🎨 PART 3: THEME & PLUGINS

### Purchase & Install Astra Pro Theme

**Option 1: Astra Pro (Recommended - $59/year)**
1. Go to: https://wpastra.com/pricing/
2. Buy "Essential Bundle" ($59)
3. Download theme + Starter Templates plugin
4. In WordPress: **Appearance** → **Themes** → **Add New** → **Upload Theme**
5. Upload `astra-pro.zip`
6. Click **Activate**

**Option 2: Kadence Theme (Alternative - $59/year)**
1. Go to: https://www.kadencewp.com/pricing/
2. Buy "Kadence Starter" ($59)
3. Follow same installation steps

### Install Required Plugins

Go to **Plugins** → **Add New** and install these:

**Essential Plugins:**
1. **Elementor** (Free) - Page builder
2. **Contact Form 7** (Free) - Contact forms
3. **WPForms Lite** (Free) - Lead forms
4. **Yoast SEO** (Free) - SEO optimization
5. **WP Rocket** (Optional - $59) - Speed optimization
6. **Starter Templates** (Free with Astra) - Demo import

**After installation, click "Activate" on each plugin**

---

## 🎨 PART 4: DESIGN CONFIGURATION

### Theme Customizer Settings

Go to **Appearance** → **Customize**

### 4.1 Colors (IMPORTANT - Match Current Design)

**Primary Colors:**
- **Primary Color:** `#2563EB` (Blue)
- **Secondary Color:** `#F97316` (Orange)
- **Text Color:** `#000000` (Pure Black)
- **Heading Color:** Use gradient (see below)

**Background Colors:**
- **Body Background:** `#FFFFFF` (White)
- **Section Alternate:** `#F9FAFB` (Gray-50)

**Accent Colors:**
- **Link Color:** `#2563EB` (Blue)
- **Link Hover:** `#F97316` (Orange)
- **Button Color:** Gradient (Blue to Orange)

### 4.2 Typography

**Fonts to Use:**
1. **Headings:** 
   - Font: **Syne** (Google Font)
   - Weight: **700 (Bold)** to **800 (Extra Bold)**
   - Add via: Google Fonts

2. **Body Text:**
   - Font: **DM Sans** (Google Font)
   - Weight: **400 (Regular)**, **500 (Medium)**, **700 (Bold)**

3. **Monospace (optional):**
   - Font: **JetBrains Mono**

**How to Add Google Fonts:**
1. In Customizer: **Typography** → **Body Font**
2. Search for "DM Sans"
3. Select and set weight to 400
4. Repeat for "Syne" in **Heading Font**

### 4.3 Custom CSS for Gradient Titles

Go to **Appearance** → **Customize** → **Additional CSS**

Add this code:

```css
/* Gradient Titles (Blue to Orange) */
h1, h2, h3, h4, h5, h6,
.entry-title,
.wp-block-heading {
    background: linear-gradient(135deg, #2563EB 0%, #F97316 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
}

/* Pure Black Body Text */
body, p, li, span {
    color: #000000;
    font-family: 'DM Sans', sans-serif;
}

/* Gradient Buttons */
.ast-button,
.wp-block-button__link,
.elementor-button {
    background: linear-gradient(135deg, #2563EB 0%, #F97316 100%);
    border: none;
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.ast-button:hover,
.wp-block-button__link:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

/* Secondary Buttons */
.ast-button-secondary {
    background: transparent;
    border: 2px solid #2563EB;
    color: #2563EB;
}

.ast-button-secondary:hover {
    background: #2563EB;
    color: #FFFFFF;
}

/* Orange Bullets */
ul li::marker {
    color: #F97316;
}

/* Service Cards */
.service-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    padding: 24px;
    transition: all 0.3s ease;
}

.service-card:hover {
    border-color: #2563EB;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Clean White Background */
body {
    background-color: #FFFFFF;
}

/* Alternating Sections */
.alternate-section {
    background-color: #F9FAFB;
}
```

Click **Publish** to save.

---

## 📄 PART 5: CREATE PAGES

### Pages to Create:

1. **Home** - Main landing page
2. **Services** - Services overview
3. **About** - Company information
4. **Work** - Case studies
5. **Contact** - Contact form
6. **Blog** - (Optional) Blog page

### How to Create Pages:

1. Go to **Pages** → **Add New**
2. Title: "Home" (or page name)
3. Use **Elementor** to design
4. Click **Edit with Elementor**

---

## 📝 PART 6: CONTENT STRUCTURE

### HOME PAGE Sections (in order):

**1. Hero Section**
- Heading: "Scale Your Business with Marketing on Autopilot"
- Subheading: "We help businesses in Roorkee, Haridwar, Dehradun, and across India get more leads, sales, and growth. Done-for-you digital marketing that actually works."
- 2 Buttons: "Get Free Strategy Call" | "Call: +91 97409 59176"

**2. Services Grid (8-11 tiles)**
Services to add:
1. Website Design & Development
2. Social Media Management
3. SEO Services
4. GEO Optimization
5. PPC Advertising
6. Landing Pages
7. Content Creation
8. Images & Videos Creation
9. Reels Production
10. WhatsApp Auto-Reply Automation
11. Marketing on Autopilot

**3. Stats Strip**
- 50+ Happy Clients
- ₹2Cr+ Revenue Generated
- 340% Avg. Growth Rate
- 24/7 Support Available

**4. Growth System on Autopilot**
4 steps:
1. Traffic → Ads drive visitors
2. Capture → Lead form + WhatsApp
3. Qualify → Bot qualifies 24/7
4. Convert → CRM routes leads

**5. Case Studies (3 cards)**
- SEO Success Story
- PPC Campaign Results
- Social Media Growth

**6. Process (4 steps)**
1. Discovery & Audit
2. Strategy & Planning
3. Execution & Launch
4. Optimize & Scale

**7. Pricing (3 tiers)**
- Starter: ₹25,000/month
- Growth: ₹60,000/month (Popular)
- Scale: ₹1,20,000/month

**8. Testimonials (4)**
- Client quotes with names

**9. FAQ (8 questions)**
- Common questions

**10. Contact Form**
- Name, Email, Phone, Message fields

---

## 📧 PART 7: CONTACT FORMS SETUP

### Install Contact Form 7

1. **Plugins** → **Add New** → Search "Contact Form 7"
2. Install and activate

### Create Lead Capture Form

1. Go to **Contact** → **Contact Forms**
2. Click **Add New**
3. Title: "Lead Form"
4. Add this code:

```html
<label> Your Name (required)
    [text* your-name] </label>

<label> Your Email (required)
    [email* your-email] </label>

<label> Phone (required)
    [tel* your-phone] </label>

<label> Business Name
    [text your-business] </label>

<label> What do you need?
    [checkbox your-service "SEO" "PPC" "Social Media" "Website Design" "Content Creation"] </label>

<label> Monthly Budget
    [select your-budget "Under ₹25,000/month" "₹25,000 - ₹50,000/month" "₹50,000 - ₹1,00,000/month" "Above ₹1,00,000/month"] </label>

<label> Your Message
    [textarea your-message] </label>

[submit "Send Inquiry"]
```

5. Click **Save**
6. Copy the shortcode: `[contact-form-7 id="123"]`
7. Paste this shortcode in your Contact page

### Email Configuration

1. In Contact Form 7, click **Mail** tab
2. Set:
   - **To:** `hello@cloutstudio.co`
   - **From:** `[your-email]`
   - **Subject:** New Lead from Clout Studio: [your-name]
   - **Message Body:** Keep default

---

## 🔌 PART 8: WHATSAPP INTEGRATION

### Add WhatsApp Chat Button

**Install Plugin:**
1. **Plugins** → **Add New**
2. Search: "Click to Chat"
3. Install and activate

**Configure:**
1. Go to **Click to Chat** → **Settings**
2. WhatsApp Number: `919740959176`
3. Call to Action: "Chat with us on WhatsApp"
4. Position: Bottom Right
5. Save Settings

---

## 🔍 PART 9: SEO SETUP (Yoast SEO)

### Configure Yoast SEO

1. Go to **SEO** → **General**
2. Run Configuration Wizard

**Home Page SEO:**
1. Edit Home page
2. Scroll to Yoast SEO box
3. **Title:** "Clout Studio - Digital Marketing Agency in Roorkee, Uttarakhand"
4. **Meta Description:** "Premier digital marketing agency in Roorkee, Uttarakhand. We help businesses in Haridwar, Dehradun & across India with SEO, PPC, social media, websites & marketing automation."

**Add Schema Markup:**
1. Go to **SEO** → **Schema**
2. Organization Type: **Local Business**
3. Organization Name: **Clout Studio**
4. Location: **Roorkee, Uttarakhand 247667, India**
5. Phone: **+91 97409 59176**
6. Email: **hello@cloutstudio.co**

---

## 📊 PART 10: ANALYTICS SETUP

### Google Analytics

1. Install plugin: **GA Google Analytics**
2. Go to **Settings** → **GA Google Analytics**
3. Add Tracking ID: `G-C0EYWY6QQ8`
4. Save

### Meta Pixel

1. Install plugin: **PixelYourSite**
2. Go to **PixelYourSite** → **Settings**
3. Add Pixel ID: `344294245`
4. Enable: PageView, ViewContent, Contact events
5. Save

---

## 🎨 PART 11: DESIGN TIPS

### Use Elementor Page Builder

**Creating Sections:**
1. Click **Add Section**
2. Choose column structure
3. Drag widgets: Heading, Text, Button, Image

**Service Cards Design:**
1. Use **Icon Box** widget
2. Icon background: Gradient (Blue to Orange)
3. Border: 1px, Color: #E5E7EB
4. Hover effect: Border color → #2563EB

**Color Scheme Summary:**
- **Primary:** #2563EB (Blue)
- **Secondary:** #F97316 (Orange)
- **Background:** #FFFFFF (White)
- **Alt Background:** #F9FAFB (Gray)
- **Text:** #000000 (Black)
- **Border:** #E5E7EB (Gray)

---

## 🚀 PART 12: FINAL STEPS

### Before Going Live:

1. ✅ Set Home page: **Settings** → **Reading** → Static Page → Select "Home"
2. ✅ Permalink Structure: **Settings** → **Permalinks** → Select "Post name"
3. ✅ Delete default pages (Sample Page, Hello World post)
4. ✅ Add site logo: **Customize** → **Site Identity**
5. ✅ Create navigation menu: **Appearance** → **Menus**
6. ✅ Test all forms
7. ✅ Check mobile responsiveness
8. ✅ Install SSL certificate (Hostinger provides free)

### Menu Structure:

**Main Menu:**
- Home
- Services
  - Website Design
  - Social Media
  - SEO Services
  - PPC Advertising
- Work (Case Studies)
- About
- Contact

---

## 📱 PART 13: MOBILE OPTIMIZATION

### Mobile Responsive Settings

1. **Appearance** → **Customize** → **Mobile**
2. Enable mobile menu
3. Test all pages on mobile view
4. Adjust font sizes if needed

---

## 🔒 PART 14: SECURITY & PERFORMANCE

### Install Security Plugin

**Wordfence Security (Free):**
1. Install from **Plugins** → **Add New**
2. Run setup wizard
3. Enable firewall

### Speed Optimization

**WP Rocket (Paid - $59) or W3 Total Cache (Free):**
1. Install caching plugin
2. Enable:
   - Page caching
   - Browser caching
   - GZIP compression
   - Minify CSS/JS
3. Test speed: https://gtmetrix.com

---

## 📞 PART 15: COMPANY INFORMATION TO UPDATE

Update these throughout the site:

**Company Details:**
- Name: **Clout Studio**
- Phone: **+91 97409 59176**
- Email: **hello@cloutstudio.co**
- WhatsApp: **+91 97409 59176**
- Address: **Roorkee, Uttarakhand 247667, India**

**Service Areas:**
Roorkee, Haridwar, Dehradun, Rishikesh, Uttarakhand, India

---

## ✅ CHECKLIST - COMPLETE THIS LIST

- [ ] WordPress installed on Hostinger
- [ ] Astra Pro theme purchased & installed
- [ ] All plugins installed & activated
- [ ] Custom CSS added for gradient titles
- [ ] Colors configured (Blue #2563EB, Orange #F97316)
- [ ] Fonts added (Syne for headings, DM Sans for body)
- [ ] Home page created with all sections
- [ ] Services page created
- [ ] About page created
- [ ] Work/Case Studies page created
- [ ] Contact page created with form
- [ ] Contact Form 7 configured
- [ ] WhatsApp button added
- [ ] Google Analytics connected
- [ ] Meta Pixel connected
- [ ] SEO settings configured
- [ ] Navigation menu created
- [ ] Mobile responsive tested
- [ ] SSL certificate active
- [ ] All forms tested
- [ ] Site speed optimized

---

## 🎯 ESTIMATED TIME

- **Theme purchase & install:** 15 minutes
- **Plugin installation:** 15 minutes
- **Design configuration:** 30 minutes
- **Page creation:** 2-3 hours
- **Forms & integrations:** 30 minutes
- **Testing & optimization:** 30 minutes

**Total: 4-5 hours for complete setup**

---

## 🆘 NEED HELP?

If you get stuck:

1. **Astra Theme Docs:** https://wpastra.com/docs/
2. **Elementor Tutorials:** https://elementor.com/academy/
3. **Contact Form 7 Guide:** https://contactform7.com/docs/
4. **Hostinger Support:** Available 24/7 in your control panel

---

## 📤 NEXT STEP

**Purchase Astra Pro theme:**
https://wpastra.com/pricing/

Then follow this guide step by step!

---

**Your new WordPress site will match your current design with:**
✅ White background
✅ Blue-to-orange gradient titles
✅ All services and case studies
✅ Working contact forms
✅ Mobile responsive
✅ Analytics tracking
✅ SEO optimized

Good luck! 🚀
