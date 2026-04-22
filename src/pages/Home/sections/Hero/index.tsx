import "@/pages/Home/style.css";
import "@/pages/Home/sections/Hero/style.css";
import { Link } from "react-router";
import logo from "@/assets/logo.svg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">
          Bike <br />
          Builders <br />
          of Berkeley
        </h1>
        <div className="hero-links">
          <Link className="white-button" to={"/projects"}>
            Our Projects
          </Link>
          <Link className="blank-button" to={"/contact"}>
            Learn More About Sea Otter
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={logo} alt="hero-logo" className="hero-logo" />
      </div>
    </section>
  );
}

export default HeroSection;
