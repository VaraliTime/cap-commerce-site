import React from 'react';

interface SchemaProps {
  type: string;
}

const EducationalSchemas: React.FC<SchemaProps> = ({ type }) => {
  switch (type) {
    case 'flux_logistique':
      return (
        <div className="bg-white p-8 rounded-[2rem] border border-emerald-100 shadow-inner mb-10 overflow-x-auto">
          <h4 className="text-center font-bold text-emerald-800 mb-8 uppercase tracking-widest text-sm">Le Flux de Réception des Marchandises</h4>
          <div className="flex items-center justify-between min-w-[600px] gap-4">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl border-2 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">🚛</div>
              <span className="font-bold text-xs text-emerald-900">Fournisseur</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-emerald-200 to-emerald-500 relative">
              <div className="absolute -top-2 right-0 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl border-2 border-emerald-300 group-hover:scale-110 transition-transform duration-500 shadow-md">📦</div>
              <span className="font-bold text-xs text-emerald-900">Quai de Déchargement</span>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-emerald-500 to-emerald-200"></div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl border-2 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">🏪</div>
              <span className="font-bold text-xs text-emerald-900">Mise en Rayon</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-[10px] text-center text-emerald-600 font-medium">
            <div>Contrôle des documents (BL/BC)</div>
            <div>Contrôle Qualité & Quantité</div>
            <div>Validation & Stockage</div>
          </div>
        </div>
      );

    case 'niveaux_vente':
      return (
        <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl mb-10">
          <h4 className="text-center font-bold text-indigo-400 mb-8 uppercase tracking-widest text-sm">Impact des Niveaux de Présentation</h4>
          <div className="space-y-4 max-w-md mx-auto">
            <div className="relative group">
              <div className="h-16 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-6 group-hover:border-indigo-500 transition-colors">
                <div className="w-1/3 text-xs font-bold text-slate-400">NIVEAU CHAPEAU</div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-indigo-500"></div>
                </div>
                <div className="w-12 text-right text-[10px] font-bold text-indigo-400">10%</div>
              </div>
            </div>
            <div className="relative group">
              <div className="h-20 bg-indigo-900/30 rounded-xl border-2 border-indigo-500/50 flex items-center px-6 group-hover:scale-105 transition-transform">
                <div className="w-1/3 text-xs font-bold text-indigo-300">NIVEAU DES YEUX</div>
                <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-[70%] h-full bg-indigo-400 animate-pulse"></div>
                </div>
                <div className="w-12 text-right text-[10px] font-bold text-indigo-400">70%</div>
              </div>
              <div className="absolute -right-2 -top-2 bg-indigo-500 text-white text-[8px] px-2 py-1 rounded-full font-bold">ZONE VENDEUSE</div>
            </div>
            <div className="relative group">
              <div className="h-16 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-6 group-hover:border-indigo-500 transition-colors">
                <div className="w-1/3 text-xs font-bold text-slate-400">NIVEAU DES MAINS</div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-[30%] h-full bg-indigo-500"></div>
                </div>
                <div className="w-12 text-right text-[10px] font-bold text-indigo-400">30%</div>
              </div>
            </div>
            <div className="relative group">
              <div className="h-16 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-6 group-hover:border-indigo-500 transition-colors">
                <div className="w-1/3 text-xs font-bold text-slate-400">NIVEAU DES PIEDS</div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-[5%] h-full bg-indigo-500"></div>
                </div>
                <div className="w-12 text-right text-[10px] font-bold text-indigo-400">5%</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'entonnoir_vente':
      return (
        <div className="bg-white p-8 rounded-[2rem] border border-pink-100 shadow-inner mb-10">
          <h4 className="text-center font-bold text-pink-800 mb-8 uppercase tracking-widest text-sm">L'Entonnoir de la Vente Réussie</h4>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-full max-w-[300px] h-12 bg-pink-600 rounded-t-3xl flex items-center justify-center text-white font-bold text-xs shadow-lg">ACCUEIL (SBAM)</div>
            <div className="w-[85%] max-w-[255px] h-12 bg-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-md">DÉCOUVERTE DES BESOINS</div>
            <div className="w-[70%] max-w-[210px] h-12 bg-pink-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">ARGUMENTATION (CAP)</div>
            <div className="w-[55%] max-w-[165px] h-12 bg-pink-300 flex items-center justify-center text-white font-bold text-xs">TRAITEMENT DES OBJECTIONS</div>
            <div className="w-[40%] max-w-[120px] h-12 bg-pink-200 rounded-b-3xl flex items-center justify-center text-pink-800 font-bold text-xs border-2 border-pink-300">CONCLUSION</div>
          </div>
          <p className="mt-6 text-center text-[10px] text-pink-500 italic">Chaque étape filtre et affine la relation pour aboutir à la vente.</p>
        </div>
      );

    default:
      return null;
  }
};

export default EducationalSchemas;
