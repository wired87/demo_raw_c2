"use client"
import {motion} from "framer-motion";
import {Explore} from "@/components/Btns/Explore";
import React from "react";

import Image from "next/image";

interface CompNewsT {
  data: any;
}
export const DataInsightSection: React.FC<CompNewsT> = (
  {
    data
  }
) => {

  return(
    <>
      <section>
        <div className="bg-black h-[400px] flex items-center justify-center w-full overflow-hidden md:px-18 2xl:px-5">
          <div className=" bg-black w-full items-center justify-center grid lg:grid-cols-2 grid-cols-1
              grid-rows-2 lg:grid-rows-1">
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
              className="animate_left md:px-10 px-5 w-full bg-black flex items-start justify-center flex-col "
            >

              <h2 className="relative mb-6 text-md  text-black dark:text-white xl:text-hero">
                {data.heading}
              </h2>
              <p>
                {data.des}
              </p>
              <div>
                <Explore path={data.btn?.path || ""} text={data.btn?.text || ""}/>
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
              className="animate_right bg-black justify-start w-full flex md:justify-center items-center relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src={data.media}
                fill
                alt={data.media}
                className={"h-full object-contain"}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}