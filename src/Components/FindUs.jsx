
import React from "react";
import "./FindUs.css";

const FindUs = () => {
  return (
    <div className="findus-container">
      <h1 className="findus-title">Find Us</h1>

      <div className="findus-grid">

        {/* North America */}
        <div className="region">
          <h2>North America</h2>

          <div className="country">
            <h3>United States</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
            <a href="#">Collision Centers</a>
          </div>

          <div className="country">
            <h3>Canada</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
            <a href="#">Collision Centers</a>
          </div>

          <div className="country">
            <h3>Mexico</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Puerto Rico</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
          </div>
        </div>

       
        

        {/* Europe */}
        <div className="region">
          <h2>Europe</h2>

          <div className="country">
            <h3>Austria</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            
          </div>

          <div className="country">
            <h3>Belgium</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Switzerland</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Czech Republic</h3>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>
        </div>

        {/* Middle East */}
        <div className="region">
          <h2>Middle East</h2>

          <div className="country">
            <h3>United Arab Emirates</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Service Centers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Israel</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Self Serve Demo Drive</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Jordan</h3>
            <a href="#">Service Centers</a>
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Qatar</h3>
            <a href="#">Stores and Galleries</a>
            
            <a href="#">Superchargers</a>
            <a href="#">Destination Charging</a>
          </div>

          <div className="country">
            <h3>Saudi Arabia</h3>
            <a href="#">Stores and Galleries</a>
            <a href="#">Service Centers</a>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default FindUs;
