import React, { useState } from "react";
import "./SpareParts.css";

const SpareParts = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="spareparts-page">
      <h1 className="title">Spare parts &amp; Co.</h1>

      <div className="card-container">
        {/* Card 1 */}
        <div
          className="card"
          onClick={() => setShowInfo(true)}
        >
          <img
            src="https://images-porsche.imgix.net/-/media/C5501F32C3684878AE01D20DDA0A3A36_2EB2F70E06214ADF8ADCEF4518CEA746_007-teaser_1-1_mobile_3840x3840?w=387&q=45&dpr=2&auto=format"
            alt="Porsche Shop"
          />
          <div className="overlay"></div>
          <div className="card-text"></div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://images-porsche.imgix.net/-/media/89ECE65DCD734D32BE99D0050B121CE7_85D11179A22E4905B8D2ED4BB6936A10_007-teaser_1-1_accessories-parts_02_original-parts?w=387&q=45&dpr=2&auto=format"
            alt="Parts Lists"
          />
          <div className="overlay"></div>
          <div className="card-text"></div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://images-porsche.imgix.net/-/media/C5501F32C3684878AE01D20DDA0A3A36_2EB2F70E06214ADF8ADCEF4518CEA746_007-teaser_1-1_mobile_3840x3840?w=387&q=45&dpr=2&auto=format"
            alt="Porsche Parts Explorer"
          />
          <div className="overlay"></div>
          <div className="card-text"></div>
        </div>
      </div>

      {/* Info box when clicking Porsche Shop */}
      {showInfo && (
        <div className="info-box">
          <p>
            Porsche Shop offers authentic spare parts, exclusive accessories,
            and classic car components to keep your Porsche in perfect condition.
          </p>
          <button onClick={() => setShowInfo(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SpareParts;