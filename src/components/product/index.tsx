"use client";
import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    console.log(image, "imageQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
  }, [image]);

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

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by Global Companies.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">World Wide Clients</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Downloads</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                865
              </h3>
              <p className="text-lg lg:text-para2">Winning Award</p>
            </motion.div>
          </div>
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