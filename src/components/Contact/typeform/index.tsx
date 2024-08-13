"use client"

import {Widget} from "@typeform/embed-react";
import React from "react";
interface TFDT {
  id: string;
}
export const TypeFormDefault: React.FC<TFDT> = ({id}) => {

  return (
    <section className={"flex pt-20 top-0 relative w-full justify-center items-center"}>
      <Widget
        id={id}
        className="z-100 w-full min-h-[800px]"
      />
    </section>
  );
};