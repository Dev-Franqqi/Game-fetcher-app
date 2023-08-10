import { Skeleton } from "@/components/ui/skeleton";
import { BsSearch } from "react-icons/bs";
import React from "react";

export default function Loading() {
    const arr =[1,2,3,4,5]
  return (
    <div>
      <nav className="py-2 px-3 flex justify-between">
        <header className="font-bold">GAME FINDER</header>
        <div>
          <input
            className="border-green-400 border p-2 rounded-md"
            placeholder="e.g Grand Theft Auto"
            type="text"
          />
          <button className="ml-2">
            <BsSearch />
          </button>
        </div>
      </nav>
      {arr.map((item) => (
        <div
          className="text-white py-10 bg-gradient-to-r from-black to-purple-800"
          key={item}
        >
          <div className="border mb-3 rounded-md p-5 md:w-3/5 mx-auto">
            <Skeleton className="h-6 w-40" /> 
            <Skeleton className="mt-4 w-full h-56" />{" "}
            <Skeleton className="h-6 mt-2 w-40" />
            
          </div>
        </div>
      ))}
    </div>
  );
}
