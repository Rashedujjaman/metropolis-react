import React, { useState } from "react";

/**
 * Contact component - Blog posts and contact information
 * Features:
 * - Blog post cards with insights
 * - Contact form
 * - Company contact information
 */
const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Real Estate Innovations: Pioneering The Future",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/a6934b228623591.Y3JvcCwyMTE0LDE2NTQsMTk4LDA.png",
      alt: "Modern Real Estate Development",
      date: "April 30, 2025",
      tag: "Insight",
    },
    {
      id: 2,
      title: "Investment Opportunities in Urban Development",
      image:
        "https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/16/Modern-Arabic-Villa-Architectural-Design-1.1579168023.1665.jpg",
      alt: "Investment Opportunities",
      date: "April 25, 2025",
      tag: "Investment",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="contact-section"
      className="contact-section"
    >
      <div className="container">
        <div className="contant-header">
          <div className="col-1">
            <div
              className="hero-bubbles"
              role="img"
              aria-label="Decorative brand elements"
            >
              <div
                className="hero-bubble hero-bubble-top"
                role="button"
                tabIndex={0}
                aria-label="Interactive brand bubble - top"
              ></div>
              <div
                className="hero-bubble hero-bubble-bottom"
                role="button"
                tabIndex={0}
                aria-label="Interactive brand bubble - bottom"
              ></div>
            </div>
            <p className="section-title">
              <strong>Our Blog</strong> & Insightful Posts
            </p>
          </div>

          <div className="col-2">
            <p className="section-subtitle">
              Stay Informed on the <br />
              <strong>Latest Insights</strong> in Real Estate Development.
            </p>
          </div>
        </div>

        <div className="content">
          {/* Blog Posts */}
          <div className="card-wrapper">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="card-container">
                <div
                  className={`card ${index === 0 ? "card-left" : "card-right"}`}
                >
                  <div className="card-image">
                    <img src={post.image} alt={post.alt} loading="lazy" />
                    <div className="feature-tag">{post.tag}</div>
                  </div>
                  <div className="card-content">
                    <p className="card-title">{post.title}</p>
                    <div className="card-date">{post.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="contact-info">
              <h2 className="contact-heading">Get In Touch</h2>
              <p className="contact-description">
                Ready to start your next project? Contact us today for a
                consultation.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>info@metropolisliving.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>
                      123 Main Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
