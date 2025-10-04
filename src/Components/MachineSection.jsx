import React from "react";
import "./MachineSection.css";

const MachineSection = () => {
  return (
    <div className="machine-container">
      <div className="machine-image-wrapper">
        <img
          src="https://cdn.bigboytoyz.com/products/2527/gallery/eb098f2f-4748-4dac-8068-b7eb9d69333a.jpg"
          alt="Machine"
          className="machine-image"
        />
      </div>

      <div className="machine-text">
        <h2>The Machine That Builds the Machine</h2>
        <p>
          To shift humanity away from fossil fuels, we need extreme scale.
          Headquartered in Texas, we operate six huge,{" "}
          <span className="highlight">vertically integrated factories</span> across
          three continents. With over 100,000 employees, our teams design, build,
          sell and service our products in-house.
        </p>
      </div>
    </div>
  );
};

export default MachineSection;
