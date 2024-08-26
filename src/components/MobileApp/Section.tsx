"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {MobileButtons} from "@/components/MobileApp/Buttons";

const mobielDes = "The Best Brain App will be available for both iOS and Android platforms, " +
  "fully integrated with Apple Health and Google Fit. Seamlessly sync your EEG metrics " +
  "and mental health data across devices while enjoying intuitive, user-friendly interfaces " +
  "that make monitoring your well-being a breeze. From real-time brainwave analysis to daily " +
  "mental health reports, these apps offer comprehensive insights."

export const MobileSection = () => {
  return (
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
                Stay tuned for the mobile App!
              </h2>
              <p>
                {mobielDes}
              </p>
              <div>
                <MobileButtons />
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
              transition={{duration: 1, delay: 0.1}}
              viewport={{once: true}}
              className="animate_right  justify-start w-full h-full flex md:justify-center items-center relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src={"/images/mobile/mobile2.png"}
                alt={"mobile_prev.png"}
                fill
                className="absolute bottom-0 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}