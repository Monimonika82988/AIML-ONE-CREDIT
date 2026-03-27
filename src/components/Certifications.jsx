import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AI and Machine Learning Fundamentals',
      platform: 'NPTEL',
      date: 'Completed',
      description: 'Comprehensive course on AI/ML fundamentals with focus on practical implementations.',
      certificateFile: 'nptel_ai_ml.pdf',
    },
    {
      title: 'Full Stack Development with Python',
      platform: 'GUVI',
      date: 'Completed',
      description: 'Full-stack development course covering frontend, backend, and database technologies.',
      certificateFile: 'guvi_fullstack.pdf',
    },
    {
      title: 'Infosys Springboard Certification',
      platform: 'Infosys Springboard',
      date: 'Completed',
      description: 'Professional development certification from Infosys covering industry-relevant skills.',
      certificateFile: 'infosys_springboard.pdf',
    },
    {
      title: 'Artificial Intelligence Mastery',
      platform: 'NPTEL',
      date: 'In Progress',
      description: 'Advanced AI concepts including deep learning and neural networks.',
      certificateFile: 'nptel_ai_advanced.pdf',
    },
  ];

  const handleViewCertificate = (fileName) => {
    window.open(`/assets/certificates/${fileName}`, '_blank');
  };

  const handleDownloadCertificate = (fileName) => {
    const link = document.createElement('a');
    link.href = `/assets/certificates/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications & Credentials</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-effect-lg">
              <div className="cert-header">
                <div className="cert-platform-badge">{cert.platform}</div>
                <div className="cert-icon">📜</div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
              <p className="cert-date">✓ {cert.date}</p>

              <div className="cert-actions">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleViewCertificate(cert.certificateFile)}
                >
                  View
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => handleDownloadCertificate(cert.certificateFile)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-highlight">
          <h3>Continuous Learning</h3>
          <p>
            Committed to staying updated with the latest developments in AI, ML, and software
            development through regular certifications and skill upgrades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
