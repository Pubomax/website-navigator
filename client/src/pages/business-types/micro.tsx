import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, CheckCircle2, ArrowRight } from "lucide-react";

export default function MicroEnterprises() {
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
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Solutions for Micro Enterprises</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Empower your small business with affordable, scalable digital solutions designed specifically 
              for micro enterprises with up to 10 employees.
            </p>

            <h2>Common Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Limited budget and resources",
                "Need for automation and efficiency",
                "Online presence and marketing",
                "Customer relationship management",
                "Basic accounting and invoicing",
                "Time management and scheduling"
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
                <h3 className="text-xl font-semibold mb-2">Digital Starter Package</h3>
                <p>Essential digital tools for establishing and growing your online presence.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Business Automation Basics</h3>
                <p>Simple yet powerful automation tools for day-to-day operations.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Growth Enablement Tools</h3>
                <p>Scalable solutions that grow with your business.</p>
              </div>
            </div>

            <h2>Key Benefits</h2>
            <ul>
              <li>Cost-effective digital transformation</li>
              <li>Improved operational efficiency</li>
              <li>Enhanced customer engagement</li>
              <li>Competitive advantage</li>
              <li>Scalable growth foundation</li>
            </ul>

            <h2>Affordable Packages</h2>
            <div className="mt-6 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Micro Enterprise Starter Pack</h3>
              <ul className="space-y-2">
                <li>Basic website and online presence</li>
                <li>Simple CRM system</li>
                <li>Basic automation tools</li>
                <li>Social media integration</li>
                <li>Email marketing tools</li>
                <li>Customer support system</li>
              </ul>
              <p className="mt-4 text-muted-foreground">Starting from $199/month</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Digital Journey
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
