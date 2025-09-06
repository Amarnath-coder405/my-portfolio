import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const techStack = [
  { name: "HTML5", icon: "/icons/html.svg" },
  { name: "CSS3", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
];

const TechStack = () => {
  return (
    <section className="tech-section" id="techstack">
      <div className="tech-container">
        <h2 className="tech-title">My Tech Stack</h2>
        <p className="tech-subtitle">Technologies I use to build stunning, responsive web applications.</p>

        <div className="tech-grid">
          {techStack.map((tech, idx) => (
            <div className="tech-item" key={idx}>
              <img src={tech.icon} alt={`${tech.name} logo`} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
