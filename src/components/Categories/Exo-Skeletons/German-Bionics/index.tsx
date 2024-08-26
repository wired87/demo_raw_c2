import React from "react";
import SubHeroCarousel from "@/components/Hero/SubHero";
import {
  sliderData,
  missionData,
  apogeeSubMissionHeadingData,

  gridSec,
  apogeeFeatures,
  featuresSecD,
  dataInsightSingleSection
} from "@/components/Categories/Exo-Skeletons/German-Bionics/data";
import {InfiniteDefault} from "@/components/carousel/infinite/infiniteDefault";
import {germanBionicsPartners} from "@/components/carousel/data";
import Mission from "@/components/Mission";

import CTA from "@/components/Cta";
import Contact from "@/components/Contact";
import {SupportedAreas} from "@/components/Categories/Exo-Skeletons/German-Bionics/SupportedAreas";
import {ApogeeBoxLoop} from "@/components/Categories/Exo-Skeletons/German-Bionics/Features";

import {DataInsightSection} from "@/components/Categories/Exo-Skeletons/German-Bionics/DatainsightAd";


export const Apogee: React.FC = (
  {

  }
) => {
  const abra = "https://player.vimeo.com/video/780439292?muted=1&autopause=0&controls=0&loop=1&app_id=122963&autoplay=1"
  return(
    <div className={"relative"}>
      <div className={"absolute flex items-start justify-start w-full h-[170vh] "}>
        <iframe
          src={abra}
          className="absolute top-0 left-0 w-[160vw] h-[170vh] object-cover"
          allow="autoplay; fullscreen; picture-in-picture"
          data-autoplay="1"
          allowFullScreen
          data-ready="true"
        ></iframe>
      </div>

      <div className={"w-full relative gap-y-10 "}>
        <div
          className={"border-b-1 relative border-gray-300 top-0 left-0 flex items-center justify-center w-full mb-10 flex-col"}>
          <div className={"w-[90%]"}></div>
          <SubHeroCarousel data={sliderData}/>
          <InfiniteDefault data={germanBionicsPartners}/>
          <Mission subHeading={apogeeSubMissionHeadingData} bgImg={"https://germanbionic.com/wp-content/uploads/2023/08/ApogeeWeb_Light-1.png"} data={missionData} id={"possibilities"}/>
          <SupportedAreas subHeading={gridSec} />
          <CTA />
          <ApogeeBoxLoop  data={apogeeFeatures}  titleD={featuresSecD} />
          <DataInsightSection data={dataInsightSingleSection} />

          <Contact/>
        </div>
      </div>
    </div>
  );
}

/*
import React from "react";
import SubHeroCarousel from "@/components/Hero/SubHero";
import {
  sliderData,
  missionData,
  apogeeSubMissionHeadingData,

  gridSec,
  apogeeFeatures,
  featuresSecD,
  dataInsightSingleSection
} from "@/components/Categories/Exo-Skeletons/German-Bionics/data";
import {InfiniteDefault} from "@/components/carousel/infinite/infiniteDefault";
import {germanBionicsPartners} from "@/components/carousel/data";
import Mission from "@/components/Mission";

import CTA from "@/components/Cta";
import Contact from "@/components/Contact";
import {SupportedAreas} from "@/components/Categories/Exo-Skeletons/German-Bionics/SupportedAreas";
import {ApogeeBoxLoop} from "@/components/Categories/Exo-Skeletons/German-Bionics/Features";

import {DataInsightSection} from "@/components/Categories/Exo-Skeletons/German-Bionics/DatainsightAd";


export const Apogee: React.FC = (
  {

  }
) => {
  const abra = "https://player.vimeo.com/video/780439292?muted=1&autopause=0&controls=0&loop=1&app_id=122963&autoplay=1"
  return(
    <>
      <iframe src={abra} className={"absolute top-0 left-0 object-cover min-w-[160vw] flex justify-start min-h-[170vh] items-start p-0"}
              allow="autoplay; fullscreen; picture-in-picture" data-autoplay="1" allowFullScreen
              data-ready="true"></iframe>
      <div className={"w-full relative gap-y-10 "}>


        <div
          className={"border-b-1 border-gray-300 top-0 left-0 flex items-center justify-center w-full mb-10 flex-col"}>
          <div className={"w-[90%]"}></div>
          <SubHeroCarousel data={sliderData}/>
          <InfiniteDefault data={germanBionicsPartners}/>
          <Mission subHeading={apogeeSubMissionHeadingData} bgImg={"https://germanbionic.com/wp-content/uploads/2023/08/ApogeeWeb_Light-1.png"} data={missionData} id={"possibilities"}/>
          <SupportedAreas subHeading={gridSec} />
          <CTA />
          <ApogeeBoxLoop  data={apogeeFeatures}  titleD={featuresSecD} />
          <DataInsightSection data={dataInsightSingleSection} />

          <Contact/>
        </div>
      </div>
    </>
  );
}
 */