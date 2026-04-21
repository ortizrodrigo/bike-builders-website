import "@/pages/Home/Home.css";
import { Link } from "react-router";
import logo from "@/assets/logo.svg";
import dbl_left from "@/assets/home/dbl-left.jpg";
import dbl_right from "@/assets/home/dbl-right.jpg";
import placeholder from "@/assets/placeholder.jpeg";

function HomePage() {
  return (
    <div className="home-page">
      {/* Bike Path */}
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
      {/* Hero */}
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
      {/* Design, Build, Learn */}
      <section className="dbl-section">
        <h2 className="dbl-title">Design, Build, Learn</h2>
        <p className="dbl-description">
          We design, build, and test all things bikes with a focus on creating frames from scratch.
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="dbl-images">
          <img src={dbl_left} alt="" className="dbl-image" />
          <img src={dbl_right} alt="" className="dbl-image" />
        </div>
      </section>
      {/* Who We Are */}
      <section className="wwa-section white-section">
        <h2 className="wwa-title">Who We Are</h2>
        <div className="wwa-inner-layout">
          <div className="wwa-left">
            <h3 className="wwa-subtitle">#1 Bike Building Team</h3>
            <p className="wwa-description">
              Founded in Fall 2021, we are a relatively new engineering club pioneering the bike
              building field among universities. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Exercitationem ipsa consequatur velit libero commodi doloremque!
            </p>
            <p className="wwa-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporis nemo, nam
              repudiandae cum dolores.
            </p>
          </div>
          <div className="wwa-right">
            <img src={placeholder} alt="bike builders who we are video" className="wwa-image" />
          </div>
        </div>
      </section>
      {/* Member Spotlight */}
      <section className="ms-section white-section">
        <h3 className="ms-title">Member Spotlight</h3>
        <div className="ms-member-carousel">TODO</div>
        <p className="ms-description">
          We are a team of undergraduate students at UC Berkeley. Everyone plays in integral role in
          building a bike, from organizing the business side of things to making custom components.
          Our community is open to everyone!
        </p>
        <div className="ms-links">
          <Link className="blue-button" to={"/apply"}>
            Join Us
          </Link>
          <Link className="purple-button" to={"/contact"}>
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
