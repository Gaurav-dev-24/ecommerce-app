#!/bin/bash

# 🚀 E-Commerce App - Vercel Deployment Checklist

echo "═══════════════════════════════════════════════════════════"
echo "  🚀 VERCEL DEPLOYMENT CHECKLIST"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_item() {
    local item="$1"
    echo -e "${YELLOW}❓${NC} $item"
    read -p "   ✓ Done? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${GREEN}✅${NC} Completed"
    else
        echo -e "${RED}❌${NC} Pending"
    fi
    echo ""
}

echo -e "${YELLOW}PRE-DEPLOYMENT CHECKS:${NC}"
echo ""

check_item "1. GitHub repository created and code pushed"
check_item "2. .env file created in backend/ with all credentials"
check_item "3. Verified MongoDB Atlas allows 0.0.0.0/0 IP"
check_item "4. Cloudinary credentials are valid"
check_item "5. Stripe/Razorpay test keys are correct"
check_item "6. All dependencies installed locally"
check_item "7. Application runs locally without errors"
check_item "8. Vercel account created"
check_item "9. GitHub connected to Vercel account"

echo ""
echo "═══════════════════════════════════════════════════════════"
echo -e "${GREEN}DEPLOYMENT STEPS:${NC}"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "1️⃣  Deploy Backend:"
echo "   • Go to https://vercel.com/dashboard"
echo "   • Click 'Add New' → 'Project'"
echo "   • Select your GitHub repo"
echo "   • Set Root Directory: ./backend"
echo "   • Add all environment variables"
echo "   • Click Deploy"
echo "   • Copy Backend URL"
echo ""
echo "2️⃣  Deploy Frontend:"
echo "   • Click 'Add New' → 'Project'"
echo "   • Select same repo"
echo "   • Set Root Directory: ./frontend"
echo "   • Add: VITE_BACKEND_URL=<backend-url>"
echo "   • Click Deploy"
echo "   • Copy Frontend URL"
echo ""
echo "3️⃣  Deploy Admin:"
echo "   • Click 'Add New' → 'Project'"
echo "   • Select same repo"
echo "   • Set Root Directory: ./admin"
echo "   • Add: VITE_BACKEND_URL=<backend-url>"
echo "   • Click Deploy"
echo "   • Copy Admin URL"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo -e "${GREEN}VERIFICATION:${NC}"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "curl https://<backend-url>/"
echo "# Should show: API WORKING"
echo ""
echo "Visit https://<frontend-url> in browser"
echo "Visit https://<admin-url> in browser"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo -e "${GREEN}🎉 ALL DONE!${NC}"
echo "═══════════════════════════════════════════════════════════"
