import React from 'react';
import { Cpu, Network, Database, Cloud } from 'lucide-react';

const AboutSection = () => {
  const techIcons = [
    { icon: <Cpu className="h-12 w-12 text-blue-600" />, text: 'Artificial Intelligence' },
    { icon: <Network className="h-12 w-12 text-blue-600" />, text: 'Machine Learning' },
    { icon: <Database className="h-12 w-12 text-blue-600" />, text: 'Automation' },
    { icon: <Cloud className="h-12 w-12 text-blue-600" />, text: 'Cloud Infrastructure' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About OptiAI Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Enterprises with AI-Powered Solutions
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At OptiAI Services, we're revolutionizing how enterprises operate by harnessing the power of 
              artificial intelligence and automation. Our suite of intelligent solutions is designed 
              to help businesses reduce operational costs, optimize workflows, and drive innovation.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our core mission is to provide enterprise-grade AI tools that integrate seamlessly with
              your existing systems, delivering measurable results without disrupting your operations.
            </p>
            <div className="flex items-center">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium mr-4">
                10+ Years Experience
              </span>
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-medium">
                500+ Clients Served
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {techIcons.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-4 flex justify-center">{tech.icon}</div>
                <p className="font-medium text-gray-800">{tech.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;