import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Factory, CheckCircle2, ArrowRight } from "lucide-react";

export default function Manufacturing() {
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
              <Factory className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Manufacturing Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Digital transformation solutions tailored for modern manufacturing operations, enhancing efficiency and productivity through smart technology integration.
            </p>

            <h2>Industry Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Complex supply chain management",
                "Production efficiency optimization",
                "Quality control and compliance",
                "Equipment maintenance and downtime",
                "Resource and inventory management",
                "Workforce productivity"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Our Manufacturing Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Smart Factory Implementation</h3>
                <p>Integration of IoT sensors, real-time monitoring, and automated production systems to create a connected manufacturing environment.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Predictive Maintenance</h3>
                <p>AI-powered systems that predict equipment failures before they occur, minimizing downtime and maintenance costs.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Supply Chain Optimization</h3>
                <p>Advanced analytics and automation tools for streamlined supply chain management and inventory control.</p>
              </div>
            </div>

            <h2>Implementation Process</h2>
            <ol>
              <li>Manufacturing Process Assessment</li>
              <li>Digital Infrastructure Planning</li>
              <li>Technology Integration Strategy</li>
              <li>Pilot Program Implementation</li>
              <li>Full-Scale Deployment</li>
              <li>Continuous Optimization</li>
            </ol>

            <h2>Success Metrics</h2>
            <ul>
              <li>20-30% reduction in operational costs</li>
              <li>40% improvement in equipment efficiency</li>
              <li>50% reduction in unplanned downtime</li>
              <li>25% increase in production output</li>
              <li>Significant improvement in quality control</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Manufacturing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Manufacturing Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
