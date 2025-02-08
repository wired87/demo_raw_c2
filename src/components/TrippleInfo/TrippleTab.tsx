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
    title: "Smart Therapeutic Cells",
    desc1: "AI-generated synthetic cells can be programmed to detect and repair damaged tissue, " +
      "offering new solutions in regenerative medicine.",
    desc2: [
"Personalized cell-based treatments\n" +
"\n" +
"Faster healing with targeted repair\n" +
"\n" +
"Reduced risk of rejection\n" +
"\n" +
"Scalable production\n" +
"\n" +
"Non-invasive applications\n" +
"\n" +
"Long-term regenerative potential"
    ],
    image: "/images/learning.jpg"
  },
  {
    id: "tabOne",
    title: "Industrial Biomanufacturing",
    desc1: "AI-designed cells can be used to produce sustainable biomaterials, replacing traditional chemical processes.",
    desc2: [
      "Lower environmental footprint\n",
      "\n" +
      "Cost-effective biomaterial production\n",
      "\n" +
      "Scalable for mass manufacturing\n",
      "\n" +
      "Biodegradable alternatives to plastics\n",
      "\n" +
      "Customizable biological outputs\n",
      "\n" +
      "Efficient and renewable resource utilization"
    ],
    image: "/images/machine_worker.jpg",
    alt: "https://de.freepik.com/fotos-kostenlos/blick-auf-einen-maennlichen-ingenieur-bei-der-arbeit-zur-feier-des-ingenieurentages_236279127.htm#fromView=search&page=1&position=3&uuid=39d0d76e-b930-471c-b142-f60858187666"
  },
  {
    id: "tabTwo",
    title: "Neuronal Development",
    desc2: [
      "Win the war against disease\n" ,
      "\n" +
      "Adaptive learning integration\n" ,
      "\n" +
      "Long-term compatibility\n" +
      "\n" +
      "Non-invasive monitoring\n",
      "\n" +
      "Cognitive enhancement potential\n",
      "\n" +
      "Scalable applications",

    ],
    desc1: " AI-generated neural cells can improve brain-computer interfaces by enhancing connectivity and adaptability.",
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
