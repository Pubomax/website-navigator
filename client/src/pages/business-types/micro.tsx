import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Building, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour les Micro-Entreprises" : "Solutions for Micro Enterprises",
  subtitle: isPathFrench 
    ? "Donnez à votre petite entreprise les moyens d'utiliser des solutions numériques abordables et évolutives conçues spécifiquement pour les micro-entreprises comptant jusqu'à 10 employés."
    : "Empower your small business with affordable, scalable digital solutions designed specifically for micro enterprises with up to 10 employees.",
  challenges: isPathFrench ? [
    "Budget et ressources limités",
    "Besoin d'automatisation et d'efficacité",
    "Présence en ligne et marketing",
    "Gestion de la relation client",
    "Comptabilité et facturation de base",
    "Gestion du temps et planification"
  ] : [
    "Limited budget and resources",
    "Need for automation and efficiency",
    "Online presence and marketing",
    "Customer relationship management",
    "Basic accounting and invoicing",
    "Time management and scheduling"
  ],
  solutions: isPathFrench ? [
    {
      title: "Pack Numérique de Démarrage",
      description: "Outils numériques essentiels pour établir et développer votre présence en ligne."
    },
    {
      title: "Automatisation de Base",
      description: "Outils d'automatisation simples mais puissants pour les opérations quotidiennes."
    },
    {
      title: "Outils de Croissance",
      description: "Solutions évolutives qui grandissent avec votre entreprise."
    }
  ] : [
    {
      title: "Digital Starter Package",
      description: "Essential digital tools for establishing and growing your online presence."
    },
    {
      title: "Business Automation Basics",
      description: "Simple yet powerful automation tools for day-to-day operations."
    },
    {
      title: "Growth Enablement Tools",
      description: "Scalable solutions that grow with your business."
    }
  ],
  benefits: isPathFrench ? [
    "Transformation numérique rentable",
    "Amélioration de l'efficacité opérationnelle",
    "Amélioration de l'engagement client",
    "Avantage concurrentiel",
    "Base de croissance évolutive"
  ] : [
    "Cost-effective digital transformation",
    "Improved operational efficiency",
    "Enhanced customer engagement",
    "Competitive advantage",
    "Scalable growth foundation"
  ],
  packages: {
    title: isPathFrench ? "Packs Abordables" : "Affordable Packages",
    name: isPathFrench ? "Pack de Démarrage Micro-Entreprise" : "Micro Enterprise Starter Pack",
    features: isPathFrench ? [
      "Site web et présence en ligne de base",
      "Système CRM simple",
      "Outils d'automatisation de base",
      "Intégration des réseaux sociaux",
      "Outils de marketing par email",
      "Système de support client"
    ] : [
      "Basic website and online presence",
      "Simple CRM system",
      "Basic automation tools",
      "Social media integration",
      "Email marketing tools",
      "Customer support system"
    ],
    price: isPathFrench ? "À partir de 199€/mois" : "Starting from $199/month"
  },
  cta: {
    primary: isPathFrench ? "Commencer Votre Parcours Numérique" : "Start Your Digital Journey",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function MicroEnterprises() {
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
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{isPathFrench ? "Défis Courants" : "Common Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Solutions Adaptées" : "Tailored Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Avantages Clés" : "Key Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h2>{content.packages.title}</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">{content.packages.name}</h3>
              <ul className="space-y-2">
                {content.packages.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground">{content.packages.price}</p>
            </div>

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