
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
        alt={"image.nsa"}
        className={"absolute top-0 left-0 object-cover opacity-50"}
      /> :
      <BackgroundVideo fill src={item.video} className={"relative object-contain opacity-90"} />
  }

  return(
    <div  className={"md:w-[1300px] w-[90%] flex justify-center items-center h-[400px] flex-col"}>
      {
        media()
      }
      <div className={"absolute flex w-full h-full flex-col gap-y-3 bg-tp top-0 px-2 justify-center items-center"}>
        <p className={"text-white font-bold"}>{item.heading}</p>
        <p>{item.des}</p>
        <Link
          href={item.path || "/contact"}
          className=" rounded-lg ml-5 bg-dark opacity-70 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
        >
          Explore
        </Link>
      </div>
    </div>
  )
}


export const OfferCarousel: React.FC<CListT> = (
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

