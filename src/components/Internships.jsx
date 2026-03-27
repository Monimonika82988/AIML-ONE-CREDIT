import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const internships = [
    {
      title: 'AIML Virtual Internship',
      company: 'Virtual Internship Platform',
      duration: 'Jan 2024 - Mar 2024',
      description:
        'Specialized virtual internship focused on Artificial Intelligence and Machine Learning. Developed and trained various ML models, gaining hands-on experience with real-world AI applications.',
      skills: ['Python', 'TensorFlow', 'Data Science', 'Model Training'],
      icon: '🤖',
    },
    {
      title: 'AI in Cybersecurity',
      company: 'Cybersecurity Initiative',
      duration: 'Apr 2024 - Jun 2024',
      description:
        'Explored the intersection of AI and cybersecurity. Worked on anomaly detection systems, threat analysis, and building intelligent security solutions using machine learning.',
      skills: ['Python', 'ML', 'Cybersecurity', 'Data Analysis'],
      icon: '🔒',
    },
    {
      title: 'Professional Services Consultant',
      company: 'Certainti AI',
      duration: 'Jul 2024 - Present',
      description:
        'Consulting role focusing on AI implementation and business intelligence. Working with enterprise clients to develop AI-driven solutions and optimize their digital transformation.',
      skills: ['Consulting', 'AI Strategy', 'Business Analysis', 'Technical Implementation'],
      icon: '💼',
    },
  ];

  return (
    <section id="internships" className="internships section">
      <div className="container">
        <h2 className="section-title">Experience & Internships</h2>

        <div className="timeline">
          {internships.map((internship, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker">
                <div className="marker-circle">
                  <span className="marker-icon">{internship.icon}</span>
                </div>
                <div className="marker-line"></div>
              </div>

              <div className="timeline-content glass-effect-lg">
                <div className="timeline-header">
                  <h3 className="timeline-title">{internship.title}</h3>
                  <span className="timeline-company">{internship.company}</span>
                </div>

                <p className="timeline-duration">📅 {internship.duration}</p>
                <p className="timeline-description">{internship.description}</p>

                <div className="timeline-skills">
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
