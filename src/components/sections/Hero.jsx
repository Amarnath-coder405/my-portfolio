import React from "react";
import "../styles/styles.css"; // Import the CSS file
import profileImg from "/profile.jpg"; // Replace with your own image

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {/* Text Section */}
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Amarnath</span>
          </h1>
          <h2>Frontend Developer & UI/UX Enthusiast</h2>
          <p>
            I build fast, responsive, and modern web apps using the latest tech
            stacks. Let's collaborate to bring your ideas to life.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Let’s Talk</a>
            <a href="/resume.pdf" className="btn secondary" download>
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image">
          <img src={profileImg} alt="Your Name" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
