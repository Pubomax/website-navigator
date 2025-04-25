import { useState } from 'react';
import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, TrendingUp, Clock, Bot, PieChart, AlertTriangle, ArrowRight, Check, Info, Mail } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

export function LeadScoreWidget() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  const { toast } = useToast();
  
  const [leadData, setLeadData] = useState({
    email: "",
    jobTitle: "",
    company: "",
    visitFrequency: 2,
    downloadedResources: [] as string[],
    emailInteractions: 0,
  });
  
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
  
  const submitLeadData = async () => {
    if (!leadData.email || !leadData.company || !consentGiven) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit the lead to the newsletter subscription endpoint
      const payload = {
        email: leadData.email,
        source: "lead-scoring-demo",
        status: "active",
        metadata: {
          company: leadData.company,
          jobTitle: leadData.jobTitle,
          leadScore: score,
        }
      };
      
      await apiRequest("POST", "/api/newsletter", payload);
      
      // Show success message
      toast({
        title: isPathFrench ? "Merci de votre intérêt!" : "Thanks for your interest!",
        description: isPathFrench 
          ? "Nous vous contacterons bientôt avec plus d'informations." 
          : "We'll be in touch with more information soon.",
        variant: "default",
      });
      
      setHasSubmitted(true);
      
      // Invalidate any related queries
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
      
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: isPathFrench ? "Erreur" : "Error",
        description: isPathFrench 
          ? "Une erreur s'est produite. Veuillez réessayer." 
          : "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800">
                {isPathFrench ? "Recevez plus d'informations" : "Get more information"}
              </p>
              <p className="text-sm text-blue-700 mb-3">
                {isPathFrench 
                  ? "Souhaitez-vous recevoir des informations personnalisées sur la façon dont notre solution peut aider votre entreprise?"
                  : "Would you like to receive personalized information on how our solution can help your business?"
                }
              </p>
              
              <div className="flex items-start gap-2 mb-3">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary">
                  {consentGiven && <Check className="h-3 w-3" />}
                  <input
                    type="checkbox"
                    id="consent"
                    className="sr-only"
                    checked={consentGiven}
                    onChange={(e) => setConsentGiven(e.target.checked)}
                    disabled={hasSubmitted}
                  />
                </div>
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none cursor-pointer select-none"
                  >
                    {isPathFrench 
                      ? "Oui, j'accepte d'être contacté par Minecore Group" 
                      : "Yes, I agree to be contacted by Minecore Group"}
                  </label>
                  <p className="text-xs text-muted-foreground">
                    {isPathFrench 
                      ? "Consultez notre politique de confidentialité pour plus d'informations." 
                      : "See our privacy policy for more information."}
                  </p>
                </div>
              </div>
              
              {!hasSubmitted ? (
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={submitLeadData}
                  disabled={isSubmitting || !consentGiven || !leadData.email || !leadData.company}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 animate-spin" />
                      {isPathFrench ? "Envoi en cours..." : "Submitting..."}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" />
                      {isPathFrench ? "Recevoir plus d'informations" : "Get more information"}
                    </span>
                  )}
                </Button>
              ) : (
                <div className="bg-green-100 p-2 rounded-md flex items-center gap-2 text-sm text-green-800">
                  <Check className="h-4 w-4" />
                  {isPathFrench ? "Merci! Nous vous contacterons bientôt." : "Thank you! We'll be in touch soon."}
                </div>
              )}
            </div>
          </div>
        </div>
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