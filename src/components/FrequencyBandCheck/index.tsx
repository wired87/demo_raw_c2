import Image from "next/image"
import SectionTitle from "@/components/Common/SectionTitle";


const data = [
  {
    icon: "images/algorithm.svg",
    text:"Create Code For The Cell"
  },{
    icon: "images/bloom.svg",
    text:"Grow it in the lab"
  },{
    icon: "images/stem_cell_glass.webp",
    text:"Implement in your project"
  },
];


const check = "https://www.svgrepo.com/show/356736/checkmark.svg";


export const CellSum = () => {
  return(
    <section className={"w-full flex  py-15 flex-col "}>
      <SectionTitle
        subTitle={""}
        title={"Get a round about insight view about your mental state"}
        des={""}
        center
      />
      <div className={"w-full flex flex-row "}>
        {data.map((item, index) => (
          <div className={"w-1/5 flex gap-y-6 items-center justify-center flex-col"} key={index}>
            <div className={"rounded-full bg-white flex justify-center items-center w-[100px] h-[100px]"}>
            </div>
            <div className={"flex flex-row justify-center items-center gap-x-1 text-center align-middle"}>
              <Image src={check} alt={check} width={20} height={20} className={"rounded-full"}/>
              <p className={"dark:text-white text-black text-center"}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
      )
      }