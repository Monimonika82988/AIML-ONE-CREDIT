import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:monikamoni63847@gmail.com?subject=New Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    window.location.href = mailtoLink;

    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      value: 'monikamoni63847@gmail.com',
      href: 'mailto:monikamoni63847@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9363607816',
      href: 'tel:+919363607816',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'linkedin.com/in/monika-r',
      href: 'https://www.linkedin.com/in/monika-r-0994a6327',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/Monimonika82988',
      href: 'https://github.com/Monimonika82988',
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Have an interesting project or opportunity? Feel free to reach out! I'm always open to
              discussing new ideas, creative projects, and technical challenges.
            </p>

            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link glass-effect"
                >
                  <span className="contact-icon">{link.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{link.label}</span>
                    <span className="contact-value">{link.value}</span>
                  </div>
                  <span className="arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form glass-effect-lg" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Message sent! Your default email client will open.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
