import React from 'react';
import { Mail, MapPin, Phone, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import sponsorsBg from '../../assets/Backgroundimg1.jpg';

const Footer = () => {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background with dark gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${sponsorsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0" />
      
      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif mb-4 tracking-wider">PRABAL</h3>
            <div className="w-12 h-1 bg-blue-400 mb-4" />
            <p className="text-gray-300 mb-4">
              A 40-hour hackathon organized by Google Developer Group at Sanjay Ghodawat University. 
              Uniting innovative minds to tackle real-world problems using cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 tracking-wider">QUICK LINKS</h3>
            <div className="w-12 h-1 bg-blue-400 mb-4" />
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: The Houses */}
          <div>
            <h3 className="text-xl font-serif mb-4 tracking-wider">THE HOUSES</h3>
            <div className="w-12 h-1 bg-blue-400 mb-4" />
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span>House Targaryen</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                <span>House Stark</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span>House Lannister</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span>House Baratheon</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-serif mb-4 tracking-wider">CONTACT</h3>
            <div className="w-12 h-1 bg-blue-400 mb-4" />
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-2 mt-1" />
                <span>Sanjay Ghodawat University<br />Kolhapur - Sangli Highway, Atigre<br />Kolhapur, Pune Division, 416118</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-2" />
                <a href="mailto:gdg@sgu.ac.in" className="hover:text-blue-400 transition-colors">
                  gdg@sanjayghodawatuniversity.ac.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-2" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider with Game of Thrones-inspired sigil */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-400">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>
        
        {/* Copyright and final CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Google Developer Group SGU. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            "When you play the Game of Code, you win or you debug."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;