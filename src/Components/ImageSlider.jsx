import React, { useRef, useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ beforeImage, afterImage }) => {
  const sliderRef = useRef(null);
  const beforeRef = useRef(null);
  const containerRef = useRef(null);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({ width: 600, height: 400 });

  const updateSliderPosition = useCallback((e) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const sliderPosition = clientX - containerRect.left;
    setSliderWidth(Math.max(0, Math.min(sliderPosition, containerRect.width)));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => updateSliderPosition(e);
    const handleTouchMove = (e) => updateSliderPosition(e);
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [updateSliderPosition]);

  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;
      setContainerDimensions({ width: containerWidth, height: containerHeight });
      setSliderWidth(containerWidth / 2);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current && beforeRef.current) {
      beforeRef.current.style.width = `${sliderWidth}px`;
      sliderRef.current.style.left = `${sliderWidth}px`;
    }
  }, [sliderWidth]);

  return (
    <section className="imgSliderWrapp">
      <div
        className="container"
        ref={containerRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: 'auto',
          aspectRatio: '3 / 2', // Maintain aspect ratio
        }}
      >
        {/* AFTER IMAGE */}
        <div className="img-afterWrap" style={{ position: 'absolute', inset: 0 }}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '1' }}
            src={afterImage}
            alt="After"
          />
        </div>

        {/* BEFORE IMAGE */}
        <div
          className="img-beforeWrap"
          ref={beforeRef}
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', overflow: 'hidden' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: '1',
            }}
            src={beforeImage}
            alt="Before"
          />
        </div>

        {/* SLIDER INDICATOR */}
        <div
          className="sliderIndicator"
          ref={sliderRef}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(255, 255, 255, 0.7)',
            cursor: 'ew-resize',
          }}
        ></div>
      </div>
    </section>
  );
};

export default ImageSlider;

