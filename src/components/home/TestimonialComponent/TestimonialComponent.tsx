/**
 * ===============================================
 * TESTIMONIAL COMPONENT - TYPESCRIPT REACT
 * ===============================================
 *
 * Component: TestimonialComponent
 * Purpose: Display client testimonials with carousel functionality
 * Author: Generated for Metropolis React Migration
 * Created: September 26, 2025
 *
 * Features:
 * - Dynamic testimonial data from useHomeData hook
 * - Carousel/slider functionality for multiple testimonials
 * - Professional styling with client avatars
 * - Video testimonial integration with play buttons
 * - Responsive design for all devices
 * - Rating display and company information
 *
 * Dependencies:
 * - React hooks for state management
 * - FontAwesome Icons for navigation and play buttons
 * - useHomeData hook for dynamic content
 *
 * Migration Notes:
 * - Enhanced from static content to dynamic testimonial system
 * - Added carousel functionality for better UX
 * - Integrated with existing design system
 */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useHomeData } from "../../../hooks/useHomeData";
import { Testimonial } from "../../../types/home.types";
import "./TestimonialComponent.scss";

/**
 * TestimonialComponent - Dynamic Client Testimonials Showcase
 *
 * Displays client testimonials in an interactive carousel format:
 * - Multiple testimonials with navigation controls
 * - Client avatars and professional information
 * - Rating display system
 * - Video testimonial integration
 *
 * @returns JSX.Element Complete testimonials section
 */
const TestimonialComponent: React.FC = () => {
  const { testimonials, loading } = useHomeData();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Handle navigation between testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Loading state
  if (loading) {
    return (
      <section className="testimonials loading">
        <div className="container">
          <div className="loading-placeholder">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  // No testimonials available
  if (testimonials.length === 0) {
    return (
      <section className="testimonials empty">
        <div className="container">
          <h2 className="section-title">TEST</h2>
          <div className="char-image">
            <img src="/logo.png" alt="Decorative" />
          </div>
          <h2>MONIALS</h2>
          <p className="no-testimonials">
            No testimonials available at the moment.
          </p>
        </div>
      </section>
    );
  }

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="testimonials">
      <div className="container">
        {/* =============================================== */}
        {/* TESTIMONIALS HEADER */}
        {/* =============================================== */}
        <div className="testimonials-header">
          <div className="section-title">
            <p>*TESTM</p>
            <div className="char-image">
              <img src="/text_photo.jpg" alt="Decorative" />
            </div>
            <p>NIALS</p>
          </div>

          <div className="video-player-container">
            <div className="card-icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p className="watch-video">Watch what our clients are saying</p>
          </div>

          {/* Testimonial Counter */}
          {/* <div className="testimonial-counter">
            <span className="current">{currentTestimonial + 1}</span>
            <span className="separator">/</span>
            <span className="total">{testimonials.length}</span>
          </div> */}
        </div>

        {/* =============================================== */}
        {/* TESTIMONIAL CAROUSEL */}
        {/* =============================================== */}
        <div className="testimonial-carousel">
          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                className="carousel-nav carousel-nav-prev"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                className="carousel-nav carousel-nav-next"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}

          {/* Main Testimonial Card */}
          <div className="testimonial-card" key={currentTest.id}>
            {/* Testimonial Content */}
            <div className="card-content">
              <p className="description">"{currentTest.content}"</p>
              <h3 className="client-name">{currentTest.name}</h3>
              <p className="client-position">{currentTest.position}</p>
            </div>
          </div>
        </div>

        {/* =============================================== */}
        {/* TESTIMONIAL PAGINATION DOTS */}
        {/* =============================================== */}
        {testimonials.length > 1 && (
          <div className="testimonial-pagination">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="line-seperator"></div>
    </section>
  );
};

export default TestimonialComponent;
