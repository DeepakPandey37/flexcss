import React, { useState } from 'react';
import { Copy, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const UsemeBg = ({ style, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast("Item Copied Successfully");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full sm:max-w-sm h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg group border border-gray-300 hover:border-pink-400 transition-all duration-300">
      
      <div className="absolute inset-0 z-0" style={style} />

     
      <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

      
      <div className="absolute inset-0 z-20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
        
        
        <Button
          variant="secondary"
          size="sm"
          onClick={handleCopy}
          className="flex gap-2 items-center shadow-lg hover:scale-105 transition-transform"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>

        
        <Link to="/previewbg" state={{ style }}>
          <Button 
            variant="default" 
            size="sm"
            className="flex gap-2 items-center shadow-lg hover:scale-105 transition-transform"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UsemeBg;