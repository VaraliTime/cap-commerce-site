import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Maintenance from "./pages/Maintenance";

// Mode Maintenance activé
const IS_MAINTENANCE = true;

function App() {
  if (IS_MAINTENANCE) {
    return (
      <ErrorBoundary>
        <ThemeProvider defaultTheme="light" switchable={true}>
          <TooltipProvider>
            <Maintenance />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  // Le reste du code est préservé mais non rendu pendant la maintenance
  return null; 
}

export default App;
