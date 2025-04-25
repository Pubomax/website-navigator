import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, TrendingUp, Clock, Bot, PieChart, Briefcase, Building2, ArrowRight, Target, Globe, Users } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { businessSizes, sectors, industries } from "@/data/services";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";

const marketingChannels = {
  organic_search: { label: { en: "Organic Search", fr: "Recherche Organique" }, weight: 3 },
  paid_search: { label: { en: "Paid Search", fr: "Recherche Payante" }, weight: 4 },
  social_media: { label: { en: "Social Media", fr: "Médias Sociaux" }, weight: 3 },
  email: { label: { en: "Email Marketing", fr: "Marketing par Email" }, weight: 5 },
  referral: { label: { en: "Referral", fr: "Parrainage" }, weight: 5 },
  direct: { label: { en: "Direct Visit", fr: "Visite Directe" }, weight: 2 }
};

const serviceInterests = {
  sales_automation: { label: { en: "Sales Automation", fr: "Automatisation des Ventes" }, weight: 5 },
  marketing_automation: { label: { en: "Marketing Automation", fr: "Automatisation Marketing" }, weight: 4 },
  custom_software: { label: { en: "Custom Software Solutions", fr: "Solutions Logicielles Personnalisées" }, weight: 3 },
  crm_integration: { label: { en: "CRM Integration", fr: "Intégration CRM" }, weight: 5 },
  business_intelligence: { label: { en: "Business Intelligence", fr: "Intelligence d'Affaires" }, weight: 4 },
  digital_foundation: { label: { en: "Digital Foundation", fr: "Fondation Numérique" }, weight: 2 }
};

const budgetRanges = {
  small: { label: { en: "Under $10,000", fr: "Moins de 10 000$" }, weight: 1 },
  medium: { label: { en: "$10,000 - $50,000", fr: "10 000$ - 50 000$" }, weight: 3 },
  large: { label: { en: "$50,000 - $100,000", fr: "50 000$ - 100 000$" }, weight: 4 },
  enterprise: { label: { en: "Over $100,000", fr: "Plus de 100 000$" }, weight: 5 }
};

const timelines = {
  urgent: { label: { en: "Immediate (1-4 weeks)", fr: "Immédiat (1-4 semaines)" }, weight: 5 },
  short: { label: { en: "Short-term (1-3 months)", fr: "Court terme (1-3 mois)" }, weight: 4 },
  medium: { label: { en: "Medium-term (3-6 months)", fr: "Moyen terme (3-6 mois)" }, weight: 3 },
  long: { label: { en: "Long-term (6+ months)", fr: "Long terme (6+ mois)" }, weight: 1 }
};

// Function to get sector/industry weight
const getIndustryWeight = (industry: string): number => {
  const highValueIndustries = ["finance", "healthcare", "education", "real_estate", "technology", "manufacturing"];
  return highValueIndustries.includes(industry) ? 5 : 3;
};

// Function to get business size weight
const getBusinessSizeWeight = (size: string): number => {
  const weights: {[key: string]: number} = {
    enterprise: 5,
    mid_market: 4,
    small_business: 3,
    startup: 2
  };
  return weights[size] || 3;
};

interface ScoreFactors {
  factor: string;
  impact: "positive" | "negative" | "neutral";
  weight: number;
}

export function LeadScoreWidget() {
  const [location] = useLocation();
  const isPathFrench = location.startsWith("/fr");
  
  const [leadData, setLeadData] = useState({
    industry: "",
    businessSize: "",
    channel: "",
    serviceInterest: ""
  });
  
  const [score, setScore] = useState(0);
  const [factors, setFactors] = useState<ScoreFactors[]>([]);
  const [potentialRevenue, setPotentialRevenue] = useState(0);
  const [timeToClose, setTimeToClose] = useState(0);
  
  // Calculate the lead score whenever leadData changes
  useEffect(() => {
    calculateScore();
  }, [leadData]);
  
  const calculateScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;
    const newFactors: ScoreFactors[] = [];
    
    // Add industry factor if selected
    if (leadData.industry) {
      const weight = getIndustryWeight(leadData.industry);
      const impact = weight >= 4 ? "positive" : "neutral";
      newFactors.push({
        factor: isPathFrench ? "Secteur d'Activité" : "Industry",
        impact,
        weight
      });
      totalScore += weight;
      maxPossibleScore += 5;
    }
    
    // Add business size factor if selected
    if (leadData.businessSize) {
      const weight = getBusinessSizeWeight(leadData.businessSize);
      const impact = weight >= 4 ? "positive" : weight <= 2 ? "negative" : "neutral";
      newFactors.push({
        factor: isPathFrench ? "Taille de l'Entreprise" : "Business Size",
        impact,
        weight
      });
      totalScore += weight;
      maxPossibleScore += 5;
    }
    
    // Add marketing channel factor if selected
    if (leadData.channel) {
      const channelData = marketingChannels[leadData.channel as keyof typeof marketingChannels];
      const weight = channelData?.weight || 3;
      const impact = weight >= 4 ? "positive" : weight <= 2 ? "negative" : "neutral";
      newFactors.push({
        factor: isPathFrench ? "Canal Marketing" : "Marketing Channel",
        impact,
        weight
      });
      totalScore += weight;
      maxPossibleScore += 5;
    }
    
    // Add service interest factor if selected
    if (leadData.serviceInterest) {
      const serviceData = serviceInterests[leadData.serviceInterest as keyof typeof serviceInterests];
      const weight = serviceData?.weight || 3;
      const impact = weight >= 4 ? "positive" : "neutral";
      newFactors.push({
        factor: isPathFrench ? "Service d'Intérêt" : "Service Interest",
        impact,
        weight
      });
      totalScore += weight;
      maxPossibleScore += 5;
    }
    

    
    // Calculate percentage score
    let percentage = 0;
    if (maxPossibleScore > 0) {
      percentage = Math.round((totalScore / maxPossibleScore) * 100);
    }
    
    // Update state
    setScore(percentage);
    setFactors(newFactors);
    
    // Calculate potential revenue based on business size and industry
    let revEstimate = 5000; // Default base
    if (leadData.businessSize === 'enterprise') revEstimate = 50000;
    else if (leadData.businessSize === 'mid_market') revEstimate = 20000;
    else if (leadData.businessSize === 'small_business') revEstimate = 10000;
    
    // Adjust by industry
    if (leadData.industry === 'technology' || leadData.industry === 'financial_services') {
      revEstimate *= 1.5;
    } else if (leadData.industry === 'healthcare' || leadData.industry === 'manufacturing') {
      revEstimate *= 1.3;
    }
    
    // Adjust by score percentage
    revEstimate = Math.round(revEstimate * (percentage / 100));
    setPotentialRevenue(revEstimate);
    
    // Calculate time to close based on marketing channel and score
    let estimatedDays = 90; // Default
    
    // Adjust by marketing channel - some channels convert faster
    if (leadData.channel === 'referral') estimatedDays = 30;
    else if (leadData.channel === 'direct') estimatedDays = 45; 
    else if (leadData.channel === 'organic') estimatedDays = 60;
    else if (leadData.channel === 'paid') estimatedDays = 75;
    
    // Adjust by score - higher scores close faster
    const adjustedDays = Math.round(estimatedDays * (1 - (percentage - 50) / 200));
    setTimeToClose(Math.max(7, adjustedDays)); // Minimum 7 days
  };

  const handleInputChange = (field: string, value: string) => {
    setLeadData({
      ...leadData,
      [field]: value
    });
  };
  
  const resetForm = () => {
    setLeadData({
      industry: "",
      businessSize: "",
      channel: "",
      serviceInterest: ""
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
            {isPathFrench ? "Évaluez la Qualité de Vos Leads" : "Lead Quality Scoring"}
          </CardTitle>
          <CardDescription>
            {isPathFrench 
              ? "Découvrez comment notre IA évalue les prospects en fonction de critères commerciaux importants"
              : "See how our AI evaluates prospects based on important business criteria"
            }
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 pb-2 grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Industry Selection */}
          <div className="space-y-2">
            <Label htmlFor="industry" className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              {isPathFrench ? "Secteur d'Activité" : "Industry"}
            </Label>
            <Select value={leadData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
              <SelectTrigger id="industry">
                <SelectValue placeholder={isPathFrench ? "Sélectionnez un secteur" : "Select industry"} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(industries).map(([key, industry]) => (
                  <SelectItem key={key} value={key}>
                    {isPathFrench ? (industry.title as any).fr : (industry.title as any).en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Business Size */}
          <div className="space-y-2">
            <Label htmlFor="business-size" className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-muted-foreground" />
              {isPathFrench ? "Taille de l'Entreprise" : "Business Size"}
            </Label>
            <Select value={leadData.businessSize} onValueChange={(value) => handleInputChange('businessSize', value)}>
              <SelectTrigger id="business-size">
                <SelectValue placeholder={isPathFrench ? "Sélectionnez une taille" : "Select business size"} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(businessSizes).map(([key, size]) => (
                  <SelectItem key={key} value={key}>
                    {isPathFrench ? (size.title as any).fr : (size.title as any).en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Marketing Channel */}
          <div className="space-y-2">
            <Label htmlFor="channel" className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-muted-foreground" />
              {isPathFrench ? "Canal Marketing" : "Marketing Channel"}
            </Label>
            <Select value={leadData.channel} onValueChange={(value) => handleInputChange('channel', value)}>
              <SelectTrigger id="channel">
                <SelectValue placeholder={isPathFrench ? "Sélectionnez un canal" : "Select channel"} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(marketingChannels).map(([key, channel]) => (
                  <SelectItem key={key} value={key}>
                    {isPathFrench ? channel.label.fr : channel.label.en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Service Interest */}
          <div className="space-y-2">
            <Label htmlFor="service-interest" className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              {isPathFrench ? "Service d'Intérêt" : "Service Interest"}
            </Label>
            <Select value={leadData.serviceInterest} onValueChange={(value) => handleInputChange('serviceInterest', value)}>
              <SelectTrigger id="service-interest">
                <SelectValue placeholder={isPathFrench ? "Sélectionnez un service" : "Select service"} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceInterests).map(([key, service]) => (
                  <SelectItem key={key} value={key}>
                    {isPathFrench ? service.label.fr : service.label.en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          

        </div>

        {score > 0 && (
          <div className="mt-2 space-y-3">
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
            
            {score >= 75 && (
              <div className="bg-green-50 border border-green-100 p-3 rounded-lg text-sm text-green-800">
                {isPathFrench 
                  ? "Ce lead a un excellent potentiel! Nous recommandons un suivi immédiat avec une approche personnalisée."
                  : "This lead has excellent potential! We recommend immediate follow-up with a personalized approach."
                }
              </div>
            )}
            
            {score >= 50 && score < 75 && (
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-blue-800">
                {isPathFrench 
                  ? "Ce lead montre un bon potentiel. Une stratégie de nurturing ciblée serait efficace."
                  : "This lead shows good potential. A targeted nurturing strategy would be effective."
                }
              </div>
            )}
            
            {score < 50 && score > 0 && (
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg text-sm text-amber-800">
                {isPathFrench 
                  ? "Ce lead nécessite un développement supplémentaire. Concentrez-vous sur l'éducation et la qualification."
                  : "This lead needs further development. Focus on education and qualification."
                }
              </div>
            )}
          </div>
        )}
        
        <div className="bg-primary/5 p-3 rounded-lg text-xs text-center text-muted-foreground">
          {isPathFrench 
            ? "Ceci est une démonstration. Dans un système réel, les données historiques et les interactions seraient également utilisées."
            : "This is a demonstration. In a real system, historical data and interactions would also be used."
          }
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between border-t pt-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={resetForm}
        >
          {isPathFrench ? "Réinitialiser" : "Reset"}
        </Button>
        
        <Link href={isPathFrench ? "/fr/services/sales-automation" : "/services/sales-automation"}>
          <Button variant="link" size="sm" className="font-normal">
            {isPathFrench ? "En savoir plus sur les solutions" : "Learn more about solutions"}
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}