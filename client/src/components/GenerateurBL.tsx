import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, AlertTriangle, Info, Search } from "lucide-react";

interface Item {
  ref: string;
  designation: string;
  commande: number;
  livre: number;
  etat: 'ok' | 'abime' | 'manquant';
}

export const GenerateurBL = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [showErrors, setShowErrors] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const generateScenario = () => {
    const products = [
      { ref: 'ART-001', designation: 'Lait Demi-Écrémé 1L' },
      { ref: 'ART-042', designation: 'Pâtes Penne 500g' },
      { ref: 'ART-105', designation: 'Huile d\'Olive Vierge' },
      { ref: 'ART-210', designation: 'Café Arabica Moulu' },
      { ref: 'ART-088', designation: 'Biscuits Chocolat' },
    ];

    const newItems: Item[] = products.map(p => {
      const commande = Math.floor(Math.random() * 20 + 5);
      let livre = commande;
      let etat: 'ok' | 'abime' | 'manquant' = 'ok';

      // Introduire des erreurs aléatoires
      const rand = Math.random();
      if (rand < 0.2) {
        livre = commande - Math.floor(Math.random() * 3 + 1);
        etat = 'manquant';
      } else if (rand < 0.4) {
        etat = 'abime';
      }

      return { ...p, commande, livre, etat };
    });

    setItems(newItems);
    setShowErrors(false);
    setGameStarted(true);
  };

  return (
    <Card className="p-8 border-2 border-blue-100 dark:border-blue-900/30 bg-white dark:bg-gray-800 shadow-xl">
      <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-gray-700">
        <FileText className="text-blue-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Contrôle de Réception</h2>
      </div>

      {!gameStarted ? (
        <div className="text-center py-12">
          <Search className="mx-auto text-blue-200 mb-6" size={64} />
          <h3 className="text-xl font-bold mb-4">Prêt pour le contrôle ?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Comparez le Bon de Livraison avec la marchandise reçue. Identifiez les anomalies et préparez vos réserves.
          </p>
          <Button onClick={generateScenario} className="bg-blue-600 hover:bg-blue-700 px-12 py-6 text-lg rounded-2xl">
            Générer une livraison
          </Button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-200 dark:border-gray-700 shadow-inner">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Bon de Livraison</h3>
                <p className="text-sm text-gray-500">N° BL-2026-001 | Fournisseur : GROSSISTE ALIM</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">Date : 21/01/2026</p>
                <p className="text-xs text-gray-400">Entrepôt Central</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Référence</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">Désignation</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest text-center">Commandé</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest text-center">Livré</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest text-right">État Réel</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 font-mono text-sm">{item.ref}</td>
                      <td className="py-4 font-bold text-gray-900 dark:text-white">{item.designation}</td>
                      <td className="py-4 text-center font-mono">{item.commande}</td>
                      <td className="py-4 text-center font-mono">{item.livre}</td>
                      <td className="py-4 text-right">
                        {showErrors ? (
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${item.etat === 'ok' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                            {item.etat === 'ok' ? 'Conforme' : item.etat === 'abime' ? 'Abîmé' : 'Manquant'}
                          </span>
                        ) : (
                          <span className="text-gray-300 italic text-xs">À vérifier...</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-400 mb-3 flex items-center gap-2">
                <Info size={18} /> Rappel de procédure
              </h4>
              <ul className="text-sm text-amber-800 dark:text-amber-500 space-y-2">
                <li>1. Compter le nombre de colis reçus.</li>
                <li>2. Vérifier l'état extérieur des colis.</li>
                <li>3. Pointer chaque article (BL vs Réception).</li>
                <li>4. Noter les réserves précises si besoin.</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {!showErrors ? (
                <Button onClick={() => setShowErrors(true)} className="w-full py-8 text-xl bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg">
                  Vérifier la livraison
                </Button>
              ) : (
                <Button onClick={generateScenario} variant="outline" className="w-full py-8 text-xl border-2 rounded-2xl">
                  Nouvelle livraison
                </Button>
              )}
            </div>
          </div>

          {showErrors && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 animate-in slide-in-from-bottom-4">
              <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-4 flex items-center gap-2">
                <AlertTriangle size={18} /> Analyse du contrôle
              </h4>
              <div className="space-y-3">
                {items.filter(i => i.etat !== 'ok').length > 0 ? (
                  items.filter(i => i.etat !== 'ok').map((i, idx) => (
                    <p key={idx} className="text-sm text-blue-800 dark:text-blue-400">
                      • <strong>{i.designation}</strong> : {i.etat === 'abime' ? "Produit endommagé. Mentionner '1 colis écrasé, produits invendables'." : `Manque ${i.commande - i.livre} unité(s). Mentionner 'Manquant à la livraison'.`}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-emerald-600 font-bold">Livraison 100% conforme. Vous pouvez signer le BL sans réserves.</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
