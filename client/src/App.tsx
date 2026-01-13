import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import TemplateRequest from "@/pages/TemplateRequest";

function Router() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/brochures" component={Gallery} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/request-template" component={TemplateRequest} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

import { LanguageProvider } from "./hooks/use-language";

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
