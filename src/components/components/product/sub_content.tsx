import Image from "next/image";
import accessories_des from "../../../../public/images/product/arm/brainrobotics/accessories_des.png";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import emoInsightData from "@/components/Features/data/emotiv_insight";
import Faq from "@/components/Faq";
import {insightPros, insightPros2} from "@/components/Faq/data/emotiv/insight/insight_pros";
import React from "react";
import TwoCols from "@/components/components/product/two_col_section";
import info from "../../../../public/images/product/emotiv/insight/info.png";

interface SubContenttypes {
  name: string;
}
const mainContent: string = "Revolutionary EEG Sensor Technology"
const subContent: string = "Insight boasts EMOTIV’s proprietary polymer sensor technology. The hydrophilic material does not need gel to maintain conductivity with the skin*. Instead, the sensors draw moisture from the environment, making Insight our most versatile EEG headset without compromising conductivity.\n" +
  "\n" +
  "*Minimal fluid needed."


export const SubContent: React.FC<SubContenttypes> = ({name}) => {
  if (name.includes("Insight")) {
    return(
      <>
        <Features features={emoInsightData}/>
        <TwoCols mainContent={mainContent} subContent={subContent} img={info} />
        <Faq  data={insightPros} data2={insightPros2} faq={false}/>
      </>
    )
  } else if (name.includes("BrainRobotics Hand")) {
    return(
      <>
        <Image

          src={accessories_des}
          alt="Man"
          className="my-9 w-full left-0  h-full object-cover opacity-80"
        />

        <Contact
          heading={"Explore What You Can Do"}
        />
      </>
    )
  }
}