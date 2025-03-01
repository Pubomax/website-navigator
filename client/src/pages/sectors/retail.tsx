import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";

export default function Retail() {
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
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Retail Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Transform your retail operations with cutting-edge digital solutions that enhance customer experience, 
              streamline operations, and drive growth in the modern retail landscape.
            </p>

            <h2>Industry Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Omnichannel presence and integration",
                "Inventory management and supply chain",
                "Customer experience and personalization",
                "Data analytics and insights",
                "Competition from e-commerce giants",
                "Digital payment solutions"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Our Retail Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Omnichannel Integration</h3>
                <p>Seamless integration of online and offline retail channels for consistent customer experience.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Smart Inventory Management</h3>
                <p>AI-powered inventory tracking and optimization systems with predictive analytics.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Customer Analytics Platform</h3>
                <p>Advanced customer behavior analysis and personalization tools.</p>
              </div>
            </div>

            <h2>Implementation Process</h2>
            <ol>
              <li>Retail Operations Assessment</li>
              <li>Digital Strategy Development</li>
              <li>Technology Integration Planning</li>
              <li>Pilot Program Implementation</li>
              <li>Full-Scale Deployment</li>
              <li>Continuous Optimization</li>
            </ol>

            <h2>Success Metrics</h2>
            <ul>
              <li>30% increase in online sales conversion</li>
              <li>25% reduction in inventory costs</li>
              <li>40% improvement in customer engagement</li>
              <li>50% faster order fulfillment</li>
              <li>Significant improvement in customer satisfaction</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Retail Business
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Retail Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
