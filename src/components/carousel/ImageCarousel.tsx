"use client";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import React from "react";
import {CItemT, ImageListT} from "@/types/carousel";
import BackgroundVideo from 'next-video/background-video';
import "@/styles/embla.css";
import Link from "next/link";

const  CItem: React.FC<CItemT> = ({item}) =>  {

  const media = () => {
    return item.img ?
      <Image
        fill
        src={item.img}
        alt={"image.lsa"}
        className={"absolute top-0 left-0 object-cover opacity-50"}
      /> :
      <BackgroundVideo src={item.video} className={"relative object-cover opacity-50"} />
  }

  return(
    <div  className={"w-[600px] flex justify-center items-center h-[700px] flex-col"}>
      {
        media()
      }
      <div className={"absolute flex w-[500px] h-[700px] flex-col gap-y-3 bg-tp top-0 px-2 justify-center items-center"}>
        <p className={"text-white font-bold"}>{item.heading}</p>
        <p>{item.des}</p>
        <Link
          href={item.btn.path || "/contact"}
          className=" rounded-lg ml-5 bg-dark opacity-70 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
        >
          Explore
        </Link>
      </div>
    </div>
  )
}


export const ImageCarousel: React.FC<ImageListT> = (
  {
    media
  }
) => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const mediaItem = (item: string, i:number) => {
    if (item.endsWith(".mp4")) {
      return(
        <BackgroundVideo  key={i} src={item} className={"relative size-full object-cover opacity-50"} />
      )
    }
    console.log("IMAGE:",item )
    return(
      <Image
        fill
        src={item}
        alt={"image.png"}
        className="absolute top-0 left-0 object-cover opacity-100 "
      />
    )
  }

  return (
    <section className="embla size-full">
      <div className="embla__viewport size-full" ref={emblaRef}>
        <div className="embla__container w-full h-full">
          {media.map((item: string, i: number) => (
            <div className="size-full embla__slide relative" key={i}>
              {mediaItem(item, i)}
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}