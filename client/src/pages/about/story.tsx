import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { History, Rocket, Users, Globe } from "lucide-react";

export default function CompanyStory() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Our Story</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              Founded in 2020, we've grown from a small team of innovators to a leading digital 
              transformation partner, helping businesses across the globe embrace the future of technology.
            </p>

            <div className="grid gap-8 my-12">
              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-lg bg-primary/10">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Beginning</h3>
                  <p>
                    Started by a group of technology enthusiasts who saw the need for comprehensive 
                    digital transformation solutions that could adapt to businesses of all sizes. 
                    Our initial focus was on helping small businesses navigate the digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth & Innovation</h3>
                  <p>
                    As our expertise grew, so did our capabilities. We expanded our services to 
                    include AI-powered solutions, custom software development, and enterprise-level 
                    consulting, always staying at the forefront of technological advancement.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                  <p>
                    Today, our team consists of over 200 experts across multiple disciplines, 
                    from AI specialists to digital transformation consultants, all united by 
                    our passion for helping businesses succeed in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p>
                    We've helped thousands of businesses across various industries transform 
                    their operations, embrace new technologies, and achieve unprecedented growth 
                    through digital innovation.
                  </p>
                </div>
              </div>
            </div>

            <h2>Key Milestones</h2>
            <ul className="space-y-4">
              <li>2020: Company founded with a focus on digital transformation</li>
              <li>2021: Launched our AI & Automation solutions</li>
              <li>2022: Expanded to enterprise-level consulting</li>
              <li>2023: Opened international offices</li>
              <li>2024: Reached 1000+ successful transformations</li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
