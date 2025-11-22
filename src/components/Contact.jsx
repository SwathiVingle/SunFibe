import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="contact-left">
          <h2 style={{ color: "#0033a0" }}>Contact Us</h2>
          <p>For enquiries and OEM partnerships, connect with Sun Fibe.</p>

          <div className="contact-info">
            <p>
              <strong>Phone:</strong> +91 9284092602
            </p>
            <p>
              <strong>Email:</strong> sunfibe@gmail.com
            </p>
            <p>
              <strong>Address:</strong> SUN TECH INDUSTRIES, Gut No. 63,Shajapur
              Chauful,Bombay Highway,Talika Aurangabad,
              District-Aurangabad-431136
            </p>
          </div>

          <a
            href="mailto:sunfibe@gmail.com"
            className="btn btn-primary"
            style={{ marginTop: 12 }}
          >
            Email Us
          </a>
        </div>

        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we will contact you!");
            }}
          >
            <input required name="name" placeholder="Your name" />
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
            />
            <textarea
              required
              name="message"
              rows="6"
              placeholder="How can we help?"
            ></textarea>
            <button className="btn btn-primary" style={{ marginTop: 8 }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
