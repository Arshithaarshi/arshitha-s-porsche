import React from "react";
import "./PosterSection.css";

const PosterSection = () => {
  return (
    <div className="poster-section">
      {/* Top poster area */}
      <div className="poster-content">
        <div className="poster-image">
          <img
            src="https://images-porsche.imgix.net/-/media/EF054AE9BF5A4983BC9F16262E4C74B3_8AA8B2CD8E8C4D5C83259F6BE6D3075E_017-text-media-content-other-offers_historical-placards?w=645&q=45&dpr=2&auto=format"
            alt="Porsche Targa Poster"
          />
        </div>

        <div className="poster-text">
          <h2>Original-style posters</h2>
          <p>
            Browse the archive and discover historical material about your classic.
          </p>
          <button className="poster-btn">Read more</button>
        </div>
      </div>

      {/* Bottom black contact section */}
      <div className="poster-footer">
        <div className="footer-card">
          <span>Contact</span>
          <i className="fa-solid fa-phone"></i>
        </div>

        <div className="footer-card">
          <span>Find a Porsche Centre</span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default PosterSection;
