import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';

export type ContentVariant = 'industry' | 'region' | 'business-size' | 'interest';

export interface ContentVariantOption {
  id: string;
  name: string;
  content: React.ReactNode;
}

interface PersonalizedContentProps {
  defaultVariant?: string;
  variantType: ContentVariant;
  variants: ContentVariantOption[];
  title?: string;
  description?: string;
  className?: string;
  showSelector?: boolean;
}

/**
 * PersonalizedContent component for targeted content display
 * 
 * This component enables personalized content experiences by:
 * - Showing content tailored to specific industries
 * - Displaying region-specific content
 * - Adapting to business size
 * - Personalizing based on inferred interests
 */
export function PersonalizedContent({
  defaultVariant,
  variantType,
  variants,
  title,
  description,
  className,
  showSelector = true
}: PersonalizedContentProps) {
  const [location] = useLocation();
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(defaultVariant);
  
  // Try to infer variant from URL if not specified
  useEffect(() => {
    if (selectedVariant) return;
    
    // Check the URL for industry, region, or business size indicators
    const pathSegments = location.split('/');
    
    switch(variantType) {
      case 'industry':
        // Check if URL contains industry indicators like /sectors/finance
        if (pathSegments.includes('sectors')) {
          const industryIndex = pathSegments.indexOf('sectors') + 1;
          if (industryIndex < pathSegments.length) {
            const industry = pathSegments[industryIndex];
            const matchingVariant = variants.find(v => v.id === industry);
            if (matchingVariant) {
              setSelectedVariant(matchingVariant.id);
              return;
            }
          }
        }
        break;
        
      case 'region':
        // Check if URL contains region indicators like /regions/quebec
        if (pathSegments.includes('regions')) {
          const regionIndex = pathSegments.indexOf('regions') + 1;
          if (regionIndex < pathSegments.length) {
            const region = pathSegments[regionIndex];
            const matchingVariant = variants.find(v => v.id === region);
            if (matchingVariant) {
              setSelectedVariant(matchingVariant.id);
              return;
            }
          }
        }
        break;
        
      case 'business-size':
        // Check if URL contains business size indicators like /business-types/mid-sized
        if (pathSegments.includes('business-types')) {
          const sizeIndex = pathSegments.indexOf('business-types') + 1;
          if (sizeIndex < pathSegments.length) {
            const size = pathSegments[sizeIndex];
            const matchingVariant = variants.find(v => v.id === size);
            if (matchingVariant) {
              setSelectedVariant(matchingVariant.id);
              return;
            }
          }
        }
        break;
    }
    
    // If we couldn't determine from URL, use the first variant as default
    if (variants.length > 0) {
      setSelectedVariant(variants[0].id);
    }
  }, [location, selectedVariant, variantType, variants]);
  
  // Find the current content to display
  const currentVariant = variants.find(v => v.id === selectedVariant);
  
  return (
    <div className={cn("py-8", className)}>
      {title && (
        <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      )}
      
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      
      {/* Variant selector */}
      {showSelector && variants.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {variants.map(variant => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedVariant === variant.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              )}
              aria-pressed={selectedVariant === variant.id}
            >
              {variant.name}
            </button>
          ))}
        </div>
      )}
      
      {/* Content area */}
      <div className="animate-in fade-in duration-300">
        {currentVariant?.content}
      </div>
    </div>
  );
}

/**
 * IndustryContent - Specialized component for industry-specific content
 */
export function IndustryContent({
  variants,
  ...props
}: Omit<PersonalizedContentProps, 'variantType' | 'variants'> & { variants: ContentVariantOption[] }) {
  return (
    <PersonalizedContent
      variantType="industry"
      variants={variants}
      title={props.title || "Industry-Specific Solutions"}
      description={props.description || "See how our solutions are tailored to your industry's specific needs"}
      {...props}
    />
  );
}

/**
 * RegionContent - Specialized component for region-specific content
 */
export function RegionContent({
  variants,
  ...props
}: Omit<PersonalizedContentProps, 'variantType' | 'variants'> & { variants: ContentVariantOption[] }) {
  return (
    <PersonalizedContent
      variantType="region"
      variants={variants}
      title={props.title || "Local Solutions"}
      description={props.description || "Discover solutions tailored to your region's specific needs and requirements"}
      {...props}
    />
  );
}

/**
 * BusinessSizeContent - Specialized component for business-size content
 */
export function BusinessSizeContent({
  variants,
  ...props
}: Omit<PersonalizedContentProps, 'variantType' | 'variants'> & { variants: ContentVariantOption[] }) {
  return (
    <PersonalizedContent
      variantType="business-size"
      variants={variants}
      title={props.title || "Solutions for Your Business Size"}
      description={props.description || "Explore solutions specifically designed for businesses like yours"}
      {...props}
    />
  );
}