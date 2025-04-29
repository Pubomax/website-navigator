import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowRight, Check, Target, Users, DollarSign, MessageSquare, AreaChart, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { solutions } from "@/data/solutions";
import { PageTitle } from "@/components/page-title";
import { useTranslation } from "@/lib/i18n";

const getQuickSolutions = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Solutions d'Automatisation Rapides" : "Quick Automation Solutions",
  subtitle: isPathFrench 
    ? "Des outils spécifiques pour résoudre vos défis commerciaux immédiats"
    : "Specific tools to solve your immediate business challenges",
  solutions: isPathFrench ? [
    {
      title: "Génération Automatisée de Leads",
      description: "Attirez un flux constant de prospects qualifiés sans effort manuel",
      icon: Target,
      link: "/fr/solutions/automated-lead-generation"
    },
    {
      title: "Nurturing Intelligent",
      description: "Convertissez plus de prospects en clients avec des séquences de nurturing personnalisées",
      icon: Users,
      link: "/fr/solutions/smart-nurturing"
    },
    {
      title: "Automatisation des Ventes",
      description: "Augmentez vos revenus grâce à des processus de vente automatisés et optimisés",
      icon: DollarSign,
      link: "/fr/services/sales-automation"
    },
    {
      title: "Engagement Client Instantané",
      description: "Répondez aux prospects instantanément et augmentez vos taux de conversion",
      icon: MessageSquare,
      link: "/fr/solutions/instant-customer-engagement"
    },
    {
      title: "Optimisation de Conversion",
      description: "Maximisez votre ROI avec des stratégies de conversion éprouvées",
      icon: AreaChart,
      link: "/fr/services/transformation-consulting"
    },
    {
      title: "Acquisition Rapide",
      description: "Accélérez votre croissance avec des campagnes d'acquisition optimisées",
      icon: Zap,
      link: "/fr/solutions/quick-acquisition"
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
      link: "/services/sales-automation"
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
      link: "/services/transformation-consulting"
    },
    {
      title: "Quick Acquisition",
      description: "Accelerate your growth with optimized acquisition campaigns",
      icon: Zap,
      link: "/solutions/quick-acquisition"
    }
  ]
});

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Nos Solutions" : "Our Solutions",
  subtitle: isPathFrench 
    ? "Des solutions complètes de transformation numérique adaptées aux besoins de votre entreprise"
    : "Comprehensive digital transformation packages tailored to your business needs",
  comprehensiveTitle: isPathFrench 
    ? "Forfaits de Transformation Complets" 
    : "Comprehensive Transformation Packages",
  comprehensiveSubtitle: isPathFrench
    ? "Solutions tout-en-un pour une transformation numérique complète"
    : "All-in-one solutions for complete digital transformation",
  sections: {
    keyDeliverables: isPathFrench ? "Livrables Clés" : "Key Deliverables",
    benefits: isPathFrench ? "Avantages" : "Benefits",
    pricingModel: isPathFrench ? "Modèle de Prix" : "Pricing Model",
    getStarted: isPathFrench ? "Commencer" : "Get Started",
    learnMore: isPathFrench ? "En Savoir Plus" : "Learn More"
  }
});

export default function Solutions() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  const quickSolutions = getQuickSolutions(isPathFrench);

  return (
    <main className="pt-12 pb-24">
      <PageTitle 
        pageKey="solutions" 
        customTitle={isPathFrench ? "Solutions d'Automatisation IA à Montréal | Groupe Minecore" : "AI Automation Solutions in Montreal | Minecore Group"}
        customDescription={isPathFrench ? "Solutions d'automatisation IA pour PME à Montréal. Génération de leads, nurturing et ventes automatisés pour travailler moins et gagner plus." : "AI automation solutions for Montreal small businesses. Automated lead generation, nurturing, and sales to work less and earn more."}
        keywords="AI automation Montreal, small business automation, lead generation Montreal, sales automation Quebec, AI for small business, marketing automation Montreal"
      />
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Quick Automation Solutions Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {quickSolutions.title}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              {quickSolutions.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickSolutions.solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col shadow-md border-primary/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
                      <solution.icon className={`h-6 w-6 ${
                        solution.title.includes("Lead") || solution.title.includes("Génération") 
                          ? "text-red-500" 
                          : solution.title.includes("Sales") || solution.title.includes("Ventes")
                            ? "text-green-500"
                            : solution.title.includes("Nurturing") || solution.title.includes("Smart") || solution.title.includes("Intelligent")
                              ? "text-blue-500"
                              : solution.title.includes("Engagement") || solution.title.includes("Customer") || solution.title.includes("Client")
                                ? "text-purple-500"
                                : solution.title.includes("Conversion") || solution.title.includes("Optimization") || solution.title.includes("Optimisation")
                                  ? "text-orange-500"
                                  : "text-amber-500"
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="p-6 pt-0 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={solution.link}>
                        {content.sections.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comprehensive Solutions Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {content.comprehensiveTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
            {content.comprehensiveSubtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="mb-4">
                    {solution.targetClient}
                  </Badge>
                  <CardTitle className="text-xl">
                    {solution.name}
                  </CardTitle>
                  <CardDescription>
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">{content.sections.keyDeliverables}:</h3>
                    <ul className="space-y-2">
                      {solution.keyDeliverables.map((deliverable: string) => (
                        <li key={deliverable} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">{content.sections.benefits}:</h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit: string) => (
                        <li key={benefit} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-1">{content.sections.pricingModel}:</h3>
                      <p className="text-sm text-muted-foreground">
                        {solution.pricingModel.details}
                      </p>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={isPathFrench ? `/fr/contact?solution=${solution.id}` : `/contact?solution=${solution.id}`}>
                        {content.sections.getStarted}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}