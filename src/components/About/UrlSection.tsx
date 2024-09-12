import Link from "next/link";

export const UrlSection = ()=> {
  return (
    <section className={"w-full h-[300px] px-10 py-20 flex flex-col items-start justify-start"}>
      <p className="text-left text-xl  uppercase text-dark dark:text-white font-bold tracking-[0.3em]">
        For investors
      </p>
      <a href="/deck/deck.pdf" className={"hover:text-blue-900"} download>
        Pitch Deck
      </a>
      <Link className={"hover:text-blue-900"} href={"https://docs.google.com/spreadsheets/d/1oVupRCDE029bhlhDorGct9Yiv5cqgC-kngGUZhImUJ4/edit?gid=0#gid=0"}>
        Task Calculation
      </Link>
    </section>
  )
}