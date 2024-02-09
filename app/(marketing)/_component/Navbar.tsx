"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import  {cn} from "@/lib/utils";


export const Navbar = () => {
  const scroll = useScrollTop();
  return (
    <div className={cn('z=50 bg-background fixed top-0 flex items-center w-full p-6', scroll && "border-b shadow-sm")}>
      <div></div>
      <div className="justify-end">login</div>
    </div>
    
  );
};