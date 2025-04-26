import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Star, StarHalf, HelpCircle, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface LeadScoreTooltipProps {
  score: number; // 0-100
  factors: {
    factor: string;
    impact: "positive" | "negative" | "neutral";
    weight: number; // 1-5
  }[];
}

const getScoreColor = (score: number): string => {
  if (score >= 80) return "text-green-500";
  if (score >= 60) return "text-yellow-500";
  return "text-red-500";
};

const getScoreBackground = (score: number): string => {
  if (score >= 80) return "bg-green-100";
  if (score >= 60) return "bg-yellow-100";
  return "bg-red-100";
};

const getScoreText = (score: number): string => {
  if (score >= 80) return "High potential lead - prioritize follow-up";
  if (score >= 60) return "Medium potential lead - engage further";
  return "Low potential lead - nurture over time";
};

const getStars = (weight: number) => {
  const stars = [];
  const fullStars = Math.floor(weight);
  const hasHalfStar = weight % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-4 w-4 inline text-amber-400" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 inline text-amber-400" />);
  }
  return stars;
};

const getImpactIcon = (impact: string) => {
  switch (impact) {
    case "positive":
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    case "negative":
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    default:
      return <Minus className="h-4 w-4 text-gray-500" />;
  }
};

export function LeadScoreTooltip({ score, factors }: LeadScoreTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 cursor-help">
            <HelpCircle className="h-4 w-4 text-blue-500" />
            <span className={`font-semibold ${getScoreColor(score)}`}>
              {score}%
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="w-96 p-4">
          <div className="space-y-4">
            <div>
              <p className="font-bold text-lg">Lead Conversion Potential</p>
              <p className="text-sm text-muted-foreground mb-2">Based on AI analysis of engagement patterns</p>
              
              <div className="mb-2">
                <Progress value={score} className="h-3" />
              </div>
              <div className={`text-sm p-2 rounded-md ${getScoreBackground(score)} ${getScoreColor(score)}`}>
                {getScoreText(score)}
              </div>
            </div>
            
            <div>
              <p className="font-semibold mb-2">Key Influence Factors:</p>
              <div className="space-y-2 border rounded-md p-2">
                {factors.map((factor, index) => (
                  <div key={index} className="text-sm flex items-center gap-2">
                    {getImpactIcon(factor.impact)}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{factor.factor}</span>
                        <span className="text-muted-foreground">
                          {getStars(factor.weight)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {factor.impact === "positive" 
                          ? "Increases conversion likelihood" 
                          : factor.impact === "negative" 
                            ? "Decreases conversion likelihood" 
                            : "Neutral impact"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-xs text-muted-foreground">
              <p><strong>Why this matters:</strong> Higher lead scores correlate with faster sales cycles 
              and higher close rates, helping you focus on leads most likely to convert.</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}