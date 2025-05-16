import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "OptiAI's workflow automation solution has completely transformed our operations. We've seen a 40% reduction in processing time and significant cost savings.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Group",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "The AI-powered CRM implemented by OptiAI has revolutionized how we interact with customers. The predictive analytics capabilities have helped us anticipate customer needs before they even express them.",
      name: "Michael Chen",
      title: "Head of Customer Relations",
      company: "Retail Innovations Inc.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "We struggled with integrating our legacy systems until we partnered with OptiAI. Their custom enterprise integration solution was exactly what we needed, and their support team has been exceptional.",
      name: "Emily Roberts",
      title: "Operations Director",
      company: "Manufacturing Excellence",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      quote: "The cost optimization solution from OptiAI identified inefficiencies we hadn't even noticed. Within six months, we reduced operational costs by 28% while improving service delivery.",
      name: "David Patel",
      title: "CFO",
      company: "Healthcare Solutions Network",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Testimonials</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
        </div>

        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} className="h-6 w-6 text-gray-300" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                  <p className="text-blue-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -mt-6 left-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            <div className="absolute top-1/2 -mt-6 right-4">
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`mx-1 w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;