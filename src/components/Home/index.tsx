import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {whatDoBCI} from "@/components/News/data";
import {InfiniteLogo} from "@/components/carousel/infinite/InfiniteLogo";
import Contact from "@/components/Contact";
import InfiniteProductsBest from "@/components/carousel/infinite/InfiniteProductsBest";
import {sHBestSeller} from "@/components/Common/data";
import {SectionTitleT} from "@/types/title";
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
const homeSubMissionHeadingData: SectionTitleT = {
  subTitle: "Search by Category",
  title: "Explore our sortiment",
  des:  "",
}
export const MainContentHome = () => {
  return(
    <>
      <Hero />
      <Mission data={data} subHeading={homeSubMissionHeadingData}/>
      <InfiniteProductsBest params={{params: {collection: "best"}}} sH={sHBestSeller} />
      <SingleNewsSection data={whatDoBCI} />
      <InfiniteLogo />
      <Contact />
    </>
  )
}
// <ScrollUp />