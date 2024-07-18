import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Eye",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Body",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Extensions",
    path: "/blogs",
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
    title: "Mind",
    newTab: false,
    submenu: [
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
      {
        id: 63,
        title: "Hardware",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
