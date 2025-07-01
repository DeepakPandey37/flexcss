import React from 'react';
import GradiantTab from './Tabs/GradiantTab';
import Navbar from './common/Navbar';

const GradiantSpecific = () => {
  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar className="bg-black text-white" />
      <div className="mt-16 py-10 text-center text-4xl text-gray-300">
         Gradients provided by our website 
      </div>

      <div className="mt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <GradiantTab />
        </div>
      </div>
    </div>
  );
};

export default GradiantSpecific;
