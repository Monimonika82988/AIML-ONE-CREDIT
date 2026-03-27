import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-info">
            <div className="info-card glass-effect-lg">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.E in CSE (AIML Specialization)</h4>
                <p className="subtitle">Sophomore</p>
                <p className="description">Specializing in Artificial Intelligence and Machine Learning with a focus on implementing cutting-edge AI solutions.</p>
              </div>
              <div className="education-item">
                <h4>HSC</h4>
                <p className="subtitle">St. Augustine Matric Higher Secondary School, Hosur</p>
                <p className="score">Score: 90%</p>
              </div>
            </div>

            <div className="info-card glass-effect-lg">
              <h3>Leadership</h3>
              <ul className="leadership-list">
                <li>
                  <span className="role">MOC</span>
                  <span className="org">AEVA (2024–2025)</span>
                </li>
                <li>
                  <span className="role">Joint Treasurer</span>
                  <span className="org">AEVA (2025–2026)</span>
                </li>
                <li>
                  <span className="role">Student Coordinator</span>
                  <span className="org">Vibe Code-26 Hackathon</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card glass-effect-lg">
              <h3>Clubs & Activities</h3>
              <ul className="activities-list">
                <li>Readers Club Member</li>
                <li>Branding Chair – Yi KSRCT</li>
              </ul>
            </div>

            <div className="info-card glass-effect-lg">
              <h3>Creative Pursuits</h3>
              <ul className="creative-list">
                <li>Content Creator</li>
                <li>Public Speaker</li>
                <li>Technical Writer</li>
                <li>Compiler of "Small Steps Big Changes"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-highlight">
          <p className="highlight-text">
            Passionate about leveraging artificial intelligence and machine learning to create innovative solutions that make a meaningful impact in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
