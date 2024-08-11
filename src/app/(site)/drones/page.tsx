
import SubHeroCarousel from "@/components/Hero/SubHero";
import {droneHeading} from "@/app/(site)/drones/data";

type Props = {
  params: { slug: string };
};

export default async function Drone({ params }: Props) {




  return (
    <>
      <SubHeroCarousel data={droneHeading} />
    </>
  );
}
