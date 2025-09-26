import React, { useState, useEffect } from "react";
import "./Header.scss";

/**
 * Header component with responsive navigation
 * Features:
 * - Dynamic header styling based on scroll position
 * - Responsive mobile menu with toggle animation
 * - Smooth scrolling navigation to page sections
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Smooth scroll for mobile (includes menu close)
  const scrollToMobile = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Brand Logo */}
            <div className="navbar-brand">
              <a href="/" className="logo">
                <img
                  src="/creatio.png"
                  alt="Metropolis Living"
                  className="logo-img"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-nav">
              <ul className="nav-links">
                <li>
                  <button
                    className="nav-link"
                    onClick={() => scrollTo("hero")}
                    type="button"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="nav-link"
                    onClick={() => scrollTo("about")}
                    type="button"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="nav-link"
                    onClick={() => scrollTo("services")}
                    type="button"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    className="nav-link"
                    onClick={() => scrollTo("contact")}
                    type="button"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-menu-toggle d-mobile d-tablet ${
                isMobileMenuOpen ? "active" : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li>
              <button
                className="mobile-nav-link"
                onClick={() => scrollToMobile("hero")}
                type="button"
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="mobile-nav-link"
                onClick={() => scrollToMobile("about")}
                type="button"
              >
                About
              </button>
            </li>
            <li>
              <button
                className="mobile-nav-link"
                onClick={() => scrollToMobile("services")}
                type="button"
              >
                Services
              </button>
            </li>
            <li>
              <button
                className="mobile-nav-link"
                onClick={() => scrollToMobile("contact")}
                type="button"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
