import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Brain, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack de Conseil en Transformation Numérique" : "Digital Transformation Consulting Package",
  subtitle: isPathFrench 
    ? "Conseils experts et planification stratégique pour guider le parcours de transformation numérique de votre organisation avec succès."
    : "Expert guidance and strategic planning to navigate your organization's digital transformation journey successfully.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Notre Pack de Conseil en Transformation Numérique fournit des conseils complets et une expertise pour aider les organisations à naviguer dans leur parcours de transformation numérique. Nous combinons les meilleures pratiques de l'industrie, des stratégies innovantes et des plans de mise en œuvre pratiques pour assurer des résultats de transformation numérique réussis."
      : "Our Digital Transformation Consulting Package provides comprehensive guidance and expertise to help organizations navigate their digital transformation journey. We combine industry best practices, innovative strategies, and practical implementation plans to ensure successful digital transformation outcomes."
  },
  services: isPathFrench ? [
    "Évaluation de la Maturité Numérique",
    "Développement de la Stratégie de Transformation",
    "Évaluation de la Stack Technologique",
    "Planification de la Gestion du Changement",
    "Création de la Feuille de Route d'Implémentation",
    "Analyse et Suivi du ROI"
  ] : [
    "Digital Maturity Assessment",
    "Transformation Strategy Development",
    "Technology Stack Evaluation",
    "Change Management Planning",
    "Implementation Roadmap Creation",
    "ROI Analysis and Monitoring"
  ],
  benefits: isPathFrench ? [
    "Feuille de route de transformation claire alignée sur les objectifs commerciaux",
    "Risque réduit dans les initiatives de transformation numérique",
    "Adoption accélérée des technologies numériques",
    "Amélioration de l'efficacité opérationnelle et de l'innovation",
    "Avantage concurrentiel renforcé"
  ] : [
    "Clear transformation roadmap aligned with business goals",
    "Reduced risk in digital transformation initiatives",
    "Accelerated adoption of digital technologies",
    "Improved operational efficiency and innovation",
    "Enhanced competitive advantage"
  ],
  approach: {
    title: isPathFrench ? "Notre Approche" : "Our Approach",
    content: isPathFrench
      ? "Nous suivons une approche structurée du conseil en transformation numérique :"
      : "We follow a structured approach to digital transformation consulting:",
    steps: isPathFrench ? [
      "Évaluation des capacités numériques actuelles",
      "Définition des objectifs de transformation",
      "Développement de la stratégie de transformation complète",
      "Création de la feuille de route détaillée de mise en œuvre",
      "Surveillance et optimisation continues"
    ] : [
      "Assessment of current digital capabilities",
      "Definition of transformation goals and objectives",
      "Development of comprehensive transformation strategy",
      "Creation of detailed implementation roadmap",
      "Continuous monitoring and optimization"
    ]
  },
  cta: {
    primary: isPathFrench ? "Planifier une Consultation" : "Schedule a Consultation",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function TransformationConsulting() {
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
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{content.overview.title}</h2>
            <p>{content.overview.content}</p>

            <h2>{isPathFrench ? "Services Clés" : "Key Services"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Avantages" : "Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h2>{content.approach.title}</h2>
            <p>{content.approach.content}</p>
            <ol>
              {content.approach.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                  {content.cta.primary}
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