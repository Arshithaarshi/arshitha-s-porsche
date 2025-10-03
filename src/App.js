// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Models from './Pages/Models';
import About from './Pages/About';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Configure from "./Components/Configure";
import RegionSelector  from './Components/RegionSelector';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/models" element={<Models />} />
        <Route path="/about" element={<About />} />

        {/* Configure page */}
        <Route path="/configure" element={<Configure />} />
        <Route path="/RegionSelector" element={<RegionSelector />} />
      </Routes>
    </Router>
  );
}

export default App;

