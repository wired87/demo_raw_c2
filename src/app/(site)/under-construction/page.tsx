import { Metadata } from "next";
import {ConstructSVG} from "../../../../public/images/under-construction/construct";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Construction Placeholder Page",
  description: "",
};

const UnderConstruct = () => {
  return (
    <div className={"w-full h-[1300px] flex items-center flex-col justify-center gap-y-7"}>
      <ConstructSVG />
      <p className={"text-2xl dark:text-primary font-bold"}>This Website is under construction.</p>
      <p className={"text-2xl dark:text-primary font-bold"}>Come back soon</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default UnderConstruct;
