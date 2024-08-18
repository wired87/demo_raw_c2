import ProductPage from "@/components/product";
import InfiniteProductsBest from "@/components/carousel/infinite/InfiniteProductsBest";
import {sHProdRelevant} from "@/components/Common/data";
import Contact from "@/components/Contact";
import React from "react";
import CompanyMain from "@/components/Company";
import {CategoryMain} from "@/components/Categories";

const Category: React.FC<any> = async ({params}) => {
  console.log("PARAMS CATGORY:", params);
  const handle: string[] = params.slug;

  const validateHandle = () => {
    console.log("handle00", handle)
    if (handle.length === 1) {
      return (
        <CategoryMain handle={handle}/>
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
export default Category;