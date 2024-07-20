

import SingleBlog from "@/components/Blog/SingleBlog";
import React from "react";
import {CircularProgress} from "@mui/material";
import {Carousel} from "@/components/components/carousel";
interface PSliderT {
  products: any[];
  loading:boolean;
}
export const ProductSlider: React.FC<PSliderT> = (
  {
    products,
    loading
  }
) => {

  const content = () => {
    if (loading) {
      return(
        <CircularProgress size={30}/>
      )
    }
    return(
      <Carousel show={3.5} slide={2} transition={0.5}>
        {products.map((item: any, i: number) => {
          <SingleBlog productItem={item} key={i}/>
        })}
      </Carousel>
    )
  }

  return(
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {
            content()
          }
        </div>
      </div>
    </section>
    )
}