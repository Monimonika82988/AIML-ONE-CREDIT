# Assets Setup Guide

This document explains what assets need to be added to your portfolio for it to work properly.

## 📁 Asset Directory Structure

```
public/
└── assets/
    ├── profile.jpg                    # Your profile photo
    ├── Monika_R_Resume.pdf           # Your resume
    ├── favicon.png                    # Website favicon (optional)
    └── certificates/
        ├── nptel_ai_ml.pdf
        ├── guvi_fullstack.pdf
        ├── infosys_springboard.pdf
        └── nptel_ai_advanced.pdf
```

## 📸 Profile Picture Setup

### File: `public/assets/profile.jpg`

**Requirements:**
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 500x500px or larger (square aspect ratio)
- **File Size**: Keep under 500KB for fast loading
- **Content**: Professional headshot photo

**Setup:**
1. Take or obtain a professional photo
2. Edit it to be square (500x500px recommended)
3. Save as `profile.jpg` in `public/assets/`
4. The component will automatically make it circular with a glow effect

**Technical Note**: The profile image is styled in Hero.jsx as:
- Circular shape (border-radius: 50%)
- Neon blue glow effect
- Smooth animations
- Fully responsive

## 📄 Resume PDF Setup

### File: `public/assets/Monika_R_Resume.pdf`

**Requirements:**
- **Format**: PDF document
- **Content**: Your detailed resume with:
  - Contact information
  - Professional summary
  - Work experience
  - Education
  - Skills
  - Certifications
  - Projects

**Setup:**
1. Create or update your resume
2. Export/Save as PDF with filename: `Monika_R_Resume.pdf`
3. Place it in `public/assets/`

**How it's used:**
- Download button in Hero section
- Click triggers direct download to user's device
- Uses HTML5 download attribute

## 🏆 Certificates Setup

### Directory: `public/assets/certificates/`

**Files needed** (optional - you can customize the list in `Certifications.jsx`):
- `nptel_ai_ml.pdf` - NPTEL Certification
- `guvi_fullstack.pdf` - GUVI Certification
- `infosys_springboard.pdf` - Infosys Springboard
- `nptel_ai_advanced.pdf` - Advanced AI from NPTEL

**Requirements:**
- **Format**: PDF documents
- **File Size**: Keep each under 2MB
- **Content**: Certificate images or documents

**Setup:**
1. Create `public/assets/certificates/` folder if it doesn't exist
2. Place all certificate PDFs here
3. Update the filenames in `src/components/Certifications.jsx` if different

**How it's used:**
- View button opens certificate in new tab
- Download button downloads certificate to device
- Cards show certificate info and buttons

**Customization**: Edit `Certifications.jsx` to match your actual certifications:
```javascript
const certifications = [
  {
    title: 'Your Certificate Title',
    platform: 'Platform Name',
    date: 'Completed',
    description: 'Description of the certification',
    certificateFile: 'your_certificate.pdf',  // Update this
  },
  // ... add more
];
```

## 🎨 Favicon Setup (Optional)

### File: `public/assets/favicon.png`

**Requirements:**
- **Format**: PNG, ICO, or SVG
- **Size**: 64x64px or 128x128px
- **Content**: Your logo or initial

**Setup:**
1. Create or design a favicon
2. Save as `favicon.png` in `public/assets/`
3. The HTML already references it

**Note**: If you don't have a favicon, the browser will use the default.

## 🔧 Troubleshooting

### Download buttons not working?
- Ensure file is in correct location
- Check file path in component matches actual location
- File permissions should be readable

### Profile image not showing?
- Verify image is at `public/assets/profile.jpg`
- Check image format is JPG, PNG, or WebP
- Try clearing browser cache

### Certificate buttons not working?
- Ensure PDF files exist in `public/assets/certificates/`
- Check filenames match exactly in `Certifications.jsx`
- PDFs should be valid and not corrupted

### Resume download fails?
- Verify `Monika_R_Resume.pdf` exists at correct path
- Check file is readable and not corrupted
- File size should be under 5MB

## 📝 Quick Setup Checklist

- [ ] Created `public/assets/` folder
- [ ] Added `profile.jpg` (500x500px recommended)
- [ ] Created resume as `Monika_R_Resume.pdf`
- [ ] Created `public/assets/certificates/` folder
- [ ] Added certificate PDFs
- [ ] Updated filenames in `Certifications.jsx` if needed
- [ ] Tested all download/view buttons
- [ ] Verified all images load correctly

## 🌐 Deployment

When deploying to production:
1. All assets should be in the `public/` folder
2. Build your project: `npm run build`
3. Deploy the `dist/` folder contents
4. Ensure assets are served correctly by your hosting provider

**Example Deployment Paths:**
- Asset: `public/assets/profile.jpg` → `/assets/profile.jpg`
- Asset: `public/assets/Monika_R_Resume.pdf` → `/assets/Monika_R_Resume.pdf`
- Asset: `public/assets/certificates/nptel.pdf` → `/assets/certificates/nptel.pdf`

## ❓ Questions or Issues?

If you encounter issues with assets:
1. Check file paths are correct
2. Verify file formats are supported
3. Ensure browser cache is cleared
4. Test in different browsers
5. Check browser console for errors

---

**Happy Portfolio Building!** 🚀
