
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import React from "react";
import {CItemT, CListT, SliderDataT} from "@/types/carousel";
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
          href={item?.btn?.path || "/contact"}
          className=" rounded-lg ml-5 bg-dark opacity-70 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
        >
          Explore
        </Link>
      </div>
    </div>
  )
}


export const Carousel: React.FC<CListT> = (
  {
    data,
    CustomItem
  }
) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  

  return (
    <section className="embla">
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