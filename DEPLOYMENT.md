# 🚀 Vercel Deployment Guide

This guide will help you deploy the full-stack E-Commerce application on Vercel.

---

## 📋 Prerequisites

- [Vercel Account](https://vercel.com) - Free tier available
- [GitHub Account](https://github.com) with your repository
- Environment variables ready (check `.env.example`)
- Git installed locally

---

## 🔑 Required Environment Variables

### Backend (MongoDB, Cloudinary, Payments)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=azerty123
STRIPE_SECRET_KEY=sk_test_xxxx
RAZORPAY_KEY_ID=rzp_test_xxxx
RAZORPAY_KEY_SECRET=xxxx
```

### Frontend & Admin (API Connection)
```
VITE_BACKEND_URL=https://your-backend-api.vercel.app
```

---

## 📝 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All code is committed to GitHub
- [ ] `.env` file contains all valid credentials
- [ ] MongoDB Atlas allows connections from any IP (0.0.0.0/0)
- [ ] Cloudinary API credentials are valid
- [ ] Payment API keys (Stripe/Razorpay) are correct

---

## 🔧 Step-by-Step Deployment

### Step 1: Push to GitHub

```bash
# Navigate to project root
cd Ecommerce-APP

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Setup for Vercel deployment"

# Push to GitHub (adjust branch name if needed)
git branch -M main
git remote add origin https://github.com/yourusername/ecommerce-app.git
git push -u origin main
```

---

### Step 2: Deploy Backend API 🖥️

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. **Import Git Repository** → Select your repository
4. Configure Project:
   - **Project Name**: `ecommerce-backend` (or your choice)
   - **Framework Preset**: Other
   - **Root Directory**: `./backend`

5. Click **"Environment Variables"** and add:
   ```
   MONGODB_URI = mongodb+srv://...
   CLOUDINARY_NAME = your_name
   CLOUDINARY_API_KEY = your_key
   CLOUDINARY_SECRET_KEY = your_secret
   JWT_SECRET = your_secret
   ADMIN_EMAIL = admin@forever.com
   ADMIN_PASSWORD = azerty123
   STRIPE_SECRET_KEY = sk_test_...
   RAZORPAY_KEY_ID = rzp_test_...
   RAZORPAY_KEY_SECRET = your_secret
   ```

6. Click **"Deploy"** 🚀
7. **Copy your Backend URL** (e.g., `https://ecommerce-backend.vercel.app`)

---

### Step 3: Deploy Frontend 🎨

1. Click **"Add New"** → **"Project"** (in Vercel dashboard)
2. **Import Git Repository** → Select same repository
3. Configure Project:
   - **Project Name**: `ecommerce-frontend`
   - **Framework Preset**: Vite
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**:
   ```
   VITE_BACKEND_URL = https://ecommerce-backend.vercel.app
   ```
   (Use the Backend URL from Step 2)

5. Click **"Deploy"** 🚀
6. **Copy your Frontend URL** (will be provided after deploy)

---

### Step 4: Deploy Admin Panel 🛠️

1. Click **"Add New"** → **"Project"**
2. **Import Git Repository** → Select same repository
3. Configure Project:
   - **Project Name**: `ecommerce-admin`
   - **Framework Preset**: Vite
   - **Root Directory**: `./admin`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**:
   ```
   VITE_BACKEND_URL = https://ecommerce-backend.vercel.app
   ```

5. Click **"Deploy"** 🚀
6. **Copy your Admin URL**

---

## 🔗 Final Setup

After all three deployments, you'll have three URLs:
- **Backend**: `https://ecommerce-backend.vercel.app`
- **Frontend**: `https://ecommerce-frontend.vercel.app`
- **Admin**: `https://ecommerce-admin.vercel.app`

**Update Frontend/Admin locally (optional):**

```bash
# frontend/.env.local
VITE_BACKEND_URL=https://ecommerce-backend.vercel.app

# admin/.env.local
VITE_BACKEND_URL=https://ecommerce-backend.vercel.app
```

Then redeploy frontend and admin (Vercel will auto-deploy if you push to GitHub).

---

## ✅ Testing Your Deployment

### Test Backend API:
```bash
curl https://ecommerce-backend.vercel.app/
# Should respond: "API WORKING"
```

### Test Frontend:
- Visit `https://ecommerce-frontend.vercel.app`
- Try browsing products, adding to cart, logging in

### Test Admin:
- Visit `https://ecommerce-admin.vercel.app`
- Login with: `admin@forever.com` / `azerty123`
- Try adding a product

---

## 🐛 Common Issues & Fixes

### ❌ "Cannot find module" errors
**Fix**: Clear cache and redeploy
```bash
# In Vercel: Settings → Advanced → Clear Cache → Redeploy
```

### ❌ CORS Errors
**Fix**: Ensure backend CORS is configured properly
Update `backend/server.js`:
```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*"
}))
```

### ❌ MongoDB Connection Fails
**Fix**: 
- Verify `MONGODB_URI` is correct
- In MongoDB Atlas: Security → Network Access → Add IP 0.0.0.0/0

### ❌ Blank Frontend Page
**Fix**:
- Check browser DevTools Console for errors
- Verify `VITE_BACKEND_URL` is set
- Clear browser cache: Ctrl+Shift+Delete

### ❌ Payment Gateway Errors
**Fix**:
- Verify Stripe/Razorpay keys are correct test keys
- Ensure webhooks are configured if using callbacks

---

## 🔄 Automatic Redeployment

Every time you push to GitHub, Vercel automatically redeploys:

```bash
git add .
git commit -m "Your change"
git push origin main
# Vercel will automatically rebuild and deploy!
```

---

## 📊 Monitor Your Deployments

- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- View logs, analytics, and error reports
- Set up Slack/Email notifications for deployment status

---

## 🎉 You're Live!

Congratulations! Your e-commerce app is now live on Vercel! 🚀

**Next Steps:**
- [ ] Share your live links
- [ ] Set up custom domain (optional)
- [ ] Configure Analytics
- [ ] Monitor error logs regularly

---

## 📞 Support

For issues:
1. Check Vercel deployment logs
2. Review environment variables
3. Test locally: `npm run dev` in each folder
4. Check MongoDB/Cloudinary/Payment provider dashboards

