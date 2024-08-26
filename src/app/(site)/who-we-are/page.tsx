import { Metadata } from "next";
import {WhoWeAreSingle} from "@/components/who-we-are";
import SectionTitle from "@/components/Common/SectionTitle";


export const metadata: Metadata = {
  title:
    "Construction Placeholder Page",
  description: "",
};

const persons = [
  {
    img: "/images/about/benedikt.jpeg",
    name: "Benedikt Sterra",
    role: "CEO",
    skills: [
      "Python",
      "TypeScript",
      "React",
      "React Native",
      "Backend",
      "Marketing",
      "Vectors",
      "Neural decoder"
    ],
    des: "Through his own online businesses and his software Company BotWorld.cloud, Benedikt could collect a lot of experience in " +
      "Management and Software Development. In combination with his inquisitiveness and scientiffic and visionary vein," +
      "Benedikt makes the perfect fit as a CEO for Best Brain",
    urls: {
      gh: "https://github.com/wired87",
      in: "https://www.linkedin.com/in/benedikt-sterra-804300263/",
    },
    contact: {
      tel: "+49 (0) 176 73867952",
      mail: "derBenedikt.Sterra@gmail.com"
    }
  },
  {
    img: "/images/about/hussin.png",
    name: "Hussin El Rashidy",
    role: "CTO",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Biomedical AI",
      "Signal Processing",
      "MATLAB",
    ],
    des: "Hussin finished his Bachelor of Science 2018 in Biomedical Engineering and decided to continue his career at " +
      "TU-Dresden where he finished devers projects focusing on machine learning and bio engeneering." +
      "Currently he works as Student Research Assistant in Center for Regenerative Therapies where he Explored the computational role of the 2 blades of Dentate Gyrus (DG) in various memory\n" +
      "processes in the mouse brain.",
    urls: {
      gh: "https://github.com/HuRashidy",
      in: "https://www.linkedin.com/in/hussin-elrashidy/",
    },
    contact: {
      tel: "+49 (0) 155 66436856",
      mail: "hussin_elrashidy@mailbox.tu-dresden.de"
    }
  },
]


const WhoWeAre = () => {
  return (
    <section className={"w-full flex  py-30 flex-col min-h-[1300px]"}>
      <SectionTitle
        subTitle={"Meet the team"}
        title={"Who we are"}
        des={""}
        center
      />
      <div className={

        "w-full grid md:grid-rows-1 grid-rows-2 md:grid-cols-2 grid-cols-1 " +
        "items-start flex-col justify-start gap-y-7 py-30"}>


        {persons.map((item, i) => (
          <WhoWeAreSingle item={item} key={i}/>
        ))}
      </div>
    </section>

  );
};

export default WhoWeAre;
