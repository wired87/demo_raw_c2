"use client";
import axios from "axios";
import SectionHeader from "@/components/Header/SectionHeader";

const ExploreByCompany = (subContent: any, category: string) => {

  const getCompanies = async () => {
    const res = await axios.post("https://localhost:3000/api/", {category: category})
  }
  return(
    <>
      <SectionHeader  headerInfo={} />
    </>
  );
}
export default ExploreByCompany;