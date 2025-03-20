import { useLeadScore } from "@/hooks/use-lead-score";
import { LeadScoreTooltip } from "@/components/ui/lead-score-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Lead Score Demo
          <LeadScoreTooltip score={score} factors={factors} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p><strong>Email:</strong> {demoLead.email}</p>
          <p><strong>Company:</strong> {demoLead.company}</p>
          <p><strong>Job Title:</strong> {demoLead.jobTitle}</p>
          <p><strong>Visit Frequency:</strong> {demoLead.visitFrequency} times</p>
          <p><strong>Downloaded Resources:</strong> {demoLead.downloadedResources.length}</p>
          <p><strong>Email Interactions:</strong> {demoLead.emailInteractions}</p>
        </div>
      </CardContent>
    </Card>
  );
}
