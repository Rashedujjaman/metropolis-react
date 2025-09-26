import { useState, useEffect } from "react";
import {
  FAQ,
  Testimonial,
  Project,
  Service,
  Statistic,
  BlogPost,
} from "../types/home.types";

export const useHomeData = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

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
            name: "David T. Johnson",
            position: "Entrepreneur",
            company: "Johnson Enterprises",
            content:
              "Working with Metropolis has been an exceptional experience. Their commitment to quality and innovation in urban development is unmatched. The team's attention to detail and dedication to creating sustainable communities aligns perfectly with our vision for the future of city living. From initial consultation through project completion, their professionalism and expertise shine through every aspect of their work.",
            rating: 5,
            avatar: "/text_photo.jpg",
          },
          {
            id: 2,
            name: "Sarah Mitchell",
            position: "Property Manager",
            company: "Premium Properties LLC",
            content:
              "Metropolis delivered beyond our expectations. Their innovative approach to sustainable urban development and attention to community-focused design resulted in properties that not only meet current market demands but anticipate future needs. The project management was exemplary, with clear communication and adherence to timelines throughout the entire development process.",
            rating: 5,
            avatar: "/img_1.png",
          },
          {
            id: 3,
            name: "Michael Rodriguez",
            position: "Real Estate Developer",
            company: "Rodriguez Development Group",
            content:
              "The partnership with Metropolis transformed our vision into reality. Their expertise in urban revitalization and property management created lasting value for our investment. The quality of construction, innovative design solutions, and commitment to sustainability standards exceeded industry benchmarks and delivered exceptional returns.",
            rating: 5,
            avatar: "/creatio.png",
          },
          {
            id: 4,
            name: "Emily Chen",
            position: "City Planning Director",
            company: "Metropolitan Planning Commission",
            content:
              "Metropolis demonstrates exceptional understanding of modern urban challenges. Their developments seamlessly integrate with existing infrastructure while introducing innovative solutions for community living. The collaborative approach and commitment to regulatory compliance made our approval process smooth and efficient.",
            rating: 5,
            avatar: "/laurel.webp",
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

        const blogData: BlogPost[] = [
          {
            id: "1",
            title: "Real Estate Innovations: Pioneering The Future",
            date: "2025-04-30",
            author: "Sarah Mitchell",
            content:
              "Exploring cutting-edge technologies and innovative approaches that are transforming the real estate development landscape. From smart building systems to sustainable construction materials, discover how Metropolis is leading the industry into a new era of urban development.",
            imageUrl:
              "https://mir-s3-cdn-cf.behance.net/projects/404/a6934b228623591.Y3JvcCwyMTE0LDE2NTQsMTk4LDA.png",
            tags: ["Insight", "Innovation", "Future", "Technology"],
          },
          {
            id: "2",
            title: "Real Estate Market Trends: Promising Growth",
            date: "2025-04-30",
            author: "Michael Rodriguez",
            content:
              "An in-depth analysis of current market dynamics, emerging investment opportunities, and growth projections in the real estate sector. Learn about the key factors driving market expansion and how strategic development approaches can maximize returns.",
            imageUrl:
              "https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/16/Modern-Arabic-Villa-Architectural-Design-1.1579168023.1665.jpg",
            tags: ["Trends", "Market Analysis", "Investment", "Growth"],
          },
        ];

        setFaqs(faqData);
        setTestimonials(testimonialsData);
        setServices(servicesData);
        setStatistics(statisticsData);
        setBlogPosts(blogData);
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
    blogPosts,
    loading,
    toggleFaq,
    featuredProjects: projects.slice(0, 3), // Get first 3 as featured
  };
};
