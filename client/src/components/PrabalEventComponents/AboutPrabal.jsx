import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Users, Award, Code, Monitor, ChevronRight } from 'lucide-react';
import sponsorsBg from '../../assets/Backgroundimg1.jpg';

const AboutPrabal = () => {
  // State for counting animations
  const [registrations, setRegistrations] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [teams, setTeams] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCountingAnimation();
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountingAnimation = () => {
    const duration = 1500;
    const targetValues = {
      registrations: 420,
      impressions: 46000,
      teams: 85
    };
    
    const increment = 16;
    const steps = duration / increment;
    
    const increments = {
      reg: targetValues.registrations / steps,
      imp: targetValues.impressions / steps,
      team: targetValues.teams / steps
    };
  
    let currentValues = {
      reg: 0,
      imp: 0,
      team: 0
    };
  
    const timer = setInterval(() => {
      currentValues.reg += increments.reg;
      currentValues.imp += increments.imp;
      currentValues.team += increments.team;
  
      // Ensure we don't go over target values
      currentValues.reg = Math.min(currentValues.reg, targetValues.registrations);
      currentValues.imp = Math.min(currentValues.imp, targetValues.impressions);
      currentValues.team = Math.min(currentValues.team, targetValues.teams);
  
      setRegistrations(Math.floor(currentValues.reg));
      setImpressions(Math.floor(currentValues.imp));
      setTeams(Math.floor(currentValues.team));
  
      if (currentValues.reg >= targetValues.registrations) {
        clearInterval(timer);
      }
    }, increment);
  };

  return (
    <div id='aboutprabal' className="relative w-full text-white overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${sponsorsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            PRABAL 2025
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
            A 40-hour epic hackathon where innovation meets fantasy
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronRight className="w-12 h-12 mx-auto text-blue-400 transform rotate-90" />
          </div>
        </div>
        
        {/* About section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                ABOUT THE EVENT
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Prabal is an exhilarating 40-hour offline hackathon organized by Google Developer Group (GDG) at Sanjay Ghodawat University (SGU). 
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                This event unites innovative minds to tackle real-world problems using cutting-edge technology while fostering creativity, teamwork, 
                and technical excellence — all with a gamified twist inspired by epic fantasy!
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-blue-900/50 rounded-full text-blue-200 border border-blue-700 text-sm">#Hackathon</span>
                <span className="px-4 py-2 bg-blue-900/50 rounded-full text-blue-200 border border-blue-700 text-sm">#GDGSGU</span>
                <span className="px-4 py-2 bg-blue-900/50 rounded-full text-blue-200 border border-blue-700 text-sm">#GameOfCodes</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-600/20 border border-blue-400/30 flex items-center justify-center animate-float">
                  <Code size={100} className="text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row with counting animation */}
        <div className="mb-24" ref={statsRef}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-700 text-center transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">
                {registrations}+
              </div>
              <div className="text-lg text-blue-200">Registrations</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-700 text-center transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">
                {impressions > 1000 ? `${Math.floor(impressions/1000)}K+` : `${impressions}+`}
              </div>
              <div className="text-lg text-blue-200">Impressions on Unstop</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-700 text-center transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">
                {teams}+
              </div>
              <div className="text-lg text-blue-200">Teams Registered</div>
            </div>
          </div>
        </div>
        
        {/* Event details cards */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            EVENT STRUCTURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm rounded-lg border border-blue-700/50 p-8 rounded-xl border border-blue-700 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-700/50 mr-4">
                  <Monitor className="text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Offline Hackathon</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <Clock size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg">Duration: <span className="text-blue-300">40 Hours</span></span>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg">Venue: <span className="text-blue-300">Sanjay Ghodawat University</span></span>
                </li>
                <li className="flex items-start">
                  <Calendar size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg">Date: <span className="text-blue-300">April 18–20, 2025</span></span>
                </li>
              </ul>
            </div>
            
            <div className="backdrop-blur-sm rounded-lg border border-blue-700/50 p-8 rounded-xl border border-blue-700 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-700/50 mr-4">
                  <Users className="text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Gamified Competition</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">Four noble Houses competing for glory:</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-400 mr-3"></span>
                  <span className="text-lg">House Targaryen</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-300 mr-3"></span>
                  <span className="text-lg">House Stark</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                  <span className="text-lg">House Lannister</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-600 mr-3"></span>
                  <span className="text-lg">House Baratheon</span>
                </li>
              </ul>
              <p className="text-gray-300 text-lg">🏆 Top scorers from each house receive exclusive swags</p>
            </div>
            
            <div className="backdrop-blur-sm rounded-lg border border-blue-700/50 p-8 rounded-xl border border-blue-700 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-700/50 mr-4">
                  <Award className="text-blue-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">Prizes & Perks</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 text-xl mr-3">💰</span>
                  <span className="text-lg">Total Prize Pool: <span className="text-blue-300">₹1,50,000+</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 text-xl mr-3">🎁</span>
                  <span className="text-lg">Exclusive Swags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 text-xl mr-3">📜</span>
                  <span className="text-lg">Certificates for all participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 text-xl mr-3">🏨</span>
                  <span className="text-lg">Accommodation Provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 text-xl mr-3">🤝</span>
                  <span className="text-lg">Networking with industry experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Technologies section */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            BUILD WITH GOOGLE TECH
          </h2>
          <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Projects must incorporate at least one Google-related technology from our featured stack:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Gemini", icon: "🚀" },
              { name: "Firebase", icon: "🔥" },
              { name: "Android", icon: "📱" },
              { name: "Google Drive", icon: "📂" },
              { name: "Google Lens", icon: "👁️" },
              { name: "Search APIs", icon: "🔍" },
              { name: "Google Classroom", icon: "🎓" },
              { name: "Dialogflow", icon: "🤖" },
              { name: "Vision API", icon: "👀" },
              { name: "Vertex AI", icon: "🧠" },
              { name: "Google Fit", icon: "🏋️‍♂️" },
              { name: "Google Pay", icon: "💳" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="backdrop-blur-sm rounded-lg border border-blue-700/50 p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-medium text-white">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guidelines section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            RULES OF ENGAGEMENT
          </h2>
          <div className="backdrop-blur-sm rounded-lg border border-blue-700/50 p-8 rounded-xl border border-blue-700/50 max-w-4xl mx-auto">
            <ul className="space-y-6">
              {[
                { rule: "Team Size: Minimum 2 and Maximum 4 members per team.", icon: "👥" },
                { rule: "Originality: Solutions must be unique and not previously submitted elsewhere.", icon: "✨" },
                { rule: "Code of Conduct: Participants must maintain ethics and professionalism throughout the event.", icon: "⚖️" },
                { rule: "No Cancellation Policy: No refund under any condition once registered.", icon: "🚫" },
                { rule: "Judging Criteria: Projects evaluated on innovation, technical merit, design, and potential impact.", icon: "🏅" }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl mr-4 mt-1 text-blue-400">{item.icon}</span>
                  <span className="text-lg text-gray-300">{item.rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            JOIN THE INNOVATION BATTLE!
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Secure your spot in this epic 40-hour hackathon and compete for glory, prizes, and eternal bragging rights!
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <a 
              href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-12 py-4 bg-gradient-to-r from-blue-700 to-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-600"
            >
              Register Now
              <span className="ml-2">⚔️</span>
            </a>
          </div>
          <p className="text-gray-400 mt-6">Limited seats available • Registration closes April 10, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPrabal;