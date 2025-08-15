import React from "react";
import "./Hero.css"; // We'll style separately for clarity

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Building the Future, Cultivating the Present</h1>
          <p>Excellence in Agriculture • Construction • Real Estate</p>
          <div className="hero-buttons">
            <button className="btn-gold">Our Services</button>
            <button className="btn-outline-gold">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
