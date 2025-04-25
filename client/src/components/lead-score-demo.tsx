import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Info, Zap, User, Building, Briefcase, Clock, FileText, Mail } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const demoLead = {
  email: "john.smith@acme-corp.com",
  company: "Acme Corporation",
  jobTitle: "Sales Director",
  visitFrequency: 5,
  downloadedResources: ["whitepaper-1", "case-study-2"],
  emailInteractions: 3,
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
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              AI-Powered Lead Scoring
              <div className="text-sm text-muted-foreground rounded-full bg-muted px-2 py-1">
                Demo
              </div>
            </CardTitle>
            <CardDescription className="mt-2">
              See how our AI evaluates lead conversion potential
            </CardDescription>
          </div>
          <div className="flex flex-col items-center">
            <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
              {score}%
            </div>
            <div className="text-xs text-muted-foreground">
              Conversion Score
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Lead Quality:</span>
            <span className={`text-sm font-medium ${getScoreColor(score)}`}>
              {getScoreLabel(score)}
            </span>
          </div>
          <Progress value={score} className={`h-2 ${score >= 80 ? "bg-green-200" : score >= 60 ? "bg-yellow-200" : "bg-red-200"}`} />
        </div>
        
        <div className="grid gap-4">
          <div className="text-sm font-medium flex items-center gap-1.5">
            <Info className="h-4 w-4 text-blue-500" />
            <span>Lead Profile:</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Contact</p>
                <p className="text-sm text-muted-foreground">{demoLead.email}</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Building className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Company</p>
                <p className="text-sm text-muted-foreground">{demoLead.company}</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Job Title</p>
                <p className="text-sm text-muted-foreground">{demoLead.jobTitle}</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Website Visits</p>
                <p className="text-sm text-muted-foreground">{demoLead.visitFrequency} times in past 30 days</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Content Downloads</p>
                <p className="text-sm text-muted-foreground">{demoLead.downloadedResources.length} resources</p>
              </div>
            </div>
            
            <div className="bg-secondary/30 rounded-lg p-3 flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Email Engagement</p>
                <p className="text-sm text-muted-foreground">{demoLead.emailInteractions} interactions</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-primary/5 p-4 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="font-medium">AI Scoring Factors</h3>
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
            <p className="text-sm text-muted-foreground mt-3">
              Our AI algorithm analyzes these factors to predict conversion likelihood. 
              Hover over the score at the top for more details.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
