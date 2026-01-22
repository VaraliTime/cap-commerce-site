import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Brain, ArrowRight, ArrowLeft } from "lucide-react";

const flashcards = [
  { q: "Que signifie l'acronyme SBAM ?", a: "Sourire, Bonjour, Au revoir, Merci." },
  { q: "Qu'est-ce que la Démarque Inconnue ?", a: "Différence entre le stock théorique et le stock réel (vols, casse, erreurs)." },
  { q: "Définition du Facing", a: "Action de ramener les produits vers l'avant du rayon." },
  { q: "Règle des 5B de Kepner", a: "Bon produit, Bon endroit, Bon moment, Bon prix, Bonne quantité." },
  { q: "Méthode SONCAS", a: "Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie." },
  { q: "FIFO (PEPS)", a: "First In First Out (Premier Entré, Premier Sorti)." },
  { q: "Zone de chalandise", a: "Zone géographique d'où provient la majorité des clients d'un magasin." },
  { q: "Tête de gondole", a: "Emplacement situé en bout de rayon, très vendeur." }
];

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Brain className="text-emerald-600" /> Flashcards CAP EPC
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Mémorisez les définitions clés par la répétition espacée.</p>
        </div>

        <div className="max-w-md mx-auto perspective-1000">
          <div className="relative h-80 w-full cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + (isFlipped ? "-back" : "-front")}
                initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 w-full h-full rounded-[2.5rem] shadow-2xl flex items-center justify-center p-8 text-center border-4 ${
                  isFlipped ? "bg-emerald-600 border-emerald-500 text-white" : "bg-white dark:bg-gray-800 border-emerald-100 dark:border-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-4 block">
                    {isFlipped ? "Réponse" : "Question"}
                  </span>
                  <p className="text-2xl font-bold leading-tight">
                    {isFlipped ? flashcards[currentIndex].a : flashcards[currentIndex].q}
                  </p>
                  {!isFlipped && <p className="mt-8 text-xs text-emerald-500 font-bold animate-pulse">Cliquez pour voir la réponse</p>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-12 gap-4">
            <Button onClick={prevCard} variant="outline" className="rounded-2xl p-6 border-2">
              <ArrowLeft />
            </Button>
            <div className="text-sm font-bold text-gray-400">
              {currentIndex + 1} / {flashcards.length}
            </div>
            <Button onClick={nextCard} variant="outline" className="rounded-2xl p-6 border-2">
              <ArrowRight />
            </Button>
          </div>
          
          <Button 
            onClick={() => {
              const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
              // In a real app, we'd update the state with shuffled cards
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full mt-6 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-2xl py-6 font-bold"
          >
            <RefreshCw className="mr-2" size={18} /> Mélanger les cartes
          </Button>
        </div>
      </main>
    </div>
  );
}
