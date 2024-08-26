
import React from "react";


const CompanyMain: React.FC<any> = (
  {
    params,
  }
) => {

  const comp = params.handle[1];
  console.log("COMPANY:", comp);


  return(
    <div className={"w-full px-5 md:px-15 flex flex-col"}>
    </div>
  );
}

export  default CompanyMain;