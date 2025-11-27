import React from "react";
import "./Championship.css";

const Championship = () => {
  return (
    <div className="championship-container">
      {/* Language Selector */}
      <div className="lang-selector">
        <button>🌐 INT ▾</button>
      </div>

      <div className="championship-content">
        {/* Left Image Section */}
        <div className="image-section">
          <img
            src="https://res.cloudinary.com/dmwcbhehi/image/upload/c_thumb,w_3840,g_auto/f_auto/q_auto/v1/WEC_Porsche_963_Spa_lhhphc?_a=BAVAZGDX0"
            alt="FIA World Endurance Championship"
          />
        </div>

        {/* Right Text Section */}
        <div className="text-section">
          <h1>
            FIA World <br /> Endurance <br /> Championship
          </h1>
          <p>
            Porsche Penske Motorsport is back, carrying the legacy of racing into
            the 2025 FIA World Endurance Championship. Eight thrilling races
            around the globe: From the ainue the Porsche
            tradition of motorsport dominance.
          </p>
          <button className="explore-btn">→ Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Championship;

