import React, { useEffect, useRef } from 'react';
import sgulogo from '../assets/sgulogo.jpg';
import gdgsgulogo from '../assets/gdgsgulogo.jpg';

const AboutUs = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

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
    [headerRef.current, cardsRef.current, statsRef.current].forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      [headerRef.current, cardsRef.current, statsRef.current].forEach(el => {
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
              src={gdgsgulogo}
              alt="GDG SGU Logo" 
              className="w-40 h-40 object-contain relative"
            />
          </div>
          
          <span className="px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            Learn, Share, Grow
          </span>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Google Developer Group <span className="text-blue-600">On Campus</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Google Developers Group SGU is an initiative to concentrate the efforts of 
            many developers in and around SGU to learn, share, and get productive using 
            various Google products.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-gray-700">Technology</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-gray-700">Learning</span>
            </div>
            
            <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-gray-700">Community</span>
            </div>
          </div>
        </div>
        
        {/* Features/Cards Section with Animation */}
        <div 
          ref={cardsRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-300"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl font-bold text-gray-800">
              Explore Our Activities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Live Viewing Parties
                </h3>
                <p className="text-gray-600">
                  Watch and discuss major Google events with the community.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Campus Roadshows
                </h3>
                <p className="text-gray-600">
                  Share knowledge in different companies, colleges, and universities.
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  The Codelabs
                </h3>
                <p className="text-gray-600">
                  Get hands-on experience and guidance from the community members.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 delay-500 mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-600">Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Members</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-blue-600 text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-600">Workshops</div>
            </div>
          </div>
        </div>
        
        {/* Join Us CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#join" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 group"
          >
            Join Our Community
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

export default AboutUs;