import Image from "next/image";
import MiniContact from "@/components/startupBB/mini_contact";

export const StartBBMain = () => {
  return (
    <div className="w-full h-full bg-black justify-center items-center" >
      <div>
        <h3 className="heading">
        BestBrain.tech
      </h3>
      <h5 className="subH">We are making the best of You!</h5>
      </div>
      <div className="flex justify-center items-center bg-black" >
      <Image
        src="https://i.pinimg.com/originals/a4/a5/88/a4a58852928c1eb6f86d12ca33020309.gif"
        alt="GIF"
        className="rounded-2xl shadow-lg"
      />
    </div>
      <MiniContact />
    </div>
  )

}