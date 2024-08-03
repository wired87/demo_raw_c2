"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import img from "./img.png";
import update from "./update.png";
const Mission = () => {
  return (
    <div>
      <SectionTitle
        subtitle={"Subtitle"}
        title={"Our Mission"}
        paragraph={"paragraph"}
        center
      />
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
                className="hidden dark:block"
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
                  Believe in the future
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Cyberware
              </h2>
              <p>
                Many people just know the word "Cyberware" from a computer game but its
                already now integrated within so many peoples life.
                We believe in a future where we bring machines and human together as closest as possible to profit
                best possible from both.
                While doing so, we keep our primary focus on consumer BCI's because there
                that's where things get crazy(!).
                A own product line of Software and Hardware is in planning stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden  px-4 md:px-8 2xl:px-0 bg-primary">
          <div className="flex items-center gap-8 lg:gap-32.5 px-9 py-9 ">
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
                Launch Your SaaS Fast
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Updates
              </h2>
              <p>
                We are not just a plattform to purchase hardware but also want to offer users the opportunity to
                sell and purchase own crafted software and updates - especially for BCI's.

                We are aware of strict security rules by cooperating with Government institutions
                like ENISA to ensure for every customer.
              </p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
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
              <Image
                src={update}
                alt="About"
                width={350}


                className={"w-[290px]"}
              />
            </motion.div>
          </div>
        </div>
      </section>

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
                src={"https://www.thedigitalspeaker.com/content/images/2023/09/bring-your-own-cyber-human-self-connected-humans.jpg"}
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
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Be curious!
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Own product line
              </h2>
              <p>
                Because we see a huge opportunity in BCI and general Cyberware technology,
                we are super hyped about to launch the planing stage of your own product line.
                What were your preferred feature? Drop us a line @ info@botworld.cloud
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
