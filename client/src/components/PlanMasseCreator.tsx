import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Info, CheckCircle2, AlertCircle, MousePointer2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  type: 'appel' | 'achat-impulsion' | 'courant' | 'luxe';
  level?: number; // 0: Sol, 1: Mains, 2: Yeux, 3: Chapeau
}

export const PlanMasseCreator = () => {
  const [shelf, setShelf] = useState<(Product | null)[]>(Array(4).fill(null));
  const [inventory, setInventory] = useState<Product[]>([
    { id: 'p1', name: 'Pain de mie (Prix bas)', type: 'appel' },
    { id: 'p2', name: 'Chocolat Premium', type: 'luxe' },
    { id: 'p3', name: 'Pâtes classiques', type: 'courant' },
    { id: 'p4', name: 'Bonbons (Promo)', type: 'achat-impulsion' },
  ]);
  const [feedback, setFeedback] = useState<string[]>([]);

  const placeProduct = (product: Product, index: number) => {
    const newShelf = [...shelf];
    newShelf[index] = product;
    setShelf(newShelf);
  };

  const validateMerch = () => {
    const errors: string[] = [];
    
    // Règle 1 : Produits d'appel au sol (index 0)
    if (shelf[0] && shelf[0].type !== 'appel') {
      errors.push("Le niveau du sol est réservé aux produits d'appel ou volumineux.");
    }
    
    // Règle 2 : Produits de luxe aux yeux (index 2)
    if (shelf[2] && shelf[2].type !== 'luxe' && shelf[2].type !== 'achat-impulsion') {
      errors.push("Le niveau des yeux doit être utilisé pour les produits à forte marge ou les nouveautés.");
    }

    // Règle 3 : Produits courants aux mains (index 1)
    if (shelf[1] && shelf[1].type === 'luxe') {
      errors.push("Les produits de luxe sont mieux valorisés au niveau des yeux.");
    }

    if (errors.length === 0 && shelf.every(s => s !== null)) {
      setFeedback(["Bravo ! Votre implantation respecte les règles du merchandising."]);
    } else {
      setFeedback(errors.length > 0 ? errors : ["Veuillez remplir tous les niveaux du rayon."]);
    }
  };

  const levels = [
    { name: "Niveau Chapeau", desc: "Stock ou déco", index: 3 },
    { name: "Niveau des Yeux", desc: "Produits à forte marge", index: 2 },
    { name: "Niveau des Mains", desc: "Produits courants", index: 1 },
    { name: "Niveau du Sol", desc: "Produits d'appel / lourds", index: 0 },
  ];

  return (
    <Card className="p-8 border-2 border-purple-100 dark:border-purple-900/30 bg-white dark:bg-gray-800 shadow-xl">
      <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-gray-700">
        <Layout className="text-purple-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Atelier Merchandising</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Rayon */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Votre Rayon (Gondole)</h4>
          <div className="flex flex-col gap-2 bg-gray-200 dark:bg-gray-900 p-4 rounded-3xl border-8 border-gray-300 dark:border-gray-800">
            {levels.map((level) => (
              <div 
                key={level.index}
                className={`h-24 rounded-xl border-2 border-dashed flex flex-col items-center justify-center transition-all ${shelf[level.index] ? 'bg-white dark:bg-gray-800 border-emerald-500 shadow-inner' : 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700'}`}
              >
                {shelf[level.index] ? (
                  <div className="text-center">
                    <p className="font-bold text-emerald-600">{shelf[level.index]?.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">{level.name}</p>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <p className="text-xs font-bold">{level.name}</p>
                    <p className="text-[10px]">{level.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inventaire & Actions */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase mb-6 flex items-center gap-2">
              <MousePointer2 size={16} /> Produits à implanter
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {inventory.map((p) => (
                <div key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex justify-between items-center group hover:border-purple-500 transition-all">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{p.name}</p>
                    <p className="text-[10px] text-purple-600 font-bold uppercase">{p.type}</p>
                  </div>
                  <div className="flex gap-1">
                    {[3, 2, 1, 0].map(lvl => (
                      <button 
                        key={lvl}
                        onClick={() => placeProduct(p, lvl)}
                        className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-purple-600 hover:text-white text-[10px] font-bold transition-all"
                        title={`Placer au niveau ${lvl}`}
                      >
                        N{lvl}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <Button onClick={validateMerch} className="w-full py-8 text-xl bg-purple-600 hover:bg-purple-700 rounded-2xl shadow-lg">
              Valider l'implantation
            </Button>

            {feedback.length > 0 && (
              <div className={`p-6 rounded-2xl border-2 animate-in zoom-in-95 ${feedback[0].includes('Bravo') ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                <div className="flex items-center gap-3 mb-2">
                  {feedback[0].includes('Bravo') ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                  <p className="font-bold">{feedback[0].includes('Bravo') ? "Implantation réussie !" : "Ajustements nécessaires :"}</p>
                </div>
                {!feedback[0].includes('Bravo') && (
                  <ul className="text-sm space-y-1 ml-9">
                    {feedback.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 bg-purple-50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-900/30">
        <h4 className="font-bold text-purple-900 dark:text-purple-400 mb-2 flex items-center gap-2">
          <Info size={18} /> Rappel Merchandising
        </h4>
        <p className="text-sm text-purple-800 dark:text-purple-500 leading-relaxed">
          L'objectif est de placer les produits là où ils seront le plus rentables. Les produits que le client cherche (appel) peuvent être en bas, mais les produits que vous voulez qu'il achète (impulsion/luxe) doivent être à hauteur des yeux.
        </p>
      </div>
    </Card>
  );
};
