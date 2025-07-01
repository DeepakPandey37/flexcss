import React from "react";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Cover } from "./ui/cover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BorderBeam } from "./magicui/border-beam";

const Hero = () => {
  return (
    <div className="text-center bg-black text-white min-h-screen w-full">
      <div className="pt-16">
        <div className="relative">
          <BackgroundBeamsWithCollision>
            <div className="z-10 text-center">
              <div
  className="inline-block px-6 py-3 rounded-full border border-white
             bg-black backdrop-blur-sm
             text-white text-center text-sm md:text-lg 
             font-semibold shadow-lg"
>
  <span
    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
               bg-[200%_auto] bg-clip-text text-transparent 
               animate-shimmer"
  >
   Flex.css<span className="text-white text-sm">  – Log toh notice karenge. </span> 
  </span>
   <BorderBeam duration={8} size={100} />
</div>


              <h1 className=" mt-15 text-4xl md:text-6xl font-bold text-white text-center ">
                Custom Backgrounds for <Cover>Web Wizards</Cover>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto ">
                Free and open-source animated backgrounds, UI effects, and
                visual tools — built with React, Tailwind CSS, and Framer
                Motion. Perfect for your next creative frontend build.
              </p>
            </div>
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </div>
  );
};

export default Hero;
