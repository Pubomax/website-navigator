import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Info, 
  Star, 
  StarHalf, 
  HelpCircle, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  BarChart4,
  CircleCheck,
  CircleX
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface LeadScoreTooltipProps {
  score: number; // 0-100
  factors: {
    factor: string;
    impact: "positive" | "negative" | "neutral";
    weight: number; // 1-5
  }[];
}

const getScoreColor = (score: number): string => {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-amber-600";
  return "text-rose-600";
};

const getScoreBackground = (score: number): string => {
  if (score >= 80) return "bg-emerald-50 border-emerald-200/70";
  if (score >= 60) return "bg-amber-50 border-amber-200/70";
  return "bg-rose-50 border-rose-200/70";
};

const getScoreGradient = (score: number): string => {
  if (score >= 80) return "from-emerald-500 to-teal-500";
  if (score >= 60) return "from-amber-500 to-orange-500";
  return "from-rose-500 to-pink-500";
};

const getScoreText = (score: number): string => {
  if (score >= 80) return "High potential lead - prioritize follow-up";
  if (score >= 60) return "Medium potential lead - engage further";
  return "Low potential lead - nurture over time";
};

const getScoreIcon = (score: number) => {
  if (score >= 80) return <CircleCheck className="h-5 w-5 text-emerald-500" />;
  if (score >= 60) return <BarChart4 className="h-5 w-5 text-amber-500" />;
  return <CircleX className="h-5 w-5 text-rose-500" />;
};

const getStars = (weight: number) => {
  const stars = [];
  const fullStars = Math.floor(weight);
  const hasHalfStar = weight % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-4 w-4 inline text-amber-500 fill-amber-500" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 inline text-amber-500 fill-amber-500" />);
  }
  return stars;
};

const getImpactIcon = (impact: string) => {
  switch (impact) {
    case "positive":
      return <TrendingUp className="h-4 w-4 text-emerald-500" />;
    case "negative":
      return <TrendingDown className="h-4 w-4 text-rose-500" />;
    default:
      return <Minus className="h-4 w-4 text-slate-400" />;
  }
};

export function LeadScoreTooltip({ score, factors }: LeadScoreTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1.5 cursor-help group">
            <div className="relative w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <HelpCircle className="h-3.5 w-3.5 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
            <span className={cn("font-medium transition-colors", getScoreColor(score))}>
              {score}%
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="w-[380px] p-0 shadow-lg overflow-hidden border-border/50">
          {/* Tooltip header with gradient */}
          <div className={cn("py-3 px-4 text-white bg-gradient-to-r", getScoreGradient(score))}>
            <div className="flex items-center gap-2 mb-2">
              {getScoreIcon(score)}
              <h3 className="font-medium">Lead Conversion Potential</h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/90">Based on AI analysis</p>
              <span className="text-2xl font-bold">{score}%</span>
            </div>
          </div>

          <div className="p-4 space-y-4 bg-white">
            {/* Progress bar */}
            <div>
              <Progress 
                value={score} 
                className={cn("h-2.5 bg-slate-100", score >= 80 ? "bg-emerald-100" : score >= 60 ? "bg-amber-100" : "bg-rose-100")} 
              />
              <div className={cn(
                "text-sm p-2 mt-2 rounded-md border", 
                getScoreBackground(score), 
                getScoreColor(score)
              )}>
                {getScoreText(score)}
              </div>
            </div>
            
            {/* Influence factors */}
            <div>
              <p className="font-medium mb-2 text-sm flex items-center">
                <BarChart4 className="h-4 w-4 mr-1.5 text-slate-400" />
                Key Influence Factors
              </p>
              <div className="space-y-3 rounded-md p-3 bg-slate-50 border border-slate-100">
                {factors.map((factor, index) => (
                  <div key={index} className="text-sm group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex items-center font-medium text-slate-700 group-hover:text-primary transition-colors">
                        {getImpactIcon(factor.impact)}
                        <span className="ml-2">{factor.factor}</span>
                      </span>
                      <span>
                        {getStars(factor.weight)}
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
            
            {/* Info footer */}
            <div className="text-xs bg-slate-50 mx-[-16px] mb-[-16px] mt-2 p-3 border-t border-slate-100">
              <p className="text-slate-600">
                <strong className="font-medium text-slate-700">Why this matters:</strong> Higher lead scores correlate with faster sales cycles 
                and higher close rates, helping you focus on leads most likely to convert.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}