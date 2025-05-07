import React, { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { ProtectedRoute } from "./lib/protected-route";
import { Helmet } from "react-helmet";
import { useAnalytics } from "@/hooks/use-analytics";
import { SkipLink } from "@/components/ui/skip-link";
import { ResourceHints } from "@/components/ui/resource-hints";
import { initFocusVisibility } from "@/lib/focus-management";
import ChatWidget from "@/components/ChatWidget";

// Main pages
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Consultation from "@/pages/consultation";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import FAQ from "@/pages/faq";
import Blog from "@/pages/blog";
import CaseStudies from "@/pages/case-studies";
import Solutions from "@/pages/solutions";
import About from "@/pages/about";
import Careers from "@/pages/careers";

// Plan pages
import VelocityPlan from "@/pages/plans/velocity";
import AcceleratePlan from "@/pages/plans/accelerate";
import DominatePlan from "@/pages/plans/dominate";

// Integration pages
import Integrations from "@/pages/integrations";
import N8nGuide from "@/pages/integrations/n8n-guide";

// Service pages
import DigitalFoundation from "@/pages/services/digital-foundation";
import TransformationConsulting from "@/pages/services/transformation-consulting";
import AIAutomationStarter from "@/pages/services/ai-automation-starter";
import CustomAIAutomation from "@/pages/services/custom-ai-automation";
import CustomSoftware from "@/pages/services/custom-software";
import IntelligentSupport from "@/pages/services/intelligent-support";
import SalesAutomation from "@/pages/services/sales-automation";
import MarketingAutomation from "@/pages/services/marketing-automation";

// Solution pages
import AutomatedLeadGeneration from "@/pages/solutions/automated-lead-generation";
import SmartNurturing from "@/pages/solutions/smart-nurturing";
import InstantCustomerEngagement from "@/pages/solutions/instant-customer-engagement";
import QuickAcquisition from "@/pages/solutions/quick-acquisition";

// Sector pages
import Manufacturing from "@/pages/sectors/manufacturing";
import Finance from "@/pages/sectors/finance";
import Retail from "@/pages/sectors/retail";
import Healthcare from "@/pages/sectors/healthcare";
import PublicSector from "@/pages/sectors/public-sector";

// Business Type pages
import MicroEnterprises from "@/pages/business-types/micro";
import MidSizedEnterprises from "@/pages/business-types/mid-sized";
import LargeEnterprises from "@/pages/business-types/large";

// Region pages
import Ontario from "@/pages/regions/ontario";
import BritishColumbia from "@/pages/regions/british-columbia";
import Alberta from "@/pages/regions/alberta";
import Quebec from "@/pages/regions/quebec";

// Company pages
import Story from "@/pages/about/story";
import Team from "@/pages/about/team";
import Mission from "@/pages/about/mission";

// Admin pages
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Header />
      <div id="main-content" className="flex-1 pt-20">
        <Switch>
          {/* Admin Routes - Place these before other routes */}
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin" component={AdminDashboard} />

          {/* Main Routes */}
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/consultation" component={Consultation} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/faq" component={FAQ} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id">
            {(params) => {
              const BlogPostDetail = React.lazy(() => import('@/pages/blog/[id]'));
              return (
                <React.Suspense fallback={<div className="container py-24">Loading...</div>}>
                  <BlogPostDetail />
                </React.Suspense>
              );
            }}
          </Route>
          <Route path="/case-studies" component={CaseStudies} />
          
          {/* Integration Routes - Protected */}
          <Route path="/integrations" component={Integrations} />
          <ProtectedRoute path="/integrations/n8n-guide" component={N8nGuide} />

          {/* Solutions Main Page */}
          <Route path="/solutions" component={Solutions} />

          {/* Solution Routes */}
          <Route path="/solutions/automated-lead-generation" component={AutomatedLeadGeneration} />
          <Route path="/solutions/smart-nurturing" component={SmartNurturing} />
          <Route path="/solutions/instant-customer-engagement" component={InstantCustomerEngagement} />
          <Route path="/solutions/quick-acquisition" component={QuickAcquisition} />
          
          {/* Plan Routes */}
          <Route path="/plans/velocity" component={VelocityPlan} />
          <Route path="/plans/accelerate" component={AcceleratePlan} />
          <Route path="/plans/dominate" component={DominatePlan} />
          
          {/* Service Routes */}
          <Route path="/services/digital-foundation" component={DigitalFoundation} />
          <Route path="/services/transformation-consulting" component={TransformationConsulting} />
          <Route path="/services/ai-automation-starter" component={AIAutomationStarter} />
          <Route path="/services/custom-ai-automation" component={CustomAIAutomation} />
          <Route path="/services/custom-software" component={CustomSoftware} />
          <Route path="/services/intelligent-support" component={IntelligentSupport} />
          <Route path="/services/sales-automation" component={SalesAutomation} />
          <Route path="/services/marketing-automation" component={MarketingAutomation} />

          {/* Sector Routes */}
          <Route path="/sectors/manufacturing" component={Manufacturing} />
          <Route path="/sectors/finance" component={Finance} />
          <Route path="/sectors/retail" component={Retail} />
          <Route path="/sectors/healthcare" component={Healthcare} />
          <Route path="/sectors/public-sector" component={PublicSector} />

          {/* Business Type Routes */}
          <Route path="/business-types/micro" component={MicroEnterprises} />
          <Route path="/business-types/mid-sized" component={MidSizedEnterprises} />
          <Route path="/business-types/large" component={LargeEnterprises} />

          {/* Region Routes */}
          <Route path="/regions/ontario" component={Ontario} />
          <Route path="/regions/british-columbia" component={BritishColumbia} />
          <Route path="/regions/alberta" component={Alberta} />
          <Route path="/regions/quebec" component={Quebec} />

          {/* Company Routes */}
          <Route path="/about" component={About} />
          <Route path="/about/story" component={Story} />
          <Route path="/about/team" component={Team} />
          <Route path="/about/mission" component={Mission} />
          <Route path="/careers" component={Careers} />

          {/* French Routes */}
          <Route path="/fr" component={Home} />
          <Route path="/fr/contact" component={Contact} />
          <Route path="/fr/consultation" component={Consultation} />
          <Route path="/fr/privacy" component={Privacy} />
          <Route path="/fr/terms" component={Terms} />
          <Route path="/fr/faq" component={FAQ} />
          <Route path="/fr/blog" component={Blog} />
          <Route path="/fr/blog/:id">
            {(params) => {
              const BlogPostDetail = lazy(() => import('@/pages/blog/[id]'));
              return (
                <Suspense fallback={<div className="container py-24">Loading...</div>}>
                  <BlogPostDetail />
                </Suspense>
              );
            }}
          </Route>
          <Route path="/fr/case-studies" component={CaseStudies} />
          
          {/* French Integration Routes - Protected */}
          <Route path="/fr/integrations" component={Integrations} />
          <ProtectedRoute path="/fr/integrations/n8n-guide" component={N8nGuide} />

          {/* French Solutions Main Page */}
          <Route path="/fr/solutions" component={Solutions} />

          {/* French Solution Routes */}
          <Route path="/fr/solutions/automated-lead-generation" component={AutomatedLeadGeneration} />
          <Route path="/fr/solutions/smart-nurturing" component={SmartNurturing} />
          <Route path="/fr/solutions/instant-customer-engagement" component={InstantCustomerEngagement} />
          <Route path="/fr/solutions/quick-acquisition" component={QuickAcquisition} />
          
          {/* French Plan Routes */}
          <Route path="/fr/plans/velocity" component={VelocityPlan} />
          <Route path="/fr/plans/accelerate" component={AcceleratePlan} />
          <Route path="/fr/plans/dominate" component={DominatePlan} />
          
          {/* French Service Routes */}
          <Route path="/fr/services/digital-foundation" component={DigitalFoundation} />
          <Route path="/fr/services/transformation-consulting" component={TransformationConsulting} />
          <Route path="/fr/services/ai-automation-starter" component={AIAutomationStarter} />
          <Route path="/fr/services/custom-ai-automation" component={CustomAIAutomation} />
          <Route path="/fr/services/custom-software" component={CustomSoftware} />
          <Route path="/fr/services/intelligent-support" component={IntelligentSupport} />
          <Route path="/fr/services/sales-automation" component={SalesAutomation} />
          <Route path="/fr/services/marketing-automation" component={MarketingAutomation} />

          {/* French Sector Routes */}
          <Route path="/fr/sectors/manufacturing" component={Manufacturing} />
          <Route path="/fr/sectors/finance" component={Finance} />
          <Route path="/fr/sectors/retail" component={Retail} />
          <Route path="/fr/sectors/healthcare" component={Healthcare} />
          <Route path="/fr/sectors/public-sector" component={PublicSector} />

          {/* French Business Type Routes */}
          <Route path="/fr/business-types/micro" component={MicroEnterprises} />
          <Route path="/fr/business-types/mid-sized" component={MidSizedEnterprises} />
          <Route path="/fr/business-types/large" component={LargeEnterprises} />

          {/* French Region Routes */}
          <Route path="/fr/regions/ontario" component={Ontario} />
          <Route path="/fr/regions/british-columbia" component={BritishColumbia} />
          <Route path="/fr/regions/alberta" component={Alberta} />
          <Route path="/fr/regions/quebec" component={Quebec} />

          {/* French Company Routes */}
          <Route path="/fr/about" component={About} />
          <Route path="/fr/about/story" component={Story} />
          <Route path="/fr/about/team" component={Team} />
          <Route path="/fr/about/mission" component={Mission} />
          <Route path="/fr/careers" component={Careers} />

          {/* Catch all for 404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  // Use optimized analytics loading
  useAnalytics();
  
  // Initialize accessibility features
  useEffect(() => {
    // Set up focus visibility for keyboard navigation
    initFocusVisibility();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        {/* Meta tags for SEO and proper rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Font display swap for improved CLS */}
        {/* Meta description with action-oriented text and clear value proposition */}
        <meta
          name="description"
          content="Transform your business with AI automation solutions that save time and boost revenue. Our custom digital solutions help you grow while working less."
        />
      </Helmet>
      
      {/* Add resource hints for performance optimization */}
      <ResourceHints />
      
      <Router />
      <CookieConsent />
      <Toaster />
      <ChatWidget />
    </QueryClientProvider>
  );
}

export default App;