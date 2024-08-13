import React from "react";
import {SectionTitleT} from "@/types/title";

const SectionTitle: React.FC<SectionTitleT> = ({
  subTitle,
  title,
  des,
  width = "635px",
  center,
}) => {
  return (
    <div className=" flex self-stretch relative ">
      <div
        className={`wow fadeInUp w-full px-4 text-center ${
          center ? "mx-auto " : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subTitle && (
          <span className="mb-2 block text-lg font-semibold text-primary">
            {subTitle}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
