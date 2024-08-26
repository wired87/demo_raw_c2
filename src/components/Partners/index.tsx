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
    <section className="bg-black text-white py-8">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">Our Partners</h2>
      <p className="text-center text-lg font-extralight leading-8 ">We are trusted by the world’s most innovative teams</p>

      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {partners.map((pa: any, i: number) => (
              <p key={i}>{pa}</p>
            ))}
        </div>

        <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
          {partners.map((pa: any, i: number) => (
              <p key={i}>{pa}</p>
            ))}
        </div>
      </div>
    </section>
  );
}
/*
<div className="text-xl text-center text-gray-700 dark:text-white">
          Trusted by <span className="text-indigo-600">2000+</span>{" "}
          customers worldwide
        </div>
 */