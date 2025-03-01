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
      { name: "Digital Foundation", href: "/services/digital-foundation" },
      { name: "Digital Transformation Consulting", href: "/services/transformation-consulting" },
      { name: "AI & Automation Starter", href: "/services/ai-automation-starter" },
      { name: "Custom AI & Automation", href: "/services/custom-ai-automation" },
      { name: "Custom Software & Platform Development", href: "/services/custom-software" },
      { name: "Intelligent Support & Contact Center", href: "/services/intelligent-support" },
    ],
  },
  {
    name: "Sectors & Business Types",
    items: [
      { name: "Manufacturing", href: "/sectors/manufacturing" },
      { name: "Finance", href: "/sectors/finance" },
      { name: "Retail", href: "/sectors/retail" },
      { name: "Healthcare", href: "/sectors/healthcare" },
      { name: "Public Sector", href: "/sectors/public-sector" },
      { name: "Micro Enterprises", href: "/business-types/micro" },
      { name: "Mid-sized Companies", href: "/business-types/mid-sized" },
      { name: "Large Organizations", href: "/business-types/large" },
    ],
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

const regions = [
  { name: "Ontario", href: "/regions/ontario", nameFr: "Ontario" },
  { name: "British Columbia", href: "/regions/british-columbia", nameFr: "Colombie-Britannique" },
  { name: "Quebec", href: "/regions/quebec", nameFr: "Québec" },
  { name: "Alberta", href: "/regions/alberta", nameFr: "Alberta" },
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
                      <ul className="grid w-[400px] gap-2 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link 
                              href={subItem.href}
                              className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium px-4 py-2 rounded-md transition-colors hover:text-primary hover:bg-accent/50"
              >
                {item.name}
              </Link>
            )
          ))}

          {/* Region Selector */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 hover:bg-accent/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Regions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {regions.map((region) => (
                      <li key={region.href}>
                        <Link
                          href={getLocalizedPath(region.href)}
                          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {isPathFrench ? region.nameFr : region.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Selector */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-4 hover:bg-accent/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3.75m-9 3.75v-3.75m18 0v3.75m-18 0h18" />
                  </svg>
                  {isPathFrench ? "FR" : "EN"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <Link
                          href={lang.href + location.replace("/fr", "")}
                          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                      <div className="pl-4 space-y-3">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                {/* Mobile Region Selection */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-foreground">Regions</div>
                  <div className="pl-4 space-y-3">
                    {regions.map((region) => (
                      <Link
                        key={region.href}
                        href={getLocalizedPath(region.href)}
                        className="block text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {isPathFrench ? region.nameFr : region.name}
                      </Link>
                    ))}
                  </div>
                </div>

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
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}