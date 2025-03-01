import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Code, CheckCircle2 } from "lucide-react";

export default function CustomSoftware() {
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
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Custom Software & Platform Development Package</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Tailored software solutions and platforms designed to meet your unique business requirements and drive digital innovation.
            </p>

            <h2>Package Overview</h2>
            <p>
              Our Custom Software & Platform Development Package delivers bespoke solutions that perfectly align with your 
              business processes and objectives. We combine modern technologies, industry best practices, and innovative 
              approaches to create robust, scalable, and user-friendly software solutions.
            </p>

            <h2>Development Services</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Custom Application Development",
                "Enterprise Software Solutions",
                "Cloud-Native Platforms",
                "Mobile App Development",
                "API Development & Integration",
                "Legacy System Modernization"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2>Development Process</h2>
            <ol>
              <li>Requirements Analysis & Planning</li>
              <li>System Architecture Design</li>
              <li>Agile Development Sprints</li>
              <li>Quality Assurance & Testing</li>
              <li>Deployment & Integration</li>
              <li>Maintenance & Support</li>
            </ol>

            <h2>Technology Stack</h2>
            <ul>
              <li>Modern Frontend Frameworks (React, Vue, Angular)</li>
              <li>Robust Backend Technologies (Node.js, Python, Java)</li>
              <li>Cloud Platforms (AWS, Azure, Google Cloud)</li>
              <li>Database Solutions (SQL, NoSQL)</li>
              <li>DevOps & CI/CD Integration</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project
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
