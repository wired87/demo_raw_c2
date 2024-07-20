"use client";
import {useEffect, useState} from "react";
import Image from 'next/image';
export interface ProductDetailImages {
  main: any;
  previewSection: string[];
  video: string
}
import main from "../../../public/images/product/arm/main.png";
import img_1 from "../../../public/images/product/emotiv/insight/img_1.png";

const FunFact = (product: any) => {

  const [image, setImage] = useState<ProductDetailImages>();
  const getImage = (): ProductDetailImages | undefined => {
    if (product.product) {
      if (product.product.title.includes("Tabea")) {
        return {
          main: main,
          previewSection: [
            product.product.featuredImage?.url ? product.product.featuredImage.url : "",
          ],
          video: ""
        }
      } else if (product.product.title.includes("Insight")) {
        console.log( "hhhhhhhhhhhhhhhhhhhhhh")

        return {
          main: img_1,
          previewSection: [
            product.product.featuredImage?.url ? product.product.featuredImage.url : "",
          ],
          video: ""
        }
      }
    }
  }


  useEffect(() => {
    if (product.product?.title) {
      console.log( "producaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat")
      setImage(getImage());
    }else {
      console.log( "66666666666666666666666")

    }
    console.log(product.product, "product")
  }, [product.product]);



  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0 flex flex-center justify-center items-center flex-col ">

        <div className="relative z-1 overflow-hidden mx-auto gap-5 py-8 max-w-c-1390 flex flex-center flex-col justify-center items-center rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">

          <Image
            src={image?.main}
            alt="Man"
            className="top-0 absolute left-0  h-full object-cover opacity-80"
          />
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
/*
<Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />
 */