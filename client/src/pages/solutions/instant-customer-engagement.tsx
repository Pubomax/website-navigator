import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight,
  BellRing, 
  BrainCircuit, 
  Briefcase,
  CheckCircle, 
  Clock,
  DollarSign, 
  HeartHandshake,
  LineChart, 
  MessageCircle,
  MessageSquare, 
  MessagesSquare,
  MicIcon,
  PhoneCall,
  Rocket, 
  ScrollText,
  Sparkles, 
  ThumbsUp,
  Users,
  Zap
} from "lucide-react";

export default function InstantCustomerEngagement() {
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
        ? "Engagement Client Instantané : Répondez Immédiatement, Gagnez Plus" 
        : "Instant Customer Engagement: Respond in Seconds, Earn More",
      subtitle: isPathFrench
        ? "Notre solution d'engagement client permet une réponse instantanée 24/7, augmentant la satisfaction client et accélérant votre croissance commerciale."
        : "Our instant customer engagement solution enables 24/7 immediate response, increasing customer satisfaction and accelerating your business growth.",
      cta: isPathFrench ? "Démarrer maintenant" : "Get Started",
      secondary: isPathFrench ? "En savoir plus" : "Learn More",
      stats: [
        {
          value: isPathFrench ? "+89%" : "+89%",
          label: isPathFrench ? "Satisfaction client" : "Customer satisfaction",
          icon: ThumbsUp,
        },
        {
          value: isPathFrench ? "< 10s" : "< 10s",
          label: isPathFrench ? "Temps de réponse" : "Response time",
          icon: Clock,
        },
        {
          value: isPathFrench ? "+43%" : "+43%",
          label: isPathFrench ? "Taux de conversion" : "Conversion rate",
          icon: LineChart,
        },
      ]
    },
    benefitCategories: {
      speed: isPathFrench ? "Rapidité" : "Speed",
      experience: isPathFrench ? "Expérience" : "Experience",
      growth: isPathFrench ? "Croissance" : "Growth"
    },
    speed: [
      {
        title: isPathFrench ? "Réponse Instantanée" : "Instant Response",
        description: isPathFrench 
          ? "Vos clients reçoivent une réponse immédiate à toute heure du jour ou de la nuit."
          : "Your customers receive an immediate response at any hour of the day or night.",
        icon: Zap,
        stat: "24/7"
      },
      {
        title: isPathFrench ? "Chat en Temps Réel" : "Real-Time Chat",
        description: isPathFrench 
          ? "Engagez vos visiteurs à l'instant où ils sont les plus intéressés par votre offre."
          : "Engage with your visitors at the moment they're most interested in your offering.",
        icon: MessageSquare,
        stat: "10x"
      },
      {
        title: isPathFrench ? "Rappel Automatique" : "Automatic Callback",
        description: isPathFrench 
          ? "Proposez un rappel instantané pour les clients qui préfèrent les conversations vocales."
          : "Offer instant callback for customers who prefer voice conversations.",
        icon: PhoneCall,
        stat: "< 60s"
      }
    ],
    experience: [
      {
        title: isPathFrench ? "Support Multi-Canal" : "Multi-Channel Support",
        description: isPathFrench 
          ? "Offrez une expérience cohérente sur le web, par SMS, email et médias sociaux."
          : "Deliver a consistent experience across web, SMS, email, and social media.",
        icon: MessagesSquare,
        stat: "Omni"
      },
      {
        title: isPathFrench ? "Personnalisation IA" : "AI Personalization",
        description: isPathFrench 
          ? "Personnalisez chaque interaction en fonction du comportement et de l'historique du client."
          : "Tailor each interaction based on customer behavior and history.",
        icon: BrainCircuit,
        stat: "100%"
      },
      {
        title: isPathFrench ? "Assistance Proactive" : "Proactive Assistance",
        description: isPathFrench 
          ? "Anticipez les besoins des clients et offrez de l'aide avant même qu'ils ne la demandent."
          : "Anticipate customer needs and offer assistance before they even ask for it.",
        icon: HeartHandshake,
        stat: "+72%"
      }
    ],
    growth: [
      {
        title: isPathFrench ? "Conversion Accélérée" : "Accelerated Conversion",
        description: isPathFrench 
          ? "Convertissez les visiteurs en clients plus rapidement grâce à un engagement immédiat."
          : "Convert visitors to customers faster through immediate engagement.",
        icon: Rocket,
        stat: "+43%"
      },
      {
        title: isPathFrench ? "Fidélisation Améliorée" : "Enhanced Retention",
        description: isPathFrench 
          ? "Augmentez la fidélité et les achats répétés grâce à un support exceptionnel."
          : "Increase loyalty and repeat purchases through exceptional support.",
        icon: Users,
        stat: "+67%"
      },
      {
        title: isPathFrench ? "Insights Client" : "Customer Insights",
        description: isPathFrench 
          ? "Collectez des données précieuses pour affiner vos produits et votre marketing."
          : "Gather valuable data to refine your products and marketing.",
        icon: LineChart,
        stat: "Rich"
      }
    ],
    features: isPathFrench 
      ? [
        "Chatbot IA conversationnel 24/7",
        "Transfert transparent vers agents humains",
        "Intégration avec votre CRM",
        "Analyse des sentiments en temps réel",
        "Collecte automatisée de leads",
        "Base de connaissances dynamique",
        "Analyses et rapports détaillés",
        "Support multi-langue",
        "Personnalisation selon comportement",
        "Intégration aux médias sociaux"
      ]
      : [
        "24/7 conversational AI chatbot",
        "Seamless handoff to human agents",
        "Integration with your CRM",
        "Real-time sentiment analysis",
        "Automated lead capture",
        "Dynamic knowledge base",
        "Detailed analytics and reporting",
        "Multi-language support",
        "Behavior-based personalization",
        "Social media integration"
      ],
    steps: [
      {
        number: "1",
        title: isPathFrench ? "Intégrez à votre site" : "Integrate with your site",
        description: isPathFrench 
          ? "Ajoutez notre solution à votre site web avec un simple extrait de code, aucune connaissance technique requise."
          : "Add our solution to your website with a simple code snippet, no technical knowledge required."
      },
      {
        number: "2",
        title: isPathFrench ? "Personnalisez votre expérience" : "Customize your experience",
        description: isPathFrench 
          ? "Adaptez l'apparence et les réponses pour correspondre parfaitement à votre marque et à vos besoins."
          : "Tailor the appearance and responses to perfectly match your brand and needs."
      },
      {
        number: "3",
        title: isPathFrench ? "Connectez vos canaux" : "Connect your channels",
        description: isPathFrench 
          ? "Intégrez tous vos canaux de communication pour une expérience client cohérente et fluide."
          : "Integrate all your communication channels for a consistent, seamless customer experience."
      },
      {
        number: "4",
        title: isPathFrench ? "Analysez et optimisez" : "Analyze and optimize",
        description: isPathFrench 
          ? "Utilisez les analyses détaillées pour continuellement améliorer vos interactions et conversions."
          : "Use detailed analytics to continuously improve your interactions and conversions."
      }
    ],
    testimonial: {
      quote: isPathFrench 
        ? "La solution d'engagement client de Minecore a complètement transformé notre entreprise. Notre temps de réponse est passé de plusieurs heures à quelques secondes, et nos ventes ont augmenté de 43%. Nos clients sont ravis, et notre équipe peut se concentrer sur des tâches à plus forte valeur ajoutée."
        : "Minecore's instant customer engagement solution has completely transformed our business. Our response time went from hours to seconds, and our sales increased by 43%. Our customers are delighted, and our team can focus on higher-value tasks.",
      author: isPathFrench ? "Marie Laurent" : "Alex Thompson",
      position: isPathFrench ? "Directrice des Opérations, ShopNow" : "Operations Director, ShopNow"
    },
    cta: {
      title: isPathFrench ? "Prêt à révolutionner votre engagement client ?" : "Ready to revolutionize your customer engagement?",
      description: isPathFrench 
        ? "Commencez dès aujourd'hui et voyez comment notre solution d'engagement instantané peut accélérer votre croissance commerciale."
        : "Get started today and see how our instant engagement solution can accelerate your business growth.",
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
              {isPathFrench ? "Comment Vous Pouvez Gagner Plus en Travaillant Moins" : "How You Can Make More Money While Working Less"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {isPathFrench 
                ? "Notre solution d'engagement client instantané automatise les interactions, vous permettant de convertir plus de clients sans effort supplémentaire."
                : "Our instant customer engagement solution automates interactions, allowing you to convert more customers without additional effort."}
            </p>
          </div>
          
          <Tabs defaultValue="speed" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="speed">
                <Zap className="h-4 w-4 mr-2" />
                {content.benefitCategories.speed}
              </TabsTrigger>
              <TabsTrigger value="experience">
                <HeartHandshake className="h-4 w-4 mr-2" />
                {content.benefitCategories.experience}
              </TabsTrigger>
              <TabsTrigger value="growth">
                <LineChart className="h-4 w-4 mr-2" />
                {content.benefitCategories.growth}
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
            
            <TabsContent value="growth" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {content.growth.map((item, i) => (
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
      
      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Voyez Comment Ça Fonctionne" : "See How It Works"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {isPathFrench 
                ? "Notre solution d'engagement client instantané est conçue pour être intuitive et efficace. Découvrez comment elle peut transformer votre entreprise."
                : "Our instant customer engagement solution is designed to be intuitive and effective. See how it can transform your business."}
            </p>
          </div>
          
          <div className="bg-card border rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary/10"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="p-4 bg-primary/5 rounded-lg mb-6 border border-primary/10">
                  <div className="flex items-center mb-3">
                    <MessageCircle className="h-5 w-5 text-primary mr-2" />
                    <p className="font-medium">{isPathFrench ? "Chat Client Instantané" : "Instant Customer Chat"}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                        <p className="text-sm">
                          {isPathFrench 
                            ? "Bonjour, je voudrais en savoir plus sur vos services."
                            : "Hi, I'd like to know more about your services."}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-xs">
                        <p className="text-sm">
                          {isPathFrench 
                            ? "Bonjour ! Je serais ravi de vous aider. Que voulez-vous savoir exactement sur nos services ?"
                            : "Hello! I'd be happy to help. What specifically would you like to know about our services?"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                        <p className="text-sm">
                          {isPathFrench 
                            ? "Quels sont vos forfaits et tarifs ?"
                            : "What are your packages and pricing?"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none max-w-xs">
                        <p className="text-sm">
                          {isPathFrench 
                            ? "Nous proposons trois forfaits : Essentiel (99€/mois), Professionnel (199€/mois) et Entreprise (personnalisé). Souhaitez-vous plus de détails sur ces forfaits ou un devis personnalisé ?"
                            : "We offer three packages: Essential ($99/month), Professional ($199/month), and Enterprise (custom pricing). Would you like more details about these packages or a personalized quote?"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {isPathFrench ? "Réponses Instantanées, Clients Satisfaits" : "Instant Responses, Happy Customers"}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <BellRing className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">
                        {isPathFrench ? "Disponibilité 24/7" : "24/7 Availability"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isPathFrench 
                          ? "Ne manquez jamais une opportunité de vente, même en dehors des heures de bureau."
                          : "Never miss a sales opportunity, even outside business hours."}
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <BrainCircuit className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">
                        {isPathFrench ? "Réponses IA Intelligentes" : "Intelligent AI Responses"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isPathFrench 
                          ? "Des réponses naturelles et précises qui résolvent les problèmes des clients rapidement."
                          : "Natural, accurate responses that solve customer issues quickly."}
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <ScrollText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">
                        {isPathFrench ? "Scénarios Personnalisés" : "Custom Scenarios"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isPathFrench 
                          ? "Adaptez les réponses en fonction de vos produits, services et processus de vente spécifiques."
                          : "Tailor responses based on your specific products, services, and sales processes."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 sm:p-12 rounded-xl relative shadow-sm"
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
      <section className="py-20">
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