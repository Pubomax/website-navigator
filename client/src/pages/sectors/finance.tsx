import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour les Services Financiers" : "Financial Services Solutions",
  subtitle: isPathFrench 
    ? "Solutions numériques de pointe pour les institutions financières, permettant une prestation sécurisée, efficace et innovante des services financiers."
    : "Cutting-edge digital solutions for financial institutions, enabling secure, efficient, and innovative financial services delivery.",
  challenges: isPathFrench ? [
    "Transformation numérique et modernisation des systèmes existants",
    "Cybersécurité et conformité réglementaire",
    "Amélioration de l'expérience client",
    "Analyse de données et reporting en temps réel",
    "Gestion des risques et prévention des fraudes",
    "Concurrence des FinTech"
  ] : [
    "Digital transformation and legacy system modernization",
    "Cybersecurity and regulatory compliance",
    "Customer experience enhancement",
    "Real-time data analytics and reporting",
    "Risk management and fraud prevention",
    "Competition from FinTech startups"
  ],
  solutions: isPathFrench ? [
    {
      title: "Transformation Bancaire Numérique",
      description: "Plateformes bancaires numériques modernes avec une expérience client fluide et des fonctionnalités de sécurité robustes."
    },
    {
      title: "Gestion des Risques par IA",
      description: "Solutions d'analyse avancée et d'IA pour une meilleure évaluation des risques et détection des fraudes."
    },
    {
      title: "Technologies Réglementaires (RegTech)",
      description: "Systèmes automatisés de surveillance et de reporting de conformité pour assurer le respect des réglementations."
    }
  ] : [
    {
      title: "Digital Banking Transformation",
      description: "Modern digital banking platforms with seamless customer experience and robust security features."
    },
    {
      title: "AI-Powered Risk Management",
      description: "Advanced analytics and AI solutions for better risk assessment and fraud detection."
    },
    {
      title: "Regulatory Technology (RegTech)",
      description: "Automated compliance monitoring and reporting systems to ensure regulatory adherence."
    }
  ],
  process: isPathFrench ? [
    "Évaluation des Systèmes Financiers",
    "Planification de la Sécurité et de la Conformité",
    "Modernisation de l'Infrastructure Numérique",
    "Mise en Œuvre Progressive",
    "Formation du Personnel et Adoption",
    "Surveillance et Mises à Jour Continues"
  ] : [
    "Financial Systems Assessment",
    "Security and Compliance Planning",
    "Digital Infrastructure Modernization",
    "Phased Implementation",
    "Staff Training and Adoption",
    "Continuous Monitoring and Updates"
  ],
  benefits: isPathFrench ? [
    "Satisfaction et fidélisation accrues des clients",
    "Réduction des coûts opérationnels et amélioration de l'efficacité",
    "Meilleure gestion des risques et prévention des fraudes",
    "Amélioration de la conformité réglementaire",
    "Avantage concurrentiel dans la banque numérique"
  ] : [
    "Enhanced customer satisfaction and retention",
    "Reduced operational costs and improved efficiency",
    "Better risk management and fraud prevention",
    "Improved regulatory compliance",
    "Competitive advantage in digital banking"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Vos Services Financiers" : "Transform Your Financial Services",
    secondary: isPathFrench ? "Voir les Succès Financiers" : "View Financial Success Stories"
  }
});

export default function Finance() {
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

            <h2>{isPathFrench ? "Défis du Secteur" : "Industry Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Nos Solutions Financières" : "Our Financial Solutions"}</h2>
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

            <h2>{isPathFrench ? "Avantages Clés" : "Key Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
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