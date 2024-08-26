import {Metadata} from "next";

import {TypeFormDefault} from "@/components/Contact/typeform";
import React from "react";


export const metadata: Metadata = {
  title:
    "Contact Page",
  description: "This is contact page description",
};

const ContactPage: React.FC<any> = ({params}) => {
  console.log("PARAMS  CONTACT:", params)
  const slug = params.handle;
  let id: string;
  if (slug === "ability-hand") {
    id = "ACgCpOVk";
  }
  else {
    id = "FByndOVV";
  }

  return (
    <TypeFormDefault id={id} />
  );
};

export default ContactPage;