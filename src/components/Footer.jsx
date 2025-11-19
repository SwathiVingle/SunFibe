import React from "react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="left">
          <div className="logo-txt">SUN FIBE</div>
          <p className="muted">© {new Date().getFullYear()} Sun Fibe. All rights reserved.</p>
        </div>

        <div className="right">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
