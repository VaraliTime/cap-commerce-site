import { useState } from 'react';
import { Volume2, Search } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Term {
  terme: string;
  definition: string;
  pronunciation?: string;
}

export const GlossaireAudio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  const terms: Term[] = [
    { terme: "FIFO", definition: "First In, First Out - Premier entré, premier sorti", pronunciation: "fi-fo" },
    { terme: "SBAM", definition: "Sourire, Bonjour, Au revoir, Merci", pronunciation: "es-bam" },
    { terme: "CAP", definition: "Caractéristique, Avantage, Preuve", pronunciation: "ka-p" },
    { terme: "SONCAS", definition: "Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie", pronunciation: "son-kas" },
    { terme: "TMS", definition: "Troubles Musculo-Squelettiques", pronunciation: "té-em-esse" },
    { terme: "PRAP", definition: "Prévention des Risques liés à l'Activité Physique", pronunciation: "prap" },
    { terme: "PLV", definition: "Publicité sur le Lieu de Vente", pronunciation: "pé-el-vé" },
    { terme: "ILV", definition: "Information sur le Lieu de Vente", pronunciation: "i-el-vé" },
    { terme: "DLC", definition: "Date Limite de Consommation", pronunciation: "dé-el-sé" },
    { terme: "DLUO", definition: "Date Limite d'Utilisation Optimale", pronunciation: "dé-el-u-o" },
    { terme: "Facing", definition: "Nombre de produits visibles de face sur le rayon", pronunciation: "fé-sing" },
    { terme: "Merchandising", definition: "Art de présenter les produits en magasin", pronunciation: "mer-chan-dai-zing" },
    { terme: "Démarque", definition: "Différence entre stock théorique et réel", pronunciation: "dé-mark" },
    { terme: "Inventaire", definition: "Comptage physique des produits en stock", pronunciation: "in-van-tè-r" },
    { terme: "Rupture de stock", definition: "Absence d'un produit en rayon et réserve", pronunciation: "rup-tur de stok" }
  ];

  const filteredTerms = terms.filter(term =>
    term.terme.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playAudio = (terme: string) => {
    // Utiliser l'API Web Speech pour la prononciation
    const utterance = new SpeechSynthesisUtterance(terme);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🔊 Glossaire Audio</h2>
        <p className="text-gray-600 mb-4">
          Écoutez la prononciation des termes techniques du CAP EPC. Cliquez sur le haut-parleur pour entendre.
        </p>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Rechercher un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((term, idx) => (
          <Card 
            key={idx}
            onClick={() => setSelectedTerm(term)}
            className={`p-4 cursor-pointer transition-all border-2 ${
              selectedTerm?.terme === term.terme
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{term.terme}</h3>
                <p className="text-sm text-gray-600">{term.definition}</p>
                {term.pronunciation && (
                  <p className="text-xs text-emerald-600 mt-2 italic">
                    Prononciation: {term.pronunciation}
                  </p>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playAudio(term.terme);
                }}
                className="ml-2 p-2 hover:bg-emerald-100 rounded-lg transition-colors"
                title="Écouter la prononciation"
              >
                <Volume2 className="text-emerald-600" size={20} />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun terme trouvé pour "{searchTerm}"
        </div>
      )}
    </div>
  );
};
