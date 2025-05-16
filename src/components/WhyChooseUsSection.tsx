import React from 'react';
import { Clock, CheckCircle, Zap, DollarSign, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly at all times.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: '99.9% Uptime SLA',
      description: 'We guarantee exceptional reliability with our industry-leading uptime SLA.'
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: 'Easy Integration',
      description: 'Our solutions integrate seamlessly with your existing systems and workflows.'
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: 'Proven Cost Savings',
      description: 'Clients typically see ROI within the first 6 months of implementation.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Scalable & Secure',
      description: 'Enterprise-grade security and scalability to grow with your business needs.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We're committed to delivering exceptional value and service to our clients. Here's what sets us apart.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Commitment to Excellence</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Every solution we deliver is built with a commitment to quality, reliability, and performance.
            We stand behind our work with industry-leading guarantees and support services.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">95%</span>
              <span className="text-blue-200">Client Retention Rate</span>
            </div>
            <div className="hidden md:block w-px bg-blue-400 h-20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">500+</span>
              <span className="text-blue-200">Projects Completed</span>
            </div>
            <div className="hidden md:block w-px bg-blue-400 h-20"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">40%</span>
              <span className="text-blue-200">Average Cost Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;