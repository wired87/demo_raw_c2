import Image from "next/image"





export const SingleOffer = () => {
  return(
    <div className="mt-16">
      <Image
        src="/images/hero/mr.png"
        alt="hero"
        className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
        width={845}
        height={316}
      />
    </div>
  )
}


export const Offers = () => {
  return(
    SingleOffer
  )
}