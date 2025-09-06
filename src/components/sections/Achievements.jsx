import React from "react";
import "../styles/styles.css";

const achievements = [
  {
    title: "Top 1% on Frontend Mentor",
    organization: "Frontend Mentor",
    year: "2024",
    description: "Recognized as one of the top-performing frontend developers on the platform.",
    badge: "/achievements/frontendmentor.png",
  },
  {
    title: "Google UX Design Certificate",
    organization: "Google",
    year: "2023",
    description: "Completed a comprehensive program covering UX research, wireframing, and prototyping.",
    badge: "/achievements/googleux.png",
  },
  {
    title: "100+ GitHub Contributions",
    organization: "GitHub",
    year: "2024",
    description: "Consistent open-source contributor to React, UI libraries, and personal projects.",
    badge: "/achievements/github.png",
  },
];

const Achievements = () => {
  return (
    <section className="achievement-section" id="achievements">
      <div className="achievement-container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Milestones that showcase my commitment to excellence.</p>

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <img src={item.badge} alt={`${item.title} badge`} className="achievement-badge" />
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-organization">
                  {item.organization} — <span className="achievement-year">{item.year}</span>
                </p>
                <p className="achievement-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
