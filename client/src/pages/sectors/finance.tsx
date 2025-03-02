import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour Services Financiers" : "Financial Services Solutions",
  subtitle: isPathFrench 
    ? "Solutions numériques adaptées au secteur financier, assurant sécurité, efficacité et innovation dans la prestation de services financiers."
    : "Tailored digital solutions for the financial sector, ensuring secure, efficient, and innovative financial service delivery.",
  sections: {
    challenges: {
      title: isPathFrench ? "Défis du Secteur" : "Industry Challenges",
      items: isPathFrench ? [
        "Transformation numérique et modernisation",
        "Cybersécurité et conformité réglementaire",
        "Expérience client numérique",
        "Analyse de données en temps réel",
        "Gestion des risques et prévention des fraudes",
        "Concurrence des FinTech"
      ] : [
        "Digital transformation and modernization",
        "Cybersecurity and regulatory compliance",
        "Digital customer experience",
        "Real-time data analytics",
        "Risk management and fraud prevention",
        "FinTech competition"
      ]
    },
    solutions: {
      title: isPathFrench ? "Nos Solutions Financières" : "Our Financial Solutions",
      items: isPathFrench ? [
        {
          title: "Transformation Bancaire Numérique",
          description: "Plateformes bancaires modernes avec expérience client fluide et sécurité robuste."
        },
        {
          title: "Gestion des Risques par IA",
          description: "Solutions d'analyse avancée et d'IA pour l'évaluation des risques et la détection des fraudes."
        },
        {
          title: "Technologies Réglementaires (RegTech)",
          description: "Systèmes automatisés de surveillance et reporting de conformité."
        }
      ] : [
        {
          title: "Digital Banking Transformation",
          description: "Modern banking platforms with seamless customer experience and robust security."
        },
        {
          title: "AI-Powered Risk Management",
          description: "Advanced analytics and AI solutions for risk assessment and fraud detection."
        },
        {
          title: "Regulatory Technology (RegTech)",
          description: "Automated compliance monitoring and reporting systems."
        }
      ]
    },
    benefits: {
      title: isPathFrench ? "Avantages Clés" : "Key Benefits",
      items: isPathFrench ? [
        "Satisfaction client accrue",
        "Réduction des coûts opérationnels",
        "Meilleure gestion des risques",
        "Conformité réglementaire améliorée",
        "Avantage concurrentiel numérique"
      ] : [
        "Enhanced customer satisfaction",
        "Reduced operational costs",
        "Better risk management",
        "Improved regulatory compliance",
        "Digital competitive advantage"
      ]
    }
  },
  cta: {
    primary: isPathFrench ? "Transformer Vos Services" : "Transform Your Services",
    secondary: isPathFrench ? "Voir Nos Succès" : "View Success Stories"
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

            <h2>{content.sections.challenges.title}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.sections.challenges.items.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{content.sections.solutions.title}</h2>
            <div className="grid gap-6">
              {content.sections.solutions.items.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{content.sections.benefits.title}</h2>
            <ul>
              {content.sections.benefits.items.map((benefit) => (
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