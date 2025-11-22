import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-left">
          <h2>About Sun Fibe</h2>
          <p>
            Sun Fibe is a leading manufacturer of high-quality ABS and PP
            motorcycle body parts, dedicated to delivering components that meet
            and exceed OEM standards. With a strong focus on precision
            engineering, innovative design, and superior finishing, we cater to
            the needs of two-wheeler manufacturers and aftermarket suppliers
            alike.
          </p>
          <p>
            Our state-of-the-art in-house facilities include advanced injection
            molding and a paint finishing shop, ensuring consistent quality and
            durability in every product. We specialize in creating components
            such as headlight covers, mudguards, helmets, chain guards, and side
            covers, combining functionality with aesthetic appeal.
          </p>
          <p>
            With years of experience in the two-wheeler industry, Sun Fibe
            stands out for:
          </p>
          <ul className="about-list">
            <li>
              Expertise in Two-Wheeler Components: Leveraging extensive industry
              knowledge to design and manufacture parts that enhance performance
              and safety.
            </li>
            <li>
              In-House Manufacturing: From injection molding to finishing, we
              control every step of the production process for superior quality
              assurance.
            </li>
            <li>
              Strict Quality Checks: Rigorous testing and material verification
              ensure every product meets the highest standards for reliability,
              durability, and safety.
            </li>
          </ul>
          <p>
            Our commitment to innovation, precision, and customer satisfaction
            makes Sun Fibe a trusted partner for premium motorcycle components.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>Our Capacity</h3>
            <p>
              High-volume manufacturing capability with modern injection molding
              machines.
            </p>
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
