import {CatMainT} from "@/types/cat";
import {subHeroData} from "@/components/Categories/Bci/data";
import {bioWareNews, cliniciansNews, softwareNews, whatDoBCI} from "@/components/News/data";
import {bciPartners, bioWarePartners, clinicianPartners, softwarePartners} from "@/components/carousel/data";
import {GrabShopifyProductT} from "@/types/shopify";

export const validateHandleOne = (handle: string[]): CatMainT => {
  let prodSecD: GrabShopifyProductT = {
    searchParams: {
      sort: "BEST_SELLING"
    },
    params: {
      collection: ""
    }
  };
  console.log("PROD SEC D:", prodSecD)
  if (handle[0] === "bci") {
    if (prodSecD.params) {
      prodSecD.params.collection = handle[0];
    }
    console.log("PROD SEC D22:", prodSecD)
    return {
      subHeroData: subHeroData,
      prodSecD: prodSecD,
      newsSecD: whatDoBCI,
      catPartnerSecD: bciPartners,
      content: undefined,
    }
  }
  if (handle[0] === "bioware") {
    if (prodSecD.params) {
      prodSecD.params.collection = handle[0];
    }
    return {
      subHeroData: subHeroData,
      prodSecD: prodSecD,
      newsSecD: bioWareNews,
      catPartnerSecD: bioWarePartners,
      content: undefined,
    }
  }
  if (handle[0] === "clinician") {
    if (prodSecD.params) {
      prodSecD.params.collection = handle[0];
    }
    return {
      subHeroData: subHeroData,
      prodSecD: prodSecD,
      newsSecD: cliniciansNews,
      catPartnerSecD: clinicianPartners,
      content: undefined,
    }
  }
  if (handle[0] === "software") {
    if (prodSecD.params) {
      prodSecD.params.collection = handle[0];
    }
    return {
      subHeroData: subHeroData,
      prodSecD: prodSecD,
      newsSecD: softwareNews,
      catPartnerSecD: softwarePartners,
      content: undefined,
    }
  }
}