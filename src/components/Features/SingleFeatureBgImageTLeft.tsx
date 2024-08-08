import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import Link from "next/link";
import React, {ReactNode} from "react";
interface SingleLeftT {
  item: any;
  customMedia?: ReactNode;
}

const SingleFeatureBgImageTLeft: React.FC<SingleLeftT> = ({ item, customMedia }) => {

  const media = () => {
    if (!customMedia) {
      return item.img ?
        <Image
          src={item.img}
          alt="About"
          fill
          priority={false}
          className={"w-full h-full relative dark:bg-[rgba(0,0,0,.7)] bg-[rgba(255,255,255,.7)] transition duration ease-in-out"}
        /> :
        <BackgroundVideo fill src={item.video} className={"relative w-full h-full object-cover"} />
    }
    return(
      customMedia
    )
  }

  return (
    <div  className={"w-full relative flex justify-center items-center h-[700px] flex-col "}>
      <div className="md:w-1/2 w-full absolute h-full md:rounded-full bg-primary flex items-end justify-center gap-8 lg:gap-32.5 ">
        {
          media()
        }
      </div>
      <div className={"absolute flex flex-col w-[100%] px-20 h-full p gap-y-3 top-0 justify-center items-start dark:bg-[rgba(0,0,0,.7)] bg-[rgba(0,0,0,.2)] "}>
        <p className={"mb-2 z-1000 text-left text-3xl text-gray-200 gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"}>
          {item.heading}</p>
        <p className={"max-w-90 text-3xl text-gray-200 text-right leading-slug"}>
          {item.headingTwo}
        </p>
        <Link
          href={item?.btn?.path || "/contact"}
          className=" rounded-lg ml-5 bg-dark opacity-80 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
        >
          {item?.btn?.text}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeatureBgImageTLeft;
