"use client";

import Grid from '@/components/components/grid';
import ProductGridItems from '@/components/components/layout/product-grid-items';
import {ShopNow} from "@/components/Shop/ShopNow";
import SectionTitle from "@/components/Common/SectionTitle";
import {useCallback} from "react";
import axios from "axios";


const ProductSection = ({
                                             params,
                                             searchParams
                                           }: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {

  const getProducts = async () => {
    try {
      const data = {
        searchParams: searchParams,
        params: params
      }
      const res = await axios.post(process.env.NODE_ENV === "production" ? "" : "http://localhost:3000/api/get-product", data);
      console.log("RES FORM P FETCH", res)
      if (res?.data?.products) {
        return res?.data?.products
      }
    }catch(e) {
      console.error("ERRO WHILE PROD FETCH:", e);
    }
    return null
  }

  const Content =  useCallback(async() => {
    const prod = await getProducts().then(() => console.log("fetched proiducts"))
    if (prod) {
      return (
        <section>
          <SectionTitle
            subTitle={"Our offer"}
            title={"Explore our BCI's"}
            des={"sectionHeader.des"}
            center
          />
          {prod?.length === 0 ? (
            <p className="py-3 text-lg">{`No products found in this collection`}</p>
          ) : (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <ProductGridItems products={prod} />
            </Grid>
          )}
          <ShopNow href={"/bci"} explore={"BCIs"} />
        </section>
      );
    }
  }, [params,
    searchParams])

  return Content();
}

export default ProductSection;