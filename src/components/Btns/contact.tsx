import Link from "next/link";
import React from "react";
interface BtnT {
  text?: string;
  path?: string;

}
export const DefaultBtn: React.FC<BtnT> = ({text, path} ) => {
  return(
    <Link
      href={path || "/contact"}
      className="rounded-lg ml-5 bg-dark opacity-70 px-6 py-3 text-base font-medium text-white flex justify-center items-center
      duration-300 ease-in-out hover:bg-waterloo/90 dark:bg-white/10 dark:hover:bg-white/20 max-w-[300px]"
    >
      {text || "Contact"}
    </Link>
  )
}