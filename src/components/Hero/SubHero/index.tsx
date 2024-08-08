"use client"

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import React from "react";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import "@/styles/embla.css";

interface SingleLeftT {
  data: any;
}

const SubHeroCarousel: React.FC<SingleLeftT> = (
  {
    data,
  }
) => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const media = (item: any) => {

    return item.img ?
      <Image
        src={item.img}
        alt="About"
        fill
        priority={false}
        className={"w-full  relative dark:bg-[rgba(0,0,0,.7)] bg-[rgba(255,255,255,.7)] h-[700px] transition duration ease-in-out rounded-2xl"}
      /> :
      <BackgroundVideo fill src={item.video} className={"relative w-full h-[700px] object-contain rounded-2xl opacity-90"} />
  }

  return (
    <section className={"rounded-2xl relative md:w-[90%] h-[100%]"}>
      <section className="embla rounded-2xl">
        <div className="embla__viewport rounded-2xl" ref={emblaRef}>
          <div className="embla__container rounded-2xl">
            {data.map((item: string, i: number) => (
              <div className="embla__slide size-full rounded-2xl" key={i}>
                {
                  media(item)
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SubHeroCarousel;
//<Item  item={item}/>