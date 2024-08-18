
import ProductPage from "@/components/product";


export default async function SearchProductPage({ params }: { params: { handle: string } }) {
  console.log("SEARCHPRODUCTPAGE:", params.handle);
  return (
    <section className={"w-full pt-20"}>
      <ProductPage
        params={{handle: ["", "compName", params.handle]}} // todo somehow get vendor name form shopify product
      />
    </section>
  );
}
