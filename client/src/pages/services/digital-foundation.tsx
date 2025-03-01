import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Building2, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack Fondation Numérique" : "Digital Foundation Package",
  subtitle: isPathFrench 
    ? "Construisez une infrastructure numérique solide pour soutenir la croissance de votre entreprise avec notre Pack Fondation Numérique complet."
    : "Build a strong digital infrastructure to support your business growth with our comprehensive Digital Foundation Package.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Le Pack Fondation Numérique est conçu pour établir ou améliorer l'infrastructure numérique de votre organisation. Il fournit les éléments essentiels nécessaires à la transformation numérique, garantissant à votre entreprise une base technologique solide pour sa croissance et son innovation futures."
      : "The Digital Foundation Package is designed to establish or enhance your organization's digital infrastructure. It provides the essential building blocks needed for digital transformation, ensuring your business has a solid technological foundation for future growth and innovation."
  },
  features: isPathFrench ? [
    "Évaluation et Planification de l'Infrastructure Numérique",
    "Configuration et Optimisation de l'Infrastructure Cloud",
    "Mise en Œuvre de l'Automatisation de Base",
    "Base de Sécurité Numérique",
    "Formation aux Compétences Numériques des Employés",
    "Support Technique 24/7"
  ] : [
    "Digital Infrastructure Assessment and Planning",
    "Cloud Infrastructure Setup and Optimization",
    "Basic Process Automation Implementation",
    "Digital Security Foundation",
    "Employee Digital Skills Training",
    "24/7 Technical Support"
  ],
  benefits: isPathFrench ? [
    "Amélioration de l'efficacité opérationnelle grâce à l'automatisation de base",
    "Sécurité numérique et gestion des risques renforcées",
    "Réduction des coûts d'infrastructure informatique",
    "Augmentation de la productivité des employés",
    "Base évolutive pour les futures initiatives numériques"
  ] : [
    "Improved operational efficiency through basic automation",
    "Enhanced digital security and risk management",
    "Reduced IT infrastructure costs",
    "Increased employee productivity",
    "Scalable foundation for future digital initiatives"
  ],
  idealFor: {
    title: isPathFrench ? "Idéal Pour" : "Ideal For",
    description: isPathFrench
      ? "Ce pack est parfait pour les petites et moyennes entreprises qui souhaitent :"
      : "This package is perfect for small to medium-sized businesses looking to:",
    items: isPathFrench ? [
      "Commencer leur parcours de transformation numérique",
      "Moderniser l'infrastructure informatique obsolète",
      "Améliorer l'efficacité opérationnelle",
      "Construire une base pour la croissance future"
    ] : [
      "Start their digital transformation journey",
      "Modernize outdated IT infrastructure",
      "Improve operational efficiency",
      "Build a foundation for future growth"
    ]
  },
  cta: {
    primary: isPathFrench ? "Commencer" : "Get Started",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function DigitalFoundation() {
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
              <Building2 className="h-8 w-8 text-primary" />
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

            <h2>{content.idealFor.title}</h2>
            <p>
              {content.idealFor.description}
            </p>
            <ul>
              {content.idealFor.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

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