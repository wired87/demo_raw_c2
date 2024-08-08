"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {GripSection} from "@/components/AbilityHand/GripSection";


interface CTAT {
  img: string;

}



const CTA: React.FC<CTAT> = (
  {
    img,
  }
) => {
  return (
    <>
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-primary py-9 px-9">
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src={img}
                alt="About"
                className="hidden dark:block object-cover"
                fill
                priority={false}
              />
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
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                You’ve got the touch...
              </h2>
              <p>
                The Ability Hand™ has sensors in its fingertips that detect pressure when you’re gripping an object and send a vibration to your arm to communicate that sensation. It lets you feel what you’re doing, so you can work with even the most delicate objects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <GripSection />
    </>
  );
};

export default CTA;
