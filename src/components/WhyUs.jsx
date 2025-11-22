import React from "react";
import "./WhyUs.css";

const points = [
  {
    id: 1,
    title: "OEM Quality",
    desc: "Stringent dimensional & finish checks.",
  },
  {
    id: 2,
    title: "In-house Paint",
    desc: "Dust-free painting & color matching.",
  },
  {
    id: 3,
    title: "Fast Turnaround",
    desc: "Optimized production for on-time delivery.",
  },
  {
    id: 4,
    title: "Sustainable",
    desc: "Material recycling & waste reduction.",
  },
  {
    id: 5,
    title: "Affordable Prices",
    desc: "High-quality bike parts at competitive rates.",
  },
  {
    id: 6,
    title: "Durable Materials",
    desc: "Long-lasting ABS & PP components built to withstand wear and tear.",
  },
  {
    id: 7,
    title: "Wide Product Range",
    desc: "Comprehensive selection of bike body parts to meet diverse needs.",
  },
  {
    id: 8,
    title: "Expert Support",
    desc: "Professional guidance from our experienced team for all orders.",
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="section" style={{ background: "#f7f9ff" }}>
      <div className="container">
        <h2 style={{ color: "#0033a0", marginBottom: 16 }}>
          Why Choose Sun Fibe
        </h2>
        <div className="why-grid">
          {points.map((p) => (
            <div key={p.id} className="why-card">
              <div className="why-icon">✓</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
