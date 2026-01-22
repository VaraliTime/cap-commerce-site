import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Store, Move, Trash2, Save, Info } from "lucide-react";
import { motion } from "framer-motion";

const shelfTypes = [
  { id: 'frais', label: 'Rayon Frais', color: 'bg-blue-500' },
  { id: 'sec', label: 'Rayon Sec', color: 'bg-amber-500' },
  { id: 'liquide', label: 'Liquides', color: 'bg-cyan-500' },
  { id: 'caisse', label: 'Zone Caisse', color: 'bg-emerald-600' },
  { id: 'entree', label: 'Entrée', color: 'bg-gray-800' }
];

export default function PlanMasseInteractif() {
  const [placedItems, setPlacedItems] = useState<any[]>([]);

  const addItem = (type: any) => {
    const newItem = {
      id: Date.now(),
      type: type.id,
      label: type.label,
      color: type.color,
      x: 50,
      y: 50
    };
    setPlacedItems([...placedItems, newItem]);
  };

  const removeItem = (id: number) => {
    setPlacedItems(placedItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Store className="text-emerald-600" /> Éditeur de Plan de Masse
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Concevez l'implantation de votre point de vente (Zones chaudes/froides).</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="space-y-6">
            <Card className="p-6 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl">
              <h2 className="font-bold mb-4 flex items-center gap-2">Éléments à placer</h2>
              <div className="space-y-3">
                {shelfTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => addItem(type)}
                    className="w-full p-3 rounded-xl border-2 border-gray-50 dark:border-gray-700 hover:border-emerald-500 transition-all flex items-center gap-3"
                  >
                    <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border-2 border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-blue-800 dark:text-blue-400 flex items-center gap-2 mb-2">
                <Info size={18} /> Conseil Merch
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 italic">
                Placez les produits d'appel (pain, lait) au fond pour forcer le client à traverser tout le magasin.
              </p>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-3">
            <Card className="p-4 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-[2.5rem] relative overflow-hidden min-h-[600px] border-4 border-dashed border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Store size={400} />
              </div>
              
              {placedItems.map((item) => (
                <motion.div
                  key={item.id}
                  drag
                  dragMomentum={false}
                  className={`absolute p-4 rounded-xl shadow-lg cursor-move flex items-center gap-3 text-white font-bold ${item.color}`}
                  style={{ left: item.x, top: item.y }}
                >
                  <Move size={16} />
                  {item.label}
                  <button onClick={() => removeItem(item.id)} className="ml-2 hover:text-red-200">
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}

              {placedItems.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                  <p className="text-xl font-medium">Le magasin est vide</p>
                  <p className="text-sm">Cliquez sur un élément à gauche pour commencer</p>
                </div>
              )}
            </Card>

            <div className="flex justify-end mt-6 gap-4">
              <Button variant="outline" onClick={() => setPlacedItems([])} className="rounded-xl px-6">Réinitialiser</Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8 font-bold">
                <Save className="mr-2" size={18} /> Sauvegarder le plan
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
