import Image from "next/image"
import SectionTitle from "@/components/Common/SectionTitle";


const data = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Greek_lc_theta.svg",
    text:"Theta Waves"
  },{
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Greek_letter_delta.svg",
    text:"Delta Waves"
  },{
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Greek_lc_alpha.svg",
    text:"Alpha Waves"
  },{
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Greek_lc_beta.svg",
    text:"Beta Waves"
  },{
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Greek_lc_gamma.svg",
    text:"Gamme Waves"
  },
];


const check = "https://www.svgrepo.com/show/356736/checkmark.svg";


export const FrequencyBandCheck = () => {
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
              <Image src={item.icon} alt={item.icon} className={"rounded-full"} width={100} height={100}/>
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