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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  DollarSign, 
  Clock, 
  TrendingUp,
  Target,
  Zap,
  BrainCircuit,
  Briefcase,
  MessageSquare,
  ClipboardCheck,
  BarChart3,
  CheckCircle
} from "lucide-react";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Automatisation des Ventes" 
    : "Sales Automation",
  subtitle: isPathFrench
    ? "Augmentez vos revenus de 40% tout en réduisant votre charge de travail grâce à notre plateforme d'automatisation des ventes alimentée par l'IA"
    : "Increase your revenue by 40% while reducing your workload with our AI-powered sales automation platform",
  badges: isPathFrench ? [
    "Génération de revenus accélérée",
    "Moins d'heures de travail",
    "ROI en 14 jours"
  ] : [
    "Accelerated revenue generation",
    "Fewer working hours",
    "ROI in 14 days"
  ],
  benefitCategories: isPathFrench ? {
    revenue: "Augmentez Vos Revenus",
    time: "Réduisez Votre Temps de Travail",
    experience: "Améliorez l'Expérience Client"
  } : {
    revenue: "Increase Your Revenue",
    time: "Reduce Your Work Time",
    experience: "Improve Customer Experience"
  },
  revenue: isPathFrench ? [
    {
      title: "Augmentation du Taux de Conversion",
      description: "Conversion 47% plus élevée grâce à l'automatisation du suivi et au timing parfait",
      icon: TrendingUp,
      stat: "+47%"
    },
    {
      title: "Cycle de Vente Plus Court",
      description: "Réduisez le cycle de vente moyen de 62% avec des processus automatisés",
      icon: Zap,
      stat: "-62%"
    },
    {
      title: "Plus de Leads Qualifiés",
      description: "Identifiez et ciblez les prospects à forte probabilité de conversion",
      icon: Target,
      stat: "3,5x"
    }
  ] : [
    {
      title: "Increased Conversion Rate",
      description: "47% higher conversion with automated follow-up and perfect timing",
      icon: TrendingUp,
      stat: "+47%"
    },
    {
      title: "Shorter Sales Cycle",
      description: "Reduce average sales cycle by 62% with automated processes",
      icon: Zap,
      stat: "-62%"
    },
    {
      title: "More Qualified Leads",
      description: "Identify and target prospects with high conversion probability",
      icon: Target,
      stat: "3.5x"
    }
  ],
  time: isPathFrench ? [
    {
      title: "Automatisation des Tâches Répétitives",
      description: "Éliminez 85% des tâches répétitives dans votre processus de vente",
      icon: Clock,
      stat: "85%"
    },
    {
      title: "Devis et Propositions Instantanés",
      description: "Générez des devis professionnels en quelques secondes au lieu d'heures",
      icon: ClipboardCheck,
      stat: "98%"
    },
    {
      title: "Rapports Automatisés",
      description: "Recevez des analyses de performance sans avoir à les compiler manuellement",
      icon: BarChart3,
      stat: "6h+"
    }
  ] : [
    {
      title: "Repetitive Task Automation",
      description: "Eliminate 85% of repetitive tasks in your sales process",
      icon: Clock,
      stat: "85%"
    },
    {
      title: "Instant Quotes & Proposals",
      description: "Generate professional quotes in seconds instead of hours",
      icon: ClipboardCheck,
      stat: "98%"
    },
    {
      title: "Automated Reporting",
      description: "Get performance analytics without manual compilation",
      icon: BarChart3,
      stat: "6h+"
    }
  ],
  experience: isPathFrench ? [
    {
      title: "Réponses Instantanées",
      description: "Répondez aux demandes des clients en moins de 5 minutes, 24/7",
      icon: MessageSquare,
      stat: "5min"
    },
    {
      title: "Expérience Personnalisée",
      description: "Offrez des expériences sur mesure basées sur le comportement du client",
      icon: BrainCircuit,
      stat: "100%"
    },
    {
      title: "Suivi Parfaitement Chronométré",
      description: "Engagez les prospects exactement au bon moment pour maximiser les conversions",
      icon: CheckCircle,
      stat: "3.2x"
    }
  ] : [
    {
      title: "Instant Responses",
      description: "Respond to customer inquiries in under 5 minutes, 24/7",
      icon: MessageSquare,
      stat: "5min"
    },
    {
      title: "Personalized Experience",
      description: "Deliver tailored experiences based on customer behavior",
      icon: BrainCircuit,
      stat: "100%"
    },
    {
      title: "Perfectly Timed Follow-up",
      description: "Engage prospects at exactly the right moment to maximize conversions",
      icon: CheckCircle,
      stat: "3.2x"
    }
  ],
  features: isPathFrench ? [
    "Séquences de suivi automatisées",
    "Enrichissement des données de lead en temps réel",
    "Scoring prédictif des prospects basé sur l'IA",
    "Automatisation des e-mails avec personnalisation",
    "Détection d'intention d'achat",
    "Génération de devis automatisée",
    "Gestion des objections basée sur l'IA",
    "Intégration avec votre CRM existant",
    "Alertes d'opportunités en temps réel",
    "Tableaux de bord de vente personnalisés"
  ] : [
    "Automated follow-up sequences",
    "Real-time lead data enrichment",
    "AI-based predictive lead scoring",
    "Email automation with personalization",
    "Purchase intent detection",
    "Automated quote generation",
    "AI-based objection handling",
    "Integration with your existing CRM",
    "Real-time opportunity alerts",
    "Custom sales dashboards"
  ],
  steps: isPathFrench ? [
    {
      number: "01",
      title: "Intégration Rapide",
      description: "Connectez vos sources de leads et votre CRM en moins de 30 minutes"
    },
    {
      number: "02",
      title: "Activation Automatique",
      description: "Notre système commence immédiatement à qualifier et engager vos prospects"
    },
    {
      number: "03",
      title: "Analyse & Optimisation",
      description: "L'IA optimise continuellement les séquences pour maximiser les conversions"
    },
    {
      number: "04",
      title: "Génération de Revenus",
      description: "Commencez à voir des résultats mesurables dans les 14 premiers jours"
    }
  ] : [
    {
      number: "01",
      title: "Quick Integration",
      description: "Connect your lead sources and CRM in less than 30 minutes"
    },
    {
      number: "02",
      title: "Automatic Activation",
      description: "Our system immediately begins qualifying and engaging your prospects"
    },
    {
      number: "03",
      title: "Analysis & Optimization",
      description: "AI continuously optimizes sequences to maximize conversions"
    },
    {
      number: "04",
      title: "Revenue Generation",
      description: "Start seeing measurable results within the first 14 days"
    }
  ],
  testimonial: isPathFrench ? {
    quote: "Nous avons augmenté nos ventes de 52% tout en réduisant les heures consacrées au suivi des prospects de 70%. C'est comme avoir une équipe de vente qui travaille 24/7 sans fatigue ni vacances.",
    author: "Marc Dupont",
    position: "Directeur Commercial, TechSolutions Inc."
  } : {
    quote: "We increased our sales by 52% while reducing hours spent on lead follow-up by 70%. It's like having a sales team that works 24/7 without fatigue or vacations.",
    author: "Mark Johnson",
    position: "Sales Director, TechSolutions Inc."
  },
  cta: {
    title: isPathFrench ? "Prêt à Vendre Plus Avec Moins d'Effort?" : "Ready to Sell More With Less Effort?",
    description: isPathFrench 
      ? "Commencez à utiliser notre plateforme d'automatisation des ventes et constatez des résultats en moins de deux semaines." 
      : "Start using our sales automation platform and see results in less than two weeks.",
    primary: isPathFrench ? "Commencer à Gagner Plus" : "Start Making More Money",
    secondary: isPathFrench ? "Voir une Démo" : "Watch Demo"
  }
});

export default function SalesAutomation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="w-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-3 py-1">
                <BrainCircuit className="mr-1 h-3.5 w-3.5 text-primary" />
                {isPathFrench ? "IA & Automatisation" : "AI & Automation"}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                {content.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {content.badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {badge}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                    {content.cta.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#">
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
              <div className="aspect-square max-w-md mx-auto lg:ml-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="relative">
                    <div className="text-8xl font-bold text-primary/40">
                      <DollarSign className="h-32 w-32 opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold">+40%</span>
                      <span className="text-sm text-muted-foreground">
                        {isPathFrench ? "REVENUS" : "REVENUE"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-background p-4 rounded-full shadow-lg border border-primary/10">
                  <div className="flex items-center gap-1">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-bold">-65%</span>
                    <span className="text-xs text-muted-foreground">
                      {isPathFrench ? "TEMPS" : "TIME"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Comment Vous Pouvez Gagner Plus en Travaillant Moins" : "How You Can Make More Money While Working Less"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {isPathFrench 
                ? "Notre plateforme d'automatisation des ventes vous aide à générer plus de revenus tout en réduisant votre charge de travail grâce à des processus intelligents et automatisés."
                : "Our sales automation platform helps you generate more revenue while reducing your workload through intelligent, automated processes."}
            </p>
          </div>
          
          <Tabs defaultValue="revenue" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="revenue">
                <DollarSign className="h-4 w-4 mr-2" />
                {content.benefitCategories.revenue}
              </TabsTrigger>
              <TabsTrigger value="time">
                <Clock className="h-4 w-4 mr-2" />
                {content.benefitCategories.time}
              </TabsTrigger>
              <TabsTrigger value="experience">
                <BrainCircuit className="h-4 w-4 mr-2" />
                {content.benefitCategories.experience}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="revenue" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.revenue.map((item, i) => (
                  <Card key={i} className="border-primary/10 overflow-hidden">
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary font-bold rounded-full px-3 py-1 text-lg">
                      {item.stat}
                    </div>
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="time" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.time.map((item, i) => (
                  <Card key={i} className="border-primary/10 overflow-hidden">
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary font-bold rounded-full px-3 py-1 text-lg">
                      {item.stat}
                    </div>
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.experience.map((item, i) => (
                  <Card key={i} className="border-primary/10 overflow-hidden">
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary font-bold rounded-full px-3 py-1 text-lg">
                      {item.stat}
                    </div>
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Features & Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  {isPathFrench ? "Fonctionnalités Puissantes" : "Powerful Features"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8">
                  {isPathFrench ? "Comment Ça Fonctionne" : "How It Works"}
                </h2>
                <div className="space-y-8">
                  {content.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary/5 p-8 sm:p-12 rounded-xl relative"
          >
            <div className="absolute -top-6 -left-6 text-primary text-9xl opacity-10">"</div>
            
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl mb-8 relative z-10">
                "{content.testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{content.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{content.testimonial.position}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-5xl text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{content.cta.title}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
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