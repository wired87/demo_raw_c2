"use client";
import React from "react";

import Infinite from "@/components/carousel/Infinite";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import {ShopNow} from "@/components/Shop/ShopNow";
import {SectionHeaderT} from "@/types/offer";
import {bciPartners} from "@/components/carousel/data";

export const sH: SectionHeaderT = {
  heading: "Search by Vendor",
  subTitle: "Explore our Partnerdevices",
  des: ""
}

export const InfiniteLogo: React.FC = () => {

  return (
    <div className="logo-cloud-container w-[90vw] items-center justify-center mx-auto mt-25 mb-20">

      <SectionTitle
        subtitle={sH.subTitle}
        title={sH.heading}
        paragraph={sH.des}
        center
      />
      <Infinite
        pauseOnHover
        className="[--duration:20s] gap-20 my-8 logo-cloud">
        {bciPartners.map((item, i) => (

          <Link href={item.url} className="relative w-[350px] h-[120px] items-center mx-4" key={i}>
            <Image alt={item.url} src={item.img} fill objectFit={"contain"} />
          </Link>

        ))}
      </Infinite>
      <ShopNow href={"/bci"} explore={"BCIs"}/>
    </div>
  );
}
