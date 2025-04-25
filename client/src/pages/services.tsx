import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  DollarSign, 
  LineChart, 
  Settings, 
  Code, 
  BrainCircuit, 
  ChevronRight,
  Zap
} from "lucide-react";
import { Link, useLocation } from "wouter";

// Our core solutions based on AI Automation
const coreServices = [
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    description: "Transform prospects into loyal customers with automated marketing sequences",
    icon: MessageSquare,
    benefits: [
      "Increase lead generation by 35%",
      "Automate social media and content scheduling",
      "Smart lead nurturing sequences",
      "Comprehensive analytics and reporting"
    ],
    link: "/services/marketing-automation",
    primaryColor: "bg-indigo-50 dark:bg-indigo-950/20",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    featured: true
  },
  {
    id: "sales-automation",
    title: "Sales Automation",
    description: "Close more deals with less effort using AI-powered sales automation",
    icon: DollarSign,
    benefits: [
      "Reduce sales cycle by 47%",
      "Automated quote generation",
      "Intelligent sales process optimization",
      "Close more deals without extra effort"
    ],
    link: "/services/sales-automation",
    primaryColor: "bg-emerald-50 dark:bg-emerald-950/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    featured: true
  },
  {
    id: "development-implementation",
    title: "Development & Implementation",
    description: "Custom technical solutions to power your business automation needs",
    icon: Code,
    benefits: [
      "Custom CRM development",
      "Kommo implementation and optimization",
      "Intelligent chatbot development",
      "Integration with your existing systems"
    ],
    link: "/services/development-implementation",
    primaryColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    featured: true
  },
  {
    id: "ai-automation-starter",
    title: "AI Automation Starter",
    description: "Begin your AI journey with our comprehensive starter package",
    icon: Bot,
    benefits: [
      "AI readiness assessment",
      "Basic process automation",
      "Data analysis automation",
      "Rapid return on investment"
    ],
    link: "/services/ai-automation-starter",
    primaryColor: "bg-violet-50 dark:bg-violet-950/20",
    iconColor: "text-violet-600 dark:text-violet-400"
  },
  {
    id: "custom-ai-automation",
    title: "Custom AI Automation",
    description: "Tailored AI solutions designed specifically for your unique business needs",
    icon: Settings,
    benefits: [
      "Custom AI workflow design",
      "Deep integration with your processes",
      "Scalable automation architecture",
      "Future-proof AI implementation"
    ],
    link: "/services/custom-ai-automation",
    primaryColor: "bg-amber-50 dark:bg-amber-950/20",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    id: "intelligent-analytics",
    title: "Intelligent Analytics",
    description: "Make data-driven decisions with AI-powered business intelligence",
    icon: LineChart,
    benefits: [
      "Real-time performance dashboards",
      "Predictive analytics",
      "Automated reporting",
      "Customer behavior insights"
    ],
    link: "/services/intelligent-analytics",
    primaryColor: "bg-rose-50 dark:bg-rose-950/20",
    iconColor: "text-rose-600 dark:text-rose-400"
  }
];

// Solutions organized by business size
const businessSizeData = {
  small: {
    title: "Small Business Solutions",
    description: "Generate more revenue quickly without complex integrations",
    solutions: [
      "ai-automation-starter",
      "marketing-automation",
      "sales-automation"
    ]
  },
  medium: {
    title: "Mid-Market Solutions",
    description: "Scale your automation efforts across multiple departments",
    solutions: [
      "marketing-automation",
      "sales-automation",
      "custom-ai-automation",
      "intelligent-analytics"
    ]
  },
  enterprise: {
    title: "Enterprise Solutions",
    description: "Enterprise-grade automation for complex organizations",
    solutions: [
      "custom-ai-automation",
      "development-implementation",
      "intelligent-analytics"
    ]
  }
};

// Solutions organized by industry
const industryData = {
  retail: {
    title: "Retail & E-commerce",
    description: "Convert browsers into buyers and increase customer lifetime value",
    solutions: [
      "marketing-automation",
      "intelligent-analytics",
      "ai-automation-starter"
    ]
  },
  financial: {
    title: "Financial Services",
    description: "Streamline client acquisition and compliance processes",
    solutions: [
      "custom-ai-automation",
      "development-implementation",
      "sales-automation"
    ]
  },
  manufacturing: {
    title: "Manufacturing",
    description: "Optimize production and supply chain with intelligent automation",
    solutions: [
      "intelligent-analytics",
      "custom-ai-automation",
      "development-implementation"
    ]
  }
};

export default function Services() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");

  // Find a service by ID
  const getServiceById = (id) => coreServices.find(service => service.id === id);

  return (
    <main className="py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="outline" className="mb-6 px-3 py-1">
            <BrainCircuit className="mr-1 h-3.5 w-3.5 text-primary" />
            {isPathFrench ? "Propulsé par l'IA" : "Powered by AI"}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {isPathFrench 
              ? "Solutions d'Automatisation IA" 
              : "AI Automation Solutions"}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {isPathFrench
              ? "Générez plus de revenus et travaillez moins grâce à nos solutions d'automatisation alimentées par l'IA"
              : "Generate more revenue and work less with our AI-powered automation solutions"}
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="mt-16 mb-24">
          <h2 className="text-2xl font-bold mb-10 text-center">
            {isPathFrench ? "Nos Solutions Principales" : "Our Core Solutions"}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {coreServices.filter(service => service.featured).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                  <div className={`p-6 ${service.primaryColor}`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={service.link}>
                        {isPathFrench ? "En Savoir Plus" : "Learn More"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solutions by Category */}
        <div className="mb-16">
          <Tabs defaultValue="by-size" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="by-size">
                {isPathFrench ? "Par Taille d'Entreprise" : "By Business Size"}
              </TabsTrigger>
              <TabsTrigger value="by-industry">
                {isPathFrench ? "Par Industrie" : "By Industry"}
              </TabsTrigger>
            </TabsList>

            {/* By Business Size Tab */}
            <TabsContent value="by-size">
              <div className="grid gap-8 mt-10">
                {Object.entries(businessSizeData).map(([size, data]) => (
                  <div key={size}>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">{data.title}</h3>
                      <p className="text-muted-foreground mt-1">{data.description}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {data.solutions.map((serviceId) => {
                        const service = getServiceById(serviceId);
                        return (
                          <Card key={serviceId} className="border-primary/10">
                            <CardHeader>
                              <div className="flex items-center gap-2 mb-2">
                                <div className={`p-2 rounded-full ${service.primaryColor}`}>
                                  <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                              </div>
                              <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                              <Button variant="outline" className="w-full" asChild>
                                <Link href={service.link}>
                                  {isPathFrench ? "Détails" : "View Details"}
                                  <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* By Industry Tab */}
            <TabsContent value="by-industry">
              <div className="grid gap-8 mt-10">
                {Object.entries(industryData).map(([industry, data]) => (
                  <div key={industry}>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold">{data.title}</h3>
                      <p className="text-muted-foreground mt-1">{data.description}</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {data.solutions.map((serviceId) => {
                        const service = getServiceById(serviceId);
                        return (
                          <Card key={serviceId} className="border-primary/10">
                            <CardHeader>
                              <div className="flex items-center gap-2 mb-2">
                                <div className={`p-2 rounded-full ${service.primaryColor}`}>
                                  <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                              </div>
                              <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                              <Button variant="outline" className="w-full" asChild>
                                <Link href={service.link}>
                                  {isPathFrench ? "Détails" : "View Details"}
                                  <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {isPathFrench 
              ? "Prêt à Transformer Votre Business avec l'IA ?" 
              : "Ready to Transform Your Business with AI?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isPathFrench
              ? "Contactez-nous aujourd'hui pour découvrir comment nos solutions d'automatisation IA peuvent vous faire gagner plus en travaillant moins."
              : "Contact us today to discover how our AI automation solutions can help you make more money while working less."
            }
          </p>
          <Button size="lg" asChild>
            <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
              {isPathFrench ? "Commencer Maintenant" : "Get Started Now"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}