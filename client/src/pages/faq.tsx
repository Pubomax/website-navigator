import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "Questions Fréquemment Posées" : "Frequently Asked Questions",
  subtitle: isPathFrench
    ? "Trouvez des réponses aux questions courantes sur nos services, processus et solutions."
    : "Find answers to common questions about our services, processes, and solutions."
});

export default function FAQ() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(faqCategories).map(([key, category]) => (
              <div
                key={key}
                className="bg-card rounded-lg border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <category.icon className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">{isPathFrench ? category.frenchTitle || category.title : category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${key}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {isPathFrench ? faq.frenchQuestion || faq.question : faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {isPathFrench ? faq.frenchAnswer || faq.answer : faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}