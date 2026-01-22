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
      id: "stocks", 
      title: "Gestion des Stocks", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "La gestion des stocks est l'ensemble des activités visant à maintenir un niveau de stock optimal pour répondre à la demande tout en minimisant les coûts." },
        { type: "subtitle", value: "Les Enjeux Stratégiques" },
        { type: "list", value: ["Éviter la rupture (perte de CA, mécontentement client)", "Éviter le surstock (immobilisation financière, risque de casse/périme)", "Optimiser l'espace de stockage"] },
        { type: "graph_schema", value: "FLUX DE STOCK", steps: ["Livraison", "Mise en rayon", "Vente", "Réappro"] },
        { type: "subtitle", value: "Indicateurs de Performance" },
        { type: "text", value: "• Stock de sécurité : Niveau minimum pour pallier les retards de livraison.\n• Stock d'alerte : Seuil déclenchant la commande.\n• Rotation des stocks : Nombre de fois où le stock est renouvelé." },
        { type: "expert", value: "CONSEIL EXPERT : Utilisez la méthode 20/80 (Pareto). 20% de vos références représentent souvent 80% de votre chiffre d'affaires. Surveillez ces produits en priorité !" },
        { type: "summary", value: "La maîtrise des stocks garantit la rentabilité du point de vente et la satisfaction client." }
      ]
    },
    { 
      id: "inventaire", 
      title: "Types d'Inventaire", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "L'inventaire consiste à compter physiquement les marchandises présentes dans le point de vente et la réserve." },
        { type: "subtitle", value: "Les Méthodes de Comptage" },
        { type: "text", value: "1. Inventaire Annuel : Obligation légale une fois par an.\n2. Inventaire Tournant : Comptage régulier par familles.\n3. Inventaire Permanent : Suivi informatique en temps réel." },
        { type: "graph_schema", value: "PROCESSUS INVENTAIRE", steps: ["Préparation", "Comptage", "Saisie", "Écarts"] },
        { type: "subtitle", value: "Analyse des Écarts" },
        { type: "text", value: "La Démarque Inconnue (DI) est le fléau du commerçant. Elle se calcule par la différence entre le stock théorique et le stock réel." },
        { type: "expert", value: "POINT DE VIGILANCE : Un écart d'inventaire trop important peut signaler un problème de vol interne ou une mauvaise gestion des bons de livraison." },
        { type: "summary", value: "L'inventaire est l'outil de contrôle indispensable pour valider la fiabilité de votre gestion." }
      ]
    },
    { 
      id: "merch", 
      title: "Règles du Merchandising", 
      bloc: "Bloc 2", 
      content: [
        { type: "text", value: "Le merchandising regroupe les techniques de présentation des produits pour optimiser les ventes." },
        { type: "subtitle", value: "La Règle des 5B (Kepner)" },
        { type: "list", value: ["Le Bon Produit", "Au Bon Endroit", "Au Bon Moment", "Au Bon Prix", "En Bonne Quantité"] },
        { type: "graph_schema", value: "NIVEAUX DE GONDOLE", steps: ["Chapeau", "Yeux", "Mains", "Pieds"] },
        { type: "subtitle", value: "Zones de Chalandise" },
        { type: "text", value: "• Zone Chaude : Circulation naturelle, forte impulsion.\n• Zone Froide : Fond de magasin, nécessite des produits d'appel." },
        { type: "expert", value: "ASTUCE PRO : Placez les produits à forte marge au niveau des yeux (1m50) pour maximiser la rentabilité du linéaire." },
        { type: "summary", value: "Un bon merchandising transforme un simple visiteur en acheteur actif." }
      ]
    },
    { 
      id: "sbam", 
      title: "Méthode SBAM", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "La méthode SBAM est le socle de la relation client en magasin." },
        { type: "subtitle", value: "Les 4 Piliers de l'Accueil" },
        { type: "text", value: "S - SOURIRE : La base de l'accueil.\nB - BONJOUR : La reconnaissance du client.\nA - AU REVOIR : La dernière impression.\nM - MERCI : La gratitude pour la visite." },
        { type: "graph_schema", value: "CYCLE ACCUEIL", steps: ["Entrée", "Contact", "Échange", "Sortie"] },
        { type: "expert", value: "RÈGLE D'OR : Les 20 premières secondes et les 20 premiers mots déterminent 80% de l'opinion du client sur votre magasin." },
        { type: "summary", value: "L'accueil est le premier acte de vente. Ne le négligez jamais." }
      ]
    },
    { 
      id: "soncas", 
      title: "Méthode SONCAS", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "Le SONCAS permet d'analyser les motivations d'achat psychologiques du client." },
        { type: "subtitle", value: "Les Motivations" },
        { type: "text", value: "• SÉCURITÉ : Besoin de garanties.\n• ORGUEIL : Besoin de prestige.\n• NOUVEAUTÉ : Besoin d'innovation.\n• CONFORT : Besoin de simplicité.\n• ARGENT : Besoin d'économie.\n• SYMPATHIE : Besoin de relationnel." },
        { type: "graph_schema", value: "VENTE CAP/SONCAS", steps: ["Écoute", "Profilage", "Argument", "Vente"] },
        { type: "expert", value: "TECHNIQUE : Couplez le SONCAS avec la méthode CAP (Caractéristiques, Avantages, Preuves) pour une argumentation imparable." },
        { type: "summary", value: "Comprendre le 'Pourquoi' du client permet de lui vendre le 'Comment'." }
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
      doc.rect(0, 0, pageWidth, 60, 'F');
      doc.setFontSize(28);
      doc.setTextColor(255, 255, 255);
      doc.text("LIVRET D'EXPERTISE", pageWidth / 2, 30, { align: "center" });
      doc.setFontSize(18);
      doc.text("CAP Équipier Polyvalent du Commerce", pageWidth / 2, 45, { align: "center" });

      yOffset = 80;
      doc.setFontSize(14);
      doc.setTextColor(71, 85, 105);
      doc.text("Synthèses, Schémas et Points d'Expertise", margin, yOffset);
      yOffset += 20;

      doc.setFontSize(16);
      doc.setTextColor(31, 41, 55);
      doc.text("SOMMAIRE", margin, yOffset);
      yOffset += 15;

      selectedTopics.forEach((id, index) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.setFontSize(12);
          doc.setTextColor(55, 65, 81);
          doc.text(`${index + 1}. ${topic.title}`, margin + 5, yOffset);
          doc.text(`Page ${index + 2}`, pageWidth - margin, yOffset, { align: "right" });
          yOffset += 10;
        }
      });

      // --- CONTENU ---
      selectedTopics.forEach((id) => {
        doc.addPage();
        yOffset = 25;
        const topic = topics.find(t => t.id === id);
        if (topic) {
          // Header
          doc.setFillColor(248, 250, 252);
          doc.rect(0, 0, pageWidth, 40, 'F');
          doc.setFontSize(10);
          doc.setTextColor(16, 185, 129);
          doc.text(topic.bloc.toUpperCase(), margin, 20);
          doc.setFontSize(22);
          doc.setTextColor(15, 23, 42);
          doc.text(topic.title, margin, 32);
          yOffset = 55;

          topic.content.forEach((item) => {
            if (yOffset > 260) { doc.addPage(); yOffset = 25; }

            switch (item.type) {
              case "subtitle":
                yOffset += 5;
                doc.setFontSize(14);
                doc.setTextColor(16, 185, 129);
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
              case "list":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                item.value.forEach((li: string) => {
                  doc.setFillColor(16, 185, 129);
                  doc.circle(margin + 2, yOffset - 1, 0.8, 'F');
                  doc.text(li, margin + 7, yOffset);
                  yOffset += 7;
                });
                yOffset += 3;
                break;
              case "graph_schema":
                yOffset += 5;
                doc.setDrawColor(16, 185, 129);
                doc.setLineWidth(0.5);
                const stepWidth = 40;
                item.steps?.forEach((step: string, i: number) => {
                  const x = margin + (i * stepWidth);
                  doc.roundedRect(x, yOffset, 35, 12, 2, 2, 'D');
                  doc.setFontSize(8);
                  doc.text(step, x + 17.5, yOffset + 7.5, { align: "center" });
                  if (i < (item.steps?.length || 0) - 1) {
                    doc.line(x + 35, yOffset + 6, x + 40, yOffset + 6);
                  }
                });
                yOffset += 25;
                break;
              case "expert":
                yOffset += 5;
                const expText = doc.splitTextToSize(item.value, 160);
                doc.setFillColor(254, 242, 242); // Red 50
                doc.setDrawColor(252, 165, 165); // Red 300
                doc.roundedRect(margin - 2, yOffset - 5, 174, (expText.length * 6) + 12, 2, 2, 'FD');
                doc.setFontSize(9);
                doc.setTextColor(185, 28, 28); // Red 700
                doc.text("POINT D'EXPERTISE", margin + 2, yOffset);
                doc.setFontSize(10);
                doc.setTextColor(153, 27, 27);
                doc.text(expText, margin + 2, yOffset + 7);
                yOffset += (expText.length * 6) + 20;
                break;
              case "summary":
                yOffset += 5;
                doc.setFillColor(240, 253, 244); // Green 50
                doc.rect(margin, yOffset, 170, 15, 'F');
                doc.setFontSize(11);
                doc.setTextColor(21, 128, 61);
                doc.setFont("helvetica", "bold");
                doc.text("SYNTHÈSE : " + item.value, margin + 5, yOffset + 9);
                doc.setFont("helvetica", "normal");
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
        doc.setTextColor(148, 163, 184);
        doc.text(`Expertise CAP Commerce - Page ${i} / ${totalPages}`, 105, 287, { align: "center" });
      }

      doc.save("Livret_Expertise_CAP_Commerce.pdf");
    } catch (error) {
      console.error("Erreur PDF:", error);
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
          <p className="text-gray-600 max-w-2xl mx-auto">Créez votre livret d'expertise. Contenu enrichi avec schémas, synthèses et conseils pro.</p>
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
                <p className="text-gray-400 italic text-center py-8">Sélectionnez des thèmes pour générer votre livret d'expertise</p>
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
                <Download className="mr-2" /> {isGenerating ? "Génération..." : "Générer mon Livret d'Expertise"}
              </Button>
              <p className="text-[10px] text-gray-400 mt-4 text-center">
                Inclus : Schémas de flux, Synthèses et Points d'Expertise.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
