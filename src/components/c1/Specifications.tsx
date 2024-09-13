import {LeftTopDots} from "@/components/dot/leftTop";
import SingleFaq from "@/components/Faq/SingleFaq";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";

/*
"10 EEG, 2 ECG Electrodes and a 9-Axis chip provide a detailed insight about your mental and " +
"physical state and transform your the C-1-BCI to a next gen health tracker.",
 */

const data = [
  {
    icon: (<CiSettings size={40} color={"white"} />),
    title: "Hybrid pioneer",
    text: "5 dry EEG, 1 ECG electrode, 1 EMG electrode and a 9-Axis chip transform the C1 into a next gen fitness tracker.",
  },
  {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Adaptable Design",
    text: "Transform the C1 with adjustable add on electrodes to a powerful BCI",

  },
  {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "API & SDK available",
    text: "Expand our pre defined actions with your "
  },
]


const data2 = [
  {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Adaptive Learning",
    text: "The C-1-BCI continuously learns from you " +
      " and ensures that the device becomes more attuned to your " +
      "individual needs.",
  },
  {
    icon: (<CiSettings size={40} color={"white"} />),
    title: "Sweat proof",
    text: "Reusable adhesive silicone from recycled plastic guarantees stable comfort in your activity.",
  },
 {
    icon:  (<CiSettings size={40} color={"white"} />),
    title: "Long battery life",
    text: "The C1 is equipped for a min life cycle of 8h",
  },

];


export const Specifications = () => {
  return (
    <div
      className="w-full relative grid grid-rows-2 grid-cols-2 justify-center items-center lg:grid-rows-1 lg:grid-cols-3 pt-20 px-9">
      {/* First List */}
      <ul
        className="w-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 row-start-2 row-end-3 flex h-full gap-y-6 justify-start items-baseline flex-col">
        {data.map((item, i) => (
          <SingleFaq key={i} question={item.title} answer={item.text} icon={item.icon}/>
        ))}
      </ul>

      {/* Image Section */}
      <div
        className="w-full min-h-[400px] relative lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 row-start-1 row-end-2 col-start-1 col-end-3 justify-center items-center flex h-full">
        <Image
          src="/images/device.png"
          alt="Placeholder image"
          fill
          className="object-contain"
        />
      </div>

      {/* Second List */}
      <ul
        className="w-full lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4 row-start-2 row-end-3 col-start-2 col-end-3 flex h-full gap-y-6 justify-start items-baseline flex-col">
        {data2.map((item, i) => (
          <SingleFaq key={i} question={item.title} answer={item.text} icon={item.icon}/>
        ))}
      </ul>

      <LeftTopDots/>
    </div>


  )
}