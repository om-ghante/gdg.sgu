import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import sponsorsBg from '../../assets/Backgroundimg1.jpg';

const PrabalFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Prabal Hackathon?",
      answer: "Prabal is a 40-hour offline hackathon organized by Google Developer Group (GDG) at Sanjay Ghodawat University. It challenges participants to develop innovative solutions to real-world problems using Google technologies in a Game of Thrones-themed competition."
    },
    {
      question: "How does the house system work?",
      answer: "Participants will be divided into four houses: Targaryen, Stark, Lannister, and Baratheon. Each house competes for points on a leaderboard, with the top 3 performers from each house receiving exclusive swags and rewards. This gamified approach adds an exciting competitive element to the hackathon."
    },
    {
      question: "What technologies should we use for our projects?",
      answer: "Projects must incorporate Google-related technologies. These include but are not limited to Google Gemini, Firebase, Android Applications, Google Drive APIs, Google Lens, Google Search APIs, Google Classroom APIs, Google Authentication, Google Fit API, Google Pay API, Dialogflow, Vision API, and Vertex AI."
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams must have a minimum of 2 and a maximum of 4 members. We encourage diverse teams with complementary skills."
    },
    {
      question: "Is accommodation provided during the hackathon?",
      answer: "Yes, accommodation will be provided for participants on the SGU campus during the hackathon. This ensures teams can work continuously throughout the 40-hour event."
    },
    {
      question: "When will the problem statements be released?",
      answer: "Problem statements will be released 5 days before the hackathon. Teams can begin working on their Minimum Viable Product (MVP) immediately after the release of the problem statements."
    },
    {
      question: "What are the criteria for evaluating projects?",
      answer: "Projects will be evaluated based on originality and innovation, creativity and technical implementation, scalability and practicality, and potential impact. Teams must present a working prototype/demo at the end of the hackathon."
    },
    {
      question: "What happens if I need to cancel my registration?",
      answer: "There is a strict No Cancellation Policy, and no refunds will be provided under any condition. Please ensure you're committed to participating before registering."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, industry experts and mentors will be available throughout the hackathon to guide participants, provide technical assistance, and offer feedback on your projects."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their laptops, chargers, any necessary peripherals, and personal items for the overnight stay. Specialized Participant Kits will be provided by Prabal for all participants at the event."
    }
  ];

  return (
    <div className="relative w-full text-white overflow-hidden py-16">
      {/* Background with dragon silhouettes and dark gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center " 
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url(${sponsorsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0" />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-serif mb-12 tracking-wider text-center">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 backdrop-blur-sm rounded-lg border border-blue-400 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" size={20} />
                ) : (
                  <ChevronDown className="text-blue-400" size={20} />
                )}
              </button>
              
              <div 
                className={`px-6 pb-4 text-gray-300 transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements inspired by Game of Thrones */}
        <div className="mt-16 text-center">
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6" />
          <p className="text-lg italic">"When you play the Game of Code, you win or you debug."</p>
        </div>
      </div>
    </div>
  );
};

export default PrabalFAQ;