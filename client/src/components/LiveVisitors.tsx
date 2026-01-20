import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export const LiveVisitors = () => {
  const [visitors, setVisitors] = useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return newValue > 2 ? (newValue < 25 ? newValue : prev) : 3;
      });
    }, 10000); // Mise à jour toutes les 10 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium animate-pulse">
      <Users size={16} />
      <span>{visitors} en direct</span>
    </div>
  );
};
