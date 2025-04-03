import React from 'react';
import { Calendar, Clock, MapPin, Users, Award, Code, Monitor } from 'lucide-react';
import sponsorsBg from '../../assets/Backgroundimg1.jpg';

const AboutPrabal = () => {
  return (
    <div className="relative w-full  text-white overflow-hidden">
      {/* Background with dragon silhouettes and dark gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-1" 
        style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${sponsorsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 " />
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        
        {/* About section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 tracking-wide">ABOUT THE EVENT</h2>
              <p className="text-gray-300 mb-4">
                Prabal is an exhilarating 40-hour offline hackathon organized by Google Developer Group (GDG) at Sanjay Ghodawat University (SGU). 
                This event unites innovative minds to tackle real-world problems using cutting-edge technology while fostering creativity, teamwork, 
                and technical excellence — all with a gamified twist!
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-blue-400/20 flex items-center justify-center">
                <Code size={80} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Event details cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 tracking-wide text-center">EVENT STRUCTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Monitor className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-medium">Offline Hackathon</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Clock size={16} className="mr-2 text-blue-400" />
                  <span>Duration: 40 Hours</span>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2 text-blue-400" />
                  <span>Venue: Sanjay Ghodawat University</span>
                </li>
                <li className="flex items-center">
                  <Calendar size={16} className="mr-2 text-blue-400" />
                  <span>April 18 – 20, 2025 10:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-medium">Gamified Competition</h3>
              </div>
              <p className="text-gray-300 mb-3">Four Houses competing for glory:</p>
              <ul className="space-y-2 text-gray-300">
                <li>🏠 House Targaryen</li>
                <li>🏠 House Stark</li>
                <li>🏠 House Lannister</li>
                <li>🏠 House Baratheon</li>
              </ul>
              <p className="text-gray-300 mt-3">Top 3 scorers from each house will receive exclusive swags 🎁</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-medium">Prizes & Incentives</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">💰</span>
                  <span>Total Prize Pool: ₹1,50,000+</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🎁</span>
                  <span>Swags for winners</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">📜</span>
                  <span>Participation Certificates</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-2">🏨</span>
                  <span>Accommodation Provided</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 tracking-wide text-center">HACKATHON TIMELINE</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400/50"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:left-auto md:right-full top-0 md:mr-8 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-medium mb-2">Problem Statement Release</h3>
                  <p className="text-gray-300">
                    Problem statements will be provided 5 days before the hackathon.
                    Teams can start working on their Minimum Viable Product (MVP) immediately after release.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="md:col-start-1 relative">
                <div className="absolute right-0 md:right-auto md:left-full top-0 md:ml-8 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-medium mb-2">Hackathon Kickoff</h3>
                  <p className="text-gray-300">
                    The 40-hour hackathon begins. Teams get specialized participant kits 
                    and are assigned to their houses: Targaryen, Stark, Lannister, or Baratheon.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:left-auto md:right-full top-0 md:mr-8 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-medium mb-2">Project Development</h3>
                  <p className="text-gray-300">
                    Teams work on innovative solutions using Google technologies such as Google Gemini,
                    Firebase, Android, and more. Mentors will be available for guidance.
                  </p>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="md:col-start-1 relative">
                <div className="absolute right-0 md:right-auto md:left-full top-0 md:ml-8 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-medium mb-2">Final Submission</h3>
                  <p className="text-gray-300">
                    Teams submit their projects within the stipulated 40-hour timeframe.
                    Each team must present a working prototype/demo.
                  </p>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:left-auto md:right-full top-0 md:mr-8 w-4 h-4 rounded-full bg-blue-400"></div>
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-medium mb-2">Evaluation & Awards</h3>
                  <p className="text-gray-300">
                    Projects will be judged based on originality, technical implementation,
                    scalability, and potential impact. Winners will be announced and prizes awarded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technologies section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 tracking-wide text-center">TECHNOLOGY REQUIREMENTS</h2>
          <p className="text-center text-gray-300 mb-8">
            Projects must incorporate Google-related technologies, such as:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { name: "Google Gemini", icon: "🚀" },
              { name: "Firebase", icon: "🔥" },
              { name: "Android Apps", icon: "📱" },
              { name: "Google Drive", icon: "📂" },
              { name: "Google Lens", icon: "👁️" },
              { name: "Google Search APIs", icon: "🔍" },
              { name: "Google Classroom", icon: "🎓" },
              { name: "Dialogflow", icon: "🤖" },
              { name: "Vision API", icon: "👀" },
              { name: "Vertex AI", icon: "🧠" },
              { name: "Google Fit API", icon: "🏋️‍♂️" },
              { name: "Google Pay API", icon: "💳" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 tracking-wide text-center">GUIDELINES</h2>
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🔹</span>
                <span><strong>Team Size:</strong> Minimum 2 and Maximum 4 members per team.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🔹</span>
                <span><strong>Originality:</strong> Solutions must be unique and not previously submitted elsewhere.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">🔹</span>
                <span><strong>Code of Conduct:</strong> Participants must maintain ethics and professionalism throughout the event.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">🚫</span>
                <span><strong>No Cancellation Policy. No Refund Under Any Condition.</strong></span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif mb-4">GET READY TO INNOVATE!</h2>
          <p className="text-xl mb-8">Join us at Prabal - A Hackathon by GDG on Campus SGU</p>
          <a 
            href="https://unstop.com/hackathons/prabal-2025-sanjay-ghodawat-university-kolhapur-1384091" 
            target="_blank" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
      
      {/* Footer with GOT-inspired sigil */}
      <div className="relative py-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </div>
        <p className="text-sm text-gray-400">#Hackathon #GDG #SGU #Innovation #CodeToWin 🚀</p>
      </div>
    </div>
  );
};

export default AboutPrabal;