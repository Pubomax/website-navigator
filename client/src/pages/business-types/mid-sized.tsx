import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions pour les Entreprises de Taille Moyenne" : "Solutions for Mid-Sized Enterprises",
  subtitle: isPathFrench 
    ? "Solutions complètes de transformation numérique conçues pour les entreprises en croissance de 50 à 500 employés, axées sur l'évolutivité et l'innovation."
    : "Comprehensive digital transformation solutions designed for growing enterprises with 50-500 employees, focusing on scalability and innovation.",
  challenges: isPathFrench ? [
    "Flux de travail opérationnels complexes",
    "Intégration des systèmes existants",
    "Gestion et analyse des données",
    "Coordination entre départements",
    "Besoins en infrastructure évolutive",
    "Concurrence avec les grandes entreprises"
  ] : [
    "Complex operational workflows",
    "Legacy system integration",
    "Data management and analytics",
    "Departmental coordination",
    "Scalable infrastructure needs",
    "Competition with larger enterprises"
  ],
  solutions: isPathFrench ? [
    {
      title: "Suite d'Intégration Entreprise",
      description: "Solutions d'intégration complètes pour connecter les systèmes et flux de travail disparates."
    },
    {
      title: "Plateforme d'Analyse Avancée",
      description: "Outils de prise de décision basés sur les données avec capacités d'analyse prédictive."
    },
    {
      title: "Infrastructure Évolutive",
      description: "Solutions cloud qui évoluent avec vos besoins commerciaux."
    }
  ] : [
    {
      title: "Enterprise Integration Suite",
      description: "Comprehensive integration solutions for connecting disparate systems and workflows."
    },
    {
      title: "Advanced Analytics Platform",
      description: "Data-driven decision making tools with predictive analytics capabilities."
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-based solutions that grow with your business needs."
    }
  ],
  benefits: isPathFrench ? [
    "Opérations rationalisées entre les départements",
    "Capacités d'analyse de données améliorées",
    "Amélioration de la gestion de l'expérience client",
    "Efficacité opérationnelle accrue",
    "Meilleur positionnement concurrentiel"
  ] : [
    "Streamlined operations across departments",
    "Enhanced data analytics capabilities",
    "Improved customer experience management",
    "Increased operational efficiency",
    "Better competitive positioning"
  ],
  package: {
    title: isPathFrench ? "Pack de Solutions Entreprise" : "Enterprise Solutions Package",
    name: isPathFrench ? "Suite de Transformation Numérique Mid-Market" : "Mid-Market Digital Transformation Suite",
    features: isPathFrench ? [
      "Configuration d'infrastructure de niveau entreprise",
      "Analyses et rapports avancés",
      "Automatisation interdépartementale",
      "Gestion de la relation client",
      "Outils de business intelligence",
      "Support prioritaire 24/7"
    ] : [
      "Enterprise-grade infrastructure setup",
      "Advanced analytics and reporting",
      "Cross-department automation",
      "Customer relationship management",
      "Business intelligence tools",
      "24/7 priority support"
    ],
    price: isPathFrench ? "Prix personnalisé selon les besoins" : "Custom pricing based on requirements"
  },
  cta: {
    primary: isPathFrench ? "Planifier une Consultation" : "Schedule a Consultation",
    secondary: isPathFrench ? "Voir les Histoires de Réussite" : "View Success Stories"
  }
});

export default function MidSizedEnterprises() {
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

            <h2>{isPathFrench ? "Défis Courants" : "Common Challenges"}</h2>
            <ul className="space-y-4 list-none pl-0">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>{isPathFrench ? "Solutions Adaptées" : "Tailored Solutions"}</h2>
            <div className="grid gap-6">
              {content.solutions.map((solution) => (
                <div key={solution.title} className="p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              ))}
            </div>

            <h2>{isPathFrench ? "Avantages Clés" : "Key Benefits"}</h2>
            <ul>
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>

            <h2>{content.package.title}</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">{content.package.name}</h3>
              <ul className="space-y-2">
                {content.package.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground">{content.package.price}</p>
            </div>

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