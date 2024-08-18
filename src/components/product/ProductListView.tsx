



import {getCollection, getCollectionProducts, getProducts} from '@/lib/shopify';
import ProductGridItems from "@/components/components/layout/product-grid-items";
import Grid from "@/components/components/grid";
import {CompanyContainer} from "@/components/Company/Container";
import {GrabShopifyProductT} from "@/types/shopify";
import {defaultSort, sorting} from "@/lib/constants";

export const metadata = {
  title: 'Products',
  description: ''
};

export const ProductListView = async (
  {
                                           searchParams,compStuff,
                                         }: {
  searchParams?: GrabShopifyProductT;
  compStuff?: string[];
}) => {

  let des: string = "";
  let logo: string = "";
  let products;
  let sV;

  if (compStuff) {
    const collection = await getCollection(searchParams?.params?.collection || "");
    products = await getCollectionProducts({ collection: searchParams?.params?.collection || "" });
    des = collection?.description || "";
    logo = collection?.path || "";
    console.log("COLLECTION:", collection);
  }else {
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    sV = searchValue
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
    products = await getProducts({ sortKey, reverse, query: searchValue });
  }

  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <section className={"w-full pt-20"}>
      {compStuff ? (
        <CompanyContainer name={searchParams?.params?.collection || ""} des={des} logo={logo}/>
      ) : null }
      {sV ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{sV}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} url={`/${compStuff?.[0]}/${compStuff?.[1]}/`}/>
        </Grid>
      ) : null}
    </section>
  );
}

