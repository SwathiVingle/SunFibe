import React from "react";
import "./Hero.css";
import heroImg from "./imag1.png"; // placeholder: add image in src/assets

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-inner">
          <h1>Precision. Durability. Performance.</h1>
          <p className="sub">
            Sun Fibe delivers premium ABS & PP bike body parts — engineered for
            OEM quality.
          </p>

          <div className="hero-ctas">
            <a href="#products" className="btn btn-primary">
              View Products
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              style={{ marginLeft: 12 }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
