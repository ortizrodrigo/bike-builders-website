import "@/layout/Header/Header.css";
import { useState, useEffect } from "react";
import NavItem from "@/layout/NavItem/NavItem";

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
      <button className='logo'>Bike Builders of Berkeley</button>
      <nav className='nav-links'>
        <NavItem to='/about' label='About Us' />
        <NavItem to='/projects' label='Projects' />
        <NavItem to='/members' label='Members' />
        <NavItem to='/sponsors' label='Sponsors' />
      </nav>
      <button className='cta'>Contact Us</button>
      <button className='cta'>Apply Now</button>
    </header>
  );
}

export default Header;
