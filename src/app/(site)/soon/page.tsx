import { Metadata } from "next";

import BackgroundVideo from "next-video/background-video";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Construction Placeholder Page",
  description: "",
};
const url = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2FkbzJjcHRkbmNicHA0eHlkY3B1YWJzY3FzMm5rdWhlaXRjejV5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6NVGY07QE3dNfvC4tg/giphy.gif"
const Soon   = () => {
  return (
    <div className={"flex-1 w-full h-full flex justify-center items-center min-h-[900px]"}>
      <BackgroundVideo src={url} className={"relative  transition-all duration-300 object-cover opacity-85"} />
      <Image  alt={"image.kkk"} src={url} className={"object-cover transition-all duration-300 absolute w-full h-full opacity-5"} fill />
      <p className="text-left text-6xl  uppercase text-dark dark:text-white font-bold tracking-[0.3em]">
        Comming soon...
      </p>
    </div>
  );
};

export default Soon;
