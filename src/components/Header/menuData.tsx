import { Menu } from "@/types/menu";

const menuData: Menu[] = [

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
        path: "/contact",
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
