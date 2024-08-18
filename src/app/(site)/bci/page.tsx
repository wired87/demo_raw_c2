import { Metadata } from "next";
import {CategoryMain} from "@/components/Categories";


export const metadata: Metadata = {
  title:
    "BCI Techniques",
  description: "",
};

const BCI = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <CategoryMain  handle={["bci"]}/>
    </div>
  );
}

export default BCI;
// <Sections data={bciData} sectionHeader={sectionHeader} /> <MainBci />