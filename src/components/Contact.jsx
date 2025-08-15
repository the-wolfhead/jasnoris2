import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Get in touch today.</p>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <span>+234 800 000 0000</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>info@jasnorisresources.com</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>123 Business Avenue, Lagos, Nigeria</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
