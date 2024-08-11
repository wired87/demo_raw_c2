import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {whatDoBCI} from "@/components/News/data";
import {InfiniteLogo} from "@/components/carousel/infinite/InfiniteLogo";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import InfiniteProductsBest from "@/components/carousel/infinite/InfiniteProductsBest";

export const MainContentHome = () => {
  return(
    <>
      <Hero />
      <Mission />
      <InfiniteProductsBest params={{ collection: "best" }} />
      <SingleNewsSection data={whatDoBCI} />
      <InfiniteLogo />
      <Contact heading={"Let's get in touch"} />
    </>
  )
}
//       <ScrollUp />