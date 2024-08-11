import {GridTileImage} from "@/components/components/grid/tile";
import {getProduct, getProductRecommendations} from "@/lib/shopify";
import notFound from "@/app/not-found";
import {ProductProvider} from "../../../commerce/components/product/product-context";
import {ReactNode, Suspense} from "react";
import {Gallery} from "@/components/components/product/gallery";
import {Image} from "@/lib/shopify/types";
import {ProductDescription} from "@/components/components/product/product-description";
import Footer from "@/components/Footer";
import Link from "next/link";


export default async function ProductPage({ params, SubContent }: { params: { handle: string }, subContent?: ReactNode }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText
                }))}
              />
            </Suspense>
          </div>
          <div className="basis-full lg:basis-2/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <SubContent />
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w-full"
              href={`/product/${product.handle}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product?.featuredImage?.url || "/"}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





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
          main:  "../../../public/images/product/arm/main.png",
          previewSection: [
            product.product.featuredImage?.url ? product.product.featuredImage.url : "",
          ],
          video: ""
        }
      } else if (product.product.title.includes("Insight")) {
        console.log( "hhhhhhhhhhhhhhhhhhhhhh")

        return {
          main: "../../../public/images/product/emotiv/insight/img_1.png",
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

<section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0 flex flex-center justify-center items-center flex-col ">

  <div className="relative z-1 overflow-hidden mx-auto gap-5 py-8 max-w-c-1390 flex flex-center flex-col justify-center items-center rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">

    <Image
      src={image?.main}
      alt="Man"
      className="top-0 absolute left-0  h-full object-cover opacity-80"
    />
  </div>
</section>
</>
);
};

export default FunFact;



import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { Gallery } from 'components/product/gallery';
import { ProductProvider } from 'components/product/product-context';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata({
                                         params
                                       }: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
        images: [
          {
            url,
            width,
            height,
            alt
          }
        ]
      }
      : null
  };
}

 */