import {MainContentHome} from "@/components/Home";
import {Metadata} from "next";


export const metadata: Metadata = {
  title: "The future is now!",
  description: "Experience the next stage of evolution up close",
};
export default async function Home() {

  return (
    <main>
      <MainContentHome />
    </main>
  );
}
