"use client";
import ProductBox, {pBox} from "@/components/Pricing/PricingBox";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12  dark:bg-dark lg:pb-[90px]"
    >


        <div className="-mx-4 flex flex-wrap justify-center">
          {pBox.map((product, i) => (
            <ProductBox key={i} product={product} key2={i+1}/>
          ))}     
        </div>

    </section>
  );
};

export default Pricing;
