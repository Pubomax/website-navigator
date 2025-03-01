import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Bot, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack de Démarrage IA & Automatisation" : "AI & Automation Starter Package",
  subtitle: isPathFrench 
    ? "Commencez votre parcours d'IA et d'automatisation avec notre pack de démarrage complet conçu pour les entreprises qui font leurs premiers pas dans l'automatisation intelligente."
    : "Begin your AI and automation journey with our comprehensive starter package designed for businesses taking their first steps into intelligent automation.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Le Pack de Démarrage IA & Automatisation est conçu pour aider les entreprises à débuter leur parcours avec l'intelligence artificielle et l'automatisation. Ce pack fournit des outils essentiels alimentés par l'IA et des solutions d'automatisation qui apportent une valeur immédiate tout en posant les bases d'implémentations plus avancées."
      : "The AI & Automation Starter Package is designed to help businesses begin their journey with artificial intelligence and automation. This package provides essential AI-powered tools and automation solutions that deliver immediate value while laying the foundation for more advanced implementations."
  },
  features: isPathFrench ? [
    "Évaluation de la Préparation à l'IA",
    "Configuration de l'Automatisation de Base",
    "Implémentation de Chatbot",
    "Automatisation de l'Analyse des Données",
    "Programme de Formation des Employés",
    "Support Technique 24/7"
  ] : [
    "AI Readiness Assessment",
    "Basic Process Automation Setup",
    "Chatbot Implementation",
    "Data Analysis Automation",
    "Employee Training Program",
    "24/7 Technical Support"
  ],
  benefits: isPathFrench ? [
    "Réduction de la charge de travail manuelle grâce à l'automatisation de base",
    "Amélioration du service client avec des chatbots alimentés par l'IA",
    "Prise de décision améliorée grâce à l'analyse automatisée des données",
    "Efficacité opérationnelle accrue",
    "Base pour les futures implémentations d'IA"
  ] : [
    "Reduced manual workload through basic automation",
    "Improved customer service with AI-powered chatbots",
    "Enhanced decision-making with automated data analysis",
    "Increased operational efficiency",
    "Foundation for future AI implementations"
  ],
  process: isPathFrench ? [
    "Évaluation et planification initiales",
    "Configuration de l'automatisation de base",
    "Intégration des outils d'IA",
    "Formation et intégration du personnel",
    "Surveillance et optimisation des performances"
  ] : [
    "Initial assessment and planning",
    "Basic automation setup",
    "AI tools integration",
    "Staff training and onboarding",
    "Performance monitoring and optimization"
  ],
  cta: {
    primary: isPathFrench ? "Commencer" : "Get Started",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function AIAutomationStarter() {
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
              <Bot className="h-8 w-8 text-primary" />
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