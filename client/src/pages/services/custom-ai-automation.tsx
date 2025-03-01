import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, Bot, CheckCircle2 } from "lucide-react";

export default function CustomAIAutomation() {
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
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Custom AI & Automation Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Advanced, tailored AI and automation solutions designed specifically for your business needs and challenges.
            </p>

            <h2>Package Overview</h2>
            <p>
              Our Custom AI & Automation Package delivers sophisticated, tailored solutions that address your specific business 
              challenges. We combine cutting-edge AI technologies with advanced automation to create powerful, customized 
              solutions that drive efficiency and innovation in your organization.
            </p>

            <h2>Custom Solutions</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Custom AI Model Development",
                "Advanced Process Automation",
                "Machine Learning Integration",
                "Natural Language Processing Solutions",
                "Computer Vision Applications",
                "Predictive Analytics Systems"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>Development Process</h2>
            <ol>
              <li>In-depth requirements analysis</li>
              <li>Solution architecture design</li>
              <li>Custom AI model development</li>
              <li>Integration and testing</li>
              <li>Deployment and monitoring</li>
              <li>Continuous optimization</li>
            </ol>

            <h2>Applications</h2>
            <ul>
              <li>Intelligent document processing</li>
              <li>Advanced customer service automation</li>
              <li>Predictive maintenance systems</li>
              <li>Custom chatbots and virtual assistants</li>
              <li>Computer vision for quality control</li>
              <li>Natural language processing for data analysis</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Discuss Your Project
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
