import React from 'react';
import { 
  Workflow, 
  DollarSign, 
  Users, 
  ClipboardCheck, 
  Settings 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Workflow className="h-12 w-12 text-blue-600" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with our intelligent workflow automation solutions that eliminate repetitive tasks and reduce human error.'
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: 'Cost Optimization Solutions',
      description: 'Identify inefficiencies and reduce operational costs with our AI-driven analytics and resource allocation optimization tools.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'AI-Powered CRM',
      description: 'Enhance customer relationships with intelligent CRM tools that predict needs, automate communications, and provide actionable insights.'
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-blue-600" />,
      title: 'Employee Task Automation',
      description: 'Boost productivity by automating routine employee tasks, allowing your team to focus on high-value strategic activities.'
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: 'Custom Enterprise Integrations',
      description: 'Seamlessly connect your existing systems with custom API integrations designed specifically for your enterprise architecture.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI-powered solutions designed to transform your business operations,
            reduce costs, and drive growth through intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;