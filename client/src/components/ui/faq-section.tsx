import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Enhanced FAQ Section with Schema.org markup
 * - Implements expandable sections for better UX
 * - Adds proper Schema.org FAQ markup for SEO
 * - Groups FAQs by topic
 * - Ensures FAQs address common objections
 */
export function FAQSection({ 
  faqs, 
  title = "Frequently Asked Questions", 
  description,
  className
}: FAQSectionProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith('/fr');
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQ Schema.org markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Toggle question open/closed state
  const toggleQuestion = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className={cn("py-12 bg-gray-50 dark:bg-gray-900", className)}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">{t(title)}</h2>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            {t(description)}
          </p>
        )}
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full px-4 py-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {t(faq.question)}
                </h3>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-200",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index 
                    ? "max-h-96 opacity-100" 
                    : "max-h-0 opacity-0"
                )}
                aria-hidden={openIndex !== index}
              >
                <div className="px-4 pb-5 pt-0">
                  <p className="text-gray-600 dark:text-gray-300">
                    {t(faq.answer)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}