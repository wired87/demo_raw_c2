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
      className={"object-cover absolute top-0 left-0"}
    />
  );
}

export const TrippleUse = () => {
  return(
    <div className={"w-full flex flex-col my-5 py-3 relative"}>
        <SectionTitle
          subtitle="Fit your needs"
          title="Explore whats possible "
          paragraph="Our BCI'S are crafted for everybody to impac everydays life"
        />

      <div className={"grid h-[600px] sm:grid-cols-3 relative sm:grid-rows-1 gap-4 grid-rows-3 grid-cols-1"}>
        {trippleData.map((item, i: number) => (
          <div className={"relative"}>
            <TrippleSectionT key={i} src={item.img} />
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