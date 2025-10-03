import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AutoSlider.css";

const AutoSlider = () => {
  const images = [
    "https://images.hdqwalls.com/wallpapers/green-porsche-918-du.jpg",
    "https://getwallpapers.com/wallpaper/full/7/f/d/1041163-porsche-wallpaper-2560x1600-for-4k-monitor.jpg",
    "https://wallpaperswide.com/download/red_porsche_taycan_electric_car-wallpaper-2560x1600.jpg",
    "https://backiee.com/static/wallpapers/1000x563/382511.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // ⏱ Change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="auto-slider">
      <img src={images[currentIndex]} alt="slider" />

      {/* Overlay content */}
      <div className="slider-overlay">
        <h1>
          Your Porsche <br />
          Journey <br />
          Starts Here!!
        </h1>
        <p>Experience the thrill of driving like never before.</p>
        <div className="btn-group">
          {/* Navigate to Configure Page */}
          <button
            className="btn configure-btn"
            onClick={() => navigate("/configure")}
          >
            Configure
          </button>
          
          <button className="btn find-btn"
            onClick={() => navigate("/RegionSelector")}
          >
            Find New and Pre-owned Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;

