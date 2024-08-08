"use client"
import {whatDoBCI} from "@/components/News/data";
import {motion} from "framer-motion";
import {Explore} from "@/components/Btns/Explore";
import Image from "next/image";
import {Video} from "@/components/Video";

// <TextRightZ index={0} item={whatDoBCI} plusMDiv={imageStyles} />
const whatsBci: string = "rUFvkQ_Nrvc"
export const SingleNewsSection = () => {

  return(
    <>
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
              className="animate_right flex justify-center items-center relative mx-auto aspect-[588/526.5]  md:w-1/2"
            >
             <Video  videoId={whatsBci}/>
            </motion.div>
          </div>
        </div>
      </section>
      </>
  )
}