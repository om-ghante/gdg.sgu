import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="bg-black w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-bold text-2xl">PRABAL</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#aboutprabal" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">About Prabal</a>
              <a href="#sponsors" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Sponsors</a>
              <a href="#collaborators" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Collaborators</a>
              <a href="#team" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Team</a>
            </div>
          </div>
          
          {/* Search and Login */}
          <div className="hidden md:flex items-center space-x-4" >
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
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-white p-1" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#aboutprabal" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">About Prabal</a>
              <a href="#sponsors" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Sponsors</a>
              <a href="#collaborators" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Collaborators</a>
              <a href="#team" className="text-white hover:text-gray-300 px-2 py-1 text-sm font-medium">Team</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;