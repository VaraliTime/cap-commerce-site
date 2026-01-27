import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Trophy, Brain, Briefcase, Layout, Rocket, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export default function UpdateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenUpdate = localStorage.getItem("hasSeenUpdateV3_Forced");
    if (!hasSeenUpdate) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenUpdateV3_Forced", "true");
  };

  const features = [
    { icon: <Trophy className="text-yellow-500" />, title: "Ligues & Badges", desc: "Gagnez de l'XP et montez dans le classement hebdomadaire." },
    { icon: <Brain className="text-purple-500" />, title: "Correcteur IA", desc: "L'IA analyse votre dossier pro et vos fiches activités." },
    { icon: <Briefcase className="text-blue-500" />, title: "Générateur de CV", desc: "Créez un CV pro adapté aux métiers du commerce en 1 clic." },
    { icon: <Layout className="text-emerald-500" />, title: "Simulateur Linéaire", desc: "Apprenez le merchandising avec notre outil visuel 3D." },
    { icon: <Zap className="text-orange-500" />, title: "Analyse de Tickets", desc: "Entraînez-vous à repérer les erreurs de caisse." },
    { icon: <Rocket className="text-red-500" />, title: "Annuaire Enseignes", desc: "Trouvez votre futur stage parmi les meilleures enseignes." },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden relative border border-white/20"
          >
            {/* Header avec dégradé */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Version 3.0</span>
                  <Sparkles className="text-yellow-300 animate-pulse" />
                </div>
                <h2 className="text-4xl font-black mb-2 font-playfair">L'Évolution Ultime est là !</h2>
                <p className="text-emerald-50 opacity-90 text-lg">Votre plateforme devient un écosystème complet pour votre réussite.</p>
              </div>
              <Rocket className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-10 -translate-y-10" size={250} />
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900 transition-all"
                  >
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{f.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={closeModal}
                  className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white py-8 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:scale-[1.02] active:scale-95"
                >
                  Découvrir la V3.0 maintenant <CheckCircle2 className="ml-2" />
                </Button>
              </div>

              <p className="text-center mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Développé pour l'excellence pédagogique • CAP EPC
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
