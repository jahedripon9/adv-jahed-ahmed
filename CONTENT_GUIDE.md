# Lawyer Landing Page: Content Editing & Asset Guide

Welcome! This guide explains how to update all information, text, images, credentials, and contact details on your website. 

You do **not** need to touch any complex React component code. All content on this website is controlled from a single file:  
`src/data/siteContent.js`

> [!IMPORTANT]
> **Example Notice:**  
> All sample values shown in this guide (such as "Jane Doe, Esq." or "+1 555 123 4567") are **purely fictional examples** created for instruction. Replace them with the lawyer's real, verified legal information before publishing.

---

## Table of Contents

1. [The Single File that Controls Everything](#1-the-single-file-that-controls-everything)
2. [Updating Lawyer Name & Professional Title](#2-updating-lawyer-name--professional-title)
3. [Updating the Biography & Qualifications](#3-updating-the-biography--qualifications)
4. [Adding, Editing, or Removing Practice Areas](#4-adding-editing-or-removing-practice-areas)
5. [Updating Achievements & Statistics](#5-updating-achievements--statistics)
6. [Updating Client Testimonials](#6-updating-client-testimonials)
7. [Replacing the Lawyer's Photograph](#7-replacing-the-lawyers-photograph)
8. [Updating Phone, Email & Office Address](#8-updating-phone-email--office-address)
9. [Updating Social & Professional Links](#9-updating-social--professional-links)
10. [Adding a New Image & Referencing Its Path](#10-adding-a-new-image--referencing-its-path)
11. [How to Run and Verify Your Changes](#11-how-to-run-and-verify-your-changes)

---

## 1. The Single File that Controls Everything

Open this file in your text editor:  
`src/data/siteContent.js`

Inside `siteContent.js`, all content is organized into logical sections:
* `siteInfo`: Website tab title, description, and branding.
* `navigation`: Navigation menu links and button text.
* `lawyer`: Lawyer's name, title, firm name, and status badge.
* `hero`: Main headline, intro subtitle, and button labels.
* `about`: Professional biography, core pillars, and legal philosophy.
* `qualifications`: Law degrees, bar admissions, and certifications.
* `practiceAreas`: Legal services (title, description, icon).
* `achievements`: Metrics and statistics (years, matters, clients).
* `testimonials`: Client feedback and endorsements.
* `contact`: Phone numbers, email, physical office address, and hours.
* `footer`: Disclaimer text, copyright, and navigation links.
* `socialLinks`: LinkedIn, Bar Directory, or other profiles.

---

## 2. Updating Lawyer Name & Professional Title

In `src/data/siteContent.js`, find the `lawyer` section:

```javascript
// BEFORE (Placeholder):
lawyer: {
  name: "[CONTENT REQUIRED: Lawyer Name]",
  title: "[CONTENT REQUIRED: Legal Consultant & Attorney]",
  firmName: "[CONTENT REQUIRED: Law Office Name]",
  badgeText: "Admitted to the Bar • Confidential Consultations",
  tagline: "Strategic Legal Counsel & Rigorous Advocacy"
}

// AFTER EXAMPLE (Fictional illustration only):
lawyer: {
  name: "Sarah Jenkins, Esq.",
  title: "Principal Corporate Attorney & Legal Consultant",
  firmName: "Jenkins Legal Group",
  badgeText: "Admitted to New York Bar • Confidential Consultations",
  tagline: "Strategic Legal Counsel & Rigorous Commercial Advocacy"
}
```

Updating `lawyer.name` and `lawyer.title` will automatically update the Header, Hero Nameplate card, Floating Badges, and Footer simultaneously!

---

## 3. Updating the Biography & Qualifications

### Biography (in `about`):
```javascript
about: {
  intro: "With over 15 years of focused advocacy, Sarah Jenkins provides strategic counsel...",
  paragraphs: [
    "Every client matter receives partner-level dedication and rigorous legal preparation.",
    "We specialize in mitigating corporate liabilities and negotiating high-value commercial agreements."
  ],
  creedQuote: "Anticipating legal liability is always more effective than reacting to disputes."
}
```

### Qualifications & Bar Admissions (in `qualifications`):
To add or update degrees and licenses, edit the `items` list:

```javascript
qualifications: {
  cardTitle: "Qualifications & Bar Admissions",
  cardSubtitle: "Verified educational pedigree and licensed jurisdictions.",
  items: [
    {
      title: "Juris Doctor (J.D.)",
      institution: "Columbia Law School",
      status: "Graduated Magna Cum Laude"
    },
    {
      title: "State Bar Admission",
      institution: "New York State Unified Court System",
      status: "Active & in Good Standing"
    }
  ]
}
```

---

## 4. Adding, Editing, or Removing Practice Areas

In `siteContent.js`, find `practiceAreas.items`. Each card is a self-contained block:

```javascript
practiceAreas: {
  items: [
    {
      id: "corporate",
      title: "Corporate Governance & Contracts",
      description: "Guiding enterprises through entity formation, shareholder agreements, and compliance.",
      icon: "Briefcase" // Supported icons: 'Briefcase', 'Shield', 'FileText', 'Scale'
    },
    {
      id: "ip",
      title: "Intellectual Property & Licensing",
      description: "Protecting proprietary software, trademarks, trade secrets, and content rights.",
      icon: "Shield"
    }
    // You can delete cards or add new ones by copying the format above!
  ]
}
```

---

## 5. Updating Achievements & Statistics

In `siteContent.js`, find `achievements.metrics`. When you have verified real case numbers:

```javascript
achievements: {
  metrics: [
    {
      value: "15+", // Shown in small accent badge
      fallbackNumber: "15", // Shown in giant bold font
      label: "Years in Practice",
      detail: "Continuous professional advocacy and corporate advisory"
    },
    {
      value: "450+",
      fallbackNumber: "450+",
      label: "Matters Handled",
      detail: "Commercial transactions, regulatory filings, and dispute settlements"
    },
    {
      value: "120+",
      fallbackNumber: "120+",
      label: "Corporate Retainers",
      detail: "Companies and private entities represented as outside counsel"
    }
  ]
}
```

---

## 6. Updating Client Testimonials

In `siteContent.js`, find `testimonials.items`. To add a verified client quote:

```javascript
testimonials: {
  items: [
    {
      id: 1,
      title: "Exceptional Corporate Strategy",
      quote: "Sarah guided our tech acquisition with incredible precision. Her diligence saved us months of negotiation.",
      clientName: "David Miller",
      clientRole: "CEO, Acme Technologies",
      caseType: "Corporate Acquisition"
    }
  ]
}
```

---

## 7. Replacing the Lawyer's Photograph

1. Prepare your new photograph:
   * **Format:** Transparent PNG or WebP with background removed.
   * **Recommended Dimensions:** ~800px wide × 1000px high (portrait orientation).
2. Save your image into the folder:  
   `src/assets/images/lawyer/my-new-portrait.png`
3. Open `src/data/siteContent.js`. At the top of the file, update the import line:
   ```javascript
   // Change:
   import lawyerPortraitImage from '../assets/images/lawyer/lawyer-portrait.png';
   
   // To your new filename:
   import lawyerPortraitImage from '../assets/images/lawyer/my-new-portrait.png';
   ```
4. Save the file. The hero portrait updates immediately!

---

## 8. Updating Phone, Email & Office Address

In `siteContent.js`, find the `contact` section:

```javascript
contact: {
  phoneButtonText: "Call Now",
  emailButtonText: "Send Confidential Email",
  
  // Displayed readable text:
  phone: "+1 (212) 555-0199",
  // Actual dialer string (no dashes or spaces for international format):
  phoneRaw: "+12125550199",
  
  // Displayed email address:
  email: "counsel@jenkinslaw.com",
  // Raw email for direct mail client trigger:
  emailRaw: "counsel@jenkinslaw.com",
  
  address: "650 Fifth Avenue, Suite 1800, New York, NY 10020",
  officeHours: "Monday – Friday: 9:00 AM – 6:00 PM (By Appointment)"
}
```

> [!TIP]
> **Safety Feature:** If you leave `phoneRaw: ""` and `emailRaw: ""` blank, the website buttons will safely scroll to `#contact` without creating broken or invalid links.

---

## 9. Updating Social & Professional Links

In `siteContent.js`, find `socialLinks`:

```javascript
socialLinks: [
  {
    platform: "LinkedIn",
    label: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/your-lawyer-profile"
  },
  {
    platform: "Bar Registry",
    label: "Official State Bar Registry",
    url: "https://www.nycourts.gov/attorneys/"
  }
]
```

---

## 10. Adding a New Image & Referencing Its Path

All images are stored in organized subfolders in `src/assets/images/`:
* `src/assets/images/lawyer/` (Cutout portraits and headshots)
* `src/assets/images/general/` (Office photos, consultation settings, graphics)
* `src/assets/images/practice-areas/` (Optional custom service icons or photos)
* `src/assets/images/testimonials/` (Optional client avatar headshots)

To use any new image:
1. Copy your image file into the appropriate folder above.
2. Open `src/data/siteContent.js`.
3. Import the image at the top of the file:
   ```javascript
   import myOfficePhoto from '../assets/images/general/new-office-photo.jpg';
   ```
4. Assign `myOfficePhoto` to the target property (for example `contact.image: myOfficePhoto`).

---

## 11. How to Run and Verify Your Changes

Open your terminal or command prompt in the project root directory (`lawliet`):

### 1. Start the Live Preview Development Server:
```bash
npm run dev
```
Open `http://localhost:3000/` (or the port displayed in your terminal) in your browser to view your live changes.

### 2. Build for Production:
```bash
npm run build
```
This command compiles your optimized static website into the `dist/` directory, ready to be uploaded to any web host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or standard Apache/Nginx web server).

---
*End of Content Guide. Keep this file handy whenever you need to update website information.*
