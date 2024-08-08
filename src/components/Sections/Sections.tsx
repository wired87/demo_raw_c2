"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import {bioWareData, sliderData} from "@/components/Hero/data";
import {Carousel} from "@/components/carousel/Carousel";
import {Explore} from "@/components/Btns/Explore";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import {SectionsCompT, SectionT} from "@/types/offer";
import React from "react";

const softwareGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pzNmRzOWFoeWptaXVieGs3emtmbzgyeDc1ejFzNXc5eTFwcjN1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfRG8cK5SPOer97aK/giphy.gif"
const brainGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0OWprMzZ2bDJyN25oaTgzNGRrOTE2eHA1dmYwcTJscG9wajI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy-downsized-large.gif"
const universalBCI: string = "https://neurosky.com/wp-content/uploads/2015/06/man-thinking-011.jpg"

/**
 * [ // todo build check for mp4
 *       "https://blackrockneurotech.com/wp-content/uploads/2023/01/home-pioneering-the-future-video.mp4",
 *       "https://blackrockneurotech.com/wp-content/uploads/2023/01/home-pioneering-the-future-video.mp4",
 *       "https://synchron.com/uploads/images/SYN003-TedTalk-4K-4.mp4",
 *     ],
 *
 *       "https://www.premierprosthetic.com/wp-content/uploads/iStock-503663810.jpg",
 *       "https://openbionics.com/wp-content/uploads/2021/09/Cath-Shilling-new-website-.jpg"
 *       // todo later https://www.steepergroup.com/prosthetics/lower-limb-prosthetics/cosmesis/prosthetic-leg-cover/
 *     ]
 */



export const Sections: React.FC<SectionsCompT> = (
  {
    data,
    sectionHeader
  }
) => {
  return (
    <div className={"bg-transparent"}>
      <Image src={""} alt={"blur_bg.png"} className={"blur-sm object-cover"}/>
      <SectionTitle
        subtitle={sectionHeader.subTitle}
        title={sectionHeader.heading}
        paragraph={sectionHeader.des}
        center
      />
      {data.map((item, i) => (
        <TextRightZ index={i} item={item}/>
      ))}
    </div>
  );
};


