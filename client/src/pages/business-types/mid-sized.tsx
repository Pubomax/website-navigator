import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function MidSizedEnterprises() {
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
            <h1 className="text-4xl font-bold tracking-tight">Solutions for Mid-Sized Enterprises</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Comprehensive digital transformation solutions designed for growing enterprises 
              with 50-500 employees, focusing on scalability and innovation.
            </p>

            <h2>Common Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Complex operational workflows",
                "Legacy system integration",
                "Data management and analytics",
                "Departmental coordination",
                "Scalable infrastructure needs",
                "Competition with larger enterprises"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Tailored Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Enterprise Integration Suite</h3>
                <p>Comprehensive integration solutions for connecting disparate systems and workflows.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics Platform</h3>
                <p>Data-driven decision making tools with predictive analytics capabilities.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                <p>Cloud-based solutions that grow with your business needs.</p>
              </div>
            </div>

            <h2>Key Benefits</h2>
            <ul>
              <li>Streamlined operations across departments</li>
              <li>Enhanced data analytics capabilities</li>
              <li>Improved customer experience management</li>
              <li>Increased operational efficiency</li>
              <li>Better competitive positioning</li>
            </ul>

            <h2>Enterprise Solutions Package</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Mid-Market Digital Transformation Suite</h3>
              <ul className="space-y-2">
                <li>Enterprise-grade infrastructure setup</li>
                <li>Advanced analytics and reporting</li>
                <li>Cross-department automation</li>
                <li>Customer relationship management</li>
                <li>Business intelligence tools</li>
                <li>24/7 priority support</li>
              </ul>
              <p className="mt-4 text-muted-foreground">Custom pricing based on requirements</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
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
