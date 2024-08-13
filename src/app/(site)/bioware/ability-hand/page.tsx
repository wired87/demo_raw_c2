import {Video} from "@/components/Video";
import {GripSection} from "@/components/AbilityHand/GripSection";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import {abilitySectionData} from "@/components/AbilityHand/data";
import SubHeroCarousel from "@/components/Hero/SubHero";
import {SliderDataT} from "@/types/carousel";
import BoxLoop from "@/components/Box/BoxLoop";
import {abilityBoxData, abilityBoxData2} from "@/components/Box/data";
import React from "react";
import Contact from "@/components/Contact";
import SectionTitle from "../../../../components/Common/SectionTitle";
import {MovieBoxLoop} from "@/components/Box/MovieLikeBox/MovieBoxLoop";
import {sHAbilityMovie} from "@/components/Common/data";



export const data: SliderDataT[] = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/a28cd56f-4017-4e98-928f-242c00c23e9a/Product+hero.png?format=2500w",
    heading: "Meet the Ability Hand™",
    des: "Impact your daily life",
    btn: {
      path: "/bioware/ability-hand/#infoSection",
      text: "",
    },
    design: {textColor: "text-black"}
  },{
    img: "/images/product/arm/img_1.png",
    heading: "",
    des: "",
    btn: {
      path: "",
      text: "Show more!",
    }

  },{
    img: "",
    heading: "Interested",
    des: "Check out how the Ability Hand™ can fir your needs",
    btn: {
      path: "/bioware/ability-hand/#gripSection",
      text: "",
    },
    design: {textColor: "text-black"}
  },
];

const AbilityHandPage = () => {

  return (
    <div className={"size-full pt-10"}>
      <SubHeroCarousel data={data} />
      <SectionTitle
        subTitle={"Finally"}
        title={"A ability hand that can actually feel!"}
        des={"The world’s fastest and first touch sensing bionic hand."}
        center
      />
      {abilitySectionData.map((item, i) => (
        <TextRightZ item={item} index={i}/>
      ))}
      <MovieBoxLoop data={abilityBoxData2} titleD={sHAbilityMovie}/>
      <Video videoId={"ulCU5QoIdyo"} />
      <BoxLoop  data={abilityBoxData} />
      <GripSection />

      <Contact />
    </div>
  );
}

export default AbilityHandPage;