import {CatMain} from "@/components/Categories/CategoryMain";
import {subHeroData} from "@/components/Categories/Bci/data";
import {CatMainT} from "@/types/cat";
import {validateHandleOne} from "@/app/(site)/category/[...slug]/validateOne";
import ProductPage from "@/components/product";
import {CompanyMain} from "@/components/Company";
import InfiniteProductsBest from "@/components/carousel/infinite/InfiniteProductsBest";
import {sHProdRelevant} from "@/components/Common/data";
import Contact from "@/components/Contact";
import React from "react";

/**
 * category
 * company
 * product
 */

export const Category: React.FC<any> = async ({params}) => {
  console.log("PARAMS:", params);
  const handle: string[] = params.slug;

  const validateHandle = () => {
    let stuff: CatMainT;
    if (handle.length === 1) {
      // category section
      stuff = validateHandleOne(handle);
      return (
        <CatMain
          subHeroData={subHeroData}
          prodSecD={stuff.prodSecD}
          newsSecD={stuff.newsSecD}
          catPartnerSecD={stuff.catPartnerSecD}
          content={stuff.content}
        />
      )
    }
    else if (handle.length === 2) {
      // company section
      return(
        <CompanyMain params={{handle: handle}}/>
      )
    }
    else if (handle.length === 3) {
      // product detail section todo company dashboard
      console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ", handle)
      return(
        <section className={"w-full pt-20"}>
          <ProductPage
            params={{handle: handle}}
          />
          <InfiniteProductsBest params={{params:{collection: "best"}}} sH={sHProdRelevant}/>
          <Contact />
        </section>
      )
    }
    return<><h2>Nothing here yet...</h2></>
  }

  return validateHandle();

}