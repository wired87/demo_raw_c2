import { Metadata } from "next";
import DefaultLayout from "@/components/Dashboard/components/Layouts/DefaultLayout";
import ECommerce from "@/components/Dashboard/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title:
    "Construction Placeholder Page",
  description: "",
};

const Dashboard = () => {
  return (
    <>
      <DefaultLayout>
        <ECommerce/>
      </DefaultLayout>
    </>
  );
};

export default Dashboard;
