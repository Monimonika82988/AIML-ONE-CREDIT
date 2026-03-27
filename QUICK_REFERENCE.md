# 🗂️ File & Folder Quick Reference

A quick guide to understand your project structure and where to find what.

## 📂 Project Root Files

```
one credit/
├── package.json
│   └─→ Project dependencies & npm scripts
│   └─→ Edit: Add new dependencies
│   └─→ Scripts: npm run dev, npm run build
│
├── vite.config.js
│   └─→ Build tool configuration
│   └─→ Edit: Change port, output directory
│
├── .eslintrc.json
│   └─→ Code quality rules
│   └─→ Edit: Add linting rules
│
├── .gitignore
│   └─→ Files to ignore in Git
│   └─→ Standard setup (no changes needed)
│
└── README.md ← Start here for full docs!
```

## 📂 Public Folder (Static Files)

```
public/
├── index.html
│   └─→ Main HTML file served to browser
│   └─→ Edit: Title, meta tags, favicon
│
└── assets/
    ├── profile.jpg
    │   └─→ Your profile photo
    │   └─→ Add: Your photo (500x500px JPG/PNG)
    │
    ├── Monika_R_Resume.pdf
    │   └─→ Your resume for download
    │   └─→ Add: Your resume PDF
    │
    ├── favicon.png
    │   └─→ Browser tab icon (optional)
    │   └─→ Add: Your logo/icon
    │
    └── certificates/
        ├── nptel_ai_ml.pdf
        ├── guvi_fullstack.pdf
        ├── infosys_springboard.pdf
        └── nptel_ai_advanced.pdf
           └─→ Your certificate PDFs
           └─→ Add: Your certificates
```

## 📂 Source Code (src/)

### Components Folder

```
src/components/
├── App.jsx
│   └─→ Main component that combines all sections
│   └─→ Edit: Add/remove sections, change order
│
├── Navbar.jsx
│   └─→ Navigation bar with logo & menu
│   └─→ Edit: Change logo text, menu items
│
├── Hero.jsx
│   ├─→ Hero/banner section with intro
│   ├─→ Features: Typing animation, buttons
│   └─→ Edit: Name, roles, quote, buttons
│
├── About.jsx
│   ├─→ About section with background
│   ├─→ Features: Education, leadership, activities
│   └─→ Edit: Your education, roles, clubs
│
├── Skills.jsx
│   ├─→ Skills section with progress bars
│   ├─→ Features: Animated bars, categories
│   └─→ Edit: Add/remove skills, change levels
│
├── Projects.jsx
│   ├─→ Projects portfolio section
│   ├─→ Features: Cards, GitHub links
│   └─→ Edit: Add your projects
│
├── Internships.jsx
│   ├─→ Experience timeline section
│   ├─→ Features: Timeline UI, icons
│   └─→ Edit: Add your internships
│
├── Certifications.jsx
│   ├─→ Certificates section
│   ├─→ Features: Cards, view/download buttons
│   └─→ Edit: Add your certifications
│
├── Contact.jsx
│   ├─→ Contact section with form & links
│   ├─→ Features: Contact form, social links
│   └─→ Edit: Update contact information
│
└── Footer.jsx
    ├─→ Footer with links & social
    ├─→ Features: Quick navigation, social icons
    └─→ Edit: Update social links, text
```

### Styles Folder

```
src/styles/
├── globals.css
│   ├─→ Global styles for entire site
│   ├─→ Colors, animations, utilities
│   └─→ Edit for: Color changes, new animations
│
├── Navbar.css
│   └─→ Navigation styling only
│   └─→ Edit for: Menu appearance, responsiveness
│
├── Hero.css
│   ├─→ Hero section styles
│   ├─→ Animations: Typing cursor, profile glow
│   └─→ Edit for: Hero layout, animations
│
├── About.css
│   ├─→ About section styles
│   └─→ Edit for: Card styling, backgrounds
│
├── Skills.css
│   ├─→ Skills section styles
│   ├─→ Progress bars: Animation, colors
│   └─→ Edit for: Progress bar look, layout
│
├── Projects.css
│   ├─→ Projects section styles
│   ├─→ Cards: Hover effects, layout
│   └─→ Edit for: Card appearance, featured style
│
├── Internships.css
│   ├─→ Timeline styles
│   ├─→ Timeline: Line, markers, cards
│   └─→ Edit for: Timeline appearance
│
├── Certifications.css
│   ├─→ Certifications section styles
│   └─→ Edit for: Card styling, buttons
│
├── Contact.css
│   ├─→ Contact section styles
│   ├─→ Forms: Inputs, buttons, layout
│   └─→ Edit for: Form appearance
│
└── Footer.css
    ├─→ Footer styles
    └─→ Edit for: Footer appearance
```

### Other Source Files

```
src/
├── index.jsx
│   ├─→ React entry point
│   ├─→ Renders App to DOM
│   └─→ Usually no changes needed
│
└── App.jsx
    ├─→ Main component file
    ├─→ Imports all sections
    ├─→ Defines component order
    └─→ Edit: Add/remove sections
```

## 📚 Documentation Files

```
ROOT/
├── README.md
│   └─→ Full project documentation
│   └─→ Read: Overview, features, usage
│
├── SETUP_INSTRUCTIONS.md
│   └─→ Quick 5-minute setup guide
│   └─→ Read: Getting started
│
├── CUSTOMIZATION_GUIDE.md
│   └─→ How to customize everything
│   └─→ Read: Making it your own
│
├── ASSETS_SETUP.md
│   └─→ Managing images, PDFs, files
│   └─→ Read: Adding profile photo, resume
│
├── DEPLOYMENT.md
│   └─→ How to deploy the site
│   └─→ Read: Going live to the web
│
├── PROJECT_SUMMARY.md
│   └─→ Overview of what was built
│   └─→ Read: Quick project summary
│
└── INITIALIZATION_CHECKLIST.md
    └─→ Pre-launch verification
    └─→ Read: Final checks before deploy
```

## 🔍 Where to Edit For...

| Task | Edit File |
|------|-----------|
| Change theme colors | `src/styles/globals.css` |
| Update your name | `src/components/Hero.jsx` |
| Add projects | `src/components/Projects.jsx` |
| Add skills | `src/components/Skills.jsx` |
| Update about | `src/components/About.jsx` |
| Add experience | `src/components/Internships.jsx` |
| Add certs | `src/components/Certifications.jsx` |
| Update contact info | `src/components/Contact.jsx` |
| Change nav logo | `src/components/Navbar.jsx` |
| Footer text | `src/components/Footer.jsx` |
| Global styles | `src/styles/globals.css` |
| Button styles | `src/styles/globals.css` |
| Animations | `src/styles/globals.css` |
| Add new section | Create component + CSS file |
| Change port | `vite.config.js` |
| Add dependencies | `package.json` + `npm install` |
| HTML title | `public/index.html` |

## 📊 Component Relationships

```
App.jsx
  ├── Navbar
  │   └── Navigation to all sections
  ├── Hero
  │   └── Typing animation, CTA buttons
  ├── About
  │   └── Education, background
  ├── Skills
  │   └── Skills with progress bars
  ├── Projects
  │   └── Portfolio of projects
  ├── Internships
  │   └── Experience timeline
  ├── Certifications
  │   └── Certificates
  ├── Contact
  │   └── Contact form + links
  └── Footer
      └── Social links
```

## 🗂️ Asset Directory Tree

```
public/assets/
├── profile.jpg              (Add your photo)
├── Monika_R_Resume.pdf      (Add your resume)
├── favicon.png              (Optional)
└── certificates/
    ├── nptel_ai_ml.pdf
    ├── guvi_fullstack.pdf
    ├── infosys_springboard.pdf
    └── nptel_ai_advanced.pdf
```

**All other files are optional and can be customized.**

## 🎯 Quick Navigation

**First Time?**
→ Read `SETUP_INSTRUCTIONS.md`

**Want to Customize?**
→ Read `CUSTOMIZATION_GUIDE.md`

**Need Assets Help?**
→ Read `ASSETS_SETUP.md`

**Ready to Deploy?**
→ Read `DEPLOYMENT.md`

**Want Details?**
→ Read `README.md`

**Before Launch?**
→ Read `INITIALIZATION_CHECKLIST.md`

## 📝 Key Files Summary

| File | Purpose | Edit? |
|------|---------|-------|
| `package.json` | Dependencies | ✓ (add packages) |
| `vite.config.js` | Build config | ✓ (port, output) |
| `public/index.html` | HTML template | ✓ (title, meta) |
| `src/App.jsx` | Main component | ✓ (add sections) |
| `src/index.jsx` | Entry point | ✗ (usually no) |
| `src/styles/globals.css` | Global CSS | ✓ (colors, animations) |
| Component files | React components | ✓ (content) |
| Component CSS | Component styles | ✓ (styling) |

## 🔄 Typical Development Workflow

```
1. npm install (once)
   ↓
2. npm run dev (start server)
   ↓
3. Edit src/ files (components)
   ↓
4. Browser auto-refreshes (hot reload)
   ↓
5. Test changes
   ↓
6. When done: npm run build
   ↓
7. Deploy (see DEPLOYMENT.md)
```

## 🎯 Find What You Need

**By Component:**
- Navbar → `src/components/Navbar.jsx` + `src/styles/Navbar.css`
- Hero → `src/components/Hero.jsx` + `src/styles/Hero.css`
- etc.

**By Feature:**
- Typing animation → `src/components/Hero.jsx`
- Progress bars → `src/components/Skills.jsx` + `src/styles/Skills.css`
- Timeline → `src/components/Internships.jsx` + `src/styles/Internships.css`
- Contact form → `src/components/Contact.jsx`

**By Styling:**
- Colors → `src/styles/globals.css`
- Animations → `src/styles/globals.css`
- Responsive → Media queries in individual CSS files

**By Configuration:**
- Dependencies → `package.json`
- Build settings → `vite.config.js`
- Port settings → `vite.config.js`

## 📋 Essential Commands

```bash
npm install              # Install dependencies (run once)
npm run dev             # Start development server
npm run build           # Create production build
npm run preview         # Preview production build
npm run lint            # Check code quality
```

## ✨ Remember

- **Edit Components for Content** → `src/components/`
- **Edit CSS for Styling** → `src/styles/`
- **Edit Config for Settings** → Root level files
- **Add Assets** → `public/assets/`
- **Check Docs** → Documentation files

---

**Got a question? Check the relevant documentation file!**

**Making changes? This reference shows you exactly where to go.**

*Happy coding! 🚀*
