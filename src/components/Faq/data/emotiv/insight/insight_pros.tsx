import {DataTypes} from "@/components/Faq/data/dataInterface";
import { HiMiniSignal } from "react-icons/hi2";
import { GiGearStickPattern } from "react-icons/gi";
import { TbAnalyze } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";

export const insightPros: DataTypes[] = [
  {
    text: "Based on CeeGrid",
    paragraph: "Inspired by the CeeGrid by Stefan Debener",
    icon: (<GiGearStickPattern size={20} color={"white"} />),  
  },
  {
    text: "High-Quality EEG and ECG Sensors",
    paragraph: "10 EEG and 2 ECG electrodes for accurate and reliable brainwave and health monitoring.",
    icon: (<LuBrainCircuit size={20} color={"white"} />),
  },

  {
    text: "Create your personalized space",
    paragraph: "Connect the C-1 to your smart home devices for maximized personalization of your zone.",
    icon: (<TbAnalyze size={20} color={"white"} />),  
  },
];

export const insightPros2: DataTypes[] = [
  {
    text: "Removes Interferences and Artifacts",
    paragraph: "Removes Interferences and Artifacts.",
    icon: (<CiFilter size={20} color={"white"} />),  
  },
  {
    text: "9-Axis Sensor",
    paragraph: "Enables limitless research and diverse sample sets.",
    icon: (<HiMiniSignal size={20} color={"white"} />),
  },
  {
    text: "Minimal Set-up time",
    paragraph: "Just clamp it behind the ear, turn it on and you are ready to go!",
    icon: (<CiFilter size={20} color={"white"} />),  
  },

]