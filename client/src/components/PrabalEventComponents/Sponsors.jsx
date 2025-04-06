import React, { useState, useEffect } from 'react';

// Import your logos here (replace these with actual imports)
import gdgLogo from '../../assets/logos/gdgsgulogo.jpg';
import sponsor1 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor2 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor3 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor4 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor5 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor6 from '../../assets/logos/gdgsgulogo.jpg';
import sponsor7 from '../../assets/logos/gdgsgulogo.jpg';
import collaborator1 from '../../assets/logos/gdgsgulogo.jpg';
import collaborator2 from '../../assets/logos/gdgsgulogo.jpg';
import collaborator3 from '../../assets/logos/gdgsgulogo.jpg';
import collaborator4 from '../../assets/logos/gdgsgulogo.jpg';

// Background images
import sponsorsBg from '../../assets/Backgroundimg1.jpg';
import collaboratorsBg from '../../assets/Backgroundimg2.jpg';

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState({
    sponsors: false,
    collaborators: false
  });
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const sponsorsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, sponsors: true }));
          sponsorsObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );
    
    const collaboratorsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, collaborators: true }));
          collaboratorsObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );
    
    const sponsorsSection = document.getElementById('sponsors-section');
    const collaboratorsSection = document.getElementById('collaborators-section');
    
    if (sponsorsSection) sponsorsObserver.observe(sponsorsSection);
    if (collaboratorsSection) collaboratorsObserver.observe(collaboratorsSection);
    
    return () => {
      if (sponsorsSection) sponsorsObserver.unobserve(sponsorsSection);
      if (collaboratorsSection) collaboratorsObserver.unobserve(collaboratorsSection);
    };
  }, []);

  // Sponsors data
  const sponsors = [
    { name: "Google Developer Groups", logo: gdgLogo },
    { name: "Sponsor 1", logo: sponsor1 },
    { name: "Sponsor 2", logo: sponsor2 },
    { name: "Sponsor 3", logo: sponsor3 },
    { name: "Sponsor 4", logo: sponsor4 },
    { name: "Sponsor 5", logo: sponsor5 },
    { name: "Sponsor 6", logo: sponsor6 },
    { name: "Sponsor 7", logo: sponsor7 }
  ];
  
  // Collaborators data
  const collaborators = [
    { name: "Collaborator 1", logo: collaborator1 },
    { name: "Collaborator 2", logo: collaborator2 },
    { name: "Collaborator 3", logo: collaborator3 },
    { name: "Collaborator 4", logo: collaborator4 },
    { name: "GDG", logo: gdgLogo }
  ];

  return (
    <div className="bg-black text-white">
      {/* Sponsors Section */}
      <section 
        id="sponsors-section" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${sponsorsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading with glow effect */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{textShadow: '0 0 10px rgba(79, 209, 255, 0.5)'}}>Our Sponsors</h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 mb-3" style={{boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)'}}></div>
            <p className="text-gray-300 text-base sm:text-lg">Organizations that support our Hackathon</p>
          </div>
          
          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
            {sponsors.map((sponsor, index) => (
              <div 
                key={sponsor.name}
                className={`rounded-lg p-6 flex items-center justify-center h-40 sm:h-48 transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-gray-800 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`, 
                  transitionDuration: '800ms',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
                }}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain filter brightness-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collaborators Section */}
      <section 
        id="collaborators-section" 
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${sponsorsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading with glow effect */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.collaborators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white" style={{textShadow: '0 0 10px rgba(52, 211, 153, 0.5)'}}>Our Collaborators</h2>
            <div className="w-32 h-1 bg-green-500 mx-auto mt-4 mb-3" style={{boxShadow: '0 0 10px rgba(16, 185, 129, 0.7)'}}></div>
            <p className="text-gray-300 text-base sm:text-lg">Working together to create something big</p>
          </div>
          
          {/* Collaborators Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {collaborators.map((collaborator, index) => (
              <div 
                key={collaborator.name}
                className={`rounded-lg p-5 flex items-center justify-center h-32 sm:h-36 transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-gray-800 ${isVisible.collaborators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`, 
                  transitionDuration: '800ms',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
                }}
              >
                <img 
                  src={collaborator.logo} 
                  alt={collaborator.name} 
                  className="max-h-full max-w-full object-contain filter brightness-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;