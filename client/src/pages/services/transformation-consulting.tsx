import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Brain, CheckCircle2 } from "lucide-react";

export default function TransformationConsulting() {
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
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Digital Transformation Consulting Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Expert guidance and strategic planning to navigate your organization's digital transformation journey successfully.
            </p>

            <h2>Package Overview</h2>
            <p>
              Our Digital Transformation Consulting Package provides comprehensive guidance and expertise to help organizations 
              navigate their digital transformation journey. We combine industry best practices, innovative strategies, and 
              practical implementation plans to ensure successful digital transformation outcomes.
            </p>

            <h2>Key Services</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Digital Maturity Assessment",
                "Transformation Strategy Development",
                "Technology Stack Evaluation",
                "Change Management Planning",
                "Implementation Roadmap Creation",
                "ROI Analysis and Monitoring"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Clear transformation roadmap aligned with business goals</li>
              <li>Reduced risk in digital transformation initiatives</li>
              <li>Accelerated adoption of digital technologies</li>
              <li>Improved operational efficiency and innovation</li>
              <li>Enhanced competitive advantage</li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              We follow a structured approach to digital transformation consulting:
            </p>
            <ol>
              <li>Assessment of current digital capabilities</li>
              <li>Definition of transformation goals and objectives</li>
              <li>Development of comprehensive transformation strategy</li>
              <li>Creation of detailed implementation roadmap</li>
              <li>Continuous monitoring and optimization</li>
            </ol>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Consultation
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
