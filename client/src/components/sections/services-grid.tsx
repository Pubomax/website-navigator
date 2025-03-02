import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Code,
  Building2,
  Phone,
  BarChart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLocation } from "wouter";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Nos Services" : "Our Services",
  subtitle: isPathFrench
    ? "Solutions numériques complètes pour entreprises de toutes tailles"
    : "Comprehensive digital solutions for businesses of all sizes",
  services: isPathFrench ? [
    {
      name: "Base Numérique",
      description: "Construisez une infrastructure numérique solide pour soutenir la croissance de votre entreprise",
      icon: Building2,
    },
    {
      name: "Démarrage IA & Automatisation",
      description: "Commencez votre parcours avec des solutions d'IA et d'automatisation adaptées à vos besoins",
      icon: Bot,
    },
    {
      name: "Conseil en Transformation Numérique",
      description: "Conseils d'experts pour guider votre parcours de transformation numérique",
      icon: Brain,
    },
    {
      name: "Développement de Logiciels Sur Mesure",
      description: "Solutions logicielles sur mesure pour répondre à vos besoins spécifiques",
      icon: Code,
    },
    {
      name: "Support Intelligent",
      description: "Solutions de support alimentées par l'IA 24/7 pour améliorer l'expérience client",
      icon: Phone,
    },
    {
      name: "Intelligence d'Affaires",
      description: "Insights basés sur les données pour des décisions d'affaires éclairées",
      icon: BarChart,
    },
  ] : [
    {
      name: "Digital Foundation",
      description: "Build a strong digital infrastructure to support your business growth",
      icon: Building2,
    },
    {
      name: "AI & Automation Starter",
      description: "Begin your journey with AI and automation solutions tailored for your needs",
      icon: Bot,
    },
    {
      name: "Digital Transformation Consulting",
      description: "Expert guidance to navigate your digital transformation journey",
      icon: Brain,
    },
    {
      name: "Custom Software Development",
      description: "Tailored software solutions to meet your specific business requirements",
      icon: Code,
    },
    {
      name: "Intelligent Support",
      description: "24/7 AI-powered support solutions to enhance customer experience",
      icon: Phone,
    },
    {
      name: "Business Intelligence",
      description: "Data-driven insights to make informed business decisions",
      icon: BarChart,
    },
  ]
});

export function ServicesGrid() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}