import {ReactNode} from "react";
import {SliderDataT} from "@/types/carousel";
import {GrabShopifyProductT} from "@/types/shopify";
import {NewsT} from "@/types/news";
import {PartnersT} from "@/types/partners";

interface ContentT {
  all?: ReactNode;
  cusProdSec?: ReactNode;
  cusNewsSec?: ReactNode;
  cutPartnerSec?: ReactNode;
}

export interface CatMainT {
  content?: ContentT;
  subHeroData: SliderDataT[];
  prodSecD?: GrabShopifyProductT; // if not provided show no prod sec
  newsSecD?: NewsT;
  catPartnerSecD?: PartnersT[]; // todo
}