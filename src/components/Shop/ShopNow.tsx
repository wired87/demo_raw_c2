import Link from "next/link";
interface ShopNowT {
  href: string;
  explore: string
}
export const ShopNow = ({ href, explore }) => {
  return(
    <div className={"w-full flex items-center flex-col mt-7"}>
      <p className="mt-7 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
        Explore all {explore}
      </p>
      <Link href={href} className="mt-5 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
        Shop Now
      </Link>
    </div>
  );
}