import { useState, useEffect } from 'react';
import { Volume2, Search, AlertCircle, CheckCircle } from 'lucide-react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [supportsSpeech, setSupportsSpeech] = useState(true);
  const [lastPlayedTerm, setLastPlayedTerm] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier la disponibilité de l'API Web Speech
    const synth = window.speechSynthesis;
    if (!synth) {
      setSupportsSpeech(false);
    }
  }, []);

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
    try {
      // Arrêter la lecture précédente
      window.speechSynthesis.cancel();
      
      // Créer une nouvelle utterance
      const utterance = new SpeechSynthesisUtterance(terme);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.85;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Callbacks pour gérer l'état
      utterance.onstart = () => {
        setIsPlaying(true);
        setLastPlayedTerm(terme);
      };
      
      utterance.onend = () => {
        setIsPlaying(false);
        setLastPlayedTerm(null);
      };
      
      utterance.onerror = (event) => {
        console.error('Erreur de synthèse vocale:', event.error);
        setIsPlaying(false);
        alert('Erreur lors de la lecture audio. Veuillez vérifier les paramètres de votre navigateur.');
      };
      
      // Lancer la lecture
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Erreur lors de la lecture:', error);
      alert('La synthèse vocale n\'est pas disponible sur votre navigateur.');
    }
  };

  if (!supportsSpeech) {
    return (
      <div className="w-full">
        <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-yellow-900 mb-1">Synthèse vocale non disponible</h3>
            <p className="text-sm text-yellow-800">
              Votre navigateur ne supporte pas la synthèse vocale. Veuillez utiliser un navigateur moderne (Chrome, Firefox, Safari, Edge).
            </p>
          </div>
        </div>
      </div>
    );
  }

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

      {isPlaying && (
        <div className="mb-4 p-3 bg-emerald-50 border-2 border-emerald-200 rounded-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
          <span className="text-sm text-emerald-700 font-semibold">
            Lecture en cours: <strong>{lastPlayedTerm}</strong>
          </span>
        </div>
      )}

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
                disabled={isPlaying && lastPlayedTerm === term.terme}
                className={`ml-2 p-2 rounded-lg transition-colors flex-shrink-0 ${
                  isPlaying && lastPlayedTerm === term.terme
                    ? 'bg-emerald-200 cursor-wait'
                    : 'hover:bg-emerald-100'
                }`}
                title="Écouter la prononciation"
              >
                {isPlaying && lastPlayedTerm === term.terme ? (
                  <Volume2 className="text-emerald-700 animate-pulse" size={20} />
                ) : (
                  <Volume2 className="text-emerald-600" size={20} />
                )}
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

      <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-blue-900 mb-1">💡 Conseil</h4>
            <p className="text-sm text-blue-800">
              Si le son ne fonctionne pas, vérifiez que votre navigateur autorise la synthèse vocale et que votre volume est activé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
