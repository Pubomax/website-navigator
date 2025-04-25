import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Settings, 
  Globe, 
  Laptop, 
  Link2, 
  BarChart, 
  MessageSquare,
  CheckCircle,
  ArrowUpRight,
  Zap,
  Clock,
  BrainCircuit
} from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Forfait Fondation Numérique" 
    : "Digital Foundation Package",
  subtitle: isPathFrench
    ? "Établissez une base numérique solide pour votre entreprise et commencez à automatiser vos opérations pour plus d'efficacité"
    : "Establish a solid digital foundation for your business and start automating your operations for greater efficiency",
  overview: isPathFrench
    ? "Notre Forfait Fondation Numérique est conçu pour les entreprises qui souhaitent établir ou améliorer leur présence numérique et mettre en place des systèmes d'automatisation de base. C'est le point de départ parfait pour gagner plus en travaillant moins."
    : "Our Digital Foundation Package is designed for businesses looking to establish or improve their digital presence and implement basic automation systems. It's the perfect starting point for making more money while working less.",
  features: isPathFrench ? [
    {
      title: "Présence En Ligne Optimisée",
      description: "Mise en place ou optimisation de votre site web, médias sociaux et listings d'entreprise pour maximiser votre visibilité en ligne.",
      icon: Globe
    },
    {
      title: "Automatisation De Base",
      description: "Implémentation de systèmes d'automatisation fondamentaux pour les tâches répétitives comme les emails, les médias sociaux et les suivis clients.",
      icon: Settings
    },
    {
      title: "Suite D'Outils Numériques",
      description: "Configuration d'outils essentiels pour gérer efficacement votre entreprise en ligne (CRM, email marketing, gestion de contenu).",
      icon: Laptop
    },
    {
      title: "Intégrations De Plateformes",
      description: "Connexion de vos outils numériques existants pour un flux de travail fluide et sans friction.",
      icon: Link2
    },
    {
      title: "Analytics De Base",
      description: "Mise en place d'outils d'analyse pour suivre les performances de votre présence numérique et vos interactions clients.",
      icon: BarChart
    },
    {
      title: "Chatbot Simple",
      description: "Installation d'un assistant virtuel de base pour répondre aux questions fréquentes de vos clients 24/7.",
      icon: MessageSquare
    }
  ] : [
    {
      title: "Optimized Online Presence",
      description: "Setup or optimization of your website, social media, and business listings to maximize your online visibility.",
      icon: Globe
    },
    {
      title: "Basic Automation",
      description: "Implementation of fundamental automation systems for repetitive tasks like emails, social media, and customer follow-ups.",
      icon: Settings
    },
    {
      title: "Digital Tools Suite",
      description: "Setup of essential tools to efficiently manage your business online (CRM, email marketing, content management).",
      icon: Laptop
    },
    {
      title: "Platform Integrations",
      description: "Connection of your existing digital tools for a smooth, friction-free workflow.",
      icon: Link2
    },
    {
      title: "Basic Analytics",
      description: "Setup of analytics tools to track the performance of your digital presence and customer interactions.",
      icon: BarChart
    },
    {
      title: "Simple Chatbot",
      description: "Installation of a basic virtual assistant to answer frequent customer questions 24/7.",
      icon: MessageSquare
    }
  ],
  benefits: isPathFrench ? [
    "Augmentation de la visibilité en ligne de 45%",
    "Réduction du temps administratif de 25%",
    "Amélioration de l'engagement client de 37%",
    "Augmentation des leads de 30%",
    "Création d'une base solide pour une croissance future"
  ] : [
    "45% increase in online visibility",
    "25% reduction in administrative time",
    "37% improvement in customer engagement",
    "30% increase in leads",
    "Creating a solid foundation for future growth"
  ],
  process: isPathFrench ? [
    {
      number: "01",
      title: "Audit & Stratégie",
      description: "Évaluation complète de votre présence numérique actuelle et développement d'une stratégie personnalisée"
    },
    {
      number: "02",
      title: "Configuration & Installation",
      description: "Mise en place de tous les outils et plateformes nécessaires pour votre fondation numérique"
    },
    {
      number: "03",
      title: "Formation",
      description: "Formation complète pour vous et votre équipe sur l'utilisation efficace de tous les outils"
    },
    {
      number: "04",
      title: "Optimisation",
      description: "Ajustements fins basés sur les données pour maximiser l'efficacité et les résultats"
    }
  ] : [
    {
      number: "01",
      title: "Audit & Strategy",
      description: "Comprehensive assessment of your current digital presence and development of a customized strategy"
    },
    {
      number: "02",
      title: "Setup & Installation",
      description: "Implementation of all necessary tools and platforms for your digital foundation"
    },
    {
      number: "03",
      title: "Training",
      description: "Comprehensive training for you and your team on the effective use of all tools"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Fine-tuning based on data to maximize efficiency and results"
    }
  ],
  pricing: isPathFrench ? {
    price: "À partir de 2 500€",
    period: "Mise en place initiale",
    support: "Support mensuel optionnel disponible"
  } : {
    price: "Starting at $2,500",
    period: "Initial setup",
    support: "Optional monthly support available"
  },
  testimonial: isPathFrench ? {
    quote: "Le Forfait Fondation Numérique de Minecore Group a transformé notre présence en ligne et a automatisé des processus clés que nous gérions manuellement depuis des années. Notre équipe économise maintenant 15 heures par semaine et nos leads ont augmenté de 35%.",
    author: "Marie Dubois",
    company: "Directrice, Boutique Élégance"
  } : {
    quote: "Minecore Group's Digital Foundation Package transformed our online presence and automated key processes we had been managing manually for years. Our team now saves 15 hours per week and our leads have increased by 35%.",
    author: "Sarah Johnson",
    company: "Director, Elegance Boutique"
  },
  cta: {
    title: isPathFrench ? "Prêt à Bâtir Votre Fondation Numérique?" : "Ready to Build Your Digital Foundation?",
    subtitle: isPathFrench 
      ? "Commencez votre parcours vers plus d'efficacité et de croissance" 
      : "Start your journey to greater efficiency and growth",
    primary: isPathFrench ? "Commencer Maintenant" : "Get Started Now",
    secondary: isPathFrench ? "En Savoir Plus" : "Learn More"
  }
});

export default function DigitalFoundation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <Settings className="mr-1 h-3.5 w-3.5 text-primary" />
                {isPathFrench ? "Fondation Digitale" : "Digital Foundation"}
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
              <div className="aspect-square lg:aspect-auto lg:h-[450px] rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden border border-primary/10">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Abstract digital foundation elements */}
                  <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/10 rounded-lg transform rotate-12"></div>
                  <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/15 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-24 h-12 bg-primary/10 rounded-lg transform -rotate-12"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-primary/5 rounded-lg transform rotate-45"></div>
                  
                  {/* Connection lines */}
                  <div className="absolute top-1/4 left-1/4 w-[150px] h-[1px] bg-primary/20 transform rotate-45"></div>
                  <div className="absolute top-1/3 right-1/4 w-[100px] h-[1px] bg-primary/20 transform -rotate-30"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-[120px] h-[1px] bg-primary/20 transform rotate-10"></div>
                </div>
                
                <div className="relative z-10 text-center max-w-xs">
                  <div className="w-20 h-20 bg-background rounded-xl border border-primary/10 shadow-lg flex items-center justify-center mx-auto mb-6">
                    <Settings className="h-10 w-10 text-primary/60" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">
                    {isPathFrench ? "Base Solide" : "Solid Foundation"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isPathFrench 
                      ? "Les outils et l'automatisation essentiels pour votre succès numérique" 
                      : "Essential tools and automation for your digital success"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Vue d'Ensemble" : "Overview"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {content.overview}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                {isPathFrench ? "Bénéfices Commerciaux" : "Business Benefits"}
              </h2>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  {isPathFrench ? "Résultats Clés" : "Key Results"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-primary/10 text-center">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-2xl">45%</p>
                    <p className="text-xs text-muted-foreground">
                      {isPathFrench ? "Plus de visibilité" : "More visibility"}
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-primary/10 text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-2xl">25%</p>
                    <p className="text-xs text-muted-foreground">
                      {isPathFrench ? "Temps économisé" : "Time saved"}
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-primary/10 text-center">
                    <ArrowUpRight className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-2xl">30%</p>
                    <p className="text-xs text-muted-foreground">
                      {isPathFrench ? "Plus de leads" : "More leads"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl opacity-30"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-background rounded-xl p-6 border border-primary/10 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BrainCircuit className="h-5 w-5 text-primary mr-2" />
                  {isPathFrench ? "Témoignage Client" : "Client Testimonial"}
                </h3>
                <p className="text-muted-foreground mb-4 italic">
                  "{content.testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{content.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{content.testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
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
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < content.process.length - 1 && (
                  <div className="hidden lg:block absolute transform translate-x-[110px] translate-y-[-30px]">
                    <ArrowRight className="h-5 w-5 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing & CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {content.cta.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {content.cta.subtitle}
            </p>
            
            <div className="bg-background rounded-xl p-8 mb-8 border border-primary/10 shadow-sm">
              <p className="text-3xl font-bold text-primary mb-2">{content.pricing.price}</p>
              <p className="text-sm text-muted-foreground mb-4">{content.pricing.period}</p>
              <p className="text-sm font-medium">{content.pricing.support}</p>
            </div>
            
            <Button asChild size="lg">
              <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                {content.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}