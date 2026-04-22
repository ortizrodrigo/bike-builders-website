import "@/pages/Home/style.css";
import "@/pages/Home/sections/WhoWeAre/style.css";
import placeholder from "@/assets/placeholder.jpeg";

function WhoWeAreSection() {
  return (
    <section className="wwa-section white-section">
      <h2 className="wwa-title">Who We Are</h2>
      <div className="wwa-inner-layout">
        <div className="wwa-left">
          <h3 className="wwa-subtitle">#1 Bike Building Team</h3>
          <p className="wwa-description">
            Founded in Fall 2021, we are a relatively new engineering club pioneering the bike
            building field among universities. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Exercitationem ipsa consequatur velit libero commodi doloremque!
          </p>
          <p className="wwa-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporis nemo, nam
            repudiandae cum dolores.
          </p>
        </div>
        <div className="wwa-right">
          <img src={placeholder} alt="bike builders who we are video" className="wwa-image" />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
