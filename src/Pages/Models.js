import React from "react";
import "./Models.css";
import AnimatedStats from "../Components/AnimatedStats";
import ChargingSection from "../Components/ChargingSection";
import Footer from "../Components/Footer";
import MachineSection from "../Components/MachineSection";

const Models = () => {
  return (
    <div className="page-containers">
        <video className="background-videos" autoPlay loop muted playsInline>
    <source src="/cayenn.mp4" type="video/mp4" />
  </video>

  <div className="sustainable-content">
    <h1>Cayenne Red Edition</h1>
    <p>
      We're building a world powered by solar energy, running on batteries
      and transported by electric vehicles. Explore the most recent impact
      of our products, people and supply chain.
    </p>
    <button className="explore-btns">Explore Impact</button>
  </div>




        
   <br></br>

     

 
     <ChargingSection />
      
      <div style={{ background: "#000", minHeight: "100vh", padding: 20 }}>
      <AnimatedStats />

      <MachineSection />


      <Footer/>
    </div>

    
    </div>
    
 

  );
};

export default Models;

