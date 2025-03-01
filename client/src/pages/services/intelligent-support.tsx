import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, CheckCircle2 } from "lucide-react";

export default function IntelligentSupport() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Intelligent Support & Contact Center Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Transform your customer support with AI-powered solutions that deliver exceptional service 24/7.
            </p>

            <h2>Package Overview</h2>
            <p>
              Our Intelligent Support & Contact Center Package revolutionizes customer service operations with 
              AI-powered solutions. We combine advanced technology with human expertise to create seamless, 
              efficient, and personalized support experiences.
            </p>

            <h2>Key Features</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "AI-Powered Virtual Assistants",
                "Omnichannel Support Integration",
                "Intelligent Routing System",
                "Real-time Analytics Dashboard",
                "Automated Ticket Management",
                "Sentiment Analysis & Response"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>24/7 Customer Support Availability</li>
              <li>Reduced Response Times</li>
              <li>Improved First Contact Resolution</li>
              <li>Enhanced Customer Satisfaction</li>
              <li>Reduced Operational Costs</li>
              <li>Scalable Support Operations</li>
            </ul>

            <h2>Implementation Process</h2>
            <ol>
              <li>Support Operations Assessment</li>
              <li>Custom Solution Design</li>
              <li>AI Model Training</li>
              <li>Integration & Testing</li>
              <li>Staff Training</li>
              <li>Continuous Optimization</li>
            </ol>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Support
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
