import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  Zap,
  BarChart,
  MessageSquare,
  Target
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
  title: isPathFrench ? "Nos Solutions" : "Our Solutions",
  subtitle: isPathFrench
    ? "Solutions complètes pour maximiser vos revenus avec un minimum d'effort"
    : "Comprehensive solutions to maximize your revenue with minimal effort",
  services: isPathFrench ? [
    {
      name: "Génération de Leads Automatique",
      description: "Attirez un flux constant de prospects qualifiés sans effort manuel",
      icon: Target,
    },
    {
      name: "Nurturing Intelligent",
      description: "Convertissez plus de prospects en clients grâce à des séquences de nurturing personnalisées",
      icon: Users,
    },
    {
      name: "Automatisation des Ventes",
      description: "Augmentez vos revenus grâce à des processus de vente automatisés et optimisés",
      icon: DollarSign,
    },
    {
      name: "Engagement Client Instantané",
      description: "Répondez instantanément aux prospects et augmentez vos taux de conversion",
      icon: MessageSquare,
    },
    {
      name: "Optimisation des Conversions",
      description: "Maximisez votre ROI avec des stratégies de conversion éprouvées",
      icon: BarChart,
    },
    {
      name: "Acquisition Rapide",
      description: "Accélérez votre croissance avec des campagnes d'acquisition optimisées",
      icon: Zap,
    },
  ] : [
    {
      name: "Automated Lead Generation",
      description: "Attract a steady stream of qualified prospects without manual effort",
      icon: Target,
    },
    {
      name: "Smart Nurturing",
      description: "Convert more prospects into customers with personalized nurturing sequences",
      icon: Users,
    },
    {
      name: "Sales Automation",
      description: "Increase your revenue through automated and optimized sales processes",
      icon: DollarSign,
    },
    {
      name: "Instant Customer Engagement",
      description: "Respond to prospects instantly and increase your conversion rates",
      icon: MessageSquare,
    },
    {
      name: "Conversion Optimization",
      description: "Maximize your ROI with proven conversion strategies",
      icon: BarChart,
    },
    {
      name: "Quick Acquisition",
      description: "Accelerate your growth with optimized acquisition campaigns",
      icon: Zap,
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