import Infinite from "@/components/carousel/Infinite";
import SectionTitle from "@/components/Common/SectionTitle";
import {ShopNow} from "@/components/Shop/ShopNow";
import {getCollectionProducts} from "@/lib/shopify";
import ProductGridItems from "@/components/components/layout/product-grid-items";
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


  const products = await getCollectionProducts({ collection: "bci" });
  console.log("products", products);
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
        {products.length === 0 ? (
          <p className="py-3 text-lg">{`No items found in this collection mb-5`}</p>
        ) : (
            <ProductGridItems products={products} extraClass={"h-[300px] w-[300px] "}/>
        )}
      </Infinite>
      <ShopNow href={"/bci"} explore={"BCIs"}/>
    </section>
  );
}
