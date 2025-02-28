import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail 
} from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:contact@minecoregroup.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              Minecore Group
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Canadian leader in digital transformation, AI, and automation solutions
              for businesses of all sizes.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Subscribe to our newsletter</h3>
              <p className="mt-6 text-sm text-muted-foreground">
                Stay updated with the latest in digital transformation.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full min-w-0"
                />
                <div className="mt-3 sm:ml-4 sm:mt-0">
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Separator className="mt-12 mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Minecore Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
