# Lawliet — Professional Legal Practice & Advisory Landing Page

A fast, responsive, and thoughtfully crafted static landing page for advocates, attorneys, and independent law practices. Built with React 18, Vite, and Tailwind CSS.

---

## Why this project?

Most law firm websites suffer from one of two problems: they're either overloaded with complex CMS plugins and slow databases, or they're rigid templates where updating a single phone number requires digging through nested component files.

This project was built to strike the right balance:
- **100% Static & Blazingly Fast:** No backend servers, no databases, and zero maintenance overhead.
- **Centralized Content Control:** Every headline, bio, practice area, credential, testimonial, and phone number is managed from a single, cleanly documented file: [`src/data/siteContent.js`](src/data/siteContent.js).
- **Accessible & Professional:** Designed with strong typographic hierarchy, WCAG 2.1 AA accessibility standards, and clean mobile interactions.

---

## ✨ Key Features

- **🏛️ Editorial Design:** Deep navy (`#0C2B4E`) and teal accents paired with Playfair Display serif typography for an authoritative, trustworthy look.
- **📱 Fully Responsive:** Smoothly scales from small 320px mobile screens up to 1920px Full HD displays.
- **📌 Sticky Navigation & Mobile Drawer:** Persistent navigation bar with subtle elevation on scroll, plus a mobile slide-over drawer with tap-friendly touch targets (≥ 44px) and Escape key dismissal.
- **🛡️ Safe Link Handling:** Dynamic telephone (`tel:`) and email (`mailto:`) protocols that automatically fallback to smooth on-page navigation when contact details are still being finalized.
- **🔍 SEO & Schema.org Ready:** Pre-configured with meta tags, Open Graph cards, Twitter summary tags, crawler directives (`robots.txt`), and structured JSON-LD data for legal services.
- **🚀 Edge Deployment Ready:** Includes pre-tested configurations for [Vercel](vercel.json) and [Netlify](netlify.toml) with custom 404 error handling.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Playfair Display (Serif) & Inter (Sans-serif) via Google Fonts

---

## 🚀 Quick Start

Get the project running locally in under a minute:

### 1. Clone the repository
```bash
git clone https://github.com/jahedripon9/adv-jahed-ahmed.git
cd adv-jahed-ahmed
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:3000/` in your browser.

### 4. Build for production
```bash
npm run build
```
Compiles production-optimized HTML, CSS, and JS into the `dist/` directory.

### 5. Preview the production build locally
```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── public/                 # Static assets (favicon, robots.txt, 404.html)
├── src/
│   ├── assets/             # Brand logos and imagery
│   │   ├── images/general/ # Contextual photos (consultation, decorative)
│   │   └── images/lawyer/  # Attorney portrait photos
│   ├── components/common/  # Reusable UI components (Button, SectionHeading)
│   ├── data/
│   │   └── siteContent.js  # ⭐ The single file that controls all website content
│   ├── sections/           # Landing page sections (Navbar, Hero, About, etc.)
│   ├── styles/             # Global Tailwind & base typography styles
│   ├── App.jsx             # Root layout with accessibility landmarks
│   └── main.jsx            # Application entry point
├── CONTENT_GUIDE.md        # Step-by-step content editing instructions
├── DEPLOYMENT_GUIDE.md     # Production deployment & custom domain setup guide
├── netlify.toml            # Netlify deployment configuration
├── vercel.json             # Vercel deployment configuration
└── tailwind.config.js      # Custom theme colors and typography tokens
```

---

## 📝 How to Update Website Content

You don't need to touch React code or JSX to update the site. 

1. Open [`src/data/siteContent.js`](src/data/siteContent.js) in your text editor.
2. Edit the relevant section (`lawyer`, `hero`, `about`, `qualifications`, `practiceAreas`, `achievements`, `testimonials`, `contact`, or `footer`).
3. Save the file. The site updates instantly.

For an in-depth walkthrough, check out the [Content Editing Guide](CONTENT_GUIDE.md).

---

## 🌐 Deploying to Production

The project is pre-configured for 1-click deployment on modern static hosting platforms:

- **Deploy on Vercel:** Import your GitHub repo, select the Vite framework preset, and click **Deploy**.
- **Deploy on Netlify:** Connect your GitHub repo; Netlify automatically detects `netlify.toml` and publishes the `dist/` directory.

Detailed custom domain setup and DNS configuration instructions are documented in the [Deployment Guide](DEPLOYMENT_GUIDE.md).

---

## 📄 License & Attribution

Designed and developed for professional legal advisory practices. Feel free to use and customize this template for your own firm or legal practice.
