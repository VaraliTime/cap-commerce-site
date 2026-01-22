import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Brain, CreditCard, Layout, MessageSquare, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: <Brain className="text-purple-500" />,
    title: "Simulateur d'Examen 100 Q",
    desc: "Une base de données massive de 100 questions avec tirage aléatoire pour des révisions uniques."
  },
  {
    icon: <MessageSquare className="text-blue-500" />,
    title: "Coach IA Oral (EP3)",
    desc: "Entraînez-vous aux épreuves orales avec notre IA qui simule un jury et vous donne des conseils."
  },
  {
    icon: <CreditCard className="text-emerald-500" />,
    title: "Simulateur de Caisse",
    desc: "Apprenez les gestes professionnels de l'encaissement et la relation client (SBAM)."
  },
  {
    icon: <Layout className="text-amber-500" />,
    title: "Plan de Masse Interactif",
    desc: "Outil de dessin pour maîtriser l'implantation des rayons et le parcours client."
  },
  {
    icon: <FileText className="text-rose-500" />,
    title: "Fiches PDF Premium",
    desc: "Générez des livrets de révision de 3 pages avec schémas, synthèses et points d'expertise."
  },
  {
    icon: <Sparkles className="text-indigo-500" />,
    title: "Flashcards & Audio",
    desc: "Mémorisation active avec des cartes recto-verso et synthèse vocale sur tous les cours."
  }
];

export default function UpdateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("has_seen_v2_modal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("has_seen_v2_modal", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative border border-gray-100 dark:border-gray-800"
          >
            {/* Header Image/Pattern */}
            <div className="h-32 bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center relative">
              <Rocket className="text-white w-16 h-16 animate-bounce" />
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 sm:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-playfair">Bienvenue sur la V2.0 !</h2>
                <p className="text-gray-500 dark:text-gray-400">Votre plateforme de réussite CAP EPC fait peau neuve avec des outils révolutionnaires.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900/30 transition-all">
                    <div className="w-10 h-10 shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-xl">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={closeModal}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-7 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-200 dark:shadow-none"
                >
                  C'est parti ! <CheckCircle2 className="ml-2" />
                </Button>
              </div>

              <p className="text-center mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Développé pour l'excellence pédagogique
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
