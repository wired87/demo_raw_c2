import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";



export const pBox = [
  {
    category: "Legs",
    helpText: "Explore BCI's, utils, chips and software",
    helpTextTwo: "Get inspired",
    img: "", // todo
    icon: ""
    // software: turbo mode, updates for small info display,
  },{
    category: "Brain", // also sub catgory for specifft "part-of-the-brain-bci's"
    helpText: "Explore BCI's, utils, chips and software",
    helpTextTwo: "of our partners",
    img: "", // todo
    icon: ""
  },{
    category: "Eye",
    helpText: "Explore invasive and non invasive improvements for your eyes",
    helpTextTwo: "of our partners",
    img: "", // todo
    icon: ""
    // software: filter for eye, infra rot new iris color
  },{
    category: "Extensions",
    helpText: "Finger -, arm - or leg attachment's,  ",
    helpTextTwo: "of our partners",
    img: "", // todo
    icon: ""
  },{
    category: "Arm",
    helpText: "Prothesis, improvements for natural or mutant arms.",
    helpTextTwo: "of our partners",
    img: "", // todo
    icon: ""
    // software smart watch, apps for the display (navigator,...)
  },{
    category: "Updates & Software",
    helpText: "Get updates, sell or get new software",
    helpTextTwo: "of our partners",
    img: "", // todo
    icon: ""
  },
]









const ProductBox = ({ product, key2 }: { product: Price, key2: number }) => {
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

  const flexShrink = () => {
    if (key2 === 5) {
      return "flex-shrink"
    }
  }

  return (

    <div className="w-full px-4 md:w-1/2 lg:w-1/3 bg-transparent">
      {
        headingSection()
      }
      <div
        className={"relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 " +
          "shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 "} //  + flexShrink()
        data-wow-delay=".1s"
      >
        {product.nickname === "Premium" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("en-US", {
              currency: "USD",
            })}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>
        <div className="w-full">
          <button
            onClick={handleSubscription}
            className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductBox;
