import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Info, Zap, User, Building, Briefcase, Clock, FileText, Mail, PieChart, AlertTriangle, ArrowRight, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// This represents an example of lead data that would be collected and analyzed by the system
// when implemented for a client. It is NOT data that site visitors need to provide.
const demoLead = {
  industry: "technology",
  businessSize: "mid_market",
  channel: "referral",
  serviceInterest: "sales_automation",
  budget: "large",
  timeline: "urgent"
};

export function LeadScoreDemo() {
  const { score, factors } = useLeadScore(demoLead);
  
  const getScoreColor = (score: number): string => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };
  
  const getScoreLabel = (score: number): string => {
    if (score >= 80) return "High Conversion Potential";
    if (score >= 60) return "Moderate Conversion Potential";
    return "Low Conversion Potential";
  };

  return (
    <Card className="shadow-md relative overflow-hidden">
      {/* Product demo badge */}
      <div className="absolute top-0 right-0">
        <Badge variant="secondary" className="rounded-none rounded-bl-lg shadow-sm">
          <PieChart className="h-3.5 w-3.5 mr-1" />
          Product Demo
        </Badge>
      </div>
      
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl">
              AI-Powered Lead Scoring System
            </CardTitle>
            <CardDescription className="mt-2">
              This demonstrates how your business would see and score leads after implementing our solution
            </CardDescription>
          </div>
          <div className="flex flex-col items-center px-4 py-2 bg-muted rounded-lg">
            <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
              {score}%
            </div>
            <div className="text-xs text-muted-foreground">
              Example Lead Score
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-md">
          <div className="flex gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">This is a demonstration only</p>
              <p className="text-sm text-amber-700">
                This shows how our AI would score your leads after integrating with your website and CRM. 
                Visitors don't need to enter this information - it's collected automatically when you implement our solution.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Lead Quality Assessment:</span>
            <span className={`text-sm font-medium ${getScoreColor(score)}`}>
              {getScoreLabel(score)}
            </span>
          </div>
          <Progress value={score} className={`h-2 ${score >= 80 ? "bg-green-200" : score >= 60 ? "bg-yellow-200" : "bg-red-200"}`} />
        </div>
        
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium flex items-center gap-1.5">
              <Info className="h-4 w-4 text-blue-500" />
              <span>Sample Lead Profile Data:</span>
            </div>
            <span className="text-xs text-muted-foreground">Automatically collected by the system</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Building className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Industry</p>
                <p className="text-sm text-muted-foreground">Technology</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Business Size</p>
                <p className="text-sm text-muted-foreground">Mid-Market</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Service Interest</p>
                <p className="text-sm text-muted-foreground">Sales Automation</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Marketing Channel</p>
                <p className="text-sm text-muted-foreground">Referral</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Budget Range</p>
                <p className="text-sm text-muted-foreground">$50,000 - $100,000</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Project Timeline</p>
                <p className="text-sm text-muted-foreground">Immediate (1-4 weeks)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-primary/5 p-4 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="font-medium">AI Scoring Analysis</h3>
            </div>
            <div className="space-y-2">
              {factors.map((factor, index) => (
                <div key={index} className="text-sm flex items-center justify-between">
                  <span className="font-medium">{factor.factor}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    factor.impact === "positive" 
                      ? "bg-green-100 text-green-700" 
                      : factor.impact === "negative"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                  }`}>
                    {factor.impact === "positive" ? "Positive" : factor.impact === "negative" ? "Negative" : "Neutral"} 
                    ({factor.weight}/5)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="pt-6 pb-6 flex flex-col sm:flex-row gap-4 items-center">
        <div className="text-sm text-muted-foreground flex-grow">
          <strong>How this helps your business:</strong> Our AI automatically identifies your most 
          valuable leads, helping your sales team focus efforts where they'll have the biggest impact.
        </div>
        <Link href="/services/sales-automation">
          <Button className="whitespace-nowrap">
            Learn How It Works
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
