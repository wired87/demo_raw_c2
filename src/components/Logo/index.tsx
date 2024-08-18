import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoT {
  sticky?: boolean;
}

export const Logo: React.FC<LogoT> = ({sticky}) => {
  return(
    <Link
      href="/"
      className={`gap-x-2 align-middle items-center justify-center text-2xl navbar-logo flex ${
        sticky ? "py-2" : "py-5"
      } `}
    >
      <p className={"text-xs uppercase text-primary text-center font-bold tracking-[0.3em]"}>Best</p>
      <Image alt={"image.j"} width={70} height={70} className={"rounded-full bg-tp"} src={"/images/header/img.png"}/>
      <p className={"text-xs uppercase text-primary text-center font-bold tracking-[0.3em]"}>Brain</p>
    </Link>
  )
}