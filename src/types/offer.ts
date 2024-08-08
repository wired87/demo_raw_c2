
export interface SectionT {
  media: string | string[];
  heading: string;
  des: string;
  btn?: {
    path: string;
    text: string;
  }
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