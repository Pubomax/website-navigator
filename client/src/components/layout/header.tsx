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

const navigation = [
  {
    name: "Services",
    items: [
      { name: "Digital Foundation Package", href: "/services/digital-foundation" },
      { name: "Digital Transformation Consulting Package", href: "/services/transformation-consulting" },
      { name: "AI & Automation Starter Package", href: "/services/ai-automation-starter" },
      { name: "Custom AI & Automation Package", href: "/services/custom-ai-automation" },
      { name: "Custom Software & Platform Development Package", href: "/services/custom-software" },
      { name: "Intelligent Support & Contact Center Package", href: "/services/intelligent-support" },
    ],
  },
  {
    name: "Solutions",
    items: [
      { name: "Manufacturing", group: "Industries", href: "/sectors/manufacturing" },
      { name: "Finance", group: "Industries", href: "/sectors/finance" },
      { name: "Retail", group: "Industries", href: "/sectors/retail" },
      { name: "Healthcare", group: "Industries", href: "/sectors/healthcare" },
      { name: "Public Sector", group: "Industries", href: "/sectors/public-sector" },
      { name: "Micro Enterprises", group: "Business Size", href: "/business-types/micro" },
      { name: "Mid-Sized Enterprises", group: "Business Size", href: "/business-types/mid-sized" },
      { name: "Large Enterprises", group: "Business Size", href: "/business-types/large" },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "Company Story", group: "About Us", href: "/about/story" },
      { name: "Team Bios", group: "About Us", href: "/about/team" },
      { name: "Mission & Values", group: "About Us", href: "/about/mission" },
      { name: "FAQ", group: "Resources", href: "/faq" },
      { name: "Case Studies", group: "Resources", href: "/case-studies" },
      { name: "Blog", group: "Resources", href: "/blog" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "English", href: "" },
  { code: "fr", name: "Français", href: "/fr" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isPathFrench = location.startsWith("/fr");

  const getLocalizedPath = (path: string) => {
    if (isPathFrench) {
      return path.startsWith("/fr") ? path : `/fr${path}`;
    }
    return path.startsWith("/fr") ? path.substring(3) : path;
  };

  const renderDropdownContent = (items: any[]) => {
    // Group items if they have group property
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
              <div className="mb-2 text-sm font-medium text-muted-foreground">{group}</div>
            )}
            <div className="grid gap-2">
              {groupItems.map((item: any) => (
                <Link
                  key={item.href}
                  href={getLocalizedPath(item.href)}
                  className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                >
                  {item.name}
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
          <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Minecore Group
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
                      {item.name}
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
                href={getLocalizedPath(item.href)}
                className="text-sm font-medium px-4 py-2 rounded-md transition-colors hover:text-primary hover:bg-accent/50"
              >
                {item.name}
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
                      <div className="font-medium text-lg text-foreground">{item.name}</div>
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
                            <div className="text-sm font-medium text-muted-foreground pl-4">{group}</div>
                          )}
                          <div className="pl-4 space-y-3">
                            {items.map((subItem: any) => (
                              <Link
                                key={subItem.href}
                                href={getLocalizedPath(subItem.href)}
                                className="block text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={getLocalizedPath(item.href)}
                      className="text-lg font-medium transition-colors text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}

                {/* Mobile Language Selection */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-foreground">Language</div>
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
            <Link href={getLocalizedPath("/contact")}>Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}