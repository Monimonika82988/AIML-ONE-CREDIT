# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🎯 Pre-Deployment Checklist

- [ ] All assets (profile.jpg, resume, certificates) are in place
- [ ] Ran `npm run build` successfully
- [ ] Tested the production build locally: `npm run preview`
- [ ] All links are working (GitHub, LinkedIn, email)
- [ ] Contact form tested
- [ ] Site looks good on mobile, tablet, and desktop
- [ ] Contact information is updated

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Advantages:**
- Free tier available
- Automatic deployments on git push
- CDN included
- Easy custom domain

**Steps:**

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign up/Log in with GitHub
4. Click "New Project"
5. Select your portfolio repository
6. Click "Deploy"
7. Your site is live!

**Custom Domain:**
- Settings → Domains → Add domain
- Update DNS records as shown

### Option 2: Netlify

**Advantages:**
- Free tier with generous limits
- Easy deployment
- Built-in form handling available

**Steps:**

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose GitHub
5. Select your repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Click "Deploy"

**Environment Variables** (if needed):
- Settings → Build & Deploy → Environment

### Option 3: GitHub Pages

**Advantages:**
- Free hosting for GitHub users
- Simple setup
- No credit card required

**Steps:**

1. Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',  // Replace with your repo name
  // ... rest of config
});
```

2. Add deployment script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git push"
}
```

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Go to repository Settings
5. Navigate to Pages
6. Set source to "Deploy from a branch"
7. Select `gh-pages` branch
8. Save

### Option 4: AWS Amplify

**Advantages:**
- Good for larger projects
- Scalable
- Various AWS integrations

**Steps:**

1. Push to GitHub
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click "New app" → "Host web app"
4. Choose GitHub
5. Authorize and select repository
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Save and deploy"

### Option 5: Traditional Hosting (Shared/VPS)

**General Steps:**

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder contents to your hosting server via:
   - FTP/SFTP
   - SSH/SCP
   - File manager

3. Point domain to your hosting server
4. Set up HTTPS (usually automatic with modern hosts)

**Example with FTP:**
```bash
# Connect to server
ftp your-domain.com

# Navigate to public_html
cd public_html

# Upload dist folder contents
put dist/*
```

## 🔗 Post-Deployment Setup

### Update Contact Links

After deployment, test all links work:

1. **Email links**: Click and verify email client opens
2. **Phone links**: Click and verify phone app opens
3. **GitHub link**: Verify profile page loads
4. **LinkedIn link**: Verify profile page loads
5. **Download button**: Test resume downloads
6. **Certificate buttons**: Test view/download works

### Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from [Google Analytics](https://analytics.google.com)
2. Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

Update `public/index.html` meta tags:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="AI, Python, Developer, Portfolio">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-domain.com/assets/profile.jpg">
```

## 🔐 Security Checklist

- [ ] Removed sensitive information from code
- [ ] No API keys or credentials committed
- [ ] HTTPS enabled (automatic on modern platforms)
- [ ] Contact form doesn't expose email in source code
- [ ] Assets are optimized (images compressed, files gzipped)

## 📊 Performance Optimization

### Image Optimization

1. Compress profile image:
```bash
# Using online tool
# compress.com or similar
```

2. Or use ImageMagick:
```bash
convert profile.jpg -quality 80 profile-optimized.jpg
```

### Build Optimization

The build is already optimized by Vite with:
- Code splitting
- Minification
- CSS optimization
- Asset optimization

Check build size:
```bash
npm run build
# Check dist/ folder size
```

## 🚨 Troubleshooting Deployment

### Site shows 404 errors

- Check build path in deployment settings
- Ensure `dist` folder is published
- Verify all assets paths are correct

### Assets (images, PDFs) not loading

- Check file paths start with `/assets/`
- Verify files exist in `public/assets/`
- Check deployment copied `public/` contents

### Styling looks broken

- Clear browser cache
- Check CSS file is loaded
- Verify no CSS file size limits exceeded

### Contact form not working

- Verify email client opens on click
- Check console for JavaScript errors
- For advanced form handling, use Formspree or similar

## 📈 After Launch

1. **Monitor Performance**:
   - Check site speed on [PageSpeed Insights](https://pagespeed.web.dev/)
   - Monitor traffic via Google Analytics
   - Check deployment logs for errors

2. **Regular Maintenance**:
   - Update projects quarterly
   - Add new certifications when earned
   - Update experience/internships
   - Keep dependencies updated: `npm update`

3. **Feedback**:
   - Test links monthly
   - Check mobile responsiveness
   - Get feedback from others

## 🎓 Sample Deployment Workflow

```bash
# 1. Make changes
# 2. Commit changes
git add .
git commit -m "Update portfolio with new project"

# 3. Push to GitHub
git push origin main

# 4. Deployment platform automatically:
# - Pulls latest code
# - Runs npm install
# - Runs npm run build
# - Deploys dist folder
# - Updates your live site

# Done! Changes live within minutes
```

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **Vite Docs**: https://vitejs.dev

---

**Your portfolio is ready to launch! 🎉**
