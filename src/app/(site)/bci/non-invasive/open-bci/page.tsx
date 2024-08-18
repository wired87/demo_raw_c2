import { Metadata } from "next";
import CompanyMain from "@/components/Company";
import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title:
    "BCI Techniques",
  description: "",
};
//mindaffect
const OpenBCI = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <CompanyMain params={{handle: "openbci"}}/>
      <Contact />
    </div>
  );
}

export default OpenBCI;
// <Sections data={bciData} sectionHeader={sectionHeader} />