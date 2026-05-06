import "@/pages/home/home.css";
import "@/pages/home/sections/projects/projects.css";
import {
  teamjerseyv2,
  telemetryv1,
  gravelbikev1,
  mountainbikev2,
  wieldingjigv3,
} from "@/assets/home";
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
          src={teamjerseyv2}
          alt="Team Jersey V2"
          label="Team Jersey V2"
          className="projects-image projects-image-1"
        />
        <LabeledImage
          src={telemetryv1}
          alt="Telemetry V1"
          label="Telemetry V1"
          className="projects-image projects-image-2"
        />
        <LabeledImage
          src={gravelbikev1}
          alt="Gravel Bike V1"
          label="Gravel Bike V1"
          className="projects-image projects-image-3"
        />
        <LabeledImage
          src={mountainbikev2}
          alt="Mountain Bike V2"
          label="Mountain Bike V2"
          className="projects-image projects-image-4"
        />
        <LabeledImage
          src={wieldingjigv3}
          alt="Weilding Jig V3"
          label="Weilding Jig V3"
          className="projects-image projects-image-5"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
