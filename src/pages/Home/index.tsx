import "@/pages/Home/style.css";
import HeroSection from "./sections/Hero";
import DesignBuildLearnSection from "./sections/DesignBuildLearn";
import WhoWeAreSection from "./sections/WhoWeAre";
import MemberSpotlightSection from "./sections/MemberSpotlight";
import ProjectsSection from "./sections/Projects";

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
      <HeroSection />
      <DesignBuildLearnSection />
      <WhoWeAreSection />
      <MemberSpotlightSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
