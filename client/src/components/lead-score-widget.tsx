import { useState } from 'react';
import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, TrendingUp, Clock, Bot, PieChart, AlertTriangle, ArrowRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function LeadScoreWidget() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const [leadData, setLeadData] = useState({
    email: "",
    jobTitle: "",
    company: "",
    visitFrequency: 2,
    downloadedResources: [] as string[],
    emailInteractions: 0,
  });

  const { score, factors } = useLeadScore(leadData);

  // Calculate revenue potential
  const potentialRevenue = Math.round((score / 100) * 10000);
  const timeToClose = Math.max(5, 30 - Math.round((score / 100) * 25));

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData({ ...leadData, email: e.target.value });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData({ ...leadData, company: e.target.value });
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeadData({ ...leadData, jobTitle: e.target.value });
  };

  const simulateInteraction = () => {
    if (!leadData.email) return;
    
    // Only simulate if we have valid email
    setLeadData({
      ...leadData,
      downloadedResources: [...leadData.downloadedResources, 'resource-' + (leadData.downloadedResources.length + 1)],
      visitFrequency: leadData.visitFrequency + 1,
      emailInteractions: leadData.emailInteractions + 1
    });
  };

  return (
    <Card className="shadow-lg border-primary/20 relative overflow-hidden">
      {/* Interactive Demo badge */}
      <div className="absolute top-0 right-0">
        <Badge variant="secondary" className="rounded-none rounded-bl-lg shadow-sm">
          <PieChart className="h-3.5 w-3.5 mr-1" />
          {isPathFrench ? "Démo Interactive" : "Interactive Demo"}
        </Badge>
      </div>
      
      <CardHeader className="bg-primary/5 border-b pb-4">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <Bot className="h-5 w-5" />
            {isPathFrench ? "Évaluez Vos Leads avec l'IA" : "AI Lead Scoring"}
          </CardTitle>
          <CardDescription>
            {isPathFrench 
              ? "Essayez notre simulateur de score de leads pour voir comment notre IA peut vous aider"
              : "Try our lead scoring simulator to see how our AI can help your business"
            }
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-6 rounded-r-md">
          <div className="flex gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-amber-800">
                {isPathFrench ? "Ceci est une démonstration" : "This is a demonstration only"}
              </p>
              <p className="text-xs text-amber-700">
                {isPathFrench 
                  ? "Essayez notre démo pour voir comment notre système d'IA évaluerait vos leads dans une vraie implémentation."
                  : "Try our demo to see how our AI system would score your leads in a real implementation."
                }
              </p>
              <p className="text-xs text-amber-700 mt-1 border-t border-amber-200 pt-1">
                <strong>{isPathFrench ? "Confidentialité" : "Privacy Note"}:</strong> {isPathFrench 
                  ? "Les informations saisies ne sont pas collectées ou stockées et restent uniquement dans votre navigateur."
                  : "Information entered here is not collected or stored and remains only in your browser."
                }
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              {isPathFrench ? "Email Professionnel" : "Business Email"}
            </Label>
            <Input 
              id="email" 
              placeholder={isPathFrench ? "votreemail@entreprise.com" : "youremail@company.com"}
              onChange={handleEmailChange}
              value={leadData.email}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">
              {isPathFrench ? "Entreprise" : "Company"} 
            </Label>
            <Input 
              id="company" 
              placeholder={isPathFrench ? "Nom de l'entreprise" : "Company name"}
              onChange={handleCompanyChange}
              value={leadData.company}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">
              {isPathFrench ? "Titre du Poste" : "Job Title"}
            </Label>
            <Input 
              id="jobTitle" 
              placeholder={isPathFrench ? "Directeur, Manager, etc." : "Director, Manager, etc."}
              onChange={handleJobTitleChange}
              value={leadData.jobTitle}
            />
          </div>
        </div>

        {score > 0 && (
          <div className="mt-6 space-y-3">
            <div className="bg-muted p-3 rounded-lg flex justify-between items-center">
              <span className="text-sm font-medium">{isPathFrench ? "Score du Lead" : "Lead Score"}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">{score}%</span>
                <LeadScoreTooltip score={score} factors={factors} />
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span>
                  {isPathFrench ? "Revenu Potentiel" : "Potential Revenue"}
                </span>
              </div>
              <span className="font-semibold text-green-500">
                ${potentialRevenue.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>
                  {isPathFrench ? "Temps de Conversion Estimé" : "Estimated Time to Close"}
                </span>
              </div>
              <span className="font-semibold text-blue-500">
                {timeToClose} {isPathFrench ? "jours" : "days"}
              </span>
            </div>
            
            {leadData.downloadedResources.length > 0 && (
              <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <span>
                    {isPathFrench ? "Niveau d'Engagement" : "Engagement Level"}
                  </span>
                </div>
                <span className="font-semibold text-amber-500">
                  {leadData.downloadedResources.length * 10 + leadData.emailInteractions * 5}%
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <Separator />
      
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between border-t pt-4">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setLeadData({
              email: "",
              jobTitle: "",
              company: "",
              visitFrequency: 2,
              downloadedResources: [],
              emailInteractions: 0,
            })}
          >
            {isPathFrench ? "Réinitialiser" : "Reset"}
          </Button>
          <Button 
            size="sm"
            onClick={simulateInteraction}
            disabled={!leadData.email}
          >
            {isPathFrench ? "Simuler l'Engagement" : "Simulate Engagement"}
          </Button>
        </div>
        
        <Link href={isPathFrench ? "/fr/services/sales-automation" : "/services/sales-automation"}>
          <Button variant="link" size="sm" className="font-normal">
            {isPathFrench ? "En savoir plus" : "Learn More"}
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}