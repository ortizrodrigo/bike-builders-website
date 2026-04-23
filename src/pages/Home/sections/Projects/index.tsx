import "@/pages/Home/style.css";
import "@/pages/Home/sections/Projects/style.css";
import placeholder from "@/assets/placeholder.jpeg";
import { LabeledImage } from "@/components";

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        We have a fleet of bike projects under our belt, with more coming soon. Check out what we're
        working on!
      </p>
      <div className="projects-images">
        <LabeledImage
          src={placeholder}
          alt="placeholder 1"
          label="Team Jersey V2"
          className="projects-image projects-image-1"
        />
        <LabeledImage
          src={placeholder}
          alt="placeholder 2"
          label="Telemetry V1"
          className="projects-image projects-image-2"
        />
        <LabeledImage
          src={placeholder}
          alt="placeholder 3"
          label="Gravel Bike V1"
          className="projects-image projects-image-3"
        />
        <LabeledImage
          src={placeholder}
          alt="placeholder 4"
          label="Mountain Bike V2"
          className="projects-image projects-image-4"
        />
        <LabeledImage
          src={placeholder}
          alt="placeholder 5"
          label="Weilding Jig V3"
          className="projects-image projects-image-5"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
