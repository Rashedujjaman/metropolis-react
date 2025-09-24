import { useState, useEffect } from "react";
import {
  FAQ,
  Testimonial,
  Project,
  Service,
  Statistic,
} from "../types/home.types";

export const useHomeData = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Simulate API calls - replace with actual API calls later
        const faqData: FAQ[] = [
          {
            id: 1,
            question: "What types of properties do you develop?",
            answer:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et dis consectetuer.",
            isOpen: false,
          },
          {
            id: 2,
            question: "What is the timeline for project completion?",
            answer:
              "Project timelines vary depending on size and complexity, but most residential developments take 18-36 months from groundbreaking to completion. We provide regular updates throughout the construction process and maintain transparent communication with all stakeholders.",
            isOpen: false,
          },
          {
            id: 3,
            question: "Are there any warranties or guarantees?",
            answer:
              "Yes, we offer a range of warranties and guarantees to ensure the quality and durability of our developments. These include structural warranties, appliance guarantees, and a comprehensive customer service program to address any post-purchase concerns.",
            isOpen: false,
          },
        ];

        // Mock data for other entities
        const testimonialsData: Testimonial[] = [
          {
            id: 1,
            name: "John Smith",
            position: "CEO",
            company: "ABC Corp",
            content:
              "Excellent service and quality construction. Highly recommended!",
            rating: 5,
            avatar: "/images/avatar1.jpg",
          },
        ];

        const servicesData: Service[] = [
          {
            id: 1,
            title: "Residential Development",
            description:
              "High-quality residential complexes designed for modern living",
            icon: "fa-home",
            features: [
              "Modern Architecture",
              "Smart Home Technology",
              "Green Building",
            ],
          },
        ];

        const statisticsData: Statistic[] = [
          {
            icon: "fa-building",
            number: "150+",
            label: "Projects Completed",
            description: "Successful developments delivered",
          },
        ];

        const projectsData: Project[] = [
          {
            id: 1,
            title: "Modern Lofts",
            description: "Contemporary urban living spaces",
            image: "/images/project1.jpg",
            status: "Completed",
            location: "Downtown",
            type: "Residential",
            units: 45,
            floors: 8,
            area: "2.5 acres",
            stats: {
              units: 45,
              sqFt: 125000,
              completion: "2024",
            },
            features: ["Rooftop Garden", "Gym", "Parking"],
          },
        ];

        setFaqs(faqData);
        setTestimonials(testimonialsData);
        setServices(servicesData);
        setStatistics(statisticsData);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleFaq = (id: number) => {
    setFaqs((prev) =>
      prev.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))
    );
  };

  return {
    faqs,
    testimonials,
    projects,
    services,
    statistics,
    loading,
    toggleFaq,
    featuredProjects: projects.slice(0, 3), // Get first 3 as featured
  };
};
