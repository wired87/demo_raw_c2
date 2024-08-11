
import { getCollection, getCollectionProducts } from '@/lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Grid from '@/components/components/grid';
import ProductGridItems from '@/components/components/layout/product-grid-items';
import { defaultSort, sorting } from '@/lib/constants';
import {ShopNow} from "@/components/Shop/ShopNow";
import SectionTitle from "@/components/Common/SectionTitle";

export async function generateMetadata(
  {
                                         params
                                       }: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function ProductSection({
                                             params,
                                             searchParams, sectionHeader
                                           }: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      <SectionTitle
        subtitle={"sectionHeader.subTitle"}
        title={"sectionHeader.heading"}
        paragraph={"sectionHeader.des"}
        center
      />
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
      <ShopNow href={"/bci"} explore={"BCIs"}/>
    </section>
  );
}
