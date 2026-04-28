
# 🚀 LIVE DEPLOYMENT GUIDE - VERCEL DASHBOARD STEPS

**Status**: Your GitHub is connected to Vercel ✅  
**Go-Live Time**: 15 minutes ⏱️  
**Copy-Paste Ready**: YES ✅

---

## 📋 YOUR ENVIRONMENT VARIABLES (READY TO PASTE)

### Backend Environment Variables (10 variables)

📌 **Copy these values from your backend/.env file:**

```
MONGODB_URI = [COPY_FROM_YOUR_ENV]
CLOUDINARY_API_KEY = [COPY_FROM_YOUR_ENV]
CLOUDINARY_SECRET_KEY = [COPY_FROM_YOUR_ENV]
CLOUDINARY_NAME = [COPY_FROM_YOUR_ENV]
JWT_SECRET = [COPY_FROM_YOUR_ENV]
ADMIN_EMAIL = [COPY_FROM_YOUR_ENV]
ADMIN_PASSWORD = [COPY_FROM_YOUR_ENV]
STRIPE_SECRET_KEY = [COPY_FROM_YOUR_ENV]
RAZORPAY_KEY_ID = [COPY_FROM_YOUR_ENV]
RAZORPAY_KEY_SECRET = [COPY_FROM_YOUR_ENV]
```

⚠️ **DO NOT commit these values to GitHub!**  
Store them safely in Vercel dashboard only.

---

## 🎯 DEPLOYMENT STEPS (FOLLOW EXACTLY)

### STEP 1️⃣ DEPLOY BACKEND (3 min)

**1. Go to**: https://vercel.com/dashboard

**2. Click**: "Add New" → "Project"

**3. Select Repository**: 
   - Click "ecommerce-app" (your GitHub repo)

**4. Configure Project**:
   - **Project Name**: `ecommerce-backend`
   - **Framework Preset**: Other
   - **Root Directory**: `./backend`
   - **Build Command**: `npm install`
   - **Output Directory**: Leave empty

**5. Click**: "Environment Variables" ⬇️

**6. Add These 10 Variables** (Copy from your backend/.env):

| Variable | Value |
|----------|-------|
| MONGODB_URI | [Copy from your backend/.env] |
| CLOUDINARY_NAME | [Copy from your backend/.env] |
| CLOUDINARY_API_KEY | [Copy from your backend/.env] |
| CLOUDINARY_SECRET_KEY | [Copy from your backend/.env] |
| JWT_SECRET | [Copy from your backend/.env] |
| ADMIN_EMAIL | [Copy from your backend/.env] |
| ADMIN_PASSWORD | [Copy from your backend/.env] |
| STRIPE_SECRET_KEY | [Copy from your backend/.env] |
| RAZORPAY_KEY_ID | [Copy from your backend/.env] |
| RAZORPAY_KEY_SECRET | [Copy from your backend/.env] |

**7. Click**: "Deploy" 🚀

**⏳ Wait ~3 minutes for deployment**

**📌 COPY THIS URL** (will look like):
```
https://ecommerce-backend-abc123.vercel.app
```

---

### STEP 2️⃣ DEPLOY FRONTEND (3 min)

**1. Back to Dashboard**: https://vercel.com/dashboard

**2. Click**: "Add New" → "Project"

**3. Select Repository**: Same repo ("ecommerce-app")

**4. Configure Project**:
   - **Project Name**: `ecommerce-frontend`
   - **Framework Preset**: Vite
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

**5. Click**: "Environment Variables" ⬇️

**6. Add This 1 Variable**:

| Variable | Value |
|----------|-------|
| VITE_BACKEND_URL | **Paste the Backend URL from STEP 1** |

Example: `https://ecommerce-backend-abc123.vercel.app`

**7. Click**: "Deploy" 🚀

**⏳ Wait ~3 minutes for deployment**

**📌 Note Frontend URL** (will look like):
```
https://ecommerce-frontend-def456.vercel.app
```

---

### STEP 3️⃣ DEPLOY ADMIN (3 min)

**1. Back to Dashboard**: https://vercel.com/dashboard

**2. Click**: "Add New" → "Project"

**3. Select Repository**: Same repo ("ecommerce-app")

**4. Configure Project**:
   - **Project Name**: `ecommerce-admin`
   - **Framework Preset**: Vite
   - **Root Directory**: `./admin`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

**5. Click**: "Environment Variables" ⬇️

**6. Add This 1 Variable**:

| Variable | Value |
|----------|-------|
| VITE_BACKEND_URL | **Same Backend URL from STEP 1** |

**7. Click**: "Deploy" 🚀

**⏳ Wait ~3 minutes for deployment**

**📌 Note Admin URL** (will look like):
```
https://ecommerce-admin-ghi789.vercel.app
```

---

## ✅ TESTING (2 min)

### Test Backend
```bash
curl https://your-backend-url.vercel.app/
```
Expected: `API WORKING`

### Test Frontend
- Open: `https://your-frontend-url.vercel.app`
- Should load products
- Try adding to cart

### Test Admin
- Open: `https://your-admin-url.vercel.app`
- Login: `admin@forever.com` / `azerty123`
- Try adding a product

---

## 📊 FINAL URLS (Save These!)

```
🔌 BACKEND:  https://ecommerce-backend-abc123.vercel.app
🎨 FRONTEND: https://ecommerce-frontend-def456.vercel.app
🛠️  ADMIN:     https://ecommerce-admin-ghi789.vercel.app
```

---

## ⏱️ TIMELINE

| Step | Time | Cumulative |
|------|------|-----------|
| 1. Deploy Backend | 3 min | 3 min |
| 2. Deploy Frontend | 3 min | 6 min |
| 3. Deploy Admin | 3 min | 9 min |
| 4. Test & Verify | 2 min | 11 min |

**Total**: ~11 minutes ⏱️

---

## 🎉 YOU'RE DONE!

All 3 services live on production! 🚀

Next: Share your URLs and celebrate! 🎊

