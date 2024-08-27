"use client";
import {SectionT} from "@/types/offer";

import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {Explore} from "@/components/Btns/Explore";
import {ImageCarousel} from "@/components/carousel/ImageCarousel";

interface t {
  item: SectionT;
  index: number;
  plusMDiv?: string;
  customMotionDiv?: string;
  cusBtn?: ReactNode,
}



export const TextRightZ: React.FC<t> = (
  {item, index, customMotionDiv, plusMDiv, cusBtn}
) => {
  const media = () => {
    if (typeof item.media === "string") {
      return(
        <Image
          src={item.media}
          alt="About"
          className={`block object-contain rounded-2xl ${item.conf?.classAdd} zoomed-image`}
          fill
        />
      )
    }
    else {
      return (
        <div className={"w-full h-full flex items-center justify-center "}><ImageCarousel media={item.media} /></div>
        )
    }
  }
  const getBtn = () => {
    if (item.btn && item.btn.text && item.btn.path) {
      return (<Explore path={item.btn?.path} text={item.btn?.text}/>)
    } else if (cusBtn) {
      return cusBtn
    }
  }
  console.log("index:", index)
  if (index === 1 || index === 3 ) {
    return(
    <section className="overflow-hidden lg:pb-10 xl:pb-10 bg-transparent py-9 px-9">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center md:flex-row flex-col gap-8 lg:gap-32.5 h-full w-full">
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
            className={customMotionDiv || `animate_left h-full relative mx-auto aspect-[588/526.5] md:block md:w-1/2 w-full  ${plusMDiv || ""}`}>
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
            className="animate_right md:w-1/2 w-full h-full"
          >
            <h4 className="font-medium uppercase text-black dark:text-white">

            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {item.heading}
            </h2>
            <p>
              {item.des}
            </p>
            {getBtn()}
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
            className="animate_left md:w-1/2 w-full h-full"
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
              {getBtn()}
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
            className="animate_right h-full relative mx-auto aspect-[588/526.5] md:block md:w-1/2 w-full"
          >
            {media()}
          </motion.div>
        </div>
      </div>
    </section>
  )
}