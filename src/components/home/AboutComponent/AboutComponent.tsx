import React from "react";

/**
 * About component - Company information and story
 * Features:
 * - Company journey description
 * - Visual elements with images and statistics
 * - Call to action button
 */
const AboutComponent: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="about section">
      <div className="container">
        <div className="about-header">
          <p className="title">
            *Connecting people, spaces & lifestyles.{" "}
            <strong>Our Journey</strong> as impactful Urban Real Estate
            Developer Companies.
          </p>
        </div>

        <div className="content-wrapper">
          <div className="image-container">
            <div className="about-image">
              <img
                src="https://img.freepik.com/free-photo/vertical-low-angle-shot-high-rise-skyscrapers-glass-facade-frankfurt-germany_181624-7114.jpg"
                alt="About Metropolis Living - Modern skyscrapers"
              />

              {/* Logo overlay */}
              <div className="logo-container">
                <div className="logo-circle">
                  <div className="laurel"></div>
                </div>
              </div>
            </div>
            <p>Wrbanite Twin Tower. I23 Street. USA</p>
          </div>

          <div className="details-container">
            <div className="content-area">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                totam seduten accusantium doloremque laudantium. totam rem
                aperam. eaque ipsa quaen.
              </p>

              <div className="line-separator"></div>

              <p>
                Praesent dignissim erat urna. vitae accumsan eros efficitur sed.
                Maecenason aliquet sit amet erat in blandit. In et tincidunt
                sapien. Nulla maximus loreme se pellentesque dolor nec
                efficitur. Phasellus maximus elit sollicitudin dui scelerisque.
                id mollis dolor scelerisque.
              </p>

              {/* Call to Action Button */}
              <button
                className="cta-button"
                style={{ height: "50px", width: "200px" }}
                type="button"
              >
                Learn More
              </button>
            </div>

            {/* Stat card positioned at bottom right */}
            <div className="stat">
              <div className="stat-card">
                <div className="card-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="card-content">
                  <div className="stat-number">
                    100<span className="plus">+</span>
                  </div>
                  <div className="stat-text">Trusted By Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
