import NotFound from "./pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import './i18n'; // Import i18n configuration
import { Toaster } from "sonner";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/quote"} component={Quote} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light">        
            <ScrollToTop />
            <Router />
            <Toaster position="top-right" />
        </ThemeProvider>
      </ErrorBoundary>
  );
}

export default App;
