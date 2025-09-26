import React, { useEffect, useRef } from "react";
import "./HeroComponent.scss";
import CallActionComponent from "../CallActionComponent/CallActionComponent";

/**
 * Hero component - Main landing section
 * Features:
 * - Company branding with animated elements
 * - Video player and content presentation
 * - Responsive design with proper accessibility
 */
const HeroComponent: React.FC = () => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);

  const avgRating = 4.8;

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
                  <div className="bubble bubble-top"></div>
                  <div className="bubble bubble-bottom"></div>
                </div>

                {/* Brand Secondary Text */}
                <span className="hero-living">LIVING.</span>
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
                We're building urban communities. Connecting people, spaces, and
                lifestyles through exceptional real estate development.
              </p>
            </div>
            {/* Rating Container with Triangular Design */}
            <div
              className="hero-rating-container"
              role="group"
              aria-label="Company rating and reviews"
            >
              <div className="hero-rating">
                <div className="rating-stars" aria-label="5 out of 5 stars">
                  <span className="star">★</span>
                  <span className="rating-number">{avgRating}</span>
                </div>
                <div className="rating-info">
                  <span className="rating-text">High-Rated</span>
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
            <div
              className="video-section"
              role="region"
              aria-label="Introductory video"
            >
              <div className="video-thumbnail" aria-hidden="true">
                <img
                  src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fbcd9b316-72dc-11e5-a129-3fcc4f641d98?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                  alt="Video thumbnail showing a modern building"
                  className="thumbnail-image"
                />
                <button
                  className="play-button"
                  onClick={handleVideoPlay}
                  aria-label="Play introductory video"
                >
                  ►
                </button>
              </div>
              <div className="video-text">
                <span>
                  Watch <br />
                  our project reel!
                </span>
              </div>
            </div>

            {/* Content Titles */}
            <div className="hero-bottom">
              <p className="hero-title">
                Driven By Innovation. <br />
                Committed To Excellence.
              </p>
              <div className="divider"></div>
              <p className="hero-subtitle">Empowering Urban Living.</p>
            </div>
          </div>

          {/* Right Content: Main Hero Image */}
          <div className="hero-content-right">
            <div className="hero-image-container">
              <img
                src="https://t17.market.xiaomi.com/thumbnail/jpeg/w480/ThemeMarket/0967f510d99da3b63ef19d36b16d707855a424046"
                alt="Modern metropolitan building showcase"
                className="hero-main-image"
              />
              <div className="call-action-overlay">
                <CallActionComponent
                  actionName="Get Started"
                  height={50}
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer Section: Company Details */}
        <div
          className="hero-footer"
          role="contentinfo"
          aria-label="Company information"
        >
          <div
            className="footer-img"
            role="img"
            aria-label="Company project showcase"
          >
            <img
              src="img_1.png"
              alt="Featured company project - Modern residential development"
              className="footer-img"
            />
          </div>

          <div className="footer-logo" role="img" aria-label="Company logo">
            <img
              src="logo.png"
              alt="Metropolis Living company logo"
              className="footer-logo"
            />
          </div>

          <div
            className="footer-details"
            role="region"
            aria-label="Company establishment and details"
          >
            {/* Establishment Information */}
            <div>
              <p className="footer-text">Est. Since 2016</p>
            </div>

            <div className="footer-info">
              <h2>Wrbanite</h2>
              <p className="footer-text">
                Home And <br />
                Real Estate Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
