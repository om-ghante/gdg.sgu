import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const EventCard = ({ event }) => {
  const { title, description, icon, date, ctaText, featured, upcoming, href } = event;
  
  return (
    <div className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${featured ? 'border-2 border-blue-500 md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="relative">
        <img 
          src={icon} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        {upcoming && (
          <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Upcoming
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar size={16} />
          <span className="text-sm">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <a 
          href={href || `#event-${event.id}`}
          className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          {ctaText} <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

// Fixed EventsList Component
const EventsList = () => {
  const events = [
    {
      id: 1,
      title: "Generative AI Workshop",
      description: "Learn the fundamentals of generative AI and create your first AI-powered application with hands-on exercises and expert guidance.",
      icon: "/api/placeholder/400/400", // Placeholder for image
      date: "March 15, 2025",
      ctaText: "Learn more",
      featured: true
    },
    {
      id: 2,
      title: "Build With AI Workshop",
      description: "Dive deep into practical AI implementation with this intensive workshop focusing on real-world applications and development techniques.",
      icon: "/api/placeholder/400/400", // Placeholder for image
      date: "March 28, 2025",
      ctaText: "View details"
    },
    {
      id: 3,
      title: "Git and Github Workshop",
      description: "Master version control with Git and GitHub in this comprehensive workshop covering best practices and collaborative development workflows.",
      icon: "/api/placeholder/400/400", // Placeholder for image
      date: "April 10, 2025",
      ctaText: "Register now"
    },
    {
      id: 4,
      title: "Advanced AI Techniques",
      description: "Explore cutting-edge AI methodologies and applications in this advanced workshop designed for developers looking to push the boundaries.",
      icon: "/api/placeholder/400/400", // Placeholder for image
      date: "April 25, 2025",
      ctaText: "Join waitlist",
      upcoming: true
    },
    {
      id: 5,
      href: "/prabal",
      title: "PRABAL: National Level Hackathon",
      description: "Join India's premier collegiate hackathon focusing on AI-powered solutions for sustainable development and social impact initiatives.",
      icon: "/api/placeholder/400/400", // Placeholder for image
      date: "May 15-17, 2025",
      ctaText: "Apply now",
      upcoming: true,
      featured: true
    }
  ];

  // Separate featured events to ensure they display properly
  const featuredEvents = events.filter(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
      {/* Featured Events Section */}
      {featuredEvents.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
      
      {/* Regular Events Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TabNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past Events' }
  ];

  return (
    <div className="flex justify-center mb-10">
      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeTab === tab.id
                ? 'bg-white shadow-sm text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const GoogleLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-4xl lg:text-7xl font-normal text-gray-800">Go</span>
        {/* Chrome logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="rounded-full bg-red-500 h-full w-full absolute top-0 left-0 overflow-hidden"></div>
          <div className="rounded-full bg-white h-1/2 w-1/2 absolute top-1/4 left-1/4"></div>
          <div className="rounded-full bg-blue-500 h-full w-1/2 absolute top-0 right-0"></div>
          <div className="rounded-full bg-green-500 h-1/2 w-full absolute bottom-0 left-0"></div>
          <div className="rounded-full bg-yellow-500 h-1/2 w-1/2 absolute bottom-0 left-0"></div>
        </div>
        
        {/* Maps logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="bg-white rounded-full h-full w-full flex items-center justify-center">
            <div className="h-3/4 w-3/4 bg-white rounded-full border-4 lg:border-8 border-red-500 flex items-center justify-center">
              <div className="h-0 w-0 border-l-4 lg:border-l-8 border-l-transparent border-t-8 lg:border-t-12 border-t-red-500 border-r-4 lg:border-r-8 border-r-transparent absolute -bottom-2 lg:-bottom-4"></div>
            </div>
          </div>
        </div>
        
        {/* Pixel device - circular */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center">
          <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-rose-200"></div>
        </div>
        
        {/* Pixel device - rectangular */}
        <div className="h-10 w-6 lg:h-16 lg:w-10 rounded-xl bg-green-100 border border-gray-200 flex items-center justify-center">
          <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* Google Photos logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="absolute h-1/2 w-1/2 top-0 left-0 bg-red-500 rounded-tl-full"></div>
          <div className="absolute h-1/2 w-1/2 top-0 right-0 bg-green-500 rounded-tr-full"></div>
          <div className="absolute h-1/2 w-1/2 bottom-0 left-0 bg-blue-500 rounded-bl-full"></div>
          <div className="absolute h-1/2 w-1/2 bottom-0 right-0 bg-yellow-500 rounded-br-full"></div>
        </div>
        
        {/* Pixel Buds */}
        <div className="h-10 w-8 lg:h-16 lg:w-12 flex items-center justify-center">
          <div className="h-8 w-8 lg:h-10 lg:w-10 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
            <div className="h-4 w-4 lg:h-6 lg:w-6 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      <span className="text-4xl lg:text-7xl font-normal text-gray-800">ogle</span>
    </div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const headerRef = useRef(null);
  const logoSectionRef = useRef(null);
  const eventsListRef = useRef(null);

  useEffect(() => {
    // Create intersection observer for animation
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

    // Observe elements
    [headerRef.current, logoSectionRef.current, eventsListRef.current].forEach(el => {
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => {
      [headerRef.current, logoSectionRef.current, eventsListRef.current].forEach(el => {
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
          className="mt-4 text-center opacity-0 transform translate-y-8 transition-all duration-1000 delay-200"
        >
          <span className="px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6 inline-block">
            Events & Activities
          </span>
        {/* Google Logo Section with Animation */}
        <div
          ref={logoSectionRef}
          className="flex flex-wrap items-center justify-center max-w-4xl mx-auto mb-12 opacity-0 transform translate-y-8 transition-all duration-1000"
        >
          <GoogleLogo />
        </div>



          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Developer Group <br />
            <span className="text-blue-600">On Campus SGU</span>
          </h1>

          <div className="relative mb-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-24 h-1 bg-blue-600 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of innovators and explore the latest in technology through workshops, hackathons, and networking events.
            </p>
          </div>


          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Event List Section with Animation */}
        <div
          ref={eventsListRef}
          className="mt-8 w-full max-w-6xl mx-auto opacity-0 transform translate-y-8 transition-all duration-1000 delay-400"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <EventsList />
          </div>

        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-blue-600 opacity-90">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-12">
              <span className="inline-block px-4 py-1 bg-blue-800 bg-opacity-50 text-blue-100 text-sm font-medium rounded-full mb-4">
                Join Our Community
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Never Miss An <span className="text-yellow-300">Exciting Event</span> Again
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Get exclusive updates on upcoming workshops, hackathons, and tech talks delivered straight to your inbox.
              </p>
              <ul className="text-blue-100 mb-8">
                <li className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Early access to event registrations
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Exclusive developer resources
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Community networking opportunities
                </li>
              </ul>
            </div>

            {/* Right Content - Subscription Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Subscribe to Our Newsletter</h4>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to receive email updates (we respect your privacy)
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Subscribe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-500 text-center">
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
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

export default Events;