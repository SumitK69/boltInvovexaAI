import React from 'react';

const TechStackSection = () => {
  // URLs for technology logos
  const techLogos = [
    {
      name: 'TensorFlow',
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
    },
    {
      name: 'Python',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
      name: 'AWS',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
      name: 'Microsoft Azure',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg'
    },
    {
      name: 'Docker',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'
    },
    {
      name: 'Node.js',
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
      name: 'Kubernetes',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    },
    {
      name: 'MongoDB',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack & Tools</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build robust, scalable, and intelligent solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {techLogos.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-all"
            >
              <img 
                src={tech.url} 
                alt={tech.name} 
                className="h-16 object-contain mb-4" 
              />
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Our experienced team is proficient in a wide range of technologies, allowing us to select the best tools for your specific requirements.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all">
            Learn More About Our Tech Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;