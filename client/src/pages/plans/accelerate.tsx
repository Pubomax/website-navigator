import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { 
  CheckCircle2, 
  ChevronRight, 
  Zap, 
  Clock, 
  Users, 
  BarChart2, 
  Inbox,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWebPageSchema, serializeSchema } from "@/lib/schema-org";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

// Consultation Form Modal
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default function AcceleratePlan() {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const features = [
    "5 Automation Workflows",
    "3 API Integrations",
    "CRM Integration",
    "Email Marketing Automation",
    "Lead Scoring System",
    "Weekly Reports",
    "Priority Email & Chat Support",
    "10-Day Implementation"
  ];
  
  const idealFor = [
    "Small businesses (11-50 employees)",
    "Businesses with established customer base",
    "Companies looking to scale operations",
    "Sales-focused organizations",
    "Montreal businesses with growth objectives"
  ];
  
  const benefits = [
    {
      title: "Faster Growth",
      description: "Scale your business operations without adding headcount.",
      icon: Zap
    },
    {
      title: "Enhanced Productivity",
      description: "Save 15-20 hours per week with advanced automation workflows.",
      icon: Clock
    },
    {
      title: "Higher Conversion Rates",
      description: "Convert more leads to customers with intelligent nurturing sequences.",
      icon: Users
    },
    {
      title: "Increased Revenue",
      description: "Boost your monthly revenue by 20-30% through optimized sales processes.",
      icon: BarChart2
    }
  ];
  
  const testimonials = [
    {
      quote: "Since implementing the ACCELERATE plan, our sales team is spending 70% less time on administrative tasks and 70% more time talking to qualified prospects.",
      author: "Marc Leblanc",
      position: "Sales Director, TechSolutions Montreal"
    },
    {
      quote: "The CRM integration and email marketing automation have completely transformed how we engage with customers. We're seeing a 28% increase in repeat business.",
      author: "Isabelle Tremblay",
      position: "Marketing Manager, Boutique Retail Chain"
    }
  ];
  
  const faqs = [
    {
      question: "How long does it take to implement the ACCELERATE plan?",
      answer: "We can have your automation workflows fully implemented within 10 business days. This includes all integrations, workflow setup, and initial training for your team."
    },
    {
      question: "What makes ACCELERATE different from the VELOCITY plan?",
      answer: "ACCELERATE includes more advanced automations (5 vs 2), deeper integrations with your existing tools, CRM integration, email marketing automation, lead scoring, and priority support. It's designed for businesses that are ready to scale their operations."
    },
    {
      question: "Will this work with our existing CRM and tools?",
      answer: "Yes! We integrate with all major CRM platforms including Salesforce, HubSpot, Zoho, and more. Our team will ensure all your existing tools work seamlessly with your new automation workflows."
    },
    {
      question: "Can we customize the automation workflows?",
      answer: "Absolutely. All workflows are custom built to your specific business processes. We work closely with your team to understand your needs and design automations that fit your exact requirements."
    }
  ];
  
  const handleOpenChange = (open: boolean) => {
    setIsFormOpen(open);
  };
  
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      <Helmet>
        <script type="application/ld+json">
          {serializeSchema(generateWebPageSchema({
            title: "ACCELERATE Plan - $1,500/month Advanced Automation | Minecore Group",
            description: "Scale your business with our ACCELERATE plan at $1,500/month. Get 5 automation workflows, CRM integration, email marketing automation, and more. Increase revenue by 20-30%.",
            url: "https://minecoregroup.com/plans/accelerate",
            imageUrl: "https://minecoregroup.com/images/accelerate-plan.png"
          }))}
        </script>
      </Helmet>
      
      <PageTitle 
        pageKey="accelerate" 
        customTitle="ACCELERATE Plan - $1,500/month Advanced Automation" 
        customDescription="Scale your business operations with our comprehensive ACCELERATE plan. Get 5 custom automation workflows, CRM integration, lead scoring, and more for $1,500/month. Ideal for growing businesses in Montreal."
      />
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <Zap className="mr-1 h-4 w-4" />
            <span>ACCELERATE Plan</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Scale Your Business<br />
            <span className="text-blue-600">With Advanced Automation</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Transform your business operations with an advanced automation system that 
            boosts sales, enhances customer engagement, and gives you more time to focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="ACCELERATE"
                />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/consultation">
                Schedule a Call
                <Phone className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <Card className="border-2 border-blue-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl font-bold">ACCELERATE</span>
              <span className="text-3xl font-bold text-blue-600">$1,500<span className="text-base text-gray-500">/month</span></span>
            </CardTitle>
            <CardDescription className="text-base">
              The complete automation solution for growing businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-4 bg-gray-50 rounded-b-lg -mx-6 px-6 py-4 mt-4">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
              <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
                <DialogTrigger className="w-full h-full">
                  Get Started Now
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <ConsultationForm 
                    onSuccess={() => setIsFormOpen(false)}
                    preselectedPlan="ACCELERATE"
                  />
                </DialogContent>
              </Dialog>
            </Button>
            <p className="text-center text-sm text-gray-500">
              No long-term contract, cancel anytime
            </p>
          </CardFooter>
        </Card>
      </section>
      
      {/* Comparison Section */}
      <section className="py-12 bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Upgrade to ACCELERATE?</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            See how ACCELERATE delivers more value compared to our entry-level VELOCITY plan
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left bg-gray-100">Feature</th>
                <th className="py-4 px-6 text-center bg-indigo-50">VELOCITY <span className="text-sm font-normal">($500/mo)</span></th>
                <th className="py-4 px-6 text-center bg-blue-50">ACCELERATE <span className="text-sm font-normal">($1,500/mo)</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Automation Workflows</td>
                <td className="py-3 px-6 text-center">2</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">5</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">API Integrations</td>
                <td className="py-3 px-6 text-center">1</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">3</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">CRM Integration</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">✓</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Email Marketing Automation</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">✓</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Lead Scoring</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">✓</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Support Level</td>
                <td className="py-3 px-6 text-center">Email Only</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">Priority Email & Chat</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Implementation Time</td>
                <td className="py-3 px-6 text-center">14 Days</td>
                <td className="py-3 px-6 text-center font-bold text-blue-600">10 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/plans/velocity">
            <Button variant="outline" size="sm" className="mr-2">
              View VELOCITY Plan
            </Button>
          </Link>
          <Link href="/plans/dominate">
            <Button variant="outline" size="sm">
              View DOMINATE Plan
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How ACCELERATE Will Transform Your Business</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Our advanced automation plan is designed to boost productivity, 
            increase sales conversions, and fuel business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Ideal For Section */}
      <section className="py-12 bg-gray-50 rounded-2xl p-8">
        <div className="md:flex items-start gap-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Perfect For</h2>
            <p className="text-gray-600 mt-4">
              Our ACCELERATE plan is specifically designed for these types of businesses:
            </p>
          </div>
          
          <div className="md:w-2/3">
            <ul className="grid md:grid-cols-2 gap-4">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Success Stories from ACCELERATE Clients
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-blue-50 border-none">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex-1">
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4">
            Everything you need to know about the ACCELERATE automation plan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
        <div className="md:flex items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Ready to accelerate your business?</h2>
            <p className="text-blue-100 mt-2 text-lg">
              Start transforming your operations with powerful automation tools.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Started Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="ACCELERATE"
                />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-blue-700" asChild>
              <Link href="/consultation">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}