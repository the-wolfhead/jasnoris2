import React from "react";
import "./Services.css";
import { FaTractor, FaHardHat, FaBuilding } from "react-icons/fa";

const Services = () => {
  const categories = [
    {
      icon: <FaTractor />,
      title: "Agriculture & Mechanized Farming",
      desc: "Modern farming technologies, cultivation, and farm machinery rentals that maximize productivity.",
    },
    {
      icon: <FaHardHat />,
      title: "Construction & Infrastructure",
      desc: "Road construction, building development, and civil engineering works delivered with precision and durability.",
    },
    {
      icon: <FaBuilding />,
      title: "Real Estate Development",
      desc: "Residential, commercial, and industrial property solutions designed for modern demands.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {categories.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
