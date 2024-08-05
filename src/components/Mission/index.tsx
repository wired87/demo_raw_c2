"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Link from "next/link";
import {sliderData} from "@/components/Hero/data";
import {Carousel} from "@/components/carousel/Carousel";

const softwareGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pzNmRzOWFoeWptaXVieGs3emtmbzgyeDc1ejFzNXc5eTFwcjN1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfRG8cK5SPOer97aK/giphy.gif"
const brainGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0OWprMzZ2bDJyN25oaTgzNGRrOTE2eHA1dmYwcTJscG9wajI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy-downsized-large.gif"

const Mission = () => {
  return (
    <div className={"bg-transparent"}>
      <Image src={""} alt={"blur_bg.png"} className={"blur-sm object-cover"}/>
      <SectionTitle
        subtitle={"Subtitle"}
        title={"Our Mission"}
        paragraph={"paragraph"}
        center
      />
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-3/4"
            >
              <Image
                src={softwareGif}
                alt="About"
                className="block object-contain rounded-2xl"
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
              <h4 className="font-medium uppercase text-black dark:text-white">
                Software
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Explore our Software Solutions
              </h2>
              <p>
                Explore the different types of devices as <Link href={"/invasive"}>invasive</Link> <Link href={"/non-invasive"}>non-invasive</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
                The Techniques
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Devices
              </h2>
              <p>
                Explore which of our devices fits your needs
              </p>
              <div>
                <Link
                  href="/"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Explore
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
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
              <Carousel data={sliderData} />
            </motion.div>
          </div>
        </div>
      </section>

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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src={brainGif}
                alt="About"
                className="block object-cover rounded-2xl"
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
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Science
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Our Vision and Mission
              </h2>
              <p>
               Explore with us the future!
              </p>
              <Link
                href="/"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                  <span className="duration-300 group-hover:pr-2">
                    Get inspired
                  </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
