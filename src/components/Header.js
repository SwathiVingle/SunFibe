import "./Header.css";
import logo from "./sunfibe-logo.jpeg"; // <-- yaha apna logo file daalna

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Sun Fibe Logo" />
          <span>SUN FIBE</span>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
