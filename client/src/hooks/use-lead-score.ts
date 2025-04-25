import { useState, useEffect } from 'react';

interface LeadScoreFactor {
  factor: string;
  impact: "positive" | "negative" | "neutral";
  weight: number;
}

interface LeadData {
  industry?: string;
  businessSize?: string;
  channel?: string;
  serviceInterest?: string;
  budget?: string;
  timeline?: string;
}

export function useLeadScore(leadData: LeadData) {
  const [score, setScore] = useState(0);
  const [factors, setFactors] = useState<LeadScoreFactor[]>([]);

  useEffect(() => {
    // In a real application, this would call an AI service or more complex algorithm
    const calculateScore = () => {
      const newFactors: LeadScoreFactor[] = [];
      let totalScore = 0;
      let maxPossibleScore = 0;

      // Industry weighting
      if (leadData.industry) {
        const highValueIndustries = ["finance", "healthcare", "education", "real_estate", "technology", "manufacturing"];
        const isHighValue = highValueIndustries.includes(leadData.industry);
        
        newFactors.push({
          factor: "Industry",
          impact: isHighValue ? "positive" : "neutral",
          weight: isHighValue ? 5 : 3
        });
        
        totalScore += isHighValue ? 25 : 15;
        maxPossibleScore += 25;
      }

      // Business size
      if (leadData.businessSize) {
        let weight = 3;
        let impact: "positive" | "negative" | "neutral" = "neutral";
        
        if (leadData.businessSize === "enterprise") {
          weight = 5;
          impact = "positive";
        } else if (leadData.businessSize === "mid_market") {
          weight = 4;
          impact = "positive";
        } else if (leadData.businessSize === "small_business") {
          weight = 3;
          impact = "neutral";
        } else if (leadData.businessSize === "startup") {
          weight = 2;
          impact = "negative";
        }
        
        newFactors.push({
          factor: "Business Size",
          impact,
          weight
        });
        
        totalScore += weight * 5;
        maxPossibleScore += 25;
      }

      // Marketing channel
      if (leadData.channel) {
        let weight = 3;
        let impact: "positive" | "negative" | "neutral" = "neutral";
        
        if (["email", "referral"].includes(leadData.channel)) {
          weight = 5;
          impact = "positive";
        } else if (leadData.channel === "paid_search") {
          weight = 4;
          impact = "positive";
        } else if (["organic_search", "social_media"].includes(leadData.channel)) {
          weight = 3;
          impact = "neutral";
        } else if (leadData.channel === "direct") {
          weight = 2;
          impact = "negative";
        }
        
        newFactors.push({
          factor: "Marketing Channel",
          impact,
          weight
        });
        
        totalScore += weight * 5;
        maxPossibleScore += 25;
      }

      // Service interest
      if (leadData.serviceInterest) {
        let weight = 3;
        let impact: "positive" | "negative" | "neutral" = "neutral";
        
        if (["sales_automation", "crm_integration"].includes(leadData.serviceInterest)) {
          weight = 5;
          impact = "positive";
        } else if (["marketing_automation", "business_intelligence"].includes(leadData.serviceInterest)) {
          weight = 4;
          impact = "positive";
        } else if (leadData.serviceInterest === "custom_software") {
          weight = 3;
          impact = "neutral";
        } else if (leadData.serviceInterest === "digital_foundation") {
          weight = 2;
          impact = "negative";
        }
        
        newFactors.push({
          factor: "Service Interest",
          impact,
          weight
        });
        
        totalScore += weight * 5;
        maxPossibleScore += 25;
      }

      // Budget
      if (leadData.budget) {
        let weight = 3;
        let impact: "positive" | "negative" | "neutral" = "neutral";
        
        if (leadData.budget === "enterprise") {
          weight = 5;
          impact = "positive";
        } else if (leadData.budget === "large") {
          weight = 4;
          impact = "positive";
        } else if (leadData.budget === "medium") {
          weight = 3;
          impact = "neutral";
        } else if (leadData.budget === "small") {
          weight = 1;
          impact = "negative";
        }
        
        newFactors.push({
          factor: "Budget",
          impact,
          weight
        });
        
        totalScore += weight * 5;
        maxPossibleScore += 25;
      }

      // Timeline
      if (leadData.timeline) {
        let weight = 3;
        let impact: "positive" | "negative" | "neutral" = "neutral";
        
        if (leadData.timeline === "urgent") {
          weight = 5;
          impact = "positive";
        } else if (leadData.timeline === "short") {
          weight = 4;
          impact = "positive";
        } else if (leadData.timeline === "medium") {
          weight = 3;
          impact = "neutral";
        } else if (leadData.timeline === "long") {
          weight = 1;
          impact = "negative";
        }
        
        newFactors.push({
          factor: "Timeline",
          impact,
          weight
        });
        
        totalScore += weight * 5;
        maxPossibleScore += 25;
      }

      // Calculate percentage
      let percentageScore = 0;
      if (maxPossibleScore > 0) {
        percentageScore = Math.min(Math.round((totalScore / maxPossibleScore) * 100), 100);
      }
      
      setScore(percentageScore);
      setFactors(newFactors);
    };

    calculateScore();
  }, [leadData]);

  return { score, factors };
}
