import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Star, Target, Zap, Award, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [userStats, setUserStats] = useState({
    quizCompleted: 0,
    totalXP: 0,
    avgScore: 0,
    timeSpent: "0h 0m"
  });

  useEffect(() => {
    // Récupération des données réelles depuis le localStorage
    const quizHistory = JSON.parse(localStorage.getItem("quiz_history") || "[]");
    const xp = parseInt(localStorage.getItem("user_xp") || "0");
    
    const completed = quizHistory.length;
    const avg = completed > 0 
      ? Math.round(quizHistory.reduce((acc: number, curr: any) => acc + curr.score, 0) / completed) 
      : 0;

    setUserStats({
      quizCompleted: completed,
      totalXP: xp,
      avgScore: avg,
      timeSpent: `${Math.floor(xp / 100)}h ${xp % 60}m` // Simulation basée sur l'XP
    });
  }, []);

  const stats = [
    { label: "Quiz terminés", value: userStats.quizCompleted.toString(), icon: <CheckCircle className="text-emerald-500" /> },
    { label: "Temps de révision", value: userStats.timeSpent, icon: <Clock className="text-blue-500" /> },
    { label: "Score moyen", value: `${userStats.avgScore}%`, icon: <Star className="text-amber-500" /> },
    { label: "Points d'expérience", value: `${userStats.totalXP} XP`, icon: <Zap className="text-purple-500" /> }
  ];

  const badges = [
    { name: "Expert en Caisse", icon: "💰", unlocked: userStats.totalXP > 500, desc: "Atteindre 500 XP en révision." },
    { name: "Maître du Merch", icon: "📐", unlocked: userStats.quizCompleted >= 5, desc: "A complété au moins 5 quiz." },
    { name: "Champion du Tri", icon: "♻️", unlocked: userStats.avgScore >= 90, desc: "Avoir un score moyen de 90%." },
    { name: "Vendeur d'Élite", icon: "🤝", unlocked: userStats.totalXP > 2000, desc: "Atteindre le rang de Vendeur d'Élite (2000 XP)." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold mb-2 font-playfair">Mon Tableau de Bord</h1>
            <p className="text-gray-600 dark:text-gray-400">Suivez votre progression réelle vers l'obtention de votre CAP EPC.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-2xl">🎓</div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Niveau actuel</p>
              <p className="font-bold text-emerald-600">
                {userStats.totalXP < 500 ? "Apprenti Débutant" : userStats.totalXP < 1500 ? "Apprenti Confirmé" : "Expert Commerce"}
              </p>
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
                <Card key={i} className={`p-6 border-none shadow-lg rounded-3xl relative overflow-hidden transition-all ${badge.unlocked ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-800/50 opacity-60'}`}>
                  <div className="flex items-center gap-6">
                    <div className={`text-5xl ${badge.unlocked ? '' : 'grayscale'}`}>{badge.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{badge.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                    </div>
                  </div>
                  {!badge.unlocked && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-gray-200 dark:bg-gray-700 text-gray-500 p-1 rounded-full"><Target size={14} /></div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="text-amber-500" /> Classement Local
            </h2>
            <Card className="p-6 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl">
              <div className="space-y-6">
                {[
                  { name: "Lucas M.", score: "2450 XP", rank: 1, color: "text-amber-500" },
                  { name: "Sarah K.", score: "2100 XP", rank: 2, color: "text-gray-400" },
                  { name: "Moi", score: `${userStats.totalXP} XP`, rank: userStats.totalXP > 2100 ? 2 : 3, color: "text-emerald-600 font-bold" }
                ].sort((a, b) => parseInt(b.score) - parseInt(a.score)).map((user, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className={`font-bold w-6 ${user.color}`}>#{i + 1}</span>
                      <span className={user.name === "Moi" ? "font-bold" : ""}>{user.name}</span>
                    </div>
                    <span className="text-sm font-mono">{user.score}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-6 text-center italic">Le classement se met à jour selon vos points XP gagnés dans les quiz.</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
