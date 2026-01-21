import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Info, Bell } from "lucide-react";

interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "error";
  title: string;
  message: string;
  timestamp: Date;
}

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulate notifications
    const notificationExamples = [
      {
        type: "success" as const,
        title: "Livraison reçue",
        message: "Tomates - 50 kg livrés et vérifiés"
      },
      {
        type: "warning" as const,
        title: "Stock faible",
        message: "Lait - Stock minimum atteint"
      },
      {
        type: "info" as const,
        title: "Rappel",
        message: "Approvisionnement des rayons à 14h"
      },
      {
        type: "error" as const,
        title: "Rupture de stock",
        message: "Viande - Plus de stock disponible"
      }
    ];

    const interval = setInterval(() => {
      const randomNotif = notificationExamples[
        Math.floor(Math.random() * notificationExamples.length)
      ];

      const newNotification: Notification = {
        id: Date.now().toString(),
        type: randomNotif.type,
        title: randomNotif.title,
        message: randomNotif.message,
        timestamp: new Date()
      };

      setNotifications((prev) => [newNotification, ...prev].slice(0, 10));

      // Auto-remove after 5 seconds
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n.id !== newNotification.id)
        );
      }, 5000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "warning":
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-orange-50 border-orange-200";
      case "error":
        return "bg-red-50 border-red-200";
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      >
        <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-poppins font-semibold text-gray-900 dark:text-white">
              Notifications
            </h3>
          </div>

          {notifications.length === 0 ? (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              <p>Aucune notification</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 border-l-4 ${getStyles(notif.type)} animate-in fade-in slide-in-from-top-2 duration-300`}
                >
                  <div className="flex gap-3">
                    {getIcon(notif.type)}
                    <div className="flex-1">
                      <p className="font-poppins font-semibold text-gray-900 dark:text-white text-sm">
                        {notif.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                        {notif.message}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                        {notif.timestamp.toLocaleTimeString("fr-FR")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
