import "@/pages/About/About.css";
import { Link } from "react-router";
import logo from "@/assets/logo.svg";

function AboutPage() {
  return (
    <div className="about-page">
      <svg className="bike-path" viewBox="0 0 500 200">
        <path
          d="M 0 150 
       C 150 260, 250 -20, 500 50"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>
      <section className="hero">
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
    </div>
  );
}

export default AboutPage;
