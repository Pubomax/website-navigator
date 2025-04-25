import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  BrainCircuit, 
  CheckCircle, 
  Clock,
  DollarSign, 
  LayoutGrid, 
  LineChart, 
  Mail, 
  MessageSquare, 
  Rocket, 
  Send, 
  Sparkles, 
  Target, 
  Users,
  Zap,
  ArrowRight,
  Briefcase
} from "lucide-react";

export default function SmartNurturing() {
  // Check if we're on the French version
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content based on language
  const content = {
    hero: {
      title: isPathFrench 
        ? "Nurturing Intelligent : Convertissez Plus de Prospects avec Moins d'Effort" 
        : "Smart Nurturing: Convert More Leads with Less Effort",
      subtitle: isPathFrench
        ? "Notre solution de nurturing intelligente utilise l'IA pour automatiser les communications personnalisées, ce qui vous permet de convertir davantage de prospects."
        : "Our intelligent nurturing solution uses AI to automate personalized communications, enabling you to convert more leads.",
      cta: isPathFrench ? "Démarrer maintenant" : "Get Started",
      secondary: isPathFrench ? "En savoir plus" : "Learn More",
      stats: [
        {
          value: isPathFrench ? "+267%" : "+267%",
          label: isPathFrench ? "Taux de conversion des prospects" : "Lead conversion rate",
          icon: Target,
        },
        {
          value: isPathFrench ? "-85%" : "-85%",
          label: isPathFrench ? "Temps consacré au suivi" : "Time spent on follow-ups",
          icon: Clock,
        },
        {
          value: isPathFrench ? "+195%" : "+195%",
          label: isPathFrench ? "Engagement des prospects" : "Lead engagement",
          icon: Zap,
        },
      ]
    },
    benefitCategories: {
      automation: isPathFrench ? "Automatisation" : "Automation",
      personalization: isPathFrench ? "Personnalisation" : "Personalization",
      intelligence: isPathFrench ? "Intelligence" : "Intelligence"
    },
    automation: [
      {
        title: isPathFrench ? "Séquences Automatisées" : "Automated Sequences",
        description: isPathFrench 
          ? "Créez des parcours de communication multi-canaux qui s'exécutent entièrement sans intervention manuelle."
          : "Create multi-channel communication journeys that run entirely without manual intervention.",
        icon: LayoutGrid,
        stat: "24/7"
      },
      {
        title: isPathFrench ? "Réponses Instantanées" : "Instant Responses",
        description: isPathFrench 
          ? "Les prospects reçoivent une réponse immédiate à n'importe quelle heure, ce qui améliore l'engagement."
          : "Leads receive an immediate response at any hour, improving engagement rates.",
        icon: Zap,
        stat: "<1s"
      },
      {
        title: isPathFrench ? "Planification Automatisée" : "Automated Scheduling",
        description: isPathFrench 
          ? "Planifiez et envoyez des communications aux moments optimaux pour chaque prospect."
          : "Schedule and send communications at optimal times for each lead.",
        icon: Clock,
        stat: "+62%"
      }
    ],
    personalization: [
      {
        title: isPathFrench ? "Messages Dynamiques" : "Dynamic Messages",
        description: isPathFrench 
          ? "Adapte automatiquement le contenu en fonction du comportement et des préférences du prospect."
          : "Automatically adapts content based on lead behavior and preferences.",
        icon: MessageSquare,
        stat: "+86%"
      },
      {
        title: isPathFrench ? "Parcours Adaptatifs" : "Adaptive Journeys",
        description: isPathFrench 
          ? "Les parcours de communication s'ajustent en temps réel en fonction des actions des prospects."
          : "Communication journeys adjust in real-time based on lead actions.",
        icon: LineChart,
        stat: "+123%"
      },
      {
        title: isPathFrench ? "Multi-Canal Intégré" : "Integrated Multi-Channel",
        description: isPathFrench 
          ? "Engage les prospects sur leurs canaux préférés – email, SMS, médias sociaux et plus."
          : "Engages leads on their preferred channels – email, SMS, social media, and more.",
        icon: Send,
        stat: "5-7x"
      }
    ],
    intelligence: [
      {
        title: isPathFrench ? "Scoring IA" : "AI Scoring",
        description: isPathFrench 
          ? "Évalue et priorise automatiquement les prospects en fonction de leur intérêt et de leur potentiel d'achat."
          : "Automatically evaluates and prioritizes leads based on their interest and purchase potential.",
        icon: BarChart3,
        stat: "+217%"
      },
      {
        title: isPathFrench ? "Réponses Intelligentes" : "Smart Responses",
        description: isPathFrench 
          ? "L'IA génère des réponses pertinentes aux questions des prospects en temps réel."
          : "AI generates relevant responses to lead questions in real-time.",
        icon: BrainCircuit,
        stat: "24/7"
      },
      {
        title: isPathFrench ? "Optimisation Continue" : "Continuous Optimization",
        description: isPathFrench 
          ? "Améliore automatiquement les séquences basées sur les performances pour maximiser les conversions."
          : "Automatically improves sequences based on performance to maximize conversions.",
        icon: Sparkles,
        stat: "+35%"
      }
    ],
    features: isPathFrench 
      ? [
        "Intégration avec votre CRM existant",
        "Campagnes d'emails personnalisées",
        "Suivi SMS dynamique",
        "Automatisation des médias sociaux",
        "Analyses avancées et rapports",
        "Interface intuitive par glisser-déposer",
        "Modèles de communication prêts à l'emploi",
        "Segmentation automatique des prospects",
        "Scoring de prospects basé sur l'IA",
        "Intégrations avec plus de 50 outils"
      ]
      : [
        "Integration with your existing CRM",
        "Personalized email campaigns",
        "Dynamic SMS follow-up",
        "Social media automation",
        "Advanced analytics and reporting",
        "Intuitive drag-and-drop interface",
        "Ready-to-use communication templates",
        "Automatic lead segmentation",
        "AI-based lead scoring",
        "Integrations with 50+ tools"
      ],
    steps: [
      {
        number: "1",
        title: isPathFrench ? "Connectez vos sources de données" : "Connect your data sources",
        description: isPathFrench 
          ? "Intégrez votre CRM, formulaires web, et autres canaux pour automatiser la capture de prospects."
          : "Integrate your CRM, web forms, and other channels to automate lead capture."
      },
      {
        number: "2",
        title: isPathFrench ? "Configurez vos séquences" : "Set up your sequences",
        description: isPathFrench 
          ? "Créez des parcours multi-canal personnalisés avec notre interface intuitive sans code."
          : "Create personalized multi-channel journeys with our intuitive no-code interface."
      },
      {
        number: "3",
        title: isPathFrench ? "Activez l'automatisation" : "Activate automation",
        description: isPathFrench 
          ? "Lancez vos campagnes et surveillez les performances en temps réel grâce à notre tableau de bord."
          : "Launch your campaigns and monitor performance in real-time through our dashboard."
      },
      {
        number: "4",
        title: isPathFrench ? "Optimisez et développez" : "Optimize and scale",
        description: isPathFrench 
          ? "Utilisez nos analyses pour améliorer continuellement vos taux de conversion."
          : "Use our analytics to continuously improve your conversion rates."
      }
    ],
    testimonial: {
      quote: isPathFrench 
        ? "La solution de nurturing intelligente de Minecore a transformé notre processus de vente. Nous avons augmenté nos conversions de 219% tout en réduisant le temps consacré aux suivis de 85%. Je peux maintenant me concentrer sur la croissance stratégique de l'entreprise."
        : "Minecore's Smart Nurturing solution transformed our sales process. We increased conversions by 219% while reducing time spent on follow-ups by 85%. I can now focus on strategic business growth.",
      author: isPathFrench ? "Jean Dupont" : "Sarah Johnson",
      position: isPathFrench ? "Directeur Marketing, TechFlow Inc" : "Marketing Director, TechFlow Inc"
    },
    cta: {
      title: isPathFrench ? "Prêt à convertir plus de prospects avec moins d'effort ?" : "Ready to convert more leads with less effort?",
      description: isPathFrench 
        ? "Commencez dès aujourd'hui et voyez comment notre solution de nurturing intelligente peut transformer votre processus de conversion de prospects."
        : "Get started today and see how our Smart Nurturing solution can transform your lead conversion process.",
      primary: isPathFrench ? "Contactez-nous" : "Contact Us",
      secondary: isPathFrench ? "Voir une démo" : "Watch Demo"
    }
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                    {content.hero.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#features">
                    {content.hero.secondary}
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.hero.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-primary/10"
                  >
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Tabs Section */}
      <section className="py-20" id="features">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Comment Vous Pouvez Faire Plus avec Moins d'Effort" : "How You Can Do More with Less Effort"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {isPathFrench 
                ? "Notre solution de nurturing intelligente vous aide à convertir plus de prospects tout en réduisant votre charge de travail grâce à des communications personnalisées et automatisées."
                : "Our Smart Nurturing solution helps you convert more leads while reducing your workload through personalized, automated communications."}
            </p>
          </div>
          
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="automation">
                <LayoutGrid className="h-4 w-4 mr-2" />
                {content.benefitCategories.automation}
              </TabsTrigger>
              <TabsTrigger value="personalization">
                <Users className="h-4 w-4 mr-2" />
                {content.benefitCategories.personalization}
              </TabsTrigger>
              <TabsTrigger value="intelligence">
                <BrainCircuit className="h-4 w-4 mr-2" />
                {content.benefitCategories.intelligence}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="automation" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.automation.map((item, i) => (
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
            
            <TabsContent value="personalization" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.personalization.map((item, i) => (
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
            
            <TabsContent value="intelligence" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.intelligence.map((item, i) => (
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
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
                {content.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="#features">
                {content.cta.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}