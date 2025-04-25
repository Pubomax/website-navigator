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
  Bot, 
  Cpu, 
  BarChart4, 
  Mail, 
  MessageSquare, 
  Calendar,
  BrainCircuit,
  Zap,
  CheckCircle,
  Clock,
  DollarSign,
  ArrowUpRight
} from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Forfait Démarrage Automatisation IA" 
    : "AI & Automation Starter Package",
  subtitle: isPathFrench
    ? "Commencez votre parcours d'automatisation IA avec une solution abordable qui génère des résultats rapides"
    : "Begin your AI automation journey with an affordable solution that delivers quick results",
  tagline: isPathFrench
    ? "Augmentez vos revenus de 30% et réduisez votre charge de travail en seulement 30 jours"
    : "Increase your revenue by 30% and reduce your workload in just 30 days",
  overview: isPathFrench
    ? "Notre forfait démarrage d'automatisation IA est parfait pour les entreprises qui souhaitent commencer à utiliser l'intelligence artificielle pour automatiser les tâches répétitives, améliorer l'efficacité et stimuler la croissance, sans investissement initial important."
    : "Our AI Automation Starter Package is perfect for businesses looking to start using artificial intelligence to automate repetitive tasks, improve efficiency, and drive growth, without a large upfront investment.",
  highlights: isPathFrench ? [
    {
      title: "Implémentation Rapide",
      description: "Mise en place complète en seulement 14 jours – commencez à voir des résultats immédiatement",
      icon: Clock
    },
    {
      title: "Augmentation des Revenus",
      description: "Augmentez vos revenus de 30% en moyenne grâce à l'automatisation intelligente",
      icon: DollarSign
    },
    {
      title: "Réduction de la Charge de Travail",
      description: "Réduisez votre temps de travail de 20 heures par semaine avec l'automatisation IA",
      icon: Zap
    }
  ] : [
    {
      title: "Fast Implementation",
      description: "Complete setup in just 14 days – start seeing results immediately",
      icon: Clock
    },
    {
      title: "Revenue Increase",
      description: "Boost your revenue by 30% on average through intelligent automation",
      icon: DollarSign
    },
    {
      title: "Workload Reduction",
      description: "Reduce your working time by 20 hours per week with AI automation",
      icon: Zap
    }
  ],
  features: isPathFrench ? [
    {
      title: "Assistant Email IA",
      description: "Automatisez vos emails et réponses avec un assistant IA qui gère votre boîte de réception 24/7",
      icon: Mail,
      benefits: [
        "Réduction du temps passé sur les emails de 80%",
        "Réponses automatiques intelligentes",
        "Catégorisation et priorisation automatique"
      ]
    },
    {
      title: "Chatbot Client Intelligent",
      description: "Un chatbot IA qui répond aux questions des clients, qualifie les leads et planifie des rendez-vous automatiquement",
      icon: MessageSquare,
      benefits: [
        "Disponible 24/7 pour vos clients",
        "Qualifie les leads selon vos critères",
        "Réduit les délais de réponse à moins de 1 minute"
      ]
    },
    {
      title: "Gestion Automatisée du Calendrier",
      description: "Planification et gestion intelligente de votre agenda pour optimiser votre temps de travail",
      icon: Calendar,
      benefits: [
        "Planification automatique des réunions",
        "Rappels et suivis automatisés",
        "Optimisation du temps basée sur vos priorités"
      ]
    },
    {
      title: "Analytics IA",
      description: "Tableaux de bord et rapports automatisés qui identifient les opportunités de croissance",
      icon: BarChart4,
      benefits: [
        "Rapports générés automatiquement",
        "Analyse prédictive des tendances",
        "Recommandations d'actions concrètes"
      ]
    }
  ] : [
    {
      title: "AI Email Assistant",
      description: "Automate your emails and responses with an AI assistant that manages your inbox 24/7",
      icon: Mail,
      benefits: [
        "80% reduction in email time",
        "Intelligent automated responses",
        "Automatic categorization and prioritization"
      ]
    },
    {
      title: "Intelligent Customer Chatbot",
      description: "An AI chatbot that answers customer questions, qualifies leads, and schedules appointments automatically",
      icon: MessageSquare,
      benefits: [
        "Available 24/7 for your customers",
        "Qualifies leads according to your criteria",
        "Reduces response times to under 1 minute"
      ]
    },
    {
      title: "Automated Calendar Management",
      description: "Intelligent scheduling and calendar management to optimize your working time",
      icon: Calendar,
      benefits: [
        "Automatic meeting scheduling",
        "Automated reminders and follow-ups",
        "Time optimization based on your priorities"
      ]
    },
    {
      title: "AI Analytics",
      description: "Automated dashboards and reports that identify growth opportunities",
      icon: BarChart4,
      benefits: [
        "Automatically generated reports",
        "Predictive trend analysis",
        "Concrete action recommendations"
      ]
    }
  ],
  results: isPathFrench ? [
    {
      stat: "30%",
      label: "Augmentation moyenne des revenus"
    },
    {
      stat: "20h",
      label: "Économisées par semaine"
    },
    {
      stat: "65%",
      label: "Amélioration du taux de conversion"
    },
    {
      stat: "14j",
      label: "Jusqu'au lancement complet"
    }
  ] : [
    {
      stat: "30%",
      label: "Average revenue increase"
    },
    {
      stat: "20h",
      label: "Saved per week"
    },
    {
      stat: "65%",
      label: "Improved conversion rate"
    },
    {
      stat: "14d",
      label: "To full launch"
    }
  ],
  testimonial: isPathFrench ? {
    quote: "Le forfait Démarrage IA nous a permis d'automatiser nos processus d'email et de support client. Nous économisons maintenant 25 heures par semaine et notre chiffre d'affaires a augmenté de 35% en seulement deux mois.",
    author: "Jean Dubois",
    company: "Directeur, Optique Vision"
  } : {
    quote: "The AI Starter Package allowed us to automate our email and customer support processes. We now save 25 hours per week and our revenue has increased by 35% in just two months.",
    author: "John Smith",
    company: "Director, Vision Optics"
  },
  process: isPathFrench ? [
    {
      title: "Consultation Initiale",
      description: "Nous évaluons vos processus actuels et identifions les meilleures opportunités d'automatisation"
    },
    {
      title: "Configuration Personnalisée",
      description: "Nous configurons et personnalisons les outils d'automatisation IA selon vos besoins spécifiques"
    },
    {
      title: "Formation & Intégration",
      description: "Nous formons votre équipe et intégrons les solutions à vos systèmes existants"
    },
    {
      title: "Lancement & Optimisation",
      description: "Nous lançons les solutions et optimisons continuellement pour maximiser les résultats"
    }
  ] : [
    {
      title: "Initial Consultation",
      description: "We assess your current processes and identify the best automation opportunities"
    },
    {
      title: "Custom Configuration",
      description: "We set up and customize the AI automation tools according to your specific needs"
    },
    {
      title: "Training & Integration",
      description: "We train your team and integrate the solutions with your existing systems"
    },
    {
      title: "Launch & Optimization",
      description: "We launch the solutions and continuously optimize to maximize results"
    }
  ],
  pricing: isPathFrench ? {
    price: "À partir de 1 500€",
    period: "Installation initiale + 250€/mois",
    guarantee: "Garantie de résultats ou remboursement"
  } : {
    price: "Starting at $1,500",
    period: "Initial setup + $250/month",
    guarantee: "Results guarantee or your money back"
  },
  cta: {
    title: isPathFrench ? "Prêt à Commencer Votre Parcours d'Automatisation IA?" : "Ready to Start Your AI Automation Journey?",
    description: isPathFrench 
      ? "Commencez à automatiser vos processus et à augmenter vos revenus dès aujourd'hui" 
      : "Start automating your processes and increasing your revenue today",
    primary: isPathFrench ? "Commencer Maintenant" : "Get Started Now",
    secondary: isPathFrench ? "Voir les Études de Cas" : "View Case Studies"
  }
});

export default function AIAutomationStarter() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        
        <div className="container max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <Bot className="mr-1 h-3.5 w-3.5 text-primary" />
                {isPathFrench ? "IA & Automatisation" : "AI & Automation"}
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                {content.title}
              </h1>
              
              <p className="text-xl font-medium text-primary mb-4">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-background p-6 rounded-xl border border-primary/10 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {content.results.map((item, index) => (
                    <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                      <p className="text-3xl font-bold text-primary">{item.stat}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-primary/5 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">
                      {isPathFrench ? "Propulsé par l'IA" : "Powered by AI"}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isPathFrench 
                      ? "Nos solutions d'automatisation IA travaillent 24/7 pour vous, même pendant votre sommeil" 
                      : "Our AI automation solutions work 24/7 for you, even while you sleep"}
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {content.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/10">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Vue d'Ensemble" : "Overview"}
            </h2>
            <p className="text-xl text-muted-foreground">
              {content.overview}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {isPathFrench ? "Notre Processus" : "Our Process"}
              </h3>
              
              <div className="space-y-6">
                {content.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {isPathFrench ? "Témoignage Client" : "Client Testimonial"}
              </h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-background p-6 rounded-xl border border-primary/10 shadow-md"
              >
                <p className="text-lg italic mb-6">"{content.testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <BrainCircuit className="h-6 w-6 text-primary/60" />
                  </div>
                  <div>
                    <p className="font-semibold">{content.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{content.testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">
                    {isPathFrench ? "Forfait de Démarrage" : "Starter Package"}
                  </h4>
                  <Badge variant="outline">
                    {isPathFrench ? "Plus Populaire" : "Most Popular"}
                  </Badge>
                </div>
                <p className="text-3xl font-bold mb-1">{content.pricing.price}</p>
                <p className="text-sm text-muted-foreground mb-4">{content.pricing.period}</p>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  <span>{content.pricing.guarantee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <h2 className="text-3xl font-bold mb-16 text-center">
            {isPathFrench ? "Fonctionnalités Clés" : "Key Features"}
          </h2>
          
          <div className="space-y-16">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className={`aspect-video rounded-xl ${index % 2 === 0 ? 'bg-primary/5' : 'bg-primary/10'} flex items-center justify-center`}>
                    <feature.icon className="h-24 w-24 text-primary/60" />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {content.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.cta.description}
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