import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

// Génération de données initiales pour les 24 dernières heures
const generateInitialData = () => {
  const data = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 3600000);
    data.push({
      time: `${time.getHours()}h`,
      visitors: Math.floor(Math.random() * (20 - 5 + 1)) + 5
    });
  }
  return data;
};

export const TrafficChart = () => {
  const [data, setData] = useState(generateInitialData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)];
        const lastValue = prevData[prevData.length - 1].visitors;
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = Math.max(3, Math.min(30, lastValue + change));
        
        const now = new Date();
        newData.push({
          time: `${now.getHours()}h`,
          visitors: newValue
        });
        return newData;
      });
    }, 10000); // Mise à jour toutes les 10 secondes pour simuler le flux

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
          <TrendingUp size={20} />
        </div>
        <div>
          <h3 className="font-poppins font-semibold text-gray-900">Flux de visiteurs en direct</h3>
          <p className="text-xs text-gray-500">Activité sur les dernières 24 heures (simulée)</p>
        </div>
      </div>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 12, fill: '#9ca3af'}}
              interval={3}
            />
            <YAxis 
              hide={true}
              domain={[0, 'dataMax + 5']}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              labelStyle={{ fontWeight: 'bold', color: '#374151' }}
            />
            <Area 
              type="monotone" 
              dataKey="visitors" 
              stroke="#10B981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorVisitors)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-gray-600 font-medium">Mise à jour en temps réel</span>
        </div>
        <div className="text-emerald-600 font-bold">
          {data[data.length - 1].visitors} visiteurs actifs
        </div>
      </div>
    </Card>
  );
};
