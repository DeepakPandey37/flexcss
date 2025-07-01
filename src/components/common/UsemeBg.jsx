import React, { useState } from 'react';

import { Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const UsemeBg = ({ style, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast("Item Coppied Sucessfully");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-lg group border border-gray-300">
      {/* Background */}
      <div className="absolute inset-0 z-0" style={style} />

      {/* Hover Buttons */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Copy Button */}
        <div className="absolute top-3 left-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopy}
            className="flex gap-2 items-center"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>

        {/* Preview Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button variant="default">  <Link to="/previewbg" state={{ style }}>Preview</Link> </Button>
        </div>
      </div>
    </div>
  );
};

export default UsemeBg;
