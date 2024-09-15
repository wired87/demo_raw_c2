import {Video} from "@/components/Video";
import {SliderDataT} from "@/types/carousel";
import SubHeroCarousel from "@/components/Hero/SubHero";

import Contact from "@/components/Contact";
import {C1SectionHome} from "@/components/c1/c1sectionHome";
import {Setup} from "@/components/c1/setup";
import Mission from "@/components/Mission";
import {FrequencyBandCheck} from "@/components/FrequencyBandCheck";
import TrippleTab from "@/components/TrippleInfo/TrippleTab";
import Pros from "@/components/Faq";
import {insightPros, insightPros2} from "@/components/Faq/data/emotiv/insight/insight_pros";
import FAQ from "@/components/Faq/FAQ";
import {botFaqData} from "@/components/Faq/FAQ/faqData";
import {MobileSection} from "@/components/MobileApp/Section";
import {SectionTitleT} from "@/types/title";

const data = [
  {
    media: "/images/mission/check.jpg",
    heading: "Comprehensive Health and Brain Monitoring",
    des: "The wide spectrum of sensors and electrodes " +
      "with maximized comfort provide detailed insights about your mental state, neuronal activity, heart rate, muscle movement and more," +
      "helping you stay in tune with your sports, health and well-being."
  },
  {
    media: "/images/mission/smartHome.png",
    heading: "Real time communication",
    des: "Enhance your living environment with the C1’s third-party-app connectivity." +
      "By monitoring your mental and physical states, the C1 is not just a game changer in digital health. " +
      "It can also interact with your fitness, telehealth or smart home Apps, to make your life easier",
  },
  {
    media: "https://storage.googleapis.com/images_ceegrid/2_f.png",
    heading: "Stick together electrodes",
    des: "Extend the unobtrusive C1 with our adjustable electrode extension for more complex tasks. " +
      "Just stick it into the C1, turn it on, align it to the brain area are you want to focus on and you are ready to go!" +
      " This makes the C1 a real game changer."},
];

const homeSubMissionHeadingData: SectionTitleT = {
  subTitle: "",
  title: "",
  des:  "",
}
const dataS: SliderDataT[] = [
  {
    img: "/images/img_1.png",
    heading: "Explore comfort with the C1™",
    des: "Impact your daily life",
    btn: {
      path: "/c1/#c1",
      text: "Explore Details",
    },
    design: {textColor: "text-black"}
  },
];
const AbilityHandPage = () => {

  return (
    <div className={"size-full pt-10"}>
      <SubHeroCarousel data={dataS} />
      <C1SectionHome />
      <Setup />
      <Mission data={data} subHeading={homeSubMissionHeadingData}/>
      <FrequencyBandCheck />
      <TrippleTab  titleOne={"Accident & Issues"} titleThree={"Cognitive Enhancement and Focus"} titleTwo={"Digital Health"}/>
      <Pros  data={insightPros} data2={insightPros2} faq={false}/>
      <FAQ  data={botFaqData}/>
      <MobileSection />
      <Contact />
    </div>
  );
}

export default AbilityHandPage;