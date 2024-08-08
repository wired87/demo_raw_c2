import {motion} from "framer-motion";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import {ImageCarousel} from "@/components/carousel/ImageCarousel";
import {ReactNode} from "react";

export const SingleFeatureBgImageTRight = ({ item, customMedia }: {item: any, customMedia?: ReactNode }) => {
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


  return(
    <section className="relative overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-transparent py-9 px-9">
      <div className="relative px-4 md:px-8 xl:px-0">
        <div className="relative  flex items-center gap-8 lg:gap-32.5">

          {
            media()
          }

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/2 absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center"
          >
            <h4 className="font-medium uppercase relative text-black dark:text-white text-left">
              {item.comp}
            </h4>
            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero text-left">
              {item.heading}
            </h2><h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero text-right">
              {item.headingTwo}
            </h2>
            <p>
              {item.des}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


