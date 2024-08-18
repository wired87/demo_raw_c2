"use client";
import React from "react";

import Infinite from "@/components/carousel/Infinite";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import {SectionHeaderT} from "@/types/offer";

export const sH: SectionHeaderT = {
  heading: "Trusted by First class companies",
  subTitle: "World wide",
  des: ""
}

export const InfiniteDefault: React.FC<any> = (
  {
    data
  }
) => {

  return (
    <div className="logo-cloud-container w-[90vw] items-center justify-center mx-auto mt-25 mb-20">

      <SectionTitle
        subTitle={sH.subTitle}
        title={sH.heading}
        des={sH.des}
        center
      />
      <Infinite
        pauseOnHover
        className="[--duration:20s] mt-20 gap-20 my-8 logo-cloud bg-white ">
        {data.map((item:any, i:number) => (

          <Link href={item.url} className="relative w-[350px] h-[120px] items-center mx-4" key={i}>
            <Image alt={item.url} src={item.img} fill objectFit={"contain"} />
          </Link>
        ))}

      </Infinite>
    </div>
  );
}
