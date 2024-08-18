
import Grid from "@/components/components/grid";

import Link from 'next/link';
import {Product} from "@/lib/shopify/types";
import {GridTileImage} from "@/components/components/grid/tile";

export default function ProductGridItems({ products, url, extraClass }: { products: Product[], url?: string, extraClass?: string }) {
  const getUrl = (item: any) => {
    if (url) {
      return `/category/${url}${item.handle || ""}`
    } else {
      return `/product/${item.handle || ""}`
    }
  }
  return (
    <>
      {products.map((product: Product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className={`relative inline-block mx-2 ${extraClass || ""}`} href={getUrl(product)}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url || ""}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
