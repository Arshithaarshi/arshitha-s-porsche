import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Region / Language */}
        <div className="footer-section">
          <h4>Current Region / Language</h4>
          <p>
            <i className="fas fa-globe"></i> International / English{" "}
            <a href="/">Change</a>
          </p>
        </div>

        {/* Locations & Contacts */}
        <div className="footer-section">
          <h4>Contacts & Locations</h4>
          <p>Do you have any Enquiry?</p>
          <button className="footer-btn">Get in touch</button>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Social Media</h4>
          <p>Get in touch with us via social media.</p>
          <div className="social-icons">
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-pinterest-p"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
            <a href="/"><i className="fab fa-x-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Global Partnership Council</a></li>
            <li><a href="/">Compliance</a></li>
            <li><a href="/">Newsroom & Press</a></li>
            <li><a href="/">Career</a></li>
         
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2025 Dr. Ing. h.c. F. Porsche AG.{" "}
          <a href="/">Legal Notice</a>, <a href="/">Privacy Policy</a>,{" "}
          <a href="/">Cookie Policy</a>, <a href="/">Consumption/Emissions</a>,{" "}
        </p>

     

        <p className="disclaimer">
          ** Important this is fanWebsite * <a href="/">here</a>.
        </p>

        <div className="footer-logo"> Arshi'PORSCHE</div>
      </div>
    </footer>
  );
};

export default Footer;

