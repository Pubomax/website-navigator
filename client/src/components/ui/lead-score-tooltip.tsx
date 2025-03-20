import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Star, StarHalf } from "lucide-react";

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

const getStars = (weight: number) => {
  const stars = [];
  const fullStars = Math.floor(weight);
  const hasHalfStar = weight % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-4 w-4 inline" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="h-4 w-4 inline" />);
  }
  return stars;
};

export function LeadScoreTooltip({ score, factors }: LeadScoreTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 cursor-help">
            <Info className="h-4 w-4" />
            <span className={`font-semibold ${getScoreColor(score)}`}>
              {score}%
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="w-80">
          <div className="space-y-2">
            <p className="font-semibold">Lead Score Analysis</p>
            <div className="space-y-1">
              {factors.map((factor, index) => (
                <div key={index} className="text-sm flex items-center justify-between">
                  <span>{factor.factor}</span>
                  <span className="text-muted-foreground">
                    {getStars(factor.weight)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}