import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function LargeEnterprises() {
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
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Enterprise Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Enterprise-grade digital transformation solutions for large organizations 
              with 500+ employees, focusing on global scalability, security, and innovation.
            </p>

            <h2>Enterprise Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Global operations management",
                "Enterprise-wide digital transformation",
                "Complex system integration",
                "Data security and compliance",
                "Multi-region deployment",
                "Change management at scale"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Enterprise Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Global Digital Infrastructure</h3>
                <p>Comprehensive digital infrastructure solutions for worldwide operations.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Enterprise AI Platform</h3>
                <p>Advanced AI solutions for large-scale business operations and analytics.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Security & Compliance Suite</h3>
                <p>Enterprise-grade security solutions with global compliance management.</p>
              </div>
            </div>

            <h2>Strategic Benefits</h2>
            <ul>
              <li>Global operational excellence</li>
              <li>Enhanced security and compliance</li>
              <li>Advanced data analytics and AI capabilities</li>
              <li>Seamless system integration</li>
              <li>Improved organizational agility</li>
            </ul>

            <h2>Enterprise Transformation Package</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Global Enterprise Solutions</h3>
              <ul className="space-y-2">
                <li>Global infrastructure deployment</li>
                <li>Enterprise AI and automation</li>
                <li>Advanced security measures</li>
                <li>Multi-region support</li>
                <li>Custom integration solutions</li>
                <li>Dedicated enterprise support</li>
              </ul>
              <p className="mt-4 text-muted-foreground">Custom enterprise pricing</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Enterprise Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Enterprise Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
