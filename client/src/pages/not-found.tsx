import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { PageTitle } from "@/components/page-title";

const getContent = (isPathFrench: boolean) => ({
  title: isPathFrench ? "404 Page Non Trouvée" : "404 Page Not Found",
  description: isPathFrench
    ? "Désolé, nous n'avons pas trouvé la page que vous recherchez. La page a peut-être été supprimée, renommée ou n'existe pas."
    : "Sorry, we couldn't find the page you're looking for. The page might have been removed, renamed, or doesn't exist.",
  backToHome: isPathFrench ? "Retour à l'Accueil" : "Back to Home"
});

export default function NotFound() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const content = getContent(isPathFrench);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <PageTitle pageKey="notFound" />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <AlertCircle className="h-12 w-12 text-destructive" />
            <h1 className="text-2xl font-bold">{content.title}</h1>
          </div>

          <p className="text-muted-foreground mb-8">
            {content.description}
          </p>

          <Button asChild>
            <Link href={isPathFrench ? "/fr" : "/"} className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              {content.backToHome}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}