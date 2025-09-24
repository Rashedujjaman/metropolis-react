import React, { useEffect, useRef } from "react";
import { useHomeData } from "../../hooks/useHomeData";
import HeroComponent from "../../components/home/HeroComponent/HeroComponent";
import AboutComponent from "../../components/home/AboutComponent/AboutComponent";
import ServicesComponent from "../../components/home/ServicesComponent/ServicesComponent";
import ContactComponent from "../../components/home/ContactComponent/ContactComponent";

/**
 * Home page component - Main landing page
 * Features:
 * - All home page sections
 * - Intersection observer for animations
 * - FAQ functionality
 * - Data loading and management
 */
const Home: React.FC = () => {
  const {
    faqs,
    testimonials,
    // projects, // Currently unused but available for future features
    featuredProjects,
    // services, // Currently unused but available for future features
    statistics,
    loading,
    toggleFaq,
  } = useHomeData();

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set up intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".section, .hero-section, .about-section, .services-section, .contact-section"
    );
    sections.forEach((section) => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.observe(section);
      }
    });

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Metropolis Living...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="home-page">
      {/* Hero Section */}
      <HeroComponent />

      {/* About Section */}
      <AboutComponent />

      {/* Services Section */}
      <ServicesComponent />

      {/* Statistics Section */}
      {statistics.length > 0 && (
        <section className="statistics-section section">
          <div className="container">
            <div className="statistics-grid">
              {statistics.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-description">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="projects-section section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                Discover our latest residential and commercial developments
              </p>
            </div>
            <div className="projects-grid">
              {featuredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-status">{project.status}</div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <span className="project-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {project.location}
                      </span>
                      <span className="project-units">
                        <i className="fas fa-building"></i>
                        {project.units} units
                      </span>
                    </div>
                    <div className="project-features">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="testimonials-section section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our Clients Say</h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star ${
                            i < testimonial.rating ? "filled" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.content}"</p>
                  </div>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="faq-section section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className={`faq-question ${faq.isOpen ? "active" : ""}`}
                    onClick={() => toggleFaq(faq.id)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <i
                      className={`fas fa-chevron-${faq.isOpen ? "up" : "down"}`}
                    ></i>
                  </button>
                  <div className={`faq-answer ${faq.isOpen ? "open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <ContactComponent />
    </main>
  );
};

export default Home;
