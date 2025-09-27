import React from "react";
import "./Template.css";

const Template = () => {
  return (
    <div className="template-section">
      <div className="template-container">
        {/* Left Text Section */}
        <div className="template-text">
          <h1>The one and always.</h1>
          <p>
            Anyone who dreams of a Porsche usually has an image in their mind:
            the 911 has been the epitome of an exciting, powerful sports car with
            day-to-day usability for 60 years. Take a seat behind the wheel of
            the new 911 and become part of a unique community.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="template-image">
          <img
            src="/Porsche.jpg" alt=""
          />
          <img src="/Porsche2.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Template;
