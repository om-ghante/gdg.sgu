// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Import Router
import './App.css';

import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AboutSGU from './components/AboutSGU';
import AboutGDG from './components/AboutGDG';
import Events from './components/Events';

import Navbar from './components/PrabalEventComponents/NavBar';
import Sponsors from './components/PrabalEventComponents/Sponsors';
import Hero from './components/PrabalEventComponents/Hero';

function App() {
  return (
    <Router> 
      
      <Routes>
        <Route path="/" element={<>
          <HeroSection />
          <AboutUs />
          <AboutSGU />
          <AboutGDG />
          <Events />
          <Footer />
        </>} />
        
        {/* Prabal Event Route */}
        <Route path="/Prabal" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
