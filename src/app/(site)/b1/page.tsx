import {SliderDataT} from "@/types/carousel";
import SubHeroCarousel from "@/components/Hero/SubHero";

import Contact from "@/components/Contact";
import {C1SectionHome} from "@/components/c1/c1sectionHome";
import {Setup} from "@/components/c1/setup";
import Mission from "@/components/Mission";
import {CellSum} from "@/components/FrequencyBandCheck";
import TrippleTab from "@/components/TrippleInfo/TrippleTab";
import Pros from "@/components/Faq";
import {insightPros, insightPros2} from "@/components/Faq/data/emotiv/insight/insight_pros";
import FAQ from "@/components/Faq/FAQ";
import {botFaqData} from "@/components/Faq/FAQ/faqData";
import {MobileSection} from "@/components/MobileApp/Section";
import {SectionTitleT} from "@/types/title";

const data = [
  {
    "media": "/images/mission/check.jpg",
    "heading": "AI-Driven Cell Development",
    "des": "Bringing bioengineering and AI together to create self-organizing, adaptive synthetic cells that redefine innovation in medicine, industry, and beyond."
  },
  {
    "media": "/images/mission/smartHome.png",
    "heading": "Support Your Work",
    "des": "Our platform simplifies complex biological design, making advanced cell engineering accessible to researchers, developers, and industries looking for next-generation solutions."
  },
  {
    "media": "https://storage.googleapis.com/images_ceegrid/2_f.png",
    "heading": "Save Time & Money",
    "des": "By automating and optimizing cellular functions at the DNA level, our technology reduces costs, streamlines processes, and accelerates breakthroughs in bioengineering."
  }
]

const homeSubMissionHeadingData: SectionTitleT = {
  subTitle: "",
  title: "",
  des:  "",
}
const dataS: SliderDataT[] = [
  {
    img: "/images/testing.avif",
    heading: "Sign up for early testing!™",
    des: "Fill out the contact form and to request exclusive early access",
    btn: {
      path: "/#contact",
      text: "Contact",
    },
    design: {textColor: "text-black"}
  },
];
const B1 = () => {

  return (
    <div className={"size-full pt-10"}>
      <SubHeroCarousel data={dataS} />
      <C1SectionHome />
      <Setup />
      <Mission data={data} subHeading={homeSubMissionHeadingData}/>
      <CellSum />
      <TrippleTab  titleOne={"Accident & Issues"} titleThree={"Cognitive Enhancement and Focus"} titleTwo={"Digital Health"}/>
      <Pros  data={insightPros} data2={insightPros2} faq={false}/>
      <FAQ  data={botFaqData}/>
      <MobileSection />
      <Contact />
    </div>
  );
}

export default B1;