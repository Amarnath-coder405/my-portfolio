import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import "../styles/styles.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-meta">
                {project.type && <span className="badge type">{project.type}</span>}
                {project.status && <span className="badge status">{project.status}</span>}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noreferrer">Live</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
