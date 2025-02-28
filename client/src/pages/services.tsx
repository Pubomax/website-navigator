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
import { businessSizes, sectors, needs, industries } from "@/data/services";

const categoryData = {
  size: {
    title: "By Business Size",
    description: "Solutions tailored to your organization's scale",
    data: businessSizes,
  },
  sector: {
    title: "By Sector",
    description: "Specialized solutions for your industry sector",
    data: sectors,
  },
  need: {
    title: "By Need",
    description: "Solutions designed for your specific requirements",
    data: needs,
  },
  industry: {
    title: "By Industry",
    description: "Industry-specific digital transformation solutions",
    data: industries,
  },
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
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive digital transformation solutions tailored to your business
          </p>
        </motion.div>

        <div className="mt-16">
          <Tabs defaultValue="size" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="size">By Size</TabsTrigger>
              <TabsTrigger value="sector">By Sector</TabsTrigger>
              <TabsTrigger value="need">By Need</TabsTrigger>
              <TabsTrigger value="industry">By Industry</TabsTrigger>
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

                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {section.services.map((service, index) => (
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