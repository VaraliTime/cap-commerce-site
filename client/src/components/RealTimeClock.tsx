import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const RealTimeClock = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [day, setDay] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Format time (HH:MM:SS)
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
      
      // Format date (DD/MM/YYYY)
      const day_num = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setDate(`${day_num}/${month}/${year}`);
      
      // Format day name
      const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      setDay(days[now.getDay()]);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full text-sm font-mono text-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <Clock size={16} className="text-emerald-600" />
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-bold text-emerald-700">{time}</span>
        <span className="text-xs text-gray-600">{day} {date}</span>
      </div>
    </div>
  );
};
