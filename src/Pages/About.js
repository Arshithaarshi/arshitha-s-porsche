import React, { useState, useEffect } from 'react';
import './About.css';
import ImageSlider from '../Components/ImageSlider';
import HeroVideo from "../Components/HeroVideo";

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
        <HeroVideo/>
      {/* Section 1: Background image left + Title + paragraph */}
      <div className="section bg-left">
        <div className="bg-image">
          <img src="https://images-porsche.imgix.net/-/media/8F641E0AAC794543850E785094088B5E_102464B1332B4534B44AA6C50263B526_taycan-4-black-edition-front-mobile?fp-x=0.5&fp-y=0.5&w=999&ar=1%3A1&q=45&dpr=2&crop=focalpoint&auto=format" alt="Porsche" />
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
    

     




      <main>
        
    <div class="card" data-tilt data-tilt-glare data-tilt-max-glare="0.8">
    <div class="card-content">
      <div class="row">
        <div class="status">
          Porsche
        </div>
        <div class="logo">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrsDN4CdYzmxGhcrZzhpNFYdGfFesb0M5nCSXPGYDGt3cLH3hMlRFPQVevdyTLNyglGqII6XySeAm8X1RwPyabrpnGBAmNxYX27rFbUVMPsfGZEQ4jYqY0c-64_wsm8Jh9pKJhRBTbYQDdfMfRQyD8Piqky_W2JHEPGxCRXcYcCE6YrBECAKJehJ0_/s1600/logo.png" alt=""/>
        </div>
      </div>
      <div class="chip">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFzeQ0hz39haiHkhSOKnHJCG3v6AynORgBKrj0Zf2FTYMvjAsDAxzqIFZ8DYXbyq_-u_kuZcgg5nRpXxVGp18K15NiCGvVwTv-8QUGdZwJS3sSlhRpqEpZ3RHP7vQCIoKYnd6UFEAzxrhFPR5byjFFR6ld7gWvNCD7g5LF3Y6uhJvgY1_hw8qBCqO6/s1600/chip.png" alt=""/>
      </div>
      <div class="number">1234 5678 9012 3456</div>
      <div class="name">arshi's credit</div>
      <div class="row">
        <div class="from">09/21</div>
        <div class="from">11/25</div>
      </div>
    </div>
  </div>
</main>

    
      <div className="Imgslid" style={{ display: "flex", gap: "20px" }}>
          <ImageSlider
            beforeImage="https://www.stratstone.com/-/media/stratstone/porsche/car-models/inline-images/911/porsche-911-turbo-720x405px.ashx"
            afterImage="https://images-porsche.imgix.net/-/media/92C77A76FFFE4CB6AC4808FC077B9F4B_8B0BB52914224A8F81898F68A30289D3_taycan-4s?w=1759&q=85&auto=format"
          />
    
          <br></br>
    
          <ImageSlider
            beforeImage="https://www.autopediame.com/storage/images/Porsche/zzzzzzz%20por%C5%9F.jpg"
            afterImage="https://www.edmunds.com/assets/m/cs/blt1b3fe5ecec2e77b9/6712911a1c3e18e235603dcf/2025_Porsche_Panamera_GTS_011_1600.jpg"
          />
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
