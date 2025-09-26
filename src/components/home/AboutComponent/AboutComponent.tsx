import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import CallActionComponent from "../CallActionComponent";
import "./AboutComponent.scss";

/**
 * About component - Company information and story
 * Features:
 * - Company journey description
 * - Visual elements with images and statistics
 * - Call to action button integration
 * - Statistics card with award icon
 * - Professional responsive design
 * - Logo overlay with laurel design
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
            <p>
              <b>Wrbanite Twin Tower. </b>I23 Street. USA
            </p>
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

              {/* Call to Action Component */}
              <CallActionComponent
                actionName="Learn More"
                height={40}
                width={160}
                onActionClick={(actionName) => {
                  console.log(`About section action clicked: ${actionName}`);
                  // Add navigation logic here
                }}
              />
            </div>

            {/* Stat card positioned at bottom right */}
            <div className="stat">
              <div className="stat-card">
                <div className="card-icon">
                  <FontAwesomeIcon icon={faAward} />
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
      {/* Bottom section separator with decorative elements */}
      <div className="line-separator2"></div>
    </section>
  );
};

export default AboutComponent;
