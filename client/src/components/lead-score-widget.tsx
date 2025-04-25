import { useState } from 'react';
import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, TrendingUp, Clock, Bot } from "lucide-react";
import { useLocation } from "wouter";

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
    <Card className="shadow-lg border-primary/20">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Bot className="h-5 w-5" />
            {isPathFrench ? "Évaluez Vos Leads avec l'IA" : "AI Lead Scoring"}
          </CardTitle>
          <LeadScoreTooltip score={score} factors={factors} />
        </div>
      </CardHeader>
      <CardContent className="pt-6 pb-2">
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
      <CardFooter className="flex justify-between border-t pt-4">
        <Button 
          variant="outline" 
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
          onClick={simulateInteraction}
          disabled={!leadData.email}
        >
          {isPathFrench ? "Simuler l'Engagement" : "Simulate Engagement"}
        </Button>
      </CardFooter>
    </Card>
  );
}