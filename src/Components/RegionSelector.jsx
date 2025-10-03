import React, { useState } from "react";
import "./RegionSelector.css";

const regions = [
  "Africa",
  "Asia",
  "Australia/Oceania",
  "Europe",
  "Latin America",
  "Middle East",
  "North America",
];

const RegionSelector = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(null);

  const filteredRegions = regions.filter((region) =>
    region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="region-container">
      {/* Porsche Logo */}
      <div className="logo">
       <h1 className="porsche-text">PORSCHE</h1>
    

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Title */}
      <h2 className="title">Select a Market/Region</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* Regions */}
      <div className="region-list">
        {filteredRegions.map((region, index) => (
          <div
            key={index}
            className="region-item"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{region}</span>
            <span
              className={`chevron ${open === index ? "rotate" : ""}`}
            >
              ▼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
