import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ListChecks, Download, CheckCircle2, Play, Volume2, Info, AlertTriangle } from "lucide-react";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";

const topics = [
  {
    id: "stocks",
    title: "Gestion des Stocks & Inventaire",
    bloc: "Bloc 1",
    content: [
      { type: "subtitle", value: "1. Les enjeux de la gestion des stocks" },
      { type: "text", value: "La gestion des stocks est vitale pour éviter la rupture (perte de vente) et le surstock (coût financier). Un bon gestionnaire doit équilibrer ces deux risques." },
      { type: "list", value: ["Stock de sécurité : pour pallier les retards de livraison.", "Stock d'alerte : niveau déclenchant la commande.", "Rotation des stocks : vitesse à laquelle le stock est renouvelé."] },
      { type: "subtitle", value: "2. L'Inventaire : Obligation légale" },
      { type: "text", value: "L'inventaire physique consiste à compter tous les produits présents. Il permet de calculer la Démarque Inconnue (DI)." },
      { type: "example", value: "Calcul de la DI : Stock Théorique - Stock Réel = Démarque Inconnue." },
      { type: "svg_schema", value: "flow_stock" }
    ]
  },
  {
    id: "cadencier",
    title: "Le Cadencier de Commande",
    bloc: "Bloc 1",
    content: [
      { type: "subtitle", value: "1. Fonctionnement du Cadencier" },
      { type: "text", value: "Le cadencier est l'outil de pilotage des commandes. Il permet de suivre les ventes et de calculer les besoins futurs." },
      { type: "table", headers: ["Terme", "Définition", "Utilité"], rows: [
        ["Stock Initial", "Stock au début de période", "Base de calcul"],
        ["Livraison", "Quantité reçue", "Augmente le stock"],
        ["Ventes", "Quantité vendue", "Diminue le stock"],
        ["Stock Final", "Stock en fin de période", "Devient le SI suivant"]
      ]},
      { type: "subtitle", value: "2. Les Calculs Clés" },
      { type: "list", value: [
        "Ventes = SI + Livraison - SF",
        "Besoin Total = Ventes prévues + Stock de sécurité",
        "Commande = Besoin Total - Stock Réel"
      ]},
      { type: "example", value: "Si je vends 10 jus/jour, que j'ai 5 en stock et que je veux 2 jours d'avance : Besoin = 20+5 = 25. Commande = 25-5 = 20." }
    ]
  },
  {
    id: "merch",
    title: "Merchandising & Implantation",
    bloc: "Bloc 2",
    content: [
      { type: "subtitle", value: "1. Les niveaux de présentation" },
      { type: "text", value: "Il existe 3 niveaux principaux en gondole. Le choix du niveau impacte directement le volume des ventes." },
      { type: "list", value: ["Niveau des yeux : Le plus vendeur (produits à forte marge).", "Niveau des mains : Facile d'accès (produits courants).", "Niveau des pieds : Moins vendeur (gros volumes, prix bas)."] },
      { type: "subtitle", value: "2. Zones Chaudes et Froides" },
      { type: "text", value: "La zone chaude est le parcours naturel du client. La zone froide nécessite des produits d'appel pour attirer le client." },
      { type: "svg_schema", value: "store_layout" }
    ]
  },
  {
    id: "vente",
    title: "Vente & Relation Client",
    bloc: "Bloc 3",
    content: [
      { type: "subtitle", value: "1. Les étapes de la vente" },
      { type: "text", value: "Une vente réussie suit un processus rigoureux de l'accueil à la prise de congé." },
      { type: "list", value: ["Accueil (SBAM)", "Recherche des besoins (SONCAS)", "Argumentation (CAP)", "Traitement des objections", "Vente additionnelle", "Encaissement et Congé"] },
      { type: "example", value: "Méthode CAP : Caractéristique -> Avantage -> Preuve." }
    ]
  }
];

export default function FichesPerso() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const speak = (text: string, id: string) => {
    window.speechSynthesis.cancel();
    if (isPlaying === id) {
      setIsPlaying(null);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.onend = () => setIsPlaying(null);
    setIsPlaying(id);
    window.speechSynthesis.speak(utterance);
  };

  const renderSVG = (type: string) => {
    if (type === "flow_stock") {
      return (
        <svg viewBox="0 0 400 100" className="w-full h-32 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4">
          <rect x="10" y="30" width="80" height="40" rx="5" fill="#10b981" />
          <text x="50" y="55" textAnchor="middle" fill="white" fontSize="10">Réception</text>
          <path d="M 90 50 L 130 50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="140" y="30" width="80" height="40" rx="5" fill="#10b981" />
          <text x="180" y="55" textAnchor="middle" fill="white" fontSize="10">Stockage</text>
          <path d="M 220 50 L 260 50" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="270" y="30" width="80" height="40" rx="5" fill="#10b981" />
          <text x="310" y="55" textAnchor="middle" fill="white" fontSize="10">Vente</text>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
          </defs>
        </svg>
      );
    }
    return null;
  };

  const generatePDF = () => {
    if (selectedTopics.length === 0) return;
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      let yOffset = 20;
      const margin = 20;

      // Page de garde
      doc.setFillColor(16, 185, 129);
      doc.rect(0, 0, 210, 40, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text("LIVRET DE RÉVISION CAP EPC", margin, 25);
      
      doc.setTextColor(100);
      doc.setFontSize(10);
      doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, margin, 50);

      selectedTopics.forEach((id) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.addPage();
          doc.setFontSize(24);
          doc.setTextColor(15, 23, 42);
          doc.text(topic.title, margin, 35);
          yOffset = 60;

          topic.content.forEach((item) => {
            if (yOffset > 260) { doc.addPage(); yOffset = 25; }
            
            const val = item.value || "";

            switch (item.type) {
              case "subtitle":
                yOffset += 5;
                doc.setFontSize(14);
                doc.setTextColor(15, 23, 42);
                doc.setFont("helvetica", "bold");
                doc.text(String(val), margin, yOffset);
                yOffset += 10;
                break;
              case "text":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                doc.setFont("helvetica", "normal");
                const splitText = doc.splitTextToSize(String(val), 170);
                doc.text(splitText, margin, yOffset);
                yOffset += (splitText.length * 7) + 5;
                break;
              case "table":
                doc.setDrawColor(200);
                doc.setFillColor(245, 245, 245);
                doc.rect(margin, yOffset, 170, 8, 'F');
                doc.setFontSize(10);
                doc.setTextColor(0, 0, 0);
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
                if (Array.isArray(val)) {
                  val.forEach((li: string) => {
                    doc.text("• " + li, margin + 5, yOffset);
                    yOffset += 7;
                  });
                }
                yOffset += 3;
                break;
              case "example":
                yOffset += 5;
                const exText = doc.splitTextToSize(String(val), 160);
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
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{topic.bloc}</span>
                        <h3 className="text-xl font-bold">{topic.title}</h3>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => speak(topic.content.map(c => c.value).join('. '), topic.id)}
                        className={isPlaying === topic.id ? "text-emerald-600 bg-emerald-50" : ""}
                      >
                        {isPlaying === topic.id ? <Volume2 size={18} className="animate-pulse" /> : <Play size={18} />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    {topic.content.map((item, idx) => (
                      <div key={idx}>
                        {item.type === "subtitle" && <h4 className="font-bold text-gray-900 dark:text-white mt-4">{item.value}</h4>}
                        {item.type === "text" && <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>}
                        {item.type === "svg_schema" && renderSVG(String(item.value))}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-8 border-none shadow-2xl bg-emerald-600 text-white rounded-[2.5rem] sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Votre Livret</h3>
              <p className="text-emerald-100 text-sm mb-8">Sélectionnez les thèmes à inclure dans votre document de révision personnalisé.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-medium">
                  <span>Thèmes sélectionnés</span>
                  <span>{selectedTopics.length}</span>
                </div>
                <div className="w-full bg-emerald-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all duration-500" 
                    style={{ width: `${(selectedTopics.length / topics.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <Button 
                onClick={generatePDF}
                disabled={selectedTopics.length === 0 || isGenerating}
                className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-8 rounded-2xl font-bold text-lg shadow-lg disabled:opacity-50"
              >
                {isGenerating ? "Génération..." : "Générer mon PDF"}
                <Download className="ml-2" size={20} />
              </Button>
            </Card>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-3xl border-2 border-amber-100 dark:border-amber-800">
              <h4 className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-2 mb-2">
                <Info size={18} /> Astuce Révision
              </h4>
              <p className="text-sm text-amber-700 dark:text-amber-300 italic">
                Écoutez le cours avant de lire la fiche pour une meilleure mémorisation auditive.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
