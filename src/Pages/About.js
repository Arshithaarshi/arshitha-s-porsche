import React, { useState, useEffect } from 'react';
import './About.css';

const carData = [
  { name: 'Porsche 911 Turbo S', detail: '0‑100 km/h in 2.8s', img: 'https://www.stratstone.com/-/media/stratstone/porsche/car-models/inline-images/911/porsche-911-turbo-720x405px.ashx' },
  { name: 'Porsche Taycan Turbo S', detail: 'Electric 0‑100 km/h in 2.6s', img: 'https://i.ytimg.com/vi/B7oOtTgYEZM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6ZZ-Qdb7wKJCsGkK_2bs0Flh77w' },
  { name: 'Porsche Panamera Turbo S', detail: 'Luxury sedan speed', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Porsche GT3 RS', detail: 'Track beast', img: 'https://cdn.pixabay.com/photo/2023/02/05/21/34/porsche-7770665_640.jpg' },
];

const About = () => {
  // For counter (e.g. acceleration)
  const [accel, setAccel] = useState(0);
  useEffect(() => {
    let target = 100; // example value, say 100 km/h
    let count = 0;
    const speed = 20; // speed of counting
    const interval = setInterval(() => {
      count += 5;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setAccel(count);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      {/* Section 1: Background image left + Title + paragraph */}
      <div className="section bg-left">
        <div className="bg-image">
          <img src="https://images-porsche.imgix.net/-/media/8F641E0AAC794543850E785094088B5E_102464B1332B4534B44AA6C50263B526_taycan-4-black-edition-front-mobile?fp-x=0.5&fp-y=0.5&w=999&ar=1%3A1&q=45&dpr=2&crop=focalpoint&auto=format" alt="Porsche image" />
        </div>
        <div className="text-block">
          <h1>About Porsche</h1>
          <p>Since 1931, Porsche has blended performance, design, and engineering excellence. We push boundaries to deliver speed, luxury, innovation.</p>
        </div>
      </div>

      {/* Section 2: Hover gallery of 4 images with name + detail on hover */}
      <div className="gallery‑hover">
        {carData.map((car, idx) => (
          <div className="card" key={idx}>
            <img src={car.img} alt={car.name} />
            <div className="overlay">
              <h3>{car.name}</h3>
              <p>{car.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: Counting number + image + heading */}
      <div className="counter‑section">
        <div className="counter‑text">
          <h2>0‑100 km/h in</h2>
          <div className="counter‑number">{accel} km/h</div>
        </div>
        <div className="counter‑image">
          <img src="https://t4.ftcdn.net/jpg/04/42/10/55/360_F_442105555_vUntBOK5N1jXzCOWmBykoebqFtlVXRjC.jpg" alt="Speed visual" />
        </div>
      </div>

      {/* Section 4: Another gallery */}
      <div className="gallery‑simple">
        {carData.map((car, idx) => (
          <img className="simple‑img" src={car.img} alt={car.name} key={idx} />
        ))}
      </div>

      {/* Footer with logo and theme black‑red glow */}
      <footer className="footer blackred">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Porsche_logo.svg/2560px-Porsche_logo.svg.png" alt="Porsche Logo" />
        </div>
        <div className="footer‑text">
          <p>Driven by Passion | Crafted by Design</p>
          <p>© 2025 Porsche FanSite</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
