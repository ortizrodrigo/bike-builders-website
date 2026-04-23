import "@/pages/home/home.css";
import "@/pages/home/sections/member-spotlight/member-spotlight.css";
import { Link } from "react-router";

function MemberSpotlightSection() {
  return (
    <section className="ms-section white-section">
      <h3 className="ms-title">Member Spotlight</h3>
      {/* TODO: Member Component inside Carousel Component*/}
      <div className="ms-member-carousel">TODO: Member Carousel</div>
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
  );
}

export default MemberSpotlightSection;
