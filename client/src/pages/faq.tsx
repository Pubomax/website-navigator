import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";
import { PageTitle } from "@/components/page-title";
import { generateFAQSchema, serializeSchema } from "@/lib/schema-org";

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

  // Prepare FAQ data for schema
  const prepareFaqData = () => {
    // Convert object to array and flatten the questions
    const faqData: { question: string; answer: string }[] = [];
    
    // Type safe iterating through object entries
    Object.values(faqCategories).forEach((category: any) => {
      if (category && category.questions) {
        category.questions.forEach((question: any) => {
          faqData.push({
            question: question.question,
            answer: question.answer
          });
        });
      }
    });
    
    return faqData;
  };

  return (
    <main className="py-24">
      <PageTitle 
        pageKey="faq"
        customTitle={isPathFrench ? "FAQ | Automatisation d'Entreprise à Montréal | Groupe Minecore" : "FAQ | Business Automation in Montreal | Minecore Group"}
        customDescription={isPathFrench ? "Réponses aux questions fréquentes sur nos services d'automatisation IA pour les entreprises montréalaises. Découvrez comment nous pouvons vous aider." : "Answers to frequently asked questions about our AI automation services for Montreal businesses. Find out how we can help you."}
        keywords="Montreal business automation FAQ, AI automation questions, small business technology Montreal, sales automation FAQ, marketing automation FAQ"
      />
      
      {/* Add FAQ Schema.org structured data */}
      <Helmet>
        <script type="application/ld+json">
          {serializeSchema(generateFAQSchema(prepareFaqData()))}
        </script>
      </Helmet>
      
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
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${key}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
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