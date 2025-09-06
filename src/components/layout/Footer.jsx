import React from "react";
import "../styles/styles.css";
import SocialLinks from "../sections/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Column 1: Logo & Intro */}
        <div className="footer-col footer-brand">
          <h2>{"<Amarnath_Dev/>"}</h2>
          <p>
            Building clean, performant, and accessible web interfaces for the modern web.
          </p>
        </div>

        {/* Column 2: Site Links */}
        <div className="footer-col footer-nav">
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#connect">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social & Contact */}
        <div className="footer-col footer-social">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:your.email@example.com">Email</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
      <SocialLinks />

      <div className="footer-bottom">
        <p>© {currentYear} YourName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
