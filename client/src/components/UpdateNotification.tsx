import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "wouter";

export default function UpdateNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Afficher la notification après un court délai
    const timer = setTimeout(() => {
      const hasSeenUpdate = localStorage.getItem("has_seen_v2_update");
      if (!hasSeenUpdate) {
        setIsVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closeNotification = () => {
    setIsVisible(false);
    localStorage.setItem("has_seen_v2_update", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
        >
          <div className="bg-white dark:bg-gray-800 border-2 border-emerald-500 rounded-[2rem] shadow-2xl overflow-hidden p-6 relative">
            <button 
              onClick={closeNotification}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600">
                <Rocket size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Mise à jour majeure !</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">Version 2.0 active</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Découvrez nos nouveaux outils : <strong>Simulateur d'Examen</strong> (100 questions), <strong>Flashcards</strong>, <strong>Coach IA Oral</strong> et bien plus encore !
            </p>

            <div className="flex gap-3">
              <Link href="/simulateur-examen" className="flex-1">
                <Button 
                  onClick={closeNotification}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm py-5"
                >
                  Essayer <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={closeNotification}
                className="rounded-xl border-2 border-gray-100 dark:border-gray-700 font-bold text-sm py-5"
              >
                Plus tard
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-400 font-medium">
              <Sparkles size={12} className="text-amber-400" />
              <span>Optimisé pour votre réussite au CAP EPC</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
