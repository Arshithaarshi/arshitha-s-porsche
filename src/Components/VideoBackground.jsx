import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <section className="video-section">
      <video autoPlay loop muted className="video-bg">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h1>Welcome to Porsche</h1>
        <p>Experience the evolution</p>
      </div>
    </section>
  );
};

export default VideoBackground;