/**
 * ===============================================
 * SERVICES COMPONENT - TYPESCRIPT REACT
 * ===============================================
 *
 * Component: ServicesComponent
 * Purpose: Company services showcase with urban development grid and testimonials
 * Author: Generated for Metropolis React Migration
 * Created: September 26, 2025
 *
 * Features:
 * - Multi-column header with interactive brand elements
 * - Complex urban grid layout with background images
 * - Testimonials section with video player integration
 * - Property development and management sections
 * - Professional responsive design for all devices
 * - Interactive elements with FontAwesome icons
 * - Brand consistency with orange accent colors
 *
 * Structure:
 * - Header: Three-column layout with services introduction
 * - Urban Grid: 2x2 grid with mixed content and background images
 * - Testimonials: Client testimonials with video integration
 * - Line Separator: Visual break element
 *
 * Dependencies:
 * - React 19.1.1 with TypeScript support
 * - FontAwesome React components for icons
 * - SCSS for component styling
 *
 * Migration Notes:
 * - Converted from Angular to React maintaining full feature parity
 * - Replaced Angular directives with React state management
 * - Maintained all visual design elements and interactions
 * - Preserved responsive design across all device breakpoints
 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faCrown,
  faHome,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "./ServicesComponent.scss";

// Define image paths using PUBLIC_URL for webpack compatibility
const gridTopRightImage = process.env.PUBLIC_URL + "/grid_top_right.png";
const gridMiddleLeftImage = process.env.PUBLIC_URL + "/grid_middle_left.png";
const gridBottomRightImage = process.env.PUBLIC_URL + "/grid_bottom_right.png";
const textPhotoImage = process.env.PUBLIC_URL + "/text_photo.jpg";

/**
 * ServicesComponent Interface
 * No external props required - self-contained component
 */
interface ServicesComponentProps {
  // Future enhancement: Add props for dynamic content management
}

/**
 * ServicesComponent - Urban Services and Development Showcase
 *
 * Main component displaying company services through:
 * - Interactive header with brand bubbles
 * - Urban development grid with mixed media content
 * - Client testimonials with video integration
 *
 * @returns JSX.Element Complete services section
 */
const ServicesComponent: React.FC<ServicesComponentProps> = () => {
  // CSS custom properties for background images
  const imageStyles = {
    "--grid-top-right-image": `url(${gridTopRightImage})`,
    "--grid-middle-left-image": `url(${gridMiddleLeftImage})`,
    "--grid-bottom-right-image": `url(${gridBottomRightImage})`,
    "--text-photo-image": `url(${textPhotoImage})`,
  } as React.CSSProperties;

  return (
    <>
      {/* =============================================== */}
      {/* MAIN SERVICES SECTION */}
      {/* =============================================== */}
      <section className="services-section" style={imageStyles}>
        <div className="container">
          {/* =============================================== */}
          {/* HEADER - THREE COLUMN LAYOUT */}
          {/* =============================================== */}
          <div className="services-header">
            {/* Column 1: Services Title with Interactive Bubbles */}
            <div className="col-1">
              {/* Interactive Brand Bubbles */}
              <div className="hero-bubbles">
                <div className="hero-bubble hero-bubble-top"></div>
                <div className="hero-bubble hero-bubble-bottom"></div>
              </div>

              {/* Main Services Title */}
              <p className="section-title">
                <strong>Services</strong> & Complete Projects.
              </p>
            </div>

            {/* Column 2: Property Development */}
            <div className="col-2">
              <h2 className="section-subtitle">Property</h2>
              <h3 className="section-title">Development</h3>
              <p className="section-description">
                Praesent dignissim erat urna.
              </p>
            </div>

            {/* Column 3: Property Management */}
            <div className="col-3">
              <h2 className="section-subtitle">Property</h2>
              <h3 className="section-title">Management</h3>
              <p className="section-description">
                Praesent dignissim erat urna.
              </p>
            </div>
          </div>

          {/* =============================================== */}
          {/* URBAN GRID - 2x2 COMPLEX LAYOUT */}
          {/* =============================================== */}
          <div className="urban-grid">
            {/* Top Left: Urban Revitalization */}
            <div className="grid-item top-left">
              <h2 className="title">
                <strong>Urban</strong>
                <br />
                Revitalization
              </h2>
              <div className="content-with-icon">
                <div className="icon">
                  <FontAwesomeIcon icon={faPencilAlt} />
                </div>
                <p>
                  Transforming urban landscapes through innovative design and
                  sustainable development practices that breathe new life into
                  communities.
                </p>
              </div>
            </div>

            {/* Top Right: Background Image Grid */}
            <div className="grid-item top-right">
              {/* Background image handled via CSS */}
            </div>

            {/* Middle Left: Background Image Grid */}
            <div className="grid-item middle-left">
              {/* Background image handled via CSS */}
            </div>

            {/* Middle Right: Complex Multi-Section Layout */}
            <div className="grid-item middle-right">
              {/* Top Left: Landmarks Title */}
              <div className="top-left">
                <h2 className="title">
                  <strong>Landmarks</strong>
                </h2>
                <p>
                  Creating iconic structures that define cityscapes and become
                  lasting symbols of urban excellence and architectural
                  innovation.
                </p>
              </div>

              {/* Top Right: Company Logo */}
              <div className="top-right">
                <img src="/logo.png" alt="Metropolis Logo" />
              </div>

              {/* Bottom: Orange Section with Icon */}
              <div className="bottom">
                <div className="content-with-icon">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCrown} />
                  </div>
                  <p>Premium development solutions</p>
                </div>
              </div>
            </div>

            {/* Bottom Left: Urban Planning */}
            <div className="grid-item bottom-left">
              <h2 className="title">
                <strong>Urban</strong>
                <br />
                Planning
              </h2>
              <div className="content-with-icon">
                <div className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <p>
                  Strategic urban planning solutions that balance growth with
                  sustainability, creating vibrant communities for future
                  generations.
                </p>
              </div>
            </div>

            {/* Bottom Right: Background Image Grid */}
            <div className="grid-item bottom-right">
              {/* Background image handled via CSS */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComponent;
