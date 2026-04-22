import "@/pages/Home/style.css";
import "@/pages/Home/sections/Projects/style.css";
import placeholder from "@/assets/placeholder.jpeg";

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        We have a fleet of bike projects under our belt, with more coming soon. Check out what we're
        working on!
      </p>
      {/* TODO: set proper aspect ratio */}
      <div className="projects-images">
        {/* TODO: LabeledImage Component */}
        <img src={placeholder} alt="placeholder 1" className="projects-image projects-image-1" />
        <img src={placeholder} alt="placeholder 2" className="projects-image projects-image-2" />
        <img src={placeholder} alt="placeholder 3" className="projects-image projects-image-3" />
        <img src={placeholder} alt="placeholder 4" className="projects-image projects-image-4" />
        <img src={placeholder} alt="placeholder 5" className="projects-image projects-image-5" />
      </div>
    </section>
  );
}

export default ProjectsSection;
