import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack de Support Intelligent & Centre de Contact" : "Intelligent Support & Contact Center Package",
  subtitle: isPathFrench 
    ? "Transformez votre service client avec des solutions alimentées par l'IA qui offrent un service exceptionnel 24/7."
    : "Transform your customer support with AI-powered solutions that deliver exceptional service 24/7.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Notre Pack de Support Intelligent & Centre de Contact révolutionne les opérations de service client avec des solutions alimentées par l'IA. Nous combinons la technologie avancée avec l'expertise humaine pour créer des expériences de support fluides, efficaces et personnalisées."
      : "Our Intelligent Support & Contact Center Package revolutionizes customer service operations with AI-powered solutions. We combine advanced technology with human expertise to create seamless, efficient, and personalized support experiences."
  },
  features: isPathFrench ? [
    "Assistants Virtuels Alimentés par l'IA",
    "Intégration du Support Omnicanal",
    "Système de Routage Intelligent",
    "Tableau de Bord Analytique en Temps Réel",
    "Gestion Automatisée des Tickets",
    "Analyse et Réponse des Sentiments"
  ] : [
    "AI-Powered Virtual Assistants",
    "Omnichannel Support Integration",
    "Intelligent Routing System",
    "Real-time Analytics Dashboard",
    "Automated Ticket Management",
    "Sentiment Analysis & Response"
  ],
  benefits: isPathFrench ? [
    "Disponibilité du Support Client 24/7",
    "Temps de Réponse Réduits",
    "Amélioration de la Résolution au Premier Contact",
    "Satisfaction Client Accrue",
    "Réduction des Coûts Opérationnels",
    "Opérations de Support Évolutives"
  ] : [
    "24/7 Customer Support Availability",
    "Reduced Response Times",
    "Improved First Contact Resolution",
    "Enhanced Customer Satisfaction",
    "Reduced Operational Costs",
    "Scalable Support Operations"
  ],
  process: isPathFrench ? [
    "Évaluation des Opérations de Support",
    "Conception de Solution Personnalisée",
    "Formation du Modèle d'IA",
    "Intégration & Tests",
    "Formation du Personnel",
    "Optimisation Continue"
  ] : [
    "Support Operations Assessment",
    "Custom Solution Design",
    "AI Model Training",
    "Integration & Testing",
    "Staff Training",
    "Continuous Optimization"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Votre Support" : "Transform Your Support",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function IntelligentSupport() {
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
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{content.overview.title}</h2>
            <p>{content.overview.content}</p>

            <h2>{isPathFrench ? "Fonctionnalités Clés" : "Key Features"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Avantages" : "Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Processus d'Implémentation" : "Implementation Process"}</h2>
            <ol>
              {content.process.map((step) => (
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