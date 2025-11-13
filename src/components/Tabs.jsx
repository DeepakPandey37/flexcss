import React, { useState } from 'react';
import { Button } from './ui/button';
import BackgroundTabs from './Tabs/BackgroundTabs';
import AnimationTabs from './Tabs/AnimationTabs';
import FunctionsTab from './Tabs/FunctionsTab';
import GradiantTab from './Tabs/GradiantTab';
import CustomTabs from './Tabs/CustomTabs';

const Tabs = () => {
  const [activetab, setactiveTab] = useState("backgrounds");
  
  const tabs = [
    { id: "backgrounds", label: "Backgrounds" },
    { id: "gradiants", label: "Gradients" },
    { id: "customs", label: "Customs" },
    { id: "functions", label: "Functions" },
    { id: "animations", label: "Animations" }
  ];

  return (
    <div className='text-center max-w-7xl mx-auto px-4 py-8'>
     
      <div className="hidden md:flex items-center justify-between gap-4 flex-wrap">
        {tabs.map(tab => (
          <Button
            key={tab.id}
            variant={activetab === tab.id ? "default" : "outline"}
            onClick={() => setactiveTab(tab.id)}
            className="flex-1 min-w-[120px]"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      
      <div className="md:hidden overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max px-2">
          {tabs.map(tab => (
            <Button
              key={tab.id}
              variant={activetab === tab.id ? "default" : "outline"}
              onClick={() => setactiveTab(tab.id)}
              className="whitespace-nowrap"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

    
      <div className="mt-6 md:mt-8">
        {activetab === "backgrounds" && <BackgroundTabs />}
        {activetab === "animations" && <AnimationTabs />}
        {activetab === "functions" && <FunctionsTab />}
        {activetab === "gradiants" && <GradiantTab />}
        {activetab === "customs" && <CustomTabs />}
      </div>
    </div>
  );
};

export default Tabs;