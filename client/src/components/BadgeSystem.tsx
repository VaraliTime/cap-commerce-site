import { Award, Trophy, Zap, Target, Crown, Flame } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  requirement: string;
  unlocked: boolean;
}

interface BadgeSystemProps {
  score: number;
  questionsAnswered: number;
}

export const BadgeSystem = ({ score, questionsAnswered }: BadgeSystemProps) => {
  const badges: Badge[] = [
    {
      id: 'first_step',
      name: 'Premier Pas',
      description: 'Complétez votre première partie',
      icon: <Zap size={32} />,
      color: 'bg-blue-100 text-blue-600',
      requirement: '1 partie',
      unlocked: questionsAnswered >= 1
    },
    {
      id: 'apprentice',
      name: 'Apprenti Commerçant',
      description: 'Atteignez 500 points',
      icon: <Target size={32} />,
      color: 'bg-green-100 text-green-600',
      requirement: '500 pts',
      unlocked: score >= 500
    },
    {
      id: 'expert',
      name: 'Expert du CAP',
      description: 'Atteignez 1000 points',
      icon: <Trophy size={32} />,
      color: 'bg-yellow-100 text-yellow-600',
      requirement: '1000 pts',
      unlocked: score >= 1000
    },
    {
      id: 'master',
      name: 'Maître du Commerce',
      description: 'Atteignez 2000 points',
      icon: <Crown size={32} />,
      color: 'bg-purple-100 text-purple-600',
      requirement: '2000 pts',
      unlocked: score >= 2000
    },
    {
      id: 'legend',
      name: 'Légende Vivante',
      description: 'Atteignez 5000 points',
      icon: <Flame size={32} />,
      color: 'bg-red-100 text-red-600',
      requirement: '5000 pts',
      unlocked: score >= 5000
    },
    {
      id: 'champion',
      name: 'Champion du Podium',
      description: 'Entrez dans le top 3 du classement',
      icon: <Award size={32} />,
      color: 'bg-amber-100 text-amber-600',
      requirement: 'Top 3',
      unlocked: false // À implémenter avec le classement réel
    }
  ];

  const unlockedCount = badges.filter(b => b.unlocked).length;

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">🏆 Vos Badges</h3>
        <p className="text-gray-600">
          {unlockedCount} / {badges.length} badges débloqués
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedCount / badges.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map(badge => (
          <Card 
            key={badge.id} 
            className={`p-4 text-center transition-all ${
              badge.unlocked 
                ? `${badge.color} border-2 border-current` 
                : 'bg-gray-100 text-gray-400 border-2 border-gray-200 opacity-60'
            }`}
          >
            <div className="flex justify-center mb-2">
              {badge.icon}
            </div>
            <h4 className="font-bold text-sm mb-1">{badge.name}</h4>
            <p className="text-xs mb-2 opacity-80">{badge.description}</p>
            <span className="text-xs font-semibold">{badge.requirement}</span>
            {badge.unlocked && (
              <div className="mt-2 text-xs font-bold">✓ Débloqué</div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
