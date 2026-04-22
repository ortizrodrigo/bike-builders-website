import "@/pages/Home/style.css";
import "@/pages/Home/sections/Sponsors/style.css";
import { Link } from "react-router";

function SponsorsSection() {
  return (
    <section className="sponsors-section white-section">
      <h2 className="sponsors-title">Sponsors</h2>
      <p className="sponsors-description">
        We are grateful for the people and companies that make our journey possible!
      </p>
      {/* TODO: sponsor images inside Carousel Component*/}
      <div className="sponsors-carousel">TODO: Sponsors Carousel</div>
      <Link className="blue-button" to={"/contact"}>
        Sponsor Us
      </Link>
    </section>
  );
}

export default SponsorsSection;
