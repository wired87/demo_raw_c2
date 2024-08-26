import {LeftTopDots} from "@/components/dot/leftTop";
import SingleFaq from "@/components/Faq/SingleFaq";
import { CiSettings } from "react-icons/ci";

/*
"10 EEG, 2 ECG Electrodes and a 9-Axis chip provide a detailed insight about your mental and " +
"physical state and transform your the C-1-BCI to a next gen health tracker.",
 */

const data = [
  {
    icon: (<CiSettings size={40} color={"white"} />),
    title: "Round about monitoring",
    text: "10 EEG, 2 ECG Electrodes and a 9-Axis chip provide a detailed insight about your mental and " +
      "physical state and transform your the C-1-BCI to a next gen health tracker.",
  },
  {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Comfort Design",
    text: "The unobtrusive design brings the benefits from modern BCIs to your daily life",

  },{
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Adaptive Learning",
    text: "The C-1-BCI continuously learns from you " +
      " and ensures that the device becomes more attuned to your " +
      "individual needs.",
  },
  {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Seamless Connectivity",
    text: "Effortlessly sync your C-1-BCI with your smartphone or tablet " +
      "to interact with your favorite health apps and smart home devices or " +
      "to track your progress within the mobile app."
  },
]


export const Specifications = () => {
  return(
    <div className={"md:w-1/2 w-full flex-col relative flex justify-start items-start px-9"}>
      <ul className={"w-full flex h-full gap-y-6 justify-start items-baseline flex-col"}>
        {data.map((item, i) => (
          <SingleFaq
            key={i}
            question={item.title}
            answer={item.text}
            icon={item.icon}
          />
        ))}
      </ul>
      <LeftTopDots/>
    </div>
  )
}