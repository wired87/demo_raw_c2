import React from "react";
import {CompanyPageT} from "@/types/company";
import Image from "next/image"

export const CompanyContainer: React.FC<CompanyPageT> = (
  {
    logo,
    name,
    des
  }
) => {

  const imageValidator = () => {
    if (name === "mindrove") {
      return "https://mindrove.com/wp-content/uploads/2023/04/MindRove_logo_2023.svg";
    }
    else if ( name === "emotiv") {
      return "https://www.emotiv.com/cdn/shop/files/Emotiv-logo-white.png?v=1695617152";
    }
    else if (name === "openbci") {
      return "https://images.squarespace-cdn.com/content/v1/546b8d72e4b09703ef855584/1560618774597-GGGNWOTXNNAZHYHYIVQ9/openbci-logo.png";
    }
    return ""
  }

  function capitalizeFirstLetter() {
    if (!name) return '';
    return name.toUpperCase()
  }
  return(
    <div
      className={"border-b-1 border-gray-300 relative  w-full md:w-[90%] flex justify-start items-end h-[300px] mb-10 flex-row"}>
      <Image
        src={imageValidator()}
        alt="About"
        height={200}
        width={200}
        priority={false}
        className={" object-contain h-[200px] w-[200px] rounded-full relative dark:bg-[rgba(0,0,0,.7)]" +
          " zoomed-image bg-[rgba(255,255,255,.7)] transition duration ease-in-out"}
      />
      <div className={"relative flex flex-col px-20 h-[200px] p gap-y-3 bg-tp top-0 justify-center items-end"}>
        <p
          className={`mb-2 z-1000 text-left md:max-w-[500px] dark:text-white text-black text-3xl gap-y-4 font-bold leading-tight sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]`}>
          {capitalizeFirstLetter()}</p>
        <p className={`max-w-90 text-left dark:text-white text-black leading-tight`}>
          {des}
        </p>
      </div>
    </div>

  );
}