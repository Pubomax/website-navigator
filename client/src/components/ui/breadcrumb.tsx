import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Get the first part of the path to determine if we're on the French version
  const isFirstItemFrench = items.length > 0 && items[0].href.startsWith("/fr");
  const homeHref = isFirstItemFrench ? "/fr" : "/";
  
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
        <li>
          <Link 
            href={homeHref}
            className="flex items-center hover:text-foreground"
          >
            <Home className="mr-1 h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="mx-1 h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
            {item.current ? (
              <span 
                className="font-medium text-foreground" 
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BreadcrumbWithHome({ items, className }: BreadcrumbProps) {
  // Get the first part of the path to determine if we're on the French version
  const isFirstItemFrench = items.length > 0 && items[0].href.startsWith("/fr");
  const homeHref = isFirstItemFrench ? "/fr" : "/";
  const homeLabel = isFirstItemFrench ? "Accueil" : "Home";
  
  // Add home as the first item
  const itemsWithHome = [
    { label: homeLabel, href: homeHref },
    ...items
  ];
  
  return <Breadcrumb items={itemsWithHome} className={className} />;
}