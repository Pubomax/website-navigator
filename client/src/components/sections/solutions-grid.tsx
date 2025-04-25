import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, Target, Users, DollarSign, MessageSquare, AreaChart, Zap } from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Nos Solutions" : "Our Solutions",
  subtitle: isPathFrench 
    ? "Des solutions d'automatisation puissantes pour générer plus de revenus avec moins d'effort"
    : "Powerful automation solutions to generate more revenue with less effort",
  solutions: isPathFrench ? [
    {
      title: "Génération Automatisée de Leads",
      description: "Attirez un flux constant de prospects qualifiés sans effort manuel",
      icon: Target,
      link: "/solutions/automated-lead-generation"
    },
    {
      title: "Nurturing Intelligent",
      description: "Convertissez plus de prospects en clients avec des séquences de nurturing personnalisées",
      icon: Users,
      link: "/solutions/smart-nurturing"
    },
    {
      title: "Automatisation des Ventes",
      description: "Augmentez vos revenus grâce à des processus de vente automatisés et optimisés",
      icon: DollarSign,
      link: "/solutions/sales-automation"
    },
    {
      title: "Engagement Client Instantané",
      description: "Répondez aux prospects instantanément et augmentez vos taux de conversion",
      icon: MessageSquare,
      link: "/solutions/instant-customer-engagement"
    },
    {
      title: "Optimisation de Conversion",
      description: "Maximisez votre ROI avec des stratégies de conversion éprouvées",
      icon: AreaChart,
      link: "/solutions/conversion-optimization"
    },
    {
      title: "Acquisition Rapide",
      description: "Accélérez votre croissance avec des campagnes d'acquisition optimisées",
      icon: Zap,
      link: "/solutions/quick-acquisition"
    }
  ] : [
    {
      title: "Automated Lead Generation",
      description: "Attract a steady stream of qualified prospects without manual effort",
      icon: Target,
      link: "/solutions/automated-lead-generation"
    },
    {
      title: "Smart Nurturing",
      description: "Convert more prospects into customers with personalized nurturing sequences",
      icon: Users,
      link: "/solutions/smart-nurturing"
    },
    {
      title: "Sales Automation",
      description: "Increase your revenue through automated and optimized sales processes",
      icon: DollarSign,
      link: "/solutions/sales-automation"
    },
    {
      title: "Instant Customer Engagement",
      description: "Respond to prospects instantly and increase your conversion rates",
      icon: MessageSquare,
      link: "/solutions/instant-customer-engagement"
    },
    {
      title: "Conversion Optimization",
      description: "Maximize your ROI with proven conversion strategies",
      icon: AreaChart,
      link: "/solutions/conversion-optimization"
    },
    {
      title: "Quick Acquisition",
      description: "Accelerate your growth with optimized acquisition campaigns",
      icon: Zap,
      link: "/solutions/quick-acquisition"
    }
  ]
});

export function SolutionsGrid() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col shadow-lg border-primary/10 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={solution.link}>
                      {isPathFrench ? "En Savoir Plus" : "Learn More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}