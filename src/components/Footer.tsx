import React from 'react';
import { BrainCircuit, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', url: '#about' },
        { text: 'Services', url: '#services' },
        { text: 'Portfolio', url: '#portfolio' },
        { text: 'Contact', url: '#contact' },
        { text: 'Careers', url: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Workflow Automation', url: '#' },
        { text: 'Cost Optimization', url: '#' },
        { text: 'AI-Powered CRM', url: '#' },
        { text: 'Employee Task Automation', url: '#' },
        { text: 'Enterprise Integrations', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', url: '#' },
        { text: 'Case Studies', url: '#' },
        { text: 'Whitepapers', url: '#' },
        { text: 'Documentation', url: '#' },
        { text: 'FAQs', url: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <BrainCircuit className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">OptiAI Services</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Transforming enterprises with AI-powered solutions that reduce costs, optimize workflows, and drive innovation through intelligent automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OptiAI Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;