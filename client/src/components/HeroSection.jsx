import React, { useEffect, useState } from 'react';
import gdgsgulogo from '../assets/gdgsgulogo.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 opacity-20 rounded-full bg-blue-300 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 opacity-20 rounded-full bg-blue-400 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      
      {/* Animated dots grid background */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Hero Text Content */}
          <div className={`text-center lg:text-left max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block mb-3">
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                Google Developer Group
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
              <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Make Good</span>
              <span className="block">Things Together.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Join a community of passionate developers, designers, and innovators at SGU. 
              Learn, build, and grow through workshops, hackathons, and collaborative projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className={`px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto ${isLoaded ? 'animate-button-appear' : 'opacity-0'}`} style={{animationDelay: '300ms'}}>
                Become A Member
              </button>
              
              <button className={`px-8 py-4 border border-blue-300 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto ${isLoaded ? 'animate-button-appear' : 'opacity-0'}`} style={{animationDelay: '600ms'}}>
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Stats Section */}
            <div className={`mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">100+</p>
                <p className="text-gray-600">Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-gray-600">Events</p>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <p className="text-3xl font-bold text-blue-600">20+</p>
                <p className="text-gray-600">Projects</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Card */}
          <div className={`w-full max-w-lg transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-lg rotate-12 opacity-80 animate-float-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-500 rounded-full opacity-80 animate-float"></div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 w-16 h-16 bg-green-400 rounded-lg rotate-45 opacity-80 animate-float-fast"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl z-10">
                {/* Card header - logo area */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 pt-8 px-8 pb-16">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Developer Community</h3>
                    <div className="flex space-x-2">
                      <span className="inline-block w-3 h-3 bg-red-400 rounded-full"></span>
                      <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
                    </div>
                  </div>
                </div>
                
                {/* GDG Logo Centered */}
                <div className="relative -mt-10 mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={gdgsgulogo}
                    alt="GDG SGU Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">GDG Campus SGU</h3>
                  <p className="text-gray-600 mb-8">Connect with a network of developers passionate about Google technologies</p>
                  
                  {/* Technology icons */}
                  <div className="flex justify-center space-x-6 mb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-xs mt-1 text-gray-500">Flutter</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <span className="text-xs mt-1 text-gray-500">Android</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-xs mt-1 text-gray-500">Firebase</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(12deg) translateY(-20px); }
        }
        
        @keyframes floatFast {
          0%, 100% { transform: rotate(45deg) translateY(0px) translateX(0px); }
          50% { transform: rotate(45deg) translateY(-10px) translateX(5px); }
        }
        
        @keyframes buttonAppear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: floatFast 4s ease-in-out infinite;
        }
        
        .animate-button-appear {
          animation: buttonAppear 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;