# Quick Start - Vercel Deployment

## 🎯 TL;DR (Total Time: ~15 minutes)

### Prerequisites
- [ ] GitHub account with repo pushed
- [ ] Vercel account created
- [ ] All environment variables ready

### 3 Quick Steps

#### 1. Deploy Backend
```yaml
Go to: vercel.com/dashboard
Click: Add New → Project
Root: ./backend
Env Vars: Copy from backend/.env
Deploy! ✅
```
**Save Backend URL** (e.g., `https://your-api.vercel.app`)

#### 2. Deploy Frontend
```yaml
Click: Add New → Project
Root: ./frontend
Env Var: VITE_BACKEND_URL=<your-api.vercel.app>
Deploy! ✅
```

#### 3. Deploy Admin
```yaml
Click: Add New → Project
Root: ./admin
Env Var: VITE_BACKEND_URL=<your-api.vercel.app>
Deploy! ✅
```

---

## ✅ Done! Your URLs:
- **Backend**: `https://your-api.vercel.app`
- **Frontend**: `https://your-frontend.vercel.app`
- **Admin**: `https://your-admin.vercel.app`

---

## 📋 Environment Variables Needed

**Backend (.env):**
```
MONGODB_URI=mongodb+srv://...
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_SECRET_KEY=...
JWT_SECRET=your_secret
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=azerty123
STRIPE_SECRET_KEY=sk_test_...
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
```

**Frontend & Admin:**
```
VITE_BACKEND_URL=https://your-api.vercel.app
```

---

## 🔗 Useful Links
- [Vercel Dashboard](https://vercel.com/dashboard)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary Dashboard](https://cloudinary.com/console)
- Full Guide: See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🆘 Quick Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails | Check Vercel logs, ensure deps in package.json |
| MongoDB error | Allow 0.0.0.0/0 in MongoDB Atlas |
| Blank page | Check browser console, verify VITE_BACKEND_URL |
| CORS error | Already configured in server.js |
| Can't login to admin | Verify ADMIN_EMAIL and ADMIN_PASSWORD |

---

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed instructions!
