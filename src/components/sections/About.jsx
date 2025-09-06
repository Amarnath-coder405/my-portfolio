import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";
import aboutImg from "/about.jpg"; // Replace with your own image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left: Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="About" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer who enjoys creating sleek,
            responsive, and accessible web applications. With a strong
            background in design and modern JavaScript frameworks, I specialize
            in building polished user interfaces and seamless UX.
          </p>

          <div className="highlights">
            <div className="highlight-item">
              <h4>🎯 Focused</h4>
              <p>I focus on clean code, accessibility, and performance.</p>
            </div>
            <div className="highlight-item">
              <h4>🛠️ Skilled</h4>
              <p>Experienced in React, Vite, Next.js, and CSS architecture.</p>
            </div>
            <div className="highlight-item">
              <h4>🚀 Evolving</h4>
              <p>Always learning new technologies and improving workflows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
