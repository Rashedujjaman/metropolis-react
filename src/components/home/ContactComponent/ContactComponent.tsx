import React, { useState } from "react";

/**
 * Contact component - Blog posts and contact information
 * Features:
 * - Blog post cards with insights
 * - Contact form
 * - Company contact information
 */
const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Real Estate Innovations: Pioneering The Future",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/a6934b228623591.Y3JvcCwyMTE0LDE2NTQsMTk4LDA.png",
      alt: "Modern Real Estate Development",
      date: "April 30, 2025",
      tag: "Insight",
    },
    {
      id: 2,
      title: "Investment Opportunities in Urban Development",
      image:
        "https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/16/Modern-Arabic-Villa-Architectural-Design-1.1579168023.1665.jpg",
      alt: "Investment Opportunities",
      date: "April 25, 2025",
      tag: "Investment",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="contact-section"
      className="contact-section"
    >
      <div className="container"></div>
    </section>
  );
};

export default ContactComponent;
