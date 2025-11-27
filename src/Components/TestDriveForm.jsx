import React from "react";
import "./TestDriveForm.css";
import { FiMapPin, FiPhoneCall, FiTruck, FiClipboard } from "react-icons/fi";

const TestDriveForm = () => {
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

      {/* ---- Form ---- */}
      <h2 className="form-title">TEST DRIVE DISCOVERY</h2>
      <p className="form-subtitle">
        Enter your details below and we'll be in touch with confirmation
        of your personalised test drive.
      </p>
      <p className="required-text">Fields marked with * are required.</p>

      <form className="testdrive-form">
        <div className="form-row">
          <input type="email" placeholder="Email address *" required />
          <input type="text" placeholder="Mobile Number *" required />
        </div>

        <div className="form-row">
          <input type="text" placeholder="First Name *" required />
          <input type="text" placeholder="Last Name *" required />
        </div>

        <label className="postcode-label">
          Please enter a postcode, city or town and select a local Retailer *
        </label>

        <div className="form-location-row">
          <input type="text" placeholder="Postcode, City or Town" />
          <button type="button" className="location-btn">
            USE MY LOCATION
          </button>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" />
          <label>I agree with these terms *</label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default TestDriveForm;
