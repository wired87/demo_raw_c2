import {SliderDataT} from "@/types/carousel";




export const newsData: SliderDataT[] = [
  {
    video: "",
    heading: "Product Announcement",
    des: "We are happy to announce our first product C-1",
    btn: {
      path: "/#c1",
      text: "Track the progress",
    },
    design: {textColor: "white"}
  },{
    video: "",
    heading: "Join us!",
    des: "You want to be a part of it? We a re looking all time for new scientific team members with a heart for new " +
      "technologies.",
    btn: {
      path: "/contact/join-us",
      text: "Get in touch",
    },
    design: {textColor: "white"}


  },{
    video: "",
    heading: "Soon",
    des: "See whats coming soon!",
    btn: {
      path: "/soon",
      text: "Stay tuned",
    },
    design: {textColor: "white"}
  },
]


