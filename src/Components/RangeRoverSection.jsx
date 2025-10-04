import React from "react";
import "./RangeRoverSection.css";

const RangeRoverSection = () => {
  return (
    <section className="range-container">
      {/* Left: Image & Video Grid */}
      <div className="media-grid">
        <div
          className="grid-item tall"
          style={{
            backgroundImage:
              "url('https://backiee.com/static/wallpapers/portrait/1215x2160/398252.jpg')" // replace with your image
          }}
        ></div>

    


        <div
          className="grid-item"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633348572662-1cf11058426e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZSUyMGludGVyaW9yfGVufDB8fDB8fHww')" // replace
          }}
        ></div>

         <div
          className="grid-item"
          style={{
            backgroundImage:
              "url('https://content-hub.imgix.net/7bq7Z2ne7FNjmiO3RzlFj5/da56e1997939df2a4bbc1d8fdecc37a3/Porsche_911_GT3_wallpaper_conversion_desktop.jpg?w=1308')" // replace
          }}
        ></div>

        <div
          className="grid-item"
          style={{
            backgroundImage:
              "url('https://s1.cdn.autoevolution.com/images/news/virtual-994-series-porsche-911-turbo-spells-trouble-for-ev-adoption-in-fantasy-land-227977_1.jpg')" // replace
          }}
        ></div>

<div
          className="grid-item"
          style={{
            backgroundImage:
              "url('https://4kwallpapers.com/images/wallpapers/porsche-911-turbo-s-5120x2880-23991.jpg')" // replace
          }}
        ></div>
      </div>

      {/* Right: Text */}
      <div className="text-content">
        <h1>PORSCHE Concept  SPORT</h1>
        <p>The most dynamic Range Rover Sport ever.</p>
        <button className="btn-explore-btn">➝ EXPLORE</button>
        <div className="build-btn">› BUILD YOUR OWN</div>
      </div>
    </section>
  );
};

export default RangeRoverSection;


