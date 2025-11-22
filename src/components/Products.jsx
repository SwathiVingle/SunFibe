import React from "react";
import "./Products.css";
import HeadLightCover from "./assets/HeadLightCover.png";
import ChainGaurd from "./assets/ChainGaurd.png";
import SideCover from "./assets/SideCover.png";
import MudGaurd from "./assets/MudGaurd.png";
import AllParts from "./assets/AllParts.png";
import Helmet from "./assets/Helmet.png";


const products = [
  {
    id: 1,
    title: "All Parts of Motor Cycle",
    img: AllParts,
    mat: "ABS",
    desc: "All parts made from ABS (Acrylonitrile Butadiene Styrene)",
  }, {
    id: 2,
    title: "Head Light Cover",
    img: HeadLightCover,
    mat: "ABS",
    desc: "High finish Head Light Cover for motorcycles.",
  },   {
    id: 3,
    title: "Helmet",
    img: Helmet,
    mat: "ABS",
    desc: "Protective motorcycle helmet.",
  },
  {
    id: 4,
    title: "Mudguard (Front/Rear)",
    img: MudGaurd,
    mat: "PP",
    desc: "Durable mudguards with UV resistance.",
  },
  {
    id: 5,
    title: "Chain Gaurd",
    img: ChainGaurd,
    mat: "ABS",
    desc: "Decorative & protective chain covers.",
  },  {
    id: 6,
    title: "Side Coverr",
    img: SideCover,
    mat: "ABS",
    desc: "Decorative Side covers.",
  }
];

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 style={{ color: "#0033a0", marginBottom: 16 }}>Products</h2>
        <div className="grid-3">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div
                className="product-media"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="product-body">
                <h4>{p.title}</h4>
                <p className="mat">{p.mat}</p>
                <p className="desc">{p.desc}</p>
                <a
                  className="btn"
                  href="#contact"
                  style={{
                    marginTop: 10,
                    background: "#0033a0",
                    color: "#fff",
                  }}
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
