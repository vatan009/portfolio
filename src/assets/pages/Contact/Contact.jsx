import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sending email or API request here
    alert("Message submitted! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for projects, collaboration, or just a chat!
      </p>

      <div className="contact-card">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

        {/* Direct Contact Info */}
        <div className="contact-info">
          <h3>Direct Contact</h3>
          <p>Email: pawarvatan96@gmail.com</p>
          <p>Phone: +91 9156893302</p>
          <p>Location: India</p>

          {/* Social links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vatanp/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/vatanp" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/vatanp/" target="_blank" rel="noreferrer">
              <SiLeetcode />
            </a>
            <a href="https://auth.geeksforgeeks.org/user/vatanp/" target="_blank" rel="noreferrer">
              <SiGeeksforgeeks />
            </a>
            <a href="https://codeforces.com/profile/vatanp" target="_blank" rel="noreferrer">
              <SiCodeforces />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
