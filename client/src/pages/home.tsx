import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ServicesGrid />
      <CaseStudies />
    </main>
  );
}