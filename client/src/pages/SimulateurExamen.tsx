import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Timer, AlertCircle, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: 1,
    title: "Gestion d'un conflit client",
    context: "Un client revient en magasin très enervé car le produit qu'il a acheté hier est défectueux. Il n'a pas son ticket de caisse.",
    options: [
      { text: "Lui dire calmement que sans ticket, vous ne pouvez rien faire.", correct: false, feedback: "Trop rigide. Le client est déjà énervé, cela va aggraver le conflit." },
      { text: "Appliquer la méthode SBAM, l'écouter et proposer de voir avec votre responsable.", correct: true, feedback: "Excellent. L'écoute et la recherche de solution apaisent le client." },
      { text: "Lui demander de baisser d'un ton immédiatement.", correct: false, feedback: "Agressif. Ne jamais répondre à l'agressivité par l'agressivité." }
    ]
  },
  {
    id: 2,
    title: "Optimisation du linéaire",
    context: "Vous recevez une nouvelle gamme de produits bio à forte marge. Où les placez-vous sur la gondole ?",
    options: [
      { text: "Au niveau des pieds pour les produits lourds.", correct: false, feedback: "Le niveau des pieds est le moins vendeur." },
      { text: "Au niveau des mains pour la facilité.", correct: false, feedback: "C'est bien, mais pas optimal pour la marge." },
      { text: "Au niveau des yeux (1m50) pour maximiser la visibilité.", correct: true, feedback: "Parfait. C'est le niveau le plus vendeur pour les produits rentables." }
    ]
  }
];

export default function SimulateurExamen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setShowFeedback(index);
    if (isCorrect) setScore(score + 1);
    
    setTimeout(() => {
      if (currentStep < scenarios.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowFeedback(null);
      } else {
        setIsFinished(true);
        // Sauvegarde de l'XP
        const currentXP = parseInt(localStorage.getItem("user_xp") || "0");
        localStorage.setItem("user_xp", (currentXP + score * 100).toString());
      }
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold font-playfair">Simulateur d'Examen</h1>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold ${timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-emerald-100 text-emerald-600'}`}>
              <Timer size={20} /> {formatTime(timeLeft)}
            </div>
          </div>

          {!isFinished ? (
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="p-8 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-3xl">
                  <div className="mb-6">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Scénario {currentStep + 1}/{scenarios.length}</span>
                    <h2 className="text-2xl font-bold mt-2">{scenarios[currentStep].title}</h2>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl mb-8 border-l-4 border-blue-500">
                    <p className="text-gray-700 dark:text-gray-300 italic">"{scenarios[currentStep].context}"</p>
                  </div>

                  <div className="space-y-4">
                    {scenarios[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        disabled={showFeedback !== null}
                        onClick={() => handleAnswer(index, option.correct)}
                        className={`w-full p-5 rounded-2xl text-left transition-all flex justify-between items-center border-2 ${
                          showFeedback === index 
                            ? (option.correct ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20')
                            : 'border-gray-100 dark:border-gray-700 hover:border-emerald-500 bg-white dark:bg-gray-800'
                        }`}
                      >
                        <span className="font-medium">{option.text}</span>
                        {showFeedback === index && (
                          option.correct ? <CheckCircle2 className="text-emerald-500" /> : <XCircle className="text-red-500" />
                        )}
                      </button>
                    ))}
                  </div>

                  {showFeedback !== null && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 text-sm italic text-gray-600 dark:text-gray-300">
                      {scenarios[currentStep].options[showFeedback].feedback}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>
          ) : (
            <Card className="p-12 text-center border-none shadow-2xl bg-white dark:bg-gray-800 rounded-3xl">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">🏆</div>
              <h2 className="text-4xl font-bold mb-4">Examen Terminé !</h2>
              <p className="text-gray-600 mb-8">Votre score : <span className="text-3xl font-bold text-emerald-600">{score}/{scenarios.length}</span></p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <p className="text-xs text-gray-400 uppercase font-bold">XP Gagnés</p>
                  <p className="text-2xl font-bold text-purple-500">+{score * 100}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                  <p className="text-xs text-gray-400 uppercase font-bold">Temps restant</p>
                  <p className="text-2xl font-bold text-blue-500">{formatTime(timeLeft)}</p>
                </div>
              </div>
              <Button onClick={() => window.location.href = "/dashboard"} className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 rounded-2xl font-bold">
                Retour au Dashboard <ArrowRight className="ml-2" />
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
