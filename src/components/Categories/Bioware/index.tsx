import SubHeroCarousel from "@/components/Hero/SubHero";
import ProductSection from "@/components/product/ProductSection";
import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {whatDoBCI} from "@/components/News/data";
import {InfiniteLogo} from "@/components/carousel/infinite/InfiniteLogo";
import Contact from "@/components/Contact";

import {SliderDataT} from "@/types/carousel";
import {bciPartners, bioWarePartners} from "@/components/carousel/data";

export const data: SliderDataT[] = [
  {
    comp: "Emotiv",
    video: "https://www.emotiv.com/cdn/shop/videos/c/vp/ffd2aeb4d13f4d358442ebc47b054517/ffd2aeb4d13f4d358442ebc47b054517.SD-480p-0.9Mbps-20029469.mp4",
    heading: "Quality that ",
    des: "Get in touch with high quality Consumer grade BCIs by Emotiv",
    btn: {
      path: "/under-construction",
      text: "Shop now!",
    }
  },{
    comp: "openBCI",
    img: "https://galea.co/og.jpeg",
    heading: "Explore what you can do with the openBCI's flagship",
    des: "Check out the Flagship of the openBCI Device family",
    btn: {
      path: "/under-construction",
      text: "Take a look",
    }
  },
];
export const MainBioware = () => {
  return(
    <>
      <SubHeroCarousel data={data} />
      <div className={"px-6 mb-10 mt-7"}>
        <ProductSection searchParams={{sort: ""}} params={{ collection: "bci" }} />
      </div>
      <SingleNewsSection data={whatDoBCI} />
      <InfiniteLogo data={bioWarePartners}  />
      <Contact />
    </>
  )
}