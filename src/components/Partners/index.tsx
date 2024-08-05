import {Container} from "@/components/Container";
import React, {ReactNode} from "react";

interface PT {
  partner: ReactNode;
}

export const PartnerSection: React.FC<any> = (
  {
    partners
  }
) => {
  return(
    <Container>
      <div className="flex flex-col justify-center">


        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">

          {partners.map((item: PT, i: number) => (
            <div className="pt-2 text-gray-400 dark:text-gray-400" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
/*
<div className="text-xl text-center text-gray-700 dark:text-white">
          Trusted by <span className="text-indigo-600">2000+</span>{" "}
          customers worldwide
        </div>
 */