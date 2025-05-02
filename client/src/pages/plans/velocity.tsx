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
  Rocket,
  Phone,
  ArrowRight,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWebPageSchema, serializeSchema } from "@/lib/schema-org";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";

// Consultation Form Modal
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger
} from "@/components/ui/dialog";
import { ConsultationForm } from "@/components/forms/consultation-form";

export default function VelocityPlan() {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const features = [
    "2 Automation Workflows",
    "1 API Integration",
    "Lead Capture System",
    "Basic Marketing Automation",
    "Monthly Performance Reports",
    "Email Support",
    "14-Day Implementation"
  ];
  
  const idealFor = [
    "Small businesses (1-10 employees)",
    "New businesses and startups",
    "Solopreneurs and freelancers",
    "Service-based businesses",
    "Local Montreal businesses with limited budgets"
  ];
  
  const benefits = [
    {
      title: "Save Time",
      description: "Automate repetitive tasks and save 5-10 hours per week.",
      icon: Clock
    },
    {
      title: "Increase Leads",
      description: "Never miss a potential customer with automated lead capture.",
      icon: Users
    },
    {
      title: "Grow Revenue",
      description: "Convert more prospects with consistent follow-up sequences.",
      icon: BarChart2
    },
    {
      title: "Affordable Start",
      description: "Begin your automation journey without breaking the bank.",
      icon: Wallet
    }
  ];
  
  const testimonials = [
    {
      quote: "The VELOCITY plan has been a game-changer for our small business. We've automated our lead capture and follow-up process, and it's already paid for itself many times over.",
      author: "Sophie Tremblay",
      position: "Owner, Montreal Boutique Shop"
    },
    {
      quote: "As a solopreneur, I was drowning in admin tasks. The VELOCITY plan automated my client onboarding and follow-up, giving me back 8 hours every week to focus on billable work.",
      author: "Jean Bergeron",
      position: "Independent Consultant"
    }
  ];
  
  const faqs = [
    {
      question: "What kind of tasks can be automated with the VELOCITY plan?",
      answer: "The VELOCITY plan is perfect for automating your lead capture, email follow-ups, appointment scheduling, client onboarding, and other repetitive tasks. We'll work with you to identify the two workflows that will have the biggest impact on your business."
    },
    {
      question: "Do I need technical skills to use these automations?",
      answer: "Not at all! Our team takes care of all the technical setup and implementation. Once your automations are in place, they run in the background with minimal input needed from you."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients start seeing results within the first week of implementation. Time savings are immediate, and revenue improvements typically follow within 2-4 weeks as leads are more effectively captured and nurtured."
    },
    {
      question: "Can I upgrade to a more advanced plan later?",
      answer: "Absolutely! The VELOCITY plan is designed to be a starting point. As your business grows and you see the benefits of automation, you can easily upgrade to our ACCELERATE or DOMINATE plans to expand your automation capabilities."
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
            title: "VELOCITY Plan - $500/month Starter Automation | Minecore Group",
            description: "Start automating your business with our affordable VELOCITY plan at $500/month. Get 2 automation workflows, lead capture system, and more. Save 5-10 hours per week.",
            url: "https://minecoregroup.com/plans/velocity",
            imageUrl: "https://minecoregroup.com/images/velocity-plan.png"
          }))}
        </script>
      </Helmet>
      
      <PageTitle 
        pageKey="velocity" 
        customTitle="VELOCITY Plan - $500/month Starter Automation" 
        customDescription="Get started with AI automation for just $500/month. Our VELOCITY plan includes 2 automation workflows, lead capture systems, and more. Perfect for small Montreal businesses."
      />
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            <Rocket className="mr-1 h-4 w-4" />
            <span>VELOCITY Plan</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Start Automating<br />
            <span className="text-indigo-600">Your Business Today</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Begin your automation journey with an affordable plan that eliminates manual tasks
            and helps you capture more leads with less effort.
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
                <DialogTitle className="text-lg font-bold">
                  Get Started with the VELOCITY Plan
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mb-4">
                  Fill out this form to start your automation journey with our VELOCITY plan.
                </DialogDescription>
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
              The perfect starter automation plan for small businesses
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
            <Dialog open={isFormOpen} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700">
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
            <p className="text-center text-sm text-gray-500">
              No long-term contract, cancel anytime
            </p>
          </CardFooter>
        </Card>
      </section>
      
      {/* Comparison Section */}
      <section className="py-12 bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose VELOCITY?</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            The perfect starting point for your business automation journey
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
                <td className="py-3 px-6 text-center font-bold text-indigo-600">2</td>
                <td className="py-3 px-6 text-center">5</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">API Integrations</td>
                <td className="py-3 px-6 text-center font-bold text-indigo-600">1</td>
                <td className="py-3 px-6 text-center">3</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Lead Capture</td>
                <td className="py-3 px-6 text-center font-bold text-indigo-600">✓</td>
                <td className="py-3 px-6 text-center">✓</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">CRM Integration</td>
                <td className="py-3 px-6 text-center">❌</td>
                <td className="py-3 px-6 text-center">✓</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Email Marketing</td>
                <td className="py-3 px-6 text-center font-bold text-indigo-600">Basic</td>
                <td className="py-3 px-6 text-center">Advanced</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Support Level</td>
                <td className="py-3 px-6 text-center font-bold text-indigo-600">Email Only</td>
                <td className="py-3 px-6 text-center">Priority Email & Chat</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-6 font-medium">Implementation Time</td>
                <td className="py-3 px-6 text-center font-bold text-indigo-600">14 Days</td>
                <td className="py-3 px-6 text-center">10 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/plans/accelerate">
            <Button variant="outline" size="sm" className="mr-2">
              View ACCELERATE Plan
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
          <h2 className="text-3xl font-bold">How VELOCITY Will Transform Your Business</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Even with just two automation workflows, you'll see dramatic improvements in your daily operations
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
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="text-indigo-100 mt-2 text-lg">
              Begin your automation journey with our affordable VELOCITY plan.
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
                <DialogTitle className="text-lg font-bold">
                  Get Started with the VELOCITY Plan
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mb-4">
                  Fill out this form to start your automation journey with our VELOCITY plan.
                </DialogDescription>
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