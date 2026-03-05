# CLOUT STUDIO - DESIGN SPECIFICATIONS
## Quick Reference for WordPress Theme Setup

---

## 🎨 COLOR PALETTE

### Primary Colors
```
Blue:    #2563EB  (RGB: 37, 99, 235)
Orange:  #F97316  (RGB: 249, 115, 22)
```

### Background Colors
```
White:       #FFFFFF  (Main background)
Gray-50:     #F9FAFB  (Alternating sections)
Gray-100:    #F3F4F6  (Subtle backgrounds)
```

### Text Colors
```
Black:       #000000  (Main text - PURE BLACK)
Gray-600:    #4B5563  (Secondary text)
Gray-500:    #6B7280  (Disabled/placeholder)
```

### Border & UI Colors
```
Gray-200:    #E5E7EB  (Borders, dividers)
Blue Light:  #3B82F6  (Hover states)
Orange Light: #FB923C  (Accents)
```

### Gradient
```
Gradient (Blue to Orange):
linear-gradient(135deg, #2563EB 0%, #F97316 100%)
```

---

## 📝 TYPOGRAPHY

### Font Families

**Headings (H1-H6):**
- Font: **Syne**
- Source: Google Fonts
- Weights: 700 (Bold), 800 (Extra Bold)
- Import: `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');`

**Body Text:**
- Font: **DM Sans**
- Source: Google Fonts
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Import: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');`

**Monospace (Optional):**
- Font: **JetBrains Mono**
- Source: Google Fonts
- Weight: 400 (Regular)
- Import: `@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');`

### Font Sizes

**Desktop:**
- H1: 72px (4.5rem)
- H2: 48px (3rem)
- H3: 36px (2.25rem)
- H4: 24px (1.5rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

**Mobile:**
- H1: 36px (2.25rem)
- H2: 30px (1.875rem)
- H3: 24px (1.5rem)
- H4: 20px (1.25rem)
- Body: 16px (1rem)
- Small: 14px (0.875rem)

---

## 🔲 SPACING SYSTEM

```
4px   → 0.25rem
8px   → 0.5rem
12px  → 0.75rem
16px  → 1rem
24px  → 1.5rem
32px  → 2rem
48px  → 3rem
64px  → 4rem
96px  → 6rem
```

**Section Padding:**
- Desktop: 96px (top/bottom)
- Mobile: 64px (top/bottom)

**Container Max Width:**
- 1280px (80rem)

---

## 🎯 BUTTON STYLES

### Primary Button (CTA)
```css
Background: linear-gradient(135deg, #2563EB 0%, #F97316 100%)
Color: #FFFFFF
Padding: 16px 32px
Border-radius: 8px
Font-weight: 700
Text-transform: uppercase
Transition: all 0.3s ease

Hover:
  transform: translateY(-2px)
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3)
```

### Secondary Button
```css
Background: transparent
Border: 2px solid #2563EB
Color: #2563EB
Padding: 16px 32px
Border-radius: 8px
Font-weight: 700

Hover:
  Background: #2563EB
  Color: #FFFFFF
```

---

## 📦 CARD DESIGN

### Service Card
```css
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 8px
Padding: 24px
Transition: all 0.3s ease

Hover:
  Border-color: #2563EB
  Box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1)
  Transform: translateY(-4px)
```

### Icon Background (Gradient Circle)
```css
Width: 64px
Height: 64px
Background: linear-gradient(135deg, #2563EB 0%, #F97316 100%)
Border-radius: 8px
Display: flex
Align-items: center
Justify-content: center
Color: #FFFFFF
```

---

## 🔤 TEXT STYLES

### Gradient Title
```css
background: linear-gradient(135deg, #2563EB 0%, #F97316 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
font-family: 'Syne', sans-serif;
font-weight: 700;
```

### Body Text
```css
color: #000000;
font-family: 'DM Sans', sans-serif;
line-height: 1.6;
```

### List Items (Orange Bullets)
```css
ul li::marker {
  color: #F97316;
}

/* Or use custom bullets */
ul li::before {
  content: "•";
  color: #F97316;
  font-weight: bold;
  margin-right: 8px;
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile:     0px - 767px
Tablet:     768px - 1023px
Desktop:    1024px+
Large:      1280px+
```

---

## 🖼️ IMAGE RECOMMENDATIONS

### Hero Section
- Format: JPG or WebP
- Size: 1920x1080px
- Compression: 80%

### Service Icons
- Format: SVG (preferred) or PNG
- Size: 64x64px

### Case Study Thumbnails
- Format: JPG
- Size: 800x600px (4:3 ratio)
- Compression: 85%

### Team Photos
- Format: JPG
- Size: 400x400px (square)
- Compression: 85%

---

## ✨ ANIMATION GUIDELINES

### Transition Timing
```
Fast:     150ms
Normal:   300ms
Slow:     500ms

Easing: ease-in-out or cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Effects
- Cards: translateY(-4px) + shadow
- Buttons: translateY(-2px) + shadow
- Links: color change only

### Scroll Animations
- Fade in + slide up (30px)
- Duration: 0.6s
- Stagger delay: 0.1s per item

---

## 🎨 SHADOW SYSTEM

```
Small:  0 2px 4px rgba(0, 0, 0, 0.1)
Medium: 0 4px 6px rgba(0, 0, 0, 0.1)
Large:  0 10px 30px rgba(0, 0, 0, 0.1)
Hover:  0 10px 25px rgba(37, 99, 235, 0.3)
```

---

## 📋 FORMS

### Input Fields
```css
Background: #FFFFFF
Border: 1px solid #E5E7EB
Border-radius: 8px
Padding: 12px 16px
Font-size: 16px
Color: #000000

Focus:
  Border-color: #2563EB
  Outline: none
  Box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1)
```

### Labels
```css
Font-size: 14px
Font-weight: 500
Color: #000000
Margin-bottom: 8px
```

### Required Indicator
```css
Color: #F97316
Content: " *"
```

---

## 🌐 BROWSER SUPPORT

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

---

## ✅ ACCESSIBILITY

### Color Contrast Ratios
- Text on White: Must be #000000 (21:1 ratio) ✅
- White on Blue: Passes WCAG AA ✅
- White on Orange: Passes WCAG AA ✅

### Focus States
All interactive elements must have visible focus states (use outline or box-shadow)

### Alt Text
All images must have descriptive alt text

---

## 📞 CONTACT INFORMATION

**Company:** Clout Studio
**Phone:** +91 97409 59176
**Email:** hello@cloutstudio.co
**WhatsApp:** +91 97409 59176
**Address:** Roorkee, Uttarakhand 247667, India

**Service Areas:**
Roorkee, Haridwar, Dehradun, Rishikesh, Uttarakhand, India

---

## 🔗 TRACKING IDs

**Google Analytics:** `G-C0EYWY6QQ8`
**Meta Pixel:** `344294245`

---

## 🎯 BRAND VOICE

**Tone:**
- Confident
- Direct
- Professional
- Local (mention Uttarakhand naturally)
- Results-focused

**Avoid:**
- Jargon
- Fluff
- Over-promising
- Generic claims

**Focus On:**
- Outcomes (leads, revenue, growth)
- Local credibility
- Real results
- Transparency

---

Copy these specifications when setting up your WordPress theme!
