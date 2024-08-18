import {Insight} from "@/components/product/Content/emotiv/Insight";
import AbilityHandIndex from "../Company/Psyonics/AbilityHand";
import RoamExoIndex from "@/components/Company/Roam/Exo";


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
      }
    }
    else if (company === "emotiv") {

    }
    else if (company === "mindrow") {

    }
    else if (company === "psyonic") {
      if (product === "abiity-hand") {
        return(
          <AbilityHandIndex />
        )
      }
    }
    else if (company === "roam") {
      if (product === "exo-skeleton") {
        return(
          <RoamExoIndex />
        )
      }
    }
  }
  else {
    // todo
    return <></>
  }
}