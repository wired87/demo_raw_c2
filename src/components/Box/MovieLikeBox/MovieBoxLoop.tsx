import React from "react";
import {BoxT} from "@/types/box";
import {MovieBox} from "@/components/Box/MovieLikeBox/MovieBox";
import SectionTitle from "@/components/Common/SectionTitle";
import {SectionTitleT} from "@/types/title";
interface MovieBoxLoopT {
  data: BoxT[];
  titleD: SectionTitleT;
}
export const MovieBoxLoop: React.FC<MovieBoxLoopT> = ({data, titleD}) => {

  const {subTitle, title, des} = titleD
  return (
    <>
      <SectionTitle
        subTitle={subTitle}
        title={title}
        des={des}
        center
      />
      <div className={"w-full py-10 items-center justify-center flex "}>
        <div className="grid items-center gap-x-8 gap-y-5 justify-center md:px-25 w-full grid-cols-1 md:grid-cols-2 ">
          {data.map((item: BoxT, i) => (
            <MovieBox item={item} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}