# Setup Instructions - Quick Start Guide

Follow these steps to get your portfolio website up and running!

## ✅ Prerequisites

- **Node.js** 14+ installed (download from [nodejs.org](https://nodejs.org))
- **npm** (comes with Node.js)
- A text editor (VS Code recommended)

## 🚀 Quick Setup (5 minutes)

### Step 1: Open Terminal in Project Folder

```bash
cd "one credit"
```

### Step 2: Install Dependencies

```bash
npm install
```

This downloads all required packages (React, Vite, etc.).

**Expected output:**
```
added XXX packages in XXs
```

### Step 3: Add Your Assets

Create the assets folder and add your files:

```
public/
└── assets/
    ├── profile.jpg              ← Add your profile photo here
    ├── Monika_R_Resume.pdf      ← Add your resume here
    └── certificates/            ← Add certificate PDFs here
        ├── nptel_ai_ml.pdf
        ├── guvi_fullstack.pdf
        ├── infosys_springboard.pdf
        └── nptel_ai_advanced.pdf
```

**Need help?** See `ASSETS_SETUP.md` for detailed asset setup instructions.

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v5.0.0  ready in XXX ms

➜  Local:   http://localhost:3000/
➜  press h to show help
```

Your browser should automatically open to `http://localhost:3000`

### Step 5: View Your Portfolio

- Website opens automatically in your default browser
- See your portfolio live with hot-reload enabled
- Changes save automatically and refresh in real-time

## 🎨 Customization Guide

### Change Your Information

Edit `src/components/Hero.jsx`:
```javascript
const name = 'Monika R';  // Change name
const roles = ['AI Enthusiast', 'Python Developer'];  // Change roles
```

Edit `src/components/Contact.jsx`:
```javascript
const email = 'monikamoni63847@gmail.com';  // Change email
const phone = '+91 9363607816';  // Change phone
```

### Update Skills

Edit `src/components/Skills.jsx`:
```javascript
const skillCategories = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 90 },  // Change skills
      // Add more...
    ],
  },
  // More categories...
];
```

### Add/Edit Projects

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'Python'],
    github: 'https://github.com/yourlink',
  },
  // Add more...
];
```

### Modify Colors

Edit `src/styles/globals.css`:
```css
:root {
  --accent-blue: #00d4ff;      /* Change blue */
  --accent-purple: #b700ff;    /* Change purple */
  --accent-pink: #ff006e;      /* Change pink */
}
```

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist` folder with your production-ready site.

Then preview it:
```bash
npm run preview
```

## 📚 File Structure Overview

```
one credit/
├── public/                       # Static files & assets
│   ├── index.html               # Main HTML file
│   └── assets/                  # Your images, PDFs, etc.
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Internships.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/                  # CSS files
│   │   ├── globals.css
│   │   ├── Navbar.css
│   │   └── ... (other CSS files)
│   ├── App.jsx                  # Main app component
│   └── index.jsx                # Entry point
├── package.json                 # Dependencies
├── vite.config.js              # Build configuration
├── README.md                    # Full documentation
├── ASSETS_SETUP.md             # Asset setup guide
├── DEPLOYMENT.md               # Deployment guide
└── SETUP_INSTRUCTIONS.md       # This file!
```

## 🔍 Testing Your Portfolio

### During Development

✓ Check navbar links scroll to correct sections
✓ Test typing animation in hero section
✓ Verify skill progress bars animate on scroll
✓ Click all project "View on GitHub" buttons
✓ Test "Download Resume" button
✓ Fill out contact form
✓ Check all social links work
✓ Test on mobile browser (right-click → Inspect → toggle device toolbar)

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Page won't load | Make sure Node.js is installed, run `npm install` |
| Assets not showing | Check files are in `public/assets/` |
| Buttons not working | Clear browser cache (Ctrl+Shift+Delete) |
| Styling looks off | Clear cache and refresh page |
| Port 3000 already in use | Run `npm run dev -- --port 3001` |

## 📱 Responsive Testing

The site is fully responsive, but test on different sizes:

**Desktop**: 1920px, 1440px, 1024px
**Tablet**: 768px
**Mobile**: 425px, 375px

**Test in browser:**
- Right-click → Inspect
- Click device toggle (📱)
- Select different devices from dropdown

## 🌐 Next Steps: Deploy Your Site

When ready to go live, see `DEPLOYMENT.md` for:
- Vercel (easiest, recommended)
- Netlify
- GitHub Pages
- AWS Amplify
- Traditional hosting

## 💡 Tips & Tricks

### Hot Reload
- Changes save automatically while dev server runs
- Refresh browser to see CSS changes instantly

### Debug in Browser
- Press F12 to open Developer Tools
- Check Console tab for errors
- Use Network tab to check file loading

### Performance
Already optimized with:
- Code splitting
- CSS minification
- JavaScript minification
- Image optimization support

### Additional Customization
- Add more sections by creating new components
- Modify animations by editing CSS in `src/styles/`
- Change layout by editing component JSX files
- Add new colors to `:root` in globals.css

## 📞 Support Resources

- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev/guide
- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript MDN**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 🎉 You're All Set!

Your modern portfolio website is ready to customize and deploy!

**Next:** 
1. Add your profile photo and resume
2. Update your information in components
3. Customize colors to your preference
4. Deploy to the web (see DEPLOYMENT.md)

## Command Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

**Happy coding! 🚀**

Questions? Check the [README](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md)
