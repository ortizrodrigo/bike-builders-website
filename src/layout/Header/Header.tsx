import "@/layout/Header/Header.css";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import NavItem from "@/layout/NavItem/NavItem";
import { NavLink } from "react-router";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="header-left">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="header-logo" className="header-logo" />
          <h1 className="header-title">Bike Builders of Berkeley</h1>
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavItem to="/about" label="About Us" onClick={closeMenu} />
          <NavItem to="/projects" label="Projects" onClick={closeMenu} />
          <NavItem to="/members" label="Members" onClick={closeMenu} />
          <NavItem to="/sponsors" label="Sponsors" onClick={closeMenu} />
          <div className="u-show-xs u-show-sm u-show-md">
            <NavItem to="/contact" label="Contact Us" onClick={closeMenu} />
          </div>
          <div className="u-show-xs u-show-sm u-show-md">
            <NavItem to="/apply" label="Apply Now" onClick={closeMenu} />
          </div>
        </nav>
      </div>
      <div className={`header-right ${menuOpen ? "open" : ""}`}>
        <NavLink to="/contact" className="blank-button">
          Contact Us
        </NavLink>
        <NavLink to="/apply" className="white-button">
          Apply Now
        </NavLink>
      </div>
      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}

export default Header;
