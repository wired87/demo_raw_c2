import {CatMain} from "@/components/Categories/CategoryMain";
import {subHeroData} from "@/components/Categories/Bci/data";
import {CatMainT} from "@/types/cat";
import {validateHandleOne} from "@/app/(site)/category/[...slug]/validateOne";
import ProductPage from "@/components/product";


export default async function Category({params}) {
  console.log("PARAMS:", params);
  const handle: string[] = params.slug;

  const validateHandle = () => {
    let stuff: CatMainT;
    if (handle.length === 1) {
      // category section
      stuff = validateHandleOne(handle);
      return (
        <CatMain
          subHeroData={subHeroData}
          prodSecD={stuff.prodSecD}
          newsSecD={stuff.newsSecD}
          catPartnerSecD={stuff.catPartnerSecD}
          content={stuff.content}
        />
      )
    }
    else if (handle.length === 2) {
      // company section todo company dashboard
      stuff = validateHandleOne(handle);
      return(
        <></>
      )
    }
    else if (handle.length === 3) {
      // product detail section todo company dashboard
      stuff = validateHandleOne(handle);
      return(
        <ProductPage
          params={{handle: handle[2]}}
        />
      )
    }
    return<><h2>Nothing here yet...</h2></>
  }

  return validateHandle();

}