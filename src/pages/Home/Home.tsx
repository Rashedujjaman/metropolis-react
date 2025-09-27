import React, { useEffect, useRef } from "react";
import { useHomeData } from "../../hooks/useHomeData";
import { BlogPost } from "../../types/home.types";
import HeroComponent from "../../components/home/HeroComponent/HeroComponent";
import AboutComponent from "../../components/home/AboutComponent/AboutComponent";
import ServicesComponent from "../../components/home/ServicesComponent/ServicesComponent";
import BlogComponent from "../../components/home/BlogComponent/BlogComponent";
import TestimonialComponent from "../../components/home/TestimonialComponent/TestimonialComponent";
import HelpCenterComponent from "../../components/home/HelpCenterComponent/HelpCenterComponent";

/**
 * Home page component - Main landing page
 * Features:
 * - All home page sections
 * - Intersection observer for animations
 * - FAQ functionality
 * - Data loading and management
 */
const Home: React.FC = () => {
  const {
    faqs,
    testimonials,
    // projects, // Currently unused but available for future features
    featuredProjects,
    // services, // Currently unused but available for future features
    statistics,
    loading,
    toggleFaq,
  } = useHomeData();

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  // Handle blog post selection
  const handleBlogPostSelect = (post: BlogPost) => {
    console.log("Blog post selected:", post);

    alert(
      `Selected blog post: "${post.title}"\n\nAuthor: ${
        post.author
      }\nDate: ${new Date(
        post.date
      ).toLocaleDateString()}\n\n${post.content?.substring(0, 100)}...`
    );
  };

  useEffect(() => {
    // Set up intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".section, .hero-section, .about-section, .services-section, .contact-section"
    );
    sections.forEach((section) => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.observe(section);
      }
    });

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Metropolis Living...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="home-page">
      {/* Hero Section */}
      <HeroComponent />

      {/* About Section */}
      <AboutComponent />

      {/* Services Section */}
      <ServicesComponent />

      {/* Testimonials Section */}
      <TestimonialComponent />

      {/* Blog Section */}
      <BlogComponent onSelectPost={handleBlogPostSelect} />

      {/* Help Center Section */}
      <HelpCenterComponent />
    </main>
  );
};

export default Home;
