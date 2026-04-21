import "@/pages/Home/Home.css";
import { Link } from "react-router";
import logo from "@/assets/logo.svg";
import dbl_left from "@/assets/home/dbl-left.jpg";
import dbl_right from "@/assets/home/dbl-right.jpg";

function HomePage() {
  return (
    <div className="home-page">
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
      <section className="dbl-section">
        <h1 className="dbl-title">Design, Build, Learn</h1>
        <p className="dbl-description">
          We design, build, and test all things bikes with a focus on creating frames from scratch.
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="dbl-images">
          <img src={dbl_left} alt="" className="dbl-image" />
          <img src={dbl_right} alt="" className="dbl-image" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
