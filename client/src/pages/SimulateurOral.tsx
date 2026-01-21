import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Target, MessageSquare, CheckCircle, RefreshCw, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function SimulateurOral() {
  const [scenario, setScenario] = useState<any>(null);
  const [step, setStep] = useState(0);

  const scenarios = [
    {
      title: "Vente d'un smartphone",
      client: "Un client hésitant qui cherche un téléphone avec une bonne autonomie pour son travail.",
      objectives: ["Identifier le besoin", "Argumenter sur la batterie", "Proposer un accessoire"],
      tips: "Utilisez la méthode SONCAS (Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie)."
    },
    {
      title: "Gestion d'un conflit",
      client: "Un client mécontent car le produit qu'il a acheté hier est en promotion aujourd'hui.",
      objectives: ["Écouter sans couper", "Rester calme", "Proposer une solution commerciale"],
      tips: "Le client doit se sentir écouté. Proposez un avoir ou un petit geste commercial."
    },
    {
      title: "Vente additionnelle",
      client: "Une cliente achète une paire de chaussures de sport pour commencer le running.",
      objectives: ["Vérifier la pointure", "Proposer des chaussettes techniques", "Parler de l'entretien"],
      tips: "N'oubliez pas le SBAM dès l'entrée de la cliente dans le rayon."
    }
  ];

  const generateScenario = () => {
    const s = scenarios[Math.floor(Math.random() * scenarios.length)];
    setScenario(s);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-playfair">Simulateur d'Épreuve Orale</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Préparez-vous à l'épreuve EP3 (Conseil et Vente) avec des scénarios aléatoires et des conseils d'experts.</p>
        </div>

        {!scenario ? (
          <div className="flex justify-center">
            <Button onClick={generateScenario} size="lg" className="bg-emerald-600 hover:bg-emerald-700 py-8 px-12 text-xl rounded-3xl shadow-xl">
              Générer un scénario d'examen
            </Button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto">
            <Card className="p-8 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-6 py-2 rounded-bl-2xl font-bold">
                Épreuve EP3
              </div>
              
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-emerald-600" /> {scenario.title}
              </h2>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl mb-8 border-l-4 border-emerald-500">
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-2 flex items-center gap-2">
                  <User size={16} /> Profil du Client
                </h4>
                <p className="text-xl italic">"{scenario.client}"</p>
              </div>

              <div className="space-y-6 mb-8">
                <h4 className="font-bold text-lg">Vos objectifs :</h4>
                {scenario.objectives.map((obj: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="text-emerald-500" size={20} />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl mb-8">
                <h4 className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-2 mb-2">
                  <Star size={18} /> Conseil du Jury
                </h4>
                <p className="text-amber-800 dark:text-amber-300 text-sm">{scenario.tips}</p>
              </div>

              <div className="flex gap-4">
                <Button onClick={generateScenario} variant="outline" className="flex-1 py-6 rounded-xl">
                  <RefreshCw className="mr-2" size={18} /> Autre scénario
                </Button>
                <Button onClick={() => setScenario(null)} className="flex-1 py-6 rounded-xl bg-gray-900">
                  Terminer la session
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  );
}
