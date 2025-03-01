import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour la Santé" : "Healthcare Solutions",
  subtitle: isPathFrench 
    ? "Donnez aux organisations de santé les moyens d'utiliser des solutions numériques innovantes qui améliorent les soins aux patients, optimisent les opérations et assurent la conformité réglementaire."
    : "Empower healthcare organizations with innovative digital solutions that enhance patient care, streamline operations, and ensure compliance with healthcare regulations.",
  challenges: isPathFrench ? [
    "Intégration des dossiers de santé électroniques (DSE)",
    "Sécurité et confidentialité des données des patients",
    "Mise en œuvre de la télésanté",
    "Optimisation des flux de travail cliniques",
    "Conformité réglementaire",
    "Engagement et expérience des patients"
  ] : [
    "Electronic Health Records (EHR) integration",
    "Patient data security and privacy",
    "Telehealth implementation",
    "Clinical workflow optimization",
    "Regulatory compliance",
    "Patient engagement and experience"
  ],
  solutions: isPathFrench ? [
    {
      title: "Plateformes de Santé Numérique",
      description: "Systèmes complets de gestion de la santé avec intégration DSE et capacités de télésanté."
    },
    {
      title: "Analyse des Soins aux Patients",
      description: "Analyses alimentées par l'IA pour améliorer les résultats des patients et personnaliser les plans de soins."
    },
    {
      title: "Suite de Conformité Santé",
      description: "Systèmes automatisés de surveillance et de reporting de conformité pour les réglementations de santé."
    }
  ] : [
    {
      title: "Digital Health Platforms",
      description: "Comprehensive healthcare management systems with EHR integration and telehealth capabilities."
    },
    {
      title: "Patient Care Analytics",
      description: "AI-powered analytics for improved patient outcomes and personalized care plans."
    },
    {
      title: "Healthcare Compliance Suite",
      description: "Automated compliance monitoring and reporting systems for healthcare regulations."
    }
  ],
  process: isPathFrench ? [
    "Évaluation des Systèmes de Santé",
    "Développement de la Stratégie Numérique",
    "Planification de la Sécurité et de la Conformité",
    "Mise en Œuvre Progressive",
    "Formation du Personnel et Adoption",
    "Surveillance et Mises à Jour Continues"
  ] : [
    "Healthcare Systems Assessment",
    "Digital Strategy Development",
    "Security and Compliance Planning",
    "Phased Implementation",
    "Staff Training and Adoption",
    "Continuous Monitoring and Updates"
  ],
  benefits: isPathFrench ? [
    "Amélioration de la qualité des soins",
    "Amélioration de l'efficacité opérationnelle",
    "Meilleure utilisation des ressources",
    "Augmentation de la satisfaction des patients",
    "Sécurité et conformité robustes"
  ] : [
    "Improved patient care quality",
    "Enhanced operational efficiency",
    "Better resource utilization",
    "Increased patient satisfaction",
    "Robust security and compliance"
  ],
  cta: {
    primary: isPathFrench ? "Transformer Votre Organisation de Santé" : "Transform Your Healthcare Organization",
    secondary: isPathFrench ? "Voir les Succès en Santé" : "View Healthcare Success Stories"
  }
});

export default function Healthcare() {
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
              <Stethoscope className="h-8 w-8 text-primary" />
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

            <h2>{isPathFrench ? "Nos Solutions pour la Santé" : "Our Healthcare Solutions"}</h2>
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