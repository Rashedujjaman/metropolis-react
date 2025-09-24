import React, { useEffect, useRef } from "react";

/**
 * Hero component - Main landing section
 * Features:
 * - Company branding with animated elements
 * - Video player and content presentation
 * - Responsive design with proper accessibility
 */
const HeroComponent: React.FC = () => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation and interactive effects can be added here
    // For example, intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInRight");
        }
      });
    }, observerOptions);

    const heroElements = document.querySelectorAll(".hero-left, .hero-right");
    heroElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleVideoPlay = () => {
    // Handle video play functionality
    console.log("Video play clicked");
  };

  return (
    <section
      id="hero"
      className="hero-section"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container">
        {/* Hero Brand Layout: Company Identity & Rating */}
        <div
          className="hero-layout"
          role="region"
          aria-labelledby="hero-brand-title"
        >
          {/* Left Division: Brand Name with Interactive Bubbles */}
          <div
            className="hero-left animate-fadeInRight"
            aria-label="Company branding"
          >
            <div className="hero-brand">
              {/* Primary Brand Title */}
              <h1 id="hero-brand-title" className="hero-main-title">
                METROPOLIS
              </h1>

              {/* Secondary Brand Line with Visual Elements */}
              <div
                className="hero-second-line"
                role="group"
                aria-label="Brand signature with decorative elements"
              >
                {/* Decorative Interactive Bubbles */}
                <div
                  className="hero-bubbles"
                  ref={bubbleContainerRef}
                  aria-hidden="true"
                >
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                </div>

                {/* Brand Secondary Text */}
                <span className="hero-living">LIVING</span>
              </div>
            </div>
          </div>

          {/* Right Division: Company Description & Rating */}
          <div
            className="hero-right animate-fadeInLeft"
            aria-label="Company description and rating"
          >
            <div className="hero-description">
              {/* Company Description */}
              <p className="hero-text">
                Transform your urban living experience with our premium
                residential developments. We create modern spaces that combine
                luxury, functionality, and sustainable design for the
                contemporary lifestyle.
              </p>

              {/* Rating Container with Triangular Design */}
              <div
                className="hero-rating-container"
                role="group"
                aria-label="Company rating and reviews"
              >
                <div className="hero-rating">
                  <div className="rating-stars" aria-label="5 out of 5 stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <div className="rating-info">
                    <span className="rating-number">4.9</span>
                    <span className="rating-text">Customer Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content Section: Video & Main Image */}
        <div
          className="hero-content-section"
          role="region"
          aria-label="Main content presentation"
        >
          {/* Left Content: Video Player & Titles */}
          <div className="hero-content-left">
            {/* Video Player Container */}
            <div className="hero-video-container">
              <div className="video-placeholder">
                <button
                  className="play-button"
                  onClick={handleVideoPlay}
                  aria-label="Play company introduction video"
                >
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
                <img
                  src="/images/video-thumbnail.jpg"
                  alt="Company introduction video thumbnail"
                  className="video-thumbnail"
                />
              </div>
            </div>

            {/* Content Titles */}
            <div className="hero-titles">
              <h2 className="content-title">Modern Urban Living</h2>
              <h3 className="content-subtitle">Redefining City Life</h3>
            </div>
          </div>

          {/* Right Content: Main Hero Image */}
          <div className="hero-content-right">
            <div className="hero-image-container">
              <img
                src="/images/hero-main.jpg"
                alt="Modern metropolitan building showcase"
                className="hero-main-image"
              />
              <div className="image-overlay" aria-hidden="true"></div>
              <div className="decorative-square" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        {/* Hero Footer Section: Company Details */}
        <div
          className="hero-footer"
          role="contentinfo"
          aria-label="Company information"
        >
          <div className="hero-footer-grid">
            {/* Company Image */}
            <div className="footer-column">
              <img
                src="/images/company-photo.jpg"
                alt="Metropolis Living team and office"
                className="company-image"
              />
            </div>

            {/* Company Logo */}
            <div className="footer-column">
              <div className="company-logo">
                <img
                  src="/logo.png"
                  alt="Metropolis Living company logo"
                  className="logo-image"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="footer-column">
              <div className="company-details">
                <h4 className="company-name">Metropolis Living</h4>
                <p className="company-tagline">
                  Building Tomorrow's Communities
                </p>
                <div className="company-stats">
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
