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
    { 
      id: "cadencier", 
      title: "Le Cadencier de Commande", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "Le cadencier est l'outil de base du gestionnaire de rayon. Il permet de suivre les ventes, de contrôler les stocks et de calculer les quantités à commander de façon précise." },
        { type: "subtitle", value: "1. Fonctionnement du Cadencier" },
        { type: "text", value: "Il se présente sous forme de tableau où l'on note pour chaque produit et chaque période (jour ou semaine) :" },
        { type: "table", headers: ["Élément", "Définition", "Utilité"], rows: [
          ["Stock Initial (SI)", "Stock en début de période", "Savoir ce qu'on a"],
          ["Livraison (L)", "Quantité reçue", "Mise à jour du stock"],
          ["Stock Final (SF)", "Stock en fin de période", "Calculer les ventes"],
          ["Ventes (V)", "SI + L - SF", "Analyser la demande"]
        ]},
        { type: "subtitle", value: "2. Les Calculs de Commande" },
        { type: "text", value: "Pour commander la juste quantité, on utilise la formule du besoin :" },
        { type: "list", value: [
          "Ventes Prévisionnelles (VP) : Moyenne des ventes passées ajustée selon la météo ou les promos.",
          "Besoin Total (BT) : VP + Stock de Sécurité.",
          "Quantité à Commander (Q) : Besoin Total - Stock Réel."
        ]},
        { type: "example", value: "EXEMPLE : Vous vendez 20 jus d'orange par jour. Délai livraison = 2 jours. Stock sécurité = 10. Stock actuel = 15.\nBesoin pour 2 jours = 40 + 10 (sécurité) = 50.\nCommande = 50 - 15 = 35 unités." },
        { type: "expert", value: "CONSEIL : Un cadencier mal tenu entraîne soit des ruptures (perte de client), soit de la démarque (perte d'argent). La rigueur est la clé !" },
        { type: "summary", value: "Le cadencier transforme l'intuition en décision mathématique pour une gestion de stock parfaite." }
      ]
    },
    { 
      id: "stocks", 
      title: "Gestion des Stocks", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "La gestion des stocks est le pilotage des flux de marchandises. Elle doit garantir la disponibilité des produits tout en optimisant les coûts financiers et logistiques." },
        { type: "subtitle", value: "1. Les Enjeux et Objectifs" },
        { type: "list", value: [
          "Disponibilité : Éviter la rupture de stock qui entraîne une perte de CA.",
          "Rentabilité : Minimiser le coût de possession (stockage, assurance).",
          "Qualité : Assurer la rotation pour éviter l'obsolescence (DLC/DLUO)."
        ]},
        { type: "subtitle", value: "2. Indicateurs et Formules" },
        { type: "text", value: "• Stock Minimum : Ventes durant le délai de livraison.\n• Stock de Sécurité : Surplus pour pallier les aléas.\n• Stock d'Alerte : Stock Minimum + Stock de Sécurité." },
        { type: "graph_schema", value: "CYCLE DE RÉAPPRO", steps: ["Analyse", "Commande", "Réception", "Vente"] },
        { type: "summary", value: "Une gestion rigoureuse repose sur l'équilibre entre service client et coûts." }
      ]
    },
    { 
      id: "inventaire", 
      title: "Types d'Inventaire", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "L'inventaire est une opération de contrôle physique visant à vérifier la concordance entre le stock réel et le stock théorique." },
        { type: "subtitle", value: "1. Cadre Légal et Méthodes" },
        { type: "text", value: "• Inventaire Comptable (Annuel) : Obligation légale une fois par an.\n• Inventaire Tournant : Réalisé périodiquement par familles.\n• Inventaire Permanent : Suivi informatique automatisé." },
        { type: "subtitle", value: "2. La Démarque Inconnue (DI)" },
        { type: "text", value: "Calcul : (Stock Théorique - Stock Réel) x Prix d'Achat.\nCauses : Vol clients (50%), Vol interne (30%), Erreurs administratives (20%)." },
        { type: "graph_schema", value: "ÉTAPES INVENTAIRE", steps: ["Rangement", "Comptage", "Contrôle", "Ajustement"] },
        { type: "summary", value: "L'inventaire garantit la fiabilité du bilan comptable de l'entreprise." }
      ]
    },
    { 
      id: "merch", 
      title: "Règles du Merchandising", 
      bloc: "Bloc 2", 
      content: [
        { type: "text", value: "Le merchandising est l'ensemble des méthodes visant à optimiser la présentation des produits pour accroître les ventes." },
        { type: "subtitle", value: "1. Les 5B de Kepner" },
        { type: "text", value: "• Bon Produit, Bon Endroit, Bon Moment, Bon Prix, Bonne Quantité." },
        { type: "graph_schema", value: "NIVEAUX DE VENTE", steps: ["Chapeau", "Yeux", "Mains", "Pieds"] },
        { type: "subtitle", value: "2. Organisation de l'Espace" },
        { type: "text", value: "• Zone Chaude : Circulation naturelle, forte impulsion.\n• Zone Froide : Fond de magasin, nécessite des produits d'appel." },
        { type: "expert", value: "ASTUCE : Le niveau des yeux est le plus rentable. On y place les produits à forte marge." },
        { type: "summary", value: "Un merchandising efficace facilite le parcours client et provoque l'achat." }
      ]
    },
    { 
      id: "sbam", 
      title: "Méthode SBAM", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "La méthode SBAM définit les standards de qualité de l'accueil client." },
        { type: "subtitle", value: "1. Décomposition" },
        { type: "text", value: "• SOURIRE, BONJOUR, AU REVOIR, MERCI." },
        { type: "subtitle", value: "2. La Règle des 4 x 20" },
        { type: "list", value: [
          "20 premières secondes : L'opinion se forge.",
          "20 premiers pas : L'allure du vendeur.",
          "20 premiers mots : La clarté de l'élocution.",
          "20 premiers centimètres : Le visage et le sourire."
        ]},
        { type: "graph_schema", value: "CYCLE ACCUEIL", steps: ["Entrée", "Contact", "Échange", "Sortie"] },
        { type: "summary", value: "L'accueil est la vitrine humaine du point de vente." }
      ]
    },
    { 
      id: "soncas", 
      title: "Méthode SONCAS", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "Le SONCAS permet d'analyser les motivations d'achat psychologiques du client." },
        { type: "subtitle", value: "1. Les 6 Profils" },
        { type: "text", value: "• SÉCURITÉ, ORGUEIL, NOUVEAUTÉ, CONFORT, ARGENT, SYMPATHIE." },
        { type: "subtitle", value: "2. L'Argumentation CAP" },
        { type: "text", value: "• Caractéristique : Fait technique.\n• Avantage : Ce que cela apporte.\n• Preuve : Démonstration ou label." },
        { type: "graph_schema", value: "PROCESSUS VENTE", steps: ["Découverte", "Diagnostic", "Argument", "Conclusion"] },
        { type: "summary", value: "Vendre, c'est apporter une solution spécifique à un besoin identifié." }
      ]
    }
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
      const pageWidth = 210;
      let yOffset = 20;

      // --- PAGE DE GARDE ---
      doc.setFillColor(16, 185, 129);
      doc.rect(0, 0, pageWidth, 70, 'F');
      doc.setFontSize(32);
      doc.setTextColor(255, 255, 255);
      doc.text("LIVRET DE RÉVISION", pageWidth / 2, 35, { align: "center" });
      doc.setFontSize(18);
      doc.text("CAP Équipier Polyvalent du Commerce", pageWidth / 2, 52, { align: "center" });

      yOffset = 90;
      doc.setFontSize(14);
      doc.setTextColor(71, 85, 105);
      doc.text("Livret complet incluant le module Cadencier et Gestion", margin, yOffset);
      
      yOffset += 30;
      doc.setFontSize(20);
      doc.setTextColor(31, 41, 55);
      doc.text("SOMMAIRE", margin, yOffset);
      yOffset += 15;

      selectedTopics.forEach((id, index) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.setFontSize(12);
          doc.setTextColor(55, 65, 81);
          doc.text(`${index + 1}. ${topic.title.toUpperCase()}`, margin + 5, yOffset);
          doc.text(`Page ${index + 2}`, pageWidth - margin, yOffset, { align: "right" });
          yOffset += 12;
        }
      });

      // --- CONTENU ---
      selectedTopics.forEach((id) => {
        doc.addPage();
        yOffset = 25;
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.setFillColor(248, 250, 252);
          doc.rect(0, 0, pageWidth, 45, 'F');
          doc.setFontSize(10);
          doc.setTextColor(16, 185, 129);
          doc.text(topic.bloc.toUpperCase(), margin, 20);
          doc.setFontSize(24);
          doc.setTextColor(15, 23, 42);
          doc.text(topic.title, margin, 35);
          yOffset = 60;

          topic.content.forEach((item) => {
            if (yOffset > 260) { doc.addPage(); yOffset = 25; }

            switch (item.type) {
              case "subtitle":
                yOffset += 5;
                doc.setFontSize(14);
                doc.setTextColor(15, 23, 42);
                doc.setFont("helvetica", "bold");
                doc.text(item.value, margin, yOffset);
                yOffset += 10;
                break;
              case "text":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                const splitText = doc.splitTextToSize(item.value, 170);
                doc.text(splitText, margin, yOffset);
                yOffset += (splitText.length * 7) + 5;
                break;
              case "table":
                doc.setDrawColor(200);
                doc.setFillColor(245);
                doc.rect(margin, yOffset, 170, 8, 'F');
                doc.setFontSize(10);
                doc.setTextColor(0);
                doc.setFont("helvetica", "bold");
                item.headers.forEach((h, i) => doc.text(h, margin + 5 + (i * 55), yOffset + 6));
                yOffset += 8;
                doc.setFont("helvetica", "normal");
                item.rows.forEach((row) => {
                  row.forEach((cell, i) => doc.text(cell, margin + 5 + (i * 55), yOffset + 6));
                  doc.line(margin, yOffset + 8, margin + 170, yOffset + 8);
                  yOffset += 8;
                });
                yOffset += 5;
                break;
              case "list":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                item.value.forEach((li: string) => {
                  doc.text("• " + li, margin + 5, yOffset);
                  yOffset += 7;
                });
                yOffset += 3;
                break;
              case "graph_schema":
                yOffset += 5;
                doc.setDrawColor(16, 185, 129);
                const sw = 170 / (item.steps?.length || 1);
                item.steps?.forEach((step: string, i: number) => {
                  const x = margin + (i * sw);
                  doc.roundedRect(x, yOffset, sw - 5, 12, 2, 2, 'D');
                  doc.setFontSize(8);
                  doc.text(step, x + (sw-5)/2, yOffset + 7.5, { align: "center" });
                });
                yOffset += 25;
                break;
              case "example":
                yOffset += 5;
                const exText = doc.splitTextToSize(item.value, 160);
                doc.setFillColor(240, 253, 244);
                doc.roundedRect(margin - 2, yOffset - 5, 174, (exText.length * 6) + 10, 2, 2, 'F');
                doc.setFontSize(10);
                doc.setTextColor(22, 101, 52);
                doc.text(exText, margin, yOffset);
                yOffset += (exText.length * 6) + 15;
                break;
              case "expert":
                yOffset += 5;
                const expT = doc.splitTextToSize(item.value, 160);
                doc.setFillColor(254, 242, 242);
                doc.roundedRect(margin - 2, yOffset - 5, 174, (expT.length * 6) + 10, 2, 2, 'F');
                doc.setFontSize(10);
                doc.setTextColor(153, 27, 27);
                doc.text(expT, margin, yOffset);
                yOffset += (expT.length * 6) + 15;
                break;
              case "summary":
                yOffset += 5;
                doc.setFillColor(16, 185, 129);
                doc.rect(margin, yOffset, 170, 12, 'F');
                doc.setFontSize(10);
                doc.setTextColor(255, 255, 255);
                doc.text("SYNTHÈSE : " + item.value, margin + 5, yOffset + 8);
                yOffset += 25;
                break;
            }
          });
        }
      });

      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(150);
        doc.text(`Révision CAP EPC - Page ${i} / ${totalPages}`, 105, 288, { align: "center" });
      }

      doc.save("Livret_Revision_CAP_EPC_Cadencier.pdf");
    } catch (error) {
      console.error("PDF Error:", error);
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
          <p className="text-gray-600 max-w-2xl mx-auto">Nouveau : Fiche détaillée sur le Cadencier incluse. Maîtrisez vos commandes et vos stocks.</p>
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
              <h2 className="text-2xl font-bold mb-6">Mon Livret</h2>
              {selectedTopics.length === 0 ? (
                <p className="text-gray-400 italic text-center py-8">Sélectionnez des thèmes pour générer votre livret</p>
              ) : (
                <div className="space-y-4 mb-8">
                  <p className="text-sm text-emerald-600 font-medium">{selectedTopics.length} thème(s) sélectionné(s)</p>
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
                <Download className="mr-2" /> {isGenerating ? "Génération..." : "Générer mon Livret PDF"}
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
