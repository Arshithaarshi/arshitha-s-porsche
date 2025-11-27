import React from "react";
import "./EfficientSection.css";

const EfficientSection = () => {
  return (
    <div className="efficient-container">
      {/* Heading */}
      <div className="efficient-header">
        <h1 className="animate-text">EFFICIENT. EVERYWHERE.</h1>
        <p className="sub-heading">DIESEL MILD HYBRID</p>
      </div>

      {/* Main Content */}
      <div className="efficient-content">
        {/* Left - Image */}
        <div className="image-wrapper">
          <img
            src="https://www.porschechantilly.com/blogs/3738/wp-content/uploads/2025/01/2025-Porsche-911.jpg"
            alt="Diesel Mild Hybrid"
          />
        </div>

        {/* Right - Text Stats */}
        <div className="text-wrapper">
          <div className="specs">
            <div>
              <p className="label">MAXIMUM POWER (UP TO)</p>
              <h2>257 <span>kW</span></h2>
            </div>

            <div>
              <p className="label">TOWING CAPACITY (UP TO)</p>
              <h2>3 500 <span>KG</span></h2>
              <p className="note">Engine choice may affect towing capacity.</p>
            </div>

            <div>
              <p className="label">0–100 KM/H (FROM)</p>
              <h2>6.3 <span>s</span></h2>
            </div>
          </div>

          <div className="description">
            <h4>DIESEL MILD HYBRID</h4>
            <p>
              Efficient and powerful, our mild hybrid engines harvest, store and redeploy 
              energy normally lost during deceleration.
            </p>
            <p className="note">Seven seat D350 engine detailed.</p>
            <button className="build-btn">BUILD YOUR OWN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EfficientSection;
