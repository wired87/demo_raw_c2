
import {Video} from "@/components/Video";
import CTA from "@/components/Cta";
import {GripSection} from "@/components/AbilityHand/GripSection";
import {TextRightZ} from "@/components/offer/sections/TextRightZ";
import {abilitySectionData} from "@/components/AbilityHand/data";
import SubHero from "@/components/Hero/SubHero";

const videoId: string = "ulCU5QoIdyo";
const AbilityHandPage = () => {

  return (
    <>
      <SubHero  data={}/>
      {abilitySectionData.map((item, i) => (
        <TextRightZ item={item} index={i}/>
      ))}

      <Video videoId={videoId} />
      <GripSection />
      <CTA />
    </>
  );
}
export default AbilityHandPage;