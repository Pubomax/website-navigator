import React from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb component with schema.org markup
 * - Provides navigation context to users
 * - Adds structured data for search engines
 * - Adapts responsively for different screen sizes
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const [location] = useLocation();
  const isPathFrench = location.startsWith('/fr');
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  
  // Add home item if not included
  const breadcrumbItems = items[0]?.href === '/' 
    ? items 
    : [{ label: 'Home', href: '/' }, ...items];
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://minecoregroup.com${item.href === '/' ? '' : item.href}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className={cn("py-2 text-sm", className)}
      >
        <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-gray-400 flex-shrink-0" aria-hidden="true" />
              )}
              
              {index === 0 && (
                <Home className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" aria-hidden="true" />
              )}
              
              {item.isCurrentPage || index === breadcrumbItems.length - 1 ? (
                <span 
                  aria-current="page" 
                  className="text-gray-600 dark:text-gray-300 font-medium truncate"
                >
                  {t(item.label)}
                </span>
              ) : (
                <Link 
                  href={isPathFrench && item.href !== '/' ? `/fr${item.href}` : item.href}
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-400 truncate transition"
                >
                  {t(item.label)}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Generate breadcrumb items from the current path
 * @param path Current path, e.g., "/services/digital-foundation"
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbsFromPath(path: string): BreadcrumbItem[] {
  if (path === '/') return [{ label: 'Home', href: '/', isCurrentPage: true }];
  
  // Remove any trailing slash
  const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
  
  // Split the path and filter out empty segments
  const segments = normalizedPath.split('/').filter(Boolean);
  
  // Create breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [];
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    breadcrumbItems.push({
      label: formatBreadcrumbLabel(segment),
      href: currentPath,
      isCurrentPage: index === segments.length - 1
    });
  });
  
  return breadcrumbItems;
}

/**
 * Format a URL segment into a readable label
 * @param segment URL segment, e.g., "digital-foundation"
 * @returns Formatted label, e.g., "Digital Foundation"
 */
function formatBreadcrumbLabel(segment: string): string {
  // Handle special cases
  if (segment === 'fr') return 'Français';
  
  // Replace hyphens with spaces and capitalize each word
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}