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
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "C-1",
        path: "/#c1",
        newTab: false,
      },{
        id: 636,
        title: "Extensions",
        path: "/under-construction",
        newTab: false,
      },
    ]
  },
  {
    id: 5,
    title: "Software",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Cloud",
        path: "/under-construction",
        newTab: false,
      },{
        id: 63,
        title: "API",
        path: "/under-construction",
        newTab: false,
      },{
        id: 63,
        title: "Hub",
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
        title: "Who we are",
        path: "/who-we-are",
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
  {
    id: 5,
    title: "FAQ",
    newTab: false,
    path: "/#faq1"
  },
];
export default menuData;

/*
  {
    id: 6,
    title: "Robotics",
    newTab: false,
    submenu: [
      {
        id: 63,
        title: "Roboter Arm for home",
        path: "/drones",
        newTab: false,
      },{
        id: 63,
        title: "or for companies,",
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
        title: "Proteor Leg",
        path: "/category/bioware/proteor/leg",
        newTab: false,
      },{
        id: 63,
        title: "Apogee Exo Skeleton",
        path: "/bioware/apogee-exo-skeleton",
        newTab: false,
      },/*{
        id: 63,
        title: "Utils, Extensions & Improvements",
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


  {
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
 */