import {NextResponse} from "next/server";
import {getCollectionProducts} from "@/lib/shopify";
import {defaultSort, sorting} from "@/lib/constants";


export async function POST(req: any) {
  console.log("raw", req)
  try {
    const data = req.json();
    const { sort } = data.searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
    const products = await getCollectionProducts({ collection: data.params.collection, sortKey, reverse });

    return NextResponse.json(
      {
        products: products,
        ok: true
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        products: null,
        ok: false
      }
    )
  }
}