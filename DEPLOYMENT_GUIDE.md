# Production Deployment & Hosting Guide
**Project:** Lawyer & Legal Advisory Static Landing Page  
**Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React

---

## Overview

This guide explains how to prepare, deploy, connect a custom domain to, and maintain your static lawyer landing page on **Vercel** or **Netlify**. Both platforms offer free tiers, automatic SSL (HTTPS), global CDN delivery, and zero server maintenance.

---

## 1. Pre-Deployment Preparation Checklist

Before deploying your website to the public internet, ensure the following steps are completed:

1. **Insert Real Lawyer Information:**
   - Open `src/data/siteContent.js`.
   - Replace all `[CONTENT REQUIRED]` placeholders with real lawyer information (name, title, firm name, biography, bar admission, office address, phone number, email address, office hours, and consultation guarantees).
   - Follow the detailed instructions in [CONTENT_GUIDE.md](file:///C:/Users/jahed/Documents/project/lawliet/CONTENT_GUIDE.md).

2. **Update Metadata & Domain Placeholders:**
   - In `src/data/siteContent.js`: Update `canonicalUrl: "https://yourdomain.com"`.
   - In `index.html`: Update:
     - `<link rel="canonical" href="https://yourdomain.com/" />`
     - `<meta property="og:url" content="https://yourdomain.com/" />`
     - Schema.org JSON-LD: `"url": "https://yourdomain.com"`, `"name"`, `"telephone"`, `"email"`, `"streetAddress"`.
   - In `public/robots.txt`: Update `Sitemap: https://yourdomain.com/sitemap.xml`.

3. **Verify Local Production Build:**
   Run the following command in your terminal:
   ```bash
   npm run build
   ```
   Ensure the output ends with `✓ built in ...` and creates a clean `dist/` directory with exit code 0.

4. **Preview the Build Locally:**
   ```bash
   npm run preview
   ```
   Open `http://localhost:4173/` in your browser to verify that the compiled production bundle renders correctly.

---

## 2. Uploading the Project to GitHub

Both Vercel and Netlify integrate directly with GitHub to provide automated continuous deployment (every git push automatically deploys your site).

### Step 2.1: Initialize Git Repository
Open a terminal in `C:\Users\jahed\Documents\project\lawliet` and run:

```bash
# 1. Initialize git repository
git init

# 2. Stage all project files (node_modules and dist are excluded by .gitignore)
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Production-ready lawyer landing page"
```

### Step 2.2: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Name your repository (e.g., `lawyer-landing-page`).
4. Keep the repository **Private** (or Public according to your preference).
5. **Do not** check "Initialize with README", .gitignore, or license (these already exist locally).
6. Click **Create repository**.

### Step 2.3: Push Code to GitHub
Copy the commands shown on GitHub:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

---

## 3. Deploying to Vercel (Recommended Option 1)

Vercel provides native first-party support for Vite applications. A pre-configured `vercel.json` file is already included in your project root.

### Step 3.1: Connect Vercel to GitHub
1. Go to [vercel.com](https://vercel.com/) and create a free account or sign in with your GitHub account.
2. From your Vercel Dashboard, click **Add New...** > **Project**.
3. Under **Import Git Repository**, find your `lawyer-landing-page` repository and click **Import**.

### Step 3.2: Confirm Build Settings
Vercel automatically detects Vite. Verify that the settings match:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
*(No environment variables are needed)*

### Step 3.3: Deploy
1. Click **Deploy**.
2. Within 30 to 60 seconds, Vercel will build your static website and provide a free live URL (e.g., `https://lawyer-landing-page.vercel.app`).
3. Click the preview card to open your live website.

---

## 4. Deploying to Netlify (Recommended Option 2)

Netlify provides global edge distribution and automatic SSL. A pre-configured `netlify.toml` file is already included in your project root.

### Step 4.1: Connect Netlify to GitHub
1. Go to [netlify.com](https://www.netlify.com/) and sign up or log in with your GitHub account.
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** as your Git provider and authorize Netlify.
4. Select your `lawyer-landing-page` repository.

### Step 4.2: Confirm Build Settings
Netlify will automatically read `netlify.toml`:
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
*(No environment variables are needed)*

### Step 4.3: Deploy
1. Click **Deploy site**.
2. Netlify will compile and publish your site with a free subdomain (e.g., `https://amazing-lawyer-site.netlify.app`).

---

## 5. Connecting a Custom Domain

Once your site is deployed, connect your professional domain (e.g., `www.yourlawoffice.com`).

### On Vercel:
1. In your project dashboard, go to **Settings** > **Domains**.
2. Type your domain name (e.g., `yourlawoffice.com`) and click **Add**.
3. Vercel will ask you to add DNS records at your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace, etc.):
   - **Apex domain (`yourlawoffice.com`):** A Record pointing to `76.76.21.21`
   - **Subdomain (`www.yourlawoffice.com`):** CNAME Record pointing to `cname.vercel-dns.com`
4. DNS verification and SSL certificate issuance typically complete within 5 to 30 minutes.

### On Netlify:
1. In your site dashboard, go to **Site configuration** > **Domain management**.
2. Click **Add a domain** and enter your domain name.
3. Add the DNS records provided by Netlify at your registrar:
   - **Apex domain (`yourlawoffice.com`):** A Record pointing to `75.2.60.5`
   - **Subdomain (`www.yourlawoffice.com`):** CNAME Record pointing to your Netlify site URL (e.g., `your-site.netlify.app`)
4. Netlify will automatically provision a free Let's Encrypt SSL certificate.

---

## 6. Information That Must Be Updated Before Official Launch

Ensure all of the following items are verified and populated:

| File | Field / Tag | What to Replace |
|---|---|---|
| `src/data/siteContent.js` | `lawyer.name` | Real attorney name |
| `src/data/siteContent.js` | `lawyer.title` | Official bar titles & designations |
| `src/data/siteContent.js` | `lawyer.firmName` | Registered firm or practice name |
| `src/data/siteContent.js` | `about.intro` | Real attorney biography and background |
| `src/data/siteContent.js` | `qualifications.items` | Verified law school, bar admission, and licenses |
| `src/data/siteContent.js` | `achievements.metrics` | Verified milestone numbers or years in practice |
| `src/data/siteContent.js` | `testimonials.items` | Real client reviews with names and authorization |
| `src/data/siteContent.js` | `contact.phone` & `phoneRaw` | Office phone number (e.g. `"+12125550199"`) |
| `src/data/siteContent.js` | `contact.email` & `emailRaw` | Official inquiry email (e.g. `"counsel@office.com"`) |
| `src/data/siteContent.js` | `contact.address` | Real physical office address |
| `src/data/siteContent.js` | `footer.copyrightNotice` | Firm name in copyright line |
| `index.html` | `<link rel="canonical">` | Add `<link rel="canonical" href="https://yourdomain.com/">` when live domain is ready |
| `index.html` | `<meta property="og:url">` | Add `<meta property="og:url" content="https://yourdomain.com/">` when live domain is ready |
| `index.html` | Schema.org JSON-LD | Add `"url": "https://yourdomain.com"` and real name, phone, email, and address |
| `public/robots.txt` | `Sitemap:` | Real live domain URL |

---

## 7. How to Update the Website After Deployment

Whenever you need to update phone numbers, biographies, office hours, or images in the future:

1. **Edit Content:**
   - Open `src/data/siteContent.js` and edit the relevant text or import paths.
   - For images, save the new file in `src/assets/images/lawyer/` or `src/assets/images/general/`.

2. **Test Locally:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy the Changes:**
   Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update office hours and contact phone"
   git push origin main
   ```

4. **Automatic Publication:**
   Vercel and Netlify will automatically detect the new commit, re-run `npm run build`, and publish your updated website within ~45 seconds without any manual server intervention or downtime.
