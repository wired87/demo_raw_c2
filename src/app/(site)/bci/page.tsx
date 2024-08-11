import { Metadata } from "next";
import {MainBci} from "../../../components/Categories/Bci";


export const metadata: Metadata = {
  title:
    "BCI Techniques",
  description: "",
};

const BCI = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <MainBci />
    </div>
  );
}

export default BCI;
// <Sections data={bciData} sectionHeader={sectionHeader} />