import SectionTitle from "@/components/Common/SectionTitle";
import {Specifications} from "@/components/c1/Specifications";
import Image from "next/image";

export const C1SectionHome = () => {
  return (
    <section id={"c1"} className={"w-full he-full flex py-20 flex-col"}>
      <SectionTitle
        subTitle={"Rethink consumer BCI"}
        title={"Meet the C-1"}
        des={"C-1 is designed for your comfort in your daily life. Current consumer grade BCI " +
          "facing the problem of discomfort, setup time and bulkiness. The elegant and inconspicuous design of the C1 " +
          "makes it perfect for every situation in your life."}
        center
      />
      <div className="flex md:flex-row flex-col h-full w-full pt-30">
        <Specifications/>
        <div className="md:w-1/2 w-full min-h-[400px] relative">

          <Image
            src="/images/pres_light.png"
            alt="Placeholder image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}