import React from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <div className="connect-container">
        {/* Heading */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        {/* Form + Info */}
        <div className="connect-grid">
          {/* Contact Info */}
          <motion.div
            className="connect-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>I'd love to hear from you! Whether it's a project, opportunity, or just a hello — let's talk.</p>
            <ul>
              <li><strong>Email:</strong> your.email@example.com</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>Location:</strong> Remote / Open to Relocate</li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="connect-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn primary">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
