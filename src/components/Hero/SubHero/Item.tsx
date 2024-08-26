import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackgroundVideo from "next-video/background-video";
import {CItemT} from "@/types/carousel";


export const Item: React.FC<CItemT> = ({item}) =>  {

  const media = () => {
    return item.img ?
      <Image
        src={item.img}
        alt="About"
        fill
        priority={false}
        className={"w-full h-full relative dark:bg-[rgba(0,0,0,.7)] bg-[rgba(255,255,255,.7)] transition duration ease-in-out"}
      /> : (item.video) ? (
        <BackgroundVideo src={item.video} className={"w-full h-full object-cover opacity-80"} />
      ) : <></>
  }

  return(
    <div  className={"md:w-[1300px] border-1 border-gray-300 relative w-[90%] flex justify-center items-center h-[500px] flex-col"}>
      {
        media()
      }
      <div className={"absolute flex flex-col w-[100%] px-20 h-full p gap-y-3 bg-tp top-0 justify-center items-start"}>
        <p className={"mb-2 z-1000 text-center text-3xl text-gray-200 gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"}>
          {item.heading}</p>
        <p className={"max-w-90 text-left text-gray-200 leading-tight"}>
          {item.des}
        </p>
        <Link
          href={item.btn.path}
          className=" rounded-lg ml-5 bg-dark opacity-80 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
        >
          {item.btn.text}
        </Link>
      </div>
    </div>
  )
}