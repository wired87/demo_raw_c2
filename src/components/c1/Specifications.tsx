import {LeftTopDots} from "@/components/dot/leftTop";

/*
"10 EEG, 2 ECG Electrodes and a 9-Axis chip provide a detailed insight about your mental and " +
"physical state and transform your the C-1-BCI to a next gen health tracker.",
 */

const data = [
  {
    title: "Round about monitoring",
    text: "10 EEG, 2 ECG Electrodes and a 9-Axis chip provide a detailed insight about your mental and " +
      "physical state and transform your the C-1-BCI to a next gen health tracker.",
  },
  {
    title: "Comfort Design",
    text: "The unobtrusive design brings the benefits from modern BCIs to your daily life",

  },{
    title: "Adaptive Learning",
    text: "The C-1-BCI continuously learns from you " +
      " and ensures that the device becomes more attuned to your " +
      "individual needs.",
  },
  {
    title: "Seamless Connectivity",
    text: "Effortlessly sync your C-1-BCI with your smartphone or tablet " +
      "to interact with your favorite health apps and smart home devices or " +
      "to track your progress within the mobile app."
  },
]


export const Specifications = () => {
  return(
    <div className={"w-full flex-col relative h-full flex justify-start items-start px-9"}>
      <ul className={"w-full flex h-full gap-y-6 justify-start items-baseline flex-col"}>
        {data.map((item, i) => (
          <li className={"flex gap-y-2 mb-8 flex-col items-start justify-start"} key={i}>
            <p
              className={" text-3xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"}>{item.title}</p>
            <p className={"text-left text-lg font-semibold"}>{item.text}</p>
          </li>
        ))}
      </ul>
      <LeftTopDots/>
    </div>
  )
}