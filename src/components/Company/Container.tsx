import React from "react";
import {CompanyPageT} from "@/types/company";
import Image from "next/image"
export const CompanyContainer: React.FC<CompanyPageT> = (
  {
    logo,
    name,
    des
  }
) => {

  return(
    <div className={"w-full min-h-[328px] px-5 md:px-15 flex flex-col"}>
      <div className={"flex justify-end items-start flex-rows gap-x-2.5 "}>
        <Image
          src={logo}
          fill
          className={"rounded-full shadow-2 "}
         alt={"image.bild"}/>
        <p>{name}</p>
      </div>
      <p>{des}</p>
    </div>
  );
}