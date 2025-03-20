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
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const categoryData = {
  target: {
    title: "By Business Size",
    description: "Solutions tailored to your revenue goals",
    data: {
      small: {
        title: "Small Business Solutions",
        description: "Perfect for businesses looking to scale their revenue quickly",
        services: [
          {
            name: "Basic Lead Generator",
            description: "Start generating qualified leads automatically",
            price: "Starting at $199/month",
          },
          {
            name: "Growth Accelerator",
            description: "Convert more leads with smart nurturing sequences",
            price: "Starting at $399/month",
          }
        ]
      },
      enterprise: {
        title: "Enterprise Solutions",
        description: "Advanced lead generation for larger organizations",
        services: [
          {
            name: "Enterprise Lead Machine",
            description: "Full-scale lead generation and nurturing system",
            price: "Custom pricing",
          },
          {
            name: "Revenue Maximizer",
            description: "AI-powered sales automation and optimization",
            price: "Custom pricing",
          }
        ]
      }
    }
  },
  industry: {
    title: "By Industry",
    description: "Industry-specific lead generation solutions",
    data: {
      retail: {
        title: "Retail & E-commerce",
        description: "Turn browsers into buyers automatically",
        services: [
          {
            name: "Shopping Cart Recovery",
            description: "Recover abandoned carts and boost sales",
            price: "Starting at $299/month",
          },
          {
            name: "Customer Loyalty Builder",
            description: "Increase repeat purchases automatically",
            price: "Starting at $399/month",
          }
        ]
      },
      services: {
        title: "Professional Services",
        description: "Generate high-value client appointments",
        services: [
          {
            name: "Appointment Scheduler",
            description: "Automated booking and follow-up system",
            price: "Starting at $249/month",
          },
          {
            name: "Client Nurturing Suite",
            description: "Convert prospects into long-term clients",
            price: "Starting at $449/month",
          }
        ]
      }
    }
  },
  need: {
    title: "By Need",
    description: "Solutions for specific revenue goals",
    data: {
      acquisition: {
        title: "Lead Acquisition",
        description: "Get more qualified leads consistently",
        services: [
          {
            name: "Lead Magnet Creator",
            description: "Create and distribute compelling lead magnets",
            price: "Starting at $199/month",
          },
          {
            name: "Social Lead Generator",
            description: "Convert social media followers into leads",
            price: "Starting at $299/month",
          }
        ]
      },
      conversion: {
        title: "Lead Conversion",
        description: "Turn more leads into paying customers",
        services: [
          {
            name: "Conversion Optimizer",
            description: "Improve conversion rates with AI-powered insights",
            price: "Starting at $399/month",
          },
          {
            name: "Sales Automation Suite",
            description: "Automate your entire sales process",
            price: "Starting at $599/month",
          }
        ]
      }
    }
  }
};

export default function Services() {
  return (
    <main className="py-24">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your Path to More Revenue
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Select the solution that best fits your business and start generating more leads and revenue today
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs defaultValue="target" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="target">By Size</TabsTrigger>
              <TabsTrigger value="industry">By Industry</TabsTrigger>
              <TabsTrigger value="need">By Need</TabsTrigger>
            </TabsList>

            {Object.entries(categoryData).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-8">
                  {Object.entries(category.data).map(([id, section]) => (
                    <div key={id}>
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                        <p className="text-muted-foreground mt-1">
                          {section.description}
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        {section.services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Card className="h-full">
                              <CardHeader>
                                <CardTitle>{service.name}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm font-medium text-muted-foreground mb-4">
                                  {service.price}
                                </p>
                                <Button className="w-full" asChild>
                                  <Link href="/contact">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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