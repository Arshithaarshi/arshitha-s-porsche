import React, { useRef, useState } from "react";
import "./HeroVideo.css";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero-container">
      <video
        ref={videoRef}
        className="hero-video"
        src="/race.mp4"
        autoPlay
        muted
        loop
      />


      {/* Top Left */}
      <div className="top-left">
        <h3>Porsche<br />Motorsport</h3>
      </div>

      {/* Top Right */}
      <div className="top-right">
        <a href="/">INT ▾</a>
      </div>

      {/* Bottom Left */}
      <div className="bottom-left">
        <p>Porsche Motorsport #Raceborn</p>
      </div>

      {/* Bottom Right */}
      <div className="bottom-right">
        <button onClick={togglePlay}>
          {isPlaying ? "❚❚" : "►"}
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
