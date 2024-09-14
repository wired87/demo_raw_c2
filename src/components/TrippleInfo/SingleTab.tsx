import Image from "next/image";
import {Video} from "@/components/Video";
import {FaCheck} from "react-icons/fa";
import {FeatureTab} from "@/components/TrippleInfo/TrippleTab";



export const getPoints = (points: string[] | undefined) => {
  if (points?.length) {
    return(
      <ul className={"grid grid-cols-1 md:grid-cols-2 gap-4 list-none text-left p-0 mt-5"}>
        {points.map((item:string, i:number) => (
          <div className={"flex-row flex gap-4"}>
            <FaCheck size={18} color={"green"}/>
            <li key={i} className={"dark:text-white text-black"}>
              {item}
            </li>
          </div>
        ))}
      </ul>
    )
  }
}


const SingleTab = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, alt } = featureTab;

  const getImg = () => {
    if (typeof image === "string") {
      if (image.startsWith("2")) {
        return <Video videoId={image} />
      }
      if (image)
        return(

          <Image unoptimized src={image} alt={alt || image} fill className="rounded-2xl" />

        );
    }
    return image;
  }


  const getDesc2 = () => {
    if (desc2) {
      if (typeof desc2 === "string") {
        return <p className="w-11/12">{desc2}</p>
      } else {
        return getPoints(desc2);
      }
    }

  }
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          {
            getDesc2()
          }
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          {
            getImg()
          }
        </div>
      </div>
    </>
  );
};

export default SingleTab;
