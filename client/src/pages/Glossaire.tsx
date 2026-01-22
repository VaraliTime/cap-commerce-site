import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Volume2, Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Glossaire() {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    { term: "Assortiment", definition: "Ensemble des produits proposés par un point de vente.", category: "Merchandising" },
    { term: "Balisage", definition: "Ensemble des étiquettes et panneaux informant le client sur les prix et produits.", category: "Vente" },
    { term: "Cadencier", definition: "Outil permettant de suivre les ventes et de déclencher les commandes.", category: "Gestion" },
    { term: "DLC", definition: "Date Limite de Consommation (impérative).", category: "Gestion" },
    { term: "DLUO / DDM", definition: "Date de Durabilité Minimale (peut être consommé après).", category: "Gestion" },
    { term: "Démarque Inconnue", definition: "Différence entre le stock théorique et le stock réel (vol, casse, erreurs).", category: "Gestion" },
    { term: "Facing", definition: "Action de ramener les produits vers l'avant du rayon pour donner une impression de plein.", category: "Merchandising" },
    { term: "FIFO", definition: "First In First Out (Premier Entré, Premier Sorti).", category: "Logistique" },
    { term: "Gondole", definition: "Meuble de vente à double face utilisé dans les grandes surfaces.", category: "Équipement" },
    { term: "ILV", definition: "Information sur le Lieu de Vente (guide le client).", category: "Vente" },
    { term: "Linéaire", definition: "Longueur de l'étagère occupée par un produit ou une catégorie de produits.", category: "Merchandising" },
    { term: "PLV", definition: "Publicité sur le Lieu de Vente (pousse à l'achat).", category: "Vente" },
    { term: "SBAM", definition: "Sourire, Bonjour, Au revoir, Merci. La base de l'accueil client.", category: "Vente" },
    { term: "SONCAS", definition: "Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie.", category: "Vente" },
    { term: "Tête de gondole", definition: "Emplacement situé à l'extrémité d'un rayon, utilisé pour les promotions.", category: "Merchandising" },
    { term: "Zone de chalandise", definition: "Zone géographique d'où provient la majorité des clients.", category: "Marketing" },
    { term: "Chiffre d'Affaires", definition: "Montant total des ventes réalisées par un magasin sur une période donnée.", category: "Gestion" }
  ];

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    window.speechSynthesis.speak(utterance);
  };

  const filteredTerms = terms.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-playfair flex items-center justify-center gap-3">
            <BookOpen className="text-emerald-600" /> Glossaire Audio
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Maîtrisez le vocabulaire technique du commerce. Cliquez sur l'icône pour écouter la définition.</p>
        </div>

        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            className="pl-10 py-6 text-lg rounded-2xl shadow-sm border-none bg-white dark:bg-gray-800" 
            placeholder="Rechercher un terme..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Card className="p-6 hover:shadow-xl transition-all border-none bg-white dark:bg-gray-800 group h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-xl font-bold mt-2">{item.term}</h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
                    onClick={() => speak(`${item.term}. ${item.definition}`)}
                  >
                    <Volume2 size={18} />
                  </Button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm flex-grow">{item.definition}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
