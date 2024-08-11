"use client"

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import React, {useCallback} from "react";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import "@/styles/embla.css";
import {CItem} from "@/components/Hero/OfferCarousel";
import {SliderDataT} from "@/types/carousel";

export interface DT {
  img?: string;
  video?: string;
}

interface SingleLeftT {
  data: SliderDataT[]
}

const SubHeroCarousel: React.FC<SingleLeftT> = (
  {
    data,
  }
) => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const media = useCallback((item: string | string[]) => {
    if (typeof item === "string") {
      if (item.endsWith(".mp4")) {
        return(
          <BackgroundVideo fill src={item} className={"relative object-cover opacity-85"} />
        )
      } else {
        return(
          <Image
            fill
            src={item}
            objectFit={"cover"}
            alt={"image.lsa"}
            className={"relative object-cover opacity-85 h-[500px]"}
          />
        )
      }
    }
    return <></>
    }, [data]);

  return (
    <div className={"relative overflow-hidden top-0  items-center justify-center h-[500px] mb-10 pt-20"}>
      <section className={"rounded-2xl w-full relative h-[100%]"}>
          <section className="embla rounded-2xl">
            <div className="embla__viewport rounded-2xl" ref={emblaRef}>
              <div className="embla__container rounded-2xl">
                {data.map((item: SliderDataT, i: number) => (
                  <div className="embla__slide w-full rounded-2xl" key={i}>
                    <CItem item={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
    </div>
  );
};

export default SubHeroCarousel;
