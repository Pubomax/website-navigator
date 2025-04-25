import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <ServicesGrid />
      <CaseStudies />
    </main>
  );
}