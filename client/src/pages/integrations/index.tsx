import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BoxesIcon, GitMerge, Grid3X3, SquareCode, Workflow } from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      title: "N8N Integration",
      icon: Workflow,
      description: "Automate blog content creation and management with N8N workflows.",
      link: "/integrations/n8n-guide",
      primaryColor: "bg-blue-100 text-blue-700",
      iconColor: "text-blue-600",
    },
    {
      title: "Zapier Integration",
      icon: GitMerge,
      description: "Connect your website with 5,000+ apps using Zapier zaps.",
      link: "#",
      primaryColor: "bg-orange-100 text-orange-700",
      iconColor: "text-orange-600",
      comingSoon: true,
    },
    {
      title: "REST API",
      icon: SquareCode,
      description: "Direct API access for custom integrations and applications.",
      link: "#",
      primaryColor: "bg-violet-100 text-violet-700",
      iconColor: "text-violet-600",
      comingSoon: true,
    },
    {
      title: "Webhook Events",
      icon: Grid3X3,
      description: "Subscribe to website events and receive real-time notifications.",
      link: "#",
      primaryColor: "bg-green-100 text-green-700",
      iconColor: "text-green-600",
      comingSoon: true,
    },
  ];

  return (
    <main className="container py-8">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isCurrentPage>Integrations</Breadcrumb.Item>
      </Breadcrumb>

      <div className="my-8">
        <h1 className="text-4xl font-bold mb-4">Integrations & API</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect and extend your website with powerful integrations and automation tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {integrations.map((integration, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 ${integration.primaryColor}`}>
                <integration.icon className={`h-6 w-6 ${integration.iconColor}`} />
              </div>
              <CardTitle className="flex items-center justify-between">
                {integration.title}
                {integration.comingSoon && (
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground font-normal">
                    Coming Soon
                  </span>
                )}
              </CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <Button 
                variant={integration.comingSoon ? "outline" : "default"} 
                asChild={!integration.comingSoon}
                disabled={integration.comingSoon}
                className="w-full"
              >
                {!integration.comingSoon ? (
                  <Link href={integration.link} className="w-full">
                    View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <>Request Early Access</>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-6 bg-muted rounded-lg border">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="p-4 rounded-full bg-primary/10">
            <BoxesIcon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Need a Custom Integration?</h3>
            <p className="text-muted-foreground">
              Our team can build custom integrations tailored to your specific business needs. 
              Connect with internal systems, third-party services, or create specialized automation workflows.
            </p>
          </div>
          <Button asChild className="md:self-start" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}