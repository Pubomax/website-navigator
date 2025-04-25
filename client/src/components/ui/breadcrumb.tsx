import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItemProps {
  children: React.ReactNode;
  isCurrentPage?: boolean;
  className?: string;
}

const BreadcrumbItem = ({
  children,
  isCurrentPage,
  className,
}: BreadcrumbItemProps) => {
  return (
    <li className={cn("inline-flex items-center", className)}>
      {isCurrentPage ? (
        <span className="text-muted-foreground" aria-current="page">
          {children}
        </span>
      ) : (
        <span className="text-foreground">{children}</span>
      )}
    </li>
  );
};

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
  separator?: React.ReactNode;
}

const Breadcrumb = ({
  children,
  className,
  separator = <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />,
}: BreadcrumbProps) => {
  const items = React.Children.toArray(children);

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center text-sm",
          className
        )}
      >
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item}
              {index < items.length - 1 && separator}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb };