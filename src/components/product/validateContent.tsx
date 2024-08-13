import {Insight} from "@/components/product/Content/emotiv/Insight";


const COMPANIES = [
  "emotiv",
  "openbci",
  "mindrow",
  "psyonic"
]


const PRODUCTS = [
  "insight-5-channel-wireless-eeg-headset",
  "openbci",
  "mindrow",
  "psyonic"
]


export const validateProductContent = (product: string, company: string) => {
  if (PRODUCTS.includes(product) && COMPANIES.includes(company) ) {
    console.log("FETCHING PRODUCT CONTENT...")
    if (company === "emotiv") {
      if (product === "insight-5-channel-wireless-eeg-headset") {
        return (
          <Insight/>
        )
      } else if (product === "openbci") {
        return (
          <Insight/>
        )
      } else if (product === "mindrow") {
        return (
          <Insight/>
        )
      } else if (product === "psyonic") {
        return (
          <Insight/>
        )
      }
    }
    else if (company === "emotiv") {

    }
    else if (company === "mindrow") {

    }
    else if (company === "psyonic") {

    }
  }
  else {
    // todo
    console.error("FETCHING PRODUCT CONTENT...")
    null;
  }
}