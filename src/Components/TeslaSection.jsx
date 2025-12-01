import React, { useState } from "react";
import "./TeslaSection.css";

const TeslaSection = () => {
  const [activeFeature, setActiveFeature] = useState("battery");

  const images = {
    route: "https://images-porsche.imgix.net/-/media/260761C356AD4731B28E12EF029A1DAF_44F03B00699B4AED8D1542FC919E3011_017-text-media-content_BSZ6314_4-3_1440x1080?w=645&q=45&dpr=2&auto=format",
    battery: "https://images-porsche.imgix.net/-/media/3BB65DEB91484DEB8FBBEA86A0CFE727_A04AF42A51C64B8B9A7225F77DB341B5_017-text-media-content_4-3_factory-restoration?w=598&q=45&dpr=2&auto=format",
    chargers: "https://images-porsche.imgix.net/-/media/7187CF086377486E86C96800A4518907_B8F8C2367D144058BA6AF4EACC8A0B33_008-extended-teaser_4-3_3840x2880?w=387&q=45&dpr=2&auto=format"
  };

  return (
    <section className="tesla-section">
      <div className="tesla-header">
        <h2>Just Enter Your Destination</h2>
        <p>Your Tesla automatically finds the best route and suggests charging stations along the way.</p>
      </div>

      {/* Desktop image */}
      <div className="tesla-image-wrapper">
        <img src={images[activeFeature]} alt="Tesla feature" />
      </div>

      <div className="tesla-info">

        {/* ROUTE */}
        <div
          className={`tesla-info-box ${activeFeature === "route" ? "active" : ""}`}
          onClick={() => setActiveFeature("route")}
        >
          <h4>Optimizes Route</h4>
          <p>Finds the best route to avoid traffic and charge if needed.</p>

          {activeFeature === "route" && (
            <div className="mobile-image">
              <img src={images.route} alt="route" />
            </div>
          )}
        </div>

        {/* BATTERY */}
        <div
          className={`tesla-info-box ${activeFeature === "battery" ? "active" : ""}`}
          onClick={() => setActiveFeature("battery")}
        >
          <h4>Measures Battery</h4>
          <p>Gives real-time battery estimates based on your driving style.</p>

          {activeFeature === "battery" && (
            <div className="mobile-image">
              <img src={images.battery} alt="battery" />
            </div>
          )}
        </div>

        {/* CHARGERS */}
        <div
          className={`tesla-info-box ${activeFeature === "chargers" ? "active" : ""}`}
          onClick={() => setActiveFeature("chargers")}
        >
          <h4>Recommends Chargers</h4>
          <p>Offers charging location recommendations along your route.</p>

          {activeFeature === "chargers" && (
            <div className="mobile-image">
              <img src={images.chargers} alt="chargers" />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default TeslaSection;


