import { Wrench, Clock, AlertTriangle } from 'lucide-react';

export const MaintenanceOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/95 backdrop-blur-md p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100">
        <div className="bg-emerald-600 p-6 flex justify-center">
          <div className="bg-white/20 p-4 rounded-full animate-pulse">
            <Wrench size={48} className="text-white" />
          </div>
        </div>
        
        <div className="p-8 text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
            Site en maintenance
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold mb-6 bg-emerald-50 py-2 px-4 rounded-full inline-flex">
            <Clock size={20} />
            <span>Indisponible jusqu'à 19h00</span>
          </div>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nous effectuons actuellement des mises à jour importantes pour améliorer votre expérience de révision. 
            Le site sera de nouveau accessible ce soir à partir de <strong>19h00</strong>.
          </p>
          
          <div className="flex items-start gap-3 text-left p-4 bg-amber-50 rounded-lg border border-amber-100">
            <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={18} />
            <p className="text-xs text-amber-800">
              Merci de votre patience. Toutes vos données de progression et vos quiz sont conservés en toute sécurité.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            Réussir son CAP Commerce • 2026
          </p>
        </div>
      </div>
    </div>
  );
};
