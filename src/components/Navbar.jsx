import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar glass-effect">
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-text">MonikaR</span>
          <span className="logo-dot">.</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'hamburger active' : 'hamburger'}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('internships')}>Internships</a></li>
          <li><a onClick={() => scrollToSection('certifications')}>Certifications</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
