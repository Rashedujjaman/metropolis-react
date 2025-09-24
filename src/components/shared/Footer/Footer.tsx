import React from "react";

/**
 * Footer component with company branding and navigation
 * Features:
 * - Multi-column responsive grid layout
 * - Company branding and logo display
 * - Navigation links for quick access
 * - Copyright information
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="footer-container">
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-grid">
              {/* Company Branding Column */}
              <div className="footer-column">
                <div className="footer-logo">
                  <img
                    src="/logo.png"
                    alt="Metropolis Living"
                    className="logo-img"
                  />
                </div>
              </div>

              {/* Quick Navigation Column */}
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <button
                      className="footer-link"
                      onClick={() => scrollTo("about")}
                      type="button"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      className="footer-link"
                      onClick={() => scrollTo("services")}
                      type="button"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      className="footer-link"
                      onClick={() => scrollTo("projects")}
                      type="button"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      className="footer-link"
                      onClick={() => scrollTo("contact")}
                      type="button"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Support & Legal Column */}
              <div className="footer-column">
                <h4 className="footer-heading">Support</h4>
                <ul className="footer-links">
                  <li>
                    <a href="/privacy" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="footer-link">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="footer-link">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/support" className="footer-link">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Information Column */}
              <div className="footer-column">
                <h4 className="footer-heading">Contact Info</h4>
                <div className="footer-contact">
                  <p className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+1 (555) 123-4567</span>
                  </p>
                  <p className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>info@metropolisliving.com</span>
                  </p>
                  <p className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>123 Main Street, City, State 12345</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom - Copyright */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                &copy; {currentYear} Metropolis Living. All rights reserved.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
