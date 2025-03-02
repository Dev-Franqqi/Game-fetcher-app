import { Skeleton } from "@/components/ui/skeleton";
import { BsSearch } from "react-icons/bs";
import React from "react";

export default function Loading() {
    
  return (
    <>
      
          <div className="border mb-3 rounded-md p-5 md:w-3/5 mx-auto">
           
            <Skeleton className="mt-4 w-full h-56" />
            <Skeleton className="mt-4 w-full h-56" />
            <Skeleton className="mt-4 w-full h-56" />
            <Skeleton className="mt-4 w-full h-56" />
           
            
     
     </div>
    </>
  );
}
