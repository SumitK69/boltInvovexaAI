import React, { useState } from 'react';
import { X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Financial Services Automation',
      category: 'Workflow Automation',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Implemented an end-to-end workflow automation solution for a leading financial services company, reducing processing time by 78% and operational costs by 45%.',
      technologies: ['AI', 'RPA', 'Machine Learning', 'Cloud Infrastructure']
    },
    {
      title: 'Healthcare Resource Optimization',
      category: 'Cost Optimization',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Developed an AI-driven resource allocation system for a network of hospitals, optimizing staff scheduling and reducing overtime costs by 35%.',
      technologies: ['Predictive Analytics', 'Neural Networks', 'Data Visualization', 'API Integration']
    },
    {
      title: 'Manufacturing Process Automation',
      category: 'Task Automation',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Automated quality control processes for a global manufacturing client, increasing inspection accuracy by 96% while reducing manual labor requirements.',
      technologies: ['Computer Vision', 'IoT', 'Edge Computing', 'Process Automation']
    },
    {
      title: 'Retail CRM Enhancement',
      category: 'AI-Powered CRM',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Upgraded a retail chain's CRM with AI capabilities to predict customer preferences and automate personalized marketing campaigns, resulting in a 28% increase in customer retention.',
      technologies: ['Predictive Analytics', 'NLP', 'Recommendation Systems', 'Marketing Automation']
    },
    {
      title: 'Logistics Systems Integration',
      category: 'Enterprise Integration',
      image: 'https://images.pexels.com/photos/4389743/pexels-photo-4389743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Designed and implemented a custom integration solution for a logistics company, connecting legacy systems with modern cloud platforms to create a unified operational view.',
      technologies: ['API Development', 'Cloud Migration', 'Data Integration', 'Legacy System Integration']
    },
    {
      title: 'Banking Fraud Detection',
      category: 'AI Solution',
      image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Developed an advanced fraud detection system for a banking client, using machine learning to identify suspicious patterns in real-time, reducing fraud losses by 62%.',
      technologies: ['Machine Learning', 'Real-time Processing', 'Security Protocols', 'Pattern Recognition']
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our portfolio of successful projects where we've helped enterprises transform their operations
            with cutting-edge AI solutions and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-medium px-4 py-2 rounded-md border border-white">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="relative">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title} 
                className="w-full h-64 object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                onClick={() => setActiveProject(null)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-sm font-medium text-blue-600 mb-2 block">{projects[activeProject].category}</span>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{projects[activeProject].title}</h3>
              <p className="text-gray-700 mb-6">{projects[activeProject].description}</p>
              
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all w-full md:w-auto"
                onClick={() => setActiveProject(null)}
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;