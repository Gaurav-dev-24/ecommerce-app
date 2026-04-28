
# ✅ DEPLOYMENT CHECKLIST - TICK OFF AS YOU GO

Print this or open in another tab while deploying!

---

## 🎯 BACKEND DEPLOYMENT

```
STEP 1: Open Vercel Dashboard
  ☐ Go to: https://vercel.com/dashboard
  ☐ Logged in? (if not, login now)

STEP 2: Add New Project
  ☐ Click: "Add New" button
  ☐ Click: "Project"
  ☐ Selected repo: ecommerce-app ✓

STEP 3: Configuration
  ☐ Project Name: ecommerce-backend
  ☐ Framework: Other
  ☐ Root Directory: ./backend
  ☐ Build Command: npm install

STEP 4: Environment Variables (Add 10)
  ☐ MONGODB_URI = (copy from guide)
  ☐ CLOUDINARY_NAME = dnv3q7rlq
  ☐ CLOUDINARY_API_KEY = 939959386285581
  ☐ CLOUDINARY_SECRET_KEY = _RkrydTjyJ_D9qxk5WcDk7jtR30
  ☐ JWT_SECRET = Gaurav_24
  ☐ ADMIN_EMAIL = admin@forever.com
  ☐ ADMIN_PASSWORD = azerty123
  ☐ STRIPE_SECRET_KEY = (copy from guide)
  ☐ RAZORPAY_KEY_ID = rzp_test_aXAK2TF6u5OMnI
  ☐ RAZORPAY_KEY_SECRET = HF5Ap7vPAtHtHlTdcJ32ahGR

STEP 5: Deploy
  ☐ Click: "Deploy"
  ☐ Wait 3 minutes
  ☐ Deployment complete ✅
  ☐ COPY BACKEND URL: ___________________________
```

---

## 🎨 FRONTEND DEPLOYMENT

```
STEP 1: Back to Dashboard
  ☐ https://vercel.com/dashboard

STEP 2: Add New Project
  ☐ Click: "Add New" → "Project"
  ☐ Select repo: ecommerce-app

STEP 3: Configuration
  ☐ Project Name: ecommerce-frontend
  ☐ Framework: Vite
  ☐ Root Directory: ./frontend
  ☐ Build Command: npm run build
  ☐ Output Directory: dist

STEP 4: Environment Variables (Add 1)
  ☐ VITE_BACKEND_URL = <paste Backend URL from above>

STEP 5: Deploy
  ☐ Click: "Deploy"
  ☐ Wait 3 minutes
  ☐ Deployment complete ✅
  ☐ Frontend URL: ___________________________
```

---

## 🛠️ ADMIN DEPLOYMENT

```
STEP 1: Back to Dashboard
  ☐ https://vercel.com/dashboard

STEP 2: Add New Project
  ☐ Click: "Add New" → "Project"
  ☐ Select repo: ecommerce-app

STEP 3: Configuration
  ☐ Project Name: ecommerce-admin
  ☐ Framework: Vite
  ☐ Root Directory: ./admin
  ☐ Build Command: npm run build
  ☐ Output Directory: dist

STEP 4: Environment Variables (Add 1)
  ☐ VITE_BACKEND_URL = <same Backend URL>

STEP 5: Deploy
  ☐ Click: "Deploy"
  ☐ Wait 3 minutes
  ☐ Deployment complete ✅
  ☐ Admin URL: ___________________________
```

---

## 🧪 TESTING

```
BACKEND TEST:
  ☐ curl https://[BACKEND_URL]/
  ☐ Expected: "API WORKING" ✓

FRONTEND TEST:
  ☐ Open: https://[FRONTEND_URL]
  ☐ Products loading? ✓
  ☐ Can add to cart? ✓

ADMIN TEST:
  ☐ Open: https://[ADMIN_URL]
  ☐ Can you login? ✓
  ☐ Email: admin@forever.com
  ☐ Password: azerty123
  ☐ Can add product? ✓
```

---

## 🎉 FINAL URLS

```
BACKEND:  https://________________________________
FRONTEND: https://________________________________
ADMIN:    https://________________________________
```

---

## ⏱️ TIME TRACKING

| Step | Start | End | Status |
|------|-------|-----|--------|
| Backend Deploy | __:__ | __:__ | ☐ |
| Frontend Deploy | __:__ | __:__ | ☐ |
| Admin Deploy | __:__ | __:__ | ☐ |
| Testing | __:__ | __:__ | ☐ |

**Total Time**: _____ minutes

---

## ✨ SUCCESS CHECKLIST

- ☐ All 3 projects deployed
- ☐ Backend API responding
- ☐ Frontend loads
- ☐ Admin dashboard loads
- ☐ Can login to admin
- ☐ Tests passing

## 🎊 STATUS

- ☐ PRODUCTION READY!
- ☐ READY TO SHARE LINKS!
- ☐ READY TO CELEBRATE! 🚀

