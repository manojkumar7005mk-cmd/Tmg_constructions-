# 🏗️ TMG Construction — Premium Business Website

A modern, fully responsive construction company website built for **Er. T. Velmurugan** of **TMG Construction**, Theni, Tamil Nadu.

---

## 📁 Project Structure

```
TMG-Website/
├── tmg-index.html      → Main HTML file (all sections & structure)
├── tmg-style.css       → All styles (variables, layout, animations, responsive)
├── tmg-script.js       → All JavaScript (interactions, animations, form)
└── README.md           → This file
```

> ⚠️ All 3 files must be kept in the **same folder** for the site to work correctly.

---

## 🌐 Live Preview

Simply open `tmg-index.html` in any modern browser — no setup or server required.

---

## 🏢 Business Info

| Field        | Details                                      |
|--------------|----------------------------------------------|
| Company      | TMG Construction                             |
| Engineer     | Er. T. Velmurugan                            |
| Qualification| DCE · BE · Licensed Engineer                 |
| Phone        | 6381674603 / 8508786388                      |
| Email        | Velutharmar@gmail.com                        |
| Address      | Vaigai Road, K.Vilaku, Theni – 625512        |
| WhatsApp     | +91 6381674603                               |

---

## 📄 Sections

| # | Section       | Description                                              |
|---|---------------|----------------------------------------------------------|
| 1 | **Hero**      | Full-screen banner with heading, subtext & CTA buttons   |
| 2 | **About**     | Company story, engineer profile & credential card        |
| 3 | **Services**  | 4 service cards — Model Plan, Approval, Estimate, Contract |
| 4 | **Projects**  | Gallery grid with hover zoom effect                      |
| 5 | **Contact**   | Contact details, Google Maps embed & enquiry form        |
| 6 | **Footer**    | Brand info, quick links, services list & social icons    |

---

## ✨ Features

### Design
- 🎨 Ultra-modern **dark theme** — Black, Red (`#e82127`), White, Grey
- 🪟 **Glassmorphism** cards with `backdrop-filter` blur
- 🌈 Gradient overlays and glowing red accent effects
- 🔲 Animated background grid in hero section

### Animations & Interactions
- ⏳ **Page loading screen** with animated progress bar
- 🖱️ **Custom cursor** — red dot + ring with smooth lag effect
- 📜 **Scroll reveal** animations — fade up, left, right on scroll
- 🔢 **Animated counters** — stats count up when in view
- 💥 **Ripple click effect** on all primary buttons
- 🎯 **Hover effects** on service cards, gallery items & nav links

### Navigation
- 📌 **Sticky navbar** — transparent → frosted glass on scroll
- 🍔 **Hamburger mobile menu** — fullscreen overlay with smooth open/close
- ⬆️ **Scroll-to-top button** — appears after scrolling 400px

### Utility
- 💬 **Floating WhatsApp button** — pre-filled message, bouncing animation
- 📋 **Contact form** — with loading state & success message
- 🗺️ **Google Maps embed** — Theni location with dark filter
- 🪪 **Credential card** — shows engineer's DCE · BE · Licensed Engineer info

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes                                   |
|------------|--------------------------------------------------|
| `≤ 1100px` | Services → 2 columns, About gap reduced          |
| `≤ 900px`  | About → single column, Contact → single column   |
| `≤ 768px`  | Hamburger menu active, Stats wrap to 2×2         |
| `≤ 600px`  | Credential card → stacked vertically             |
| `≤ 500px`  | Services → 1 column, Gallery → 1 column          |

---

## 🛠️ Technologies Used

| Technology        | Usage                              |
|-------------------|------------------------------------|
| HTML5             | Semantic structure & layout        |
| CSS3              | Styling, animations, glassmorphism |
| Vanilla JavaScript| All interactions & animations      |
| Google Fonts      | Bebas Neue + Poppins               |
| Font Awesome 6.5  | All icons                          |
| Google Maps Embed | Location map in contact section    |
| Unsplash Images   | Placeholder project photos         |

> No frameworks, no build tools, no dependencies — pure HTML/CSS/JS.

---

## 🚀 Deployment Guide

### Option 1 — Open Locally
1. Download all 4 files into one folder
2. Double-click `tmg-index.html` — opens in browser instantly

### Option 2 — cPanel / Web Hosting
1. Log in to your hosting cPanel
2. Open **File Manager** → navigate to `public_html/`
3. Upload all 3 files (`tmg-index.html`, `tmg-style.css`, `tmg-script.js`)
4. Rename `tmg-index.html` → `index.html`
5. Visit your domain — site is live ✅

### Option 3 — GitHub Pages (Free Hosting)
```bash
git init
git add .
git commit -m "TMG Construction website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tmg-construction.git
git push -u origin main
```
Then enable **GitHub Pages** in repo Settings → Pages → Branch: main.

---

## ✏️ Customisation Guide

### Change Accent Color
In `tmg-style.css`, update the root variables:
```css
:root {
  --red: #e82127;       /* Main accent — change to any color */
  --red-dark: #b01519;  /* Hover/dark variant */
}
```

### Update Phone / Email / Address
In `tmg-index.html`, search and replace:
- `6381674603` → your phone
- `Velutharmar@gmail.com` → your email
- `K.Vilaku, Theni – 625512` → your address

### Update WhatsApp Number
In `tmg-index.html` and `tmg-style.css`, update:
```html
href="https://wa.me/916381674603?text=..."
```
Replace `916381674603` with `91` + your 10-digit number.

### Replace Gallery Images
Find `gallery-item` blocks in `tmg-index.html` and replace the `src` URLs with your own project photo URLs or local image paths.

---

## 📞 Contact & Credits

**Client:** TMG Construction, Theni, Tamil Nadu  
**Engineer:** Er. T. Velmurugan — DCE · BE · Licensed Engineer  
**Built with:** HTML · CSS · JavaScript  
**Year:** 2026

---

*© 2026 TMG Construction. All rights reserved.*
