import Hero from "@/components/Hero";
import Mission from "@/components/Mission";

import {SectionTitleT} from "@/types/title";
import {MobileSection} from "@/components/MobileApp/Section";
import {FrequencyBandCheck} from "@/components/FrequencyBandCheck";
import Contact from "../Contact";
import Pros from "@/components/Faq";
import {insightPros, insightPros2} from "@/components/Faq/data/emotiv/insight/insight_pros";
import {C1SectionHome} from "@/components/c1/c1sectionHome";
import {Setup} from "@/components/c1/setup";
import FAQ from "@/components/Faq/FAQ";
import {botFaqData} from "@/components/Faq/FAQ/faqData";

const data = [
  {
    media: "https://media.assettype.com/freepressjournal/2022-04/acb39c78-95f0-4ded-82a7-21e5e310ae43/W_end_LS_fitness_april_24.jpg?width=1200",
    heading: "Comprehensive Health and Brain Monitoring",
    des: "Integrate advanced brain and body monitoring into your daily routine with the C-1. " +
      "Featuring 12 EEG and 2 ECG channels, this compact device delivers detailed insights into your mental state, " +
      "neuronal activity, heart rate, and more, helping you stay in tune with your health and well-being.",
  },
  {
    media: "/images/mission/smartHome.png",
    heading: "Smart Home Integration",
    des: "Enhance your living environment with the C-1’s smart home connectivity. " +
      "By monitoring your mental and physical states, the C-1 can automate actions in your home, " +
      "such as dimming lights when you’re ready to sleep or adjusting the temperature for optimal comfort.",
  },
  {
    media: "/images/mission/check.jpg",
    heading: "Personalized Progress Tracking",
    des: "Track your journey towards better mental and physical health with the C-1’s personalized progress features. " +
      "The device not only provides real-time data but also helps you analyze trends over time, " +
      "empowering you to understand your progress and make informed decisions about your fitness and wellness goals.",
  },
];

const homeSubMissionHeadingData: SectionTitleT = {
  subTitle: "",
  title: "",
  des:  "",
}
export const MainContentHome = () => {
  return(
    <>
      <Hero />

      {/*Placeholder graphic product presentation*/}
      <C1SectionHome />
      <Setup />
      <Mission data={data} subHeading={homeSubMissionHeadingData}/>
      <FrequencyBandCheck />
      <Pros  data={insightPros} data2={insightPros2} faq={false}/>
      <FAQ  data={botFaqData}/>
      <MobileSection />
      <Contact />
    </>
  )
}

// <ScrollUp />
/**      <BoxLoop data={mentalBoxData} />

 * <Mission data={data} subHeading={homeSubMissionHeadingData}/>
 *       <InfiniteProductsBest params={{params: {collection: "best"}}} sH={sHBestSeller} />
 *       <SingleNewsSection data={whatDoBCI} />
 *       <InfiniteLogo />
 *       <Contact />
 */
/*
const data = [
  {
    media: "/images/mission/man_think.jpg",
    heading: "BCI's",
    des: "Choose from various techniques of carefully chosen partners from all over the World to fit your needs.",
    btn: {
      text: "Explore the possibilities",
      path: "/category/bci"
    }
  },{
    media:
      "https://openbionics.com/wp-content/uploads/2021/09/Cath-Shilling-new-website-.jpg",
    // todo later https://www.steepergroup.com/prosthetics/lower-limb-prosthetics/cosmesis/prosthetic-leg-cover/

    heading: "Bio Ware",
    des: "Explore our bioware solutions for every situation.",
    btn: {
      text: "",
      path: "/category/bioware"
    }
  },{
    media: [
      "https://raw.githubusercontent.com/scott-huberty/wip_pipeline-figures/main/dashboard.png"
    ],
    heading: "Software",
    des: "Explore our smart solutions for EEG signal monitorings",
    btn: {
      text: "Get it!",
      path: "/category/software"
    }
  },
]
 */