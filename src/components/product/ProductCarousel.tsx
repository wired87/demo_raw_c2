import Link from 'next/link';
import { GridTileImage } from './tile';
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import {ProductT} from "@/types/product";



const carouselProducts: ProductT[] = [
  {
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },{
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },{
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },{
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },{
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },{
    title: "Sample01",
    amount: "9990€",
    img: "",
    handle: "slug"
  },
]


export const ProductCarousel: React.FC<any> =(
  {
    sH
  }
) => {

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">

      <ul className="flex slide-left gap-4">
        {carouselProducts.map((product: ProductT, i: number) => (
          <li
            key={`${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.amount,
                  currencyCode: "EUR"
                }}
                src={product.img}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}