import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour Grandes Entreprises" : "Enterprise Solutions",
  subtitle: isPathFrench 
    ? "Solutions de transformation numérique de niveau entreprise pour les grandes organisations de plus de 500 employés, axées sur l'évolutivité mondiale, la sécurité et l'innovation."
    : "Enterprise-grade digital transformation solutions for large organizations with 500+ employees, focusing on global scalability, security, and innovation.",
  challenges: isPathFrench ? [
    "Gestion des opérations mondiales",
    "Transformation numérique à l'échelle de l'entreprise",
    "Intégration de systèmes complexes",
    "Sécurité des données et conformité",
    "Déploiement multi-régions",
    "Gestion du changement à grande échelle"
  ] : [
    "Global operations management",
    "Enterprise-wide digital transformation",
    "Complex system integration",
    "Data security and compliance",
    "Multi-region deployment",
    "Change management at scale"
  ],
  solutions: isPathFrench ? [
    {
      title: "Infrastructure Numérique Mondiale",
      description: "Solutions d'infrastructure numérique complètes pour les opérations mondiales."
    },
    {
      title: "Plateforme IA Entreprise",
      description: "Solutions d'IA avancées pour les opérations commerciales et l'analyse à grande échelle."
    },
    {
      title: "Suite Sécurité & Conformité",
      description: "Solutions de sécurité de niveau entreprise avec gestion de la conformité mondiale."
    }
  ] : [
    {
      title: "Global Digital Infrastructure",
      description: "Comprehensive digital infrastructure solutions for worldwide operations."
    },
    {
      title: "Enterprise AI Platform",
      description: "Advanced AI solutions for large-scale business operations and analytics."
    },
    {
      title: "Security & Compliance Suite",
      description: "Enterprise-grade security solutions with global compliance management."
    }
  ],
  benefits: isPathFrench ? [
    "Excellence opérationnelle mondiale",
    "Sécurité et conformité renforcées",
    "Capacités avancées d'analyse de données et d'IA",
    "Intégration transparente des systèmes",
    "Agilité organisationnelle améliorée"
  ] : [
    "Global operational excellence",
    "Enhanced security and compliance",
    "Advanced data analytics and AI capabilities",
    "Seamless system integration",
    "Improved organizational agility"
  ],
  package: {
    title: isPathFrench ? "Pack de Transformation Entreprise" : "Enterprise Transformation Package",
    name: isPathFrench ? "Solutions Entreprise Mondiales" : "Global Enterprise Solutions",
    features: isPathFrench ? [
      "Déploiement d'infrastructure mondiale",
      "IA et automatisation d'entreprise",
      "Mesures de sécurité avancées",
      "Support multi-régions",
      "Solutions d'intégration sur mesure",
      "Support entreprise dédié"
    ] : [
      "Global infrastructure deployment",
      "Enterprise AI and automation",
      "Advanced security measures",
      "Multi-region support",
      "Custom integration solutions",
      "Dedicated enterprise support"
    ],
    price: isPathFrench ? "Prix entreprise personnalisé" : "Custom enterprise pricing"
  },
  cta: {
    primary: isPathFrench ? "Contacter les Ventes Entreprise" : "Contact Enterprise Sales",
    secondary: isPathFrench ? "Voir les Succès Entreprise" : "View Enterprise Success Stories"
  }
});

export default function LargeEnterprises() {
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
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{isPathFrench ? "Défis Entreprise" : "Enterprise Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Solutions Entreprise" : "Enterprise Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Avantages Stratégiques" : "Strategic Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h2>{content.package.title}</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">{content.package.name}</h3>
              <ul className="space-y-2">
                {content.package.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground">{content.package.price}</p>
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