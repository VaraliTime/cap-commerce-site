import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Play, CheckCircle, AlertCircle, MessageSquare, User, ArrowRight } from "lucide-react";

interface Scenario {
  id: number;
  titre: string;
  epreuve: "EP1" | "EP2";
  contexte: string;
  mission: string;
  pointsCles: string[];
}

export const SimulateurOral = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState<'selection' | 'contexte' | 'action'>('selection');

  const scenarios: Scenario[] = [
    {
      id: 1,
      titre: "Litige à la réception",
      epreuve: "EP1",
      contexte: "Vous recevez une livraison de 10 colis de produits frais. Au moment du contrôle, vous remarquez qu'un colis est écrasé et que 2 produits sont manquants par rapport au Bon de Livraison.",
      mission: "Expliquez au jury comment vous réagissez face au transporteur et quelles mentions vous portez sur le document.",
      pointsCles: ["Émettre des réserves précises", "Dater et signer", "Informer le responsable", "Prendre des photos"]
    },
    {
      id: 2,
      titre: "Vente d'un produit technique",
      epreuve: "EP2",
      contexte: "Un client entre dans le rayon petit électroménager. Il hésite entre deux cafetières. Il semble pressé mais cherche de la qualité.",
      mission: "Réalisez la phase de découverte et proposez un argumentaire en utilisant la méthode CAP.",
      pointsCles: ["Accueil SBAM", "Questions ouvertes", "Reformulation", "Argumentation CAP"]
    },
    {
      id: 3,
      titre: "Gestion d'un client mécontent",
      epreuve: "EP2",
      contexte: "Un client revient en magasin avec un article défectueux acheté la veille. Il est en colère et parle fort devant les autres clients.",
      mission: "Montrez comment vous gérez la situation pour calmer le client et trouver une solution.",
      pointsCles: ["Garder son calme", "Isoler le client", "Écoute active", "Proposer un échange/remboursement"]
    }
  ];

  if (step === 'selection') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scenarios.map((s) => (
          <Card key={s.id} className="p-6 hover:shadow-xl transition-all border-2 border-gray-100 dark:border-gray-800 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.epreuve === 'EP1' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                {s.epreuve}
              </span>
              <Mic className="text-gray-300" size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-poppins">{s.titre}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{s.contexte}</p>
            <Button 
              onClick={() => { setSelectedScenario(s); setStep('contexte'); }}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Lancer le scénario
            </Button>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <Card className="p-8 border-2 border-emerald-500 shadow-2xl bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Button variant="ghost" onClick={() => setStep('selection')} className="text-gray-400 hover:text-gray-600">
          Quitter
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-emerald-100 rounded-xl">
          <MessageSquare className="text-emerald-600" size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">{selectedScenario?.titre}</h3>
          <p className="text-emerald-600 font-bold text-sm">Épreuve {selectedScenario?.epreuve}</p>
        </div>
      </div>

      {step === 'contexte' ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <User size={18} className="text-blue-500" /> Le Contexte
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedScenario?.contexte}</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
              <AlertCircle size={18} /> Votre Mission
            </h4>
            <p className="text-blue-800 dark:text-blue-400 font-medium">{selectedScenario?.mission}</p>
          </div>

          <Button 
            onClick={() => setStep('action')}
            className="w-full py-8 text-xl bg-emerald-600 hover:bg-emerald-700 shadow-lg group"
          >
            Je suis prêt, je commence <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      ) : (
        <div className="space-y-8 animate-in zoom-in-95">
          <div className="text-center py-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl border-2 border-dashed border-emerald-200 dark:border-emerald-800">
            <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-full shadow-xl mb-6 animate-pulse">
              <Mic className="text-red-500" size={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">À vous de parler !</h4>
            <p className="text-gray-600 dark:text-gray-400">Imaginez que vous êtes face au jury.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-500" /> Points à ne pas oublier :
              </h4>
              <ul className="space-y-3">
                {selectedScenario?.pointsCles.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-4">💡 Conseil Pro</h4>
              <p className="text-amber-800 dark:text-amber-500 text-sm leading-relaxed">
                N'oubliez pas d'utiliser le vocabulaire professionnel (Bon de Livraison, réserves, méthode CAP, etc.) et de rester courtois en toutes circonstances.
              </p>
            </div>
          </div>

          <Button 
            onClick={() => setStep('selection')}
            variant="outline"
            className="w-full py-6 border-2"
          >
            Terminer et choisir un autre scénario
          </Button>
        </div>
      )}
    </Card>
  );
};
