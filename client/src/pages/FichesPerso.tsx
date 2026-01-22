import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { FilePlus, Download, Trash2, CheckCircle2, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { jsPDF } from "jspdf";

export default function FichesPerso() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const topics = [
    { id: "stocks", title: "Gestion des Stocks", bloc: "Bloc 1", content: "La gestion des stocks consiste à planifier et à mettre en œuvre les procédures pour maintenir un niveau de stock optimal. Objectifs : éviter les ruptures et minimiser les coûts de stockage. Points clés : Cadencier, Inventaire, Rotation des stocks." },
    { id: "inventaire", title: "Types d'Inventaire", bloc: "Bloc 1", content: "L'inventaire est le comptage physique des marchandises. Types : Inventaire annuel (obligatoire), Inventaire tournant (régulier), Inventaire permanent (informatique). Il permet de détecter la démarque inconnue." },
    { id: "merch", title: "Règles du Merchandising", bloc: "Bloc 2", content: "Le merchandising regroupe les techniques de présentation des produits. Règle des 5B de Kepner : Le bon produit, au bon endroit, au bon moment, au bon prix, en bonne quantité. Niveaux de vente : Yeux, Mains, Pieds." },
    { id: "sbam", title: "Méthode SBAM", bloc: "Bloc 3", content: "La méthode SBAM est la base de l'accueil client : Sourire, Bonjour, Au revoir, Merci. Elle garantit une première impression positive et fidélise la clientèle." },
    { id: "soncas", title: "Méthode SONCAS", bloc: "Bloc 3", content: "Le SONCAS permet d'identifier les motivations d'achat du client : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie. Utile pour adapter son argumentation de vente." },
    { id: "prap", title: "Gestes et Postures (PRAP)", bloc: "Bloc 4", content: "La Prévention des Risques liés à l'Activité Physique (PRAP) enseigne les bons gestes : dos droit, flexion des jambes, port de charge près du corps. Objectif : éviter les Troubles Musculo-Squelettiques (TMS)." },
    { id: "dechets", title: "Tri des Déchets", bloc: "Bloc 4", content: "Le tri sélectif en magasin est une obligation légale et environnementale. Flux principaux : Carton, Plastique (film étirable), Déchets banals, Déchets dangereux. Valorisation via le recyclage." }
  ];

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleGeneratePDF = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      const margin = 20;
      let yOffset = 20;

      // Titre principal
      doc.setFontSize(22);
      doc.setTextColor(16, 185, 129); // Emerald 500
      doc.text("Mes Fiches de Révision CAP EPC", margin, yOffset);
      yOffset += 15;

      doc.setFontSize(12);
      doc.setTextColor(100, 116, 139); // Slate 500
      doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, margin, yOffset);
      yOffset += 20;

      selectedTopics.forEach((id) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          // Vérifier si on a besoin d'une nouvelle page
          if (yOffset > 250) {
            doc.addPage();
            yOffset = 20;
          }

          // En-tête du thème
          doc.setFontSize(10);
          doc.setTextColor(156, 163, 175); // Gray 400
          doc.text(topic.bloc.toUpperCase(), margin, yOffset);
          yOffset += 7;

          doc.setFontSize(16);
          doc.setTextColor(31, 41, 55); // Gray 800
          doc.text(topic.title, margin, yOffset);
          yOffset += 10;

          // Ligne de séparation
          doc.setDrawColor(229, 231, 235); // Gray 200
          doc.line(margin, yOffset, 190, yOffset);
          yOffset += 10;

          // Contenu
          doc.setFontSize(12);
          doc.setTextColor(55, 65, 81); // Gray 700
          const splitText = doc.splitTextToSize(topic.content, 170);
          doc.text(splitText, margin, yOffset);
          
          yOffset += (splitText.length * 7) + 20;
        }
      });

      // Pied de page
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(156, 163, 175);
        doc.text(`Page ${i} sur ${pageCount} - Réussite CAP Commerce`, 105, 285, { align: "center" });
      }

      doc.save("Mes_Fiches_CAP_Commerce.pdf");
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-playfair">Générateur de Fiches</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Créez votre fiche de révision personnalisée en sélectionnant les thèmes que vous souhaitez réviser.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ListChecks className="text-emerald-600" /> Choisissez vos thèmes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <Card 
                  key={topic.id} 
                  onClick={() => toggleTopic(topic.id)}
                  className={`p-6 cursor-pointer transition-all border-2 rounded-2xl ${selectedTopics.includes(topic.id) ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-transparent bg-white dark:bg-gray-800 hover:border-gray-200'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-gray-400">{topic.bloc}</span>
                      <h3 className="font-bold text-lg">{topic.title}</h3>
                    </div>
                    {selectedTopics.includes(topic.id) && <CheckCircle2 className="text-emerald-500" />}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-8 border-none shadow-2xl bg-white dark:bg-gray-800 rounded-3xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Ma Fiche</h2>
              {selectedTopics.length === 0 ? (
                <p className="text-gray-400 italic text-center py-8">Aucun thème sélectionné</p>
              ) : (
                <div className="space-y-4 mb-8">
                  {selectedTopics.map(id => {
                    const topic = topics.find(t => t.id === id);
                    return (
                      <div key={id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <span className="text-sm font-medium">{topic?.title}</span>
                        <button onClick={() => toggleTopic(id)} className="text-red-400 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
              <Button 
                onClick={handleGeneratePDF}
                disabled={selectedTopics.length === 0 || isGenerating}
                className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 rounded-xl font-bold shadow-lg shadow-emerald-100 dark:shadow-none"
              >
                <Download className="mr-2" /> {isGenerating ? "Génération..." : "Générer mon PDF"}
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
