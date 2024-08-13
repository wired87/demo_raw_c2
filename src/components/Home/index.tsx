import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {whatDoBCI} from "@/components/News/data";
import {InfiniteLogo} from "@/components/carousel/infinite/InfiniteLogo";
import Contact from "@/components/Contact";
import InfiniteProductsBest from "@/components/carousel/infinite/InfiniteProductsBest";
import {sHBestSeller} from "@/components/Common/data";

export const MainContentHome = () => {
  return(
    <>
      <Hero />
      <Mission />
      <InfiniteProductsBest params={{params: {collection: "best"}}} sh={sHBestSeller} />
      <SingleNewsSection data={whatDoBCI} />
      <InfiniteLogo />
      <Contact />
    </>
  )
}
// <ScrollUp />