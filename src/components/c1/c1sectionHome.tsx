import SectionTitle from "@/components/Common/SectionTitle";
import {Specifications} from "@/components/c1/Specifications";
import Image from "next/image";

export const C1SectionHome = () => {
  return (
    <section id={"c1"} className={"w-full flex py-20 flex-col"}>
      <SectionTitle
        subTitle={"Rethink consumer BCI"}
        title={"Meet the C-1"}
        des={"C-1 is designed for your comfort in your daily life. Current consumer grade BCI " +
          "facing the problem of discomfort, setup time and bulkiness. The elegant and inconspicuous design of the C1 " +
          "makes it perfect for every situation in your life."}
        center
      />
      <div className={"" +
        "grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2" +
        "h-full w-full pt-30" +
        ""}>
        <Specifications />
        <div className={"w-full h-full relative"}>
          <Image  src={"/images/placeholder.webp"} alt={"/images/placeholder.webp"} fill className={"object-contain absolute top-0 left-0"}/>
        </div>
      </div>
    </section>
  )
}