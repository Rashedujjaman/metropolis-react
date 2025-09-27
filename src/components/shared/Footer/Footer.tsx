import React, { useState } from "react";
import "./Footer.scss";

/**
 * Footer component - Main site footer with triangular cutout design
 * Features:
 * - Multi-column responsive grid layout (4→2→1 columns)
 * - Triangular cutout design element in top-left corner
 * - Newsletter subscription form with email validation
 * - Professional navigation links with hover effects
 * - Company branding and logo display
 * - Dynamic copyright year calculation
 * - Full responsive design with mobile optimization
 * - Dark theme with orange accent colors
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // Newsletter subscription handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      // TODO: In production, integrate with email marketing service
      // Example integrations:
      // - POST request to backend API
      // - Third-party service integration (Mailchimp, ConvertKit)
      // - Database storage with user preferences
      console.log("Subscribing email:", email);

      // User feedback - replace with proper notification system in production
      alert("Thank you for subscribing to our newsletter!");

      // Reset form field
      setEmail("");
    }
  };

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
                      Service
                    </button>
                  </li>
                  <li>
                    <button
                      className="footer-link"
                      onClick={() => scrollTo("projects")}
                      type="button"
                    >
                      Pricing
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
                    <a href="#" className="footer-link">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Subscription Column */}
              <div className="footer-column">
                <p className="newsletter-text">
                  Stay Informed & <b className="subscribe">Subscribe</b> our
                  blog!
                </p>

                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="newsletter-input-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="newsletter-input"
                      required
                    />
                    <button type="submit" className="newsletter-btn">
                      <b>Send</b>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom - Copyright */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="copyright">Copyright &copy; {currentYear}.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
