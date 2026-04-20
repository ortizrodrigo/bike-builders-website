import "@/layout/Header/Header.css";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import NavItem from "@/layout/NavItem/NavItem";
import { NavLink } from "react-router";

function Header() {
  const [scrolled, setScrolled] = useState(false);

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

        <nav className="nav-links">
          <NavItem to="/about" label="About Us" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/members" label="Members" />
          <NavItem to="/sponsors" label="Sponsors" />
        </nav>
      </div>
      <div className="header-right">
        <NavLink to="/contact" className="cta contact-us">
          Contact Us
        </NavLink>
        <NavLink to="/apply" className="cta apply-now">
          Apply Now
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
