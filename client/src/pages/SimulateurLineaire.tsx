import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Layout, Eye, Info, ArrowUp, ArrowDown, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SimulateurLineaire() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = [
    { id: "chapeau", name: "Niveau des Yeux (Chapeau)", impact: "Impact Élevé", desc: "C'est ici que l'on place les produits à forte marge ou les nouveautés. Le client le voit immédiatement.", color: "bg-red-100 border-red-200 text-red-700" },
    { id: "mains", name: "Niveau des Mains", impact: "Impact Moyen", desc: "Produits de consommation courante. Facile à saisir sans effort.", color: "bg-blue-100 border-blue-200 text-blue-700" },
    { id: "sol", name: "Niveau du Sol", impact: "Impact Faible", desc: "Produits volumineux, lourds ou premiers prix. Le client doit faire un effort pour les voir.", color: "bg-gray-100 border-gray-200 text-gray-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-playfair">Simulateur de Linéaire</h1>
          <p className="text-gray-600">Comprenez l'impact de l'emplacement des produits sur les ventes (Merchandising de séduction).</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visualisation du Linéaire */}
          <div className="space-y-4">
            {levels.map((level) => (
              <motion.div
                key={level.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedLevel(level.id)}
                className={`h-40 rounded-3xl border-4 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${
                  selectedLevel === level.id ? 'bg-emerald-600 border-emerald-400 text-white shadow-2xl' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400'
                }`}
              >
                <Layout size={32} className="mb-2" />
                <span className="font-bold uppercase tracking-widest">{level.name}</span>
                {selectedLevel === level.id && <span className="text-xs mt-2 opacity-80">Sélectionné</span>}
              </motion.div>
            ))}
          </div>

          {/* Analyse de l'emplacement */}
          <div>
            {selectedLevel ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                key={selectedLevel}
              >
                <Card className={`p-8 border-none shadow-xl rounded-[2.5rem] ${levels.find(l => l.id === selectedLevel)?.color}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Info size={32} />
                    <h2 className="text-2xl font-bold">Analyse de l'emplacement</h2>
                  </div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">Impact sur les ventes</span>
                    <p className="text-3xl font-black">{levels.find(l => l.id === selectedLevel)?.impact}</p>
                  </div>
                  <p className="text-lg leading-relaxed mb-8">
                    {levels.find(l => l.id === selectedLevel)?.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/50 p-4 rounded-2xl">
                      <span className="text-[10px] font-bold uppercase">Type de produits</span>
                      <p className="font-bold">Marques Nationales</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-2xl">
                      <span className="text-[10px] font-bold uppercase">Objectif</span>
                      <p className="font-bold">Rentabilité</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-4 border-dashed border-gray-200 rounded-[2.5rem]">
                <Move size={64} className="text-gray-200 mb-4" />
                <h3 className="text-xl font-bold text-gray-400">Cliquez sur un niveau du linéaire pour analyser son impact</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
