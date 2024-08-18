
// The Apogee Provides Support For

import {gridSecPros} from "@/components/Categories/Exo-Skeletons/German-Bionics/data";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";

export const SupportedAreas: React.FC<any> = ({subHeading}) => {
  return (
    <>
      <SectionTitle
        subTitle={subHeading.subTitle}
        title={subHeading.title}
        des={subHeading.des}
        center
      />
      <div className={"flex justify-center items-center w-full h-[599px]"}>
        <div
          className={"grid grid-cols-1 px-5 bg-black gap-4 relative md:grid-cols-4 h-[500px] w-full grid-rows-5 md:grid-rows-1 "}>

          {gridSecPros.map((item: any, i: number) => (
            <div className={"w-full relative bg-white h-full border-t-1 border-yellow400"} key={i}>
              <h1 className={"absolute top-4 text-black"}>{item.text}</h1>
              <Image
                src={item.img}
                alt={item.img}
                fill
                className={"absolute top-0 left-0 w-1/5 h-[200px] object-contain"}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}