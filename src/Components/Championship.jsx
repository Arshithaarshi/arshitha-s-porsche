import React from "react";
import "./Championship.css";

const Championship = () => {
  return (
    <div className="championship-container">
      {/* Top Right Language Selector */}
      <div className="lang-selector">
        <button>🌐 INT ▾</button>
      </div>

      <div className="championship-content">
        {/* Left Image */}
        <div className="image-section">
          <img src="https://res.cloudinary.com/dmwcbhehi/image/upload/c_thumb,w_3840,g_auto/f_auto/q_auto/v1/WEC_Porsche_963_Spa_lhhphc?_a=BAVAZGDX0" alt="FIA Championship" />
        </div>

        {/* Right Text Section */}
        <div className="text-section">
          <h1>FIA World Endurance Championship</h1>
          <p>
            Porsche Penske Motorsport is back, carrying the legacy of racing into the
            2025 FIA World Endurance Championship. Eight thrilling races around the
            globe: From the action-packed 24 Hours of Le Mans, to the intense battle
            across Europe, Asia, North and South America and the Middle East. Every
            race is a new challenge for the Porsche 963. Join us, as we push our
            limits, chase titles, and continue the Porsche tradition of motorsport
            dominance.
          </p>
          <button className="explore-btn">→ Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Championship;
