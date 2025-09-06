import React from "react";
import "../styles/styles.css";


const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Product Manager at Upstart",
    photo: "/avatar/pro_avatar.jpg",
    feedback:
      "Working with you was a delight! Your attention to detail and responsiveness helped us ship the new UI faster than expected.",
  },
  {
    name: "David Lee",
    title: "Founder at DevLaunch",
    photo: "/avatar/pro_avatar2.jpg",
    feedback:
      "Exceptional work — clean code, modern design, and excellent communication. Highly recommended for any frontend project.",
  },
  {
    name: "Emily Stone",
    title: "Design Lead at StudioPixel",
    photo: "/avatar/pro_avatar3.jpg",
    feedback:
      "You turned our Figma designs into a perfect responsive site. The animations and UX were flawless. Would love to collaborate again!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client Feedback</h2>
        <p className="testimonials-subtitle">
          What my clients say about working with me.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((client, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">"{client.feedback}"</div>
              <div className="testimonial-client">
                <img
                  src={client.photo}
                  alt={client.name}
                  className="testimonial-avatar"
                />
                <div>
                  <p className="client-name">{client.name}</p>
                  <p className="client-title">{client.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
