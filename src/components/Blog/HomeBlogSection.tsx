
// import {Blog} from "@/types/blog";
import React, {useEffect, useState} from "react";
import {getProduct} from "@/lib/shopify";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleBlog from "@/components/Blog/SingleBlog";
import {Blog} from "@/types/blog";


interface BlockSection {
  titleSection?: string;
  text?: string;
  title?: string;
}

export const HomeBlogSection: React.FC<BlockSection> = (
  {
    titleSection,
    text,
    title
  }
) => {

  const [p, setP] = useState<any[]>();

  const getBestSelled = async () => {
    const products: any[] = [];
    const queries: string[] = [
      "Insight - 5 Channel Wireless EEG Headset",
      "Robo hand"
    ]
    await Promise.all(queries.map(async (query) => {
      const product = await getProduct(query);

      if (product) {
        const productJsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.title,
          description: product.description || "",
          image: product.featuredImage?.url || "",
          offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange?.minVariantPrice?.currencyCode || "",
            highPrice: product.priceRange?.maxVariantPrice?.amount || 0,
            lowPrice: product.priceRange?.minVariantPrice?.amount || 0
          }
        };
        products.push(productJsonLd);
      }
    }));
    setP(products);
  };


  useEffect(() => {
    getBestSelled().then(() => console.log("BEST SOLDS FETCHED..."))
  }, []);

  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle={titleSection}
            title={title || ""}
            paragraph={text || ""}
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {p?.map((blog: Blog, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog productItem={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

