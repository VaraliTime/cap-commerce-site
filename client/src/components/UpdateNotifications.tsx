import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { X, Bell, Rocket, Sparkles, ShieldCheck, Zap } from "lucide-react";

const updates = [
  {
    version: "v5.2",
    date: "22 Janvier 2026",
    title: "MEGA OPTIMISATION & SCHÉMAS",
    description: "L'expérience d'apprentissage ultime est arrivée.",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    details: [
      "📊 Nouveaux schémas pédagogiques interactifs (Flux logistique, Niveaux de vente, Entonnoir)",
      "🚀 Mode Expert : Synthèses approfondies pour chaque bloc de compétences",
      "⚡ Système Anti-Cache : Chargement instantané des dernières données",
      "💎 Design Premium : Interface Glassmorphism et animations fluides"
    ]
  },
  {
    version: "v4.0",
    date: "21 Janvier 2026",
    title: "MULTIMÉDIA & ACCESSIBILITÉ",
    description: "Le site devient une plateforme multimédia ouverte.",
    icon: <Rocket className="w-5 h-5 text-emerald-500" />,
    details: [
      "📺 Intégration de vidéos pédagogiques YouTube dans chaque leçon",
      "🔓 Suppression totale de la création de compte (Accès libre)",
      "💡 Ajout de cas pratiques et d'exemples concrets stylisés",
      "📱 Optimisation de l'interface pour une lecture mobile parfaite"
    ]
  },
  {
    version: "v3.0",
    date: "21 Janvier 2026",
    title: "ENRICHISSEMENT MAJEUR",
    description: "Refonte complète du contenu pédagogique.",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    details: [
      "📚 Réécriture complète des 4 Blocs de compétences (EPC)",
      "🎨 Nouvelle Hero Section avec design moderne et badges",
      "📝 Ajout de check-lists de révision interactives",
      "🤝 Section témoignages et engagement renforcé"
    ]
  }
];

const UpdateNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);

  useEffect(() => {
    const lastSeen = localStorage.getItem("lastUpdateSeen");
    if (lastSeen === updates[0].version) {
      setHasNew(false);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasNew(false);
    localStorage.setItem("lastUpdateSeen", updates[0].version);
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <button
        onClick={handleOpen}
        className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Bell size={20} className="text-gray-600" />
        {hasNew && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold animate-bounce">
            !
          </span>
        )}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-white rounded-[2.5rem] shadow-2xl flex flex-col border-none">
            {/* Header */}
            <div className="p-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-playfair font-bold flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8" />
                  Notes de mise à jour
                </h2>
                <p className="text-emerald-100 text-sm mt-1">Découvrez les dernières améliorations de votre plateforme.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50">
              {updates.map((update) => (
                <div key={update.version} className="relative pl-8 border-l-2 border-emerald-100 last:border-transparent">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  
                  <div className="mb-2 flex items-center gap-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {update.version}
                    </span>
                    <span className="text-gray-400 text-xs font-medium">{update.date}</span>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      {update.icon}
                      <h3 className="font-poppins font-bold text-gray-900">{update.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 italic">{update.description}</p>
                    <ul className="space-y-2">
                      {update.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-emerald-500 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-100 text-center">
              <Button 
                onClick={() => setIsOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl font-bold transition-all hover:scale-105"
              >
                C'est compris !
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UpdateNotifications;
