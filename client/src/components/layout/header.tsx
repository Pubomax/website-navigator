import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Type definition for navigation items with enhanced structure
interface NavigationItem {
  name: string;
  href?: string;
  items?: Array<{
    group: string;
    description?: string;
    items: Array<{
      name: string;
      href: string;
      description?: string;
    }>;
  }>;
}

// Define the navigation structure following Stripe's pattern
const navigation: NavigationItem[] = [
  {
    name: "solutions",
    items: [
      {
        group: "Lead Generation Solutions",
        items: [
          { 
            name: "automatedLeadGeneration", 
            href: "/solutions/automated-lead-generation",
            description: "Find new prospects automatically using AI."
          },
          { 
            name: "smartNurturing", 
            href: "/solutions/smart-nurturing",
            description: "Turn leads into clients automatically."
          }
        ]
      },
      {
        group: "Sales Acceleration Solutions",
        items: [
          { 
            name: "salesAutomation", 
            href: "/services/sales-automation",
            description: "Automate your sales pipeline and follow-ups."
          },
          { 
            name: "quickAcquisition", 
            href: "/solutions/quick-acquisition",
            description: "Boost conversion rates fast."
          }
        ]
      },
      {
        group: "Customer Engagement Solutions",
        items: [
          { 
            name: "instantCustomerEngagement", 
            href: "/solutions/instant-customer-engagement",
            description: "Real-time customer interactions to close deals."
          }
        ]
      }
    ],
  },
  {
    name: "products",
    items: [
      {
        group: "Automation Systems",
        items: [
          { 
            name: "salesAutomation", 
            href: "/services/sales-automation",
            description: "Automate and qualify leads."
          },
          { 
            name: "marketingAutomation", 
            href: "/services/marketing-automation",
            description: "Automated customer journeys."
          }
        ]
      },
      {
        group: "Custom Development",
        items: [
          { 
            name: "digitalFoundation", 
            href: "/services/digital-foundation",
            description: "Custom CRM solutions tailored to business needs."
          },
          { 
            name: "customSoftware", 
            href: "/services/custom-software",
            description: "Web and Mobile apps customized for business workflows."
          },
          { 
            name: "customAiAutomation", 
            href: "/services/custom-ai-automation",
            description: "Custom AI solutions for business automation."
          }
        ]
      }
    ],
  },
  {
    name: "industries",
    items: [
      {
        group: "Private Sector",
        items: [
          { 
            name: "manufacturing", 
            href: "/sectors/manufacturing",
            description: "Automation solutions for production and operations."
          },
          { 
            name: "finance", 
            href: "/sectors/finance",
            description: "Smart solutions for financial services and banking."
          },
          { 
            name: "retail", 
            href: "/sectors/retail",
            description: "Automate customer engagement and inventory management."
          },
          { 
            name: "healthcare", 
            href: "/sectors/healthcare",
            description: "Compliant automation solutions for healthcare providers."
          }
        ]
      },
      {
        group: "Public Sector",
        items: [
          { 
            name: "publicSector", 
            href: "/sectors/public-sector",
            description: "Efficient solutions for government organizations."
          }
        ]
      },
      {
        group: "Business Size",
        items: [
          { 
            name: "microEnterprises", 
            href: "/business-types/micro",
            description: "Affordable solutions for businesses with 1-10 employees."
          },
          { 
            name: "midSizedEnterprises", 
            href: "/business-types/mid-sized",
            description: "Scalable automation for businesses with 10-250 employees."
          },
          { 
            name: "largeEnterprises", 
            href: "/business-types/large",
            description: "Enterprise-grade solutions for 250+ employee organizations."
          }
        ]
      }
    ],
  },
  {
    name: "company",
    items: [
      {
        group: "About Us",
        items: [
          { 
            name: "companyStory", 
            href: "/about/story",
            description: "Our journey and vision for business automation."
          },
          { 
            name: "teamBios", 
            href: "/about/team",
            description: "Meet our expert automation specialists."
          },
          { 
            name: "missionValues", 
            href: "/about/mission",
            description: "Our commitment to helping businesses grow effortlessly."
          }
        ]
      }
    ]
  },
  {
    name: "resources",
    items: [
      {
        group: "Resources",
        items: [
          { 
            name: "caseStudies", 
            href: "/case-studies",
            description: "Success stories from businesses we've transformed."
          },
          { 
            name: "blog", 
            href: "/blog",
            description: "Latest insights on AI and business automation."
          },
          { 
            name: "FAQ", 
            href: "/faq",
            description: "Common questions about our services and process."
          },
          { 
            name: "integrations", 
            href: "/integrations",
            description: "Seamlessly connect with your existing tools."
          }
        ]
      }
    ]
  },
  { name: "contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "English", href: "" },
  { code: "fr", name: "Français", href: "/fr" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const isPathFrench = location.startsWith("/fr");
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');

  // Function to localize paths based on current language
  const getLocalizedPath = (path: string) => {
    if (isPathFrench) {
      return path.startsWith("/fr") ? path : `/fr${path}`;
    }
    return path.startsWith("/fr") ? path.substring(3) : path;
  };

  // Toggle dropdown visibility
  const toggleDropdown = (itemName: string) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };

  // For hovering over menu items
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Show specific group on hover
  const showGroup = (groupName: string | null) => {
    setActiveGroup(groupName);
  };

  // Toggle mobile accordion
  const toggleMobileGroup = (groupName: string) => {
    setOpenMobileGroup(openMobileGroup === groupName ? null : groupName);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href={getLocalizedPath("/")} className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Minecore Group"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative inline-block text-left"
              onMouseEnter={() => {
                if (item.items) {
                  toggleDropdown(item.name);
                  // Set initial group to show on hover
                  if (item.items.length > 0) {
                    showGroup(item.items[0].group);
                  }
                }
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  setActiveItem(null);
                  setActiveGroup(null);
                }, 100);
              }}
            >
              {item.items ? (
                // Dropdown menu for items with subitems
                <>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-x-1 text-sm font-medium px-3 py-2 rounded-md transition-colors",
                      activeItem === item.name ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                    )}
                    aria-expanded={activeItem === item.name}
                    aria-haspopup="true"
                  >
                    {t(item.name)}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeItem === item.name ? "rotate-180" : ""
                    )} />
                  </button>
                  
                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {activeItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2"
                        onMouseLeave={() => setActiveGroup(null)}
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid grid-cols-4 gap-0 bg-white">
                            {/* Left column - Category groups */}
                            <div className="col-span-1 border-r border-gray-100 py-6 pl-6 pr-2">
                              {item.items.map((group) => (
                                <div 
                                  key={group.group} 
                                  className="mb-5 last:mb-0"
                                  onMouseEnter={() => showGroup(group.group)}
                                >
                                  <div className={cn(
                                    "font-medium text-base px-3 py-2 rounded-md cursor-pointer transition-colors",
                                    activeGroup === group.group || (!activeGroup && item.items && group === item.items[0]) 
                                      ? "bg-gray-100 text-gray-900" 
                                      : "text-gray-600 hover:text-gray-900"
                                  )}>
                                    {t(group.group)}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Right column - Items with descriptions */}
                            <div className="col-span-3 py-6 px-6">
                              {item.items.map((group) => (
                                <motion.div 
                                  key={group.group}
                                  initial={{ opacity: 0 }}
                                  animate={{ 
                                    opacity: (activeGroup === group.group || (!activeGroup && item.items && group === item.items[0])) ? 1 : 0,
                                    display: (activeGroup === group.group || (!activeGroup && item.items && group === item.items[0])) ? "block" : "none"
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-4"
                                >
                                  {group.items.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={getLocalizedPath(subItem.href)}
                                      className="block group p-2 rounded-md hover:bg-gray-50"
                                      onClick={() => setActiveItem(null)}
                                    >
                                      <p className="text-base font-medium text-gray-900 group-hover:text-primary">
                                        {t(subItem.name)}
                                      </p>
                                      {subItem.description && (
                                        <p className="mt-1 text-sm text-gray-500">
                                          {t(subItem.description)}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Regular link for items without subitems
                <Link
                  href={getLocalizedPath(item.href!)}
                  className="text-sm font-medium px-3 py-2 rounded-md transition-colors text-gray-600 hover:text-gray-900"
                >
                  {t(item.name)}
                </Link>
              )}
            </div>
          ))}

          {/* Language Selector */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-x-1 text-sm font-medium px-3 py-2 rounded-md transition-colors",
                activeItem === "language" ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
              )}
              aria-expanded={activeItem === "language"}
              aria-haspopup="true"
              onClick={() => toggleDropdown("language")}
            >
              {isPathFrench ? "FR" : "EN"}
              <ChevronDown className={cn(
                "h-4 w-4 transition-transform duration-200",
                activeItem === "language" ? "rotate-180" : ""
              )} />
            </button>
            
            <AnimatePresence>
              {activeItem === "language" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={lang.href + location.replace("/fr", "")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setActiveItem(null)}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href={getLocalizedPath("/consultation")}>{t("getStarted")}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-10">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-5">
                {item.items ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between text-lg font-medium mb-3"
                      onClick={() => toggleMobileGroup(item.name)}
                    >
                      {t(item.name)}
                      <ChevronDown 
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          openMobileGroup === item.name ? "rotate-180" : ""
                        )} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openMobileGroup === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-4">
                            {item.items.map((group) => (
                              <div key={group.group} className="mb-4">
                                <div className="text-sm font-medium text-gray-900 mb-2">
                                  {t(group.group)}
                                </div>
                                <div className="space-y-3 pl-2">
                                  {group.items.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={getLocalizedPath(subItem.href)}
                                      className="block text-gray-600 hover:text-gray-900"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <div className="text-sm">{t(subItem.name)}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-1">
                                          {t(subItem.description)}
                                        </div>
                                      )}
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
                    className="block text-lg font-medium text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile language selection */}
            <div className="border-b border-gray-100 pb-5">
              <button
                className="flex w-full items-center justify-between text-lg font-medium mb-3"
                onClick={() => toggleMobileGroup("language")}
              >
                {t("language")}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openMobileGroup === "language" ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <AnimatePresence>
                {openMobileGroup === "language" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 space-y-4">
                      {languages.map((lang) => (
                        <Link
                          key={lang.code}
                          href={lang.href + location.replace("/fr", "")}
                          className="block text-gray-600 hover:text-gray-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {lang.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link 
                  href={getLocalizedPath("/consultation")}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("getStarted")}
                </Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}