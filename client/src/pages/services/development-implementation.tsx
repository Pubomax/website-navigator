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
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Bot,
  Database,
  BrainCircuit,
  LayoutGrid,
  LineChart,
  Sparkles,
  MoveRight,
  Zap,
  Gauge,
  CheckCircle,
  LucideIcon
} from "lucide-react";

type Solution = {
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  example: string;
};

type Timeline = {
  title: string;
  description: string;
  week: string;
};

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Développement & Implémentation" 
    : "Development & Implementation",
  subtitle: isPathFrench
    ? "Solutions techniques sur mesure conçues pour accélérer votre croissance et simplifier vos opérations"
    : "Custom technical solutions designed to accelerate your growth and simplify your operations",
  tagline: isPathFrench
    ? "De la conception à la mise en œuvre, en seulement 21 jours"
    : "From concept to implementation, in just 21 days",
  overview: isPathFrench
    ? "Nos solutions techniques sur mesure sont conçues pour générer des résultats rapides et réduire votre charge de travail. Nous nous spécialisons dans le développement de systèmes automatisés qui vous aident à faire plus avec moins."
    : "Our custom technical solutions are designed to generate quick results and reduce your workload. We specialize in developing automated systems that help you do more with less.",
  solutions: isPathFrench ? [
    {
      title: "Développement CRM",
      icon: Database,
      description: "Solutions CRM personnalisées pour automatiser vos processus de vente et service client",
      benefits: [
        "Automatisation du flux de travail commercial",
        "Interface intuitive qui réduit les tâches manuelles",
        "Intégration avec vos outils existants"
      ],
      example: "Un CRM sur mesure qui a permis à un client de réduire son temps administratif de 75% et d'augmenter ses ventes de 40%"
    },
    {
      title: "Implémentation Kommo",
      icon: LayoutGrid,
      description: "Configuration et personnalisation de la plateforme Kommo pour maximiser votre productivité",
      benefits: [
        "Configuration optimisée pour votre industrie",
        "Automatisation des séquences de nurturing",
        "Tableaux de bord personnalisés"
      ],
      example: "Implémentation Kommo qui a permis à une entreprise de services financiers d'augmenter ses conversions de 52% en 45 jours"
    },
    {
      title: "Chatbots Intelligents",
      icon: Bot,
      description: "Assistants IA qui répondent aux questions et qualifient les leads 24/7",
      benefits: [
        "Qualification des leads en temps réel",
        "Service client automatisé",
        "Génération de leads pendant vos heures de sommeil"
      ],
      example: "Un chatbot qui a généré plus de 150 leads qualifiés par mois pour une entreprise SaaS, sans intervention humaine"
    }
  ] : [
    {
      title: "CRM Development",
      icon: Database,
      description: "Custom CRM solutions to automate your sales and customer service processes",
      benefits: [
        "Sales workflow automation",
        "Intuitive interface that reduces manual tasks",
        "Integration with your existing tools"
      ],
      example: "A custom CRM that allowed a client to reduce administrative time by 75% and increase sales by 40%"
    },
    {
      title: "Kommo Implementation",
      icon: LayoutGrid,
      description: "Setup and customization of the Kommo platform to maximize your productivity",
      benefits: [
        "Industry-optimized configuration",
        "Automated nurturing sequences",
        "Custom dashboards"
      ],
      example: "Kommo implementation that allowed a financial services company to increase conversions by 52% in 45 days"
    },
    {
      title: "Intelligent Chatbots",
      icon: Bot,
      description: "AI assistants that answer questions and qualify leads 24/7",
      benefits: [
        "Real-time lead qualification",
        "Automated customer service",
        "Lead generation while you sleep"
      ],
      example: "A chatbot that generated over 150 qualified leads per month for a SaaS company, without human intervention"
    }
  ],
  timeline: isPathFrench ? [
    {
      week: "Semaine 1",
      title: "Analyse et Conception",
      description: "Nous comprenons vos objectifs et concevons la solution technique parfaite"
    },
    {
      week: "Semaine 2",
      title: "Développement",
      description: "Développement rapide de votre solution avec des tests en cours de route"
    },
    {
      week: "Semaine 3",
      title: "Implémentation et Formation",
      description: "Mise en œuvre de la solution et formation de votre équipe à son utilisation"
    }
  ] : [
    {
      week: "Week 1",
      title: "Analysis & Design",
      description: "We understand your goals and design the perfect technical solution"
    },
    {
      week: "Week 2",
      title: "Development",
      description: "Rapid development of your solution with testing along the way"
    },
    {
      week: "Week 3",
      title: "Implementation & Training",
      description: "Implement the solution and train your team on using it"
    }
  ],
  stats: isPathFrench ? [
    {
      value: "75%",
      label: "Réduction des tâches manuelles"
    },
    {
      value: "3x",
      label: "Augmentation de la productivité"
    },
    {
      value: "45%",
      label: "Croissance des revenus"
    },
    {
      value: "21",
      label: "Jours jusqu'aux résultats"
    }
  ] : [
    {
      value: "75%",
      label: "Reduction in manual tasks"
    },
    {
      value: "3x",
      label: "Increase in productivity"
    },
    {
      value: "45%",
      label: "Revenue growth"
    },
    {
      value: "21",
      label: "Days to results"
    }
  ],
  technologies: isPathFrench ? [
    {
      icon: Bot,
      name: "Intelligence Artificielle",
      description: "Solutions d'IA pour l'automatisation et la prise de décision"
    },
    {
      icon: Database,
      name: "Bases de Données",
      description: "Solutions de stockage de données optimisées et sécurisées"
    },
    {
      icon: Code,
      name: "Développement Sur Mesure",
      description: "Solutions logicielles adaptées à vos besoins spécifiques"
    },
    {
      icon: LayoutGrid,
      name: "Intégrations",
      description: "Connectez tous vos outils pour un flux de travail sans friction"
    }
  ] : [
    {
      icon: Bot,
      name: "Artificial Intelligence",
      description: "AI solutions for automation and decision making"
    },
    {
      icon: Database,
      name: "Databases",
      description: "Optimized and secure data storage solutions"
    },
    {
      icon: Code,
      name: "Custom Development",
      description: "Software solutions tailored to your specific needs"
    },
    {
      icon: LayoutGrid,
      name: "Integrations",
      description: "Connect all your tools for a frictionless workflow"
    }
  ],
  benefitsSummary: isPathFrench ? [
    {
      icon: Gauge,
      title: "Efficacité Accrue",
      description: "Réduisez le temps consacré aux tâches répétitives de 75% en moyenne"
    },
    {
      icon: Zap,
      title: "Livraison Rapide",
      description: "Mise en œuvre complète en 21 jours seulement, pas de projets interminables"
    },
    {
      icon: Sparkles,
      title: "Solutions Sur Mesure",
      description: "Conçues spécifiquement pour vos défis commerciaux uniques"
    }
  ] : [
    {
      icon: Gauge,
      title: "Increased Efficiency",
      description: "Reduce time spent on repetitive tasks by 75% on average"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Full implementation in just 21 days, no never-ending projects"
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Designed specifically for your unique business challenges"
    }
  ],
  cta: {
    title: isPathFrench ? "Prêt à Automatiser Votre Succès?" : "Ready to Automate Your Success?",
    primary: isPathFrench ? "Commencer Maintenant" : "Get Started Now",
    secondary: isPathFrench ? "Voir Nos Études de Cas" : "View Case Studies"
  }
});

export default function DevelopmentImplementation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="w-full">
      {/* Hero Section with Code Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0"></div>
        {/* Animated code symbols background */}
        <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
          <div className="relative w-full h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary text-opacity-10 text-lg font-mono"
                initial={{ 
                  x: Math.random() * 100 - 50, 
                  y: -20,
                  opacity: 0 
                }}
                animate={{ 
                  y: ['0%', '100%'], 
                  opacity: [0, 1, 1, 0],
                  x: i % 2 === 0 
                    ? [Math.random() * 100, Math.random() * 100 - 50] 
                    : [Math.random() * 100 - 100, Math.random() * 100 - 50]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + Math.random() * 20,
                  delay: Math.random() * 10
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              >
                {'{'}
              </motion.div>
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i + 16}
                className="absolute text-primary text-opacity-10 text-lg font-mono"
                initial={{ 
                  x: Math.random() * 100 - 50, 
                  y: -20,
                  opacity: 0 
                }}
                animate={{ 
                  y: ['0%', '100%'], 
                  opacity: [0, 1, 1, 0],
                  x: i % 2 === 0 
                    ? [Math.random() * 100, Math.random() * 100 - 50] 
                    : [Math.random() * 100 - 100, Math.random() * 100 - 50]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + Math.random() * 20,
                  delay: Math.random() * 10
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              >
                {'}'}
              </motion.div>
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i + 32}
                className="absolute text-primary text-opacity-10 text-lg font-mono"
                initial={{ 
                  x: Math.random() * 100 - 50, 
                  y: -20,
                  opacity: 0 
                }}
                animate={{ 
                  y: ['0%', '100%'], 
                  opacity: [0, 1, 1, 0],
                  x: i % 2 === 0 
                    ? [Math.random() * 100, Math.random() * 100 - 50] 
                    : [Math.random() * 100 - 100, Math.random() * 100 - 50]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + Math.random() * 20,
                  delay: Math.random() * 10
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              >
                {'</>'}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <Code className="mr-1 h-3.5 w-3.5 text-primary" />
                {isPathFrench ? "Solutions Techniques" : "Technical Solutions"}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {content.title}
              </h1>
              <p className="text-lg font-medium text-primary mb-4">
                {content.tagline}
              </p>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Stats cards with a modern technological look */}
              <div className="grid grid-cols-2 gap-4">
                {content.stats.map((stat, index) => (
                  <Card key={index} className="border-primary/10 bg-background/60 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Solutions Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isPathFrench ? "Nos Solutions Techniques" : "Our Technical Solutions"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.overview}
            </p>
          </div>
          
          <div className="space-y-12 mt-12">
            {content.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`p-4 rounded-2xl ${index % 2 === 0 ? 'bg-primary/5' : 'bg-primary/10'} aspect-video flex items-center justify-center`}>
                    <solution.icon className="h-24 w-24 text-primary/70" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border border-primary/10 rounded-lg bg-primary/5">
                    <p className="text-sm italic">
                      <span className="font-medium">
                        {isPathFrench ? "Exemple de réussite: " : "Success example: "}
                      </span>
                      {solution.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isPathFrench ? "Notre Processus en 21 Jours" : "Our 21-Day Process"}
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 h-full w-0.5 bg-primary/20 transform lg:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {content.timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Week marker - alternating sides on desktop */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1 lg:text-right' : 'lg:order-1 lg:text-right'} flex items-center gap-4 lg:gap-0`}>
                      <div className="w-8 h-8 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10 lg:order-last lg:ml-4">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      </div>
                      <div className={`lg:w-full ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pr-8'}`}>
                        <h3 className="text-xl font-bold text-primary">{item.week}</h3>
                      </div>
                    </div>
                    
                    {/* Content - alternating sides on desktop */}
                    <div className={`pl-12 lg:pl-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-8' : 'lg:order-2 lg:pl-8'}`}>
                      <div className="p-6 bg-background rounded-lg shadow-sm border border-primary/10">
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isPathFrench ? "Technologies" : "Technologies"}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <tech.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Summary */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isPathFrench ? "Pourquoi Choisir Nos Solutions" : "Why Choose Our Solutions"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefitsSummary.map((benefit, index) => (
              <Card key={index} className="border-primary/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">{content.cta.title}</h2>
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