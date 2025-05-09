import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Star, Quote } from "lucide-react";

export function LocalTestimonialsSection() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const content = {
    title: isPathFrench 
      ? "Ce Que Disent Les Entrepreneurs Montréalais" 
      : "What Montreal Business Owners Say",
    subtitle: isPathFrench
      ? "Des témoignages authentiques de propriétaires d'entreprises locales qui ont transformé leurs opérations"
      : "Authentic testimonials from local business owners who have transformed their operations",
    testimonials: isPathFrench ? [
      {
        name: "Michel Tremblay",
        position: "Propriétaire",
        business: "Café Bonjour",
        location: "Le Plateau-Mont-Royal",
        quote: "Minecore a complètement automatisé notre stratégie marketing. Je passe maintenant plus de temps à créer des expériences exceptionnelles pour nos clients plutôt que de me battre avec les réseaux sociaux.",
        stars: 5,
        industry: "Restauration"
      },
      {
        name: "Sophie Lavoie",
        position: "Directrice",
        business: "Boutique Élégance",
        location: "Vieux-Montréal",
        quote: "Les leads générés par leur système sont vraiment qualifiés. Notre taux de conversion a presque doublé, et notre chiffre d'affaires a augmenté de 35% en seulement trois mois.",
        stars: 5,
        industry: "Commerce de détail"
      },
      {
        name: "Jean-François Côté",
        position: "Fondateur",
        business: "Solutions Vertes",
        location: "Villeray",
        quote: "En tant que petite entreprise, nous n'avions pas les ressources pour embaucher une équipe marketing complète. Minecore nous a fourni tous les avantages de l'automatisation marketing sans le coût élevé.",
        stars: 5,
        industry: "Services environnementaux"
      },
      {
        name: "Isabelle Bergeron",
        position: "PDG",
        business: "Design Moderne",
        location: "Mile End",
        quote: "L'aspect bilingue de leurs solutions est parfait pour Montréal. Maintenant nos campagnes fonctionnent parfaitement en français et en anglais, touchant toute notre clientèle cible.",
        stars: 5,
        industry: "Design d'intérieur"
      }
    ] : [
      {
        name: "Michael Thompson",
        position: "Owner",
        business: "Morning Brew Café",
        location: "Plateau Mont-Royal",
        quote: "Minecore completely automated our marketing strategy. I now spend more time creating exceptional experiences for our customers rather than struggling with social media.",
        stars: 5,
        industry: "Food & Beverage"
      },
      {
        name: "Sarah Jenkins",
        position: "Director",
        business: "Elegance Boutique",
        location: "Old Montreal",
        quote: "The leads generated by their system are truly qualified. Our conversion rate has nearly doubled, and revenue increased by 35% in just three months.",
        stars: 5,
        industry: "Retail"
      },
      {
        name: "John Fraser",
        position: "Founder",
        business: "Green Solutions",
        location: "Villeray",
        quote: "As a small business, we didn't have the resources to hire a full marketing team. Minecore provided all the benefits of marketing automation without the high cost.",
        stars: 5,
        industry: "Environmental Services"
      },
      {
        name: "Isabella Martinez",
        position: "CEO",
        business: "Modern Design",
        location: "Mile End",
        quote: "The bilingual aspect of their solutions is perfect for Montreal. Now our campaigns work seamlessly in both French and English, reaching all our target customers.",
        stars: 5,
        industry: "Interior Design"
      }
    ],
    cta: isPathFrench ? "Voir Plus de Témoignages" : "See More Testimonials",
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-700">
                <Quote className="w-12 h-12 transform rotate-180" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}, {testimonial.business}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-1">
                <MapPin className="w-4 h-4 text-indigo-500 mr-1" />
                <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  {testimonial.location}, Montreal
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {testimonial.industry}
                </span>
                <div className="ml-auto flex items-center">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-4"></div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isPathFrench ? "Client depuis" : "Client since"} 2023
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/case-studies" 
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}