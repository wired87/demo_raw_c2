import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import React from "react";
import {CItemT, CListT, SliderDataT} from "@/types/carousel";
import BackgroundVideo from 'next-video/background-video';
import "@/styles/embla.css";
import Link from "next/link";

export const CItem: React.FC<CItemT> = ({item}) =>  {

  const media = () => {
    return item.img ?
      <Image
        src={item.img}
        alt="About"
        fill
        priority={false}
        className={"w-full h-[500px] md:w-[1300px] object-cover relative dark:bg-[rgba(0,0,0,.7)] zoomed-image bg-[rgba(255,255,255,.7)] transition duration ease-in-out"}
      /> : (item.video) ? (
      <BackgroundVideo src={item.video} className={"w-full h-[500px] md:w-[1300px] object-cover opacity-80"} />
      ) : <></>
  }

  const getTextColor = () => {
    if (item.design?.textColor ) {
      return item.design?.textColor
    }
    return "text-gray-200"
  }
  const textColor = getTextColor();
  return(
    <div  className={"border-1 border-gray-300 relative w-full md:w-[90%] flex justify-center items-center h-[500px] flex-col"}>
      {
        media()
      }
      <div className={"absolute flex flex-col w-[100%] px-20 h-full p gap-y-3 bg-tp top-0 justify-center items-start"}>
        <p className={`mb-2 z-1000 text-left md:max-w-[500px] text-3xl ${textColor} gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]`}>
          {item.heading}</p>
        <p className={`md:max-w-[600px] text-left ${textColor} leading-tight`}>
          {item.des}
        </p>
        <Link
          href={item.btn.path}
          className=" rounded-lg ml-5 bg-dark opacity-80 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]">
          {item.btn.text}
        </Link>
      </div>
    </div>
  )
}


export const NewsCarousel: React.FC<CListT> = (
  {
    data
  }
) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className={"embla"}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item: SliderDataT, i: number) => (
            <div className="embla__slide" key={i}>
              <CItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

