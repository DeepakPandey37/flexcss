import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Flex.css</h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          <span className="text-white font-semibold">Flex.css</span> is your all-in-one creative utility toolbox for building stunning websites. Whether you're looking for beautiful gradients, dynamic backgrounds, custom patterns, or small developer-focused tools — Flex.css helps you bring your ideas to life faster.
        </p>
        <p className="mt-6 text-base text-gray-400">
          Designed and developed with love by <span className="text-white font-medium">Deepak Chandra Pandey</span>, Flex.css is built using <span className="text-white">React, Tailwind CSS, Framer Motion, and Shadcn UI</span>. It focuses on simplicity, performance, and aesthetic freedom — making it easier than ever to explore and copy production-ready styles and functions.
        </p>
        <p className="mt-6 text-base text-gray-400">
          Whether you're a designer, frontend developer, or curious learner, Flex.css offers a growing collection of visually-rich utilities and animations that plug straight into your projects.
        </p>
        <p className="mt-6 text-sm text-gray-600 italic">
          More features coming soon — stay tuned!
        </p>
      </div>
    </div>
  );
};

export default About;
