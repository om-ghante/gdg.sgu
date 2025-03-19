import React from 'react'
import sgulogo from '../assets/sgulogo.jpg'
import sguone from '../assets/sguone.png'

const AboutSGU = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex justify-center mb-8">
          <img 
            src={sgulogo}
            alt="Google for Education illustration" 
            className="w-64 h-auto"
          />
        </div>
        
        <h1 className="text-4xl font-medium text-gray-800 mb-4">
          About Sanjay Ghodawat University 
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl">
          Explore SGU for education that help transform learning and teaching.
        </p>
        
      </div>
      
      {/* Feature Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Jumpstart learning in the classroom
          </h2>
          
          <p className="text-gray-600 mb-4">
            Through hands-on training, competitions, and expert-led sessions, members gain practical 
            experience in AI/ML, Cloud, Web, Android, and more. The community encourages problem-solving, 
            teamwork, and technical excellence.

            Be part of a vibrant network where ideas transform into reality and tech enthusiasts 
            collaborate to build innovative solutions.
          </p>
          
          <a href="http://www.sguk.ac.in/" className="text-blue-500 hover:text-blue-700">
            Read more
          </a>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src={sguone}
            alt="Students using laptops in classroom" 
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSGU
