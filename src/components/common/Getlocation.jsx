import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Copy, CopyCheck } from 'lucide-react';
import { toast } from "sonner";
import { Toaster } from '../ui/sonner';

const Getlocation = () => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [active, setActive] = useState('');
  const [copy , setCopy] = useState(false);
const handleCopy = async () => {
    const componentCode = `
<div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 relative w-[420px] mx-auto">
  <Button
    variant="outline"
    size="icon"
    onClick={/* handleCopy */}
    className="absolute top-3 right-3"
  >
    <Copy className="h-4 w-4" />
  </Button>
  
  <Button
    variant={active === "location" ? "default" : "outline"}
    onClick={/* getMyLocation */}
  >
    Get My Location
  </Button>

  {location.latitude && location.longitude && (
    <div className="mt-4 w-full h-[300px]">
      <iframe
        src={\`https://www.google.com/maps?q=\${location.latitude},\${location.longitude}&output=embed\`}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Google Maps Location"
        loading="lazy"
      ></iframe>
    </div>
  )}
</div>
    `.trim();

    try {
      await navigator.clipboard.writeText(componentCode);
      setCopy(true);
      
      toast("Item Copied Successfully .");

    } catch (err) {
      alert("❌ Failed to copy.");
    }
  };
  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setActive("location");
        },
        (error) => {
          alert("Failed to get location");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 relative w-[420px] mx-auto">
        <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className="absolute top-3 right-3"
      >
        {(copy)? <CopyCheck/>: <Copy className="h-4 w-4" />}
      </Button>
      <Button
        variant={active === "location" ? "default" : "outline"}
        onClick={getMyLocation}
      >
        Get My Location
      </Button>

      {location.latitude && location.longitude && (
        <div className="mt-4 w-full h-[300px]">
          <iframe
            src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Google Maps Location"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Getlocation;
