import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Bot,
  Code,
  Building2,
  Phone,
  BarChart,
  ArrowRight,
} from "lucide-react";

const services = {
  micro: [
    {
      name: "Digital Foundation Starter",
      description: "Essential digital infrastructure for small businesses",
      icon: Building2,
      price: "Starting at $2,500",
    },
    {
      name: "AI Automation Basics",
      description: "Entry-level automation solutions for common tasks",
      icon: Bot,
      price: "Starting at $1,500",
    },
  ],
  mid: [
    {
      name: "Complete Digital Transformation",
      description: "Comprehensive digital solutions for growing businesses",
      icon: Brain,
      price: "Custom pricing",
    },
    {
      name: "Advanced Automation Suite",
      description: "Sophisticated automation for complex workflows",
      icon: Code,
      price: "Custom pricing",
    },
  ],
  enterprise: [
    {
      name: "Enterprise AI Solutions",
      description: "Large-scale AI implementation and integration",
      icon: BarChart,
      price: "Contact for pricing",
    },
    {
      name: "Custom Platform Development",
      description: "Tailor-made enterprise software solutions",
      icon: Phone,
      price: "Contact for pricing",
    },
  ],
};

export default function Services() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Tailored digital transformation solutions for businesses of all sizes
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs defaultValue="micro" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="micro">Micro Business</TabsTrigger>
              <TabsTrigger value="mid">Mid-sized Business</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([size, serviceList]) => (
              <TabsContent key={size} value={size}>
                <div className="grid gap-8 md:grid-cols-2">
                  {serviceList.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full">
                        <CardHeader>
                          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                            <service.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{service.name}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm font-medium text-muted-foreground">
                            {service.price}
                          </p>
                          <Button className="mt-4" variant="outline">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
}