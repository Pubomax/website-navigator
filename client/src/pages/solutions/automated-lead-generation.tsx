import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Target, 
  Zap, 
  Clock, 
  Shield, 
  Users, 
  BrainCircuit,
  CheckCircle,
  BarChart,
  LineChart,
  LucideIcon,
  Briefcase,
  DollarSign
} from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Génération Automatisée de Leads" 
    : "Automated Lead Generation",
  subtitle: isPathFrench
    ? "Attirez un flux constant de prospects qualifiés sans effort manuel"
    : "Attract a steady stream of qualified prospects without manual effort",
  overview: isPathFrench
    ? "Notre solution de génération automatisée de leads utilise l'IA pour identifier, attirer et capturer des prospects qualifiés 24/7, vous permettant de vous concentrer sur la conversion plutôt que sur la recherche de nouveaux clients potentiels."
    : "Our automated lead generation solution uses AI to identify, attract, and capture qualified prospects 24/7, allowing you to focus on conversion rather than searching for new potential customers.",
  benefits: isPathFrench ? [
    {
      title: "Économie de Temps",
      description: "Élimine jusqu'à 85% du temps consacré à la recherche manuelle de leads",
      icon: Clock,
      stat: "85%"
    },
    {
      title: "Leads de Haute Qualité",
      description: "Identifie et cible les prospects les plus susceptibles de convertir grâce à l'IA",
      icon: Target,
      stat: "3x"
    },
    {
      title: "Évolutivité Instantanée",
      description: "Augmentez ou diminuez facilement vos efforts de génération de leads selon vos besoins",
      icon: Zap,
      stat: "∞"
    }
  ] : [
    {
      title: "Time Savings",
      description: "Eliminates up to 85% of time spent on manual lead searching",
      icon: Clock,
      stat: "85%"
    },
    {
      title: "High-Quality Leads",
      description: "Identifies and targets prospects most likely to convert using AI",
      icon: Target,
      stat: "3x"
    },
    {
      title: "Instant Scalability",
      description: "Easily scale your lead generation efforts up or down as needed",
      icon: Zap,
      stat: "∞"
    }
  ],
  features: isPathFrench ? {
    targeting: [
      "Ciblage précis basé sur des données comportementales",
      "Segmentation automatique des audiences",
      "Adaptation en temps réel aux comportements des utilisateurs",
      "Analyses prédictives pour identifier les meilleurs prospects"
    ],
    channels: [
      "Campagnes de contenu automatisées",
      "Engagement sur les médias sociaux",
      "Annonces ciblées avec optimisation IA",
      "Marketing par email personnalisé"
    ],
    automation: [
      "Capture de leads sans friction",
      "Qualification automatique par score",
      "Intégration directe avec votre CRM",
      "Déclenchement automatique des séquences de nurturing"
    ]
  } : {
    targeting: [
      "Precise targeting based on behavioral data",
      "Automatic audience segmentation",
      "Real-time adaptation to user behaviors",
      "Predictive analytics to identify best prospects"
    ],
    channels: [
      "Automated content campaigns",
      "Social media engagement",
      "Targeted ads with AI optimization",
      "Personalized email marketing"
    ],
    automation: [
      "Frictionless lead capture",
      "Automatic qualification by score",
      "Direct integration with your CRM",
      "Automatic triggering of nurturing sequences"
    ]
  },
  results: isPathFrench ? {
    leads: "Augmentation de 320% du nombre de leads qualifiés",
    cost: "Réduction de 45% du coût par lead",
    conversion: "Amélioration de 37% du taux de conversion lead-to-customer"
  } : {
    leads: "320% increase in qualified leads",
    cost: "45% reduction in cost per lead",
    conversion: "37% improvement in lead-to-customer conversion rate"
  },
  process: isPathFrench ? [
    {
      title: "Analyse & Stratégie",
      description: "Nous analysons votre audience cible et créons une stratégie de génération de leads"
    },
    {
      title: "Configuration des Canaux",
      description: "Nous mettons en place tous les canaux automatisés de génération de leads"
    },
    {
      title: "Optimisation IA",
      description: "Notre IA optimise continuellement vos campagnes pour maximiser les résultats"
    },
    {
      title: "Croissance Continue",
      description: "Votre système de génération de leads s'améliore automatiquement au fil du temps"
    }
  ] : [
    {
      title: "Analysis & Strategy",
      description: "We analyze your target audience and create a lead generation strategy"
    },
    {
      title: "Channel Setup",
      description: "We set up all automated lead generation channels"
    },
    {
      title: "AI Optimization",
      description: "Our AI continuously optimizes your campaigns to maximize results"
    },
    {
      title: "Continuous Growth",
      description: "Your lead generation system automatically improves over time"
    }
  ],
  testimonial: isPathFrench ? {
    quote: "La solution de génération automatisée de leads de Minecore Group a transformé notre entreprise. Nous recevons maintenant un flux constant de prospects qualifiés sans aucun effort manuel de notre part. Notre équipe de vente peut se concentrer entièrement sur la conversion, ce qui a entraîné une augmentation significative de nos revenus.",
    author: "Sophie Martin",
    position: "Directrice Marketing, TechStyle Inc."
  } : {
    quote: "Minecore Group's automated lead generation solution has transformed our business. We now receive a steady stream of qualified prospects with no manual effort on our part. Our sales team can focus entirely on conversion, which has resulted in a significant increase in our revenue.",
    author: "Sarah Wilson",
    position: "Marketing Director, TechStyle Inc."
  },
  cta: {
    title: isPathFrench ? "Prêt à Automatiser Votre Génération de Leads?" : "Ready to Automate Your Lead Generation?",
    subtitle: isPathFrench 
      ? "Commencez à recevoir un flux constant de leads qualifiés sans effort manuel" 
      : "Start receiving a steady stream of qualified leads without manual effort",
    primary: isPathFrench ? "Commencer Maintenant" : "Get Started Now",
    secondary: isPathFrench ? "Voir les Résultats" : "See Results"
  }
});

export default function AutomatedLeadGeneration() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <Target className="mr-1 h-3.5 w-3.5 text-primary" />
                {isPathFrench ? "Solution" : "Solution"}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {content.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl border border-primary/10 overflow-hidden relative bg-gradient-to-br from-primary/5 to-transparent">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <Target className="h-24 w-24 text-primary/20 mx-auto mb-6" />
                    <div className="bg-background/80 backdrop-blur-sm py-3 px-6 rounded-full inline-block">
                      <span className="font-semibold">
                        {isPathFrench ? "Génération de Leads Sans Effort" : "Effortless Lead Generation"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Vue d'Ensemble" : "Overview"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {content.overview}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/10 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary rounded-full px-3 py-1">
                    <span className="font-bold">{benefit.stat}</span>
                  </div>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isPathFrench ? "Fonctionnalités Clés" : "Key Features"}
          </h2>
          
          <Tabs defaultValue="targeting" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="targeting">
                <Target className="h-4 w-4 mr-2" />
                {isPathFrench ? "Ciblage Intelligent" : "Intelligent Targeting"}
              </TabsTrigger>
              <TabsTrigger value="channels">
                <Users className="h-4 w-4 mr-2" />
                {isPathFrench ? "Canaux Multiples" : "Multiple Channels"}
              </TabsTrigger>
              <TabsTrigger value="automation">
                <BrainCircuit className="h-4 w-4 mr-2" />
                {isPathFrench ? "Automatisation IA" : "AI Automation"}
              </TabsTrigger>
            </TabsList>
            
            <div className="p-8 bg-background rounded-xl border border-primary/10 shadow-sm">
              <TabsContent value="targeting" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {isPathFrench ? "Ciblage Intelligent" : "Intelligent Targeting"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {isPathFrench
                        ? "Notre système de ciblage utilise l'IA pour identifier et attirer précisément les prospects les plus susceptibles de convertir."
                        : "Our targeting system uses AI to precisely identify and attract prospects most likely to convert."}
                    </p>
                    <ul className="space-y-3">
                      {content.features.targeting.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-72 h-72">
                      <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Target className="h-24 w-24 text-primary/30" />
                      </div>
                      <div className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2.5s' }}></div>
                      <div className="absolute top-1/3 left-1/5 w-6 h-6 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '4s' }}></div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="channels" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {isPathFrench ? "Canaux Multiples" : "Multiple Channels"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {isPathFrench
                        ? "Maximisez votre portée en attirant des prospects qualifiés à travers plusieurs canaux, tous gérés automatiquement."
                        : "Maximize your reach by attracting qualified prospects across multiple channels, all managed automatically."}
                    </p>
                    <ul className="space-y-3">
                      {content.features.channels.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-lg bg-primary/5 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary/40" />
                    </div>
                    <div className="aspect-square rounded-lg bg-primary/5 flex items-center justify-center">
                      <LineChart className="h-10 w-10 text-primary/40" />
                    </div>
                    <div className="aspect-square rounded-lg bg-primary/5 flex items-center justify-center">
                      <BrainCircuit className="h-10 w-10 text-primary/40" />
                    </div>
                    <div className="aspect-square rounded-lg bg-primary/5 flex items-center justify-center">
                      <Zap className="h-10 w-10 text-primary/40" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="automation" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {isPathFrench ? "Automatisation IA" : "AI Automation"}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {isPathFrench
                        ? "Notre IA gère tout le processus de génération de leads, vous permettant de vous concentrer sur la conversion et la croissance."
                        : "Our AI manages the entire lead generation process, allowing you to focus on conversion and growth."}
                    </p>
                    <ul className="space-y-3">
                      {content.features.automation.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <p>{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="h-24 w-24 text-primary/20" />
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      
      {/* Results & Testimonial Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isPathFrench ? "Résultats Prouvés" : "Proven Results"}
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-background">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{content.results.leads}</h3>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-background">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{content.results.cost}</h3>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-background">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{content.results.conversion}</h3>
                  </div>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '37%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isPathFrench ? "Témoignage Client" : "Client Testimonial"}
              </h2>
              
              <Card className="border-primary/10">
                <CardContent className="pt-6">
                  <p className="text-lg italic mb-6">"{content.testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-primary/60" />
                    </div>
                    <div>
                      <p className="font-semibold">{content.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{content.testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isPathFrench ? "Notre Processus" : "Our Process"}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < content.process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-2rem)] w-[calc(4rem)] h-[2px] bg-primary/20 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.cta.subtitle}
          </p>
          <Button asChild size="lg">
            <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
              {content.cta.primary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}