"use client";
import {Suspense} from "react";
import OpenCart from "@/components/components/cart/open-cart";
import Cart from "@/components/components/cart/cart";

export const CartComponent = () => {
  return (
    <div className="flex justify-end md:w-1/3">
      <Suspense fallback={<OpenCart/>}>
        <Cart/>
      </Suspense>
    </div>
  )
}