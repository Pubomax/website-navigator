import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";

export default function Healthcare() {
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
              <Stethoscope className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Healthcare Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Empower healthcare organizations with innovative digital solutions that enhance patient care, 
              streamline operations, and ensure compliance with healthcare regulations.
            </p>

            <h2>Industry Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Electronic Health Records (EHR) integration",
                "Patient data security and privacy",
                "Telehealth implementation",
                "Clinical workflow optimization",
                "Regulatory compliance",
                "Patient engagement and experience"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Our Healthcare Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Digital Health Platforms</h3>
                <p>Comprehensive healthcare management systems with EHR integration and telehealth capabilities.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Patient Care Analytics</h3>
                <p>AI-powered analytics for improved patient outcomes and personalized care plans.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Healthcare Compliance Suite</h3>
                <p>Automated compliance monitoring and reporting systems for healthcare regulations.</p>
              </div>
            </div>

            <h2>Implementation Approach</h2>
            <ol>
              <li>Healthcare Systems Assessment</li>
              <li>Digital Strategy Development</li>
              <li>Security and Compliance Planning</li>
              <li>Phased Implementation</li>
              <li>Staff Training and Adoption</li>
              <li>Continuous Monitoring and Updates</li>
            </ol>

            <h2>Key Benefits</h2>
            <ul>
              <li>Improved patient care quality</li>
              <li>Enhanced operational efficiency</li>
              <li>Better resource utilization</li>
              <li>Increased patient satisfaction</li>
              <li>Robust security and compliance</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Healthcare Organization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Healthcare Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
