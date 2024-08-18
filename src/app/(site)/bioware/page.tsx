import { Metadata } from "next";

import {CategoryMain} from "@/components/Categories";


export const metadata: Metadata = {
  title:
    "Bioware Products",
  description: "",
};

const BioWare = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <CategoryMain  handle={["bioware"]}/>
    </div>
  );
}

export default BioWare;
