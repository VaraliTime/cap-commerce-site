import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RotateCw, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

interface Scenario {
  id: string;
  customerType: string;
  profile: string;
  situation: string;
  challenge: string;
  tips: string[];
  difficulty: "Facile" | "Moyen" | "Difficile";
}

const scenarios: Scenario[] = [
  {
    id: "1",
    customerType: "Le Client Pressé",
    profile: "Homme, 40-50 ans, costume, regarde sa montre",
    situation: "Il entre rapidement dans le magasin, cherche un produit spécifique pour un cadeau d'entreprise.",
    challenge: "Il n'a que 5 minutes. Comment le servir efficacement sans le brusquer ?",
    tips: [
      "Accueillez-le immédiatement avec un sourire",
      "Posez une question directe : 'Que cherchez-vous ?'",
      "Proposez 2-3 options rapidement",
      "Facilitez le paiement (terminal rapide)"
    ],
    difficulty: "Moyen"
  },
  {
    id: "2",
    customerType: "Le Client Indécis",
    profile: "Femme, 25-35 ans, regarde plusieurs produits, compare les prix",
    situation: "Elle hésite entre plusieurs produits similaires depuis 10 minutes.",
    challenge: "Comment l'aider à faire un choix sans la mettre sous pression ?",
    tips: [
      "Écoutez ses besoins précis",
      "Mettez en avant les différences clés",
      "Proposez un essai ou un retour facile",
      "Utilisez des arguments rationnels (qualité, prix, durabilité)"
    ],
    difficulty: "Moyen"
  },
  {
    id: "3",
    customerType: "Le Client Mécontent",
    profile: "Homme, 30-45 ans, air frustré, tient un produit défectueux",
    situation: "Il revient avec un produit acheté la semaine dernière qui ne fonctionne pas.",
    challenge: "Comment transformer cette situation négative en opportunité ?",
    tips: [
      "Écoutez sans l'interrompre",
      "Présentez vos excuses sincères",
      "Proposez immédiatement une solution (échange, remboursement)",
      "Offrez un geste commercial (bon d'achat, remise)"
    ],
    difficulty: "Difficile"
  },
  {
    id: "4",
    customerType: "Le Client Curieux",
    profile: "Jeune adulte, 18-25 ans, pose beaucoup de questions, très engagé",
    situation: "Il pose des questions détaillées sur la composition, l'origine, l'impact écologique des produits.",
    challenge: "Comment montrer votre expertise et créer une relation de confiance ?",
    tips: [
      "Montrez votre connaissance du produit",
      "Soyez honnête si vous ne savez pas",
      "Proposez de chercher l'information ensemble",
      "Mettez en avant les valeurs durables du magasin"
    ],
    difficulty: "Moyen"
  },
  {
    id: "5",
    customerType: "Le Client Timide",
    profile: "Personne âgée, 60+ ans, regarde autour, semble perdue",
    situation: "Elle cherche un produit mais n'ose pas demander de l'aide.",
    challenge: "Comment l'approcher sans l'effrayer ?",
    tips: [
      "Approchez-vous calmement",
      "Souriez et présentez-vous",
      "Posez des questions ouvertes et bienveillantes",
      "Prenez le temps, ne soyez pas pressé",
      "Expliquez clairement et simplement"
    ],
    difficulty: "Facile"
  }
];

export default function AIScenarioGenerator() {
  const [currentScenario, setCurrentScenario] = useState<Scenario>(scenarios[0]);
  const [showTips, setShowTips] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  const generateRandomScenario = () => {
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    setCurrentScenario(randomScenario);
    setShowTips(false);
  };

  const markAsCompleted = () => {
    if (!completed.includes(currentScenario.id)) {
      setCompleted([...completed, currentScenario.id]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-green-100 text-green-800";
      case "Moyen":
        return "bg-yellow-100 text-yellow-800";
      case "Difficile":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="text-purple-600" />
          Générateur de Scénarios de Vente IA
        </h1>
        <p className="text-gray-600">Entraînez-vous à différents profils de clients pour perfectionner vos techniques de vente</p>
      </motion.div>

      {/* Current Scenario */}
      <motion.div
        key={currentScenario.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        {/* Scenario Card */}
        <Card className="p-8 border-none shadow-xl rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentScenario.customerType}</h2>
              <span className={`inline-block px-4 py-2 rounded-full font-semibold text-sm ${getDifficultyColor(currentScenario.difficulty)}`}>
                Difficulté: {currentScenario.difficulty}
              </span>
            </div>
            <div className="text-6xl">👤</div>
          </div>

          {/* Profile */}
          <div className="bg-white p-6 rounded-2xl mb-6 border-2 border-blue-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MessageCircle className="text-blue-600" />
              Profil du Client
            </h3>
            <p className="text-gray-700">{currentScenario.profile}</p>
          </div>

          {/* Situation */}
          <div className="bg-white p-6 rounded-2xl mb-6 border-2 border-purple-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Clock className="text-purple-600" />
              Situation
            </h3>
            <p className="text-gray-700">{currentScenario.situation}</p>
          </div>

          {/* Challenge */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl mb-6 border-2 border-orange-300">
            <h3 className="font-bold text-lg mb-2">🎯 Votre Défi</h3>
            <p className="text-gray-800 font-semibold">{currentScenario.challenge}</p>
          </div>

          {/* Tips Toggle */}
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            {showTips ? "Masquer les Conseils" : "Afficher les Conseils"}
          </button>

          {/* Tips */}
          {showTips && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-white p-6 rounded-2xl border-2 border-green-300 mb-6"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles className="text-green-600" />
                Conseils pour Réussir
              </h3>
              <ul className="space-y-3">
                {currentScenario.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={generateRandomScenario}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <RotateCw size={20} />
            Nouveau Scénario
          </Button>
          <Button
            onClick={markAsCompleted}
            className={`flex-1 font-bold py-3 rounded-xl transition-all ${
              completed.includes(currentScenario.id)
                ? "bg-green-600 text-white"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {completed.includes(currentScenario.id) ? "✓ Complété" : "Marquer comme Complété"}
          </Button>
        </div>
      </motion.div>

      {/* Progress */}
      <Card className="p-6 border-none shadow-lg rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50">
        <h3 className="font-bold text-lg mb-4">📊 Votre Progression</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-white rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-green-500 h-full transition-all"
              style={{ width: `${(completed.length / scenarios.length) * 100}%` }}
            ></div>
          </div>
          <span className="font-bold text-lg text-emerald-600">{completed.length}/{scenarios.length}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Scénarios maîtrisés</p>
      </Card>

      {/* All Scenarios List */}
      <Card className="p-8 border-none shadow-xl rounded-3xl">
        <h3 className="text-2xl font-bold mb-6">Tous les Scénarios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((scenario) => (
            <motion.button
              key={scenario.id}
              onClick={() => {
                setCurrentScenario(scenario);
                setShowTips(false);
              }}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl text-left transition-all border-2 ${
                currentScenario.id === scenario.id
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200 bg-white hover:border-purple-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{scenario.customerType}</p>
                  <p className="text-sm text-gray-600">{scenario.difficulty}</p>
                </div>
                {completed.includes(scenario.id) && <span className="text-2xl">✅</span>}
              </div>
            </motion.button>
          ))}
        </div>
      </Card>
    </div>
  );
}
