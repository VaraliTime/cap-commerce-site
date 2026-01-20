import { useState, useEffect } from 'react';
import { Users, TrendingUp } from 'lucide-react';

export const AdvancedLiveVisitors = () => {
  const [visitors, setVisitors] = useState(Math.floor(Math.random() * (25 - 8 + 1)) + 8);
  const [peakVisitors, setPeakVisitors] = useState(Math.floor(Math.random() * (45 - 30 + 1)) + 30);
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('up');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        
        if (newValue > peakVisitors) {
          setPeakVisitors(newValue);
        }
        
        // Determine trend
        if (change > 0) {
          setTrend('up');
        } else if (change < 0) {
          setTrend('down');
        } else {
          setTrend('stable');
        }
        
        return newValue > 2 ? (newValue < 50 ? newValue : prev) : 3;
      });
    }, 8000); // Update every 8 seconds

    return () => clearInterval(interval);
  }, [peakVisitors]);

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} className="text-green-600" />;
      case 'down':
        return <TrendingUp size={14} className="text-red-600 transform rotate-180" />;
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-full hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Users size={18} className="text-emerald-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-emerald-700">
            {visitors} en direct
          </span>
          <span className="text-xs text-emerald-600">
            Pic: {peakVisitors}
          </span>
        </div>
      </div>
      <div className="ml-2">
        {getTrendIcon()}
      </div>
    </div>
  );
};
