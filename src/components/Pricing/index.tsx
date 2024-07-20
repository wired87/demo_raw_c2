"use client";
import ProductBox, {pBox} from "@/components/Pricing/PricingBox";
import Masonry from '@mui/lab/Masonry';

const Pricing = () => {

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12  dark:bg-dark lg:pb-[90px]"
    >
      <Masonry columns={{ sm: 1, lg: 2, md: 3 }} spacing={{ sm: 1, lg: 2, md: 3 }}>
        {pBox.map((item, i) => (
          <ProductBox key={i} product={item} key2={i+1} />
        ))}
      </Masonry>
    </section>
  );
};

export default Pricing;
