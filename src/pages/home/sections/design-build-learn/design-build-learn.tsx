import "@/pages/home/home.css";
import "@/pages/home/sections/design-build-learn/design-build-learn.css";
import { dblleft, dblright } from "@/assets/home";

function DesignBuildLearnSection() {
  return (
    <section className="dbl-section">
      <h2 className="dbl-title">Design, Build, Learn</h2>
      <p className="dbl-description">
        We design, build, and test all things bikes with a focus on creating frames from scratch.
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="dbl-images">
        <img src={dblleft} alt="" className="dbl-image" />
        <img src={dblright} alt="" className="dbl-image" />
      </div>
    </section>
  );
}

export default DesignBuildLearnSection;
