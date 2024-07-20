
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Mission from "@/components/Mission";

import {getProducts} from "@/types/shopify";
import {Carousel} from "@/components/components/carousel";


export const metadata: Metadata = {
  title: "The future is now!",
  description: "Experience the next stage of evolution up close",
};


const graphUrl: string = process.env.SHOPIFY_STORE_DOMAIN! + process.env.SHOPIFY_API_ENDPOINT!;


// types/shopify.ts
export interface ShopifyProduct {
  description: string;
  featuredImage: {
    altText: string;
    height: number;
    id: string;
    url: string;
    width: number;
  };
  handle: string;
  id: string;
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  tags: string[];
  title: string;
}



export default async function Home() {
  let products: ShopifyProduct[] = [];

  try {
    products = await getProducts(graphUrl);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching products:", err.message);
    }
  }

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Pricing />
      <Mission />
      <Carousel p={products} />
      <Testimonials />
      <Contact heading={"Let's get in touch"} />
    </main>
  );
}
