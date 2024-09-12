import Image from "next/image";
import {Chip} from "@nextui-org/chip";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const WhoWeAreSingle = ({item}: {item:any}) => {
  const skills = item.skills;
  return (
    <div className={"w-full px-5 bg-strokedark rounded-2xl overflow-hidden"}>
    <div className="w-full py-5 bg-strokedark  overflow-hidden">
      <div className={"flex justify-center bg-strokedark items-start w-full h-[350px] p-0"}>
        <div className="h-[350px] w-[350px] overflow-hidden  relative bg-strokedark ">
          <Image src={item.img} alt={item.img} fill className={"object-contain  absolute"}/>
        </div>
      </div>
      <div
        className=" px-4  py-[30px] shadow-testimonial  sm:px-[30px]"
        data-wow-delay=".1s"
      >
        <h2 className={"text-white"}>
          {item.name}

        </h2>
        <p className={"text-white mb-3"}>
          {item.role}
        </p>
        <h2 className={"text-white font-semibold"}>
          Skills
        </h2>
        <ul>
          {skills.map((item: any, i: number) => (
            <Chip className={"text-white my-2 mx-1.5 px-2 py-1 text-xs"} color={"primary"} key={i}>{item}</Chip>
          ))}
        </ul>

        <div className="flex items-center gap-4 flex-col py-5">
          <div>
            <h3 className="text-white mb-3 font-semibold ">
              Career Description
            </h3>
            <p className="text-white ">{item.des}</p>
          </div>
        </div>
      </div>

      <div className="flex px-7 items-start gap-4 flex-col py-2 mb-4">
        <h3 className=" mb-3 font-semibold text-white">
          Social Links
        </h3>
        {item?.urls?.gh && (
          <div className={"flex flex-row gap-x-7 align-middle"}>
            <FaGithub color={"white"} size={30}/>
            <Link className={"text-white"} target={"_blank"} href={item.urls.gh}>Github</Link>
          </div>
        )}
        <div className={"flex flex-row gap-x-7 align-middle"}>
          <FaLinkedin color={"white"} size={30}/>
          <Link className={"text-white"} target={"_blank"} href={item.urls.in}>LinkedIn</Link>
        </div>

      </div>
      <div className="flex px-7 items-start gap-4 flex-col py-2 ">
        <h3 className="text-white mb-3 font-semibold dark:text-white">
          Contact
        </h3>
        <div className={"flex flex-row gap-x-7 align-middle"}>
          <FaPhone color={"white"} size={30}/>
          <p className={"text-white"}>{item.contact.tel}</p>
        </div>
        <div className={"flex flex-row gap-x-7 align-middle"}>
          <IoIosMail color={"white"} size={30}/>
          <p className={"text-white"}>{item.contact.mail}</p>
        </div>
      </div>
      </div>
    </div>
  )
}