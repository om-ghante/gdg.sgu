import React from 'react'
import EventsList from './EventsList'

const Events = () => {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-wrap items-center justify-center max-w-4xl">
        {/* "Go" text */}
        <span className="text-4xl lg:text-7xl font-normal text-gray-800">Go</span>
        
        {/* Chrome logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="rounded-full bg-red-500 h-full w-full absolute top-0 left-0 overflow-hidden"></div>
          <div className="rounded-full bg-white h-8 w-8 absolute top-4 left-4"></div>
          <div className="rounded-full bg-blue-500 h-full w-1/2 absolute top-0 right-0"></div>
          <div className="rounded-full bg-green-500 h-1/2 w-full absolute bottom-0 left-0"></div>
          <div className="rounded-full bg-yellow-500 h-1/2 w-1/2 absolute bottom-0 left-0"></div>
        </div>
        
        {/* Maps logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="bg-white rounded-full h-full w-full flex items-center justify-center">
            <div className="h-12 w-12 bg-white rounded-full border-8 border-red-500 flex items-center justify-center">
              <div className="h-0 w-0 border-l-8 border-l-transparent border-t-12 border-t-red-500 border-r-8 border-r-transparent absolute -bottom-4"></div>
            </div>
          </div>
        </div>
        
        {/* Pixel device - circular */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-rose-200"></div>
        </div>
        
        {/* Pixel device - rectangular */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 rounded-xl bg-green-100 border border-gray-200 flex items-center justify-center">
          <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* Google Photos logo */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 relative">
          <div className="absolute h-8 w-8 top-0 left-0 bg-red-500 rounded-tl-full"></div>
          <div className="absolute h-8 w-8 top-0 right-0 bg-green-500 rounded-tr-full"></div>
          <div className="absolute h-8 w-8 bottom-0 left-0 bg-blue-500 rounded-bl-full"></div>
          <div className="absolute h-8 w-8 bottom-0 right-0 bg-yellow-500 rounded-br-full"></div>
        </div>
        
        {/* Pixel Buds */}
        <div className="h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center">
          <div className="h-10 w-10 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
            <div className="h-6 w-6 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        
        {/* "ogle" text */}
        <span className="text-4xl lg:text-7xl font-normal text-gray-800">ogle</span>
      </div>
      
      {/* "products" text */}
      <div className="mt-2">
        <span className="text-4xl lg:text-7xl font-normal text-gray-800">Developer Group <br />On Campus SGU <br />Past Events</span>
      </div>

      <div className="mt-2">
        <EventsList />
      </div>
    </div>
  )
}

export default Events


