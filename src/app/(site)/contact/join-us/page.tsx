
import { Metadata } from "next";
import {JoinUs} from "@/components/Contact/typeform/JoinUs";

export const metadata: Metadata = {
  title:
    "Join-us Contact Page ",
  description: "",
};

const JoinUsContactPage = () => {
  return (
    <JoinUs />
  );
};

export default JoinUsContactPage;
