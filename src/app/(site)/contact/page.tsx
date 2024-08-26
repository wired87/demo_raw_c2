import {Metadata} from "next";

import React from "react";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/Common/SectionTitle";


export const metadata: Metadata = {
  title:
    "Contact Page",
  description: "This is contact page description",
};

const ContactPage: React.FC<any> = () => {

  return (
    <section className={"w-full flex  py-30 flex-col min-h-[1300px]"}>
      <SectionTitle
        subTitle={"We are looking forward to your message"}
        title={"Contact"}
        des={"We will get back to you within the next days!"}
        center
      />
      <Contact/>
    </section>
  );
};

export default ContactPage;