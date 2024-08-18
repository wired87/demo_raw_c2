
import React from "react";

import {ProductListView} from "@/components/product/ProductListView";

const CompanyMain: React.FC<any> = (
  {
    params,
  }
) => {

  const comp = params.handle[1];
  console.log("COMPANY:", comp);

  const searchParams={searchParams: {sort: "RELEVANCE"}, params: { collection: comp }}

  return(
    <div className={"w-full px-5 md:px-15 flex flex-col"}>
      <ProductListView compStuff={params.handle} searchParams={searchParams} />
    </div>
  );
}

export  default CompanyMain;