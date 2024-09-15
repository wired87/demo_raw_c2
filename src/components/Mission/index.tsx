"use client";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import React from "react";
import {SectionT} from "@/types/offer";

const softwareGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pzNmRzOWFoeWptaXVieGs3emtmbzgyeDc1ejFzNXc5eTFwcjN1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfRG8cK5SPOer97aK/giphy.gif"
const brainGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0OWprMzZ2bDJyN25oaTgzNGRrOTE2eHA1dmYwcTJscG9wajI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy-downsized-large.gif"
const universalBCI: string = "https://neurosky.com/wp-content/uploads/2015/06/man-thinking-011.jpg"


const Mission:React.FC<any> = ({data, subHeading, bgImg, path}) => {
  const getBgImg = () => {
    if (bgImg) {
      return(
        <Image
          fill className={"object-cover top-0 left-0 absolute min-w-[130vw] min-h-[160vh]"}
          src={bgImg}
          alt={bgImg}
        />
      )
    }
  }

  return (
    <div className={"bg-transparent mb-15 relative"}>

      <SectionTitle
        subTitle={subHeading.subTitle}
        title={subHeading.title}
        des={subHeading.des}
        center
      />

      {data.map((item:SectionT,i:number) => (
        <TextRightZ index={i} item={item}/>
      ))}

    </div>
  );
};

export default Mission;
