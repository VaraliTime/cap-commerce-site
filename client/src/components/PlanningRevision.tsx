import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, Clock, BookOpen, Download } from "lucide-react";

export const PlanningRevision = () => {
  const [duration, setDuration] = useState<2 | 4>(2);

  const planning2Weeks = [
    { jour: "Lundi", sujet: "Bloc 1 : Réception des marchandises", details: "Documents (BL, BC), contrôles quantitatifs et qualitatifs." },
    { jour: "Mardi", sujet: "Bloc 1 : Suivi des stocks", details: "Inventaire, démarque inconnue, rotation des stocks (FIFO)." },
    { jour: "Mercredi", sujet: "Bloc 2 : Merchandising de base", details: "Les 5B de Kepner, niveaux de présentation, facing." },
    { jour: "Jeudi", sujet: "Bloc 2 : Approvisionnement", details: "Ruptures, cadencier, étiquetage et balisage." },
    { jour: "Vendredi", sujet: "Bloc 3 : Accueil et SBAM", details: "Les étapes de l'accueil, posture professionnelle." },
    { jour: "Samedi", sujet: "Bloc 3 : Techniques de vente", details: "Découverte des besoins, méthode CAP, vente additionnelle." },
    { jour: "Dimanche", sujet: "Repos ou Quiz global", details: "Faites un quiz complet sur le site pour valider vos acquis." },
  ];

  const planning4Weeks = [
    { semaine: 1, focus: "Bloc 1 : Logistique & Stockage", details: "Concentrez-vous sur la réception et la gestion des réserves." },
    { semaine: 2, focus: "Bloc 2 : Merchandising & Rayon", details: "Travaillez l'implantation et la mise en valeur des produits." },
    { semaine: 3, focus: "Bloc 3 : Vente & Relation Client", details: "Pratiquez les étapes de la vente et le traitement des objections." },
    { semaine: 4, focus: "Bloc 4 & Révisions Finales", details: "PSE, environnement et entraînement aux oraux." },
  ];

  return (
    <Card className="p-8 border-2 border-emerald-100 dark:border-emerald-900/30 bg-white dark:bg-gray-800 shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-b pb-6 border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Calendar className="text-emerald-600" size={32} />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Planning de Révision</h2>
            <p className="text-sm text-gray-500">Organisez votre réussite étape par étape.</p>
          </div>
        </div>
        <div className="flex bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
          <button 
            onClick={() => setDuration(2)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${duration === 2 ? 'bg-white dark:bg-gray-800 text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            2 Semaines (Intensif)
          </button>
          <button 
            onClick={() => setDuration(4)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${duration === 4 ? 'bg-white dark:bg-gray-800 text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            4 Semaines (Serein)
          </button>
        </div>
      </div>

      {duration === 2 ? (
        <div className="space-y-4">
          {planning2Weeks.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 rounded-2xl transition-colors group">
              <div className="w-24 shrink-0">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">{item.jour}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.sujet}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.details}</p>
              </div>
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="text-emerald-200" size={24} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planning4Weeks.map((item, idx) => (
            <Card key={idx} className="p-6 border-2 border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.semaine}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Semaine {item.semaine}</h4>
              </div>
              <h5 className="text-emerald-600 font-bold text-sm mb-2">{item.focus}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.details}</p>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1"><Clock size={16} /> 1h / jour</div>
          <div className="flex items-center gap-1"><BookOpen size={16} /> Tous les blocs</div>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
          <Download size={18} /> Télécharger mon planning (PDF)
        </Button>
      </div>
    </Card>
  );
};
