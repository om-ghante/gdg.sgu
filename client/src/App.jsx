// App.jsx
import React from 'react';
import './App.css';


import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AboutSGU from './components/AboutSGU';
import AboutGDG from './components/AboutGDG';
import Events from './components/Events';


function App() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <AboutSGU />
      <AboutGDG />
      <Events />
      <Footer />
    </>
  );
}

export default App; 