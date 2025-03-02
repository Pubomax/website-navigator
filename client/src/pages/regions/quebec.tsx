import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Transformation Numérique au Québec" 
    : "Digital Transformation in Quebec",
  subtitle: isPathFrench
    ? "Solutions numériques innovantes pour les entreprises québécoises, de Montréal à Québec."
    : "Innovative digital solutions for Quebec businesses, from Montreal to Quebec City.",
  expertise: {
    title: isPathFrench ? "Expertise Locale" : "Local Expertise",
    content: isPathFrench
      ? "Notre équipe québécoise excelle dans les technologies émergentes, l'intelligence artificielle et les solutions d'entreprise adaptées au marché local."
      : "Our Quebec team specializes in emerging technologies, artificial intelligence, and enterprise solutions tailored to the local market."
  },
  industries: {
    title: isPathFrench ? "Industries Desservies" : "Industries We Serve",
    list: isPathFrench ? [
      "Intelligence Artificielle et Technologies",
      "Services Financiers",
      "Aérospatiale et Transport",
      "Sciences de la Vie",
      "Commerce de Détail"
    ] : [
      "Artificial Intelligence & Technology",
      "Financial Services",
      "Aerospace & Transportation",
      "Life Sciences",
      "Retail & Commerce"
    ]
  },
  presence: {
    title: isPathFrench ? "Notre Présence au Québec" : "Our Quebec Presence",
    content: isPathFrench
      ? "Avec des bureaux à Montréal et à Québec, nous offrons des services complets de transformation numérique dans toute la province."
      : "With offices in Montreal and Quebec City, we provide comprehensive digital transformation services throughout the province."
  },
  cta: {
    primary: isPathFrench ? "Contactez Notre Équipe" : "Contact Our Équipe",
    secondary: isPathFrench ? "Voir Nos Réussites" : "View Quebec Success Stories"
  }
});

export default function Quebec() {
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
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            {content.title}
          </h1>

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