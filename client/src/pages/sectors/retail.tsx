import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour le Commerce de Détail" : "Retail Solutions",
  subtitle: isPathFrench 
    ? "Transformez vos opérations de vente au détail avec des solutions numériques de pointe qui améliorent l'expérience client, optimisent les opérations et stimulent la croissance."
    : "Transform your retail operations with cutting-edge digital solutions that enhance customer experience, streamline operations, and drive growth in the modern retail landscape.",
  challenges: isPathFrench ? [
    "Présence et intégration omnicanale",
    "Gestion des stocks et de la chaîne d'approvisionnement",
    "Expérience client et personnalisation",
    "Analyse des données et insights",
    "Concurrence des géants du e-commerce",
    "Solutions de paiement numérique"
  ] : [
    "Omnichannel presence and integration",
    "Inventory management and supply chain",
    "Customer experience and personalization",
    "Data analytics and insights",
    "Competition from e-commerce giants",
    "Digital payment solutions"
  ],
  solutions: isPathFrench ? [
    {
      title: "Intégration Omnicanale",
      description: "Intégration transparente des canaux de vente en ligne et hors ligne pour une expérience client cohérente."
    },
    {
      title: "Gestion Intelligente des Stocks",
      description: "Systèmes de suivi et d'optimisation des stocks alimentés par l'IA avec analyses prédictives."
    },
    {
      title: "Plateforme d'Analyse Client",
      description: "Outils avancés d'analyse du comportement client et de personnalisation."
    }
  ] : [
    {
      title: "Omnichannel Integration",
      description: "Seamless integration of online and offline retail channels for consistent customer experience."
    },
    {
      title: "Smart Inventory Management",
      description: "AI-powered inventory tracking and optimization systems with predictive analytics."
    },
    {
      title: "Customer Analytics Platform",
      description: "Advanced customer behavior analysis and personalization tools."
    }
  ],
  process: isPathFrench ? [
    "Évaluation des Opérations de Vente",
    "Développement de la Stratégie Numérique",
    "Planification de l'Intégration Technologique",
    "Mise en Œuvre du Programme Pilote",
    "Déploiement Complet",
    "Optimisation Continue"
  ] : [
    "Retail Operations Assessment",
    "Digital Strategy Development",
    "Technology Integration Planning",
    "Pilot Program Implementation",
    "Full-Scale Deployment",
    "Continuous Optimization"
  ],
  metrics: isPathFrench ? [
    "Augmentation de 30% des ventes en ligne",
    "Réduction de 25% des coûts de stock",
    "Amélioration de 40% de l'engagement client",
    "Traitement des commandes 50% plus rapide",
    "Amélioration significative de la satisfaction client"
  ] : [
    "30% increase in online sales conversion",
    "25% reduction in inventory costs",
    "40% improvement in customer engagement",
    "50% faster order fulfillment",
    "Significant improvement in customer satisfaction"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Votre Commerce de Détail" : "Transform Your Retail Business",
    secondary: isPathFrench ? "Voir les Succès du Commerce de Détail" : "View Retail Success Stories"
  }
});

export default function Retail() {
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
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{isPathFrench ? "Défis du Secteur" : "Industry Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Nos Solutions pour le Commerce" : "Our Retail Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Processus de Mise en Œuvre" : "Implementation Process"}</h2>
            <ol>
              {content.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>{isPathFrench ? "Indicateurs de Succès" : "Success Metrics"}</h2>
            <ul>
              {content.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
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
                <Link href={isPathFrench ? "/fr/case-studies" : "/case-studies"}>{content.cta.secondary}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}