import { Metadata } from "next";
import {WhoWeAreSingle} from "@/components/who-we-are";
import SectionTitle from "@/components/Common/SectionTitle";
import {UrlSection} from "@/components/About/UrlSection";


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
    des: "Through his online businesses and his software company, BotWorld.cloud, " +
      "Benedikt has gained extensive experience in management and software development. " +
      "Combined with his curiosity, scientific approach, and visionary mindset, " +
      "Benedikt is an ideal CEO for Best Brain.",
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
    des: "Hussin earned his Bachelor of Science in Biomedical Engineering in 2018 and continued his career at TU Dresden, " +
      "working on projects in machine learning and bioengineering. " +
      "He is currently a Student Research Assistant at the Center for Regenerative Therapies",
    urls: {
      gh: "https://github.com/HuRashidy",
      in: "https://www.linkedin.com/in/hussin-elrashidy/",
    },
    contact: {
      tel: "+49 (0) 155 66436856",
      mail: "hussin_elrashidy@mailbox.tu-dresden.de"
    }
  },
  {
    img: "/images/about/ayush.jpg",
    name: "Ayush Dileep",
    role: "CTO",
    skills: [
      "Hardware",
      "C",
      "BCI knowledge & inthusiast",
      "Python",
    ],
    des: "Ayush has been fascinated by BCI and the opportunities behind it since he was a small kid. Today, " +
      "with emerging research and growing interest, he wants use his knowledge to start building own devices.",
    urls: {
      in: "https://www.linkedin.com/in/ayush-dileep-9420a9172/",
    },
    contact: {
      tel: "",
      mail: ""
    }
  },
]


const WhoWeAre = () => {
  return (
    <section className={"w-full flex  py-30 flex-col min-h-[1300px]"}>



      <SectionTitle
        subTitle={""}
        title={"About us"}
        des={""}
        center
      />

      <UrlSection />

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
