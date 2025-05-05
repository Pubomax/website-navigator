import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropdownItemProps {
  name: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  iconColor?: string;
  onClick: () => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

export function DropdownItem({ 
  name, 
  href, 
  description, 
  icon: Icon, 
  iconColor, 
  onClick, 
  t, 
  getLocalizedPath 
}: DropdownItemProps) {
  return (
    <Link
      key={href}
      href={getLocalizedPath(href)}
      className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 mt-1">
            <Icon className={cn("h-5 w-5", iconColor || "text-gray-400")} />
          </div>
        )}
        <div>
          <div className="text-base font-medium text-[#111827] group-hover:text-primary">
            {t(name)}
          </div>
          {description && (
            <div className="mt-1 text-sm text-[#6b7280]">
              {t(description)}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

interface DropdownSectionProps {
  title: string;
  items: Array<{
    name: string;
    href: string;
    description?: string;
    icon?: React.ElementType;
    iconColor?: string;
  }>;
  onItemClick: () => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

export function DropdownSection({ 
  title, 
  items, 
  onItemClick, 
  t, 
  getLocalizedPath 
}: DropdownSectionProps) {
  return (
    <div>
      <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
        {t(title)}
      </h4>
      <div className="space-y-5">
        {items.map((item) => (
          <DropdownItem
            key={item.href}
            name={item.name}
            href={item.href}
            description={item.description}
            icon={item.icon}
            iconColor={item.iconColor}
            onClick={onItemClick}
            t={t}
            getLocalizedPath={getLocalizedPath}
          />
        ))}
      </div>
    </div>
  );
}

interface DropdownColumnProps {
  sections: Array<{
    title: string;
    items: Array<{
      name: string;
      href: string;
      description?: string;
      icon?: React.ElementType;
      iconColor?: string;
    }>;
  }>;
  onItemClick: () => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
  className?: string;
}

export function DropdownColumn({ 
  sections, 
  onItemClick, 
  t, 
  getLocalizedPath, 
  className = "" 
}: DropdownColumnProps) {
  return (
    <div className={cn("py-5 px-6 w-full max-w-md border-r border-gray-100", className)}>
      {sections.map((section, index) => (
        <div key={section.title} className={index > 0 ? "mt-8" : ""}>
          <DropdownSection
            title={section.title}
            items={section.items}
            onItemClick={onItemClick}
            t={t}
            getLocalizedPath={getLocalizedPath}
          />
        </div>
      ))}
    </div>
  );
}