import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";

export default function PublicSector() {
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
              <Landmark className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Public Sector Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Modernize public sector operations with digital solutions that enhance citizen services, 
              improve efficiency, and ensure transparency in government operations.
            </p>

            <h2>Sector Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Digital service delivery",
                "Legacy system modernization",
                "Data security and privacy",
                "Regulatory compliance",
                "Budget constraints",
                "Citizen engagement"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Our Public Sector Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Digital Government Services</h3>
                <p>Comprehensive digital platforms for efficient citizen service delivery and engagement.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Legacy System Modernization</h3>
                <p>Strategic modernization of legacy systems with minimal disruption to services.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Public Sector Analytics</h3>
                <p>Data-driven insights for improved policy-making and service delivery.</p>
              </div>
            </div>

            <h2>Implementation Strategy</h2>
            <ol>
              <li>Current State Assessment</li>
              <li>Digital Transformation Strategy</li>
              <li>Security and Compliance Planning</li>
              <li>Phased Implementation</li>
              <li>Staff Training Programs</li>
              <li>Continuous Improvement</li>
            </ol>

            <h2>Key Outcomes</h2>
            <ul>
              <li>Enhanced citizen service delivery</li>
              <li>Improved operational efficiency</li>
              <li>Better resource utilization</li>
              <li>Increased transparency</li>
              <li>Robust security and compliance</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Public Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Public Sector Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
