import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: '💻',
      label: 'GitHub',
      href: 'https://github.com/Monimonika82988',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/monika-r-0994a6327',
    },
    {
      icon: '📧',
      label: 'Email',
      href: 'mailto:monikamoni63847@gmail.com',
    },
  ];

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Internships', 'Certifications', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer glass-effect">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Monika R</h4>
            <p>AI Enthusiast | Python Developer | AIML Student</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a onClick={() => scrollToSection(link)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Monika R – AI Enthusiast | Python Developer
          </p>
          <p className="footer-tagline">
            "Innovating with Intelligence."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
