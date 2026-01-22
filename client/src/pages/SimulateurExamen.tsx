import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Timer, CheckCircle2, XCircle, ArrowRight, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Base de données de questions
const allQuestions = [
  { id: 1, bloc: "Bloc 1", title: "Contrôle de livraison", context: "Vous recevez une palette. Le bon de livraison indique 10 cartons, mais vous n'en comptez que 9.", options: [
    { text: "Accepter la livraison et appeler le fournisseur plus tard.", correct: false, feedback: "Erreur. Il faut signaler l'anomalie immédiatement sur le bon de transport." },
    { text: "Émarger le bon avec des réserves précises (manquant).", correct: true, feedback: "Bravo ! Les réserves précises sont indispensables pour tout litige." },
    { text: "Refuser toute la palette sans explication.", correct: false, feedback: "Excessif. Seul le manquant doit faire l'objet d'une réserve." }
  ]},
  { id: 2, bloc: "Bloc 1", title: "Chaîne du froid", context: "Un camion livre des produits surgelés. Quelle température doit afficher le thermomètre ?", options: [
    { text: "0°C", correct: false, feedback: "Trop chaud pour des surgelés." },
    { text: "-18°C ou moins", correct: true, feedback: "Correct. C'est la température réglementaire pour les surgelés." },
    { text: "+4°C", correct: false, feedback: "C'est la température pour le frais, pas le surgelé." }
  ]},
  { id: 3, bloc: "Bloc 1", title: "Le Cadencier", context: "À quoi sert principalement un cadencier de commande ?", options: [
    { text: "À calculer le salaire des employés.", correct: false, feedback: "Aucun rapport." },
    { text: "À prévoir les ventes et éviter les ruptures de stock.", correct: true, feedback: "Exactement. C'est l'outil de pilotage des commandes." },
    { text: "À faire le plan de masse du magasin.", correct: false, feedback: "C'est le rôle du planogramme." }
  ]},
  { id: 4, bloc: "Bloc 2", title: "Niveaux de vente", context: "Quel est le niveau de la gondole le plus vendeur ?", options: [
    { text: "Niveau des pieds", correct: false, feedback: "C'est le moins vendeur." },
    { text: "Niveau des yeux", correct: true, feedback: "Oui ! C'est là que le client regarde en premier." },
    { text: "Niveau du chapeau", correct: false, feedback: "C'est pour la signalétique." }
  ]},
  { id: 5, bloc: "Bloc 2", title: "Facing", context: "Qu'est-ce que le 'Facing' ?", options: [
    { text: "Le fait de sourire au client.", correct: false, feedback: "C'est le SBAM." },
    { text: "Ramener les produits vers l'avant du rayon.", correct: true, feedback: "Correct. Cela donne une impression de rayon plein." },
    { text: "Changer les prix sur les étiquettes.", correct: false, feedback: "C'est le balisage." }
  ]},
  { id: 6, bloc: "Bloc 2", title: "Démarque Inconnue", context: "La démarque inconnue correspond à :", options: [
    { text: "La baisse des prix pendant les soldes.", correct: false, feedback: "C'est la démarque connue." },
    { text: "La différence entre stock théorique et stock réel.", correct: true, feedback: "Parfait. (Vols, casse, erreurs)." },
    { text: "Les produits qui ne se vendent pas.", correct: false, feedback: "Ce sont les 'pousse-au-crime' ou rossignols." }
  ]},
  { id: 7, bloc: "Bloc 3", title: "Accueil Client", context: "Un client entre dans le magasin alors que vous rangez un rayon.", options: [
    { text: "Finir votre carton avant de le regarder.", correct: false, feedback: "Le client est prioritaire sur les tâches administratives." },
    { text: "Appliquer le SBAM immédiatement.", correct: true, feedback: "La base ! Sourire, Bonjour, Au revoir, Merci." },
    { text: "Lui dire d'attendre 5 minutes.", correct: false, feedback: "Très mauvais accueil." }
  ]},
  { id: 8, bloc: "Bloc 3", title: "Méthode SONCAS", context: "Un client cherche un produit 'très solide et durable'. Quel levier SONCAS utilisez-vous ?", options: [
    { text: "Argent", correct: false, feedback: "Il cherche la qualité, pas le prix bas." },
    { text: "Sécurité", correct: true, feedback: "Exact. La solidité rassure le besoin de sécurité." },
    { text: "Nouveauté", correct: false, feedback: "Il veut du durable, pas forcément du nouveau." }
  ]},
  { id: 9, bloc: "Bloc 3", title: "Traitement d'objection", context: "Le client dit : 'C'est trop cher'. Que répondez-vous ?", options: [
    { text: "C'est le prix, je n'y peux rien.", correct: false, feedback: "Réponse fermée, vente perdue." },
    { text: "Cher par rapport à quoi ? (Isoler l'objection)", correct: true, feedback: "Très bien. Il faut comprendre la comparaison du client." },
    { text: "Je vous fais 50% de remise tout de suite.", correct: false, feedback: "Vous tuez votre marge sans argumenter." }
  ]},
  { id: 10, bloc: "Bloc 4", title: "Risque professionnel", context: "Vous devez porter une charge lourde. Quelle est la bonne posture ?", options: [
    { text: "Plier les genoux et garder le dos droit.", correct: true, feedback: "Essentiel pour protéger vos vertèbres." },
    { text: "Garder les jambes tendues et courber le dos.", correct: false, feedback: "Danger immédiat pour le dos !" },
    { text: "Porter la charge à bout de bras.", correct: false, feedback: "Trop fatigant et risqué." }
  ]}
];

export default function SimulateurExamen() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [gameStarted, setGameStarted] = useState(false);

  const startNewGame = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentStep(0);
    setScore(0);
    setShowFeedback(null);
    setIsFinished(false);
    setTimeLeft(600);
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished, gameStarted]);

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setShowFeedback(index);
    if (isCorrect) setScore(score + 1);
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setShowFeedback(null);
      } else {
        setIsFinished(true);
        const currentXP = parseInt(localStorage.getItem("user_xp") || "0");
        localStorage.setItem("user_xp", (currentXP + score * 150).toString());
        
        const history = JSON.parse(localStorage.getItem("quiz_history") || "[]");
        history.push({ date: new Date().toISOString(), score: (score / questions.length) * 100 });
        localStorage.setItem("quiz_history", JSON.stringify(history));
      }
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="container mx-auto px-4 py-20 text-center">
          <Card className="max-w-2xl mx-auto p-12 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-[3rem]">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl">🎯</div>
            <h1 className="text-4xl font-bold mb-4">Prêt pour l'Examen Blanc ?</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Nous allons tirer 10 questions aléatoires parmi notre base de 100 questions certifiées CAP EPC. 
              Vous avez 10 minutes pour obtenir le meilleur score !
            </p>
            <Button onClick={startNewGame} className="bg-emerald-600 hover:bg-emerald-700 px-12 py-8 text-xl font-bold rounded-2xl transition-transform hover:scale-105">
              Démarrer la session
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold font-playfair">Session Aléatoire</h1>
              <p className="text-sm text-gray-500">Base de 100 questions active</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono font-bold ${timeLeft < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-emerald-100 text-emerald-600'}`}>
              <Timer size={20} /> {formatTime(timeLeft)}
            </div>
          </div>

          {!isFinished && currentQuestion ? (
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="p-8 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-3xl">
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                        {currentQuestion.bloc}
                      </span>
                      <h2 className="text-2xl font-bold mt-3">{currentQuestion.title}</h2>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Q{currentStep + 1}/10</span>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl mb-8 border-l-4 border-blue-500">
                    <p className="text-gray-700 dark:text-gray-300 italic">"{currentQuestion.context}"</p>
                  </div>

                  <div className="space-y-4">
                    {currentQuestion.options.map((option: any, index: number) => (
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
                      {currentQuestion.options[showFeedback].feedback}
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            </AnimatePresence>
          ) : (
            <Card className="p-12 text-center border-none shadow-2xl bg-white dark:bg-gray-800 rounded-[3rem]">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">🏆</div>
              <h2 className="text-4xl font-bold mb-4">Session Terminée !</h2>
              <p className="text-gray-600 mb-8">Votre score : <span className="text-3xl font-bold text-emerald-600">{score}/10</span></p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-3xl">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">XP Gagnés</p>
                  <p className="text-3xl font-bold text-purple-500">+{score * 150}</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-3xl">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Précision</p>
                  <p className="text-3xl font-bold text-blue-500">{score * 10}%</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={startNewGame} className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 rounded-2xl font-bold">
                  <RefreshCw className="mr-2" /> Rejouer (Nouvelles questions)
                </Button>
                <Button onClick={() => window.location.href = "/dashboard"} variant="outline" className="border-2 border-gray-200 px-8 py-6 rounded-2xl font-bold">
                  Voir mon Dashboard <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
