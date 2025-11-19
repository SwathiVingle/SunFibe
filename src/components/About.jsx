import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-left">
          <h2>About Sun Fibe</h2>
          <p>
            Sun Fibe is a specialized manufacturer of high-quality ABS & PP bike body parts. We combine precision molding,
            in-house paint finishing and rigorous quality control to deliver OEM-standard components.
          </p>
          <ul className="about-list">
            <li>Years of experience in two-wheeler components</li>
            <li>In-house injection molding & paint shop</li>
            <li>Strict quality checks & material verification</li>
          </ul>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Our Capacity</h3>
            <p>High-volume manufacturing capability with modern injection molding machines.</p>
          </div>
          <div className="about-card">
            <h3>Material Expertise</h3>
            <p>ABS, PP and special blends tailored for strength & finish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
