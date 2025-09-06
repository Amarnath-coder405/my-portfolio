import React, { useState } from "react";
import "../styles/styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection("hero")}>
          {"<"}Amarnath_Dev{"/>"}
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("connect")}>Connect</li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
