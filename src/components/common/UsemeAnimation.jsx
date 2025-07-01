import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaRegistered } from "react-icons/fa";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

const UsemeAnimation = ({ text, animation }) => {
  const [copy , setCopy] = useState(false);
  const copyHandler = ()=>{
    navigator.clipboard.writeText(animation);
    toast("Item copied Sucessfully");
    setCopy(true);
  }
  return (
    <div className="p-4 w-full sm:w-64 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ">
      <div className="flex gap-1">
        <Button variant={"icon"} onClick={copyHandler} className={"top-3  left-3"}>{(copy)?<CopyCheckIcon/> : <CopyIcon/>}</Button>
      <p className={`text-xl font-semibold text-center ${animation}`}>
        {text}
      </p>
      </div>
      
    </div>
  );
};

export default UsemeAnimation;
