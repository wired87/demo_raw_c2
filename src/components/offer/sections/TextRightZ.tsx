"use client";
import {SectionT} from "@/types/offer";

import React from "react";
import {motion} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {Explore} from "@/components/Btns/Explore";
import {ImageCarousel} from "@/components/carousel/ImageCarousel";

interface t {
  item: SectionT;
  index: number;
  plusMDiv?: string;
  customMotionDiv?: string;
}
function isStringArray(data: string[] | StaticImageData[]): data is string[] {
  return data.length > 0 && typeof data[0] === 'string';
}



export const TextRightZ: React.FC<t> = (
  {item, index, customMotionDiv, plusMDiv}
) => {
  const media = () => {
    if (typeof item.media === "string") {
      return(
        <Image
          src={item.media}
          alt="About"
          className="block object-contain rounded-2xl"
          fill
          priority={false}
        />
      )
    }
    else if (isStringArray(item.media)) {
      return <ImageCarousel media={item.media}/>
    }
  }

  console.log("index:", index)
  if (index === 1 || index === 3 ) {
    return(
    <section className="overflow-hidden pb-10 lg:pb-10 xl:pb-10 bg-transparent py-9 px-9">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={customMotionDiv || `animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-3/4 ${plusMDiv || ""}`}
          >
            {media()}
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2"
          >
            <h4 className="font-medium uppercase text-black dark:text-white">
              BCI & Tools
            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              BCI
            </h2>
            <p>
              {item.heading}
            </p>
            <Explore path={item?.btn?.path || ""} text={item?.btn?.text || ""}/>
          </motion.div>
        </div>
      </div>
    </section>
    )
  }

  return(
    <section>
      <div className="mx-auto max-w-c-1235 overflow-hidden  px-4 md:px-8 2xl:px-0 bg-transparent">
        <div className="flex items-center gap-8 lg:gap-x-32.5 px-9 py-9 ">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <h4 className="font-medium uppercase text-black dark:text-white">

            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {item.heading}
            </h2>
            <p>
              {item.des}
            </p>
            <div>
              <Explore path={item.btn?.path || ""} text={item.btn?.text || ""}/>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right flex justify-center items-center relative mx-auto aspect-[588/526.5]  md:w-1/2"
          >
            {media()}
          </motion.div>
        </div>
      </div>
    </section>
  )
}