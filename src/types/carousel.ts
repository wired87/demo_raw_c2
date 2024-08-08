import {ReactNode} from "react";

export interface SliderDataT {
  comp?: string;
  img?: string;
  video?: string;
  heading: string;
  headingTwo?: string
  des: string;
  btn: {
    path: string;
    text: string;
  }
}
export interface CItemT {
  item: SliderDataT;
}

export interface CListT {
  data: SliderDataT[];
  CustomItem?: ReactNode;
}

export interface ImageListT {
  media:  string[]
}