import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function BritishColumbia() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Digital Transformation in British Columbia</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              Empowering businesses across British Columbia with innovative digital solutions,
              from Vancouver's tech hub to Victoria's growing digital ecosystem.
            </p>

            <h2>Local Expertise</h2>
            <p>
              Our British Columbia team specializes in technology, clean tech, digital media,
              and sustainable solutions. We understand the unique challenges and opportunities
              in BC's diverse business landscape.
            </p>

            <h2>Industries We Serve in BC</h2>
            <ul>
              <li>Technology & Software Development</li>
              <li>Clean Technology & Renewable Energy</li>
              <li>Digital Media & Entertainment</li>
              <li>Natural Resources & Forestry</li>
              <li>Tourism & Hospitality</li>
            </ul>

            <h2>Our BC Presence</h2>
            <p>
              With offices in Vancouver and Victoria, we provide comprehensive digital transformation
              services throughout British Columbia. Our local team combines regional knowledge
              with global expertise to deliver solutions that drive growth and innovation.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Our BC Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View BC Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
