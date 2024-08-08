import { Metadata } from "next";

import {Sections} from "@/components/Sections/Sections";
import {SectionHeaderT, SectionT} from "@/types/offer";
import SubHeroCarousel from "@/components/Hero/SubHero";
import {subBciData} from "@/components/Hero/SubHero/data";


export const metadata: Metadata = {
  title:
    "BCI Techniques",
  description: "",
};
const partners = [
"Emotiv", "MindRove"
]


export const data: SectionT[] = [
  {
    media: "",
    heading: "Non Invasive Devices (nBCI) ",
    des: "Impact your daily life",
    btn: {
      path: "",
      text: "",
    }
  },{
    media: "",
    heading: "Invasive Devices (iBCI)",
    des: "Explore our Offer of BCI devices especially for people with Disease",
    btn: {
      path: "/under-construction",
      text: "",
    }
  },{
    media: "",
    heading: "For Clinicians",
    des: "Explore CLinicial EEG Masks, EEG Stations on Highest standard",
    btn: {
      path: "/under-construction",
      text: "",
    }
  },{
    media: "",
    heading: "Software",
    des: "Explore",
    btn: {
      path: "/under-construction",
      text: "",
    }
  },
];

const BCI = () => {

  const sectionHeader: SectionHeaderT = {
    heading: "For every life situation",
    subTitle: "Explore our techniques",
    des: "",
  }

  return (
    <>
      <div className={"relative pt-20 top-0 w-full flex items-center justify-center h-[700px] "}>
        <SubHeroCarousel data={subBciData} />
      </div>

      <Sections data={data} sectionHeader={sectionHeader} />
    </>
  );
}

export default BCI;
