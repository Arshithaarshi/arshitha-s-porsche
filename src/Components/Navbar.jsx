import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Trigger animation on route change
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/960px-Porsche_Logo.svg.png?20250407095904"
          alt="Porsche Logo"
          className="logo"
        />
        <h1 className="site-title">ARSHI'S Porsche</h1>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className={animate ? 'slide-link' : ''}
        >
          Home
        </Link>
        <Link
          to="/models"
          onClick={() => setIsOpen(false)}
          className={animate ? 'slide-link' : ''}
        >
          Models
        </Link>
        <Link
          to="/about"
          onClick={() => setIsOpen(false)}
          className={animate ? 'slide-link' : ''}
        >
          About
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

