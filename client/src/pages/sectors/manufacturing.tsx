import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions Industrielles" : "Manufacturing Solutions",
  subtitle: isPathFrench 
    ? "Solutions de transformation numérique adaptées aux opérations industrielles modernes, améliorant l'efficacité et la productivité grâce à l'intégration de technologies intelligentes."
    : "Digital transformation solutions tailored for modern manufacturing operations, enhancing efficiency and productivity through smart technology integration.",
  challenges: isPathFrench ? [
    "Gestion complexe de la chaîne d'approvisionnement",
    "Optimisation de l'efficacité de production",
    "Contrôle qualité et conformité",
    "Maintenance des équipements et temps d'arrêt",
    "Gestion des ressources et des stocks",
    "Productivité de la main-d'œuvre"
  ] : [
    "Complex supply chain management",
    "Production efficiency optimization",
    "Quality control and compliance",
    "Equipment maintenance and downtime",
    "Resource and inventory management",
    "Workforce productivity"
  ],
  solutions: isPathFrench ? [
    {
      title: "Implémentation d'Usine Intelligente",
      description: "Intégration de capteurs IoT, surveillance en temps réel et systèmes de production automatisés pour créer un environnement de fabrication connecté."
    },
    {
      title: "Maintenance Prédictive",
      description: "Systèmes alimentés par l'IA qui prédisent les pannes d'équipement avant qu'elles ne se produisent, minimisant les temps d'arrêt et les coûts de maintenance."
    },
    {
      title: "Optimisation de la Chaîne d'Approvisionnement",
      description: "Outils d'analyse avancée et d'automatisation pour une gestion rationalisée de la chaîne d'approvisionnement et du contrôle des stocks."
    }
  ] : [
    {
      title: "Smart Factory Implementation",
      description: "Integration of IoT sensors, real-time monitoring, and automated production systems to create a connected manufacturing environment."
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered systems that predict equipment failures before they occur, minimizing downtime and maintenance costs."
    },
    {
      title: "Supply Chain Optimization",
      description: "Advanced analytics and automation tools for streamlined supply chain management and inventory control."
    }
  ],
  process: isPathFrench ? [
    "Évaluation des Processus de Fabrication",
    "Planification de l'Infrastructure Numérique",
    "Stratégie d'Intégration Technologique",
    "Mise en Œuvre du Programme Pilote",
    "Déploiement Complet",
    "Optimisation Continue"
  ] : [
    "Manufacturing Process Assessment",
    "Digital Infrastructure Planning",
    "Technology Integration Strategy",
    "Pilot Program Implementation",
    "Full-Scale Deployment",
    "Continuous Optimization"
  ],
  metrics: isPathFrench ? [
    "Réduction de 20-30% des coûts opérationnels",
    "Amélioration de 40% de l'efficacité des équipements",
    "Réduction de 50% des temps d'arrêt non planifiés",
    "Augmentation de 25% de la production",
    "Amélioration significative du contrôle qualité"
  ] : [
    "20-30% reduction in operational costs",
    "40% improvement in equipment efficiency",
    "50% reduction in unplanned downtime",
    "25% increase in production output",
    "Significant improvement in quality control"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Votre Production" : "Transform Your Manufacturing",
    secondary: isPathFrench ? "Voir les Succès Industriels" : "View Manufacturing Success Stories"
  }
});

export default function Manufacturing() {
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
              <Factory className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{isPathFrench ? "Défis de l'Industrie" : "Industry Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Nos Solutions Industrielles" : "Our Manufacturing Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Processus d'Implémentation" : "Implementation Process"}</h2>
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