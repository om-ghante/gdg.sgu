import React from 'react'
import sgulogo from '../assets/sgulogo.jpg'
import gdgsgulogo from '../assets/gdgsgulogo.jpg'

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex w-auto h-40 mb-6 gap-6">
            <img 
              src={sgulogo}
              alt="Google Shield Logo" 
              className="w-full h-full"
            />
            <img 
              src={gdgsgulogo}
              alt="Google Shield Logo" 
              className="w-full h-full"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-medium text-center mb-6">
            Google Developer Group <br />On Campus <br />Sanjay Ghodawat University
          </h1>
          
          <p className="text-gray-600 text-center max-w-2xl text-lg mb-8">
            Google Developers Group SGU is an initiative to concentrate the efforts of 
            many developers in and around SGU to learn, share, and get productive using 
            various Google products.
          </p>
          
          <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-600 transition-colors">
            Visit the Safety Center
          </button>
        </div>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Card */}
          <div className="border rounded-lg p-6 flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <img 
                src="/google-logo.svg" 
                alt="icon" 
                className="w-12 h-12"
              />
            </div>
            
            <div className="text-center">
              <p className="mb-3 text-lg">
                Live Viewing Parties
              </p>
              
              <p className="text-gray-600 mb-4 text-sm">
                Watch and discuss major Google events with the community.
              </p>
              
            </div>
          </div>
          
          {/* Email Card */}
          <div className="border rounded-lg p-6 flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <img 
                src="/gmail-logo.svg" 
                alt="icon" 
                className="w-12 h-12"
              />
            </div>
            
            <div className="text-center">
              <p className="mb-3 text-lg">
                Campus Roadshows
              </p>
              
              <p className="text-gray-600 mb-4 text-sm">
                Share knowledge in different companies, colleges, and universities.
              </p>
              
            </div>
          </div>
          
          {/* Browse Card */}
          <div className="border rounded-lg p-6 flex flex-col items-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <img 
                src="/chrome-logo.svg" 
                alt="icon" 
                className="w-12 h-12"
              />
            </div>
            
            <div className="text-center">
              <p className="mb-3 text-lg">
                The Codelabs
              </p>
              
              <p className="text-gray-600 mb-4 text-sm">
                Get hands-on experience and guidance from the community members.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs