import React from 'react';
import GradiantTab from './Tabs/GradiantTab';
import Navbar from './common/Navbar';

const GradiantSpecific = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar className="bg-black text-white" />
      
      <div className="pt-20 md:pt-24 pb-10 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text">
            Gradient Collection
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of beautiful gradients for your next project
          </p>
        </div>
      </div>

      <div className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <GradiantTab />
        </div>
      </div>
    </div>
  );
};

export default GradiantSpecific;