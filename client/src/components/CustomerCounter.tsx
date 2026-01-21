import { useEffect, useState } from "react";

export default function CustomerCounter() {
  const [customerCount, setCustomerCount] = useState<number>(0);
  const [trend, setTrend] = useState<"up" | "down" | "stable">("stable");

  useEffect(() => {
    // Simulate customer count changes
    const updateCount = () => {
      setCustomerCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newCount = Math.max(0, prev + change);
        
        if (change > 0) setTrend("up");
        else if (change < 0) setTrend("down");
        else setTrend("stable");
        
        return newCount;
      });
    };

    // Update every 3-5 seconds
    const interval = setInterval(updateCount, Math.random() * 2000 + 3000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = () => {
    if (trend === "up") return "📈";
    if (trend === "down") return "📉";
    return "➡️";
  };

  const getStatusColor = () => {
    if (customerCount > 15) return "text-red-600";
    if (customerCount > 8) return "text-orange-600";
    return "text-green-600";
  };

  const getStatusLabel = () => {
    if (customerCount > 15) return "Très occupé";
    if (customerCount > 8) return "Occupé";
    return "Calme";
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
      <span className="text-2xl">👥</span>
      <div className="flex-1">
        <p className="text-xs text-gray-600">Clients en magasin</p>
        <div className="flex items-center gap-2">
          <p className={`font-bold text-lg ${getStatusColor()}`}>{customerCount}</p>
          <span className="text-lg">{getTrendIcon()}</span>
          <span className={`text-xs font-semibold ${getStatusColor()}`}>{getStatusLabel()}</span>
        </div>
      </div>
    </div>
  );
}
