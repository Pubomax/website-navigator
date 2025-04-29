import { Hero } from "@/components/sections/hero";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CaseStudies } from "@/components/sections/case-studies";
import { DirectOfferCTA } from "@/components/sections/direct-offer-cta";
import { PageTitle } from "@/components/page-title";
import { useLocation } from "wouter";
import { ExperienceBadge, ExperienceBannerFull } from "@/components/experience-badge";
import { MontrealFocus } from "@/components/sections/montreal-focus";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { AiSimplifiedSection } from "@/components/sections/ai-simplified";
import { LocalTestimonialsSection } from "@/components/sections/local-testimonials";
import { WorkLessCalculator } from "@/components/work-less-calculator";

export default function Home() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  return (
    <main className="w-full">
      <PageTitle 
        pageKey="home"
        customTitle={isPathFrench ? "Automatisation IA à Montréal | Gagnez Plus, Travaillez Moins | Groupe Minecore" : "AI Automation in Montreal | Make More Money, Work Less | Minecore Group"}
        customDescription={isPathFrench ? "Solutions d'automatisation IA pour les PME à Montréal. Augmentez vos revenus et réduisez votre temps de travail avec nos solutions personnalisées. 20 ans d'expérience." : "AI automation solutions for small businesses in Montreal. Increase your revenue and reduce your workload with our tailored solutions. 20 years of experience."}
        keywords="AI automation Montreal, small business automation, make more money work less, business AI solutions, lead generation Montreal, sales automation Quebec, AI for small business, Montreal AI services" 
        imageUrl="https://www.minecoregroup.com/images/montreal-business-automation.jpg"
      />
      
      {/* Add Experience Badge to Hero */}
      <div className="relative">
        <Hero />
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <ExperienceBadge className="animate-pulse" />
        </div>
      </div>
      
      {/* Banner about experience */}
      <ExperienceBannerFull />
      
      {/* Keep What We Do section */}
      <WhatWeDo />
      
      {/* Add Montreal Focus section */}
      <MontrealFocus />
      
      {/* Add Direct Offer CTA */}
      <DirectOfferCTA />
      
      {/* Add Before/After section */}
      <BeforeAfterSection />
      
      {/* Solutions Grid moved to dedicated solutions page */}
      
      {/* Keep Why Choose Us section */}
      <WhyChooseUs />
      
      {/* Add AI Simplified section */}
      <AiSimplifiedSection />
      
      {/* Work Less Calculator is now in the Hero section */}
      
      {/* Add Local Testimonials */}
      <LocalTestimonialsSection />
      
      {/* Keep Case Studies */}
      <CaseStudies />
    </main>
  );
}