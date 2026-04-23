import "@/pages/home/home.css";
import "@/pages/home/sections/sponsors/sponsors.css";
import { Link } from "react-router";
import { Carousel } from "@/components";
import placeholder from "@/assets/placeholder.jpeg";

function SponsorsSection() {
  return (
    <section className="sponsors-section white-section">
      <h2 className="sponsors-title">Sponsors</h2>
      <p className="sponsors-description">
        We are grateful for the people and companies that make our journey possible!
      </p>
      {/* TODO: sponsor images inside Carousel Component*/}
      <Carousel>
        <img src={placeholder} alt="sponsor" className="sponsors-image" />
        <img src={placeholder} alt="sponsor" className="sponsors-image" />
        <img src={placeholder} alt="sponsor" className="sponsors-image" />
        <img src={placeholder} alt="sponsor" className="sponsors-image" />
      </Carousel>
      <Link className="blue-button" to={"/contact"}>
        Sponsor Us
      </Link>
    </section>
  );
}

export default SponsorsSection;
