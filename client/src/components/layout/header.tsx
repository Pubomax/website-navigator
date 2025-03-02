import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "@/lib/i18n";

// Type definition for navigation items
interface NavigationItem {
  name: string;
  href?: string;
  items?: Array<{
    name: string;
    href: string;
    group?: string;
  }>;
}

const navigation: NavigationItem[] = [
  {
    name: "services",
    items: [
      { name: "digitalFoundation", href: "/services/digital-foundation" },
      { name: "transformationConsulting", href: "/services/transformation-consulting" },
      { name: "aiAutomationStarter", href: "/services/ai-automation-starter" },
      { name: "customAiAutomation", href: "/services/custom-ai-automation" },
      { name: "customSoftware", href: "/services/custom-software" },
      { name: "intelligentSupport", href: "/services/intelligent-support" },
    ],
  },
  {
    name: "solutions",
    items: [
      { name: "manufacturing", group: "Industries", href: "/sectors/manufacturing" },
      { name: "finance", group: "Industries", href: "/sectors/finance" },
      { name: "retail", group: "Industries", href: "/sectors/retail" },
      { name: "healthcare", group: "Industries", href: "/sectors/healthcare" },
      { name: "publicSector", group: "Industries", href: "/sectors/public-sector" },
      { name: "microEnterprises", group: "Business Size", href: "/business-types/micro" },
      { name: "midSizedEnterprises", group: "Business Size", href: "/business-types/mid-sized" },
      { name: "largeEnterprises", group: "Business Size", href: "/business-types/large" },
    ],
  },
  {
    name: "company",
    items: [
      { name: "companyStory", group: "About Us", href: "/about/story" },
      { name: "teamBios", group: "About Us", href: "/about/team" },
      { name: "missionValues", group: "About Us", href: "/about/mission" },
      { name: "FAQ", group: "Resources", href: "/faq" },
      { name: "caseStudies", group: "Resources", href: "/case-studies" },
      { name: "blog", group: "Resources", href: "/blog" },
    ],
  },
  { name: "contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "English", href: "" },
  { code: "fr", name: "Français", href: "/fr" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isPathFrench = location.startsWith("/fr");
  const { t } = useTranslation(isPathFrench ? 'fr' : 'en');

  const getLocalizedPath = (path: string) => {
    if (isPathFrench) {
      return path.startsWith("/fr") ? path : `/fr${path}`;
    }
    return path.startsWith("/fr") ? path.substring(3) : path;
  };

  const renderDropdownContent = (items: any[]) => {
    const groupedItems = items.reduce((acc: any, item) => {
      if (item.group) {
        if (!acc[item.group]) acc[item.group] = [];
        acc[item.group].push(item);
      } else {
        if (!acc['Other']) acc['Other'] = [];
        acc['Other'].push(item);
      }
      return acc;
    }, {});

    return (
      <ul className="grid w-[400px] gap-4 p-4">
        {Object.entries(groupedItems).map(([group, groupItems]: [string, any]) => (
          <li key={group}>
            {group !== 'Other' && (
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {t(group)}
              </div>
            )}
            <div className="grid gap-2">
              {groupItems.map((item: any) => (
                <Link
                  key={item.href}
                  href={getLocalizedPath(item.href)}
                  className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href={getLocalizedPath("/")} className="flex items-center">
            <img 
              src="/attached_assets/minecore group.png" 
              alt="Minecore Group" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            item.items ? (
              <NavigationMenu key={item.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9 px-4 hover:bg-accent/50 transition-colors">
                      {t(item.name)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {renderDropdownContent(item.items)}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={item.name}
                href={getLocalizedPath(item.href!)}
                className="text-sm font-medium px-4 py-2 rounded-md transition-colors hover:text-primary hover:bg-accent/50"
              >
                {t(item.name)}
              </Link>
            )
          ))}

          {/* Language Selector */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 hover:bg-accent/50 transition-colors">
                  {isPathFrench ? "FR" : "EN"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <Link
                          href={lang.href + location.replace("/fr", "")}
                          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                        >
                          {lang.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 pt-6">
                {navigation.map((item) => (
                  item.items ? (
                    <div key={item.name} className="space-y-4">
                      <div className="font-medium text-lg text-foreground">{t(item.name)}</div>
                      {Object.entries(
                        item.items.reduce((acc: any, curr) => {
                          const group = curr.group || 'Other';
                          if (!acc[group]) acc[group] = [];
                          acc[group].push(curr);
                          return acc;
                        }, {})
                      ).map(([group, items]: [string, any]) => (
                        <div key={group} className="space-y-3">
                          {group !== 'Other' && (
                            <div className="text-sm font-medium text-muted-foreground pl-4">
                              {t(group)}
                            </div>
                          )}
                          <div className="pl-4 space-y-3">
                            {items.map((subItem: any) => (
                              <Link
                                key={subItem.href}
                                href={getLocalizedPath(subItem.href)}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {t(subItem.name)}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={getLocalizedPath(item.href!)}
                      className="text-lg font-medium transition-colors text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  )
                ))}

                {/* Mobile Language Selection */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-foreground">{t('language')}</div>
                  <div className="pl-4 space-y-3">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={lang.href + location.replace("/fr", "")}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {lang.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex items-center">
          <Button asChild className="bg-primary/90 hover:bg-primary transition-colors">
            <Link href={getLocalizedPath("/contact")}>{t("getStarted")}</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}