import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '../ui/button';
import { Copy, LucideCopyCheck } from 'lucide-react';
import { toast } from 'sonner';

const Translate = () => {
  const[copy, setCopy] = useState(false);
  const handleCopy = async () => {
    const componentCode = `
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="En-To-hi">English</TabsTrigger>
    <TabsTrigger value="hi-To-en">Hindi</TabsTrigger>
  </TabsList>
  <TabsContent value="En-To-hi">
    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
  </TabsContent>
  <TabsContent value="hi-To-en">
    रिएक्ट (जिसे रिएक्ट.जेएस या रिएक्टजेएस के रूप में भी जाना जाता है) एक स्वतंत्र और ओपन-सोर्स फ्रंट-एंड जावास्क्रिप्ट लाइब्रेरी है जिसका उद्देश्य घटकों के आधार पर उपयोगकर्ता इंटरफेस को अधिक "सहज" बनाना है। इसका रखरखाव मेटा (पूर्व में फेसबुक) और व्यक्तिगत डेवलपर्स और कंपनियों के एक समुदाय द्वारा किया जाता है।
  </TabsContent>
</Tabs>
    `.trim();

    try {
      await navigator.clipboard.writeText(componentCode);
      setCopy(true);
      toast("Item Coppied Sucessfully");
    } catch (err) {
      alert("❌ Failed to copy.");
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 relative w-[420px] mx-auto">
      {/* Copy Button Top-Right */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className="absolute top-3 right-3"
      >
        {(copy)? <LucideCopyCheck /> : <Copy className="h-4 w-4" /> }
      </Button>

      {/* Tabs inside Card */}
      <Tabs defaultValue="account" className="w-full mt-2">
        <TabsList>
          <TabsTrigger value="En-To-hi">English</TabsTrigger>
          <TabsTrigger value="hi-To-en">Hindi</TabsTrigger>
        </TabsList>

        <TabsContent value="En-To-hi" className="mt-4">
          React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
        </TabsContent>

        <TabsContent value="hi-To-en" className="mt-4">
          रिएक्ट (जिसे रिएक्ट.जेएस या रिएक्टजेएस के रूप में भी जाना जाता है) एक स्वतंत्र और ओपन-सोर्स फ्रंट-एंड जावास्क्रिप्ट लाइब्रेरी है जिसका उद्देश्य घटकों के आधार पर उपयोगकर्ता इंटरफेस को अधिक "सहज" बनाना है। इसका रखरखाव मेटा (पूर्व में फेसबुक) और व्यक्तिगत डेवलपर्स और कंपनियों के एक समुदाय द्वारा किया जाता है।
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Translate;
