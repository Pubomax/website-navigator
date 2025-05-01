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
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWebPageSchema, serializeSchema } from "@/lib/schema-org";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

// Consultation Form Modal
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default function VelocityPlan() {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const features = [
    "2 Automation Workflows",
    "1 API Integration",
    "Form-to-Email Automation",
    "Lead Capture Systems",
    "Monthly Reports",
    "Email Support",
    "14-Day Implementation"
  ];
  
  const idealFor = [
    "Micro businesses (1-10 employees)",
    "Startups looking for quick wins",
    "Businesses with limited budgets",
    "Service-based businesses",
    "Local businesses in Montreal"
  ];
  
  const benefits = [
    {
      title: "Faster Results",
      description: "Start seeing efficiency gains within just 2 weeks of implementation.",
      icon: Zap
    },
    {
      title: "More Free Time",
      description: "Save 5-10 hours per week by automating repetitive tasks.",
      icon: Clock
    },
    {
      title: "Better Lead Management",
      description: "Never miss a lead with automated capture and follow-up.",
      icon: Users
    },
    {
      title: "Increased Revenue",
      description: "Grow your business with more effective follow-up processes.",
      icon: BarChart2
    }
  ];
  
  const testimonials = [
    {
      quote: "The VELOCITY plan helped us automate our email responses and saved me at least 8 hours every week. Worth every penny!",
      author: "Sophie Martin",
      position: "Owner, Petit Café Montreal"
    },
    {
      quote: "As a solo entrepreneur, I was drowning in admin work. The form-to-email automation alone paid for itself in the first month.",
      author: "Jean Tremblay",
      position: "Independent Consultant"
    }
  ];
  
  const faqs = [
    {
      question: "How quickly can I get started with the VELOCITY plan?",
      answer: "We can have your first automation workflow up and running within 7 business days after our initial consultation call."
    },
    {
      question: "What is included in the monthly fee?",
      answer: "Your $500/month fee includes implementation of 2 automation workflows, 1 API integration, form-to-email automation, lead capture systems, monthly performance reports, and email support."
    },
    {
      question: "Do I need any technical knowledge to use this plan?",
      answer: "No technical knowledge is required. Our team handles all the technical setup and provides you with simple interfaces to manage your automation."
    },
    {
      question: "Can I upgrade to a different plan later?",
      answer: "Yes! You can easily upgrade to our ACCELERATE or DOMINATE plans as your business grows. We'll apply your existing automations to the new plan."
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
            title: "VELOCITY Plan - $500/month Automation Solution | Minecore Group",
            description: "Get started with AI automation for just $500/month. Our VELOCITY plan includes 2 automation workflows, lead capture, and more. Save time and increase revenue.",
            url: "https://minecoregroup.com/plans/velocity",
            imageUrl: "https://minecoregroup.com/images/velocity-plan.png"
          }))}
        </script>
      </Helmet>
      
      <PageTitle 
        pageKey="velocity" 
        customTitle="VELOCITY Plan - $500/month Starter Automation" 
        customDescription="Start automating your business with our affordable VELOCITY plan. Just $500/month for 2 automation workflows, lead capture systems, and more. Ideal for small businesses in Montreal."
      />
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            <Zap className="mr-1 h-4 w-4" />
            <span>VELOCITY Plan</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Start Automating<br />
            <span className="text-indigo-600">For Just $500/Month</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Get your business running on autopilot with our affordable starter plan. 
            Save time, increase revenue, and work less - starting in just 14 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Get Started Now
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="VELOCITY"
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
        
        <Card className="border-2 border-indigo-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b">
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl font-bold">VELOCITY</span>
              <span className="text-3xl font-bold text-indigo-600">$500<span className="text-base text-gray-500">/month</span></span>
            </CardTitle>
            <CardDescription className="text-base">
              Perfect for small businesses ready to automate
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
            <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">
              <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
                <DialogTrigger className="w-full h-full">
                  Get Started Now
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <ConsultationForm 
                    onSuccess={() => setIsFormOpen(false)}
                    preselectedPlan="VELOCITY"
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
      
      {/* Benefits Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How VELOCITY Will Transform Your Business</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Our starter automation plan is designed to give you immediate time savings 
            and revenue growth with minimal investment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
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
              Our VELOCITY plan is specifically designed for these types of businesses:
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
          Success Stories from VELOCITY Clients
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-indigo-50 border-none">
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
            Everything you need to know about the VELOCITY automation plan
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
      <section className="bg-indigo-600 text-white rounded-2xl p-8 md:p-12">
        <div className="md:flex items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Ready to start automating?</h2>
            <p className="text-indigo-100 mt-2 text-lg">
              Get started with VELOCITY for just $500/month and start saving time today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Get Started Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <ConsultationForm 
                  onSuccess={() => setIsFormOpen(false)}
                  preselectedPlan="VELOCITY"
                />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-indigo-700" asChild>
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