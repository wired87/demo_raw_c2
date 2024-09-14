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
import TrippleTab from "@/components/TrippleInfo/TrippleTab";

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

// const turnableChipGif: string = "https://cdn.pixabay.com/animation/2022/09/03/07/35/07-35-06-414_512.gif"

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
      <TrippleTab  titleOne={"Accident & Issues"} titleThree={"Cognitive Enhancement and Focus"} titleTwo={"Digital Health"}/>
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
 *
 *       digital health
 *       remote monitoring
 *       accident prevention
 *
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


{
    media: "/images/mission/smartHome.png",
    heading: "Smart Home Integration",
    des: "Enhance your living environment with the C-1’s smart home connectivity. " +
      "By monitoring your mental and physical states, the C-1 can automate actions in your home, " +
      "such as dimming lights when you’re ready to sleep or adjusting the temperature for optimal comfort.",
  },
 */