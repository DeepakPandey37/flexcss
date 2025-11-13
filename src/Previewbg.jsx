import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PreviewBg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { style } = location.state || {};

  const isGradient = style?.backgroundImage?.includes('gradient');
  const bgClass = isGradient ? 'bg-black' : 'bg-white';
  const textClass = isGradient ? 'text-white' : 'text-black';
  const cardBg = isGradient ? 'bg-black/40' : 'bg-white/80';
  const cardText = isGradient ? 'text-gray-300' : 'text-gray-700';

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-8 ${bgClass} ${textClass}`}
      style={style}
    >
      <div
        className={`backdrop-blur-md ${cardBg} p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-2xl w-full border ${isGradient ? 'border-white/20' : 'border-gray-200'}`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Background Preview
        </h1>
        <p className={`text-sm sm:text-base md:text-lg mb-6 ${cardText} leading-relaxed`}>
          This is a preview of the selected background style. You can copy and use it anywhere
          you like — in your apps, landing pages, or UI designs. The style adapts beautifully to any screen size.
        </p>
        <Button 
          onClick={() => navigate(-1)} 
          variant={isGradient ? "secondary" : "default"}
          className="flex items-center gap-2 mx-auto"
        >
          <ArrowLeft size={18} />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default PreviewBg;