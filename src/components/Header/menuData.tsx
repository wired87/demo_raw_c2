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
    title: "BCI",
    newTab: false,
    path: "/category/bci/"
  },{
    id: 3,
    title: "Bioware",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Ability Hand™",
        path: "/bioware/ability-hand",
        newTab: false,
      },{
        id: 63,
        title: "Leg ",
        path: "/under-construction",
        newTab: false,
      },{
        id: 63,
        title: "Utils, Extensions & Improvements",
        path: "/under-construction",
        newTab: false,
      },
    ]
  },{
    id: 3,
    title: "Booster",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Nano Bot's",
        path: "/under-construction",
        newTab: false,
      },{
        id: 63,
        title: "Utils",
        path: "/under-construction",
        newTab: false,
      },
      {
        id: 63,
        title: "Idea",
        path: "/under-construction",
        newTab: false,
      },
    ]
  },
  {
    id: 6,
    title: "Drones",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Consumer",
        path: "/drones",
        newTab: false,
      },{
        id: 63,
        title: "Gouvernment",
        path: "/imprint",
        newTab: false,
      },{
        id: 63,
        title: "Military",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Clinicians",
    newTab: false,
    path: "/"
  },
];
export default menuData;
/*
{
    id: 6,
    title: "Company",
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
      },{
        id: 73,
        title: "Investors",
        path: "/contact",
        newTab: false,
      },
    ],
  },
 */