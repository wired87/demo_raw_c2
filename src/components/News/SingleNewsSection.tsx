"use client"
import {whatDoBCI} from "@/components/News/data";
import {motion} from "framer-motion";
import {Explore} from "@/components/Btns/Explore";
import {Video} from "@/components/Video";
import React from "react";
import {NewsT} from "@/types/news";


interface CompNewsT {
  data: NewsT;
}
export const SingleNewsSection: React.FC<CompNewsT> = (
  {
    data
  }
) => {

  return(
    <>
      <section>
        <div className=" flex items-center justify-center w-full overflow-hidden md:px-18 2xl:px-5 bg-transparent">
          <div className="w-full items-center justify-center grid lg:grid-cols-2 grid-cols-1
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
              className="animate_left md:px-10 px-5 w-full  flex items-start justify-center flex-col "
            >
              <h4 className="font-medium uppercase text-black dark:text-white">

              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {whatDoBCI.heading}
              </h2>
              <p>
                {whatDoBCI.des}
              </p>
              <div>
                <Explore path={whatDoBCI.btn?.path || ""} text={whatDoBCI.btn?.text || ""}/>
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
              className="animate_right justify-start w-full flex md:justify-center items-center relative mx-auto aspect-[588/526.5]"
            >
             <Video  videoId={data.videoId} />
            </motion.div>
          </div>
        </div>
      </section>
      </>
  )
}