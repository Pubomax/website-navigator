import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, CheckCircle2 } from "lucide-react";

export default function DigitalFoundation() {
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
            <h1 className="text-4xl font-bold tracking-tight">Digital Foundation Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Build a strong digital infrastructure to support your business growth with our comprehensive Digital Foundation Package.
            </p>

            <h2>Package Overview</h2>
            <p>
              The Digital Foundation Package is designed to establish or enhance your organization's digital infrastructure. 
              It provides the essential building blocks needed for digital transformation, ensuring your business has a solid 
              technological foundation for future growth and innovation.
            </p>

            <h2>Key Features</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Digital Infrastructure Assessment and Planning",
                "Cloud Infrastructure Setup and Optimization",
                "Basic Process Automation Implementation",
                "Digital Security Foundation",
                "Employee Digital Skills Training",
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
              <li>Improved operational efficiency through basic automation</li>
              <li>Enhanced digital security and risk management</li>
              <li>Reduced IT infrastructure costs</li>
              <li>Increased employee productivity</li>
              <li>Scalable foundation for future digital initiatives</li>
            </ul>

            <h2>Ideal For</h2>
            <p>
              This package is perfect for small to medium-sized businesses looking to:
            </p>
            <ul>
              <li>Start their digital transformation journey</li>
              <li>Modernize outdated IT infrastructure</li>
              <li>Improve operational efficiency</li>
              <li>Build a foundation for future growth</li>
            </ul>

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
