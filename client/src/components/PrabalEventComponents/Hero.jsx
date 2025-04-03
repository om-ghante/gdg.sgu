import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Backgroundimg1 from "../../assets/Backgroundimg1.jpg";
import Backgroundimg2 from "../../assets/Backgroundimg2.jpg";
import AboutPrabal from './AboutPrabal';
import Sponsors from './Sponsors';
import PrabalFAQ from './PrabalFAQ';
import Footer from './Footer';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Set the target date (April 18th, 11:00 AM of the current year)
  const calculateTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 3, 18, 11, 0, 0); // Month is 0-indexed (3 = April)
    
    // If the date has already passed this year, set it for next year
    if (now > targetDate) {
      targetDate.setFullYear(now.getFullYear() + 1);
    }
    
    return targetDate;
  };

  // Calculate the time remaining
  useEffect(() => {
    const targetDate = calculateTargetDate();
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Calculate remaining time
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    // Initial update
    updateTimer();
    
    // Set interval to update every second
    const interval = setInterval(updateTimer, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Animation trigger after component mounts
  useEffect(() => {
    // Trigger entrance animations
    setTimeout(() => setIsLoaded(true), 300);
    
    // Slide show rotation
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, []);
  
  return (
    <div>
      <NavBar />
      <div className="relative h-screen w-full overflow-hidden">
      {/* Top-left to bottom-right diagonal images with subtle zoom */}
      <div className="absolute inset-0">
        {/* Left side image with animation */}
        <div 
          className={`absolute inset-0 bg-cover bg-center z-1 transition-transform duration-1000 ease-in-out ${isLoaded ? 'scale-105' : 'scale-100'}`} 
          style={{ 
            backgroundImage: `url(${Backgroundimg1})`,
            clipPath: "polygon(0 0, 0% 100%, 100% 0)",
            transformOrigin: "top left"
          }}
        ></div>
        
        {/* Right side image with animation */}
        <div 
          className={`absolute inset-0 bg-cover bg-center z-1 transition-transform duration-1000 ease-in-out ${isLoaded ? 'scale-105' : 'scale-100'}`} 
          style={{ 
            backgroundImage: `url(${Backgroundimg2})`,
            clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
            transformOrigin: "bottom right"
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Diagonal line with pulse animation */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-80' : 'opacity-0'}`} 
          style={{ 
            background: 'linear-gradient(to bottom right, rgba(0,0,0,0) 49.5%, rgba(59, 130, 246, 0.8) 49.5%, rgba(59, 130, 246, 0.8) 50.5%, rgba(0,0,0,0) 50.5%)'
          }}
        ></div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        {/* Title with fade-in and slide-up animation */}
        <h1 
          className={`text-2xl md:text-3xl font-bold mb-8 md:mb-12 tracking-wider text-center z-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className='text-4xl sm:text-5xl md:text-7xl'>Prabal</span> <br />Is <br /> Coming
        </h1>
        
        {/* Countdown timer with staggered animation */}
        <div className="flex justify-center space-x-4 md:space-x-8 z-10">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HOURS" },
            { value: timeLeft.minutes, label: "MINUTES" },
            { value: timeLeft.seconds, label: "SECONDS" }
          ].map((item, index) => (
            <div 
              key={item.label}
              className={`flex flex-col items-center transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{item.value}</span>
              <span className="text-xs md:text-sm mt-1 md:mt-2">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Message with fade-in animation */}
        <p 
          className={`mt-8 md:mt-12 text-center max-w-lg px-4 z-10 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          The countdown is on! Mark your calendar for April 18th at 11:00 AM when war starting.
        </p>
      </div>
      <div className="items-center space-x-4 z-1" >
        <a href="https://gdg.community.dev/events/details/google-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india-presents-prabal-2025/cohost-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india" target='_blank'>
            <button className="bg-white text-black px-4 py-1 rounded-sm text-sm font-medium">
                RSVP
            </button>
        </a>
        <a href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" target='_blank'>
            <button className="bg-white text-black px-4 py-1 rounded-sm text-sm font-medium">
                Register Now
            </button>
        </a>
      </div>
    </div>
    <AboutPrabal />
    <Sponsors />
    <PrabalFAQ />
    <Footer />
    </div>
  );
};

export default Hero;