import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <span>Lawctopus</span>
        </div>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#why" onClick={() => setMenuOpen(false)}>
              Why Join
            </a>
          </li>

          <li>
            <a href="#curriculum" onClick={() => setMenuOpen(false)}>
              Curriculum
            </a>
          </li>

          <li>
            <a href="#faculty" onClick={() => setMenuOpen(false)}>
              Faculty
            </a>
          </li>

          <li>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
          </li>

          <li>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>

        {/* Button */}
        <a href="#pricing" className="nav-btn">
          Enroll Now
        </a>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;