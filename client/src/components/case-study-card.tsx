import React from 'react';
import { Link } from 'wouter';
import { Clock, ArrowRight, BarChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/ui/optimized-image';

export interface CaseStudyMetric {
  label: string;
  before: string | number;
  after: string | number;
  change: number; // Percentage change
  icon?: React.ElementType;
}

export interface CaseStudyProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  imageUrl: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  className?: string;
  featured?: boolean;
}

/**
 * Enhanced Case Study Card component
 * - Shows detailed metrics with before/after comparisons
 * - Highlights client testimonials
 * - Provides industry context
 * - Shows clear, measurable results
 */
export function CaseStudyCard({
  id,
  title,
  client,
  industry,
  description,
  imageUrl,
  metrics,
  testimonial,
  className,
  featured = false
}: CaseStudyProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700",
      featured ? "lg:col-span-2" : "",
      className
    )}>
      <div className={cn(
        "flex flex-col",
        featured ? "lg:flex-row" : ""
      )}>
        {/* Image section */}
        <div className={cn(
          "relative",
          featured ? "lg:w-1/2" : ""
        )}>
          <OptimizedImage
            src={imageUrl}
            alt={`${client} - ${title}`}
            width={featured ? 800 : 600}
            height={featured ? 500 : 340}
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
            {industry}
          </div>
        </div>
        
        {/* Content section */}
        <div className={cn(
          "p-6",
          featured ? "lg:w-1/2 lg:p-8" : ""
        )}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          
          <p className="text-sm text-primary font-medium mb-4">
            {client}
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
            {description}
          </p>
          
          {/* Metrics/Results Section */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-3">
              Measurable Results
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              {metrics.slice(0, 4).map((metric, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center mb-1">
                    {metric.icon ? (
                      <metric.icon className="h-4 w-4 text-primary mr-1" />
                    ) : (
                      <TrendingUp className="h-4 w-4 text-primary mr-1" />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Before: <span className="font-medium">{metric.before}</span>
                    </div>
                    <div className="text-sm text-gray-900 dark:text-white">
                      After: <span className="font-bold">{metric.after}</span>
                    </div>
                  </div>
                  
                  <div className="mt-1">
                    <span className={cn(
                      "text-xs font-bold px-1.5 py-0.5 rounded",
                      metric.change > 0 ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : 
                                         "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    )}>
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial - Only show if provided */}
          {testimonial && (
            <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 dark:text-gray-300 italic mb-2 text-sm">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-900 dark:text-white text-sm font-medium">
                {testimonial.author}, <span className="text-gray-600 dark:text-gray-400 font-normal">{testimonial.role}</span>
              </p>
            </div>
          )}
          
          {/* Action Button */}
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href={`/case-studies/${id}`}>
              View Full Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}