"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import React, {useEffect, useState} from "react";
import {faqContent, faqContent2} from "@/components/Faq/data/faq";
import {DataTypes} from "@/components/Faq/data/dataInterface";
import {LeftTopDots} from "@/components/dot/leftTop";
import {DotsBottomRight} from "@/components/dot/bottomRight";

interface FaqConfig {
  data: DataTypes[];
  data2: DataTypes[];
  faq?: boolean | null;
}


const Pros: React.FC<FaqConfig> = ({data, data2, faq}) => {
  const [content, setContent] = useState<DataTypes[]>([]);
  const [content2, setContent2] = useState<DataTypes[]>([]);

  const getContent = () => {
    return content.map((item, i) => {
      return(
        <SingleFaq
          key={i}
          question={item.text}
          answer={item.paragraph}
          icon={item.icon}
        />
      )
    })
  }

  const getContent2 = () => {
    return content2.map((item, i) => {
      return(
        <SingleFaq
          key={i}
          question={item.text}
          answer={item.paragraph}
          icon={item.icon}
        />
      )
    })
  }


  useEffect(() => {
    if (data && data2) {
      setContent(data);
      setContent2(data2);
    }else {
      setContent(faqContent)
      setContent2(faqContent2)
    }
  }, []);

  const getHeading = () => {
    if (faq) {
      return (
        <SectionTitle
          subTitle="FAQ"
          title="Any Questions? Answered"
          des="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
        />
      )
    }
  }

  return (
    <section id={"faq"} className="relative z-20 overflow-hidden  pb-8 pt-20 lg:pb-[50px] lg:pt-[120px]">
      <SectionTitle
        subTitle={"Take a closer look"}
        title={"Whats under the Hood?"}
        des={""}
        center
      />
      <div className="flex w-full justify-center items-center ">

        {
          getHeading()
        }
        <div className=" mt-[60px] flex flex-wrap lg:mt-20 px-5">
          <div className="w-full px-4 lg:w-1/2">
            {
              getContent()
            }
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {
              getContent2()
            }
          </div>
        </div>
      </div>

      <div>
        <LeftTopDots />
        <DotsBottomRight />
      </div>
    </section>
  );
};

export default Pros;
