import { Link } from "wouter";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface MobileMenuItem {
  name: string;
  href?: string;
  items?: Array<{
    group: string;
    description?: string;
    items: Array<{
      name: string;
      href: string;
      description?: string;
      icon?: React.ElementType;
      iconColor?: string;
    }>;
  }>;
}

interface MobileMenuProps {
  navigation: MobileMenuItem[];
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
  isPathFrench: boolean;
}

export function MobileMenu({ navigation, t, getLocalizedPath, isPathFrench }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name) 
        : [...prev, name]
    );
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        aria-expanded="false"
      >
        <span className="sr-only">{t("Open main menu")}</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-full max-w-md">
          <div className="overflow-y-auto h-full py-6 px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                href={isPathFrench ? "/fr" : "/"}
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="Minecore Group"
                />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  Minecore Group
                </span>
              </Link>
            </div>
            
            <nav className="mt-5 space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  {item.href ? (
                    <Link
                      href={getLocalizedPath(item.href)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleItem(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <span>{t(item.name)}</span>
                        {expandedItems.includes(item.name) ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      
                      {expandedItems.includes(item.name) && item.items && (
                        <div className="mt-2 pl-4 space-y-1">
                          {item.items.map((subGroup) => (
                            <div key={subGroup.group} className="mb-4">
                              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                                {t(subGroup.group)}
                              </h4>
                              {subGroup.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={getLocalizedPath(subItem.href)}
                                  className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className={cn("h-5 w-5 mr-2", subItem.iconColor || "text-gray-400")} />
                                  )}
                                  <span>{t(subItem.name)}</span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                href={getLocalizedPath("/contact")}
                className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("Contact Us")}
              </Link>
              
              <div className="mt-4 flex justify-center space-x-4">
                <Link
                  href={isPathFrench ? "/" : "/fr"}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {isPathFrench ? "English" : "Français"}
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}