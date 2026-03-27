# Customization Guide

Complete guide to customize every part of your portfolio website.

## 🎨 Colors & Theme

### Change Accent Colors

Edit `src/styles/globals.css`:

```css
:root {
  /* Primary background colors */
  --primary-color: #0f0f1e;        /* Dark blue-black */
  --secondary-color: #1a1a2e;      /* Medium dark blue */
  
  /* Accent colors - modify these for theme */
  --accent-blue: #00d4ff;          /* Neon cyan - main accent */
  --accent-purple: #b700ff;        /* Neon purple - secondary */
  --accent-pink: #ff006e;          /* Neon pink - highlights */
  
  /* Text colors */
  --text-primary: #ffffff;         /* Main text */
  --text-secondary: #b0b0b0;       /* Secondary text */
  
  /* UI colors */
  --border-color: rgba(0, 212, 255, 0.2);  /* Border/divider */
  --glass-bg: rgba(15, 15, 30, 0.7);       /* Glassmorphism bg */
}
```

**Example: Change to green theme**
```css
--accent-blue: #00ff7f;        /* Bright green */
--accent-purple: #32cd32;      /* Lime green */
--accent-pink: #00ff7f;        /* Neon green */
```

## 👤 Personal Information

### Update Name & Title (Hero Section)

Edit `src/components/Hero.jsx`:

**Current:**
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="name-gradient">Monika R</span>
</h1>
```

**Change to:**
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="name-gradient">Your Name</span>
</h1>
```

### Update Typing Animation Names

In `src/components/Hero.jsx`:

```javascript
const texts = [
  'AI Enthusiast',      // Change these
  'Python Developer',
  'AIML Student',
  'Aspiring AI Engineer',
];
```

### Update Quote

In `src/components/Hero.jsx`:
```javascript
<p className="hero-subtitle">
  "Your custom quote here"
</p>
```

## 📝 About Section

### Update Education Info

Edit `src/components/About.jsx`:

```javascript
<h4>B.E in CSE (AIML Specialization)</h4>
<p className="subtitle">Sophomore</p>

<h4>Your School Name</h4>
```

### Update Leadership Roles

Edit `src/components/About.jsx`:

```javascript
<li>
  <span className="role">Your Position</span>
  <span className="org">Organization (Year)</span>
</li>
```

### Add/Remove Clubs & Activities

In `src/components/About.jsx`:

```javascript
<ul className="activities-list">
  <li>Your Club/Activity 1</li>
  <li>Your Club/Activity 2</li>
  <li>Your Club/Activity 3</li>
</ul>
```

## 🛠️ Skills Section

### Add/Edit Skills

Edit `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },      // Change level 0-100
      { name: 'Java', level: 75 },
      { name: 'C++', level: 80 },         // Add new skills
    ],
  },
  {
    category: 'Another Category',
    skills: [
      { name: 'Skill 1', level: 85 },
      { name: 'Skill 2', level: 75 },
    ],
  },
];
```

### Customize Progress Bar Appearance

Edit `src/styles/Skills.css`:

```css
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
  border-radius: 10px;
  /* Customize here */
}
```

## 🚀 Projects Section

### Add New Projects

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of what your project does and its impact.',
    technologies: ['Tech1', 'Tech2', 'Tech3'],       // Change technologies
    github: 'https://github.com/yourlink',          // Your GitHub link
    featured: true,                                  // Mark as featured
  },
  {
    title: 'Another Project',
    description: 'More details...',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/yourlink',
  },
];
```

### Change GitHub Link

Every project needs:
```javascript
github: 'https://github.com/YOUR_GITHUB_USERNAME/repository-name'
```

### Mark as Featured

Featured projects get special styling:
```javascript
featured: true  // Makes card stand out
```

## 🏢 Internships & Experience

### Update Timeline Items

Edit `src/components/Internships.jsx`:

```javascript
const internships = [
  {
    title: 'Your Internship Title',
    company: 'Company Name',
    duration: 'Month Year - Month Year',    // Format: Jan 2024 - Mar 2024
    description: 'What you did and learned...',
    skills: ['Skill1', 'Skill2', 'Skill3'],  // Skills gained
    icon: '🎯',                              // Emoji icon
  },
];
```

### Change Icons

Available emojis you can use:
```javascript
icon: '🤖'  // Robot (AI)
icon: '🔒'  // Lock (Security)
icon: '💼'  // Briefcase (Business)
icon: '🚀'  // Rocket (Launch)
icon: '💡'  // Lightbulb (Ideas)
icon: '🔧'  // Tools (Development)
```

## 🏆 Certifications

### Add New Certifications

Edit `src/components/Certifications.jsx`:

```javascript
const certifications = [
  {
    title: 'Certification Name',
    platform: 'Platform/Provider',      // e.g., 'NPTEL', 'Coursera'
    date: 'Completed',                  // Or specific date
    description: 'What you learned...',
    certificateFile: 'filename.pdf',    // PDF in public/assets/certificates/
  },
];
```

### Add Certificate Files

1. Get PDF of your certificate
2. Place in `public/assets/certificates/`
3. Update filename in component

**Important**: Filename must match exactly!

```
public/assets/certificates/
├── nptel_course.pdf         ← Name in code: 'nptel_course.pdf'
├── coursera_cert.pdf
└── udemy_cert.pdf
```

## 📧 Contact Information

### Update Email

Edit `src/components/Contact.jsx`:

```javascript
{
  icon: '📧',
  label: 'Email',
  value: 'your-email@example.com',  // Change this
  href: 'mailto:your-email@example.com',
}
```

### Update Phone

Edit `src/components/Contact.jsx`:

```javascript
{
  icon: '📱',
  label: 'Phone',
  value: '+1 234-567-8900',        // Change this
  href: 'tel:+12345678900',        // Format: tel:number (no spaces)
}
```

### Update Social Links

Edit `src/components/Contact.jsx`:

```javascript
{
  icon: '💼',
  label: 'LinkedIn',
  value: 'linkedin.com/in/yourprofile',
  href: 'https://www.linkedin.com/in/yourprofile',  // Change this
},
{
  icon: '💻',
  label: 'GitHub',
  value: 'github.com/yourusername',
  href: 'https://github.com/yourusername',  // Change this
}
```

## 🔗 Navigation Links

### Update Navbar

The navbar in `src/components/Navbar.jsx` automatically uses section IDs:

```javascript
<ul className="nav-menu">
  <li><a onClick={() => scrollToSection('home')}>Home</a></li>
  <li><a onClick={() => scrollToSection('about')}>About</a></li>
  // These match the section IDs in each component
</ul>
```

**Section IDs don't change** - they're already correct.

## 🎨 Component Styling

### Modify Button Styles

Edit `src/styles/globals.css`:

```css
.btn {
  padding: 12px 30px;     /* Change button size */
  border-radius: 8px;     /* Change corner roundness */
  font-size: 1rem;        /* Change text size */
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  /* Change background gradient */
}
```

### Modify Card Styles

Edit respective CSS files (e.g., `src/styles/Projects.css`):

```css
.project-card {
  padding: 30px;          /* Change spacing */
  border-radius: 15px;    /* Change corners */
  /* Add shadows, opacity, etc. */
}
```

### Change Animations

Edit `src/styles/globals.css` for global animations:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Change distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📱 Responsive Design

### Adjust Breakpoints

Edit CSS files, look for media queries:

```css
@media (max-width: 768px) {
  /* Tablet and below */
}

@media (max-width: 640px) {
  /* Mobile */
}
```

To add a new breakpoint:

```css
@media (max-width: 1200px) {
  /* Large screens */
}
```

## 🎯 Logo/Branding

### Change Navbar Logo

Edit `src/components/Navbar.jsx`:

```javascript
<div className="logo">
  <span className="logo-text">MonikaR</span>    {/* Change text */}
  <span className="logo-dot">.</span>
</div>
```

### Change Footer Text

Edit `src/components/Footer.jsx`:

```javascript
<p className="footer-text">
  © {currentYear} Your Name – Your Title
</p>
```

## 🌐 SEO & Meta Tags

### Update HTML Title & Meta

Edit `public/index.html`:

```html
<title>Your Name - Your Title | Portfolio</title>
<meta name="description" content="Your description here">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your description">
```

## 🔐 Hide/Remove Sections

To hide a section completely, in `src/App.jsx`:

```javascript
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}    {/* Comment out to hide */}
      <Projects />
      {/* Remove line to delete section */}
    </div>
  );
}
```

## 📸 Profile Image Settings

### Change Profile Image

1. Replace `public/assets/profile.jpg` with your image
2. Image styling in `src/styles/Hero.css`:

```css
.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;        /* Circle shape */
  border: 3px solid var(--accent-blue);
  /* Customize here */
}
```

### Remove Profile Image Glow

In `src/styles/Hero.css`:

```css
.profile-image.glow-effect {
  /* Remove or comment out box-shadow for no glow */
  box-shadow: none;
}
```

## ✅ Quick Customization Checklist

- [ ] Update name and title
- [ ] Change accent colors if desired
- [ ] Add profile photo
- [ ] Update about section
- [ ] Add/modify skills
- [ ] Add your projects
- [ ] Add your internships
- [ ] Add your certifications
- [ ] Update contact information
- [ ] Update social links
- [ ] Add resume PDF
- [ ] Upload certificate PDFs
- [ ] Test all links work
- [ ] Check on mobile device

---

**Start customizing your portfolio now!** 🎨

For more help, check:
- `README.md` - Full documentation
- `SETUP_INSTRUCTIONS.md` - Getting started
- `ASSETS_SETUP.md` - Adding files
- `DEPLOYMENT.md` - Going live
