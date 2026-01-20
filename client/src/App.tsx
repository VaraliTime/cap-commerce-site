import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Bloc1 from "./pages/Bloc1";
import Bloc2 from "./pages/Bloc2";
import Bloc3 from "./pages/Bloc3";
import Ressources from "./pages/Ressources";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bloc1"} component={Bloc1} />
      <Route path={"/bloc2"} component={Bloc2} />
      <Route path={"/bloc3"} component={Bloc3} />
      <Route path={"/ressources"} component={Ressources} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
