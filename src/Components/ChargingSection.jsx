import React from "react";
import "./ChargingSection.css";

const ChargingSection = () => {
  return (
    <div className="charging-container">
      {/* Heading */}
      <h1 className="charging-title">Plug In, Charge and Go</h1>
      <p className="charging-subtitle">
        With plenty of range for both daily drives and road trips, Porsche vehicles get you where you want to go. 
        Charging is fast, convenient and available anywhere with electricity.
      </p>
       {/* Button */}
      <button className="charge-btn">Help Me Charge</button>
    </div>
  );
};

export default ChargingSection;
