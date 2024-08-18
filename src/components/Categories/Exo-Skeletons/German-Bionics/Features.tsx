import React from "react";
import {BoxT} from "@/types/box";
import SectionTitle from "@/components/Common/SectionTitle";
import {SectionTitleT} from "@/types/title";
interface MovieBoxLoopT {
  data: BoxT[];
  titleD: SectionTitleT;
}
export const ApogeeBoxLoop: React.FC<MovieBoxLoopT> = ({data, titleD}) => {

  const {subTitle, title, des} = titleD
  return (
    <section className={"pt-25 min-h-[700px] mb-10"}>
      <SectionTitle
        subTitle={subTitle}
        title={title}
        des={des}
        center
      />
      <div className={"w-full h-[500px] items-center justify-center flex "}>
        <div className="grid items-center gap-x-8 gap-y-5 justify-center md:px-25 w-full grid-cols-1 md:grid-cols-2 ">
          {data.map((item: BoxT, i) => (
            <div key={i} className="w-full mb-5 gap-y-3 gap-x-6 items-start  justify-center flex flex-col">
              <p className="text-left text-xl  uppercase text-apogee  font-bold tracking-[0.3em]">
                {item.title}
              </p>
              <p className="uppercase text-xs leading-snug dark:text-white text-black text-left font-bold tracking-[0.3em]">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}