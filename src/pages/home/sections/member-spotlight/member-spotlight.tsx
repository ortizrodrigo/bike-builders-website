import "@/pages/home/home.css";
import "@/pages/home/sections/member-spotlight/member-spotlight.css";
import { Link } from "react-router";
import MemberCard from "./components/member-card";
import placeholder from "@/assets/placeholder.jpeg";
import { Carousel } from "@/components";

function MemberSpotlightSection() {
  return (
    <section className="ms-section white-section">
      <h3 className="ms-title">Member Spotlight</h3>
      <Carousel duration={30}>
        <MemberCard
          name="Ziven Posner"
          role="Founder"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptate! Libero distinctio laudantium illum non!"
          image={placeholder}
        />
        <MemberCard
          name="Ziven Posner"
          role="Founder"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo magnam, officiis eos ipsum placeat! Quo esse, repudiandae tempore aspernatur minus a quod nulla! Ea!"
          image={placeholder}
        />
      </Carousel>
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
