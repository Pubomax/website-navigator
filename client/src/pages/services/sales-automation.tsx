import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { 
  DollarSign, 
  FileText, 
  BarChart, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  Award,
  ClipboardCheck,
  RotateCw
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Automatisation des Ventes" 
    : "Sales Automation",
  subtitle: isPathFrench
    ? "Concentrez-vous sur les relations clients et laissez notre système automatiser les processus de vente répétitifs pour générer plus de revenus avec moins d'effort."
    : "Focus on customer relationships and let our system automate repetitive sales processes to generate more revenue with less effort.",
  tagline: isPathFrench
    ? "De la prospection à la clôture : automatisez l'ensemble de votre processus de vente"
    : "From prospecting to closing: automate your entire sales process",
  keyFeatures: isPathFrench ? [
    {
      title: "Automatisation de la Clôture",
      description: "Fluidifiez les étapes finales du processus de vente avec l'automatisation intelligente",
      icon: CheckCircle2
    },
    {
      title: "Automatisation des Devis",
      description: "Générez des devis précis et professionnels rapidement et efficacement",
      icon: FileText
    },
    {
      title: "Automatisation du Processus de Vente",
      description: "Optimisez l'ensemble du flux de travail de vente, du prospect au client",
      icon: RotateCw
    }
  ] : [
    {
      title: "Automated Closing",
      description: "Streamline the final stages of sales processes with intelligent automation",
      icon: CheckCircle2
    },
    {
      title: "Quote Automation",
      description: "Generate accurate, professional quotes quickly and efficiently",
      icon: FileText
    },
    {
      title: "Sales Process Automation",
      description: "Optimize the entire sales workflow from prospect to customer",
      icon: RotateCw
    }
  ],
  benefits: isPathFrench ? [
    {
      metric: "35%",
      title: "Augmentation du Taux de Conversion",
      description: "Convertissez plus de leads en clients payants avec des séquences optimisées automatiquement"
    },
    {
      metric: "68%",
      title: "Réduction du Temps Administratif",
      description: "Éliminez les tâches administratives manuelles pour vous concentrer sur la relation client"
    },
    {
      metric: "47%",
      title: "Cycle de Vente Plus Court",
      description: "Réduisez le temps nécessaire pour passer de la prospection à la vente conclue"
    },
    {
      metric: "92%",
      title: "Satisfaction Client Améliorée",
      description: "Réponses plus rapides et suivi cohérent à chaque étape du parcours client"
    }
  ] : [
    {
      metric: "35%",
      title: "Higher Conversion Rate",
      description: "Convert more leads into paying customers with automatically optimized sequences"
    },
    {
      metric: "68%",
      title: "Less Administrative Time",
      description: "Eliminate manual administrative tasks to focus on customer relationships"
    },
    {
      metric: "47%",
      title: "Shorter Sales Cycle",
      description: "Reduce the time it takes to go from prospecting to closed deal"
    },
    {
      metric: "92%",
      title: "Improved Customer Satisfaction",
      description: "Faster responses and consistent follow-up at every stage of the customer journey"
    }
  ],
  stages: isPathFrench ? [
    {
      title: "Automatisation de la Prospection",
      description: "Identification et qualification automatiques des leads pour remplir votre pipeline de vente",
      progress: 20
    },
    {
      title: "Séquences de Contact Intelligentes",
      description: "Personnalisation automatique des séquences de contact par email et téléphone",
      progress: 40
    },
    {
      title: "Gestion des Opportunités",
      description: "Suivi automatisé des opportunités avec des rappels et des alertes intelligentes",
      progress: 60
    },
    {
      title: "Génération de Devis et Contrats",
      description: "Création et envoi automatisés de devis et contrats personnalisés",
      progress: 80
    },
    {
      title: "Automatisation de la Conclusion",
      description: "Systèmes automatisés pour faciliter la conclusion des ventes et les signatures",
      progress: 100
    }
  ] : [
    {
      title: "Prospecting Automation",
      description: "Automatically identify and qualify leads to fill your sales pipeline",
      progress: 20
    },
    {
      title: "Intelligent Outreach Sequences",
      description: "Automatically personalize email and phone outreach sequences",
      progress: 40
    },
    {
      title: "Opportunity Management",
      description: "Automated opportunity tracking with intelligent reminders and alerts",
      progress: 60
    },
    {
      title: "Quote and Contract Generation",
      description: "Automated creation and delivery of personalized quotes and contracts",
      progress: 80
    },
    {
      title: "Closing Automation",
      description: "Automated systems to facilitate deal closings and signatures",
      progress: 100
    }
  ],
  tabs: isPathFrench ? [
    {
      title: "Startups",
      content: {
        description: "Solution parfaite pour les startups qui cherchent à établir et automatiser rapidement leurs processus de vente à un prix abordable.",
        features: [
          "Configuration rapide en 24 heures",
          "Intégration avec les outils populaires des startups",
          "Modèles de vente prédéfinis",
          "Évolutivité pour accompagner votre croissance"
        ]
      }
    },
    {
      title: "PME",
      content: {
        description: "Solution robuste pour les PME cherchant à augmenter l'efficacité de leurs équipes de vente et à faire évoluer leurs processus.",
        features: [
          "Intégration CRM étendue",
          "Rapports de performance détaillés",
          "Automatisation des processus complexes",
          "Support technique premium"
        ]
      }
    },
    {
      title: "Entreprises",
      content: {
        description: "Solution de niveau entreprise offrant une personnalisation avancée et une automatisation pour les équipes de vente importantes et complexes.",
        features: [
          "Intégration complète avec les systèmes existants",
          "Automatisation hautement personnalisée",
          "Gestion multi-équipes et multi-services",
          "Conformité et sécurité de niveau entreprise"
        ]
      }
    }
  ] : [
    {
      title: "Startups",
      content: {
        description: "Perfect solution for startups looking to quickly establish and automate their sales processes at an affordable price point.",
        features: [
          "Quick 24-hour setup",
          "Integration with popular startup tools",
          "Pre-built sales templates",
          "Scalability to grow with you"
        ]
      }
    },
    {
      title: "SMBs",
      content: {
        description: "Robust solution for SMBs looking to increase sales team efficiency and scale their processes.",
        features: [
          "Extensive CRM integration",
          "Detailed performance reporting",
          "Complex process automation",
          "Premium technical support"
        ]
      }
    },
    {
      title: "Enterprise",
      content: {
        description: "Enterprise-grade solution offering advanced customization and automation for large, complex sales teams.",
        features: [
          "Full integration with existing systems",
          "Highly customized automation",
          "Multi-team and multi-department management",
          "Enterprise-grade compliance and security"
        ]
      }
    }
  ],
  cta: {
    primary: isPathFrench ? "Automatisez Vos Ventes" : "Automate Your Sales",
    secondary: isPathFrench ? "Voir les Cas Clients" : "View Case Studies"
  }
});

export default function SalesAutomation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container max-w-7xl mx-auto">
        {/* Hero Section with Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-4" variant="outline">
              <DollarSign className="mr-1 h-3.5 w-3.5 text-primary" />
              {isPathFrench ? "Ventes et Revenus" : "Sales & Revenue"}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
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
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-1"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <BarChart className="h-6 w-6 mr-2 text-primary" />
                  {isPathFrench ? "Boostez Vos Résultats" : "Boost Your Results"}
                </h3>
                <Badge variant="secondary">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  {isPathFrench ? "IA Propulsée" : "AI Powered"}
                </Badge>
              </div>
              
              <p className="text-lg mb-6">{content.tagline}</p>
              
              <div className="space-y-4 mt-5">
                {content.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-3 p-3 bg-background rounded-lg"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Badge className="mb-2" variant="outline">
              <Award className="mr-1 h-3.5 w-3.5 text-primary" />
              {isPathFrench ? "Avantages Prouvés" : "Proven Benefits"}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {isPathFrench ? "Pourquoi Automatiser vos Ventes?" : "Why Automate Your Sales?"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isPathFrench 
                ? "Notre solution d'automatisation des ventes transforme votre processus pour maximiser l'efficacité et les revenus."
                : "Our sales automation solution transforms your process to maximize efficiency and revenue."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/5 rounded-lg p-6 flex flex-col"
              >
                <div className="text-3xl font-bold text-primary mb-3">{benefit.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mt-auto">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Sales Process Automation Stages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isPathFrench ? "Automatisez Tout Votre Processus de Vente" : "Automate Your Entire Sales Process"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isPathFrench 
                ? "De la prospection à la conclusion, notre plateforme automatise chaque étape du cycle de vente."
                : "From prospecting to closing, our platform automates every step of the sales cycle."
              }
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {content.stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 items-center"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="p-6 bg-primary/5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        {isPathFrench ? "Étape" : "Stage"} {index + 1}
                      </span>
                      <span className="text-sm font-medium">{stage.progress}%</span>
                    </div>
                    <Progress value={stage.progress} className="h-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Solutions for Different Business Sizes */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-2" variant="outline">
              <ClipboardCheck className="mr-1 h-3.5 w-3.5 text-primary" />
              {isPathFrench ? "Solutions Adaptées" : "Tailored Solutions"}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {isPathFrench ? "Adapté à Tous les Types d'Entreprises" : "Fits All Business Sizes"}
            </h2>
          </div>
          
          <Tabs defaultValue={content.tabs[0].title} className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              {content.tabs.map((tab) => (
                <TabsTrigger key={tab.title} value={tab.title}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {content.tabs.map((tab) => (
              <TabsContent key={tab.title} value={tab.title} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>{tab.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{tab.content.description}</p>
                    <ul className="space-y-2">
                      {tab.content.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Final CTA */}
        <div className="text-center bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isPathFrench 
              ? "Prêt à Automatiser Vos Ventes et Augmenter Vos Revenus ?"
              : "Ready to Automate Your Sales and Increase Revenue?"
            }
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {isPathFrench
              ? "Découvrez comment notre solution d'automatisation des ventes peut vous aider à vendre plus tout en travaillant moins."
              : "Discover how our sales automation solution can help you sell more while working less."
            }
          </p>
          <Button asChild size="lg">
            <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
              {content.cta.primary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}