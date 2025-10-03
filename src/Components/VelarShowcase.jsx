import React, { useRef, useState } from "react";
import "./VelarShowcase.css";

const VelarShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="velar-container">
      {/* Left Section */}
      <div className="velar-text">
        <h1>MACAN TURBO LAUNCH</h1>
        <p>Desirable by design.</p>
        <button className="explore-btn">
          <span>→</span> EXPLORE
        </button>
        <a href="/" className="build-link">
          → BUILD YOUR OWN
        </a>
      </div>

      {/* Right Section (Grid of 4) */}
      <div className="velar-grid">
       
       
        {/* <img
          src="https://wallpapers.com/images/hd/4k-ultra-hd-porsche-0awvuiwslstms9jw.jpg"
          alt="interior 1"
        />
        <img
          src="https://image.winudf.com/v2/image1/Y29tLldhbGxwYXBlcjRLSEQuUG9yc2NoZUxvZ29fc2NyZWVuXzBfMTcwNTgwNTQyM18wMTY/screen-0.jpg?fakeurl=1&type=.jpg"
          alt="interior 2"
        />
        <img
          src="https://images.unsplash.com/photo-1695192193767-54887768f845?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
          alt="driver"
        /> */}


        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/video.mp4"   // 👈 your video from public folder
            muted
          />
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "❚❚" : "►"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VelarShowcase;



