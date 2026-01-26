import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Flame, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Player {
  id: string;
  name: string;
  xp: number;
  rank: number;
  streak: number;
  league: "bronze" | "silver" | "gold" | "platinum";
  avatar: string;
}

export default function LeaguesAndStreaks() {
  const [selectedLeague, setSelectedLeague] = useState<"bronze" | "silver" | "gold" | "platinum">("gold");

  const currentPlayer: Player = {
    id: "user1",
    name: "Vous",
    xp: 2450,
    rank: 12,
    streak: 7,
    league: "gold",
    avatar: "🎓"
  };

  const leagueData = {
    bronze: {
      name: "Ligue Bronze",
      color: "from-orange-400 to-orange-600",
      players: [
        { id: "1", name: "Lucas M.", xp: 1200, rank: 1, streak: 3, league: "bronze", avatar: "👨‍🎓" },
        { id: "2", name: "Marie L.", xp: 1050, rank: 2, streak: 5, league: "bronze", avatar: "👩‍🎓" },
        { id: "3", name: "Thomas R.", xp: 950, rank: 3, streak: 2, league: "bronze", avatar: "👨‍💼" },
      ]
    },
    silver: {
      name: "Ligue Argent",
      color: "from-gray-300 to-gray-500",
      players: [
        { id: "1", name: "Sophie D.", xp: 1800, rank: 1, streak: 4, league: "silver", avatar: "👩‍🎓" },
        { id: "2", name: "Antoine B.", xp: 1650, rank: 2, streak: 6, league: "silver", avatar: "👨‍🎓" },
        { id: "3", name: "Léa M.", xp: 1500, rank: 3, streak: 3, league: "silver", avatar: "👩‍💼" },
      ]
    },
    gold: {
      name: "Ligue Or",
      color: "from-yellow-400 to-yellow-600",
      players: [
        { id: "1", name: "Alex T.", xp: 2800, rank: 1, streak: 12, league: "gold", avatar: "🏆" },
        { id: "2", name: "Sarah K.", xp: 2600, rank: 2, streak: 9, league: "gold", avatar: "👩‍🎓" },
        { id: "3", name: "Vous", xp: 2450, rank: 3, streak: 7, league: "gold", avatar: "🎓" },
        { id: "4", name: "Julien P.", xp: 2300, rank: 4, streak: 5, league: "gold", avatar: "👨‍🎓" },
      ]
    },
    platinum: {
      name: "Ligue Platine",
      color: "from-cyan-300 to-blue-600",
      players: [
        { id: "1", name: "Champion Elite", xp: 5000, rank: 1, streak: 30, league: "platinum", avatar: "👑" },
        { id: "2", name: "Master Pro", xp: 4500, rank: 2, streak: 25, league: "platinum", avatar: "🌟" },
      ]
    }
  };

  const currentLeagueData = leagueData[selectedLeague];

  return (
    <div className="space-y-8">
      {/* Streak Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Série Actuelle</p>
              <p className="text-4xl font-bold text-red-600">{currentPlayer.streak}</p>
              <p className="text-xs text-gray-500 mt-1">jours consécutifs</p>
            </div>
            <Flame className="w-16 h-16 text-red-500 opacity-20" />
          </div>
        </Card>

        <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Points d'Expérience</p>
              <p className="text-4xl font-bold text-blue-600">{currentPlayer.xp}</p>
              <p className="text-xs text-gray-500 mt-1">XP totaux</p>
            </div>
            <TrendingUp className="w-16 h-16 text-blue-500 opacity-20" />
          </div>
        </Card>

        <Card className="p-6 border-none shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Classement</p>
              <p className="text-4xl font-bold text-yellow-600">#{currentPlayer.rank}</p>
              <p className="text-xs text-gray-500 mt-1">dans la Ligue Or</p>
            </div>
            <Trophy className="w-16 h-16 text-yellow-500 opacity-20" />
          </div>
        </Card>
      </motion.div>

      {/* Leagues Selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {(Object.keys(leagueData) as Array<keyof typeof leagueData>).map((league) => (
          <button
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
              selectedLeague === league
                ? `bg-gradient-to-r ${leagueData[league].color} text-white shadow-lg scale-105`
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {leagueData[league].name}
          </button>
        ))}
      </div>

      {/* League Leaderboard */}
      <Card className="p-8 border-none shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          {currentLeagueData.name} - Classement
        </h2>

        <div className="space-y-4">
          {currentLeagueData.players.map((player, idx) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                player.id === "user1"
                  ? "bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-300"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="text-3xl">{player.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">#{player.rank}</span>
                  <span className="font-semibold text-gray-800">{player.name}</span>
                  {player.streak >= 7 && <Flame className="w-5 h-5 text-red-500" />}
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mt-1">
                  <span>🔥 Série: {player.streak} jours</span>
                  <span>⭐ XP: {player.xp}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">{player.xp}</div>
                <div className="text-xs text-gray-500">points</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rewards Info */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="text-purple-600" />
            Récompenses de la Semaine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-gray-600">🥇 1er Place</p>
              <p className="font-bold text-lg">+500 XP Bonus</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-gray-600">🔥 Meilleure Série</p>
              <p className="font-bold text-lg">Badge Exclusif</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-gray-600">📈 Progression</p>
              <p className="font-bold text-lg">Certificat</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
