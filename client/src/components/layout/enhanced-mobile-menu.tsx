import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Menu,
  X,
  ChevronDown,
  Factory,
  Building2,
  Store,
  Heart,
  Building,
  Users,
  Users2,
  Banknote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Type definitions based on header structure
interface NavigationItemGroup {
  group: string;
  items: Array<{
    name: string;
    href: string;
    description?: string;
    icon?: React.ElementType;
    iconColor?: string;
  }>;
}

interface NavigationItem {
  name: string;
  href?: string;
  items?: NavigationItemGroup[];
}

/**
 * Enhanced Mobile Menu Component
 * 
 * Improvements from the implementation plan:
 * - Better hierarchical display of menu items
 * - Clearer indicators for items with sub-menus
 * - Smoother transitions
 * - Optimized touch targets for mobile
 */
export function EnhancedMobileMenu({ navigation }: { navigation: NavigationItem[] }) {
  const [location, setLocation] = useLocation();
  const isPathFrench = location.startsWith('/fr');
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');
  
  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  
  // Helper function to get localized path
  const getLocalizedPath = (path: string) => {
    return isPathFrench ? `/fr${path}` : path;
  };
  
  // Toggle a group's expanded state
  const toggleGroup = (groupName: string) => {
    setOpenGroups(prev => 
      prev.includes(groupName)
        ? prev.filter(g => g !== groupName)
        : [...prev, groupName]
    );
  };
  
  // Check if a group is open
  const isGroupOpen = (groupName: string) => {
    return openGroups.includes(groupName);
  };
  
  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
    // Reset open groups when menu closes
    setOpenGroups([]);
  };
  
  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="left" 
          className="w-[85vw] max-w-sm p-0 pt-0"
          onInteractOutside={closeMenu}
        >
          <SheetHeader className="px-5 pt-5 pb-2 border-b">
            <SheetTitle className="flex justify-between items-center">
              <Link 
                href={getLocalizedPath("/")} 
                className="flex-shrink-0"
                onClick={closeMenu}
              >
                <img 
                  src="/images/logo.png" 
                  alt="Minecore Group" 
                  className="h-8" 
                  loading="eager" 
                />
              </Link>
              <SheetClose className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <X className="h-5 w-5" />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          
          <div className="py-4 overflow-y-auto max-h-[calc(100vh-10rem)]">
            <nav className="space-y-1 px-3">
              {navigation.map((item) => (
                <div key={item.name} className="py-1">
                  {item.items ? (
                    <div className="mb-1">
                      <button
                        onClick={() => toggleGroup(item.name)}
                        className={cn(
                          "flex items-center justify-between w-full px-3 py-2.5 text-left text-base font-medium rounded-md",
                          isGroupOpen(item.name)
                            ? "bg-gray-100 dark:bg-gray-800 text-primary"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        )}
                        aria-expanded={isGroupOpen(item.name)}
                      >
                        <span>{t(item.name)}</span>
                        <ChevronDown 
                          className={cn(
                            "h-5 w-5 text-gray-500 transition-transform duration-200",
                            isGroupOpen(item.name) ? "transform rotate-180" : ""
                          )} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isGroupOpen(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-1 mt-1 ml-3 pl-3 border-l border-gray-200 dark:border-gray-700">
                              {item.items.map((group) => (
                                <div key={group.group} className="py-2">
                                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 px-4">
                                    {t(group.group)}
                                  </div>
                                  
                                  <div className="space-y-1">
                                    {group.items.map((subItem) => (
                                      <Link
                                        key={subItem.href}
                                        href={getLocalizedPath(subItem.href)}
                                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                                        onClick={closeMenu}
                                      >
                                        {subItem.icon && (
                                          <div className={cn("mr-3", subItem.iconColor || "text-gray-400")}>
                                            <subItem.icon className="h-5 w-5" />
                                          </div>
                                        )}
                                        <div>
                                          <div className="font-medium">{t(subItem.name)}</div>
                                          {subItem.description && (
                                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                              {t(subItem.description)}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={getLocalizedPath(item.href!)}
                      className="flex items-center px-3 py-2.5 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      onClick={closeMenu}
                    >
                      {t(item.name)}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto border-t border-gray-200 dark:border-gray-700 px-5 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">{t('Language')}</div>
              <div className="flex space-x-2">
                <Link 
                  href={location.replace(/^\/fr/, '')}
                  className={cn(
                    "px-3 py-1 text-sm rounded-md",
                    !isPathFrench 
                      ? "bg-primary text-white" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                  onClick={closeMenu}
                >
                  English
                </Link>
                <Link 
                  href={isPathFrench ? location : `/fr${location}`}
                  className={cn(
                    "px-3 py-1 text-sm rounded-md",
                    isPathFrench 
                      ? "bg-primary text-white" 
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                  onClick={closeMenu}
                >
                  Français
                </Link>
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full"
              onClick={closeMenu}
            >
              <Link href={getLocalizedPath("/contact")}>
                {t('Contact Us')}
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}