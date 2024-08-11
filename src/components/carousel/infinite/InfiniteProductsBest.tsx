import Infinite from "@/components/carousel/Infinite";
import SectionTitle from "@/components/Common/SectionTitle";
import {ShopNow} from "@/components/Shop/ShopNow";
import {SectionHeaderT} from "@/types/offer";
import {getCollectionProducts} from "@/lib/shopify";
import ProductGridItems from "@/components/components/layout/product-grid-items";
import {GrabShopifyProductT} from "@/types/shopify";


const sH: SectionHeaderT = {
  heading: "Our Best sellers",
  subTitle: "Explore",
  des: ""
}

export default async function InfiniteProductsBest({
                                               params,

                                             }: GrabShopifyProductT
) {

  const products = await getCollectionProducts({ collection: params?.collection || "" });


  return (
    <section className="logo-cloud-container w-[90vw] items-center justify-center mx-auto mt-25 mb-25">
      <SectionTitle
        subtitle={sH.subTitle}
        title={sH.heading}
        paragraph={sH.des}
        center
      />

      <Infinite
        pauseOnHover
        className="[--duration:20s] gap-20 my-8 logo-cloud">
        {products.length === 0 ? (
          <p className="py-3 text-lg">{`No items found in this collection mb-5`}</p>
        ) : (
          <ProductGridItems products={products} />
        )}
      </Infinite>
      <ShopNow href={"/bci"} explore={"BCIs"}/>
    </section>
  );
}
