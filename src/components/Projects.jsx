import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Diabetes Prediction Chatbot',
      description: 'An intelligent chatbot powered by machine learning algorithms to predict diabetes risk based on user health metrics. Features natural language processing and real-time health analysis.',
      technologies: ['Python', 'ML', 'NLP', 'Flask'],
      github: 'https://github.com/Monimonika82988',
      featured: true,
    },
    {
      title: 'Voice-to-Text Enhancer',
      description: 'Advanced speech recognition system with real-time transcription and intelligent text enhancement capabilities. Converts audio inputs to formatted text with grammar correction.',
      technologies: ['Python', 'Speech Recognition', 'NLP', 'Audio Processing'],
      github: 'https://github.com/Monimonika82988',
    },
    {
      title: 'Fitness Tracker Application',
      description: 'Comprehensive fitness tracking application built with Python Tkinter GUI. Tracks workouts, calories, and provides personalized fitness recommendations.',
      technologies: ['Python', 'Tkinter', 'Database', 'Data Analysis'],
      github: 'https://github.com/Monimonika82988',
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'Interactive Tic-Tac-Toe game implementation with AI opponent using minimax algorithm. Features multiple difficulty levels and elegant user interface.',
      technologies: ['Python', 'Game Dev', 'AI Algorithm', 'UI/UX'],
      github: 'https://github.com/Monimonika82988',
    },
    {
      title: 'MATLAB Attendance System',
      description: 'Automated attendance tracking system built for the SIH Hackathon. Uses MATLAB for real-time data analysis and reporting with database integration.',
      technologies: ['MATLAB', 'Database', 'Image Processing', 'Automation'],
      github: 'https://github.com/Monimonika82988',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card glass-effect-lg ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.featured && <span className="badge">Featured</span>}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more projects?</p>
          <a
            href="https://github.com/Monimonika82988"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
