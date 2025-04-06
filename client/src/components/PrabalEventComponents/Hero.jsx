import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Backgroundimg1 from "../../assets/Backgroundimg1.jpg";
import Backgroundimg2 from "../../assets/Backgroundimg2.jpg";
import AboutPrabal from './AboutPrabal';
import Sponsors from './Sponsors';
import PrabalFAQ from './PrabalFAQ';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isLoaded, setIsLoaded] = useState(false);

  const calculateTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 3, 18, 11, 0, 0);
    
    if (now > targetDate) {
      targetDate.setFullYear(now.getFullYear() + 1);
    }
    
    return targetDate;
  };

  useEffect(() => {
    const targetDate = calculateTargetDate();
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);
  
  return (
    <div className="bg-black">
      <NavBar />
      <div className="relative h-screen w-full overflow-hidden">
        {/* Original dual background images */}
        <div className="absolute inset-0">
          <div 
            className={`absolute inset-0 bg-cover bg-center z-1 transition-transform duration-1000 ease-in-out ${isLoaded ? 'scale-105' : 'scale-100'}`} 
            style={{ 
              backgroundImage: `url(${Backgroundimg1})`,
              clipPath: "polygon(0 0, 0% 100%, 100% 0)",
              transformOrigin: "top left"
            }}
          ></div>
          
          <div 
            className={`absolute inset-0 bg-cover bg-center z-1 transition-transform duration-1000 ease-in-out ${isLoaded ? 'scale-105' : 'scale-100'}`} 
            style={{ 
              backgroundImage: `url(${Backgroundimg2})`,
              clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
              transformOrigin: "bottom right"
            }}
          ></div>
          
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-80' : 'opacity-0'}`} 
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0) 49.5%, rgba(59, 130, 246, 0.8) 49.5%, rgba(59, 130, 246, 0.8) 50.5%, rgba(0,0,0,0) 50.5%)'
            }}
          ></div>
        </div>
      
        {/* Enhanced content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 
            className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)',
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          >
            PRABAL 2025
          </h1>
          
          <h2 
            className={`text-xl md:text-2xl font-medium mb-12 text-blue-200 text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            The countdown begins for our epic hackathon
          </h2>
          
          <div className="flex justify-center space-x-4 md:space-x-8 mb-16">
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
                <div className="relative">
                  <div className="absolute -inset-1  rounded-lg opacity-75"></div>
                  <div className="relative rounded-lg border border-blue-400 p-4 rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <span className="text-xs md:text-sm mt-3 text-blue-300 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          
          <p 
            className={`text-lg text-blue-200 mb-8 text-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            April 18-20, 2025 • Sanjay Ghodawat University
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            <a 
              href="https://gdg.community.dev/events/details/google-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india-presents-prabal-2025/cohost-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg border border-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative rounded-lg border border-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                RSVP Now <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </a>
            <a 
              href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1  rounded-lg border border-blue-400rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative rounded-lg border border-blue-400 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center">
                Register Now <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
        
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1500ms' }}
        >
          <span className="text-sm text-blue-300 mb-2">Scroll to explore</span>
          <div className="animate-bounce">
            <ChevronRight className="w-8 h-8 text-blue-400 transform rotate-90" />
          </div>
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