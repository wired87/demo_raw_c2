import { Menu } from "@/types/menu";

export const menuData: Menu[] = [
  {
    id: 2,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 3,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Cell Visualisation",
        path: "/under-construction",
        newTab: false,
      },{
        id: 636,
        title: "The BrainMaster",
        path: "/under-construction",
        newTab: false,
      },
    ]
  },
  {
      id: 6,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "About us",
        path: "/about",
        newTab: false,
      },{
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },{
        id: 63,
        title: "Imprint",
        path: "/imprint",
        newTab: false,
      },
    ],
  },
];
