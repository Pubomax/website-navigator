import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

// Main pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Solutions from "@/pages/solutions";
import CaseStudies from "@/pages/case-studies";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import FAQ from "@/pages/faq";
import AdminDashboard from "@/pages/admin";

// Regional pages
import Ontario from "@/pages/regions/ontario";
import BritishColumbia from "@/pages/regions/british-columbia";
import Quebec from "@/pages/regions/quebec";
import Alberta from "@/pages/regions/alberta";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Switch>
          {/* Main Routes */}
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/faq" component={FAQ} />
          <Route path="/admin" component={AdminDashboard} />

          {/* Regional Routes */}
          <Route path="/regions/ontario" component={Ontario} />
          <Route path="/regions/british-columbia" component={BritishColumbia} />
          <Route path="/regions/quebec" component={Quebec} />
          <Route path="/regions/alberta" component={Alberta} />

          {/* French Routes - main paths */}
          <Route path="/fr" component={Home} />
          <Route path="/fr/about" component={About} />
          <Route path="/fr/services" component={Services} />
          <Route path="/fr/solutions" component={Solutions} />
          <Route path="/fr/case-studies" component={CaseStudies} />
          <Route path="/fr/blog" component={Blog} />
          <Route path="/fr/contact" component={Contact} />
          <Route path="/fr/privacy" component={Privacy} />
          <Route path="/fr/terms" component={Terms} />
          <Route path="/fr/faq" component={FAQ} />

          {/* French Routes - regional paths */}
          <Route path="/fr/regions/ontario" component={Ontario} />
          <Route path="/fr/regions/colombie-britannique" component={BritishColumbia} />
          <Route path="/fr/regions/quebec" component={Quebec} />
          <Route path="/fr/regions/alberta" component={Alberta} />

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