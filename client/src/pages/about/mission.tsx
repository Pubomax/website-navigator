import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Fuel,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer Success",
    description: "We measure our success through the achievements and growth of our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in digital transformation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership with our clients.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of ethics and transparency in all our dealings.",
  },
  {
    icon: Fuel,
    title: "Excellence",
    description: "We strive for excellence in every solution we deliver and service we provide.",
  },
];

export default function Mission() {
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
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Mission & Values</h1>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="bg-card rounded-lg p-8 border mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                To empower organizations of all sizes with innovative digital solutions that drive 
                growth, efficiency, and competitive advantage in an evolving digital landscape.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-muted-foreground">
                To be the global leader in digital transformation, known for our innovative solutions, 
                exceptional service, and measurable impact on our clients' success.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-8">Our Core Values</h2>
            <div className="grid gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 items-start p-6 rounded-lg border"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Our Commitments</h2>
            <ul className="space-y-4">
              <li>Delivering measurable value to our clients</li>
              <li>Maintaining the highest standards of quality</li>
              <li>Investing in continuous innovation</li>
              <li>Supporting sustainable digital practices</li>
              <li>Contributing to our global community</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Partner with Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">See Our Impact</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
