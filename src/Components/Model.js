import React, { useState } from "react";
import "./Model.css";

const modelData = [
  {
    id: 1,
    name: "911",
    fuel: "Gasoline",
    description: "Iconic sports car with rear engine: 2 doors, 2+2 seats.",
    thumbnail: "/911.jpg",   // put this image in public folder
    video: "/911.mp4",       // put this video in public folder
  },
  {
    id: 2,
    name: "718",
    fuel: "Gasoline",
    description: "Precise mid-engine sports car: 2 doors, 2 seats.",
    thumbnail: "/718.jpg",
    video: "/718.mp4",
  },
  {
    id: 3,
    name: "Taycan",
    fuel: "Electric",
    description: "The first all-electric Porsche sports car.",
    thumbnail: "/taycan.jpg",
    video: "/taycan.mp4",
  },
];

const Model = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="models-grid">
      {modelData.map((model) => (
        <div
          key={model.id}
          className="model-card"
          onClick={() => setActiveVideo(model.id)}
        >
          {activeVideo === model.id ? (
            <video
              src={model.video}
              autoPlay
              controls
              className="model-video"
              onClick={(e) => e.stopPropagation()} // prevent re-toggle
            />
          ) : (
            <>
              <img
                src={model.thumbnail}
                alt={model.name}
                className="model-img"
              />
              <div className="model-overlay">
                <h2>{model.name}</h2>
                <span className="fuel">{model.fuel}</span>
                <p>{model.description}</p>
                <span className="explore">Explore →</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Model;
