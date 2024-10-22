import {Video} from "@/components/Video";
import {SliderDataT} from "@/types/carousel";
import SubHeroCarousel from "@/components/Hero/SubHero";
import SectionTitle from "@/components/Common/SectionTitle";
import {abilitySectionData} from "@/components/Company/Psyonics/AbilityHand/data";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import {abilityBoxData} from "@/components/Box/data";
import BoxLoop from "@/components/Box/BoxLoop";
import {GripSection} from "@/components/Company/Psyonics/AbilityHand/GripSection";
import Contact from "@/components/Contact";


const data: SliderDataT[] = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/a28cd56f-4017-4e98-928f-242c00c23e9a/Product+hero.png?format=2500w",
    heading: "Meet the Ability Hand™",
    des: "Impact your daily life",
    btn: {
      path: "/bioware/ability-hand/#infoSection",
      text: "Explore Details",
    },
    design: {textColor: "text-black"}
  },{
    img: "https://images.squarespace-cdn.com/content/v1/61229f1b98e6c829c570bace/5f0d2972-b8bb-4556-8abe-670862b687dd/touch+bg2.png",
    heading: "Feel it!",
    des: "Integrated Touch Sensors in the fingertip",
    btn: {
      path: "/bioware/ability-hand#touchSection",
      text: "Learn more",
    }
  },{
    img: "",
    heading: "Need a grip?",
    des: "Check out how the Ability Hand™ can fir your needs",
    btn: {
      path: "/contact/ability-hand",
      text: "Contact us",
    },
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

      <Video videoId={"ulCU5QoIdyo"} />
      <BoxLoop  data={abilityBoxData} />
      <GripSection />

      <Contact />
    </div>
  );
}

export default AbilityHandPage;