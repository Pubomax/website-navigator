import React from "react";
import { Link } from "wouter";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function VelocityPlan() {
  const { t, isPathFrench } = useTranslation();
  
  const features = [
    "Sales & lead qualification AI chatbot",
    "Custom integrations with your existing tools",
    "Monthly strategy review",
    "24/7 lead capture automation",
    "Fast-track implementation (2 weeks)",
    "ROI tracking dashboard",
  ];

  return (
    <>
      <PageTitle 
        pageKey="velocityPlan"
        customTitle={isPathFrench ? "VELOCITY: Automatisation des Ventes pour PME" : "VELOCITY: Sales Automation for Small Business"}
        customDescription={isPathFrench ? 
          "Commencez à automatiser vos ventes en 2 semaines avec notre forfait VELOCITY. Un chatbot IA, des intégrations personnalisées et un suivi du ROI." : 
          "Start automating your sales within 2 weeks with our VELOCITY plan. AI chatbot, custom integrations, and ROI tracking."
        }
      />
      
      <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 mb-4">
                <Zap className="mr-1 h-3.5 w-3.5" />
                <span>{isPathFrench ? "Plan d'automatisation rapide" : "Fast-track automation plan"}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                VELOCITY
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                {isPathFrench ? "Automatisation des ventes simple mais puissante" : "Simple yet powerful sales automation"}
              </h2>
              
              <p className="text-lg text-gray-600 mt-6">
                {isPathFrench ? 
                  "Commencez à automatiser vos ventes et votre prospection avec notre forfait le plus populaire. Conçu spécifiquement pour les PME qui veulent générer plus de ventes sans ajouter de personnel." : 
                  "Start automating your sales and lead generation with our most popular plan. Specifically designed for small businesses looking to generate more sales without adding headcount."
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/consultation">
                    {isPathFrench ? "Commencer avec VELOCITY" : "Start with VELOCITY"}
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/consultation">
                    {isPathFrench ? "Planifier une consultation" : "Schedule a Consultation"}
                  </Link>
                </Button>
              </div>
            </div>
            
            <Card className="border-2 border-indigo-100 shadow-lg">
              <CardHeader className="bg-indigo-50 border-b border-indigo-100">
                <CardTitle className="text-2xl font-bold text-center text-indigo-800">
                  $500<span className="text-base font-normal text-indigo-600">/month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/consultation">
                    {isPathFrench ? "Démarrer maintenant" : "Get Started Now"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isPathFrench ? "Comment fonctionne VELOCITY" : "How VELOCITY Works"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: isPathFrench ? "Analyse et configuration" : "Analysis & Setup",
                description: isPathFrench ? 
                  "Nous analysons votre processus de vente actuel et configurons votre chatbot d'IA personnalisé en 5 jours ouvrables." : 
                  "We analyze your current sales process and set up your custom AI chatbot within 5 business days."
              },
              {
                step: "2",
                title: isPathFrench ? "Intégration et lancement" : "Integration & Launch",
                description: isPathFrench ? 
                  "Nous intégrons le système à votre site web et à vos outils existants, puis nous lançons votre solution automatisée." : 
                  "We integrate the system with your website and existing tools, then launch your automated solution."
              },
              {
                step: "3",
                title: isPathFrench ? "Optimisation continue" : "Ongoing Optimization",
                description: isPathFrench ? 
                  "Nous surveillons les performances et optimisons le système chaque mois pour améliorer continuellement les résultats." : 
                  "We monitor performance and optimize the system monthly to continuously improve results."
              }
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/consultation">
                {isPathFrench ? "Commencer avec VELOCITY aujourd'hui" : "Start with VELOCITY Today"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isPathFrench ? "Foire aux Questions" : "Frequently Asked Questions"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: isPathFrench ? "Combien de temps faut-il pour mettre en place VELOCITY ?" : "How long does it take to set up VELOCITY?",
                answer: isPathFrench ? 
                  "Notre processus de configuration rapide prend généralement 2 semaines, de la signature à la mise en ligne." : 
                  "Our fast-track setup process typically takes 2 weeks from signing to going live."
              },
              {
                question: isPathFrench ? "Dois-je signer un contrat à long terme ?" : "Do I need to sign a long-term contract?",
                answer: isPathFrench ? 
                  "Non, VELOCITY fonctionne sur une base mensuelle sans engagement à long terme. Vous pouvez l'annuler à tout moment." : 
                  "No, VELOCITY works on a month-to-month basis with no long-term commitment. You can cancel anytime."
              },
              {
                question: isPathFrench ? "Est-ce que VELOCITY s'intègre à mon CRM existant ?" : "Does VELOCITY integrate with my existing CRM?",
                answer: isPathFrench ? 
                  "Oui, nous nous intégrons à la plupart des CRM populaires comme Salesforce, HubSpot, Pipedrive et bien d'autres." : 
                  "Yes, we integrate with most popular CRMs including Salesforce, HubSpot, Pipedrive, and many others."
              },
              {
                question: isPathFrench ? "Puis-je passer à un plan supérieur plus tard ?" : "Can I upgrade to a higher tier plan later?",
                answer: isPathFrench ? 
                  "Absolument ! Vous pouvez facilement passer à nos plans ACCELERATE ou DOMINATE à tout moment lorsque votre entreprise est prête." : 
                  "Absolutely! You can easily upgrade to our ACCELERATE or DOMINATE plans at any time when your business is ready."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isPathFrench ? "Prêt à accélérer vos ventes ?" : "Ready to accelerate your sales?"}
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            {isPathFrench ? 
              "Commencez avec VELOCITY et voyez la différence qu'une automatisation intelligente peut faire pour votre entreprise." : 
              "Start with VELOCITY and see the difference smart automation can make for your business."
            }
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
              <Link href="/consultation">
                {isPathFrench ? "Commencer avec VELOCITY" : "Start with VELOCITY"}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-800">
              <Link href="/plans/accelerate">
                {isPathFrench ? "Explorer ACCELERATE" : "Explore ACCELERATE"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}