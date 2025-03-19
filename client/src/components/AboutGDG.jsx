import React from 'react'
import gdgsgulogo from '../assets/gdgsgulogo.jpg'
import gdgsguteam from '../assets/gdgsguteam.png'

const AboutSGU = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex justify-center mb-8">
          <img 
            src={gdgsgulogo}
            alt="Google for Education illustration" 
            className="w-64 h-auto"
          />
        </div>
        
        <h1 className="text-4xl font-medium text-gray-800 mb-4">
          About Google Developer Group <br />On Campus <br /> Sanjay Ghodawat University 
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl">
          Explore SGU for education that help transform learning and teaching.
        </p>
        
      </div>
      
      {/* Feature Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-8 mt-12">
        <div className="md:w-1/2">
          <img 
            src={gdgsguteam}
            alt="Students using laptops in classroom" 
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Jumpstart learning in the classroom
          </h2>
          
          <p className="text-gray-600 mb-4">
            Google Developers Group (GDG) is a central-level club and a thriving community of tech enthusiasts, 
            developers, and innovators passionate about technology and innovation. It provides an open platform 
            where individuals from diverse backgrounds collaborate, explore new ideas, build projects, and enhance their skills.

            GDG organizes workshops, hackathons, and meetups focusing on Google technologies to foster learning, 
            skill development, and networking. Whether you're a beginner or an experienced developer, GDG offers 
            the perfect space to learn, innovate, and grow together.
          </p>
          
          <a href="http://www.sguk.ac.in/" className="text-blue-500 hover:text-blue-700">
            Read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutSGU
