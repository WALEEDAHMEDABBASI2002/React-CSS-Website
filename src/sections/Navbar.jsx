import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO IMAGE */}
        <div className="logo">
          <img src="../public/logo/frame12.png" alt="AI Bot Logo" className="logo-img" />
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/about" onClick={handleNavClick}>About</NavLink>
          <NavLink to="/services" onClick={handleNavClick}>Services</NavLink>
          <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}
