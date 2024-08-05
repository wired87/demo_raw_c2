export interface SliderDataT {
  img?: string;
  video?: string;
  heading: string;
  des: string;
  path: string;
}
export interface CItemT {
  item: SliderDataT;
}

export interface CListT {
  data: SliderDataT[];
}
