import React from "react";
import UsemeAnimation from "../common/UsemeAnimation";


const animations = [
  { text: "Bounce", animation: "animate-bounce" },
  { text: "Pulse It", animation: "animate-pulse" },
  { text: "Spin Forever", animation: "animate-spin" },
  { text: "Ping Vibe", animation: "animate-ping" },


];


const AnimationTabs = () => {
  return (
    <div className="max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {animations.map((item, index) => (
        <UsemeAnimation key={index} text={item.text} animation={item.animation} />
      ))}
    </div>
  );
};

export default AnimationTabs;
