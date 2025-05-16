import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to supercharge your business with AI?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl">
              Let's work together to transform your operations, reduce costs, and drive growth through intelligent automation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-blue-800 rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;