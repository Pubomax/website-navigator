import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { 
  Info, 
  Zap, 
  User, 
  Building, 
  Briefcase, 
  Mail, 
  PieChart, 
  AlertTriangle, 
  ArrowRight, 
  AlertCircle,
  BarChart4,
  CircleCheck,
  CircleX,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

// This represents an example of lead data that would be collected and analyzed by the system
// when implemented for a client. It is NOT data that site visitors need to provide.
const demoLead = {
  industry: "technology",
  businessSize: "mid_market",
  channel: "referral",
  serviceInterest: "sales_automation"
};

export function LeadScoreDemo() {
  const { score, factors } = useLeadScore(demoLead);
  
  const getScoreColor = (score: number): string => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-amber-600";
    return "text-rose-600";
  };
  
  const getScoreGradient = (score: number): string => {
    if (score >= 80) return "from-emerald-500 to-teal-500";
    if (score >= 60) return "from-amber-500 to-orange-500";
    return "from-rose-500 to-pink-500";
  };
  
  const getScoreBackground = (score: number): string => {
    if (score >= 80) return "bg-emerald-50 border-emerald-200";
    if (score >= 60) return "bg-amber-50 border-amber-200";
    return "bg-rose-50 border-rose-200";
  };
  
  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CircleCheck className="h-5 w-5 text-emerald-500" />;
    if (score >= 60) return <BarChart4 className="h-5 w-5 text-amber-500" />;
    return <CircleX className="h-5 w-5 text-rose-500" />;
  };
  
  const getScoreLabel = (score: number): string => {
    if (score >= 80) return "High Conversion Potential";
    if (score >= 60) return "Moderate Conversion Potential";
    return "Low Conversion Potential";
  };

  return (
    <Card className="shadow-lg relative overflow-hidden border-border/30">
      {/* Subtle gradient border at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary/60"></div>
      
      {/* Product demo badge */}
      <div className="absolute top-0 right-0">
        <Badge variant="secondary" className="rounded-none rounded-bl-lg shadow-sm border border-border/20 bg-secondary/50">
          <PieChart className="h-3.5 w-3.5 mr-1.5 text-primary/80" />
          Product Demo
        </Badge>
      </div>
      
      <CardHeader className="pb-4 px-6 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-medium tracking-tight">
              AI-Powered Lead Scoring
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground/90 leading-relaxed">
              This demonstrates how our AI identifies your most valuable leads automatically
            </CardDescription>
          </div>
          
          <div className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-lg border",
            getScoreBackground(score)
          )}>
            {getScoreIcon(score)}
            <div>
              <div className={cn("text-3xl font-medium tracking-tight", getScoreColor(score))}>
                {score}%
              </div>
              <div className="text-xs text-muted-foreground/90">
                Example Score
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-6">
        <div className="bg-amber-50 border border-amber-200/70 p-4 mb-6 rounded-lg">
          <div className="flex gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">Demonstration Example</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                This shows how our AI would score your leads after integrating with your website and CRM. 
                The system collects this data automatically—visitors don't need to enter this information.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary/80" />
              Lead Quality Assessment
            </span>
            <span className={cn("text-sm font-medium", getScoreColor(score))}>
              {getScoreLabel(score)}
            </span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-slate-100">
              <div 
                className={cn("shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r", getScoreGradient(score))}
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-medium flex items-center">
                <User className="h-4 w-4 mr-2 text-primary/80" />
                Lead Profile Data
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-500">Automatically collected</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 hover:bg-slate-100/80 transition-colors duration-200 rounded-lg p-4 flex items-start gap-3 border border-slate-100 group">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Industry</p>
                  <p className="text-sm text-slate-500">Technology</p>
                </div>
              </div>
              
              <div className="bg-slate-50 hover:bg-slate-100/80 transition-colors duration-200 rounded-lg p-4 flex items-start gap-3 border border-slate-100 group">
                <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Business Size</p>
                  <p className="text-sm text-slate-500">Mid-Market</p>
                </div>
              </div>
              
              <div className="bg-slate-50 hover:bg-slate-100/80 transition-colors duration-200 rounded-lg p-4 flex items-start gap-3 border border-slate-100 group">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Service Interest</p>
                  <p className="text-sm text-slate-500">Sales Automation</p>
                </div>
              </div>
              
              <div className="bg-slate-50 hover:bg-slate-100/80 transition-colors duration-200 rounded-lg p-4 flex items-start gap-3 border border-slate-100 group">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Marketing Channel</p>
                  <p className="text-sm text-slate-500">Referral</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-primary/80 to-primary p-4 text-white">
              <div className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5" />
                <h3 className="font-medium">AI Scoring Analysis</h3>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {factors.map((factor, index) => (
                <div key={index} className="p-3 group hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-slate-800 flex items-center">
                      {factor.impact === "positive" && (
                        <TrendingUp className="mr-1.5 h-4 w-4 text-emerald-500" />
                      )}
                      {factor.impact === "negative" && (
                        <TrendingDown className="mr-1.5 h-4 w-4 text-rose-500" />
                      )}
                      {factor.impact === "neutral" && (
                        <Info className="mr-1.5 h-4 w-4 text-slate-400" />
                      )}
                      {factor.factor}
                    </span>
                    
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs border",
                      factor.impact === "positive" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                        : factor.impact === "negative"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                    )}>
                      {factor.impact === "positive" ? "Positive" : factor.impact === "negative" ? "Negative" : "Neutral"} 
                      <span className="font-medium ml-1">
                        {factor.weight}/5
                      </span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 ml-6">
                    {factor.impact === "positive" 
                      ? "Increases conversion likelihood" 
                      : factor.impact === "negative" 
                        ? "Decreases conversion likelihood" 
                        : "Neutral impact"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center">
        <div className="text-sm text-slate-600 flex-grow">
          <div className="flex items-center gap-2 font-medium text-slate-700 mb-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            How this helps your business
          </div>
          <p className="ml-6">
            Our AI automatically identifies your most valuable leads, helping your sales team focus efforts where they'll have the biggest impact.
          </p>
        </div>
        <Link href="/services/sales-automation">
          <Button variant="gradient" size="lg" className="whitespace-nowrap shadow-sm">
            Learn How It Works
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
