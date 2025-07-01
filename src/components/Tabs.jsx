import React, { useState } from 'react'
import { Button } from './ui/button'
import { Background } from '@tsparticles/engine';
import BackgroundTabs from './Tabs/BackgroundTabs';
import AnimationTabs from './Tabs/AnimationTabs';
import FunctionsTab from './Tabs/FunctionsTab';
import GradiantTab from './Tabs/GradiantTab';
import CustomTabs from './Tabs/CustomTabs';

const Tabs = () => {
  const[activetab , setactiveTab] = useState("backgrounds");
  return (
    <div className='text-center max-w-7xl mx-auto'>
    <div className=" flex items-center justify-between">
      <Button
       variant={activetab==="backgrounds"? "default" : "outline"}
        onClick = {()=>{
        setactiveTab("backgrounds") }}
          > Backgrounds </Button>
       
       <Button
        variant={activetab==="gradiants"? "default" : "outline"}
         onClick = {()=>{
         setactiveTab("gradiants") }}
           > Gradiants </Button>
       <Button
        variant={activetab==="customs"? "default" : "outline"}
         onClick = {()=>{
         setactiveTab("customs") }}
           > Customs </Button>
      <Button
       variant={activetab==="functions"? "default" : "outline"}
        onClick = {()=>{
        setactiveTab("functions") }}
          > Functions </Button>
          <Button
       variant={activetab==="animations"? "default" : "outline"}
        onClick = {()=>{
        setactiveTab("animations") }}
          > Animations </Button> 
    </div>
    <div className="mt-8">
      {activetab === "backgrounds" && <BackgroundTabs/> }
       {activetab==="animations" && <AnimationTabs/>} 
      {activetab ==="functions" && <FunctionsTab/>}
      {activetab==="gradiants" && <GradiantTab/>}
      {activetab==="customs" && <CustomTabs/>}
    </div>
    </div>
  )
}

export default Tabs