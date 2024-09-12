import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image"
const setupData = [
  {
    text: "Take it out of the Box",
    icon: "https://www.svgrepo.com/show/141836/box-get-out.svg"
  },{
    text: "Clamp it around the ear",
    icon: "https://www.svgrepo.com/show/65675/ear.svg"
  },{
    text:"Turn it on",
    icon: "https://www.svgrepo.com/show/388838/turn-on.svg"
  },{
    text: "Start monitoring",
    icon: "https://www.svgrepo.com/show/81716/pulse.svg"
  },
];

export const Setup = () => {
  return (
    <section className={"w-full flex  flex-col py-20  "}>
      <SectionTitle
        subTitle={"Save time - every time"}
        title={"Almost no setup time"}
        des={""}
        center
      />
      <div className={"flex md:flex-row my-5 flex-col w-full items-start justify-start px-5"}>
        {setupData.map((item, i) => (
          <div className={"flex flex-col md:w-1/4 w-full items-center justify-center"}>
            <div className={"relative w-[100px] flex justify-center items-center h-[100px] rounded-full bg-white"}>
              <Image src={item.icon} alt={item.icon} width={60} height={60}/>
            </div>
            <div className={"flex flex-col items-start justify-start"}>
              <p className={""}>
                {i + 1}.
              </p>
              <p className={"text-xl text-gray-200 text-center gap-y-4 font-bold leading-tight sm:text-2xl sm:leading-snug lg:text-2xl lg:leading-[1.2]"}>
                {item.text}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
)
}