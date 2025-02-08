import {Metadata} from "next";
import B1 from "@/app/(site)/b1/page";


export const metadata: Metadata = {
  title: "BestBrain",
  description: "",
};
export default async function Home() {

  return (
    <main>
      <B1 />
    </main>
  );
}
