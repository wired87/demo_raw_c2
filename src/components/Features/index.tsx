import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import {Feature} from "@/types/feature";
import React from "react";
interface A {
  features: Feature[]
}
const Features: React.FC<A> = ({features}) => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subTitle="Features"
          title="Main Features Of Play"
          des="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {features.map((feature: Feature, i: number) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
