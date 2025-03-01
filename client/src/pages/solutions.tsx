import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { solutions } from "@/data/solutions";
import { useTranslation } from "@/lib/i18n";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Nos Solutions" : "Our Solutions",
  subtitle: isPathFrench 
    ? "Des solutions complètes de transformation numérique adaptées aux besoins de votre entreprise"
    : "Comprehensive digital transformation packages tailored to your business needs",
  sections: {
    keyDeliverables: isPathFrench ? "Livrables Clés" : "Key Deliverables",
    benefits: isPathFrench ? "Avantages" : "Benefits",
    pricingModel: isPathFrench ? "Modèle de Prix" : "Pricing Model",
    getStarted: isPathFrench ? "Commencer" : "Get Started"
  }
});

export default function Solutions() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="mb-4">
                    {isPathFrench ? solution.frenchTargetClient || solution.targetClient : solution.targetClient}
                  </Badge>
                  <CardTitle className="text-xl">
                    {isPathFrench ? solution.frenchName || solution.name : solution.name}
                  </CardTitle>
                  <CardDescription>
                    {isPathFrench ? solution.frenchDescription || solution.description : solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">{content.sections.keyDeliverables}:</h3>
                    <ul className="space-y-2">
                      {(isPathFrench ? solution.frenchKeyDeliverables || solution.keyDeliverables : solution.keyDeliverables).map((deliverable) => (
                        <li key={deliverable} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">{content.sections.benefits}:</h3>
                    <ul className="space-y-2">
                      {(isPathFrench ? solution.frenchBenefits || solution.benefits : solution.benefits).map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-1">{content.sections.pricingModel}:</h3>
                      <p className="text-sm text-muted-foreground">
                        {isPathFrench ? solution.pricingModel.frenchDetails || solution.pricingModel.details : solution.pricingModel.details}
                      </p>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={isPathFrench ? `/fr/contact?solution=${solution.id}` : `/contact?solution=${solution.id}`}>
                        {content.sections.getStarted}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}