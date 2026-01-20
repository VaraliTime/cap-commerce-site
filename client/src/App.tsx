import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Chatbot } from "./components/Chatbot";
import { MaintenanceOverlay } from "./components/MaintenanceOverlay";
import { WelcomePopup } from "./components/WelcomePopup";
import Home from "./pages/Home";
import Bloc1 from "./pages/Bloc1";
import Bloc2 from "./pages/Bloc2";
import Bloc3 from "./pages/Bloc3";
import Bloc4 from "./pages/Bloc4";
import Outils from "./pages/Outils";
import Annales from "./pages/Annales";
import Videos from "./pages/Videos";
import Ressources from "./pages/Ressources";
import Cadencier from "./pages/Cadencier";
import PlansMasse from "./pages/PlanseMasse";
import Examens from "./pages/Examens";
import Ateliers from "./pages/Ateliers";

import QuizPage from "./pages/QuizPage";
import SchemasPage from "./pages/SchemasPage";
import ReferentielPage from "./pages/ReferentielPage";
import Podcasts from "./pages/Podcasts";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bloc1"} component={Bloc1} />
      <Route path={"/bloc2"} component={Bloc2} />
      <Route path={"/bloc3"} component={Bloc3} />
          <Route path="/bloc4" component={Bloc4} />
      <Route path="/ressources" component={Ressources} />
      <Route path="/outils" component={Outils} />
      <Route path="/annales" component={Annales} />
      <Route path="/videos" component={Videos} />
      <Route path={"/cadencier"} component={Cadencier} />
      <Route path={"/plans-masse"} component={PlansMasse} />
      <Route path={"/examens"} component={Examens} />
      <Route path={"/ateliers"} component={Ateliers} />
  
      <Route path={"/quiz"} component={QuizPage} />
      <Route path={"/quiz/:blocId"} component={QuizPage} />
      <Route path={"/schemas"} component={SchemasPage} />
      <Route path={"/referentiel"} component={ReferentielPage} />
      <Route path={"/podcasts"} component={Podcasts} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Logique temporelle (20 Janvier 2026)
  const now = new Date();
  const maintenanceEnd = new Date('2026-01-20T19:00:00');
  const welcomeEnd = new Date('2026-01-21T00:00:00');
  
  const isMaintenance = now < maintenanceEnd;
  const showWelcome = now >= maintenanceEnd && now < welcomeEnd;

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          {isMaintenance && <MaintenanceOverlay />}
          {showWelcome && <WelcomePopup />}
          <Toaster />
          <Router />
          {!isMaintenance && <Chatbot />}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
