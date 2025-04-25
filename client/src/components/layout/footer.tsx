import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertNewsletterSubscriptionSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  Mail, 
  Instagram
} from "lucide-react";
import { FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertNewsletterSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  const navigation = {
    main: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com/minecoregroup" },
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/minecoregroup/" },
      { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@minecoregroup" },
      { name: "Email", icon: Mail, href: "mailto:hello@minecoregroup.com" },
    ],
  };

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to subscribe");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    subscribe(data);
  });

  return (
    <footer className="bg-background mt-auto border-t">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid gap-8 xl:grid-cols-3 xl:gap-12">
            <div className="space-y-4">
              <Link href="/" className="block">
                <img 
                  src="/images/logo.png" 
                  alt="Minecore Group" 
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Canadian leader in digital transformation, AI, and automation solutions
                for businesses of all sizes.
              </p>
              <div className="text-sm text-muted-foreground space-y-1 mt-2">
                <p>Phone: +1 (514) 603-0598</p>
                <p>Email: hello@minecoregroup.com</p>
                <p>Address: 3580 Boulevard Saint Elzear Ouest, Laval, QC H7P 0L7</p>
              </div>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div>
                <h3 className="text-sm font-semibold mb-4">Navigation</h3>
                <ul role="list" className="space-y-3">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest in digital transformation.
                </p>
                <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0"
                    {...form.register("email")}
                    disabled={isPending}
                  />
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
                {form.formState.errors.email && (
                  <p className="mt-2 text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Separator className="opacity-50" />
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Minecore Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}