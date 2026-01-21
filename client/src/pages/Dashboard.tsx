import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Star, Target, Zap, Award, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    { label: "Quiz terminés", value: "12", icon: <CheckCircle className="text-emerald-500" /> },
    { label: "Temps de révision", value: "8h 45m", icon: <Clock className="text-blue-500" /> },
    { label: "Score moyen", value: "85%", icon: <Star className="text-amber-500" /> },
    { label: "Points d'expérience", value: "1250 XP", icon: <Zap className="text-purple-500" /> }
  ];

  const badges = [
    { name: "Expert en Caisse", icon: "💰", unlocked: true, desc: "A réussi 5 simulations de caisse sans erreur." },
    { name: "Maître du Merch", icon: "📐", unlocked: true, desc: "A complété tous les cours du Bloc 2." },
    { name: "Champion du Tri", icon: "♻️", unlocked: false, desc: "Atteindre 100% au jeu de tri PSE." },
    { name: "Vendeur d'Élite", icon: "🤝", unlocked: false, desc: "Réussir 3 scénarios oraux EP3." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold mb-2 font-playfair">Mon Tableau de Bord</h1>
            <p className="text-gray-600">Suivez votre progression vers l'obtention de votre CAP EPC.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">🎓</div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Niveau actuel</p>
              <p className="font-bold text-emerald-600">Apprenti Confirmé</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6 border-none shadow-md bg-white dark:bg-gray-800 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-emerald-600" /> Mes Badges de Compétences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {badges.map((badge, i) => (
                <Card key={i} className={`p-6 border-none shadow-lg rounded-3xl relative overflow-hidden ${badge.unlocked ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800/50 opacity-60'}`}>
                  <div className="flex items-center gap-6">
                    <div className={`text-5xl ${badge.unlocked ? '' : 'grayscale'}`}>{badge.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{badge.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                    </div>
                  </div>
                  {!badge.unlocked && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-gray-200 text-gray-500 p-1 rounded-full"><Target size={14} /></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="text-amber-500" /> Classement
            </h2>
            <Card className="p-6 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl">
              <div className="space-y-6">
                {[
                  { name: "Lucas M.", score: "2450 XP", rank: 1, color: "text-amber-500" },
                  { name: "Sarah K.", score: "2100 XP", rank: 2, color: "text-gray-400" },
                  { name: "Moi", score: "1250 XP", rank: 12, color: "text-emerald-600 font-bold" }
                ].map((user, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className={`font-bold w-6 ${user.color}`}>#{user.rank}</span>
                      <span className={user.name === "Moi" ? "font-bold" : ""}>{user.name}</span>
                    </div>
                    <span className="text-sm font-mono">{user.score}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-8 bg-gray-50 text-gray-600 hover:bg-gray-100 border-none">Voir tout le classement</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
