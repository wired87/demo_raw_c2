

import {MainContentHome} from "@/components/Home";
import {Metadata} from "next";


export const metadata: Metadata = {
  title: "The future is now!",
  description: "Experience the next stage of evolution up close",
};


const graphUrl: string = process.env.SHOPIFY_STORE_DOMAIN! + process.env.SHOPIFY_API_ENDPOINT!;


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

  return (
    <main>
      <MainContentHome />
    </main>
  );
}
