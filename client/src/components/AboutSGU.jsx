import React, { useEffect, useRef } from 'react';
import sgulogo from '../assets/sgulogo.jpg';
import sguone from '../assets/sguone.png';

const AboutSGU = () => {
  const headerRef = useRef(null);
  const textContentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements for animation
    [headerRef.current, textContentRef.current, imageRef.current].forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      [headerRef.current, textContentRef.current, imageRef.current].forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section with Animation */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <div className="mb-8 relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 blur"></div>
            <img 
              src={sgulogo}
              alt="SGU Logo" 
              className="w-40 h-40 object-contain relative"
            />
          </div>
          
          <span className="px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            Excellence in Education
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">Sanjay Ghodawat University</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Explore SGU for education that helps transform learning and teaching.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-700">Quality Education</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-gray-700">Research & Innovation</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-700">Industry Connect</span>
            </div>
          </div>
        </div>
        
        {/* Feature Section with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            ref={textContentRef}
            className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-300 order-2 md:order-1"
          >
            <span className="inline-block px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full mb-4">
              Educational Excellence
            </span>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Jumpstart learning in the classroom
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Through hands-on training, competitions, and expert-led sessions, members gain practical 
                experience in AI/ML, Cloud, Web, Android, and more. The community encourages problem-solving, 
                teamwork, and technical excellence.
              </p>
              
              <p className="text-gray-600">
                Be part of a vibrant network where ideas transform into reality and tech enthusiasts 
                collaborate to build innovative solutions.
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
                <p className="ml-3 text-gray-600">World-class faculty and modern facilities</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">Industry-aligned curriculum and training</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-600">Global exposure and placement opportunities</p>
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
          
          {/* Image with animation */}
          <div
            ref={imageRef}
            className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-500 order-1 md:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <img 
                  src={sguone}
                  alt="SGU Campus" 
                  className="w-full h-auto rounded-lg shadow-xl transform group-hover:scale-[1.01] transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium text-lg">SGU Campus</p>
                    <p className="text-sm opacity-75">State-of-the-art facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-blue-600 text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-600">Programs</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-blue-600 text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-600">Faculty</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-blue-600 text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-blue-600 text-4xl font-bold mb-2">5000+</div>
            <div className="text-gray-600">Students</div>
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