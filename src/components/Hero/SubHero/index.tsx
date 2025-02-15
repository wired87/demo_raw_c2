"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import React, { useCallback } from "react";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import "@/styles/embla.css";
import { CItem } from "@/components/Hero/OfferCarousel";
import { SliderDataT } from "@/types/carousel";

export interface DT {
  img?: string;
  video?: string;
}

interface SingleLeftT {
  data: SliderDataT[];
}

const SubHeroCarousel: React.FC<SingleLeftT> = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // Corrected media function
  const media = useCallback(
    (item: string) => {
      if (typeof item !== "string") return null;

      if (item.includes("youtube") || item.includes("youtu.be")) {
        const videoId = new URL(item).searchParams.get("v") || "xuZVAezwEgg";
        return (
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              className="rounded-xl shadow-lg"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }

      if (item.endsWith(".mp4")) {
        return <BackgroundVideo src={item} className="relative object-cover opacity-85" />;
      }

      return (
        <Image
          layout="fill"
          src={item}
          objectFit="cover"
          alt="carousel-image"
          className="relative object-cover opacity-75 h-[500px]"
        />
      );
    },
    [data]
  );

  return (
    <div className="relative overflow-hidden w-full backdrop-blur-1 md:w-[95%] top-5 items-end justify-end h-[750px] min-h-[600px] py-25">
      <section className="rounded-2xl w-full relative h-full">
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
