
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import { Metadata } from "next";
import Mission from "@/components/Mission";

import {getProducts} from "@/types/shopify";
import {Carousel} from "@/components/components/carousel";

import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {SectionHeaderT} from "@/types/offer";
import {InfiniteCarouselComponent} from "@/components/carousel/LogoCloud";
import {ProductT} from "@/types/product";
import Testimonials from "@/components/Testimonials";


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

const exampleProdsHeading: SectionHeaderT = {
  heading: "Our most popular products",
  subTitle: "Explore our customers favorites ",
  des: ""
}

const searchCompanyHeader: SectionHeaderT = {
  heading: "Search by Vendor",
  subTitle: "Explore our Partnerdevices",
  des: ""
}
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
const partners = [
  {
    img: "https://www.emotiv.com/cdn/shop/files/Emotiv-logo-white.png?v=1695617152",
    url: "/emotiv",
    title: "Emotiv"
  },
  {
    img: "https://mindrove.com/wp-content/uploads/2023/04/MindRove_logo_2023.svg",
    url: "/mindrove",
    title: "MindRove"
  },
]


export default async function Home() {
  let products: ShopifyProduct[] = [];

  try {
    products = await getProducts(graphUrl);
    console.log("productsxxxxxxxxxxxxxxx", products)
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error fetching products:", err.message);
    }
  }

  const getCarousel = () => {
    if (products && products.length > 0) {
      return(
        <Carousel p={products} />
      )
    }
  }

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Mission />
      <InfiniteCarouselComponent data={carouselProducts} sH={exampleProdsHeading} use={"PRODUCT"}/>
      <SingleNewsSection />
      <InfiniteCarouselComponent data={partners} sH={searchCompanyHeader} use={"PARTNERS"} />
      <Testimonials />
      <Contact heading={"Let's get in touch"} />
    </main>
  );
}
