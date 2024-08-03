
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import {PacmanLoader} from "react-spinners";

export function Carousel(p: any) {


  const content = () => {
    if (p && p.length > 0) {

      return(
          <ul className="flex animate-carousel gap-4">
            {p.map((product: any, i: number) => (
              <li
                key={`${product.handle}${i}`}
                className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
              >
                <Link href={`/product/${product.handle || ""}`} className="relative h-full w-full">
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode: product.priceRange.maxVariantPrice.currencyCode
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </Link>
              </li>
            ))}
          </ul>
      )
    }
    return(
      <PacmanLoader />

    )
  }


  return (
    <div className="relative w-full h-[500px] bg-red overflow-x-auto pb-6 pt-1">
      {
        content()
      }
    </div>
  );
}
