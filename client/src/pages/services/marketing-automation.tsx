import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BrainCircuit, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  ClipboardList,
  UserCheck,
  CalendarClock,
  Bot,
  LineChart,
  MessageSquareText
} from "lucide-react";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { useLeadScore } from "@/hooks/use-lead-score";

const demoLead = {
  email: "marketing-director@enterprise.com",
  company: "Enterprise Inc.",
  jobTitle: "Marketing Director",
  visitFrequency: 4,
  downloadedResources: ["marketing-guide", "automation-whitepaper"],
  emailInteractions: 3,
};

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench 
    ? "Automatisation du Marketing" 
    : "Marketing Automation",
  subtitle: isPathFrench
    ? "Boostez vos campagnes marketing, générez plus de leads qualifiés et convertissez-les en clients avec moins d'effort grâce à notre solution d'automatisation marketing intelligente."
    : "Supercharge your marketing campaigns, generate more qualified leads, and convert them into customers with less effort using our intelligent marketing automation solution.",
  highlights: isPathFrench ? [
    {
      title: "Générez Des Revenus Plus Rapidement",
      description: "Réduisez de 40% le temps entre le premier contact et la conversion en client payant",
      icon: TrendingUp,
    },
    {
      title: "Travaillez Moins, Accomplissez Plus",
      description: "Économisez 15+ heures par semaine sur des tâches marketing répétitives",
      icon: Clock,
    },
    {
      title: "Intelligence Artificielle Intégrée",
      description: "Notre IA analyse les comportements et optimise les séquences automatiquement",
      icon: BrainCircuit,
    }
  ] : [
    {
      title: "Generate Revenue Faster",
      description: "Reduce time from first contact to paying customer by 40%",
      icon: TrendingUp,
    },
    {
      title: "Work Less, Achieve More",
      description: "Save 15+ hours weekly on repetitive marketing tasks",
      icon: Clock,
    },
    {
      title: "Built-in AI Intelligence",
      description: "Our AI analyzes behaviors and optimizes sequences automatically",
      icon: BrainCircuit,
    }
  ],
  capabilities: isPathFrench ? [
    {
      title: "Automatisation des Médias Sociaux",
      icon: ClipboardList,
      description: "Planifiez et publiez du contenu sur toutes les plateformes sociales en un seul endroit"
    },
    {
      title: "Suivi Automatisé",
      icon: UserCheck,
      description: "Séquences de suivi personnalisées déclenchées par les actions des prospects"
    },
    {
      title: "Rapports Automatisés",
      icon: LineChart,
      description: "Générez des rapports de métriques et KPIs marketing complets automatiquement"
    },
    {
      title: "Génération de Leads Automatisée",
      icon: Bot,
      description: "Identifiez et capturez des leads qualifiés grâce à des systèmes intelligents"
    },
    {
      title: "Nurturing de Leads Automatisé",
      icon: MessageSquareText,
      description: "Développez des relations avec les prospects via des communications personnalisées automatiques"
    },
    {
      title: "Planification d'Événements",
      icon: CalendarClock,
      description: "Automatisez les invitations, les rappels et les suivis post-événements"
    }
  ] : [
    {
      title: "Social Media Automation",
      icon: ClipboardList,
      description: "Schedule and post content across all social platforms in one place"
    },
    {
      title: "Automated Follow-up",
      icon: UserCheck,
      description: "Personalized follow-up sequences triggered by prospect actions"
    },
    {
      title: "Automated Reporting",
      icon: LineChart,
      description: "Generate comprehensive marketing metrics and KPI reports automatically"
    },
    {
      title: "Automated Lead Generation",
      icon: Bot,
      description: "Identify and capture qualified leads through intelligent systems"
    },
    {
      title: "Automated Lead Nurturing",
      icon: MessageSquareText,
      description: "Develop relationships with prospects through automated, personalized communication"
    },
    {
      title: "Event Scheduling",
      icon: CalendarClock,
      description: "Automate invitations, reminders, and post-event follow-ups"
    }
  ],
  results: isPathFrench ? {
    leadGeneration: "Augmentation de 35% de la génération de leads",
    conversionRate: "Augmentation de 28% du taux de conversion",
    timeReduction: "Réduction de 60% du temps de gestion marketing",
    customerInsight: "Compréhension plus profonde des comportements clients"
  } : {
    leadGeneration: "35% increase in lead generation",
    conversionRate: "28% increase in conversion rates",
    timeReduction: "60% reduction in marketing management time",
    customerInsight: "Deeper understanding of customer behaviors"
  },
  scoreSection: {
    title: isPathFrench ? "Scoring de Leads IA" : "AI Lead Scoring",
    description: isPathFrench 
      ? "Notre système de scoring de leads alimenté par l'IA prédit quels prospects sont les plus susceptibles de se convertir, vous permettant de concentrer vos efforts sur les opportunités à plus haut potentiel."
      : "Our AI-powered lead scoring system predicts which prospects are most likely to convert, allowing you to focus your efforts on the highest potential opportunities."
  },
  cta: {
    primary: isPathFrench ? "Commencer à Gagner Plus" : "Start Making More Money",
    secondary: isPathFrench ? "Voir les Cas Clients" : "View Case Studies"
  }
});

export default function MarketingAutomation() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);
  const { score, factors } = useLeadScore(demoLead);

  return (
    <main className="py-24">
      <div className="container max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1">
            <BrainCircuit className="mr-1 h-3.5 w-3.5 text-primary" />
            {isPathFrench ? "IA & Automatisation" : "AI & Automation"}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {content.title}
          </h1>
          <p className="text-xl max-w-3xl text-muted-foreground mb-8">
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
        
        {/* Key Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {content.highlights.map((highlight, index) => (
            <Card key={index} className="border-primary/10">
              <CardContent className="pt-6">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        
        {/* Capabilities Section with Diagonal Layout */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0"></div>
          <div className="relative z-10 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {isPathFrench ? "Fonctionnalités Principales" : "Key Capabilities"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
              {content.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <capability.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Results & AI Score Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              {isPathFrench ? "Résultats Prouvés" : "Proven Results"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg font-semibold">{content.results.leadGeneration}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <LineChart className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg font-semibold">{content.results.conversionRate}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg font-semibold">{content.results.timeReduction}</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <UserCheck className="h-8 w-8 text-primary mb-3" />
                <p className="text-lg font-semibold">{content.results.customerInsight}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 p-6 bg-primary/5 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{content.scoreSection.title}</h3>
              <LeadScoreTooltip score={score} factors={factors} />
            </div>
            <p className="text-muted-foreground mb-4">{content.scoreSection.description}</p>
            <div className="space-y-4">
              <div className="p-3 bg-background rounded-lg flex justify-between">
                <span>{isPathFrench ? "Email Professionnel" : "Professional Email"}</span>
                <span className="font-semibold">{demoLead.email}</span>
              </div>
              <div className="p-3 bg-background rounded-lg flex justify-between">
                <span>{isPathFrench ? "Poste" : "Job Title"}</span>
                <span className="font-semibold">{demoLead.jobTitle}</span>
              </div>
              <div className="p-3 bg-background rounded-lg flex justify-between">
                <span>{isPathFrench ? "Niveau d'Engagement" : "Engagement Level"}</span>
                <span className="font-semibold text-primary">{isPathFrench ? "Élevé" : "High"}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href={isPathFrench ? "/fr/contact" : "/contact"}>
              {isPathFrench ? "Démarrer votre automatisation marketing" : "Start your marketing automation"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}