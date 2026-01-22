import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mic, MessageSquare, User, Bot, Send, Play, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: 1,
    title: "Vente d'un smartphone",
    context: "Un client entre et regarde les téléphones. Il semble hésitant sur le budget.",
    questions: [
      "Bonjour ! Puis-je vous renseigner sur nos modèles ?",
      "Quel usage comptez-vous en faire principalement ?",
      "Avez-vous une fourchette de prix en tête ?"
    ]
  },
  {
    id: 2,
    title: "Gestion d'un retour produit",
    context: "Une cliente souhaite rendre une paire de chaussures car elles lui font mal aux pieds.",
    questions: [
      "Bonjour Madame, je vois que vous rapportez ces chaussures. Quel est le souci ?",
      "Avez-vous votre ticket de caisse avec vous ?",
      "Souhaitez-vous un échange ou un avoir ?"
    ]
  }
];

export default function CoachIAOral() {
  const [activeScenario, setActiveScenario] = useState<any>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [chat, setChat] = useState<any[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const startScenario = (s: any) => {
    setActiveScenario(s);
    setChat([{ type: 'bot', text: s.questions[0] }]);
    setCurrentQuestionIdx(0);
    setIsFinished(false);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newChat = [...chat, { type: 'user', text: userInput }];
    setChat(newChat);
    setUserInput("");

    setTimeout(() => {
      if (currentQuestionIdx < activeScenario.questions.length - 1) {
        const nextIdx = currentQuestionIdx + 1;
        setCurrentQuestionIdx(nextIdx);
        setChat([...newChat, { type: 'bot', text: activeScenario.questions[nextIdx] }]);
      } else {
        setIsFinished(true);
        // XP Reward
        const currentXP = parseInt(localStorage.getItem("user_xp") || "0");
        localStorage.setItem("user_xp", (currentXP + 200).toString());
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Mic className="text-emerald-600" /> Coach IA Oral (EP3)
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Entraînez-vous à l'argumentation et à la relation client avec notre IA.</p>
        </div>

        {!activeScenario ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scenarios.map(s => (
              <Card key={s.id} className="p-8 border-none shadow-xl bg-white dark:bg-gray-800 rounded-[2.5rem] hover:scale-105 transition-transform cursor-pointer" onClick={() => startScenario(s)}>
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-3xl">💬</div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 italic">"{s.context}"</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl font-bold">Lancer la simulation</Button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-[2.5rem] min-h-[500px] flex flex-col">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">IA</div>
                  <div>
                    <h3 className="font-bold">{activeScenario.title}</h3>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase">Simulation en cours</p>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => setActiveScenario(null)} className="text-gray-400">Quitter</Button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto mb-6 pr-2">
                {chat.map((msg, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-2xl ${msg.type === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-tl-none'}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isFinished && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-3xl text-center border-2 border-emerald-100 dark:border-emerald-800">
                    <Award className="mx-auto text-emerald-600 mb-2" size={32} />
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-400">Simulation terminée !</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">Vous avez gagné 200 XP pour votre assiduité.</p>
                    <Button onClick={() => setActiveScenario(null)} className="mt-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl">Retour aux scénarios</Button>
                  </motion.div>
                )}
              </div>

              {!isFinished && (
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Tapez votre réponse orale ici..."
                    className="flex-1 bg-gray-50 dark:bg-gray-700 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                  <Button onClick={handleSend} className="bg-emerald-600 hover:bg-emerald-700 rounded-xl p-3">
                    <Send size={20} />
                  </Button>
                </div>
              )}
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
