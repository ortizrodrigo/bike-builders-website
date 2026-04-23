import "@/layout/footer/footer.css";
import logo from "@/assets/logo.svg";
import { Link } from "react-router";
import { Carousel } from "@/components";

function Footer() {
  return (
    <footer>
      <Carousel withDot>
        <>STAY IN THE LOOP</>
        <>STAY IN THE LOOP</>
        <>STAY IN THE LOOP</>
        <>STAY IN THE LOOP</>
      </Carousel>
      <div className="footer-links">
        <div className="column">
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
          <Link to="/members" className="footer-link">
            Members
          </Link>
        </div>
        <div className="column">
          <Link to="/sponsors" className="footer-link">
            Sponsors
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
          <Link to="/apply" className="footer-link">
            Apply Now
          </Link>
        </div>
        <div className="column">
          <Link to="" className="footer-link">
            LinkedIn ↗
          </Link>
          <Link to="" className="footer-link">
            Instagram ↗
          </Link>
          <Link to="" className="footer-link">
            Facebook ↗
          </Link>
          <Link to="" className="footer-link">
            Github ↗
          </Link>
        </div>
      </div>
      <div className="footer-brand">
        <img src={logo} alt="footer-logo" className="footer-logo" />
        <div className="column">
          <div className="footer-name">Bike</div>
          <div className="footer-name">Builders</div>
          <div className="footer-name">of Berkeley</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
