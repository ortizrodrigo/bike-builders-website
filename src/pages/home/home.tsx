import "@/pages/home/home.css";

import {
  HeroSection,
  DesignBuildLearnSection,
  WhoWeAreSection,
  MemberSpotlightSection,
  ProjectsSection,
  SponsorsSection,
  NewsletterSection,
} from "./sections";

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
      <SponsorsSection />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
