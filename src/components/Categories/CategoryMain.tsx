import SubHeroCarousel from "@/components/Hero/SubHero";
import Contact from "@/components/Contact";
import {CatMainT} from "@/types/cat";
import React from "react";
import ProductSection from "@/components/product/ProductSection";
import {SingleNewsSection} from "@/components/News/SingleNewsSection";
import {InfiniteLogo} from "@/components/carousel/infinite/InfiniteLogo";

export const CatMain: React.FC<CatMainT> = (
  {
    subHeroData,
    prodSecD,
    newsSecD,
    content,
    catPartnerSecD
  }
) => {

  const validateProdSec = () => {
    if (prodSecD && prodSecD?.params && prodSecD.searchParams) {
      return(
        <div className={"px-6 mb-10 mt-7"}>
          <ProductSection
            searchParams={prodSecD.searchParams}
            params={prodSecD.params}
          />
        </div>
      )
    } else if (content?.cusProdSec) {
      return content.cusProdSec;
    }
  }

  const validateNewsSecD = () => {
    if (newsSecD) {
      return (
        <SingleNewsSection data={newsSecD} />
      );
    }
    else if (content?.cusNewsSec) {
      return content.cusNewsSec;
    }
  }

  const validatePartnerD = () => {
    if (catPartnerSecD) {
      return(
        <InfiniteLogo />
      );
    }
    else if (content?.cutPartnerSec) {
      return content.cutPartnerSec;
    }
  }

  const validateAll = () => {
    if (content?.all ) {
      return content.all;
    }
    return(
      <>
        {validateProdSec()}
        {validateNewsSecD()}
        {validatePartnerD()}
      </>
    )
  }

  return(
    <>
      <SubHeroCarousel data={subHeroData} />
      {validateAll()}
      <Contact />
    </>
  );
}