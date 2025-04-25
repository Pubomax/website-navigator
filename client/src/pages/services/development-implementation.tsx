import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Bot, 
  ArrowRight, 
  Settings, 
  CheckCircle, 
  Cpu,
  BarChart,
  Clock,
  Shield
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Développement & Implémentation" 
    : "Development & Implementation",
  subtitle: isPathFrench
    ? "Solutions techniques complètes pour soutenir vos besoins d'automatisation d'entreprise, de la personnalisation CRM aux chatbots intelligents."
    : "Comprehensive technical solutions to support your business automation needs, from custom CRM development to intelligent chatbots.",
  keyServices: isPathFrench ? [
    {
      icon: Database,
      title: "Développement CRM Personnalisé",
      description: "Systèmes de gestion de relation client sur mesure conçus pour vos besoins spécifiques",
      benefits: [
        "Solution parfaitement adaptée à vos processus uniques",
        "Intégration avec tous vos outils existants",
        "Évolutivité pour accompagner votre croissance",
        "Rapports et analyses sur mesure"
      ]
    },
    {
      icon: Settings,
      title: "Implémentation de Kommo",
      description: "Mise en œuvre et optimisation experte de la plateforme CRM Kommo",
      benefits: [
        "Configuration et personnalisation rapides",
        "Migration de données sans perte",
        "Formation complète de votre équipe",
        "Support technique continu"
      ]
    },
    {
      icon: Bot,
      title: "Développement de Chatbots",
      description: "Création de chatbots conversationnels intelligents pour améliorer l'engagement client",
      benefits: [
        "Service client 24/7 automatisé",
        "Intelligence artificielle pour des réponses personnalisées",
        "Qualification automatique des leads",
        "Réduction des coûts de support"
      ]
    }
  ] : [
    {
      icon: Database,
      title: "Custom CRM Development",
      description: "Tailored customer relationship management systems designed for your specific business requirements",
      benefits: [
        "Solution perfectly adapted to your unique processes",
        "Integration with all your existing tools",
        "Scalability to grow with your business",
        "Custom reporting and analytics"
      ]
    },
    {
      icon: Settings,
      title: "Kommo Implementation",
      description: "Expert implementation and optimization of Kommo CRM platform",
      benefits: [
        "Fast setup and customization",
        "Seamless data migration",
        "Comprehensive team training",
        "Ongoing technical support"
      ]
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Create intelligent, conversational AI chatbots to enhance customer service and engagement",
      benefits: [
        "24/7 automated customer service",
        "AI intelligence for personalized responses",
        "Automated lead qualification",
        "Reduced support costs"
      ]
    }
  ],
  advantages: isPathFrench ? [
    {
      icon: CheckCircle,
      title: "Solutions Éprouvées",
      description: "Technologies testées et approuvées pour garantir fiabilité et performance"
    },
    {
      icon: Cpu,
      title: "IA Avancée",
      description: "Intégration de l'intelligence artificielle de pointe dans toutes nos solutions"
    },
    {
      icon: BarChart,
      title: "Résultats Mesurables",
      description: "Outils d'analyse intégrés pour suivre le ROI de votre investissement"
    },
    {
      icon: Clock,
      title: "Mise en Place Rapide",
      description: "Implémentation efficace pour des résultats rapides"
    },
    {
      icon: Shield,
      title: "Sécurité Prioritaire",
      description: "Protocoles de sécurité robustes pour protéger vos données"
    }
  ] : [
    {
      icon: CheckCircle,
      title: "Proven Solutions",
      description: "Tested and approved technologies to ensure reliability and performance"
    },
    {
      icon: Cpu,
      title: "Advanced AI",
      description: "Cutting-edge artificial intelligence integration in all our solutions"
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description: "Built-in analytics tools to track the ROI of your investment"
    },
    {
      icon: Clock,
      title: "Quick Deployment",
      description: "Efficient implementation for fast results"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Robust security protocols to protect your data"
    }
  ],
  faqs: isPathFrench ? [
    {
      question: "Combien de temps faut-il pour mettre en place un CRM personnalisé ?",
      answer: "Le délai de mise en œuvre dépend de la complexité de vos besoins. Un CRM de base peut être opérationnel en 2-4 semaines, tandis qu'une solution entièrement personnalisée peut prendre 2-3 mois. Nous travaillons selon une approche agile pour livrer des fonctionnalités par phases prioritaires."
    },
    {
      question: "Est-ce que les chatbots peuvent vraiment comprendre les requêtes des clients ?",
      answer: "Oui, nos chatbots utilisent le traitement du langage naturel (NLP) et l'apprentissage automatique pour comprendre l'intention des utilisateurs, même avec des formulations variées. Ils s'améliorent continuellement en apprenant des interactions passées."
    },
    {
      question: "Pouvez-vous migrer nos données depuis notre ancien système ?",
      answer: "Absolument. Nous avons un processus éprouvé de migration de données qui préserve l'intégrité de vos informations tout en les transformant pour s'adapter à votre nouvelle solution. Nous effectuons toujours des tests rigoureux avant la migration finale."
    },
    {
      question: "Quelle est la différence entre un CRM personnalisé et une solution comme Kommo ?",
      answer: "Kommo est une plateforme CRM robuste qui peut être configurée pour répondre à de nombreux besoins courants. Un CRM personnalisé est développé spécifiquement pour vos processus uniques et offre une flexibilité maximale, mais nécessite généralement plus de temps et d'investissement initial."
    }
  ] : [
    {
      question: "How long does it take to implement a custom CRM?",
      answer: "Implementation time depends on the complexity of your requirements. A basic CRM can be up and running in 2-4 weeks, while a fully customized solution may take 2-3 months. We work in an agile approach to deliver features in prioritized phases."
    },
    {
      question: "Can chatbots really understand customer inquiries?",
      answer: "Yes, our chatbots use Natural Language Processing (NLP) and machine learning to understand user intent, even with varied phrasing. They continuously improve by learning from past interactions."
    },
    {
      question: "Can you migrate our data from our old system?",
      answer: "Absolutely. We have a proven data migration process that preserves the integrity of your information while transforming it to fit your new solution. We always perform rigorous testing before the final migration."
    },
    {
      question: "What's the difference between a custom CRM and a solution like Kommo?",
      answer: "Kommo is a robust CRM platform that can be configured to meet many common needs. A custom CRM is developed specifically for your unique processes and offers maximum flexibility, but typically requires more time and initial investment."
    }
  ],
  cta: {
    primary: isPathFrench ? "Discuter de Votre Projet" : "Discuss Your Project",
    secondary: isPathFrench ? "Explorer les Études de Cas" : "Explore Case Studies"
  }
});

export default function DevelopmentImplementation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            <Code className="mr-1 h-3.5 w-3.5 text-primary" />
            {isPathFrench ? "Solutions Techniques" : "Technical Solutions"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {content.title}
          </h1>
          <p className="text-xl max-w-3xl text-muted-foreground mb-10">
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
        
        {/* Key Services with Visual Cards */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isPathFrench ? "Nos Solutions Techniques" : "Our Technical Solutions"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.keyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-primary/10 overflow-hidden">
                  <div className="bg-primary/5 p-6">
                    <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardHeader className="p-0 text-center">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                  </div>
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-semibold mb-3">
                        {isPathFrench ? "Avantages:" : "Benefits:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Advantages Section with Icon Grid */}
        <div className="mb-24 py-16 bg-primary/5 rounded-xl">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              {isPathFrench ? "Pourquoi Choisir Nos Solutions" : "Why Choose Our Solutions"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {content.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-4 rounded-full bg-background mb-4">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Technical Implementation Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isPathFrench ? "Notre Processus d'Implémentation" : "Our Implementation Process"}
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {/* Timeline steps */}
            <div className="space-y-12">
              {[
                {
                  title: isPathFrench ? "Consultation & Analyse" : "Consultation & Analysis",
                  description: isPathFrench 
                    ? "Nous commençons par comprendre en profondeur vos processus actuels, défis et objectifs d'affaires."
                    : "We start by understanding your current processes, challenges, and business goals in depth."
                },
                {
                  title: isPathFrench ? "Conception de Solution" : "Solution Design",
                  description: isPathFrench 
                    ? "Nous concevons une solution technique personnalisée avec une architecture et des flux de travail clairs."
                    : "We design a tailored technical solution with clear architecture and workflows."
                },
                {
                  title: isPathFrench ? "Développement Agile" : "Agile Development",
                  description: isPathFrench 
                    ? "Nous construisons votre solution par sprints, avec des livrables et des retours réguliers."
                    : "We build your solution in sprints, with regular deliverables and feedback."
                },
                {
                  title: isPathFrench ? "Test & Assurance Qualité" : "Testing & Quality Assurance",
                  description: isPathFrench 
                    ? "Nous testons rigoureusement pour garantir que tout fonctionne parfaitement selon vos exigences."
                    : "We rigorously test to ensure everything works flawlessly according to your requirements."
                },
                {
                  title: isPathFrench ? "Déploiement & Formation" : "Deployment & Training",
                  description: isPathFrench 
                    ? "Nous mettons en œuvre la solution et formons votre équipe pour une utilisation efficace."
                    : "We implement the solution and train your team for effective use."
                },
                {
                  title: isPathFrench ? "Support Continu" : "Ongoing Support",
                  description: isPathFrench 
                    ? "Nous fournissons un support technique et des optimisations continues après le lancement."
                    : "We provide technical support and continuous optimization after launch."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left sm:ml-auto'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isPathFrench ? "Questions Fréquentes" : "Frequently Asked Questions"}
          </h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Final CTA */}
        <div className="text-center bg-primary/5 rounded-xl p-12">
          <h2 className="text-2xl font-bold mb-4">
            {isPathFrench 
              ? "Prêt à Transformer Votre Entreprise avec des Solutions Techniques ?"
              : "Ready to Transform Your Business with Technical Solutions?"
            }
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isPathFrench
              ? "Nos experts sont prêts à créer la solution idéale pour vos besoins spécifiques."
              : "Our experts are ready to create the ideal solution for your specific needs."
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