"use client";
import React, {useCallback} from "react";
import {CatMain} from "@/components/Categories/CategoryMain";
import {validateHandleOne} from "@/app/(site)/category/[...slug]/validateOne";

interface CategoryMainT {
  handle: string[];
}

export const CategoryMain: React.FC<CategoryMainT> = ({handle}) => {
  console.log("handle11", handle);

  const Content = useCallback(() => {
    const stuff = validateHandleOne(handle);
    console.log("handle22", handle);
    console.log("validated Stuff", stuff);
    if (stuff) {
      return(
        <CatMain
          subHeroData={stuff.subHeroData}
          prodSecD={stuff.prodSecD}
          newsSecD={stuff.newsSecD}
          catPartnerSecD={stuff.catPartnerSecD}
          content={stuff.content}
        />
      )
    }
    return <p className={"text-white"}>HelloWorld</p>
  }, [handle]);


  return Content()


}