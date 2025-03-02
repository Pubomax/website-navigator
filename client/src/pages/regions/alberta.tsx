import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Transformation Numérique en Alberta" 
    : "Digital Transformation in Alberta",
  subtitle: isPathFrench
    ? "Stimuler l'innovation et l'excellence numérique dans toute l'Alberta, du secteur énergétique de Calgary à la scène technologique émergente d'Edmonton."
    : "Driving innovation and digital excellence across Alberta, from Calgary's energy sector to Edmonton's emerging tech scene.",
  expertise: {
    title: isPathFrench ? "Expertise Locale" : "Local Expertise",
    content: isPathFrench
      ? "Notre équipe de l'Alberta apporte des connaissances spécialisées en technologie énergétique, automatisation industrielle et innovation numérique pour les industries traditionnelles. Nous comprenons les défis uniques de l'économie diversifiée de l'Alberta."
      : "Our Alberta team brings specialized knowledge in energy technology, industrial automation, and digital innovation for traditional industries. We understand the unique challenges of Alberta's diverse economy."
  },
  industries: {
    title: isPathFrench ? "Industries que Nous Servons en Alberta" : "Industries We Serve in Alberta",
    list: isPathFrench ? [
      "Énergie et Ressources Naturelles",
      "Agriculture et Agrotechnologie",
      "Fabrication et Industrie",
      "Santé et Sciences de la Vie",
      "Logistique et Transport"
    ] : [
      "Energy & Natural Resources",
      "Agriculture & Agtech",
      "Manufacturing & Industrial",
      "Healthcare & Life Sciences",
      "Logistics & Transportation"
    ]
  },
  presence: {
    title: isPathFrench ? "Notre Présence en Alberta" : "Our Alberta Presence",
    content: isPathFrench
      ? "Avec des bureaux à Calgary et Edmonton, nous fournissons des services complets de transformation numérique dans toute l'Alberta. Notre équipe combine une connaissance approfondie de l'industrie avec une expertise technologique de pointe pour stimuler l'innovation et la croissance."
      : "With offices in Calgary and Edmonton, we deliver comprehensive digital transformation services throughout Alberta. Our team combines deep industry knowledge with cutting-edge technology expertise to drive innovation and growth."
  },
  cta: {
    primary: isPathFrench ? "Contactez Notre Équipe Alberta" : "Contact Our Alberta Team",
    secondary: isPathFrench ? "Voir les Succès en Alberta" : "View Alberta Success Stories"
  }
});

export default function Alberta() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">{content.title}</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              {content.subtitle}
            </p>

            <h2>{content.expertise.title}</h2>
            <p>
              {content.expertise.content}
            </p>

            <h2>{content.industries.title}</h2>
            <ul>
              {content.industries.list.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>

            <h2>{content.presence.title}</h2>
            <p>
              {content.presence.content}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>
                  {content.cta.secondary}
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}