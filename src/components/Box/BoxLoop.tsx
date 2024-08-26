"use client";
import React from "react";
import SingleFeature from "@/components/Box/Box";
import {BoxT} from "@/types/box";
import SectionTitle from "@/components/Common/SectionTitle";
import {SectionTitleT} from "@/types/title";

interface FeatureT {
  headerInfo?: SectionTitleT;
  data: BoxT[];
}

const BoxLoop: React.FC<FeatureT> = (
  {
    headerInfo,
    data
  }
) => {
  return (

    <section id="abilityBoxItems" className="pb-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionTitle
          subTitle={"C-1's unobtrusive and simple design brings your state monitoring to your daily life"}
          des={"All around deep insight about your mental states"}
          title={"Monitor your Mental Health"}
          center
        />
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">

          {data.map((feature: BoxT, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}

        </div>

      </div>
    </section>


  );
};

export default BoxLoop;