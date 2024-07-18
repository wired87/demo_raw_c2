import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import FunFact from "@/components/product";

export const metadata: Metadata = {
  title: "The future is now!",
  description: "Experience the next stage of evolution up close",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Team />
      <FunFact />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
