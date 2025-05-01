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
  Globe,
  Phone,
  Star,
  Award,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWebPageSchema, serializeSchema } from "@/lib/schema-org";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

// Consultation Form Modal
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default function DominatePlan() {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const features = [
    "10+ Custom Automation Workflows",
    "6+ API Integrations",
    "Full CRM Integration",
    "Advanced AI-Driven Marketing",
    "Customer Journey Mapping",
    "Predictive Analytics Dashboard",
    "Dedicated Account Manager",
    "24/7 Priority Support",
    "Weekly Strategy Calls",
    "7-Day Implementation"
  ];
  
  const idealFor = [
    "Medium-sized businesses (50+ employees)",
    "Companies with complex operations",
    "Multi-location businesses",
    "Businesses targeting rapid expansion",
    "Industry leaders in Montreal"
  ];
  
  const benefits = [
    {
      title: "Total Business Transformation",
      description: "Revolutionize your entire business operation with end-to-end automation.",
      icon: Globe
    },
    {
      title: "Maximum Time Savings",
      description: "Save 30+ hours per week with comprehensive automation across departments.",
      icon: Clock
    },
    {
      title: "Enterprise-Level Analytics",
      description: "Gain actionable insights from advanced AI-powered business analytics.",
      icon: TrendingUp
    },
    {
      title: "Dramatic Revenue Growth",
      description: "Our clients see an average 40-60% increase in revenue within 6 months.",
      icon: BarChart2
    },
    {
      title: "Expert Guidance",
      description: "Work directly with automation specialists who understand your industry.",
      icon: Star
    },
    {
      title: "Future-Proof Systems",
      description: "Implement scalable systems that grow with your business needs.",
      icon: ShieldCheck
    }
  ];
  
  const testimonials = [
    {
      quote: "The DOMINATE plan completely transformed our business. We automated our entire customer acquisition and service delivery process, reducing costs by 35% while growing revenue by 52%.",
      author: "Philippe Dumas",
      position: "CEO, Montreal Tech Enterprises"
    },
    {
      quote: "As a business with multiple locations, the custom workflows and predictive analytics have been game-changing. Our sales team now focuses only on high-probability opportunities.",
      author: "Marie Tremblay",
      position: "Operations Director, Retail Chain"
    }
  ];
  
  const faqs = [
    {
      question: "Is the DOMINATE plan really worth the investment?",
      answer: "For businesses with complex operations or growth ambitions, absolutely. Our DOMINATE clients see an average ROI of 300-500% within the first year, with most breaking even on their investment within 3-4 months through increased revenue and operational savings."
    },
    {
      question: "What kind of businesses see the best results with DOMINATE?",
      answer: "Businesses with 50+ employees, multiple departments, or complex sales/service processes see the most dramatic transformation. Industries that particularly benefit include professional services, manufacturing, multi-location retail, and B2B service providers."
    },
    {
      question: "How long does implementation take?",
      answer: "Our expert team can implement the core automation infrastructure within 7 business days. The full suite of 10+ automations is typically rolled out over a 4-week period, with the most impactful systems deployed first."
    },
    {
      question: "What makes DOMINATE different from other plans?",
      answer: "DOMINATE is a complete business transformation package that includes everything in ACCELERATE plus advanced AI-driven marketing, customer journey mapping, predictive analytics, dedicated account management, weekly strategy calls, and more comprehensive automation across your entire business operation."
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
            title: "DOMINATE Plan - $3,500/month Complete Automation Solution | Minecore Group",
            description: "Revolutionize your business with our comprehensive DOMINATE plan. Get 10+ custom automation workflows, AI-driven marketing, predictive analytics, and more. See 40-60% revenue growth.",
            url: "https://minecoregroup.com/plans/dominate",
            imageUrl: "https://minecoregroup.com/images/dominate-plan.png"
          }))}
        </script>
      </Helmet>
      
      <PageTitle 
        pageKey="dominate" 
        customTitle="DOMINATE Plan - Complete Business Transformation" 
        customDescription="Take your business to the next level with our comprehensive DOMINATE plan. Get 10+ custom automation workflows, AI-driven marketing, predictive analytics, and a dedicated account manager. See dramatic revenue growth of 40-60% within months."
      />
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            <Award className="mr-1 h-4 w-4" />
            <span>DOMINATE Plan</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Transform Your Business<br />
            <span className="text-purple-600">With Complete Automation</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            The ultimate business automation solution for companies ready to 
            revolutionize their operations and dramatically increase revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="DOMINATE"
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
        
        <Card className="border-2 border-purple-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b">
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl font-bold">DOMINATE</span>
              <span className="text-3xl font-bold text-purple-600">$3,500<span className="text-base text-gray-500">/month</span></span>
            </CardTitle>
            <CardDescription className="text-base">
              Complete business transformation through advanced automation
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
            <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
              <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
                <DialogTrigger className="w-full h-full">
                  Get Started Now
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <ConsultationForm 
                    onSuccess={() => setIsFormOpen(false)}
                    preselectedPlan="DOMINATE"
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
          <h2 className="text-3xl font-bold">Why Choose DOMINATE?</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            See how our premium plan compares to other offerings
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left bg-gray-100">Feature</th>
                <th className="py-4 px-6 text-center bg-indigo-50">VELOCITY <span className="text-sm font-normal">($500/mo)</span></th>
                <th className="py-4 px-6 text-center bg-blue-50">ACCELERATE <span className="text-sm font-normal">($1,500/mo)</span></th>
                <th className="py-4 px-6 text-center bg-purple-50">DOMINATE <span className="text-sm font-normal">($3,500/mo)</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Automation Workflows</td>
                <td className="py-3 px-6 text-center">2</td>
                <td className="py-3 px-6 text-center">5</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">10+</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">API Integrations</td>
                <td className="py-3 px-6 text-center">1</td>
                <td className="py-3 px-6 text-center">3</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">6+</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">CRM Integration</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center">✓</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">Full Enterprise</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Marketing Automation</td>
                <td className="py-3 px-6 text-center">Basic</td>
                <td className="py-3 px-6 text-center">Advanced</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">AI-Driven</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Analytics</td>
                <td className="py-3 px-6 text-center">Monthly Reports</td>
                <td className="py-3 px-6 text-center">Weekly Reports</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">Predictive Dashboard</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Support Level</td>
                <td className="py-3 px-6 text-center">Email Only</td>
                <td className="py-3 px-6 text-center">Priority Email & Chat</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">24/7 + Dedicated Manager</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Strategy Calls</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center">Monthly</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">Weekly</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Implementation Time</td>
                <td className="py-3 px-6 text-center">14 Days</td>
                <td className="py-3 px-6 text-center">10 Days</td>
                <td className="py-3 px-6 text-center font-bold text-purple-600">7 Days</td>
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
          <Link href="/plans/accelerate">
            <Button variant="outline" size="sm">
              View ACCELERATE Plan
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How DOMINATE Will Transform Your Business</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Our premium automation plan is designed to revolutionize every aspect of your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-purple-600" />
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
              Our DOMINATE plan is specifically designed for these types of businesses:
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
          Success Stories from DOMINATE Clients
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-purple-50 border-none">
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
            Everything you need to know about the DOMINATE automation plan
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
      <section className="bg-purple-600 text-white rounded-2xl p-8 md:p-12">
        <div className="md:flex items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Ready to dominate your industry?</h2>
            <p className="text-purple-100 mt-2 text-lg">
              Start transforming your business with our most comprehensive automation solution.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Get Started Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="DOMINATE"
                />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-purple-700" asChild>
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