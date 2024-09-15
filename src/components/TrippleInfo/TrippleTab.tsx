"use client";
import Image from "next/image";
import React, { useState } from "react";
import SingleTab from "./SingleTab";

import { motion } from "framer-motion";

import {ReactNode} from "react";

export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string | string[];
  image: string | ReactNode;
  alt?: string;
};

interface FTT {
  titleOne: string;
  titleTwo: string;
  titleThree: string;
}

export const aiTabData: FeatureTab[] = [
  {
    id: "tabThree",
    title: "Cognitive Enhancement and Focus",
    desc1: "In a world where cognitive demands are higher than ever, the C1 helps you stay ahead by monitoring and enhancing your brain's performance. " +
      "Whether you're working, studying, or engaging in complex tasks, the C1 provides real-time feedback on your mental state, allowing you to manage stress, " +
      "boost focus, and achieve peak cognitive performance. Its advanced sensors and AI algorithms guide you toward optimal brain activity, " +
      "enhancing productivity and mental clarity throughout the day.",
    desc2: [

    ],
    image: "/images/learning.jpg"
  },
  {
    id: "tabOne",
    title: "Accident Prevention",
    desc1: "Millions of accidents and issues every month can be attributed to stress and anxiety, fatigue and sleep " +
      "disorders, or depression. These numbers could be significantly reduced if recognized " +
      "earlier by checking mental states. " +
      "With its unobtrusive design and adjustable add on electrodes, the C1 aims to target this problem by " +
      "offering real time AI algorithms to recognize these mental states.",
    desc2: [
      ""
    ],
    image: "/images/machine_worker.jpg",
    alt: "https://de.freepik.com/fotos-kostenlos/blick-auf-einen-maennlichen-ingenieur-bei-der-arbeit-zur-feier-des-ingenieurentages_236279127.htm#fromView=search&page=1&position=3&uuid=39d0d76e-b930-471c-b142-f60858187666"
  },
  {
    id: "tabTwo",
    title: "Digital Health",
    desc2: [
      "Fitness & Sports",
      "Elderly Care",
      "Remote Monitoring",
    ],
    desc1: "Digital health is evolving with more and more innovative products. The C1 goes beyond with its real-time capabilities " +
      "and wide spectrum of electrodes and sensors, " +
      "finding its path in various application areas like remote monitoring, elderly care, and fitness & health tracking by creating your digital twin.",
    image: "/images/doc.jpg"
  }

];


const TrippleTab: React.FC<FTT> = (
  {
    titleOne,
    titleTwo,
    titleThree,

  }
) => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              unoptimized
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              unoptimized
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>


          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {titleOne}
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {titleTwo}
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {titleThree}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {aiTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <SingleTab featureTab={feature} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrippleTab;
