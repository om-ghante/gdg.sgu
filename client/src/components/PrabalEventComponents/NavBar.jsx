import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-blue-900/30' : 'bg-black/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with glow effect */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-white font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-wider">
                PRABAL 2025
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#aboutprabal" 
              className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium group transition-all duration-200"
            >
              About
              <div className="h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#sponsors-section" 
              className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium group transition-all duration-200"
            >
              Sponsors
              <div className="h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#collaborators-section" 
              className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium group transition-all duration-200"
            >
              Collaborators
              <div className="h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#team" 
              className="text-blue-200 hover:text-white px-3 py-2 text-sm font-medium group transition-all duration-200"
            >
              Team
              <div className="h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://gdg.community.dev/events/details/google-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india-presents-prabal-2025/cohost-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india" 
              target='_blank'
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                RSVP <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </a>
            <a 
              href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
              target='_blank'
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center">
                Register <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-blue-300 hover:text-white p-2 rounded-lg focus:outline-none transition-all duration-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={28} className="text-blue-400" />
              ) : (
                <Menu size={28} className="text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900/90 to-blue-900/80 backdrop-blur-lg border-t border-blue-800/50">
          <div className="px-4 pt-2 pb-8 space-y-4">
            <a 
              href="#aboutprabal" 
              className="block text-blue-200 hover:text-white px-4 py-3 text-base font-medium border-b border-blue-800/50 hover:bg-blue-900/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight className="mr-2 h-4 w-4 text-blue-400" />
              About Prabal
            </a>
            <a 
              href="#sponsors-section" 
              className="block text-blue-200 hover:text-white px-4 py-3 text-base font-medium border-b border-blue-800/50 hover:bg-blue-900/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight className="mr-2 h-4 w-4 text-blue-400" />
              Sponsors
            </a>
            <a 
              href="#collaborators-section" 
              className="block text-blue-200 hover:text-white px-4 py-3 text-base font-medium border-b border-blue-800/50 hover:bg-blue-900/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight className="mr-2 h-4 w-4 text-blue-400" />
              Collaborators
            </a>
            <a 
              href="#team" 
              className="block text-blue-200 hover:text-white px-4 py-3 text-base font-medium border-b border-blue-800/50 hover:bg-blue-900/30 rounded-lg transition-all duration-200 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight className="mr-2 h-4 w-4 text-blue-400" />
              Team
            </a>
            
            <div className="pt-4 space-y-3">
              <a 
                href="https://gdg.community.dev/events/details/google-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india-presents-prabal-2025/cohost-gdg-on-campus-sanjay-ghodawat-university-kolhapur-india" 
                target='_blank'
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                RSVP Now
              </a>
              <a 
                href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
                target='_blank'
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;