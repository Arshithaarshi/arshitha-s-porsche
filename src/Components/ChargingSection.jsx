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

      {/* Cards */}
      <div className="charging-cards">
        <div className="card">
          <img src="https://wallpapercave.com/wp/wp8696654.jpg" alt="While You Sleep" />
          <div className="card-text">
            <h3>While You Sleep</h3>
            <p>
              <a href="/">Plug in at home</a> or at nearby public chargers.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://wallpapercave.com/wp/wp8696638.jpg" alt="During the Day" />
          <div className="card-text">
            <h3>During the Day</h3>
            <p>
              Charge at a <a href="/">local Supercharger</a>
                <br></br>
               or at your workplace.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images-porsche.imgix.net/-/media/D1554F444AEF4C96A92C2E88F3F20A94_1982732C3A4D4D3AAAB76486D51AD62C_CZ26W10OX0001-911-turbo-s-side?w=2560&h=1440&q=45&crop=faces%2Centropy%2Cedges&auto=format" alt="On Road Trips" />
          <div className="card-text">
            <h3>On Road Trips</h3>
            <p>
              Recharge at Superchargers on the way or at{" "}
              <a href="/">your destination</a>.
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingSection;
