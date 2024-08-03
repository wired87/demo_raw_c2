
import { Suspense } from 'react';
import { VariantSelector } from './variant-selector';
import Price from "@/components/components/price";
import {Product} from "@/lib/shopify/types";
import Prose from "@/components/components/prose";
import {AddToCart} from "@/components/components/cart/add-to-cart";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium my-10">
          {product.title}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white my-10">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense>

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense>
    </>
  );
}
