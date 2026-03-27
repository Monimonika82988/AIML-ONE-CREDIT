import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState({});
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 75 },
        { name: 'Java', level: 70 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 85 },
        { name: 'ReactJS', level: 80 },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'MATLAB', level: 75 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
    {
      category: 'AI & ML Domains',
      skills: [
        { name: 'Artificial Intelligence', level: 80 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Generative AI', level: 75 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBars((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      const bars = skillsRef.current.querySelectorAll('.skill-item');
      bars.forEach((bar) => {
        observer.observe(bar);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid" ref={skillsRef}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category glass-effect-lg">
              <h3 className="category-title">{category.category}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    id={`skill-${categoryIndex}-${skillIndex}`}
                    className="skill-item"
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">
                        {visibleBars[`skill-${categoryIndex}-${skillIndex}`]
                          ? skill.level
                          : 0}
                        %
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: visibleBars[`skill-${categoryIndex}-${skillIndex}`]
                            ? `${skill.level}%`
                            : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <h4>Quick Learner</h4>
            <p>Adaptable to new technologies and frameworks</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4>Problem Solver</h4>
            <p>Innovative approach to complex challenges</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💡</div>
            <h4>AI Specialist</h4>
            <p>Deep expertise in AI/ML and Generative AI</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🔧</div>
            <h4>Developer</h4>
            <p>Full-stack development and technical leadership</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
