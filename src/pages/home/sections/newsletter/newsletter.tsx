import "@/pages/home/home.css";
import "@/pages/home/sections/newsletter/newsletter.css";
import { Link } from "react-router";
import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="newsletter-section ">
      <div className="newsletter-left">
        <h2 className="newsletter-title">Newsletter</h2>
        <p className="newsletter-description">
          Subscribe to our email updates for new info, merch drops, and more!
        </p>
      </div>
      <div className="newsletter-right">
        {/* TODO: Newsletter */}
        <div className="newsletter-form">
          <input
            type="text"
            className="newsletter-form-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link className="blue-button newsletter-form-submit" to={"/contact"}>
            Sign Up
          </Link>
        </div>
        <div className="newsletter-form-mobile u-show-xs u-show-sm">
          <input
            type="text"
            className="newsletter-form-input-mobile"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Link className="purple-button newsletter-form-submit-mobile" to={"/contact"}>
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
