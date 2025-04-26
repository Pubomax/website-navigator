import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Settings, 
  Users, 
  LifeBuoy,
  ShieldCheck
} from "lucide-react";

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
      icon: LifeBuoy
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
      icon: LifeBuoy
    }
  ]
});

export function WhyChooseUs() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {content.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-4 ${
                benefit.title.includes("Efficiency") || benefit.title.includes("Efficacité") 
                  ? "bg-amber-50" 
                  : benefit.title.includes("Cost") || benefit.title.includes("Coûts")
                    ? "bg-emerald-50"
                    : benefit.title.includes("Scalable") || benefit.title.includes("Évolutives")
                      ? "bg-blue-50"
                      : benefit.title.includes("Custom") || benefit.title.includes("Sur Mesure")
                        ? "bg-purple-50"
                        : benefit.title.includes("Expert") || benefit.title.includes("Experts")
                          ? "bg-indigo-50"
                          : "bg-rose-50"
              }`}>
                <benefit.icon className={`h-6 w-6 ${
                benefit.title.includes("Efficiency") || benefit.title.includes("Efficacité") 
                  ? "text-amber-500" 
                  : benefit.title.includes("Cost") || benefit.title.includes("Coûts")
                    ? "text-emerald-500"
                    : benefit.title.includes("Scalable") || benefit.title.includes("Évolutives")
                      ? "text-blue-500"
                      : benefit.title.includes("Custom") || benefit.title.includes("Sur Mesure")
                        ? "text-purple-500"
                        : benefit.title.includes("Expert") || benefit.title.includes("Experts")
                          ? "text-indigo-500"
                          : "text-rose-500"
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                benefit.title.includes("Efficiency") || benefit.title.includes("Efficacité") 
                  ? "text-amber-700" 
                  : benefit.title.includes("Cost") || benefit.title.includes("Coûts")
                    ? "text-emerald-700"
                    : benefit.title.includes("Scalable") || benefit.title.includes("Évolutives")
                      ? "text-blue-700"
                      : benefit.title.includes("Custom") || benefit.title.includes("Sur Mesure")
                        ? "text-purple-700"
                        : benefit.title.includes("Expert") || benefit.title.includes("Experts")
                          ? "text-indigo-700"
                          : "text-rose-700"
              }`}>{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}