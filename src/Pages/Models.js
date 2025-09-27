import React from "react";
import "./Models.css";


const Models = () => {
  return (
    <div className="page-containers">
      <video className="background-videos" autoPlay loop muted playsInline>
        <source src="/cayenn.mp4" type="" />
      </video>

      <div className="overlayss">
        <h1>Cayenne Red Edition</h1>
        <div className="fuel-info">
  Fuel consumption (weighted) combined (model range): 4.4 – 4.1 l/100 km, 
  Electric energy consumption (weighted) combined (model range): 31.4 – 19.3 kWh/100 km, 
  CO₂-emissions (weighted) combined (model range): 101 – 93 g/km, 
  Fuel consumption (sustaining) combined (model range): 10.5 – 10.0 l/100 km
</div>
<br></br>
<br></br>

   <div className="newtext">
         <h1>111 - point check.</h1>
         <div className="newpara">
         We go the extra mile for our Porsche Approved Pre-Owned Cars. Our technicians meticulously check the 
         condition and functionality of the entire vehicle as well as the complete vehicle documentation and history
          based on a 111-point checklist. This creates more than just proof of
          quality, it creates trust and lasting values.
         </div>
         <br></br>
         <button className="approved-btn">Read more</button>
   </div>

      </div>
    </div>
 

  );
};

export default Models;

