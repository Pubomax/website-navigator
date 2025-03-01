import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Code, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pack de Développement de Logiciels & Plateformes Sur Mesure" : "Custom Software & Platform Development Package",
  subtitle: isPathFrench 
    ? "Solutions logicielles et plateformes sur mesure conçues pour répondre à vos besoins commerciaux uniques et stimuler l'innovation numérique."
    : "Tailored software solutions and platforms designed to meet your unique business requirements and drive digital innovation.",
  overview: {
    title: isPathFrench ? "Aperçu du Pack" : "Package Overview",
    content: isPathFrench
      ? "Notre Pack de Développement de Logiciels & Plateformes Sur Mesure propose des solutions sur mesure qui s'alignent parfaitement avec vos processus et objectifs commerciaux. Nous combinons les technologies modernes, les meilleures pratiques de l'industrie et des approches innovantes pour créer des solutions logicielles robustes, évolutives et conviviales."
      : "Our Custom Software & Platform Development Package delivers bespoke solutions that perfectly align with your business processes and objectives. We combine modern technologies, industry best practices, and innovative approaches to create robust, scalable, and user-friendly software solutions."
  },
  services: isPathFrench ? [
    "Développement d'Applications Sur Mesure",
    "Solutions Logicielles d'Entreprise",
    "Plateformes Cloud-Native",
    "Développement d'Applications Mobiles",
    "Développement et Intégration d'API",
    "Modernisation des Systèmes Existants"
  ] : [
    "Custom Application Development",
    "Enterprise Software Solutions",
    "Cloud-Native Platforms",
    "Mobile App Development",
    "API Development & Integration",
    "Legacy System Modernization"
  ],
  process: isPathFrench ? [
    "Analyse des Besoins & Planification",
    "Conception de l'Architecture Système",
    "Sprints de Développement Agile",
    "Assurance Qualité & Tests",
    "Déploiement & Intégration",
    "Maintenance & Support"
  ] : [
    "Requirements Analysis & Planning",
    "System Architecture Design",
    "Agile Development Sprints",
    "Quality Assurance & Testing",
    "Deployment & Integration",
    "Maintenance & Support"
  ],
  stack: isPathFrench ? [
    "Frameworks Frontend Modernes (React, Vue, Angular)",
    "Technologies Backend Robustes (Node.js, Python, Java)",
    "Plateformes Cloud (AWS, Azure, Google Cloud)",
    "Solutions de Base de Données (SQL, NoSQL)",
    "Intégration DevOps & CI/CD"
  ] : [
    "Modern Frontend Frameworks (React, Vue, Angular)",
    "Robust Backend Technologies (Node.js, Python, Java)",
    "Cloud Platforms (AWS, Azure, Google Cloud)",
    "Database Solutions (SQL, NoSQL)",
    "DevOps & CI/CD Integration"
  ],
  cta: {
    primary: isPathFrench ? "Démarrer Votre Projet" : "Start Your Project",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function CustomSoftware() {
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
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{content.title}</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              {content.subtitle}
            </p>

            <h2>{content.overview.title}</h2>
            <p>{content.overview.content}</p>

            <h2>{isPathFrench ? "Services de Développement" : "Development Services"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Processus de Développement" : "Development Process"}</h2>
            <ol>
              {content.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2>{isPathFrench ? "Stack Technologique" : "Technology Stack"}</h2>
            <ul>
              {content.stack.map((tech) => (
                <li key={tech}>{tech}</li>
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