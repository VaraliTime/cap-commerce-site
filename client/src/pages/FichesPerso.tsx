import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { FilePlus, Download, Trash2, CheckCircle2, ListChecks, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { jsPDF } from "jspdf";

export default function FichesPerso() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    window.speechSynthesis.speak(utterance);
  };

  const topics = [
    { 
      id: "cadencier", 
      title: "Le Cadencier de Commande", 
      bloc: "Bloc 1", 
      audioText: "Le cadencier est l'outil de base du gestionnaire de rayon. Il permet de suivre les ventes et de calculer les quantités à commander.",
      content: [
        { type: "text", value: "Le cadencier est l'outil de base du gestionnaire de rayon. Il permet de suivre les ventes, de contrôler les stocks et de calculer les quantités à commander de façon précise." },
        { type: "subtitle", value: "1. Fonctionnement du Cadencier" },
        { type: "table", headers: ["Élément", "Définition", "Utilité"], rows: [
          ["Stock Initial (SI)", "Stock en début de période", "Savoir ce qu'on a"],
          ["Livraison (L)", "Quantité reçue", "Mise à jour du stock"],
          ["Stock Final (SF)", "Stock en fin de période", "Calculer les ventes"],
          ["Ventes (V)", "SI + L - SF", "Analyser la demande"]
        ]},
        { type: "svg_schema", value: "FLUX_CADENCIER" },
        { type: "subtitle", value: "2. Les Calculs de Commande" },
        { type: "list", value: [
          "Ventes Prévisionnelles (VP) : Moyenne des ventes passées.",
          "Besoin Total (BT) : VP + Stock de Sécurité.",
          "Quantité à Commander (Q) : Besoin Total - Stock Réel."
        ]},
        { type: "example", value: "EXEMPLE : Ventes = 20/jour. Délai = 2j. Sécurité = 10. Stock = 15. Commande = (20x2 + 10) - 15 = 35." }
      ]
    },
    { 
      id: "merch", 
      title: "Règles du Merchandising", 
      bloc: "Bloc 2", 
      audioText: "Le merchandising regroupe les techniques de présentation des produits. La règle des 5B est fondamentale : bon produit, bon endroit, bon moment, bon prix, bonne quantité.",
      content: [
        { type: "text", value: "Le merchandising regroupe les techniques de présentation des produits pour optimiser les ventes." },
        { type: "subtitle", value: "1. La Règle des 5B (Kepner)" },
        { type: "list", value: ["Le Bon Produit", "Au Bon Endroit", "Au Bon Moment", "Au Bon Prix", "En Bonne Quantité"] },
        { type: "svg_schema", value: "NIVEAUX_GONDOLE" },
        { type: "subtitle", value: "2. Zones de Chalandise" },
        { type: "text", value: "• Zone Chaude : Circulation naturelle, forte impulsion.\n• Zone Froide : Fond de magasin, nécessite des produits d'appel." }
      ]
    }
  ];

  const renderSVG = (type: string) => {
    if (type === "FLUX_CADENCIER") {
      return (
        <svg viewBox="0 0 400 100" className="w-full h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl my-4">
          <rect x="10" y="30" width="80" height="40" rx="5" className="fill-emerald-500" />
          <text x="50" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">SI</text>
          <path d="M 90 50 L 110 50" className="stroke-emerald-500 stroke-2 fill-none" />
          <rect x="110" y="30" width="80" height="40" rx="5" className="fill-emerald-600" />
          <text x="150" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">LIVRAISON</text>
          <path d="M 190 50 L 210 50" className="stroke-emerald-600 stroke-2 fill-none" />
          <rect x="210" y="30" width="80" height="40" rx="5" className="fill-emerald-700" />
          <text x="250" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">VENTES</text>
          <path d="M 290 50 L 310 50" className="stroke-emerald-700 stroke-2 fill-none" />
          <rect x="310" y="30" width="80" height="40" rx="5" className="fill-emerald-800" />
          <text x="350" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">SF</text>
        </svg>
      );
    }
    if (type === "NIVEAUX_GONDOLE") {
      return (
        <svg viewBox="0 0 400 150" className="w-full h-32 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl my-4">
          <rect x="100" y="10" width="200" height="20" className="fill-gray-300" />
          <text x="200" y="25" textAnchor="middle" className="fill-gray-600 text-[10px]">CHAPEAU (Signalétique)</text>
          <rect x="100" y="40" width="200" height="20" className="fill-emerald-500" />
          <text x="200" y="55" textAnchor="middle" className="fill-white text-[10px] font-bold">YEUX (Marge ++)</text>
          <rect x="100" y="70" width="200" height="20" className="fill-emerald-400" />
          <text x="200" y="85" textAnchor="middle" className="fill-white text-[10px]">MAINS (Confort)</text>
          <rect x="100" y="100" width="200" height="20" className="fill-gray-400" />
          <text x="200" y="115" textAnchor="middle" className="fill-white text-[10px]">PIEDS (Lourd/Bas prix)</text>
        </svg>
      );
    }
    return null;
  };

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

      // Page de garde
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
      doc.text("Livret enrichi avec schémas et expertise métier", margin, yOffset);
      
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
                item.headers?.forEach((h, i) => doc.text(h, margin + 5 + (i * 55), yOffset + 6));
                yOffset += 8;
                doc.setFont("helvetica", "normal");
                item.rows?.forEach((row) => {
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
            }
          });
        }
      });

      doc.save("Livret_Revision_CAP_EPC_Premium.pdf");
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
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Révision interactive : Écoutez vos cours et visualisez les schémas avant de générer votre PDF.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ListChecks className="text-emerald-600" /> Thèmes disponibles
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {topics.map((topic) => (
                <Card 
                  key={topic.id} 
                  className={`p-6 transition-all border-2 rounded-3xl ${selectedTopics.includes(topic.id) ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' : 'border-transparent bg-white dark:bg-gray-800'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div 
                        onClick={() => toggleTopic(topic.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${selectedTopics.includes(topic.id) ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'}`}
                      >
                        {selectedTopics.includes(topic.id) && <CheckCircle2 size={14} className="text-white" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gray-400">{topic.bloc}</span>
                        <h3 className="font-bold text-xl">{topic.title}</h3>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                      onClick={() => speak(topic.audioText)}
                    >
                      <Volume2 size={18} />
                    </Button>
                  </div>
                  
                  <div className="pl-10">
                    {topic.content.map((item, i) => (
                      <div key={i}>
                        {item.type === "svg_schema" && renderSVG(item.value)}
                      </div>
                    ))}
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 rounded-xl font-bold shadow-lg"
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
