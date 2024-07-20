import axios from "axios";
import React from "react";

import Image from "next/image";
import img from "../../../public/images/product/arm/img.png"
import brain_prev from "../../../public/images/product/brain_prev.jpg"
import vision_prev from "../../../public/images/product/vision_prev.jpg"
import leg_prev from "../../../public/images/product/leg_prev.png"
import {GiGearStickPattern} from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ReactSVG from "react-inlinesvg";
import term from "../../../public/icons/term.svg"

export const pBox = [
  {
    category: "Arm",
    helpText: "Prothesis, extensions and improvements for biological arms",
    helpTextTwo: "Get the ultimative grip!",
    img: "../../../public/images/product/arm/img.png",
    icon: <ReactSVG src={term} />,

    // software: turbo mode, updates for small info display,
  },{
    category: "Brain", // also sub catgory for specifft "part-of-the-brain-bci's"
    helpText: "Explore BCI's, utils, chips and software",
    helpTextTwo: "of our partners",
    img: "../../../public/images/product/brain_prev.jpg",
    icon: (<FaBrain size={100} color={"white"} />),
  },{
    category: "Eye",
    helpText: "Explore invasive and non invasive improvements for your eyes",
    helpTextTwo: "of our partners",
    img: "/../../../public/images/product/vision_prev.jpg", // todo
    icon: (<MdOutlineRemoveRedEye size={100} color={"white"} />),
    // software: filter for eye, infra rot new iris color
  },{
    category: "Extensions",
    helpText: "Finger -, arm - or leg attachment's,  ",
    helpTextTwo: "of our partners",
    icon: (<GiGearStickPattern size={100} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },{
    category: "Updates & Software",
    helpText: "Get updates, sell or get new software",
    helpTextTwo: "of our partners",
    icon: (<FaTools size={100} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },{
    category: "Leg",
    helpText: "",
    helpTextTwo: "of our partners",
    img: "/../../../public/images/product/leg_prev.png", // todo
    // software smart watch, apps for the display (navigator,...)
  },
]





interface MasItemT {
  product: any;
  key2: number;
}



const ProductBox: React.FC<MasItemT> = ({ product, key2 }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };
  const headingSection = () => {
    if (key2 === 2) {
      return(
        <div style={{borderBottomRightRadius: 15, borderBottomLeftRadius: 15}} className={"flex mb-10 h-[150px] bg-white items-center justify-center"}>
          <h1 style={{fontWeight: "bold"}} className={"text-blue-950 bold text-4xl"}>
            Get Inspired
          </h1>
        </div>
      )
    }
  }



  const content = () => {
    if (product.img) {
      return(
        <Image quality={95}  width={200} height={700} src={product.img} alt={"brain_prev.png"} priority={false}
               className={"w-full cursor-pointer absolute top-0 left-0 h-full object-cover opacity-20"} />
      )
    }
  }

  return (

    <div className="w-full px-4 md:w-1/2 lg:w-1/3 bg-transparent ">
      {
        headingSection()
      }
      <div
        className={"mt-6 relative pointer cursor-pointer min-h-[700px] z-10 mb-10  overflow-hidden rounded-xl bg-white px-8 py-10 " +
          "shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 "} //  + flexShrink()
        data-wow-delay=".1s">

        <div  className={"flex top-0 left-0 absolute justify-center items-center w-full h-full bg-gradient-to-bl from-gray-600 to-blue-700"}>
          {product.icon}
          {
            content()
          }
          <span className="mb-5 absolute top-6 left-4 block text-xl font-medium text-dark dark:text-white z-101 opacity-100">
          {product.category}
        </span>
        </div>

        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">

        </h2>
      </div>
    </div>

  );
};

export default ProductBox;
