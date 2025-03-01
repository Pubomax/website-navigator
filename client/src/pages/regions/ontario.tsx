import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Ontario() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Digital Transformation in Ontario</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              Leading digital transformation solutions for businesses across Ontario, from Toronto's
              financial district to Ottawa's technology corridor.
            </p>

            <h2>Local Expertise</h2>
            <p>
              Our Ontario team brings deep expertise in financial services, technology, manufacturing,
              and public sector digital transformation. We understand the unique challenges and
              opportunities facing Ontario businesses.
            </p>

            <h2>Ontario Industries We Serve</h2>
            <ul>
              <li>Financial Services & FinTech</li>
              <li>Manufacturing & Industry 4.0</li>
              <li>Technology & Software</li>
              <li>Healthcare & Life Sciences</li>
              <li>Public Sector & Government</li>
            </ul>

            <h2>Our Ontario Presence</h2>
            <p>
              With offices in Toronto and Ottawa, we provide local support and expertise to businesses
              across Ontario. Our team of consultants and technical experts are ready to help you
              navigate your digital transformation journey.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Our Ontario Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Ontario Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
