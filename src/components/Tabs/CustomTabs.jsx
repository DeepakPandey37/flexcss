"use client";

import React, { use, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

const CustomTabs = () => {
  const [shape, setShape] = useState("Ellipse");
  const [sizeX, setSizeX] = useState(60);
  const [sizeY, setSizeY] = useState(60);
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(50);
  const [color, setColor] = useState({ r: 244, g: 63, b: 94, a: 0.3 });
  const [fadeLimit, setFadeLimit] = useState(70);
  const [copy , setCopy] = useState(false);

  const gradientCode = `radial-gradient(${shape} ${sizeX}% ${sizeY}% at ${posX}% ${posY}%, rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}), transparent ${fadeLimit}%)`;

  const handleCopy = () => {
   
    
      navigator.clipboard.writeText(gradientCode);
        setCopy(true);
        toast("Item Coppied Sucessfully");
      
       
    
  };

  return (
    <form className="space-y-6 p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="shape">Shape</Label>
        <Select value={shape} onValueChange={setShape}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select shape" />
          </SelectTrigger>
          <SelectContent>
       
            <SelectItem value="ellipse">Ellipse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Size X (%)</Label>
          <Slider min={10} max={100} step={1} value={[sizeX]} onValueChange={([v]) => setSizeX(v)} />
        </div>
        <div className="space-y-2">
          <Label>Size Y (%)</Label>
          <Slider min={10} max={100} step={1} value={[sizeY]} onValueChange={([v]) => setSizeY(v)} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Position X (%)</Label>
          <Slider min={0} max={100} step={1} value={[posX]} onValueChange={([v]) => setPosX(v)} />
        </div>
        <div className="space-y-2">
          <Label>Position Y (%)</Label>
          <Slider min={0} max={100} step={1} value={[posY]} onValueChange={([v]) => setPosY(v)} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="space-y-1">
          <Label>R</Label>
          <Input type="number" value={color.r} onChange={(e) => setColor({ ...color, r: +e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label>G</Label>
          <Input type="number" value={color.g} onChange={(e) => setColor({ ...color, g: +e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label>B</Label>
          <Input type="number" value={color.b} onChange={(e) => setColor({ ...color, b: +e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label>A</Label>
          <Input type="number" step="0.01" value={color.a} onChange={(e) => setColor({ ...color, a: +e.target.value })} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Fade Limit (%)</Label>
        <Slider min={0} max={100} step={1} value={[fadeLimit]} onValueChange={([v]) => setFadeLimit(v)} />
      </div>

      <div className="bg-gray-100 dark:bg-zinc-800 rounded p-4 text-sm font-mono overflow-x-auto">
        <p>{gradientCode}</p>
      </div>

      <Button type="button" onClick={handleCopy}>{`${(copy) ? "copied" : "Copy css" }`}</Button>

      <div
        className="h-90 rounded-xl border mt-4"
        style={{ backgroundImage: gradientCode }}
      />
    </form>
  );
};

export default CustomTabs;
