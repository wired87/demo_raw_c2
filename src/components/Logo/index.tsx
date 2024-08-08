import Image from "next/image";
import Link from "next/link";

export const Logo = (sticky) => {
  return(
    <Link
      href="/"
      className={`ml-5 gap-x-2 align-middle items-center justify-center text-2xl navbar-logo flex ${
        sticky ? "py-2" : "py-5"
      } `}
    >
      <p className={""}>Best</p>
      <Image alt={"image.j"} width={70} height={70} className={"rounded-full "} src={"/images/header/img.png"}/>
      <p>Brain</p>
    </Link>
  )
}