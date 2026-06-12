# GharKhoj.com.np

**Nepal's Trusted Property Search Platform**

A fully static, mobile-first property listing site for Nepal. Built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — deploys instantly to GitHub Pages.

---

## ✅ Setup Checklist (Before Going Live)

| Step | What to do | Where |
|------|-----------|-------|
| 1 | **Contact form** — Get a free Formspree endpoint at [formspree.io](https://formspree.io) and paste your Form ID | `pages/contact.html` → search `YOUR_FORMSPREE_ID` |
| 2 | **Google Analytics** — Create a GA4 property at [analytics.google.com](https://analytics.google.com) and paste your Measurement ID | All HTML files → search `G-XXXXXXXXXX` |
| 3 | **Admin password** — Change `gharkhoj2025` to something strong | `pages/admin.html` → search `ADMIN_PASS` |
| 4 | **WhatsApp number** — Update the contact number in the contact page | `pages/contact.html` → `wa.me/9779800000000` |
| 5 | **Firebase** — Already configured with your project (`gharkhoj-cf8c7`). Enable Firestore in Firebase console | [Firebase Console](https://console.firebase.google.com) |
| 6 | **Domain** — Point your .com.np domain to GitHub Pages | GitHub repo → Settings → Pages |

---

## 🗂️ Project Structure

```
gharkhoj/
├── index.html              # Homepage
├── css/
│   └── style.css           # Full design system
├── js/
│   └── core.js             # i18n, data loading, shared components
├── data/
│   └── listings.json       # All property listings
├── pages/
│   ├── listings.html       # Browse + filter all properties
│   ├── property.html       # Single property detail
│   ├── submit.html         # Post a free listing
│   ├── about.html          # About GharKhoj
│   ├── contact.html        # Contact form
│   ├── privacy.html        # Privacy policy
│   └── terms.html          # Terms of service
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-deploy to GitHub Pages
```

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub repository
1. Go to [github.com/new](https://github.com/new)
2. Name it `gharkhoj` (or anything you like)
3. Set it to **Public**
4. Don't initialize with README

### Step 2: Push the code
```bash
cd gharkhoj
git init
git add .
git commit -m "Initial commit — GharKhoj v1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gharkhoj.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will auto-deploy on every push

### Step 4: Custom Domain (optional)
1. In **Settings → Pages**, add your custom domain (e.g. `gharkhoj.com.np`)
2. Create a `CNAME` file in the root with your domain:
   ```
   gharkhoj.com.np
   ```
3. At your domain registrar, set DNS:
   - `A` records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record: `www` → `YOUR_USERNAME.github.io`

---

## ✏️ Adding Real Listings

Edit `data/listings.json`. Each listing follows this schema:

```json
{
  "id": 9,
  "title": "2BHK Flat in Thamel",
  "title_np": "थमेलमा २BHK फ्ल्याट",
  "type": "flat",
  "purpose": "rent",
  "price": 22000,
  "price_label": "Rs 22,000/mo",
  "city": "Kathmandu",
  "district": "Kathmandu",
  "location": "Thamel",
  "area": "1100 sq.ft",
  "bedrooms": 2,
  "bathrooms": 2,
  "description": "...",
  "description_np": "...",
  "features": ["Parking", "Furnished"],
  "contact": "+977-98XXXXXXXX",
  "whatsapp": "98XXXXXXXX",
  "images": ["https://..."],
  "verified": true,
  "featured": false,
  "posted": "2025-06-11",
  "lat": 27.7172,
  "lng": 85.3100
}
```

**`type`** options: `room`, `flat`, `house`, `land`, `commercial`  
**`purpose`** options: `rent`, `buy`

---

## 🌐 Bilingual Support

The site supports English and Nepali toggle via the nav. To add translations, edit the `i18n` object in `js/core.js`. Property titles and descriptions support dual-language via `title_np` and `description_np` fields.

---

## 🔥 Firebase Setup (Phase 2 — Real Backend)

✅ **Good news: your Firebase credentials are already filled in** inside
`js/firebase-services.js` (project: `gharkhoj-cf8c7`). You only need to
turn on one switch in the Firebase Console — no code editing required.

### Step 1: Enable Firestore Database
1. Go to [console.firebase.google.com](https://console.firebase.google.com) → open project **gharkhoj-cf8c7**
2. Left sidebar → **Build → Firestore Database**
3. Click **Create database**
4. Choose **Start in test mode** → click Next
5. Select region **asia-south1 (Mumbai)** → **Enable**

That's it — Firebase is live. Test it:
- Go to `yoursite.com/pages/submit.html` and submit a test listing
- Go to `yoursite.com/pages/admin.html`, log in (password `gharkhoj2025`), approve it
- It should now appear on `yoursite.com/pages/listings.html`

### 📸 About Photos
GharKhoj does **not** use Firebase Storage (it requires a paid plan).
Instead, the submit form asks users to paste **image URLs**. Recommended
free image hosts for users to upload photos and get a direct link:
- [imgbb.com](https://imgbb.com) — no signup needed
- [postimages.org](https://postimages.org) — no signup needed

Up to 5 photo URLs per listing. The form previews each image live as
the user pastes the link.

### Step 2: Seed initial listings (optional)
To move your 8 sample listings from JSON into Firestore so they show
on the live site too:
1. In Firebase Console → **Firestore Database** → **Start collection**
2. Name it `listings`
3. For each entry in `data/listings.json`, click **Add document**, use
   auto-ID, and add each field with matching name/type, plus add a field
   `status` = `approved` (string) to each one.

*(This is manual but only needs doing once — after that, all new
listings flow through the submit form → admin panel automatically.)*

### Step 3: Change Admin Password
Open `pages/admin.html`, find this line near the top of the script:
```javascript
const ADMIN_PASS = "gharkhoj2025"; // ← CHANGE THIS
```
Replace `"gharkhoj2025"` with your own password, save, and push to GitHub.

### Step 4: (Recommended, do within first week) Tighten security rules
Test mode allows open read/write for 30 days, then locks everything.
To deploy proper rules permanently:
```bash
npm install -g firebase-tools
firebase login
firebase init firestore   # select project gharkhoj-cf8c7
firebase deploy --only firestore:rules
```
This uses the `firestore.rules` file already included in this project.

---

## 🐛 Troubleshooting

**"Listings page shows old/sample data even after approving in admin"**
- Open browser console (F12) on the listings page. If you see an error
  mentioning "index" or "requires an index", click the link inside that
  error — it takes you straight to Firebase Console to auto-create the
  needed index. Takes ~2 minutes to build, then refresh.

**"Submit form doesn't save / admin panel shows error"**
- Make sure Firestore Database is enabled (Step 1 above)
- Check you're in **test mode** (not locked rules) — test mode expires
  after 30 days from creation, after which you must run Step 4

**"Links go to pages/pages/... and 404"**
- Already fixed in this version — `js/core.js` now auto-detects whether
  it's running from the root or from `/pages/` and builds correct links.
  If you still see this, make sure you replaced the ENTIRE `js/core.js`
  file with this version (not just part of it).

**"Photo doesn't show on listing"**
- Make sure the URL is a *direct image link* ending in `.jpg`/`.png`/etc,
  not a page link. On imgbb, right-click the image after upload and
  choose "Copy image address" — don't copy the page URL.

---

## 🛠️ Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts — Hind (supports Devanagari + Latin)
- Unsplash for placeholder images
- GitHub Pages for hosting

No build tools. No npm. No frameworks. Just files.
