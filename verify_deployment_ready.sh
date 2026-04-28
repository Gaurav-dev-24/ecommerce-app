#!/bin/bash

# 🚀 VERCEL DEPLOYMENT VERIFICATION SCRIPT
# This script helps you verify everything is ready for Vercel deployment

set -e

echo ""
echo "════════════════════════════════════════════════════════════"
echo "  🚀 VERCEL DEPLOYMENT READINESS CHECK"
echo "════════════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

passed=0
failed=0

check_file() {
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $description"
        ((passed++))
    else
        echo -e "${RED}❌${NC} $description (MISSING: $file)"
        ((failed++))
    fi
}

check_content() {
    local file=$1
    local pattern=$2
    local description=$3
    
    if grep -q "$pattern" "$file" 2>/dev/null; then
        echo -e "${GREEN}✅${NC} $description"
        ((passed++))
    else
        echo -e "${RED}❌${NC} $description"
        ((failed++))
    fi
}

# Check configuration files
echo -e "${BLUE}📋 CONFIGURATION FILES${NC}"
echo "───────────────────────────────────────────────────────────"
check_file "vercel.json" "Root vercel.json exists"
check_file "backend/vercel.json" "Backend vercel.json exists"
check_file "frontend/vercel.json" "Frontend vercel.json exists"
check_file "admin/vercel.json" "Admin vercel.json exists"
echo ""

# Check environment templates
echo -e "${BLUE}🔑 ENVIRONMENT TEMPLATES${NC}"
echo "───────────────────────────────────────────────────────────"
check_file ".env.example" "Root .env.example exists"
check_file "backend/.env.example" "Backend .env.example exists"
check_file "frontend/.env.example" "Frontend .env.example exists"
check_file "admin/.env.example" "Admin .env.example exists"
echo ""

# Check documentation
echo -e "${BLUE}📚 DOCUMENTATION${NC}"
echo "───────────────────────────────────────────────────────────"
check_file "DEPLOYMENT.md" "Complete deployment guide"
check_file "QUICK_START.md" "Quick start guide"
check_file "DEPLOYMENT_SUMMARY.md" "Deployment summary"
check_file "DEPLOYMENT_CARD.md" "Deployment checklist card"
check_file "DEPLOYMENT_FILES_INDEX.md" "Files index"
echo ""

# Check code configuration
echo -e "${BLUE}⚙️  CODE CONFIGURATION${NC}"
echo "───────────────────────────────────────────────────────────"
check_content "frontend/src/context/ShopContext.jsx" "VITE_BACKEND_URL" "Frontend uses environment variable"
check_content "admin/src/App.jsx" "VITE_BACKEND_URL" "Admin uses environment variable"
check_content "backend/server.js" "cors()" "Backend has CORS configured"
echo ""

# Check package.json files
echo -e "${BLUE}📦 BUILD CONFIGURATION${NC}"
echo "───────────────────────────────────────────────────────────"
check_content "backend/package.json" "\"start\"" "Backend has start script"
check_content "frontend/package.json" "\"build\"" "Frontend has build script"
check_content "admin/package.json" "\"build\"" "Admin has build script"
echo ""

# Check gitignore
echo -e "${BLUE}🔐 SECURITY${NC}"
echo "───────────────────────────────────────────────────────────"
check_content ".gitignore" ".env" ".gitignore excludes .env files"
check_content ".gitignore" "node_modules" ".gitignore excludes node_modules"
echo ""

# Summary
echo "════════════════════════════════════════════════════════════"
echo -e "${BLUE}SUMMARY${NC}"
echo "════════════════════════════════════════════════════════════"
total=$((passed + failed))
echo ""
echo -e "Total Checks:    $total"
echo -e "${GREEN}Passed:${NC}         $passed ✅"
if [ $failed -gt 0 ]; then
    echo -e "${RED}Failed:${NC}         $failed ❌"
else
    echo -e "${GREEN}Failed:${NC}         $failed ✅"
fi
echo ""

if [ $failed -eq 0 ]; then
    echo "════════════════════════════════════════════════════════════"
    echo -e "${GREEN}🎉 ALL CHECKS PASSED!${NC}"
    echo "════════════════════════════════════════════════════════════"
    echo ""
    echo "✅ Your project is ready for Vercel deployment!"
    echo ""
    echo "👉 Next steps:"
    echo "   1. Read: QUICK_START.md"
    echo "   2. Gather: All environment variables"
    echo "   3. Go to: https://vercel.com/dashboard"
    echo "   4. Deploy: Following DEPLOYMENT_CARD.md"
    echo ""
    echo "⏱️  Estimated deployment time: 15 minutes"
    echo ""
else
    echo "════════════════════════════════════════════════════════════"
    echo -e "${YELLOW}⚠️  SOME CHECKS FAILED${NC}"
    echo "════════════════════════════════════════════════════════════"
    echo ""
    echo "Check the failed items above and ensure:"
    echo "• All configuration files exist"
    echo "• All documentation files are present"
    echo "• Code properly uses environment variables"
    echo ""
fi

echo ""
echo "For more help, see: DEPLOYMENT_FILES_INDEX.md"
echo ""
