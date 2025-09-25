import React from "react";
import { useHomeData } from "../../../hooks/useHomeData";

/**
 * Services component - Company services and urban development showcase
 * Features:
 * - Services grid layout
 * - Property development and management sections
 * - Urban revitalization information
 */
const ServicesComponent: React.FC = () => {
  const { services, loading } = useHomeData();

  if (loading) {
    return (
      <section id="services" className="services-section section">
        <div className="container">
          <div className="loading">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="service-header">
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
              <strong>Services</strong> & Complete Project
            </p>
          </div>

          <div className="col-2">
            <p className="section-subtitle">Property</p>
            <h1 className="section-title">Development</h1>
            <p className="section-description">Praesent dignissim erat urna.</p>
          </div>

          <div className="col-3">
            <p className="section-subtitle">Property</p>
            <h1 className="section-title">Management</h1>
            <p className="section-description">Praesent dignissim erat urna.</p>
          </div>
        </div>

        {/* Urban Layout Grid */}
        <div className="urban-grid">
          <div className="grid-item top-left">
            <p className="title">
              Revitalization of <strong>Urban</strong> areas.
            </p>
            <div className="content-with-icon">
              <div className="icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <p>
                Praesent Dignissim Erat Uma, Vitae Accumsan Eros Efficitur Sed.
                Maecenason Aliquet Sit Ametri Et Dis
              </p>
            </div>
          </div>

          <div className="grid-item top-right">
            <div
              className="background-image"
              style={{ backgroundImage: "url(/grid_top_right.png)" }}
            ></div>
          </div>

          <div className="grid-item middle-left">
            <div
              className="background-image"
              style={{ backgroundImage: "url(/grid_middle_left.png)" }}
            ></div>
          </div>

          <div className="grid-item middle-right">
            <div className="top-left">
              <div className="logo-container">
                <img src="/top_right_logo.png" alt="Metropolis Living logo" />
              </div>
            </div>

            <div className="content-area">
              <h3 className="service-title">Modern Living Solutions</h3>
              <p className="service-description">
                Creating sustainable and innovative urban environments that
                enhance quality of life for residents and communities.
              </p>
            </div>
          </div>

          <div className="grid-item bottom-left">
            <div className="service-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Active Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="grid-item bottom-right">
            <div
              className="background-image"
              style={{ backgroundImage: "url(/grid_bottom_right.png)" }}
            ></div>
            <div className="overlay-content">
              <h4>Premium Developments</h4>
              <p>Luxury residential and commercial spaces</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        {services.length > 0 && (
          <div className="services-list">
            <h2 className="services-heading">Our Core Services</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesComponent;
