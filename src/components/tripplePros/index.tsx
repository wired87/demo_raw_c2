import React from "react";
import {TripleImgT} from "@/types/trippleUse";
import SectionTitle from "@/components/Common/SectionTitle";
import {trippleData} from "@/components/tripplePros/data";
import Image from "next/image";




const TrippleSectionT: React.FC<TripleImgT> = (
  {
    src
  }
) => {

  return(
    <Image
      alt={"image.png"}
      src={src}
      fill
      className={"object-cover absolute top-0 left-0 "}
    />
  );
}

export const TrippleUse = () => {
  return(
    <div className={"w-full flex flex-col mb-5 py-3 relative "}>
      <div className={"flex items-center justify-center"}>
        <SectionTitle
          subtitle="Fit your needs"
          title="Specified for your situation and needs"
          paragraph="Our BCI'S are crafted for everybody to impac everydays life"
        />
      </div>

      <div className={"grid h-[600px] md:grid-cols-3 relative md:grid-rows-1 gap-4 grid-rows-3 grid-cols-1 "}>
        {trippleData.map((item, i: number) => (
          <div className={"hover:border-1 dark:border-gray-300 border-btndark relative cursor-pointer opacity-40 hover:scale-110 transition duration-300 ease-in-out hover:opacity-100 group"}>
            <TrippleSectionT key={i} src={item.img} />
            <div className={"w-full absolute h-full flex flex-col justify-center items-center gap-y-5"}>
              <p id={"hello"} className={"bold font-bold group-hover:scale-125 transition duration-300 text-gray-200 ease-in-out text-4xl"}>{item.heading}</p>
              <p id={"world"} className={"group-hover:scale-150 transition duration-300 ease-in-out text-gray-200"}>{item.des}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

/*
<div className={"absolute flex w-full h-full flex-col gap-y-3 bg-tp top-0 px-2 justify-center items-center"}>
              <p className={"text-white font-bold"}>{item.heading}</p>
              <Link
                href={item.href}
                className=" rounded-lg ml-5 bg-dark opacity-70 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
              >
                Explore
              </Link>
            </div>
 */