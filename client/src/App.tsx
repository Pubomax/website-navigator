import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { ProtectedRoute } from "./lib/protected-route";

// Main pages
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import FAQ from "@/pages/faq";
import Blog from "@/pages/blog";
import CaseStudies from "@/pages/case-studies";

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
      <Header />
      <div className="flex-1 pt-20">
        <Switch>
          {/* Admin Routes - Place these before other routes */}
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin" component={AdminDashboard} />

          {/* Main Routes */}
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/faq" component={FAQ} />
          <Route path="/blog" component={Blog} />
          <Route path="/case-studies" component={CaseStudies} />
          
          {/* Integration Routes - Protected */}
          <Route path="/integrations" component={Integrations} />
          <ProtectedRoute path="/integrations/n8n-guide" component={N8nGuide} />

          {/* Solution Routes */}
          <Route path="/solutions/automated-lead-generation" component={AutomatedLeadGeneration} />
          <Route path="/solutions/smart-nurturing" component={SmartNurturing} />
          <Route path="/solutions/instant-customer-engagement" component={InstantCustomerEngagement} />
          <Route path="/solutions/quick-acquisition" component={QuickAcquisition} />
          
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
          <Route path="/about/story" component={Story} />
          <Route path="/about/team" component={Team} />
          <Route path="/about/mission" component={Mission} />

          {/* French Routes */}
          <Route path="/fr" component={Home} />
          <Route path="/fr/contact" component={Contact} />
          <Route path="/fr/privacy" component={Privacy} />
          <Route path="/fr/terms" component={Terms} />
          <Route path="/fr/faq" component={FAQ} />
          <Route path="/fr/blog" component={Blog} />
          <Route path="/fr/case-studies" component={CaseStudies} />
          
          {/* French Integration Routes - Protected */}
          <Route path="/fr/integrations" component={Integrations} />
          <ProtectedRoute path="/fr/integrations/n8n-guide" component={N8nGuide} />

          {/* French Solution Routes */}
          <Route path="/fr/solutions/automated-lead-generation" component={AutomatedLeadGeneration} />
          <Route path="/fr/solutions/smart-nurturing" component={SmartNurturing} />
          <Route path="/fr/solutions/instant-customer-engagement" component={InstantCustomerEngagement} />
          <Route path="/fr/solutions/quick-acquisition" component={QuickAcquisition} />
          
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
          <Route path="/fr/about/story" component={Story} />
          <Route path="/fr/about/team" component={Team} />
          <Route path="/fr/about/mission" component={Mission} />

          {/* Catch all for 404 */}
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;