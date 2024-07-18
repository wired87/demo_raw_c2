import { Feature } from "@/types/feature";
import { PiNumberCircleFive } from "react-icons/pi";
import { TiWaves } from "react-icons/ti";
import { FaBluetoothB } from "react-icons/fa";
import { IoBatteryChargingSharp } from "react-icons/io5";

const emoInsightData: Feature[] = [
  {
    id: 1,
    icon: (
      <PiNumberCircleFive size={20} color={"white"}/>
    ),
    title: "5-Channel EEG",
    paragraph: "Whole-brain sensing",
    btn: "",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <TiWaves size={20} color={"white"}/>
    ),
    title: "Semi-Dry Polymer Sensors",
    paragraph: "No need for gel or saline",
    btn: "",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <FaBluetoothB size={20} color={"white"}/>
    ),
    title: "Wireless Connectivity",
    paragraph: "Connects to PC, Mac & Tablet devices",
    btn: "",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <IoBatteryChargingSharp size={20} color={"white"}/>
    ),
    title: "Rechargeable",
    paragraph: "Up to 20 hours of battery life",
    btn: "",
    btnLink: "/#",
  },

];
export default emoInsightData;
