import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Alberta() {
  return (
    <main className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">Digital Transformation in Alberta</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="lead">
              Driving innovation and digital excellence across Alberta, from Calgary's
              energy sector to Edmonton's emerging tech scene.
            </p>

            <h2>Local Expertise</h2>
            <p>
              Our Alberta team brings specialized knowledge in energy technology,
              industrial automation, and digital innovation for traditional industries.
              We understand the unique challenges of Alberta's diverse economy.
            </p>

            <h2>Industries We Serve in Alberta</h2>
            <ul>
              <li>Energy & Natural Resources</li>
              <li>Agriculture & Agtech</li>
              <li>Manufacturing & Industrial</li>
              <li>Healthcare & Life Sciences</li>
              <li>Logistics & Transportation</li>
            </ul>

            <h2>Our Alberta Presence</h2>
            <p>
              With offices in Calgary and Edmonton, we deliver comprehensive digital
              transformation services throughout Alberta. Our team combines deep industry
              knowledge with cutting-edge technology expertise to drive innovation and growth.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Our Alberta Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/case-studies">View Alberta Success Stories</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
