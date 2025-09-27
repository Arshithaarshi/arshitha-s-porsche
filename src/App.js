// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Models from './Pages/Models';
import About from './Pages/About';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
    </Router>
  );
}

export default App;
