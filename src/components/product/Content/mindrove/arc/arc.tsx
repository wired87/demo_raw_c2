import {MovieBoxLoop} from "@/components/Box/MovieLikeBox/MovieBoxLoop";
import {arcBoxC} from "@/components/product/Content/mindrove/arc/data";
const titleD = {
  subTitle: "",
  title: "",
  des: "",
}
export const Arc = () => {
  return(
    <MovieBoxLoop data={arcBoxC} titleD={titleD} />
  )
}