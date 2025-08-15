import React from "react";
import "./WhyChooseUs.css";
import { FaCogs, FaUsersCog, FaClock, FaGlobeAfrica, FaLeaf } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCogs />,
      title: "Cutting-edge Technology",
      desc: "We harness modern machinery and innovative methods for efficiency and precision.",
    },
    {
      icon: <FaUsersCog />,
      title: "Skilled Workforce",
      desc: "A team of experts with decades of combined experience across sectors.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      desc: "Projects executed with meticulous planning and on-time completion.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "Nationwide Reach",
      desc: "Serving clients and communities across Nigeria with consistency.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability Focus",
      desc: "Committed to eco-friendly practices and community empowerment.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
