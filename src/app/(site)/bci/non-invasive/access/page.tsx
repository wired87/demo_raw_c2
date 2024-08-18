import { Metadata } from "next";
import CompanyMain from "@/components/Company";
import Contact from "@/components/Contact";


export const metadata: Metadata = {
  title:
    "Access Products",
  description: "",
};

const Access = () => {
  return (
    <div className={"w-full gap-y-10 pt-30"}>
      <CompanyMain params={{handle: "access"}}/>
      <Contact />
    </div>
  );
}

export default Access;
