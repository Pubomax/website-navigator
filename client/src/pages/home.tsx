import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { DirectOfferCTA } from "@/components/sections/direct-offer-cta";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeDo />
      <SolutionsGrid />
      <DirectOfferCTA />
      <WhyChooseUs />
      <CaseStudies />
    </main>
  );
}