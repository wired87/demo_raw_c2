import React from "react";
import {ProductListView} from "@/components/product/ProductListView";

export const CompanyMain: React.FC<any> = (
  {
    params,
  }
) => {

  const slug = params.handle[1];
  console.log("SLUG:", slug);

  return(
    <div className={"w-full px-5 md:px-15 flex flex-col"}>
      <ProductListView compStuff={params.handle} searchParams={{searchParams: {sort: "RELEVANCE"}, params: { collection: slug }}}/>
    </div>
  );
}