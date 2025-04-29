import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, BrainCircuit, Calendar, Mail, MessagesSquare, MousePointer, Phone, Search, UserCheck, Zap } from "lucide-react";

export function AiSimplifiedSection() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const content = {
    title: isPathFrench 
      ? "L'IA Simplifiée pour Votre Entreprise" 
      : "AI Simplified for Your Business",
    subtitle: isPathFrench
      ? "Ce que l'automatisation par IA signifie concrètement pour votre entreprise"
      : "What AI automation actually means for your business in practical terms",
    features: isPathFrench ? [
      {
        icon: Calendar,
        title: "Planification Automatique",
        description: "L'IA organise vos réunions, envoie des rappels et suit les confirmations sans votre intervention."
      },
      {
        icon: MessagesSquare,
        title: "Conversations Automatisées",
        description: "Des assistants virtuels qui répondent instantanément aux questions courantes des clients 24h/24."
      },
      {
        icon: Mail,
        title: "Emails Personnalisés",
        description: "Des séquences d'emails qui s'adaptent automatiquement aux actions et intérêts de chaque prospect."
      },
      {
        icon: Search,
        title: "Recherche de Prospects",
        description: "Identification automatique des clients potentiels correspondant exactement à votre client idéal."
      },
      {
        icon: Phone,
        title: "Suivi des Appels",
        description: "Planification et rappels automatiques pour ne jamais manquer un suivi important."
      },
      {
        icon: UserCheck,
        title: "Qualification Intelligente",
        description: "L'IA trie vos leads et se concentre sur ceux qui sont prêts à acheter maintenant."
      }
    ] : [
      {
        icon: Calendar,
        title: "Automatic Scheduling",
        description: "AI arranges your meetings, sends reminders, and tracks confirmations without your involvement."
      },
      {
        icon: MessagesSquare,
        title: "Automated Conversations",
        description: "Virtual assistants that instantly answer common customer questions 24/7."
      },
      {
        icon: Mail,
        title: "Personalized Emails",
        description: "Email sequences that automatically adapt to each prospect's actions and interests."
      },
      {
        icon: Search,
        title: "Prospect Finding",
        description: "Automatic identification of potential customers matching exactly your ideal client."
      },
      {
        icon: Phone,
        title: "Call Follow-ups",
        description: "Automatic scheduling and reminders so you never miss an important follow-up."
      },
      {
        icon: UserCheck,
        title: "Smart Qualification",
        description: "AI sorts your leads and focuses on those who are ready to buy now."
      }
    ],
    nonTechnicalTitle: isPathFrench 
      ? "L'IA Sans Jargon Technique" 
      : "AI Without Technical Jargon",
    nonTechnicalDescription: isPathFrench
      ? "Nous transformons la technologie complexe en outils simples qui font le travail pour vous. Pas besoin d'être un expert en technologie."
      : "We turn complex technology into simple tools that do the work for you. No need to be a tech expert.",
    emphasis: isPathFrench
      ? "Concentrez-vous sur la gestion de votre entreprise. Nous nous occupons de l'automatisation."
      : "Focus on running your business. We'll handle the automation.",
    cta: isPathFrench ? "Explorer Toutes Nos Solutions" : "Explore All Our Solutions",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-full w-14 h-14 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full">
                  <BrainCircuit className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                {content.nonTechnicalTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                {content.nonTechnicalDescription}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-6">
                {content.emphasis}
              </p>
              <a 
                href={isPathFrench ? "/fr/solutions" : "/solutions"}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                {content.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}