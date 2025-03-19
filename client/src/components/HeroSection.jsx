import React from 'react'
import gdgsgulogo from '../assets/gdgsgulogo.jpg'


const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Make<br />Good
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Things<br />together.
            </h2>
          </div>
          
          <div className="w-full max-w-md">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={gdgsgulogo}
                alt="Person with phone" 
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <button className="w-full bg-white text-gray-800 font-medium py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
                  Become A Member
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 lg:mt-20 flex justify-center">
          <button className="bg-blue-500 text-white font-medium py-3 px-8 rounded-md hover:bg-blue-600 transition-colors">
            About GDG on Campus SGU.
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
