import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  ChevronDown, 
  Factory, 
  Building2, 
  Store, 
  Heart, 
  Building, 
  Users, 
  Users2, 
  Building2 as BuildingLarge,
  Banknote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
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
      icon?: React.ElementType;
      iconColor?: string;
    }>;
  }>;
}

// Define the navigation structure following Stripe's pattern
const navigation: NavigationItem[] = [
  {
    name: "Solutions",
    items: [
      {
        group: "Lead Generation Solutions",
        items: [
          { 
            name: "Automated Lead Generation", 
            href: "/solutions/automated-lead-generation",
            description: "Find prospects faster.",
            icon: Users,
            iconColor: "text-blue-500"
          },
          { 
            name: "Smart Nurturing", 
            href: "/solutions/smart-nurturing",
            description: "Turn leads into clients automatically.",
            icon: Users2,
            iconColor: "text-indigo-500"
          }
        ]
      },
      {
        group: "Sales Acceleration Solutions",
        items: [
          { 
            name: "Sales Automation", 
            href: "/services/sales-automation",
            description: "Automate your pipeline.",
            icon: Building2,
            iconColor: "text-emerald-500"
          },
          { 
            name: "Quick Acquisition", 
            href: "/solutions/quick-acquisition",
            description: "Boost conversion rates.",
            icon: Banknote,
            iconColor: "text-green-500"
          }
        ]
      },
      {
        group: "Customer Engagement Solutions",
        items: [
          { 
            name: "Instant Customer Engagement", 
            href: "/solutions/instant-customer-engagement",
            description: "Real-time responses to prospects.",
            icon: Store,
            iconColor: "text-purple-500"
          }
        ]
      }
    ],
  },
  {
    name: "Products",
    items: [
      {
        group: "Automation Systems",
        items: [
          { 
            name: "Sales Automation", 
            href: "/services/sales-automation",
            description: "Automate and qualify leads.",
            icon: Building2,
            iconColor: "text-emerald-500"
          },
          { 
            name: "Marketing Automation", 
            href: "/services/marketing-automation",
            description: "Automated customer journeys.",
            icon: Users,
            iconColor: "text-blue-500"
          }
        ]
      },
      {
        group: "Custom Development",
        items: [
          { 
            name: "Digital Foundation", 
            href: "/services/digital-foundation",
            description: "Custom CRM solutions tailored to business needs.",
            icon: Building,
            iconColor: "text-cyan-500"
          },
          { 
            name: "Custom Software", 
            href: "/services/custom-software",
            description: "Business-specific automation solutions.",
            icon: Factory,
            iconColor: "text-green-500"
          }
        ]
      },
      {
        group: "Implementation Services",
        items: [
          { 
            name: "AI Automation Starter", 
            href: "/services/ai-automation-starter",
            description: "Basic AI-powered automation package.",
            icon: Users2,
            iconColor: "text-indigo-500"
          },
          { 
            name: "Transformation Consulting", 
            href: "/services/transformation-consulting",
            description: "Full business process automation guidance.",
            icon: BuildingLarge,
            iconColor: "text-orange-500"
          }
        ]
      }
    ],
  },
  {
    name: "Industries",
    items: [
      {
        group: "Private Sector",
        items: [
          { 
            name: "Manufacturing", 
            href: "/sectors/manufacturing",
            description: "Automation solutions for production and operations.",
            icon: Factory,
            iconColor: "text-green-500"
          },
          { 
            name: "Finance", 
            href: "/sectors/finance",
            description: "Smart solutions for financial services and banking.",
            icon: Banknote,
            iconColor: "text-yellow-500"
          },
          { 
            name: "Retail", 
            href: "/sectors/retail",
            description: "Automate customer engagement and inventory management.",
            icon: Store,
            iconColor: "text-blue-500"
          },
          { 
            name: "Healthcare", 
            href: "/sectors/healthcare",
            description: "Compliant automation solutions for healthcare providers.",
            icon: Heart,
            iconColor: "text-pink-500"
          }
        ]
      },
      {
        group: "Public Sector",
        items: [
          { 
            name: "Public Sector", 
            href: "/sectors/public-sector",
            description: "Efficient solutions for government organizations.",
            icon: Building,
            iconColor: "text-cyan-500"
          }
        ]
      },
      {
        group: "Business Size",
        items: [
          { 
            name: "Micro Enterprises", 
            href: "/business-types/micro",
            description: "Affordable solutions for businesses with 1-10 employees.",
            icon: Users,
            iconColor: "text-indigo-500"
          },
          { 
            name: "Mid-Sized Enterprises", 
            href: "/business-types/mid-sized",
            description: "Scalable automation for businesses with 10-250 employees.",
            icon: Users2,
            iconColor: "text-lime-500"
          },
          { 
            name: "Large Enterprises", 
            href: "/business-types/large",
            description: "Enterprise-grade solutions for 250+ employee organizations.",
            icon: BuildingLarge,
            iconColor: "text-orange-500"
          }
        ]
      }
    ],
  },
  {
    name: "Company",
    items: [
      {
        group: "Who We Are",
        items: [
          { 
            name: "About", 
            href: "/about", 
            description: "Learn about Minecore Group.",
            icon: Building,
            iconColor: "text-cyan-500"
          },
          { 
            name: "Careers", 
            href: "/careers",
            description: "Join our team of automation experts.",
            icon: Users,
            iconColor: "text-purple-500"
          }
        ]
      },
      {
        group: "Our Mission",
        items: [
          { 
            name: "Mission", 
            href: "/about/mission",
            description: "Our vision for the future of business.",
            icon: BuildingLarge,
            iconColor: "text-orange-500"
          },
          { 
            name: "Story", 
            href: "/about/story",
            description: "The journey behind Minecore Group.",
            icon: Factory,
            iconColor: "text-green-500"
          }
        ]
      }
    ],
  },
  { name: "Contact", href: "/contact" },
];

// Define language options
const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export function Header() {
  const [location, setLocation] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const { t } = useTranslation(isPathFrench ? "fr" : "en");
  
  // State for managing dropdowns
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  // Helper function to get localized path
  const getLocalizedPath = (path: string) => {
    return isPathFrench ? `/fr${path}` : path;
  };

  // Function to toggle dropdown display
  const toggleDropdown = (name: string) => {
    setActiveItem(prevItem => (prevItem === name ? null : name));
  };

  // Function to show a specific group in the dropdown
  const showGroup = (group: string) => {
    setActiveGroup(group);
  };

  // Function to toggle mobile navigation groups
  const toggleMobileGroup = (name: string) => {
    setOpenMobileGroup(prev => (prev === name ? null : name));
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={getLocalizedPath("/")} className="shrink-0">
          <img src="/images/logo.png" alt="Minecore Group" className="h-14" />
        </Link>

        {/* Desktop navigation - centered */}
        <div 
          className="hidden lg:flex items-center justify-center flex-grow"
          onMouseLeave={() => {
            // Close all dropdowns when mouse leaves the navigation area
            setActiveItem(null);
            setActiveGroup(null);
          }}
        >
          <div className="flex items-center gap-2">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative inline-block text-left"
                onMouseEnter={() => {
                  if (item.items) {
                    // Directly set the active item rather than toggling
                    setActiveItem(item.name);
                    // Set initial group to show on hover
                    if (item.items.length > 0) {
                      showGroup(item.items[0].group);
                    }
                  }
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
                          className="absolute left-0 z-10 mt-3 w-screen max-w-4xl transform px-2"
                          style={{ 
                            left: item.name === "Industries" || item.name === "Company" 
                              ? "calc(50% - 300px)" 
                              : "calc(50% - 200px)" 
                          }}
                          onMouseEnter={() => setActiveItem(item.name)}
                        >
                          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="flex bg-white">
                              {/* Three-column layout for Industries, Products, and Company */}
                              {(item.name === "Industries" || item.name === "Products" || item.name === "Company") && (
                                <>
                                  {/* Left Column */}
                                  <div className="py-5 px-6 w-full max-w-md border-r border-gray-100">
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {item.name === "Industries" 
                                        ? t("Private Sector") 
                                        : item.name === "Products" 
                                          ? t("Automation Systems")
                                          : t("Who We Are")
                                      }
                                    </h4>
                                    <div className="space-y-5">
                                      {item.name === "Industries" 
                                        ? (item.items.find(g => g.group === "Private Sector")?.items || []).map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={getLocalizedPath(subItem.href)}
                                              className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                              onClick={() => setActiveItem(null)}
                                            >
                                              <div className="flex items-start gap-3">
                                                {subItem.icon && (
                                                  <div className="flex-shrink-0 mt-1">
                                                    <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                  </div>
                                                )}
                                                <div>
                                                  <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                    {t(subItem.name)}
                                                  </div>
                                                  {subItem.description && (
                                                    <div className="mt-1 text-sm text-[#6b7280]">
                                                      {t(subItem.description)}
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </Link>
                                          ))
                                        : item.name === "Products"
                                          ? (item.items.find(g => g.group === "Automation Systems")?.items || []).map((subItem) => (
                                              <Link
                                                key={subItem.href}
                                                href={getLocalizedPath(subItem.href)}
                                                className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                                onClick={() => setActiveItem(null)}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {subItem.icon && (
                                                    <div className="flex-shrink-0 mt-1">
                                                      <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                    </div>
                                                  )}
                                                  <div>
                                                    <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                      {t(subItem.name)}
                                                    </div>
                                                    {subItem.description && (
                                                      <div className="mt-1 text-sm text-[#6b7280]">
                                                        {t(subItem.description)}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            ))
                                          : (item.items.find(g => g.group === "Who We Are")?.items || []).map((subItem) => (
                                              <Link
                                                key={subItem.href}
                                                href={getLocalizedPath(subItem.href)}
                                                className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                                onClick={() => setActiveItem(null)}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {subItem.icon && (
                                                    <div className="flex-shrink-0 mt-1">
                                                      <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                    </div>
                                                  )}
                                                  <div>
                                                    <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                      {t(subItem.name)}
                                                    </div>
                                                    {subItem.description && (
                                                      <div className="mt-1 text-sm text-[#6b7280]">
                                                        {t(subItem.description)}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            ))
                                      }
                                    </div>
                                  </div>
                                  
                                  {/* Middle column */}
                                  <div className="py-5 px-6 w-full max-w-md border-r border-gray-100">
                                    {/* First section heading */}
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {item.name === "Industries" 
                                        ? t("Public Sector") 
                                        : item.name === "Products"
                                          ? t("Custom Development")
                                          : t("Our Mission")
                                      }
                                    </h4>
                                    
                                    {/* First section content */}
                                    <div className="space-y-5 mb-8">
                                      {item.name === "Industries"
                                        ? (item.items.find(g => g.group === "Public Sector")?.items || []).map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={getLocalizedPath(subItem.href)}
                                              className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                              onClick={() => setActiveItem(null)}
                                            >
                                              <div className="flex items-start gap-3">
                                                {subItem.icon && (
                                                  <div className="flex-shrink-0 mt-1">
                                                    <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                  </div>
                                                )}
                                                <div>
                                                  <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                    {t(subItem.name)}
                                                  </div>
                                                  {subItem.description && (
                                                    <div className="mt-1 text-sm text-[#6b7280]">
                                                      {t(subItem.description)}
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </Link>
                                          ))
                                        : item.name === "Products"
                                          ? (item.items.find(g => g.group === "Custom Development")?.items || []).map((subItem) => (
                                              <Link
                                                key={subItem.href}
                                                href={getLocalizedPath(subItem.href)}
                                                className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                                onClick={() => setActiveItem(null)}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {subItem.icon && (
                                                    <div className="flex-shrink-0 mt-1">
                                                      <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                    </div>
                                                  )}
                                                  <div>
                                                    <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                      {t(subItem.name)}
                                                    </div>
                                                    {subItem.description && (
                                                      <div className="mt-1 text-sm text-[#6b7280]">
                                                        {t(subItem.description)}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            ))
                                          : (item.items.find(g => g.group === "Our Mission")?.items || []).map((subItem) => (
                                              <Link
                                                key={subItem.href}
                                                href={getLocalizedPath(subItem.href)}
                                                className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                                onClick={() => setActiveItem(null)}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {subItem.icon && (
                                                    <div className="flex-shrink-0 mt-1">
                                                      <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                    </div>
                                                  )}
                                                  <div>
                                                    <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                      {t(subItem.name)}
                                                    </div>
                                                    {subItem.description && (
                                                      <div className="mt-1 text-sm text-[#6b7280]">
                                                        {t(subItem.description)}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            ))
                                      }
                                    </div>

                                    {/* Second section heading */}
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {item.name === "Industries" 
                                        ? t("Business Size") 
                                        : item.name === "Products"
                                          ? t("Implementation Services")
                                          : ""
                                      }
                                    </h4>
                                    
                                    {/* Second section content */}
                                    <div className="space-y-5">
                                      {item.name === "Industries"
                                        ? (item.items.find(g => g.group === "Business Size")?.items || []).map((subItem) => (
                                            <Link
                                              key={subItem.href}
                                              href={getLocalizedPath(subItem.href)}
                                              className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                              onClick={() => setActiveItem(null)}
                                            >
                                              <div className="flex items-start gap-3">
                                                {subItem.icon && (
                                                  <div className="flex-shrink-0 mt-1">
                                                    <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                  </div>
                                                )}
                                                <div>
                                                  <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                    {t(subItem.name)}
                                                  </div>
                                                  {subItem.description && (
                                                    <div className="mt-1 text-sm text-[#6b7280]">
                                                      {t(subItem.description)}
                                                    </div>
                                                  )}
                                                </div>
                                              </div>
                                            </Link>
                                          ))
                                        : item.name === "Products"
                                          ? (item.items.find(g => g.group === "Implementation Services")?.items || []).map((subItem) => (
                                              <Link
                                                key={subItem.href}
                                                href={getLocalizedPath(subItem.href)}
                                                className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                                onClick={() => setActiveItem(null)}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {subItem.icon && (
                                                    <div className="flex-shrink-0 mt-1">
                                                      <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                                    </div>
                                                  )}
                                                  <div>
                                                    <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                      {t(subItem.name)}
                                                    </div>
                                                    {subItem.description && (
                                                      <div className="mt-1 text-sm text-[#6b7280]">
                                                        {t(subItem.description)}
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            ))
                                          : null
                                      }
                                    </div>
                                  </div>
                                </>
                              )}
                              
                              {/* Three-column layout for Solutions */}
                              {item.name === "Solutions" && (
                                <>
                                  {/* Left Column - Lead Generation */}
                                  <div className="py-5 px-6 w-full max-w-md border-r border-gray-100">
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {t("Find More Leads")}
                                    </h4>
                                    <div className="space-y-5">
                                      {(item.items.find(g => g.group === "Lead Generation Solutions")?.items || []).map((subItem) => (
                                        <Link
                                          key={subItem.href}
                                          href={getLocalizedPath(subItem.href)}
                                          className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                          onClick={() => setActiveItem(null)}
                                        >
                                          <div className="flex items-start gap-3">
                                            {subItem.icon && (
                                              <div className="flex-shrink-0 mt-1">
                                                <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                              </div>
                                            )}
                                            <div>
                                              <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                {t(subItem.name)}
                                              </div>
                                              {subItem.description && (
                                                <div className="mt-1 text-sm text-[#6b7280]">
                                                  {t(subItem.description)}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Middle column - Sales Acceleration */}
                                  <div className="py-5 px-6 w-full max-w-md border-r border-gray-100">
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {t("Close More Sales")}
                                    </h4>
                                    
                                    <div className="space-y-5 mb-8">
                                      {(item.items.find(g => g.group === "Sales Acceleration Solutions")?.items || []).map((subItem) => (
                                        <Link
                                          key={subItem.href}
                                          href={getLocalizedPath(subItem.href)}
                                          className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                          onClick={() => setActiveItem(null)}
                                        >
                                          <div className="flex items-start gap-3">
                                            {subItem.icon && (
                                              <div className="flex-shrink-0 mt-1">
                                                <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                              </div>
                                            )}
                                            <div>
                                              <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                {t(subItem.name)}
                                              </div>
                                              {subItem.description && (
                                                <div className="mt-1 text-sm text-[#6b7280]">
                                                  {t(subItem.description)}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>

                                    {/* Customer Engagement Section */}
                                    <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                      {t("Customer Engagement")}
                                    </h4>
                                    
                                    <div className="space-y-5">
                                      {(item.items.find(g => g.group === "Customer Engagement Solutions")?.items || []).map((subItem) => (
                                        <Link
                                          key={subItem.href}
                                          href={getLocalizedPath(subItem.href)}
                                          className="block px-2 py-2 hover:bg-gray-50 rounded-md transition group"
                                          onClick={() => setActiveItem(null)}
                                        >
                                          <div className="flex items-start gap-3">
                                            {subItem.icon && (
                                              <div className="flex-shrink-0 mt-1">
                                                <subItem.icon className={cn("h-5 w-5", subItem.iconColor || "text-gray-400")} />
                                              </div>
                                            )}
                                            <div>
                                              <div className="text-base font-medium text-[#111827] group-hover:text-primary">
                                                {t(subItem.name)}
                                              </div>
                                              {subItem.description && (
                                                <div className="mt-1 text-sm text-[#6b7280]">
                                                  {t(subItem.description)}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              )}
                              
                              {/* Right column - Quick links (fixed content) */}
                              <div className="py-5 px-6 min-w-[160px] max-w-[160px]">
                                <h4 className="uppercase text-xs font-semibold text-gray-500 tracking-widest mb-4">
                                  {t("more")}
                                </h4>
                                <ul className="space-y-2">
                                  <li>
                                    <Link 
                                      href={getLocalizedPath("/about")} 
                                      className="text-gray-700 hover:text-primary text-sm"
                                      onClick={() => setActiveItem(null)}
                                    >
                                      {t("about")}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href={getLocalizedPath("/faq")} 
                                      className="text-gray-700 hover:text-primary text-sm"
                                      onClick={() => setActiveItem(null)}
                                    >
                                      {t("faq")}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href={getLocalizedPath("/blog")} 
                                      className="text-gray-700 hover:text-primary text-sm"
                                      onClick={() => setActiveItem(null)}
                                    >
                                      {t("blog")}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href={getLocalizedPath("/contact")} 
                                      className="text-gray-700 hover:text-primary text-sm"
                                      onClick={() => setActiveItem(null)}
                                    >
                                      {t("contact")}
                                    </Link>
                                  </li>
                                </ul>
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
          </div>
        </div>

        {/* Right section with language picker and CTA */}
        <div className="hidden lg:flex items-center gap-2">
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
            
            {/* Language selector dropdown */}
            <AnimatePresence>
              {activeItem === "language" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={lang.code === "en" ? location.replace(/^\/fr/, "") : `/fr${location.replace(/^\/fr/, "")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

          {/* CTA Button */}
          <Button asChild className="ml-3">
            <Link href={getLocalizedPath("/consultation")}>
              {t("getStarted")}
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] pt-16">
            <div className="flex flex-col h-full">
              {/* Logo in mobile menu */}
              <div className="flex justify-center mb-6">
                <Link href={getLocalizedPath("/")} onClick={() => setMobileMenuOpen(false)}>
                  <img src="/images/logo.png" alt="Minecore Group" className="h-10" />
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                {/* Mobile Navigation */}
                <div className="space-y-2 mt-4">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-2">
                      {item.items ? (
                        <>
                          <button
                            onClick={() => toggleMobileGroup(item.name)}
                            className="flex justify-between items-center w-full py-2 text-base font-medium text-left"
                          >
                            {t(item.name)}
                            <ChevronDown className={cn(
                              "h-4 w-4 transition-transform",
                              openMobileGroup === item.name ? "rotate-180" : ""
                            )} />
                          </button>
                          {openMobileGroup === item.name && (
                            <div className="ml-4 pl-4 mt-2 space-y-4 border-l border-gray-100">
                              {item.items.map((group) => (
                                <div key={group.group} className="mb-4">
                                  <p className="text-xs font-semibold uppercase text-gray-500 pb-1">
                                    {t(group.group)}
                                  </p>
                                  <div className="space-y-2">
                                    {group.items.map((subItem) => (
                                      <Link
                                        key={subItem.href}
                                        href={getLocalizedPath(subItem.href)}
                                        className="flex items-center gap-2 py-1 text-sm text-gray-600 hover:text-gray-900"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subItem.icon && (
                                          <subItem.icon className={cn("h-4 w-4", subItem.iconColor || "text-gray-400")} />
                                        )}
                                        {t(subItem.name)}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={getLocalizedPath(item.href!)}
                          className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(item.name)}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Language Selector - Mobile */}
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="text-xs font-semibold uppercase text-gray-500 pb-3">
                    {t("language")}
                  </p>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={lang.code === "en" ? location.replace(/^\/fr/, "") : `/fr${location.replace(/^\/fr/, "")}`}
                        className={cn(
                          "px-3 py-1 text-sm rounded-md",
                          lang.code === (isPathFrench ? "fr" : "en")
                            ? "bg-gray-100 text-gray-900 font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button - Mobile */}
              <div className="pt-6 pb-4">
                <Button asChild className="w-full">
                  <Link 
                    href={getLocalizedPath("/consultation")}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}