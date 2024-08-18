"use client";

import React, {ReactNode} from "react";
import { motion } from "framer-motion";
import {FaCheck} from "react-icons/fa";
import {ctaDat} from "@/components/Categories/Exo-Skeletons/German-Bionics/data";

export interface CTAT {
  heading?: string;
  des?: string | string[];
  image?: ReactNode;
  btnText?: string;
  href?: string;
  trustImg?: string;
}



export const getPoints = (points: string[] | undefined) => {
  if (points?.length) {
    return(
      <ul className={"grid grid-cols-1 md:grid-cols-2 gap-4 list-none text-left p-0 mt-5"}>
        {points.map((item:string, i:number) => (
          <div className={"flex-row flex gap-4"}>
            <FaCheck size={18} color={"green"}/>
            <li key={i} className={"dark:text-white text-black"}>
              {item}
            </li>
          </div>
        ))}
      </ul>
    )
  }
}
// todo header less width in sm otherwise overlapp
const validateProps = (props: CTAT
) => {
  const {heading,
    des,
    image,
    btnText,
    href,
    trustImg} = props
  if (!heading || !des || !image || !btnText) {
    return {
      heading: "Wie können wir helfen?",
      des: "Vereinbaren Sie ein unverbindliches Erstgespräch mit einem unserer Experten.",
      btnText: "Projekt besprechen",
      href: "/contact"
    }
  } else {
    let desComp: ReactNode;
    if (Array.isArray(des)) {
      desComp = getPoints(des);
    } else {
      desComp = <p className={"text-black dark:text-white text-lefts"}>{des}</p>
    }
    return {
      heading: heading,
      des: desComp,

      btnText: btnText,
      href: href
    }
  }
}

const CTA: React.FC<CTAT> = (

    props

) => {
    const a= {
      heading: "Know somebody with interest?",
      des: "We are shipping world wide with qualified made in Germany.",
      image: "dhlBote.png",
      btnText: "Contact us!",
      href: "/contact",
      trustImg: "hellooo.123"

    }


  const r: any = validateProps(ctaDat)
  console.log("props", props)
  return (
    <section className="overflow-hidden px-4 py-5 md:px-8 lg:py-10 2xl:px-0 w-full">
      <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF]
        px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent
        dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0 sm:py-10">
        <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
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
            className="animate_left md:w-[70%] lg:w-1/2"
          >
            <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
              {r.heading}
            </h2>
            {r.des}
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
            className="animate_right py-10 lg:w-[45%]"
          >

            <div className="flex flex-row items-center
              justify-end xl:justify-between">
              <div className={"px-5 py-7 my-10 md:h-[150px]  xl:block"}>

              </div>
              <a
                href={r.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-black px-6
                  py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                {
                  r.btnText
                }

              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
