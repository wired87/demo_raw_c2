import Infinite from "@/components/carousel/Infinite";
import SectionTitle from "@/components/Common/SectionTitle";
import {ShopNow} from "@/components/Shop/ShopNow";
import {GrabShopifyProductT} from "@/types/shopify";
import {SectionTitleT} from "@/types/title";

interface InfiniteProdT {
  params: GrabShopifyProductT;
  sH?: SectionTitleT;
}
export default async function InfiniteProductsBest({
                                               params,
                                                     sH
                                             }: InfiniteProdT
) {


  return (
    <section className="logo-cloud-container w-[90vw] items-center justify-center mx-auto mt-25 mb-25">

      <SectionTitle
        subTitle={sH?.subTitle || ""}
        title={sH?.title || ""}
        des={sH?.des || ""}
        center
      />

      <Infinite
        pauseOnHover
        className="[--duration:20s] gap-20 my-8 logo-cloud">

      </Infinite>
      <ShopNow href={"/bci"} explore={"BCIs"}/>
    </section>
  );
}
