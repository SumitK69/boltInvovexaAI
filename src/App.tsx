import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <TechStackSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;