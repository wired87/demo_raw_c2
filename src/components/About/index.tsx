import React from "react";
import {AboutVisualContent} from "@/components/About/defaultForm";

interface AboutTypes {
  title: string;
  mainContent: string;
  subContent: string
  route?: string
}

const About: React.FC<AboutTypes> = ({title, mainContent, subContent, route}) => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  {title}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {mainContent}
                  <br /> <br />
                  {subContent}
                </p>

                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Explore
                </a>
              </div>
            </div>

            <AboutVisualContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
