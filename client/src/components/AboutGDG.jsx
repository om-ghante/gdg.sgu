import React, { useEffect, useRef } from 'react';
import gdgsgulogo from '../assets/gdgsgulogo.jpg';
import gdgsguteam from '../assets/gdgsguteam.png';

const AboutSGU = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [sectionRef.current, imageRef.current, contentRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section with Animation */}
        <div 
          ref={sectionRef} 
          className="flex flex-col items-center text-center mb-16 opacity-0 transition-all duration-1000 transform translate-y-8"
        >
          <div className="mb-8 relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 blur"></div>
            <img 
              src={gdgsgulogo}
              alt="GDG SGU Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg relative"
            />
          </div>
          
          <span className="px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            Google Developer Group
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            About Google Developer Group <br className="hidden md:block" />
            On Campus <span className="text-blue-600">Sanjay Ghodawat University</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Explore a community of innovators and developers creating impactful solutions with Google technologies.
          </p>
          
          <div className="flex space-x-4 mt-2">
            <span className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Innovation
            </span>
            <span className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Community
            </span>
            <span className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Learning
            </span>
          </div>
        </div>
        
        {/* Feature Section with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with animation */}
          <div 
            ref={imageRef} 
            className="opacity-0 transition-all duration-1000 delay-300 transform translate-x-12"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <img 
                  src={gdgsguteam}
                  alt="GDG SGU Team" 
                  className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-[1.01] transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium text-lg">GDG SGU Core Team</p>
                    <p className="text-sm opacity-75">Leading innovation on campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content with animation */}
          <div 
            ref={contentRef} 
            className="opacity-0 transition-all duration-1000 delay-500 transform translate-x-12"
          >
            <span className="inline-block px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full mb-4">
              Tech Community
            </span>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Empowering Students Through Technology
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Google Developers Group (GDG) is a central-level club and a thriving community of tech enthusiasts, 
                developers, and innovators passionate about technology and innovation. It provides an open platform 
                where individuals from diverse backgrounds collaborate, explore new ideas, build projects, and enhance their skills.
              </p>
              
              <p>
                GDG organizes workshops, hackathons, and meetups focusing on Google technologies to foster learning, 
                skill development, and networking. Whether you're a beginner or an experienced developer, GDG offers 
                the perfect space to learn, innovate, and grow together.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">Learn from industry experts and Google Developer Experts</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">Participate in hackathons and coding competitions</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">Build real-world projects with cutting-edge technologies</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="http://www.sguk.ac.in/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 group"
              >
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>
    </section>
  );
};

export default AboutSGU;