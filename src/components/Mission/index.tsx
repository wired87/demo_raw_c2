"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import {bioWareData, sliderData} from "@/components/Hero/data";
import {Carousel} from "@/components/carousel/Carousel";
import {Explore} from "@/components/Btns/Explore";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";

const softwareGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pzNmRzOWFoeWptaXVieGs3emtmbzgyeDc1ejFzNXc5eTFwcjN1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfRG8cK5SPOer97aK/giphy.gif"
const brainGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0OWprMzZ2bDJyN25oaTgzNGRrOTE2eHA1dmYwcTJscG9wajI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy-downsized-large.gif"
const universalBCI: string = "https://neurosky.com/wp-content/uploads/2015/06/man-thinking-011.jpg"

const data = [
  {
    media: [ // todo build check for mp4
      "https://blackrockneurotech.com/wp-content/uploads/2023/01/home-pioneering-the-future-video.mp4",
      "https://synchron.com/uploads/images/SYN003-TedTalk-4K-4.mp4",
    ],
    heading: "BCI's",
    des: "Choose from various techniques of carefully chosen partners from all over the World to fit your needs.",
    btn: {
      text: "Explore the possibilities",
      path: "/bci"
    }
  },{
    media: [
      //"https://www.premierprosthetic.com/wp-content/uploads/iStock-503663810.jpg",
      "https://openbionics.com/wp-content/uploads/2021/09/Cath-Shilling-new-website-.jpg"
      // todo later https://www.steepergroup.com/prosthetics/lower-limb-prosthetics/cosmesis/prosthetic-leg-cover/
    ],
    heading: "Bio Ware",
    des: "Explore our bioware solutions for every situation.",
    btn: {
      text: "",
      path: "/"
    }
  },{
    media: [""],
    heading: "Clinicians & Research",
    des: "Explore our high qualitative EEG Clinical Equipments ",
    btn: {
      text: "Explore Equipment",
      path: "/clinician"
    }
  },{
    media: [
      "https://raw.githubusercontent.com/scott-huberty/wip_pipeline-figures/main/dashboard.png"
    ],
    heading: "Software",
    des: "Explore our smart solutions for EEG signal monitorings",
    btn: {
      text: "Get it!",
      path: "/software"
    }
  },
]
const Mission = () => {
  return (
    <div className={"bg-transparent"}>
      <SectionTitle
        subtitle={"Subtitle"}
        title={"Our Mission"}
        paragraph={"paragraph"}
        center
      />
      {data.map((item,i) => (
        <TextRightZ  index={i} item={item}/>
      ))}
    </div>
  );
};

export default Mission;
/*
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
                src={"/images/mission/man_think.jpg"}
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

              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                BCI
              </h2>
              <p>
                Choose from various devices of carefully chosen partners from all over the World to fit your needs.
              </p>
              <Explore path={"/bci"} text={"Tak a look"}/>
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
                BioWare & Tools
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                BioWare
              </h2>
              <p>
                Explore which of our devices fits your needs
              </p>
              <div>
                <Explore path={"/under-construction"} text={"Take a look"}/>
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
              <Carousel data={bioWareData} />
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
                  for Clinicians
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Clinicians
              </h2>
              <p>
               Explore with us the future!
              </p>
              <Explore path={"/under-construction"} text={"Explore"}/>
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
                Software
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Updates & Software
              </h2>
              <p>
                Explore our sortiment of EEG monitoring and community crafted Software for your hardware
              </p>
              <div>
                <Explore path={"/under-construction"} text={"Get your Update"}/>
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
 */