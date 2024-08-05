import { Menu } from "@/types/menu";

const menuData: Menu[] = [

  {
    id: 2,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 3,
    title: "Techniques",
    newTab: false,
    path: "/"
  },
  {
    id: 5,
    title: "Companies",
    newTab: false,
    path: "/"
  },
  {
    id: 6,
    title: "Who we are?",
    newTab: false,
    submenu: [
      {
        id: 63, 
        title: "About Us",
        path: "/about",
        newTab: false,
      },{
        id: 63,
        title: "Imprint",
        path: "/imprint",
        newTab: false,
      },{
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "For clinicians",
    newTab: false,
    path: "/"
  },
];
export default menuData;


/*
{
    id: 2,
    title: "Head",
    newTab: false,
    submenu: [
      {
        id: 99,
        title: "BCI's",
        path: "/about",
        newTab: false,
      },
      {
        id: 5555,
        title: "Eye",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 61,
        title: "Updates",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "Kits",
        path: "/pricing",
        newTab: false,
      },
    ]
  },
  {
    id: 3,
    title: "Body",
    newTab: false,
    submenu: [
      {
        id: 559,
        title: "Arm",
        path: "/arm",
        newTab: false,
      },{
        id: 666,
        title: "Leg",
        path: "/contact",
        newTab: false,
      },{
        id: 999,
        title: "Other",
        path: "/contact",
        newTab: false,
      },
    ]
  },
  {
    id: 5,
    title: "Extensions",
    newTab: false,
    submenu: [
      {
        id: 99,
        title: "Fingers",
        path: "/about",
        newTab: false,
      },
      {
        id: 5555,
        title: "Cyber arm extensions",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 11111111111,
        title: "Cyber legs extensions",
        path: "/contact",
        newTab: false,
      },
    ]
  },
  {
    id: 6,
    title: "Enterprise",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Cooperation",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;

 */