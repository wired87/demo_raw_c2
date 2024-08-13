import React from "react";
import {BoxT} from "@/types/box";

interface MovieBoxT {
  item: BoxT;
  i: number;
}

export const MovieBox: React.FC<MovieBoxT> = ({item, i}) => {
  return (
    <div key={i} className="w-full mb-5 gap-y-3 gap-x-6 items-start  justify-center flex flex-col">
      <p className="text-left text-xl  uppercase text-dark dark:text-white font-bold tracking-[0.3em]">
        {item.title}
      </p>
      <p className="uppercase text-xs text-primary text-left font-bold tracking-[0.3em]">
        {item.des}
      </p>
    </div>
  )
}