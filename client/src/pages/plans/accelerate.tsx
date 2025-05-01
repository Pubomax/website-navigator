import React from "react";
import { Link } from "wouter";
import { PageTitle } from "@/components/page-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Gauge } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function AcceleratePlan() {
  const { t, isPathFrench } = useTranslation();
  
  const features = [
    "Everything in VELOCITY plus:",
    "Enhanced AI for cross-selling & upselling",
    "Automated email nurture campaigns",
    "Advanced analytics & reporting",
    "CRM workflow automation",
    "Bi-weekly strategy sessions",
    "Dedicated account manager",
    "A/B testing optimization",
  ];

  return (
    <>
      <PageTitle 
        pageKey="acceleratePlan"
        customTitle={isPathFrench ? "ACCELERATE: Automatisation Marketing et Ventes Complète" : "ACCELERATE: Comprehensive Marketing & Sales Automation"}
        customDescription={isPathFrench ? 
          "Accélérez votre croissance avec notre solution complète d'automatisation des ventes et du marketing. Campagnes de nurturing automatisées, optimisation A/B et stratégie dédiée." : 
          "Accelerate your growth with our comprehensive sales and marketing automation solution. Automated nurturing campaigns, A/B optimization, and dedicated strategy."
        }
      />
      
      <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                <Gauge className="mr-1 h-3.5 w-3.5" />
                <span>{isPathFrench ? "Plan d'automatisation complet" : "Comprehensive automation plan"}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                ACCELERATE
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                {isPathFrench ? "Automatisation marketing et ventes complète" : "Comprehensive marketing & sales automation"}
              </h2>
              
              <p className="text-lg text-gray-600 mt-6">
                {isPathFrench ? 
                  "Maximisez votre ROI avec une automatisation complète des ventes et du marketing. Idéal pour les entreprises en croissance qui cherchent à optimiser leur pipeline complet et à augmenter leur conversion." : 
                  "Maximize your ROI with comprehensive sales and marketing automation. Perfect for growing businesses looking to optimize their entire pipeline and increase conversion."
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/consultation">
                    {isPathFrench ? "Commencer avec ACCELERATE" : "Start with ACCELERATE"}
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/consultation">
                    {isPathFrench ? "Planifier une consultation" : "Schedule a Consultation"}
                  </Link>
                </Button>
              </div>
            </div>
            
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader className="bg-blue-50 border-b border-blue-100">
                <CardTitle className="text-2xl font-bold text-center text-blue-800">
                  $1,500<span className="text-base font-normal text-blue-600">/month</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className={cn("text-gray-700", i === 0 && "font-semibold")}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
            {isPathFrench ? "Comment fonctionne ACCELERATE" : "How ACCELERATE Works"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: isPathFrench ? "Analyse approfondie" : "Comprehensive Analysis",
                description: isPathFrench ? 
                  "Nous effectuons une analyse approfondie de votre parcours client et de votre pipeline de vente pour identifier toutes les opportunités d'automatisation." : 
                  "We perform a deep analysis of your customer journey and sales pipeline to identify all automation opportunities."
              },
              {
                step: "2",
                title: isPathFrench ? "Mise en œuvre stratégique" : "Strategic Implementation",
                description: isPathFrench ? 
                  "Nous mettons en place une solution complète d'automatisation avec des campagnes de nurturing personnalisées et des intégrations CRM avancées." : 
                  "We implement a comprehensive automation solution with personalized nurture campaigns and advanced CRM integrations."
              },
              {
                step: "3",
                title: isPathFrench ? "Optimisation basée sur les données" : "Data-Driven Optimization",
                description: isPathFrench ? 
                  "Nous optimisons continuellement vos campagnes avec des tests A/B et une analyse avancée pour améliorer constamment les résultats." : 
                  "We continuously optimize your campaigns with A/B testing and advanced analytics to consistently improve results."
              }
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/consultation">
                {isPathFrench ? "Commencer avec ACCELERATE aujourd'hui" : "Start with ACCELERATE Today"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isPathFrench ? "Idéal pour les entreprises qui..." : "Perfect for businesses that..."}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: isPathFrench ? "Cherchent à optimiser tout leur pipeline" : "Want to optimize their entire pipeline",
                description: isPathFrench ? 
                  "De la génération de leads à la conclusion de ventes, ACCELERATE améliore chaque étape du processus." : 
                  "From lead generation to deal closing, ACCELERATE enhances every step of the process."
              },
              {
                title: isPathFrench ? "Ont un volume moyen à élevé de leads" : "Have a moderate to high volume of leads",
                description: isPathFrench ? 
                  "Gérez efficacement vos leads avec des parcours personnalisés qui convertissent plus et plus rapidement." : 
                  "Efficiently manage your leads with personalized journeys that convert more and faster."
              },
              {
                title: isPathFrench ? "Veulent unifier marketing et ventes" : "Want to unify marketing and sales",
                description: isPathFrench ? 
                  "Éliminez les silos et créez une expérience client transparente entre le marketing et les ventes." : 
                  "Break down silos and create a seamless customer experience between marketing and sales."
              },
              {
                title: isPathFrench ? "Ont besoin d'une stratégie d'automatisation" : "Need an automation strategy",
                description: isPathFrench ? 
                  "Bénéficiez de conseils d'experts sur la façon d'optimiser vos processus commerciaux avec l'automatisation." : 
                  "Get expert guidance on how to optimize your business processes with automation."
              },
            ].map((item, i) => (
              <Card key={i} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isPathFrench ? "Prêt à transformer votre pipeline commercial ?" : "Ready to transform your sales pipeline?"}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {isPathFrench ? 
              "Choisissez ACCELERATE et bénéficiez d'une solution complète d'automatisation qui assure des résultats mesurables et durables." : 
              "Choose ACCELERATE for a comprehensive automation solution that delivers measurable, sustainable results."
            }
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="/consultation">
                {isPathFrench ? "Commencer avec ACCELERATE" : "Start with ACCELERATE"}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              <Link href="/plans/dominate">
                {isPathFrench ? "Explorer DOMINATE" : "Explore DOMINATE"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}