"use client"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import SingleFeatureBgImageTLeft from "@/components/Features/SingleFeatureBgImageTLeft";

const data = [
  {
    comp: "Blackrock-Neuro",
    img: "https://blackrockneurotech.com/wp-content/themes/edesign/webroot/images/page-patients-clinicians/horizontal-scroll-section-bgr-updated.jpg",
    heading: "Technology, that ",
    headingTwo: "brings perspectives...",
    des: "",
    btn: {
      text:"Explore",
      href: "/blackrock-neuro",
    }
  },{
    comp: "Emotiv",
    video: "https://www.emotiv.com/cdn/shop/videos/c/vp/56f3d6e99da546af85770a8d2162751c/56f3d6e99da546af85770a8d2162751c.HD-1080p-2.5Mbps-18758439.mp4",
    heading: "...that impacts",
    headingTwo: "our life ...",
    des: "",
    btn: {
      text:"Explore",
      href: "/open-bci",
    }
  },{
    comp: "Vision",
    img: "",
    heading: "...that opens",
    headingTwo: "opportunities",
    des: "",
    btn: {
      text:"Shop Now!",
      href: "/vision",
    }
  },
];




export const MotivationHome = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return(
    <section className={"embla"}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item: any, i: number) => (
            <div key={i} className="embla__slide">
              <SingleFeatureBgImageTLeft item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

