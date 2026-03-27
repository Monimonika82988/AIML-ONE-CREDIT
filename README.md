# Monika R - Personal Portfolio Website

A modern, responsive personal portfolio website built with ReactJS, featuring a dark theme with neon blue/purple accents, glassmorphism effects, and smooth animations.

## 🌟 Features

- **Modern Design**: Dark theme with neon blue/purple gradient accents
- **Glassmorphism Effects**: Beautiful blur and transparency effects using pure CSS
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: CSS transitions, keyframes, and scroll animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Pure CSS**: No external UI frameworks - custom CSS styling
- **Intersection Observer**: Lazy-loaded skill bars and scroll animations

## 📋 Sections

1. **Navbar** - Fixed navigation with smooth scrolling
2. **Hero** - Typing animation with profile image and CTA buttons
3. **About** - Education, leadership, and creative pursuits
4. **Skills** - Progress bars with animated skill levels
5. **Projects** - Featured projects with GitHub links
6. **Internships** - Timeline-style experience display
7. **Certifications** - Certification cards with view/download options
8. **Contact** - Contact form and social links
9. **Footer** - Social links and navigation

## 🛠️ Tech Stack

- **Frontend**: ReactJS 18+ with Hooks
- **Build Tool**: Vite
- **Styling**: Pure CSS3 (no Tailwind or frameworks)
- **HTML**: HTML5 semantic markup
- **JavaScript**: ES6+

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── assets/
│       ├── profile.jpg          # Profile image (circular)
│       ├── Monika_R_Resume.pdf  # Resume file
│       └── certificates/        # Certificate PDFs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Internships.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Internships.css
│   │   ├── Certifications.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn

### Installation

1. Navigate to project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your assets:
   - Place profile image at `public/assets/profile.jpg`
   - Place resume at `public/assets/Monika_R_Resume.pdf`
   - Place certificates at `public/assets/certificates/`

### Development

Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Build

Create an optimized production build:
```bash
npm run build
```

The output will be in the `dist/` directory.

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/globals.css`:
```css
:root {
  --primary-color: #0f0f1e;
  --accent-blue: #00d4ff;
  --accent-purple: #b700ff;
  /* ... */
}
```

### Content
Edit the component files directly:
- **Personal Info**: Hero.jsx, Contact.jsx
- **Skills**: Skills.jsx
- **Projects**: Projects.jsx
- **Experience**: Internships.jsx, About.jsx
- **Certifications**: Certifications.jsx

## 📝 Contact Information

- **Email**: monikamoni63847@gmail.com
- **Phone**: +91 9363607816
- **GitHub**: https://github.com/Monimonika82988
- **LinkedIn**: https://www.linkedin.com/in/monika-r-0994a6327

## 🎯 Key Features Explained

### Typing Animation
The Hero component uses React hooks to create a smooth typing animation that cycles through multiple roles.

### Progress Bars
Skills section uses Intersection Observer API to animate progress bars when they come into view.

### Glassmorphism
Pure CSS backdrop-filter and rgba colors create modern glassmorphism effects without any libraries.

### Responsive Design
Media queries ensure the site looks beautiful on all screen sizes:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

### Smooth Scrolling
CSS `scroll-behavior: smooth` provides smooth page scrolling. Navigation uses JavaScript to scroll to sections.

## 📄 License

MIT License - Feel free to use this portfolio as a template for your own!

## 🤝 Support

For questions or issues, please reach out to monikamoni63847@gmail.com

---

**"Innovating with Intelligence."** ✨
