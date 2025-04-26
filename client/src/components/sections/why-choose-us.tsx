import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Settings, 
  Users, 
  HeadphonesIcon,
  Award,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Pourquoi Nous Choisir" : "Why Choose Us",
  subtitle: isPathFrench 
    ? "Nos solutions d'automatisation IA offrent des avantages mesurables pour votre entreprise" 
    : "Our AI automation solutions deliver measurable benefits for your business",
  benefits: isPathFrench ? [
    {
      title: "Efficacité Accrue",
      description: "Automatisez les tâches répétitives pour permettre à votre équipe de se concentrer sur des activités à plus forte valeur ajoutée",
      icon: Zap
    },
    {
      title: "Réduction des Coûts",
      description: "Réduisez les frais généraux et optimisez les ressources tout en maintenant ou en améliorant la qualité",
      icon: DollarSign
    },
    {
      title: "Solutions Évolutives",
      description: "Nos solutions s'adaptent à votre croissance et peuvent être étendues à mesure que vos besoins évoluent",
      icon: TrendingUp
    },
    {
      title: "Développement Sur Mesure",
      description: "Solutions personnalisées conçues spécifiquement pour répondre à vos défis commerciaux uniques",
      icon: Settings
    },
    {
      title: "Implémentation Par Des Experts",
      description: "Équipe expérimentée assurant une mise en œuvre et une intégration sans faille avec vos systèmes existants",
      icon: Users
    },
    {
      title: "Support Continu",
      description: "Assistance et maintenance régulières pour garantir des performances optimales à long terme",
      icon: HeadphonesIcon
    }
  ] : [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks to allow your team to focus on higher-value activities",
      icon: Zap
    },
    {
      title: "Cost Reduction",
      description: "Reduce overhead and optimize resources while maintaining or improving quality",
      icon: DollarSign
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions grow with your business and can be expanded as your needs evolve",
      icon: TrendingUp
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed specifically to address your unique business challenges",
      icon: Settings
    },
    {
      title: "Expert Implementation",
      description: "Experienced team ensuring seamless deployment and integration with your existing systems",
      icon: Users
    },
    {
      title: "Ongoing Support",
      description: "Regular assistance and maintenance to ensure optimal long-term performance",
      icon: HeadphonesIcon
    }
  ]
});

export function WhyChooseUs() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <section className="section relative bg-gradient-to-b from-background/80 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] opacity-30">
          <div className="absolute inset-0 translate-z-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-[120px]" />
        </div>
      </div>
      
      <div className="container-pro relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary/90 text-sm font-medium">
            <Award className="mr-2 h-4 w-4" />
            {isPathFrench ? "Excellence en Automatisation" : "Automation Excellence"}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6 gradient-text">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground/90 leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {content.benefits.map((benefit, index) => {
            // Generate unique accent colors for each benefit
            const accentColors = [
              "from-blue-500/20 to-blue-600/20 text-blue-700",
              "from-green-500/20 to-green-600/20 text-green-700",
              "from-amber-500/20 to-amber-600/20 text-amber-700",
              "from-purple-500/20 to-purple-600/20 text-purple-700",
              "from-rose-500/20 to-rose-600/20 text-rose-700",
              "from-cyan-500/20 to-cyan-600/20 text-cyan-700",
            ];
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center px-4 py-6 rounded-2xl hover:bg-card/60 hover:shadow-sm transition-all duration-300"
              >
                <div className={cn(
                  "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md", 
                  accentColors[index % accentColors.length]
                )}>
                  <benefit.icon className="h-7 w-7 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border/20 text-center"
        >
          <p className="text-lg mb-6 text-muted-foreground/90">
            {isPathFrench 
              ? "Prêt à voir ces avantages dans votre entreprise?" 
              : "Ready to see these benefits in your business?"}
          </p>
          <a 
            href={isPathFrench ? "/fr/consultation" : "/consultation"}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isPathFrench ? "Commencer votre transformation" : "Start your transformation"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}