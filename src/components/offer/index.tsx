"use client";

import SectionTitle from "@/components/Common/SectionTitle";

import Image from "next/image"


import {TextRightZ} from "@/components/offer/sections/TextRightZ";


export const SingleOffer = () => {
  return(
    <div className="mt-16">
      <Image
        src="/images/hero/mr.png"
        alt="hero"
        className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
        width={845}
        height={316}
      />
    </div>
  )
}

const data = [
  {
    media: [ // todo build check for mp4
      "https://blackrockneurotech.com/wp-content/uploads/2023/01/home-pioneering-the-future-video.mp4",
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
      "https://www.premierprosthetic.com/wp-content/uploads/iStock-503663810.jpg",
      "https://openbionics.com/wp-content/uploads/2021/09/Cath-Shilling-new-website-.jpg"
      // todo later https://www.steepergroup.com/prosthetics/lower-limb-prosthetics/cosmesis/prosthetic-leg-cover/
    ],
    heading: "Bio Ware",
    des: "",
    btn: {
      text: "",
      path: "/"
    }
  },{
    media: [""],
    heading: "Clinicians",
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

const softwareGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pzNmRzOWFoeWptaXVieGs3emtmbzgyeDc1ejFzNXc5eTFwcjN1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1BfRG8cK5SPOer97aK/giphy.gif"
const brainGif: string = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh0OWprMzZ2bDJyN25oaTgzNGRrOTE2eHA1dmYwcTJscG9wajI5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy-downsized-large.gif"




const Sortiment = () => {
  return (
    <div className={"bg-transparent"}>
      <Image src={""} alt={"blur_bg.png"} className={"blur-sm object-cover"}/>
      <SectionTitle
        subtitle={"Subtitle"}
        title={"Our Mission"}
        paragraph={"paragraph"}
        center
      />
      {data.map((item, index) => (
        <div className={"w-full h-[900px]"}>
          <TextRightZ item={item} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Sortiment;
