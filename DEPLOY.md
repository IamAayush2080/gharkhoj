# 🚀 How to Deploy GharKhoj to GitHub Pages (Free)

## The ONE thing most people get wrong
Push the **contents** of the `gharkhoj/` folder — NOT the folder itself.

```bash
# ✅ CORRECT — your repo root looks like:
index.html
pages/
css/
js/
data/
.github/

# ❌ WRONG — your repo root looks like:
gharkhoj/
  index.html
  pages/
  ...
```

---

## Step-by-Step

### 1. Create a GitHub repository
- Go to [github.com/new](https://github.com/new)
- Name it `gharkhoj` (or anything you like)
- Set it to **Public** ← required for free GitHub Pages
- Do NOT initialize with README (you'll push your own files)

### 2. Push the code
```bash
# Extract the zip, then navigate INTO the gharkhoj/ folder
cd gharkhoj

git init
git add .
git commit -m "Initial GharKhoj launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` handles the rest automatically

### 4. Your site is live!
- URL: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
- Every push to `main` branch auto-deploys

---

## Before going live — Setup Checklist

### Contact Form (Formspree — Free)
1. Go to [formspree.io](https://formspree.io) → Sign up free
2. Create a new form → Copy your Form ID (looks like `xpwzgkla`)
3. In `pages/contact.html`, find `YOUR_FORMSPREE_ID` and replace with your ID
4. Free plan: 50 submissions/month (enough to start)

### Google Analytics (Free)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property → Get your **Measurement ID** (looks like `G-ABC123XYZ`)
3. Find `G-XXXXXXXXXX` in all HTML files and replace with your real ID

### Admin Password
1. Open `pages/admin.html`
2. Find `const ADMIN_PASS = "gharkhoj2025"`
3. Change to a strong password before deploying!

### Firebase (for live listing submissions)
Your Firebase project (`gharkhoj-cf8c7`) is already configured.
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Enable **Firestore Database** in test mode
3. Deploy your `firestore.rules` file

### Custom Domain (.com.np)
1. In GitHub Pages settings → Add your domain
2. Point your DNS: `CNAME www → YOUR_USERNAME.github.io`
3. Enable **Enforce HTTPS** checkbox

---

## Free Tools Used
| Tool | What for | Cost |
|------|---------|------|
| GitHub Pages | Hosting | Free |
| Formspree | Contact form emails | Free (50/month) |
| Firebase Firestore | Property listing database | Free (Spark plan) |
| OpenStreetMap | Property location maps | Free forever |
| Google Analytics | Traffic tracking | Free |
| Cloudflare | CDN + speed (optional) | Free |

**Total monthly cost: Rs 0** 🎉
