import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Transformation Numérique en Colombie-Britannique" 
    : "Digital Transformation in British Columbia",
  subtitle: isPathFrench
    ? "Accompagnement des entreprises à travers la Colombie-Britannique avec des solutions numériques innovantes, du pôle technologique de Vancouver à l'écosystème numérique croissant de Victoria."
    : "Empowering businesses across British Columbia with innovative digital solutions, from Vancouver's tech hub to Victoria's growing digital ecosystem.",
  expertise: {
    title: isPathFrench ? "Expertise Locale" : "Local Expertise",
    content: isPathFrench
      ? "Notre équipe de Colombie-Britannique est spécialisée dans la technologie, les technologies propres, les médias numériques et les solutions durables. Nous comprenons les défis et les opportunités uniques du paysage commercial diversifié de la C.-B."
      : "Our British Columbia team specializes in technology, clean tech, digital media, and sustainable solutions. We understand the unique challenges and opportunities in BC's diverse business landscape."
  },
  industries: {
    title: isPathFrench ? "Industries que Nous Servons en C.-B." : "Industries We Serve in BC",
    list: isPathFrench ? [
      "Technologie et Développement Logiciel",
      "Technologies Propres et Énergies Renouvelables",
      "Médias Numériques et Divertissement",
      "Ressources Naturelles et Foresterie",
      "Tourisme et Hôtellerie"
    ] : [
      "Technology & Software Development",
      "Clean Technology & Renewable Energy",
      "Digital Media & Entertainment",
      "Natural Resources & Forestry",
      "Tourism & Hospitality"
    ]
  },
  presence: {
    title: isPathFrench ? "Notre Présence en C.-B." : "Our BC Presence",
    content: isPathFrench
      ? "Avec des bureaux à Vancouver et Victoria, nous fournissons des services complets de transformation numérique dans toute la Colombie-Britannique. Notre équipe locale combine expertise régionale et savoir-faire mondial pour offrir des solutions qui stimulent la croissance et l'innovation."
      : "With offices in Vancouver and Victoria, we provide comprehensive digital transformation services throughout British Columbia. Our local team combines regional knowledge with global expertise to deliver solutions that drive growth and innovation."
  },
  cta: {
    primary: isPathFrench ? "Contactez Notre Équipe C.-B." : "Contact Our BC Team",
    secondary: isPathFrench ? "Voir les Succès en C.-B." : "View BC Success Stories"
  }
});

export default function BritishColumbia() {
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