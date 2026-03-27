import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  const texts = [
    'AI Enthusiast',
    'Python Developer',
    'AIML Student',
    'Aspiring AI Engineer',
  ];

  useEffect(() => {
    const currentText = texts[loopIndex];
    let timeout;

    if (!isDeleting && textIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
    } else if (isDeleting && textIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, textIndex - 1));
        setTextIndex(textIndex - 1);
      }, 50);
    } else if (textIndex === currentText.length && !isDeleting) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && textIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setLoopIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, textIndex, isDeleting, loopIndex, texts]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Monika_R_Resume.pdf';
    link.download = 'Monika_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name-gradient">Monika R</span>
          </h1>
          <div className="typing-container">
            <span className="typing-text">{displayedText}</span>
            <span className="typing-cursor"></span>
          </div>
          <p className="hero-subtitle">
            "Innovating with Intelligence."
          </p>
          <p className="hero-description">
            Passionate about leveraging AI and Machine Learning to solve real-world problems.
            Currently pursuing B.E in CSE with specialization in AIML.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-image-wrapper">
            <div className="profile-image glow-effect">
              <img src="/assets/profile.jpg" alt="Monika R" />
            </div>
            <div className="floating-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 16L4 10M10 16L16 10M10 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
