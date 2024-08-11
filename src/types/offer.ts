export interface ConfT {
  mediaSize?: {
    h?: string;
    w?: string;
  };
  classAdd?: string;
}
export interface SectionT {
  comp?: string;
  media: string | string[];
  heading: string;
  des: string;
  btn?: {
    path: string;
    text: string;
  }
  conf?: ConfT;
}

export interface SectionHeaderT {

  heading: string;
  subTitle: string;
  des: string;

}

export interface SectionsCompT {
  data: SectionT[];
  sectionHeader: SectionHeaderT;

}