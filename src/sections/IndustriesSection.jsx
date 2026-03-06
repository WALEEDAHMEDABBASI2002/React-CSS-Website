import { useState } from "react";
import "../css/IndustriesSection.css";

const industries = [
  {
    id: "call-centers",
    title: "Call Centers",
    description:
      "Automate inbound and outbound calls, reduce wait times, and handle high call volumes with AI-powered voice agents.",
    tags: ["AI Call Agents", "Voice AI", "Branding", "Multi-Language"],
    image: "/industries/Industries2.avif",
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    description:
      "Improve conversions and support with AI chat and call bots for order tracking, returns, and customer inquiries.",
    tags: ["AI Chat Agents", "Order Support", "24/7 Availability", "Social Media Posts"],
    image: "/industries/Industries3.avif",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Automate patient calls, appointment scheduling, and support queries while ensuring compliance and data security.",
    tags: ["Patient Support", "SoftwareDevelopment", "AI Call Agents", "Compliance Ready"],
    image: "/industries/Industries4.jpg",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Handle property inquiries, lead qualification, and follow-ups automatically with intelligent AI assistants.",
    tags: ["Lead Qualification", "Social Media Posts", "AI Chat Agents", "CRM Integration"],
    image: "/industries/Industries5.avif",
  },
  {
    id: "customer-support",
    title: "Customer Support",
    description:
      "Reduce ticket volume and response times by letting AI handle common questions and support requests.",
    tags: ["AI Chat Agents", "Support Automation", "24/7 Service", "Content Writing"],
    image: "/industries/Industries6.avif",
  },
  {
    id: "logistics",
    title: "Logistics",
    description:
      "Automate shipment tracking, service scheduling, and customer updates with AI-powered communication.",
    tags: ["Status Updates", "Voice Automation", "System Integration", "Web Development"],
    image: "/industries/Industries1.jpg",
  },
  {
    id: "fashion",
    title: "Fashion & Apparel",
    description:
      "Enhance customer engagement with AI assistants for product discovery, sizing help, and order support.",
    tags: ["Product Assistance", "AI Chat Agents", "Customer Engagement", "Branding", "Social Media Posts"],
    image: "/industries/Industries7.jpg",
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="section industries-section bg-black">
      <div className="container industries-container">

        {/* LEFT: INDUSTRY SELECTOR */}
        <div className="industries-list">
          {industries.map((industry) => (
            <button
              key={industry.id}
              className={`industry-item ${
                activeIndustry.id === industry.id ? "active" : ""
              }`}
              onClick={() => setActiveIndustry(industry)}
            >
              {industry.title}
            </button>
          ))}
        </div>

        {/* RIGHT: DETAILS + IMAGE */}
        <div className="industry-details">

          {/* Progressive Image */}
          <div className="industry-image-wrapper">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              loading="lazy"        /* 🔥 Progressive loading */
              decoding="async"      /* 🔥 Non-blocking decode */
            />
          </div>

          <h3>{activeIndustry.title}</h3>
          <p>{activeIndustry.description}</p>

          <div className="industry-tags">
            {activeIndustry.tags.map((tag, index) => (
              <span key={index} className="industry-tag">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}