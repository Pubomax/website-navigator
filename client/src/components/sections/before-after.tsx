import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Ban, Clock3, CloudOff, DollarSign, Frown, Heart, Lightbulb, Smile, ThumbsUp, Users } from "lucide-react";

export function BeforeAfterSection() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const content = {
    title: isPathFrench 
      ? "La Transformation de Votre Entreprise" 
      : "Transform Your Business",
    subtitle: isPathFrench
      ? "Voyez l'impact réel de nos solutions d'automatisation sur les entreprises montréalaises"
      : "See the real impact of our automation solutions on Montreal businesses",
    scenarios: isPathFrench ? [
      {
        id: "time",
        title: "Temps et Effort",
        before: "25+ heures par semaine passées sur des tâches marketing manuelles",
        after: "Seulement 5 heures par semaine grâce à l'automatisation de 80% des tâches",
        beforeIcon: Clock3,
        afterIcon: Heart,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "leads",
        title: "Génération de Leads",
        before: "3-5 leads non qualifiés par semaine via des méthodes traditionnelles",
        after: "15-20 leads hautement qualifiés par semaine grâce à l'automatisation intelligente",
        beforeIcon: Users,
        afterIcon: Users,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "revenue",
        title: "Revenu Mensuel",
        before: "Fluctuations imprévisibles des revenus avec des cycles de vente longs",
        after: "Augmentation de 30-40% du revenu avec des cycles de vente plus courts et prévisibles",
        beforeIcon: DollarSign,
        afterIcon: DollarSign,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "stress",
        title: "Niveau de Stress",
        before: "Inquiétude constante concernant la prochaine vente et le flux de trésorerie",
        after: "Tranquillité d'esprit grâce à une génération de leads constante et un pipeline de vente fiable",
        beforeIcon: Frown,
        afterIcon: Smile,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      }
    ] : [
      {
        id: "time",
        title: "Time & Effort",
        before: "25+ hours per week spent on manual marketing tasks",
        after: "Only 5 hours per week with 80% of tasks automated",
        beforeIcon: Clock3,
        afterIcon: Heart,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "leads",
        title: "Lead Generation",
        before: "3-5 unqualified leads per week using traditional methods",
        after: "15-20 highly qualified leads per week through intelligent automation",
        beforeIcon: Users,
        afterIcon: Users,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "revenue",
        title: "Monthly Revenue",
        before: "Unpredictable revenue fluctuations with long sales cycles",
        after: "30-40% increase in revenue with shorter, more predictable sales cycles",
        beforeIcon: DollarSign,
        afterIcon: DollarSign,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      },
      {
        id: "stress",
        title: "Stress Level",
        before: "Constant worry about the next sale and cash flow",
        after: "Peace of mind with consistent lead generation and reliable sales pipeline",
        beforeIcon: Frown,
        afterIcon: Smile,
        beforeColor: "text-red-500",
        afterColor: "text-green-500"
      }
    ],
    cta: isPathFrench ? "Discuter de Votre Transformation" : "Discuss Your Transformation",
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {content.scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {scenario.title}
                </h3>
              </div>
              
              <div className="p-6 bg-red-50 dark:bg-red-900/20 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-full mr-4">
                    <scenario.beforeIcon className={`w-6 h-6 ${scenario.beforeColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {isPathFrench ? "AVANT" : "BEFORE"}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {scenario.before}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center -mt-3 relative z-10">
                <div className="bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              
              <div className="p-6 bg-green-50 dark:bg-green-900/20">
                <div className="flex items-start">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-full mr-4">
                    <scenario.afterIcon className={`w-6 h-6 ${scenario.afterColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {isPathFrench ? "APRÈS" : "AFTER"}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {scenario.after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/consultation" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            {content.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}