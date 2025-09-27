import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="fade-in-section" ref={domRef}>
      {children}
    </div>
  );
};

const Gallery = () => {
  const images = [
    {
      src: 'https://i.pinimg.com/736x/d0/04/31/d004313507a60429cce5aab1938df77b.jpg',
      text: 'Porsche 911'
    },
    {
      src: 'https://i.pinimg.com/736x/24/45/79/24457916b9b5a8782dec8a3aa184c1ef.jpg',
      text: 'Porsche gt3rs'
    },
    {
      src: 'https://i.pinimg.com/736x/7e/48/8f/7e488fdaa0483aa427b32637a0d40695.jpg',
      text: 'Porsche Steering'
    },
    {
      src: 'https://i.pinimg.com/736x/4e/04/1c/4e041c16b3b1e976a37dc9e61bc5d641.jpg',
      text: 'Turbo S '
    }
  ];

  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <FadeInSection key={index}>
          <div className="image-card">
            <img src={img.src} alt={img.text} />
            <div className="overlay">
              <p>{img.text}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default Gallery;