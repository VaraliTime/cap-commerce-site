import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Chatbot } from "./components/Chatbot";
import Home from "./pages/Home";
import Bloc1 from "./pages/Bloc1";
import Bloc2 from "./pages/Bloc2";
import Bloc3 from "./pages/Bloc3";
import Bloc4 from "./pages/Bloc4";
import Ressources from "./pages/Ressources";
import Cadencier from "./pages/Cadencier";
import PlansMasse from "./pages/PlanseMasse";
import Videos from "./pages/Videos";
import QuizPage from "./pages/QuizPage";
import SchemasPage from "./pages/SchemasPage";
import ReferentielPage from "./pages/ReferentielPage";
import Podcasts from "./pages/Podcasts";
import MiniJeux from "./pages/MiniJeux";
import Glossaire from "./pages/Glossaire";
import SimulateurOral from "./pages/SimulateurOral";
import DossierPro from "./pages/DossierPro";
import FichesPerso from "./pages/FichesPerso";
import Dashboard from "./pages/Dashboard";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/bloc1"} component={Bloc1} />
      <Route path={"/bloc2"} component={Bloc2} />
      <Route path={"/bloc3"} component={Bloc3} />
      <Route path={"/bloc4"} component={Bloc4} />
      <Route path={"/ressources"} component={Ressources} />
      <Route path={"/cadencier"} component={Cadencier} />
      <Route path={"/plans-masse"} component={PlansMasse} />
      <Route path={"/videos"} component={Videos} />
      <Route path={"/podcasts"} component={Podcasts} />
      <Route path={"/mini-jeux"} component={MiniJeux} />
      <Route path={"/glossaire"} component={Glossaire} />
      <Route path={"/simulateur-oral"} component={SimulateurOral} />
      <Route path={"/dossier-pro"} component={DossierPro} />
      <Route path={"/fiches-perso"} component={FichesPerso} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/quiz"} component={QuizPage} />
      <Route path={"/quiz/:blocId"} component={QuizPage} />
      <Route path={"/schemas"} component={SchemasPage} />
      <Route path={"/referentiel"} component={ReferentielPage} />
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
          <Chatbot />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
