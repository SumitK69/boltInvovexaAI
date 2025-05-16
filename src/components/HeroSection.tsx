import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: '#fff',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)',
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
            OptiAI Services
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Automate Smart. Operate Fast.
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Unlock the power of AI-driven enterprise solutions that reduce operational costs
            and optimize workflows through intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button className="px-8 py-3 bg-white text-blue-800 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
              See Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all">
          <MessageSquare className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;