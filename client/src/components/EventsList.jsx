import React from 'react'
import GenAIWorkshop from '../assets/GenAIWorkshop.png'
import BuildWithAI from '../assets/BuildWithAI.png'
import GitAndGithub from '../assets/GitAndGithub.png'

const EventsList = () => {
    const products = [
        {
          id: 1,
          title: "Generative AI Workshop",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti natus non animi modi accusamus. Deserunt molestiae perferendis assumenda libero veritatis, at exercitationem, quis repellat modi, consequuntur tempore aliquid error atque.",
          icon: GenAIWorkshop, // Need placeholder for the multiple Google Workspace icons
          ctaText: "Learn more"
        },
        {
          id: 2,
          title: "Build With AI Workshop",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti natus non animi modi accusamus. Deserunt molestiae perferendis assumenda libero veritatis, at exercitationem, quis repellat modi, consequuntur tempore aliquid error atque.",
          icon: BuildWithAI, // Placeholder for the Classroom icon
          ctaText: "Learn more"
        },
        {
          id: 3,
          title: "Git and Github Workshop",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti natus non animi modi accusamus. Deserunt molestiae perferendis assumenda libero veritatis, at exercitationem, quis repellat modi, consequuntur tempore aliquid error atque.",
          icon: GitAndGithub, // Placeholder for the Chrome icon
          ctaText: "Learn more"
        },
        {
            id: 4,
            title: "AI workshop (Upcomming)",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti natus non animi modi accusamus. Deserunt molestiae perferendis assumenda libero veritatis, at exercitationem, quis repellat modi, consequuntur tempore aliquid error atque.",
            icon: GitAndGithub, // Placeholder for the Chrome icon
            ctaText: "Learn more"
          }
      ];
    
      return (
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div 
                key={product.id} 
                className="border border-gray-200 rounded-lg p-6 flex flex-col items-center"
              >
                <div className="bg-gray-50 w-32 h-32 flex items-center justify-center mb-6">
                  <img 
                    src={product.icon} 
                    alt={`${product.title} icon`}
                    className="w-40 h-40"
                  />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">
                  {product.title === "Google Workspace for Education" ? (
                    <>
                      Google Workspace<br />for Education
                    </>
                  ) : (
                    product.title
                  )}
                </h3>
                
                <p className="text-gray-600 text-sm text-center mb-6">
                  {product.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-blue-500 hover:text-blue-700 text-sm mt-auto"
                >
                  {product.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
  )
}

export default EventsList
