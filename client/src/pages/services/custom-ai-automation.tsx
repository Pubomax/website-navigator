import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Brain, Bot, CheckCircle2, Calculator } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { ROICalculator } from "@/components/roi-calculator";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack d'IA & Automatisation Sur Mesure" : "Custom AI & Automation Package",
  subtitle: isPathFrench 
    ? "Solutions d'IA et d'automatisation avancées et personnalisées, conçues spécifiquement pour vos besoins et défis commerciaux."
    : "Advanced, tailored AI and automation solutions designed specifically for your business needs and challenges.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Notre Pack d'IA & Automatisation Sur Mesure propose des solutions sophistiquées et personnalisées qui répondent à vos défis commerciaux spécifiques. Nous combinons des technologies d'IA de pointe avec une automatisation avancée pour créer des solutions puissantes et personnalisées qui stimulent l'efficacité et l'innovation dans votre organisation."
      : "Our Custom AI & Automation Package delivers sophisticated, tailored solutions that address your specific business challenges. We combine cutting-edge AI technologies with advanced automation to create powerful, customized solutions that drive efficiency and innovation in your organization."
  },
  solutions: isPathFrench ? [
    "Développement de Modèles d'IA Sur Mesure",
    "Automatisation Avancée des Processus",
    "Intégration d'Apprentissage Automatique",
    "Solutions de Traitement du Langage Naturel",
    "Applications de Vision par Ordinateur",
    "Systèmes d'Analyse Prédictive"
  ] : [
    "Custom AI Model Development",
    "Advanced Process Automation",
    "Machine Learning Integration",
    "Natural Language Processing Solutions",
    "Computer Vision Applications",
    "Predictive Analytics Systems"
  ],
  process: isPathFrench ? [
    "Analyse approfondie des besoins",
    "Conception de l'architecture de solution",
    "Développement de modèles d'IA personnalisés",
    "Intégration et tests",
    "Déploiement et surveillance",
    "Optimisation continue"
  ] : [
    "In-depth requirements analysis",
    "Solution architecture design",
    "Custom AI model development",
    "Integration and testing",
    "Deployment and monitoring",
    "Continuous optimization"
  ],
  applications: isPathFrench ? [
    "Traitement intelligent des documents",
    "Automatisation avancée du service client",
    "Systèmes de maintenance prédictive",
    "Chatbots et assistants virtuels personnalisés",
    "Vision par ordinateur pour le contrôle qualité",
    "Traitement du langage naturel pour l'analyse des données"
  ] : [
    "Intelligent document processing",
    "Advanced customer service automation",
    "Predictive maintenance systems",
    "Custom chatbots and virtual assistants",
    "Computer vision for quality control",
    "Natural language processing for data analysis"
  ],
  cta: {
    primary: isPathFrench ? "Discuter de Votre Projet" : "Discuss Your Project",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function CustomAIAutomation() {
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

            <h2>{isPathFrench ? "Solutions Personnalisées" : "Custom Solutions"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Processus de Développement" : "Development Process"}</h2>
            <ol>
              {content.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>{isPathFrench ? "Applications" : "Applications"}</h2>
            <ul>
              {content.applications.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Calculez Votre Retour sur Investissement" : "Calculate Your ROI"}</h2>
            <p>{isPathFrench
              ? "Utilisez notre calculateur pour estimer le retour sur investissement potentiel de nos solutions d'automatisation IA personnalisées pour votre entreprise."
              : "Use our calculator to estimate the potential return on investment of our custom AI automation solutions for your business."
            }</p>
            
            <div className="w-full mt-6 mb-12">
              <ROICalculator
                defaultValues={{
                  employees: 20,
                  hourlyRate: 50,
                  hoursPerWeek: 8,
                  automationLevel: 85
                }}
                className="w-full"
              />
            </div>

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