import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      {/* Centered Heading */}
      <h2 className="about-title">About Us</h2>

      <div className="about-container">
        {/* Left: Image Collage */}
        <div className="about-images">
          <img src="farm.jpg" alt="Mechanized Farming" className="img-large" />
          <div className="img-stack">
            <img src="tractor.jpg" alt="Construction Work" className="img-small" />
            <img src="/images/realestate.jpg" alt="Real Estate" className="img-small" />
          </div>
        </div>

        {/* Right: Company Info */}
        <div className="about-text">
          <p>
            Founded in 2015, <strong>Jasnoris Resource Limited</strong> has grown into a 
            multifaceted enterprise in agriculture, construction, and real estate. 
            We deliver innovative solutions with uncompromising quality, exceeding 
            client expectations across sectors.
          </p>
          <p>
            Our vision is to enhance productivity, efficiency, and sustainable growth 
            while empowering communities and contributing to national development.
          </p>

          {/* Highlight Stats */}
          <div className="about-stats">
            <div><span>10+</span><p>Years of Excellence</p></div>
            <div><span>100+</span><p>Projects Delivered</p></div>
            <div><span>Nationwide</span><p>Operational Reach</p></div>
          </div>

          {/* CEO Excerpt */}
      <div className="ceo-section">
        <img src="ceo.jpg" alt="CEO" className="ceo-img" />
        <div className="ceo-text">
          <p className="ceo-quote">
            "At Jasnoris Resource Limited, our mission has always been to create lasting
            impact through innovation, integrity, and excellence. Every project we embark
            on is an opportunity to build not just structures, but trust and value for our
            clients and communities."
          </p>
          <h4 className="ceo-name">Engr. John Doe</h4>
          <p className="ceo-title">Chief Executive Officer</p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default About;
