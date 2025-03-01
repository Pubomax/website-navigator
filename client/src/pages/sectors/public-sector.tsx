import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour le Secteur Public" : "Public Sector Solutions",
  subtitle: isPathFrench 
    ? "Modernisez les opérations du secteur public avec des solutions numériques qui améliorent les services aux citoyens, l'efficacité et la transparence des opérations gouvernementales."
    : "Modernize public sector operations with digital solutions that enhance citizen services, improve efficiency, and ensure transparency in government operations.",
  challenges: isPathFrench ? [
    "Prestation de services numériques",
    "Modernisation des systèmes existants",
    "Sécurité et confidentialité des données",
    "Conformité réglementaire",
    "Contraintes budgétaires",
    "Engagement citoyen"
  ] : [
    "Digital service delivery",
    "Legacy system modernization",
    "Data security and privacy",
    "Regulatory compliance",
    "Budget constraints",
    "Citizen engagement"
  ],
  solutions: isPathFrench ? [
    {
      title: "Services Gouvernementaux Numériques",
      description: "Plateformes numériques complètes pour une prestation et un engagement efficaces des services aux citoyens."
    },
    {
      title: "Modernisation des Systèmes Existants",
      description: "Modernisation stratégique des systèmes existants avec une interruption minimale des services."
    },
    {
      title: "Analyse du Secteur Public",
      description: "Analyse des données pour améliorer l'élaboration des politiques et la prestation des services."
    }
  ] : [
    {
      title: "Digital Government Services",
      description: "Comprehensive digital platforms for efficient citizen service delivery and engagement."
    },
    {
      title: "Legacy System Modernization",
      description: "Strategic modernization of legacy systems with minimal disruption to services."
    },
    {
      title: "Public Sector Analytics",
      description: "Data-driven insights for improved policy-making and service delivery."
    }
  ],
  process: isPathFrench ? [
    "Évaluation de l'État Actuel",
    "Stratégie de Transformation Numérique",
    "Planification de la Sécurité et de la Conformité",
    "Mise en Œuvre Progressive",
    "Programmes de Formation du Personnel",
    "Amélioration Continue"
  ] : [
    "Current State Assessment",
    "Digital Transformation Strategy",
    "Security and Compliance Planning",
    "Phased Implementation",
    "Staff Training Programs",
    "Continuous Improvement"
  ],
  outcomes: isPathFrench ? [
    "Amélioration de la prestation des services aux citoyens",
    "Amélioration de l'efficacité opérationnelle",
    "Meilleure utilisation des ressources",
    "Transparence accrue",
    "Sécurité et conformité robustes"
  ] : [
    "Enhanced citizen service delivery",
    "Improved operational efficiency",
    "Better resource utilization",
    "Increased transparency",
    "Robust security and compliance"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Vos Services Publics" : "Transform Your Public Services",
    secondary: isPathFrench ? "Voir les Succès du Secteur Public" : "View Public Sector Success Stories"
  }
});

export default function PublicSector() {
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
              <Landmark className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{isPathFrench ? "Défis du Secteur" : "Sector Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Nos Solutions pour le Secteur Public" : "Our Public Sector Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Stratégie de Mise en Œuvre" : "Implementation Strategy"}</h2>
            <ol>
              {content.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>{isPathFrench ? "Résultats Clés" : "Key Outcomes"}</h2>
            <ul>
              {content.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>

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