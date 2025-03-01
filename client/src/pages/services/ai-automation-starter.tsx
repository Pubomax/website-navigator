import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Bot, CheckCircle2 } from "lucide-react";

export default function AIAutomationStarter() {
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
            <h1 className="text-4xl font-bold tracking-tight">AI & Automation Starter Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Begin your AI and automation journey with our comprehensive starter package designed for businesses taking their first steps into intelligent automation.
            </p>

            <h2>Package Overview</h2>
            <p>
              The AI & Automation Starter Package is designed to help businesses begin their journey with artificial intelligence 
              and automation. This package provides essential AI-powered tools and automation solutions that deliver immediate 
              value while laying the foundation for more advanced implementations.
            </p>

            <h2>Key Features</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "AI Readiness Assessment",
                "Basic Process Automation Setup",
                "Chatbot Implementation",
                "Data Analysis Automation",
                "Employee Training Program",
                "24/7 Technical Support"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Reduced manual workload through basic automation</li>
              <li>Improved customer service with AI-powered chatbots</li>
              <li>Enhanced decision-making with automated data analysis</li>
              <li>Increased operational efficiency</li>
              <li>Foundation for future AI implementations</li>
            </ul>

            <h2>Implementation Process</h2>
            <ol>
              <li>Initial assessment and planning</li>
              <li>Basic automation setup</li>
              <li>AI tools integration</li>
              <li>Staff training and onboarding</li>
              <li>Performance monitoring and optimization</li>
            </ol>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
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
