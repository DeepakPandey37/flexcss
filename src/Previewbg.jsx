import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';

const PreviewBg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { style } = location.state || {};

  const isGradient = style?.backgroundImage?.includes('gradient');
  const bgClass = isGradient ? 'bg-black' : 'bg-white';
  const textClass = isGradient ? 'text-white' : 'text-black';
  const cardBg = isGradient ? '' : 'bg-white/80';
  const cardText = isGradient ? 'text-gray-300' : 'text-gray-700';

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center text-center px-4 ${bgClass} ${textClass}`}
      style={style}
    >
      <div
        className={`backdrop-blur-sm ${cardBg} p-8 rounded-xl shadow-lg max-w-2xl`}
      >
        <h1 className="text-3xl font-bold mb-4">
          This is a preview of the selected card
        </h1>
        <p className={`text-lg mb-6 ${cardText}`}>
          The background style you chose is shown below. You can copy and use it anywhere
          you like — in your apps, landing pages, or UI designs.
        </p>
        <Button onClick={() => navigate(-1)} variant="secondary">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default PreviewBg;
