import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";

export default function Finance() {
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
            <h1 className="text-4xl font-bold tracking-tight">Financial Services Solutions</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Cutting-edge digital solutions for financial institutions, enabling secure, efficient, and innovative financial services delivery.
            </p>

            <h2>Industry Challenges</h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Digital transformation and legacy system modernization",
                "Cybersecurity and regulatory compliance",
                "Customer experience enhancement",
                "Real-time data analytics and reporting",
                "Risk management and fraud prevention",
                "Competition from FinTech startups"
              ].map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>

            <h2>Our Financial Solutions</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Digital Banking Transformation</h3>
                <p>Modern digital banking platforms with seamless customer experience and robust security features.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">AI-Powered Risk Management</h3>
                <p>Advanced analytics and AI solutions for better risk assessment and fraud detection.</p>
              </div>

              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Regulatory Technology (RegTech)</h3>
                <p>Automated compliance monitoring and reporting systems to ensure regulatory adherence.</p>
              </div>
            </div>

            <h2>Implementation Approach</h2>
            <ol>
              <li>Financial Systems Assessment</li>
              <li>Security and Compliance Planning</li>
              <li>Digital Infrastructure Modernization</li>
              <li>Phased Implementation</li>
              <li>Staff Training and Adoption</li>
              <li>Continuous Monitoring and Updates</li>
            </ol>

            <h2>Key Benefits</h2>
            <ul>
              <li>Enhanced customer satisfaction and retention</li>
              <li>Reduced operational costs and improved efficiency</li>
              <li>Better risk management and fraud prevention</li>
              <li>Improved regulatory compliance</li>
              <li>Competitive advantage in digital banking</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Transform Your Financial Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Financial Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
