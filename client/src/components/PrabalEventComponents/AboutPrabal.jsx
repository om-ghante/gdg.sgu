import React from 'react';
import { Calendar, Clock, MapPin, Users, Award, Code, Monitor, ChevronRight } from 'lucide-react';
import sponsorsBg from '../../assets/Backgroundimg1.jpg';

const AboutPrabal = () => {
  return (
    <div id='aboutprabal' className="relative w-full text-white overflow-hidden">
      {/* Enhanced background with parallax effect */}
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
      
      {/* Main content container with subtle glow */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            PRABAL 2025
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto">
            A 40-hour epic hackathon where innovation meets fantasy
          </p>
          <div className="mt-8 animate-bounce">
            <ChevronRight className="w-12 h-12 mx-auto text-blue-400 transform rotate-90" />
          </div>
        </div>
        
        {/* About section with floating animation */}
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
                <span className="px-4 py-2 bg-purple-900/50 rounded-full text-purple-200 border border-purple-700 text-sm">#GDGSGU</span>
                <span className="px-4 py-2 bg-amber-900/50 rounded-full text-amber-200 border border-amber-700 text-sm">#GameOfCodes</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 flex items-center justify-center animate-float">
                  <Code size={100} className="text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Event details cards with hover effects */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            EVENT STRUCTURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20">
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
            
            {/* Card 2 */}
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-purple-900/30 border border-purple-700/50 mr-4">
                  <Users className="text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">Gamified Competition</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">Four noble Houses competing for glory:</p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                  <span className="text-lg">House Targaryen</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-300 mr-3"></span>
                  <span className="text-lg">House Stark</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></span>
                  <span className="text-lg">House Lannister</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-amber-700 mr-3"></span>
                  <span className="text-lg">House Baratheon</span>
                </li>
              </ul>
              <p className="text-gray-300 text-lg">🏆 Top scorers from each house receive exclusive swags</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-amber-500/20">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-amber-900/30 border border-amber-700/50 mr-4">
                  <Award className="text-amber-400" size={28} />
                </div>
                <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-400">Prizes & Perks</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-400 text-xl mr-3">💰</span>
                  <span className="text-lg">Total Prize Pool: <span className="text-amber-300">₹1,50,000+</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-xl mr-3">🎁</span>
                  <span className="text-lg">Exclusive Google & GDG Swags</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-xl mr-3">📜</span>
                  <span className="text-lg">Certificates for all participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-xl mr-3">🏨</span>
                  <span className="text-lg">Accommodation & Meals Provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 text-xl mr-3">🤝</span>
                  <span className="text-lg">Networking with industry experts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Enhanced Timeline */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold mb-16 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            HACKATHON JOURNEY
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                {
                  title: "Problem Statement Release",
                  description: "Problem statements will be provided 5 days before the hackathon. Teams can start working on their Minimum Viable Product (MVP) immediately after release.",
                  icon: "📋",
                  side: "right"
                },
                {
                  title: "Hackathon Kickoff",
                  description: "The 40-hour hackathon begins. Teams get specialized participant kits and are assigned to their houses: Targaryen, Stark, Lannister, or Baratheon.",
                  icon: "🚀",
                  side: "left"
                },
                {
                  title: "Project Development",
                  description: "Teams work on innovative solutions using Google technologies such as Google Gemini, Firebase, Android, and more. Mentors will be available for guidance.",
                  icon: "💻",
                  side: "right"
                },
                {
                  title: "Final Submission",
                  description: "Teams submit their projects within the stipulated 40-hour timeframe. Each team must present a working prototype/demo.",
                  icon: "⏱️",
                  side: "left"
                },
                {
                  title: "Evaluation & Awards",
                  description: "Projects will be judged based on originality, technical implementation, scalability, and potential impact. Winners will be announced and prizes awarded.",
                  icon: "🏆",
                  side: "right"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="hidden md:flex md:w-1/2"></div>
                  <div className="w-full md:w-1/2">
                    <div className={`bg-gradient-to-b ${item.side === 'left' ? 'from-blue-900/60 to-blue-800/60' : 'from-purple-900/60 to-purple-800/60'} backdrop-blur-sm p-8 rounded-xl border ${item.side === 'left' ? 'border-blue-700' : 'border-purple-700'} transition-all duration-500 hover:shadow-lg ${item.side === 'left' ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20'}`}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{item.icon}</span>
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className={`w-6 h-6 rounded-full ${item.side === 'left' ? 'bg-blue-500' : 'bg-purple-500'} border-2 border-white`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technologies section with animated grid */}
        <div className="mb-28">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            BUILD WITH GOOGLE TECH
          </h2>
          <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Projects must incorporate at least one Google-related technology from our featured stack:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Gemini", icon: "🚀", color: "from-blue-500 to-blue-600" },
              { name: "Firebase", icon: "🔥", color: "from-amber-500 to-amber-600" },
              { name: "Android", icon: "📱", color: "from-emerald-500 to-emerald-600" },
              { name: "Google Drive", icon: "📂", color: "from-yellow-500 to-yellow-600" },
              { name: "Google Lens", icon: "👁️", color: "from-purple-500 to-purple-600" },
              { name: "Search APIs", icon: "🔍", color: "from-blue-400 to-blue-500" },
              { name: "Google Classroom", icon: "🎓", color: "from-green-500 to-green-600" },
              { name: "Dialogflow", icon: "🤖", color: "from-indigo-500 to-indigo-600" },
              { name: "Vision API", icon: "👀", color: "from-pink-500 to-pink-600" },
              { name: "Vertex AI", icon: "🧠", color: "from-purple-500 to-indigo-600" },
              { name: "Google Fit", icon: "🏋️‍♂️", color: "from-green-500 to-blue-500" },
              { name: "Google Pay", icon: "💳", color: "from-teal-500 to-teal-600" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-medium text-white">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guidelines with animated list */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            RULES OF ENGAGEMENT
          </h2>
          <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-blue-700/50 max-w-4xl mx-auto">
            <ul className="space-y-6">
              {[
                {
                  rule: "Team Size: Minimum 2 and Maximum 4 members per team.",
                  icon: "👥",
                  color: "text-blue-400"
                },
                {
                  rule: "Originality: Solutions must be unique and not previously submitted elsewhere.",
                  icon: "✨",
                  color: "text-purple-400"
                },
                {
                  rule: "Code of Conduct: Participants must maintain ethics and professionalism throughout the event.",
                  icon: "⚖️",
                  color: "text-emerald-400"
                },
                {
                  rule: "No Cancellation Policy: No refund under any condition once registered.",
                  icon: "🚫",
                  color: "text-red-400"
                },
                {
                  rule: "Judging Criteria: Projects evaluated on innovation, technical merit, design, and potential impact.",
                  icon: "🏅",
                  color: "text-amber-400"
                }
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`text-2xl mr-4 mt-1 ${item.color}`}>{item.icon}</span>
                  <span className="text-lg text-gray-300">{item.rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Final CTA with glowing button */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            JOIN THE INNOVATION BATTLE!
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Secure your spot in this epic 40-hour hackathon and compete for glory, prizes, and eternal bragging rights!
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <a 
              href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative px-12 py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold rounded-lg text-lg transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600"
            >
              Register Now
              <span className="ml-2">⚔️</span>
            </a>
          </div>
          <p className="text-gray-400 mt-6">Limited seats available • Registration closes April 10, 2025</p>
        </div>
      </div>
      
      {/* Footer with animated sigil */}
      <div className="relative py-12 text-center border-t border-gray-800/50">
        <div className="w-20 h-20 mx-auto mb-6 animate-float">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <p className="text-sm text-gray-400 tracking-wider">PRABAL 2025 • GDG SGU • APRIL 18-20 • KOLHAPUR, MAHARASHTRA</p>
        <div className="flex justify-center space-x-4 mt-4">
          {["#Hackathon", "#GDG", "#SGU", "#Innovation", "#GameOfCodes"].map((tag, index) => (
            <span key={index} className="text-xs text-gray-500">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPrabal;