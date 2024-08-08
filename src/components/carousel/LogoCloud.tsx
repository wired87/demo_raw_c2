"use client";
import React, {useEffect, useState} from "react";

import Infinite from "@/components/carousel/Infinite";
import {GridTileImage} from "@/components/product/tile";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";

export const InfiniteCarouselComponent: React.FC<any> = ({data, sH, use}) => {
  const [primaryColor, setPrimaryColor] = useState('');

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColorValue = rootStyles.getPropertyValue('--primary');
    setPrimaryColor(primaryColorValue.trim());
  }, []);


  const getContent = (item: any, i:number) => {
    if (use === "PARTNERS") {
      return(
        <Link href={item.url} className="relative w-[350px] h-[120px] items-center mx-4" key={i}>
          <Image alt={item.url} src={item.img} fill objectFit={"contain"} />
        </Link>
      )
    } else if (use === "PRODUCT") {
      return(
        <Link href={`/product/${item.handle}`} className="relative w-[450px] h-[270px] items-center mx-auto" key={i}>
          <GridTileImage
            alt={item.title}
            label={{
              title: item.title,
              amount: item.amount,
              currencyCode: "EUR"
            }}
            src={item.img}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </Link>
      )
    }

  }


  return (
    <div className="logo-cloud-container w-[90vw] items-center justify-center mx-auto my-10">

      <SectionTitle
        subtitle={sH.subTitle}
        title={sH.heading}
        paragraph={sH.des}
        center
      />
      <Infinite
        pauseOnHover
        className="[--duration:20s] gap-20 my-8 logo-cloud"
      >
        {[data.map((item, i) => ( getContent(item, i) ))]}
      </Infinite>
      <div className={"w-full flex items-center flex-col"}>
        <p className="mt-7 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
          Explore all BCIs
        </p>
        <Link href={"/bci"} className="mt-5 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
