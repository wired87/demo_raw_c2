import { Metadata } from "next";
import CompanyMain from "@/components/Company";
import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title:
    "BCI Techniques",
  description: "",
};

const MindRove = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <CompanyMain params={{handle: "mindrove"}}/>
      <Contact />
    </div>
  );
}

export default MindRove;
