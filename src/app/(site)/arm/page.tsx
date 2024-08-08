
import { Metadata } from "next";
import ProductPage from "@/app/product/[handle]/page";

export const metadata: Metadata = {
  title:
    "Arm",
  description: "Explore our arm",
};
const handle: string = "ability-hand"; //"gid://shopify/Product/9628033483086";

const ArmMain = () => {
  return (
    <>
      <ProductPage params={{handle:handle}}/>
    </>
  );
};

export default ArmMain;
