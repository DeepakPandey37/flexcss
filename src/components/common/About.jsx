import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          About Flex.css
        </h1>
        
        <div className="space-y-6 text-left sm:text-center">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            <span className="text-white font-semibold">Flex.css</span> is your all-in-one creative utility toolbox for building stunning websites. Whether you're looking for beautiful gradients, dynamic backgrounds, custom patterns, or small developer-focused tools — Flex.css helps you bring your ideas to life faster.
          </p>
          
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Designed and developed with love by <span className="text-white font-medium">Deepak Chandra Pandey</span>, Flex.css is built using <span className="text-white">React, Tailwind CSS, Framer Motion, and Shadcn UI</span>. It focuses on simplicity, performance, and aesthetic freedom — making it easier than ever to explore and copy production-ready styles and functions.
          </p>
          
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Whether you're a designer, frontend developer, or curious learner, Flex.css offers a growing collection of visually-rich utilities and animations that plug straight into your projects.
          </p>
          
          <div className="pt-4">
            <p className="text-xs sm:text-sm text-gray-600 italic">
              More features coming soon — stay tuned! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;