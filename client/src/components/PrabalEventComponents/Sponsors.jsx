import React, { useState, useEffect } from 'react';

import gdgLogo from '../../assets/logos/gdgsgulogo.jpg';
import unstopLogo from '../../assets/logos/unstop.jpg'; 
import sponsor1 from '../../assets/logos/StarAirLogo.png';
import sponsor2 from '../../assets/logos/GhodawatConsumer.png';
import sponsor3 from '../../assets/logos/Finlatics.png';
import sponsor5 from '../../assets/logos/interviewbuddy.png';
import sponsor6 from '../../assets/logos/balsamiq.png';
import sponsor7 from '../../assets/logos/blackboxai.jpeg';
// Add your pre-incubation sponsors
import incubationSponsor1 from '../../assets/logos/NextIn.jpg';
import incubationSponsor2 from '../../assets/logos/Prismas.svg';
import incubationSponsor3 from '../../assets/logos/PitamabareGuruji.jpg';
import incubationSponsor4 from '../../assets/logos/introoplus.jpg';
import incubationSponsor5 from '../../assets/logos/yuktiyantra.jpg';

import megaCollaborator1 from '../../assets/logos/gdgpune.png'; 
import megaCollaborator2 from '../../assets/logos/gdgaurangabad.png';
import collaborator1 from '../../assets/logos/gdgAmity.png';
import collaborator2 from '../../assets/logos/gdgwces.png';

import sponsorsBg from '../../assets/Backgroundimg1.jpg';

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

  // Sponsors data organized by tiers
  const sponsors = {
    platformPartner: [
      { name: "Unstop", logo: unstopLogo }
    ],
    eventSponsors: [
      { name: "Event Sponsor 1", logo: sponsor1 },
      { name: "Event Sponsor 2", logo: sponsor2 }
    ],
    incubationSponsors: [
      { name: "Incubation Sponsor 1", logo: incubationSponsor1 },
      { name: "Incubation Sponsor 2", logo: incubationSponsor2 },
      { name: "Incubation Sponsor 3", logo: incubationSponsor3 },
      { name: "Incubation Sponsor 4", logo: incubationSponsor4 },
      { name: "Incubation Sponsor 5", logo: incubationSponsor5 }
    ],
    otherSponsors: [
      { name: "Sponsor 3", logo: sponsor3 },
      { name: "Sponsor 5", logo: sponsor5 },
      { name: "Sponsor 6", logo: sponsor6 },
      { name: "Sponsor 7", logo: sponsor7 }
    ]
  };
  
  // Collaborators data organized by tiers
  const collaborators = {
    megaCollaborators: [
      { name: "Mega Collaborator 1", logo: megaCollaborator1 },
      { name: "Mega Collaborator 2", logo: megaCollaborator2 }
    ],
    otherCollaborators: [
      { name: "Collaborator 1", logo: collaborator1 },
      { name: "Collaborator 2", logo: collaborator2 },
    ]
  };

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
          
          {/* Platform Partner */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Platform Partner</h3>
            <div className="flex justify-center">
              {sponsors.platformPartner.map((sponsor, index) => (
                <div 
                  key={sponsor.name}
                  className={`rounded-lg p-6 flex items-center justify-center h-24 sm:h-30 w-auto max-w-md mx-auto transform transition-all hover:scale-105 bg-black bg-opacity-50 border-2 border-blue-500 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`, 
                    transitionDuration: '800ms'
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
          
          {/* Event Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-300">Event Sponsors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {sponsors.eventSponsors.map((sponsor, index) => (
                <div 
                  key={sponsor.name}
                  className={`rounded-lg p-6 flex items-center justify-center h-40 sm:h-48 w-auto transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-blue-400 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 100 + 200}ms`, 
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
          
          {/* Incubation Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-300">Sanjay Ghodawat University Pre-Incubation Sponsors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              {sponsors.incubationSponsors.map((sponsor, index) => (
                <div 
                  key={sponsor.name}
                  className={`rounded-lg p-6 flex items-center justify-center h-32 sm:h-40 w-auto transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-blue-400 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 100 + 400}ms`, 
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
          
          {/* Other Sponsors */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-200">Other Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              {sponsors.otherSponsors.map((sponsor, index) => (
                <div 
                  key={sponsor.name}
                  className={`rounded-lg p-5 flex items-center justify-center h-32 sm:h-36 transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-blue-400 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 100 + 700}ms`, 
                    transitionDuration: '800ms',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.8)'
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
            <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 mb-3" style={{boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)'}}></div>
            <p className="text-gray-300 text-base sm:text-lg">Working together to create something big</p>
          </div>
          
          {/* Mega Collaborators */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Mega Collaborators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {collaborators.megaCollaborators.map((collaborator, index) => (
                <div 
                  key={collaborator.name}
                  className={`rounded-xl p-6 flex items-center justify-center h-48 sm:h-56 transform transition-all hover:scale-105 bg-black bg-opacity-50 border-2 border-blue-700 ${isVisible.collaborators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`, 
                    transitionDuration: '800ms',
                    boxShadow: '0 4px 30px rgba(16, 185, 129, 0.4)'
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
          
          {/* Other Collaborators */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-300">Other Collaborators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {collaborators.otherCollaborators.map((collaborator, index) => (
                <div 
                  key={collaborator.name}
                  className={`rounded-lg p-5 flex items-center justify-center h-48 sm:h-56 transform transition-all hover:scale-105 bg-black bg-opacity-50 border border-blue-400 ${isVisible.collaborators ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150 + 300}ms`, 
                    transitionDuration: '800ms',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.8)'
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
        </div>
      </section>
    </div>
  );
};

export default Sponsors;