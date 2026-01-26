import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Star, Flame, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Ligues() {
  const leaderboards = [
    { name: "Thomas L.", xp: 12450, level: 24, streak: 15, avatar: "TL" },
    { name: "Sarah M.", xp: 11200, level: 22, streak: 8, avatar: "SM" },
    { name: "Kevin D.", xp: 9800, level: 19, streak: 12, avatar: "KD" },
    { name: "Julie R.", xp: 8500, level: 17, streak: 5, avatar: "JR" },
    { name: "Lucas B.", xp: 7200, level: 15, streak: 3, avatar: "LB" },
  ];

  const badges = [
    { name: "Expert Caisse", icon: <Zap className="text-yellow-500" />, desc: "10 simulateurs sans faute" },
    { name: "Maître Stock", icon: <Trophy className="text-emerald-500" />, desc: "Cadencier maîtrisé" },
    { name: "Vendeur Élite", icon: <Star className="text-blue-500" />, desc: "Score max au Coach IA" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Classement */}
          <div className="flex-grow">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2 font-playfair">Ligue des Champions</h1>
              <p className="text-gray-600">Gagnez de l'XP pour monter dans le classement hebdomadaire.</p>
            </div>

            <Card className="p-0 border-none shadow-xl bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
              <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Trophy size={32} />
                  <div>
                    <h2 className="font-bold text-xl">Ligue Émeraude</h2>
                    <p className="text-emerald-100 text-sm">Fin de la saison dans 3 jours</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold">#12</span>
                  <p className="text-xs uppercase tracking-widest opacity-80">Votre Rang</p>
                </div>
              </div>

              <div className="p-4">
                {leaderboards.map((user, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-2xl mb-2 ${i === 0 ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 font-bold text-lg ${i < 3 ? 'text-emerald-600' : 'text-gray-400'}`}>
                        {i + 1}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center font-bold text-emerald-700">
                        {user.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold">{user.name}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Flame size={12} className="text-orange-500" /> {user.streak}j</span>
                          <span>Niv. {user.level}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-emerald-600">{user.xp.toLocaleString()}</span>
                      <p className="text-[10px] uppercase text-gray-400">XP</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar Badges & Défis */}
          <div className="w-full md:w-80 space-y-8">
            <Card className="p-6 border-none shadow-lg bg-white dark:bg-gray-800 rounded-3xl">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Medal className="text-emerald-600" /> Vos Badges
              </h3>
              <div className="space-y-4">
                {badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 dark:bg-gray-700/50">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{badge.name}</h4>
                      <p className="text-[10px] text-gray-500">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-emerald-600 text-sm">Voir tout</Button>
            </Card>

            <Card className="p-6 border-none shadow-lg bg-emerald-600 text-white rounded-3xl">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Users /> Quiz en Duel
              </h3>
              <p className="text-sm text-emerald-100 mb-6">Défiez un autre élève en direct sur 10 questions !</p>
              <Button className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-bold rounded-xl">
                Trouver un adversaire
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
