import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ActivitySquare,
  ArrowRight,
  BarChart3, 
  BarChart4,
  BrainCircuit, 
  Briefcase,
  CheckCircle, 
  Clock,
  Compass,
  DollarSign, 
  Globe,
  LineChart, 
  MousePointerClick,
  PersonStanding,
  PieChart,
  Rocket, 
  Search,
  ShoppingCart,
  Sparkles, 
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Wand2
} from "lucide-react";

export default function QuickAcquisition() {
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
        ? "Acquisition Rapide : Plus de Clients en Moins de Temps" 
        : "Quick Acquisition: More Customers in Less Time",
      subtitle: isPathFrench
        ? "Notre solution d'acquisition rapide vous aide à accélérer votre croissance avec des stratégies multichannel optimisées par l'IA qui attirent les clients qualifiés."
        : "Our quick acquisition solution helps you accelerate growth with AI-optimized multichannel strategies that attract qualified customers.",
      cta: isPathFrench ? "Démarrer maintenant" : "Get Started",
      secondary: isPathFrench ? "En savoir plus" : "Learn More",
      stats: [
        {
          value: isPathFrench ? "+312%" : "+312%",
          label: isPathFrench ? "ROI moyen" : "Average ROI",
          icon: LineChart,
        },
        {
          value: isPathFrench ? "-47%" : "-47%",
          label: isPathFrench ? "Coût d'acquisition" : "Cost per acquisition",
          icon: DollarSign,
        },
        {
          value: isPathFrench ? "+136%" : "+136%",
          label: isPathFrench ? "Taux de conversion" : "Conversion rate",
          icon: TrendingUp,
        },
      ]
    },
    benefitCategories: {
      speed: isPathFrench ? "Vitesse" : "Speed",
      scale: isPathFrench ? "Échelle" : "Scale",
      value: isPathFrench ? "Valeur" : "Value"
    },
    speed: [
      {
        title: isPathFrench ? "Démarrage Immédiat" : "Instant Setup",
        description: isPathFrench 
          ? "Lancez vos campagnes d'acquisition en quelques heures au lieu de semaines ou de mois."
          : "Get your acquisition campaigns up and running in hours instead of weeks or months.",
        icon: Rocket,
        stat: "< 24h"
      },
      {
        title: isPathFrench ? "Optimisation en Temps Réel" : "Real-Time Optimization",
        description: isPathFrench 
          ? "L'IA ajuste continuellement vos campagnes pour maximiser les performances à chaque instant."
          : "AI continuously adjusts your campaigns to maximize performance at every moment.",
        icon: Sparkles,
        stat: "24/7"
      },
      {
        title: isPathFrench ? "Résultats Rapides" : "Fast Results",
        description: isPathFrench 
          ? "Commencez à acquérir de nouveaux clients qualifiés dès le premier jour de déploiement."
          : "Start acquiring new qualified customers from day one of deployment.",
        icon: Clock,
        stat: "Day 1"
      }
    ],
    scale: [
      {
        title: isPathFrench ? "Multi-Canal" : "Multi-Channel",
        description: isPathFrench 
          ? "Attirez des clients via tous les canaux pertinents - recherche, social, display, et plus."
          : "Attract customers across all relevant channels - search, social, display, and more.",
        icon: Globe,
        stat: "10+"
      },
      {
        title: isPathFrench ? "Expansion Géographique" : "Geographic Expansion",
        description: isPathFrench 
          ? "Étendez rapidement votre portée à de nouveaux marchés et régions sans effort supplémentaire."
          : "Quickly expand your reach to new markets and regions without additional effort.",
        icon: Compass,
        stat: "Global"
      },
      {
        title: isPathFrench ? "Mise à l'Échelle Automatique" : "Automatic Scaling",
        description: isPathFrench 
          ? "Le système augmente automatiquement les investissements dans les canaux qui performent le mieux."
          : "The system automatically increases investment in the best-performing channels.",
        icon: TrendingUp,
        stat: "Auto"
      }
    ],
    value: [
      {
        title: isPathFrench ? "Ciblage Précis" : "Precision Targeting",
        description: isPathFrench 
          ? "Atteignez uniquement les clients les plus susceptibles d'acheter, éliminant le gaspillage."
          : "Reach only the customers most likely to buy, eliminating waste.",
        icon: Target,
        stat: "99.8%"
      },
      {
        title: isPathFrench ? "Clients de Qualité" : "Quality Customers",
        description: isPathFrench 
          ? "Acquérez des clients à forte valeur à vie qui restent et achètent davantage."
          : "Acquire high-lifetime value customers who stay longer and buy more.",
        icon: UserPlus,
        stat: "+176%"
      },
      {
        title: isPathFrench ? "ROI Maximisé" : "Maximized ROI",
        description: isPathFrench 
          ? "Notre IA optimise chaque dollar dépensé pour le meilleur retour sur investissement possible."
          : "Our AI optimizes every dollar spent for the best possible return on investment.",
        icon: DollarSign,
        stat: "+312%"
      }
    ],
    features: isPathFrench 
      ? [
        "Campagnes publicitaires IA optimisées",
        "Marketing de contenu automatisé",
        "Optimisation des mots-clés en temps réel",
        "Marketing par email personnalisé",
        "Retargeting intelligent",
        "Tests A/B automatisés",
        "Attribution multi-touch précise",
        "Adaptations localisées automatiques",
        "Suggestions créatives par IA",
        "Analyses prédictives"
      ]
      : [
        "AI-optimized ad campaigns",
        "Automated content marketing",
        "Real-time keyword optimization",
        "Personalized email marketing",
        "Intelligent retargeting",
        "Automated A/B testing",
        "Precise multi-touch attribution",
        "Automatic localized adaptations",
        "AI creative suggestions",
        "Predictive analytics"
      ],
    channels: [
      {
        title: isPathFrench ? "Publicité en ligne" : "Online Advertising",
        description: isPathFrench 
          ? "Google Ads, Meta, LinkedIn, TikTok et plus, tous optimisés automatiquement."
          : "Google Ads, Meta, LinkedIn, TikTok and more, all automatically optimized.",
        icon: Globe
      },
      {
        title: isPathFrench ? "SEO" : "SEO",
        description: isPathFrench 
          ? "Optimisation continue des mots-clés et du contenu pour un classement organique supérieur."
          : "Continuous keyword and content optimization for higher organic ranking.",
        icon: Search
      },
      {
        title: isPathFrench ? "Email Marketing" : "Email Marketing",
        description: isPathFrench 
          ? "Séquences personnalisées qui convertissent les prospects en clients payants."
          : "Personalized sequences that convert prospects into paying customers.",
        icon: ActivitySquare
      },
      {
        title: isPathFrench ? "Médias Sociaux" : "Social Media",
        description: isPathFrench 
          ? "Contenu et engagement générés par l'IA qui attirent votre public cible."
          : "AI-generated content and engagement that attracts your target audience.",
        icon: Users
      },
      {
        title: isPathFrench ? "Marketing d'Affiliation" : "Affiliate Marketing",
        description: isPathFrench 
          ? "Réseau de partenaires optimisé qui promeut votre entreprise à commission."
          : "Optimized partner network that promotes your business on commission.",
        icon: MousePointerClick
      },
      {
        title: isPathFrench ? "Magasins en Ligne" : "Online Marketplaces",
        description: isPathFrench 
          ? "Présence optimisée sur Amazon, eBay et autres plateformes pertinentes."
          : "Optimized presence on Amazon, eBay, and other relevant platforms.",
        icon: ShoppingCart
      }
    ],
    steps: [
      {
        number: "1",
        title: isPathFrench ? "Analyse de marché" : "Market Analysis",
        description: isPathFrench 
          ? "Notre IA analyse votre marché pour identifier les meilleures opportunités d'acquisition."
          : "Our AI analyzes your market to identify the best acquisition opportunities."
      },
      {
        number: "2",
        title: isPathFrench ? "Création de campagne" : "Campaign Creation",
        description: isPathFrench 
          ? "Nous créons et déployons des campagnes optimisées sur tous les canaux pertinents."
          : "We create and deploy optimized campaigns across all relevant channels."
      },
      {
        number: "3",
        title: isPathFrench ? "Optimisation continue" : "Continuous Optimization",
        description: isPathFrench 
          ? "Notre système ajuste constamment les stratégies pour maximiser les résultats."
          : "Our system constantly adjusts strategies to maximize results."
      },
      {
        number: "4",
        title: isPathFrench ? "Mise à l'échelle" : "Scaling",
        description: isPathFrench 
          ? "Nous élargissons votre portée tout en maintenant ou en améliorant le ROI."
          : "We expand your reach while maintaining or improving ROI."
      }
    ],
    testimonial: {
      quote: isPathFrench 
        ? "La solution d'acquisition rapide de Minecore a transformé notre entreprise. Nous avons réduit notre coût d'acquisition de 47% tout en augmentant notre volume de nouveaux clients de 216%. Le meilleur, c'est que notre équipe marketing passe désormais plus de temps sur la stratégie que sur la gestion quotidienne des campagnes."
        : "Minecore's Quick Acquisition solution transformed our business. We reduced our cost per acquisition by 47% while increasing our volume of new customers by 216%. The best part is our marketing team now spends more time on strategy than day-to-day campaign management.",
      author: isPathFrench ? "Thomas Dubois" : "Michael Chen",
      position: isPathFrench ? "CMO, GrowthTech Solutions" : "CMO, GrowthTech Solutions"
    },
    cta: {
      title: isPathFrench ? "Prêt à accélérer votre acquisition client ?" : "Ready to accelerate your customer acquisition?",
      description: isPathFrench 
        ? "Commencez dès aujourd'hui et voyez comment notre solution d'acquisition rapide peut transformer votre croissance."
        : "Get started today and see how our Quick Acquisition solution can transform your growth.",
      primary: isPathFrench ? "Contactez-nous" : "Contact Us",
      secondary: isPathFrench ? "Voir une démonstration" : "Watch Demo"
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
              {isPathFrench ? "Comment Vous Pouvez Gagner Plus en Travaillant Moins" : "How You Can Make More Money While Working Less"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {isPathFrench 
                ? "Notre solution d'acquisition rapide automatise et optimise tous vos efforts marketing, vous permettant d'acquérir plus de clients sans travail supplémentaire."
                : "Our Quick Acquisition solution automates and optimizes all your marketing efforts, allowing you to acquire more customers without additional work."}
            </p>
          </div>
          
          <Tabs defaultValue="speed" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="speed">
                <Rocket className="h-4 w-4 mr-2" />
                {content.benefitCategories.speed}
              </TabsTrigger>
              <TabsTrigger value="scale">
                <BarChart4 className="h-4 w-4 mr-2" />
                {content.benefitCategories.scale}
              </TabsTrigger>
              <TabsTrigger value="value">
                <DollarSign className="h-4 w-4 mr-2" />
                {content.benefitCategories.value}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="speed" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.speed.map((item, i) => (
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
            
            <TabsContent value="scale" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.scale.map((item, i) => (
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
            
            <TabsContent value="value" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.value.map((item, i) => (
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
      
      {/* Channels Section */}
      <section className="py-20">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Acquisition Sur Tous Les Canaux" : "Acquisition Across All Channels"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-12">
              {isPathFrench 
                ? "Notre solution fonctionne de manière transparente sur tous les canaux d'acquisition pour maximiser votre portée et votre impact."
                : "Our solution works seamlessly across all acquisition channels to maximize your reach and impact."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.channels.map((channel, index) => (
              <Card key={index} className="border-primary/10">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <channel.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{channel.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{channel.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  {isPathFrench ? "Résultats Mesurables" : "Measurable Results"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {isPathFrench 
                    ? "Notre plateforme offre une visibilité complète sur tous vos efforts d'acquisition, vous permettant de mesurer exactement votre retour sur investissement."
                    : "Our platform provides complete visibility into all your acquisition efforts, allowing you to measure exactly what your return on investment is."}
                </p>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-lg p-5 border border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">
                        {isPathFrench ? "Coût d'Acquisition" : "Cost per Acquisition"}
                      </h3>
                      <span className="text-green-500 font-bold">-47%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-lg p-5 border border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">
                        {isPathFrench ? "Volume de Nouveaux Clients" : "New Customer Volume"}
                      </h3>
                      <span className="text-green-500 font-bold">+216%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-lg p-5 border border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">
                        {isPathFrench ? "Retour sur Investissement" : "Return on Investment"}
                      </h3>
                      <span className="text-green-500 font-bold">+312%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-5 -top-5 w-24 h-24 bg-primary/5 rounded-full"></div>
              <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-primary/5 rounded-full"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 bg-card rounded-xl p-8 border border-primary/10 shadow-sm"
              >
                <div className="mb-8">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {isPathFrench ? "Tableau de Bord Complet" : "Comprehensive Dashboard"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isPathFrench 
                      ? "Surveillez tous les aspects de vos campagnes d'acquisition avec des mesures en temps réel et des rapports détaillés."
                      : "Monitor every aspect of your acquisition campaigns with real-time metrics and detailed reports."}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      {isPathFrench 
                        ? "Analyses en temps réel sur tous les canaux"
                        : "Real-time analytics across all channels"}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      {isPathFrench 
                        ? "Suivi précis du parcours client"
                        : "Precise customer journey tracking"}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      {isPathFrench 
                        ? "Attribution multi-touch pour une visibilité complète"
                        : "Multi-touch attribution for complete visibility"}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      {isPathFrench 
                        ? "Prévisions basées sur l'IA pour une planification précise"
                        : "AI-powered forecasting for accurate planning"}
                    </p>
                  </div>
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
            className="bg-card p-8 sm:p-12 rounded-xl relative shadow-sm border border-primary/10"
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