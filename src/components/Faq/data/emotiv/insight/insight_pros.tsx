import {DataTypes} from "@/components/Faq/data/dataInterface";
import { HiMiniSignal } from "react-icons/hi2";
import { GiGearStickPattern } from "react-icons/gi";
import { TbAnalyze } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";

export const insightPros: DataTypes[] = [
  {
    text: "10-20 Sensor Configuration, including Pz",
    paragraph: "Semi-dry polymer sensors that easily penetrate through hair.",
    icon: (<GiGearStickPattern size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },
  {
    text: "Democratizing Brain Research",
    paragraph: "Enables limitless research and diverse sample sets.",
    icon: (<HiMiniSignal size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },
  {
    text: "Connects Seamlessly with EMOTIV’s Applications",
    paragraph: "Efficient, real-time EEG data transmission.",
    icon: (<TbAnalyze size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },
];

export const insightPros2: DataTypes[] = [
  {
    text: "Brain Control",
    paragraph: "Harnesses your brain activity for endless BCI opportunities.",
    icon: (<LuBrainCircuit size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },
  {
    text: "Removes Interferences and Artifacts",
    paragraph: "Removes Interferences and Artifacts.",
    icon: (<CiFilter size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },
  {
    text: "Minimal Set-up time",
    paragraph: "Removes Interferences and Artifacts.",
    icon: (<CiFilter size={20} color={"white"} />), // Replace YourIconComponent with your actual icon component if needed
  },

]