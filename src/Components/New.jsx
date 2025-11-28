import React from "react";
import "./New.css";
import { FiMapPin, FiPhoneCall, FiTruck, FiClipboard } from "react-icons/fi";

const New = () => {
  return (
    <div className="testdrive-wrapper">

      {/* ---- Top Icon Navigation ---- */}
      <div className="testdrive-top-menu">
        <div className="menu-box">
          <FiTruck className="menu-icon" />
          <div>
            <h4>BOOK A TEST DRIVE</h4>
            <p>Arrange a test drive through your nearest Retailer.</p>
          </div>
        </div>

        <div className="menu-box">
          <FiClipboard className="menu-icon" />
          <div>
            <h4>BUILD YOUR OWN</h4>
            <p>Use the configurator to build your perfect vehicle.</p>
          </div>
        </div>

        <div className="menu-box">
          <FiPhoneCall className="menu-icon" />
          <div>
            <h4>VIEW PRICES</h4>
            <p>View vehicle prices online.</p>
          </div>
        </div>

        <div className="menu-box">
          <FiMapPin className="menu-icon" />
          <div>
            <h4>RESERVE ONLINE</h4>
            <p>Reserve your vehicle online.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;