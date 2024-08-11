import {Video} from "@/components/Video";
import {GripSection} from "@/components/AbilityHand/GripSection";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import {abilitySectionData} from "@/components/AbilityHand/data";
import SubHeroCarousel from "@/components/Hero/SubHero";
import {SliderDataT} from "@/types/carousel";
import BoxLoop from "@/components/Box/BoxLoop";
import {abilityBoxData, abilityBoxData2} from "@/components/Box/data";



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
      {abilitySectionData.map((item, i) => (
        <TextRightZ item={item} index={i}/>
      ))}
      <BoxLoop  data={abilityBoxData}/>
      <Video videoId={"ulCU5QoIdyo"} />
      <GripSection />
      <div className={"w-full  py-10 items-center justify-center flex "}>
        <div className="grid items-center gap-6 justify-center  w-full grid-cols-1 md:grid-cols-2 ">
          {abilityBoxData2.map((item, i) => (
            <div key={i} className="w-full gap-y-3  items-center justify-center flex flex-col" >
                <p className="text-center text-xl  uppercase text-dark dark:text-white font-bold tracking-[0.3em]">
                  {item.title}
                </p>
                <p className="pl-10  uppercase text-xs text-primary text-center font-bold tracking-[0.3em]">
                  {item.des}
                </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AbilityHandPage;