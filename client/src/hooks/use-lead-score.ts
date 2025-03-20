import { useState, useEffect } from 'react';

interface LeadScoreFactor {
  factor: string;
  impact: "positive" | "negative" | "neutral";
  weight: number;
}

interface LeadData {
  email?: string;
  company?: string;
  jobTitle?: string;
  lastVisit?: Date;
  visitFrequency?: number;
  pagesViewed?: string[];
  downloadedResources?: string[];
  emailInteractions?: number;
}

export function useLeadScore(leadData: LeadData) {
  const [score, setScore] = useState(0);
  const [factors, setFactors] = useState<LeadScoreFactor[]>([]);

  useEffect(() => {
    // This is a simplified scoring algorithm
    // In a real application, this would call an AI service
    const calculateScore = () => {
      const newFactors: LeadScoreFactor[] = [];
      let totalScore = 0;

      // Email domain check
      if (leadData.email) {
        const domain = leadData.email.split('@')[1];
        const isCorporate = !domain?.includes('gmail.com') && !domain?.includes('yahoo.com');
        newFactors.push({
          factor: "Corporate Email",
          impact: isCorporate ? "positive" : "neutral",
          weight: isCorporate ? 4 : 2
        });
        totalScore += isCorporate ? 20 : 10;
      }

      // Job title relevance
      if (leadData.jobTitle) {
        const isDecisionMaker = /director|manager|head|chief|owner|founder/i.test(leadData.jobTitle);
        newFactors.push({
          factor: "Decision Maker Role",
          impact: isDecisionMaker ? "positive" : "neutral",
          weight: isDecisionMaker ? 5 : 3
        });
        totalScore += isDecisionMaker ? 25 : 15;
      }

      // Engagement scoring
      if (leadData.visitFrequency && leadData.visitFrequency > 3) {
        newFactors.push({
          factor: "Frequent Visitor",
          impact: "positive",
          weight: 4
        });
        totalScore += 20;
      }

      // Resource downloads
      if (leadData.downloadedResources?.length) {
        newFactors.push({
          factor: "Downloaded Resources",
          impact: "positive",
          weight: 4
        });
        totalScore += leadData.downloadedResources.length * 5;
      }

      // Email engagement
      if (leadData.emailInteractions) {
        newFactors.push({
          factor: "Email Engagement",
          impact: "positive",
          weight: 3
        });
        totalScore += leadData.emailInteractions * 5;
      }

      // Normalize score to 0-100
      totalScore = Math.min(Math.max(totalScore, 0), 100);

      setScore(Math.round(totalScore));
      setFactors(newFactors);
    };

    calculateScore();
  }, [leadData]);

  return { score, factors };
}
