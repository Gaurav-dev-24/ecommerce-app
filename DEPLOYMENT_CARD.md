# 🎯 VERCEL DEPLOYMENT - CHECKLIST CARD

Print this or keep it open while deploying!

---

## 📋 BEFORE YOU START

- [ ] All code pushed to GitHub
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Credentials ready (MongoDB, Cloudinary, Stripe, Razorpay)

---

## 🔧 DEPLOYMENT WORKFLOW

### PART 1: BACKEND DEPLOYMENT ⏱️ ~3 min

**URL to visit**: [vercel.com/dashboard](https://vercel.com/dashboard)

1. **Click** "Add New" → "Project"
2. **Select** your GitHub repository
3. **Root Directory**: `./backend`
4. **Click** "Environment Variables"
5. **Add these 10 variables** (copy from backend/.env):

| Variable | Value |
|----------|-------|
| MONGODB_URI | `mongodb+srv://...` |
| CLOUDINARY_NAME | `your_name` |
| CLOUDINARY_API_KEY | `your_key` |
| CLOUDINARY_SECRET_KEY | `your_secret` |
| JWT_SECRET | `your_secret` |
| ADMIN_EMAIL | `admin@forever.com` |
| ADMIN_PASSWORD | `azerty123` |
| STRIPE_SECRET_KEY | `sk_test_...` |
| RAZORPAY_KEY_ID | `rzp_test_...` |
| RAZORPAY_KEY_SECRET | `your_secret` |

6. **Click** "Deploy"
7. **⏳ WAIT** for deployment to complete
8. **📌 COPY** the Backend URL
   ```
   Backend URL: ____________________________
   ```

---

### PART 2: FRONTEND DEPLOYMENT ⏱️ ~3 min

1. **Click** "Add New" → "Project"
2. **Select** same repository
3. **Root Directory**: `./frontend`
4. **Click** "Environment Variables"
5. **Add 1 variable**:
   ```
   VITE_BACKEND_URL = [Paste Backend URL above]
   ```
6. **Click** "Deploy"
7. **🎨 Frontend URL will appear here:**
   ```
   Frontend URL: ____________________________
   ```

---

### PART 3: ADMIN DEPLOYMENT ⏱️ ~3 min

1. **Click** "Add New" → "Project"
2. **Select** same repository
3. **Root Directory**: `./admin`
4. **Click** "Environment Variables"
5. **Add 1 variable**:
   ```
   VITE_BACKEND_URL = [Same Backend URL as Part 2]
   ```
6. **Click** "Deploy"
7. **🛠️ Admin URL will appear here:**
   ```
   Admin URL: ____________________________
   ```

---

## ✅ VERIFICATION

### After all 3 deployments complete:

- [ ] **Test Backend**: `curl https://<backend-url>/` → Should see "API WORKING"
- [ ] **Test Frontend**: Open `https://<frontend-url>` → Should load
  - [ ] Can browse products?
  - [ ] Can login?
  - [ ] Can add to cart?
- [ ] **Test Admin**: Open `https://<admin-url>` → Should load
  - [ ] Can login with `admin@forever.com` / `azerty123`?
  - [ ] Can add products?
  - [ ] Can view orders?

---

## 📎 YOUR DEPLOYMENT URLS

```
🔌 BACKEND:  https://____________________________
🎨 FRONTEND: https://____________________________
🛠️  ADMIN:     https://____________________________
```

---

## 🆘 QUICK TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Build fails | Check Vercel logs → Dependencies in package.json |
| Blank page | Check browser console (F12) → Clear cache |
| API errors | Verify VITE_BACKEND_URL in Environment Variables |
| MongoDB fails | Allow 0.0.0.0/0 in MongoDB Atlas Network Access |
| Can't login | Check ADMIN_EMAIL and ADMIN_PASSWORD variables |

---

## 📞 HELP

- Stuck? Check: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Quick ref: [QUICK_START.md](./QUICK_START.md)
- Details: [DEPLOYMENT_SUMMARY.md](./DEPLOYMENT_SUMMARY.md)

---

**Total Time**: ~10-15 minutes
**Difficulty**: Easy ✅
**Status**: Ready for deployment ➡️ GO!
