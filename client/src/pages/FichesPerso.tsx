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
        { type: "text", value: "La gestion des stocks est le pilotage des flux de marchandises. Elle doit garantir la disponibilité des produits tout en optimisant les coûts financiers et logistiques." },
        { type: "subtitle", value: "1. Les Enjeux et Objectifs" },
        { type: "list", value: [
          "Disponibilité : Éviter la rupture de stock qui entraîne une perte de CA et dégrade l'image de marque.",
          "Rentabilité : Minimiser le coût de possession (stockage, assurance, gardiennage).",
          "Qualité : Assurer la rotation pour éviter l'obsolescence et le dépassement des DLC/DLUO.",
          "Trésorerie : Réduire le capital immobilisé dans les rayons et la réserve."
        ]},
        { type: "subtitle", value: "2. Indicateurs et Formules de Calcul" },
        { type: "text", value: "• Stock Minimum : Quantité correspondant aux ventes durant le délai de livraison.\n• Stock de Sécurité : Surplus pour pallier les aléas (retard livraison, pic de vente).\n• Stock d'Alerte : Stock Minimum + Stock de Sécurité (moment où l'on commande).\n• Stock Moyen : (Stock Initial + Stock Final) / 2.\n• Coefficient de Rotation : CA / Stock Moyen (vitesse de renouvellement)." },
        { type: "graph_schema", value: "CYCLE DE RÉAPPROVISIONNEMENT", steps: ["Analyse", "Commande", "Réception", "Stockage", "Vente"] },
        { type: "subtitle", value: "3. Vocabulaire Technique" },
        { type: "text", value: "• FIFO (First In First Out) : Premier entré, premier sorti (essentiel pour le frais).\n• Cadencier : Outil de suivi des ventes et des commandes.\n• Reliquat : Partie d'une commande non livrée par le fournisseur.\n• Rupture : Absence de produit alors qu'il y a une demande." },
        { type: "expert", value: "CONSEIL PRO : Le surstock est aussi dangereux que la rupture. Il encombre la réserve, augmente les risques de casse et pèse sur la trésorerie du magasin." },
        { type: "summary", value: "Une gestion rigoureuse repose sur l'équilibre permanent entre service client et coûts de stockage." }
      ]
    },
    { 
      id: "inventaire", 
      title: "Types d'Inventaire", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "L'inventaire est une opération de contrôle physique visant à vérifier la concordance entre le stock réel et le stock théorique." },
        { type: "subtitle", value: "1. Cadre Légal et Méthodes" },
        { type: "text", value: "• Inventaire Comptable (Annuel) : Obligation légale (Code de Commerce). Doit être réalisé au moins une fois tous les 12 mois.\n• Inventaire Tournant : Réalisé périodiquement sur des familles de produits spécifiques. Permet de ne pas fermer le magasin.\n• Inventaire Permanent : Suivi informatique automatisé des entrées et sorties." },
        { type: "subtitle", value: "2. La Démarque Inconnue (DI)" },
        { type: "text", value: "La DI représente la perte financière liée aux produits disparus sans explication comptable.\nCalcul : (Stock Théorique - Stock Réel) x Prix d'Achat.\nCauses principales : Vol clients (50%), Vol interne (30%), Erreurs administratives (20%)." },
        { type: "graph_schema", value: "ÉTAPES DE L'INVENTAIRE", steps: ["Rangement", "Comptage", "Double Contrôle", "Ajustement"] },
        { type: "subtitle", value: "3. Procédure de Comptage" },
        { type: "list", value: [
          "Préparation : Rangement de la réserve et des rayons, étiquetage clair.",
          "Comptage : Utilisation de terminaux portables (douchettes) ou listes papier.",
          "Validation : Vérification des gros écarts par un second binôme.",
          "Mise à jour : Correction du stock informatique pour refléter la réalité."
        ]},
        { type: "expert", value: "VIGILANCE : Ne jamais faire l'inventaire seul. Le travail en binôme (un qui compte, un qui note) limite les erreurs de saisie." },
        { type: "summary", value: "L'inventaire est le seul moyen de garantir la fiabilité du bilan comptable de l'entreprise." }
      ]
    },
    { 
      id: "merch", 
      title: "Règles du Merchandising", 
      bloc: "Bloc 2", 
      content: [
        { type: "text", value: "Le merchandising est l'ensemble des méthodes visant à optimiser la présentation des produits pour accroître les ventes et la rentabilité." },
        { type: "subtitle", value: "1. Les 5B de Kepner (Fondamentaux)" },
        { type: "text", value: "• Bon Produit : Assortiment adapté à la zone de chalandise.\n• Bon Endroit : Emplacement stratégique dans le flux client.\n• Bon Moment : Saisonnalité et promotions.\n• Bon Prix : Cohérence par rapport à la concurrence et affichage clair.\n• Bonne Quantité : Éviter les trous en rayon sans saturer." },
        { type: "subtitle", value: "2. Organisation de l'Espace" },
        { type: "text", value: "• Zone Chaude : Entrée, allée centrale, têtes de gondole (achats d'impulsion).\n• Zone Froide : Fond de magasin, angles morts (nécessite des produits d'appel comme le lait ou l'eau).\n• Linéaire au sol : Longueur de la base du meuble.\n• Linéaire développé : Longueur totale de tous les niveaux d'exposition." },
        { type: "graph_schema", value: "NIVEAUX DE VENTE", steps: ["Chapeau (>1m70)", "Yeux (1m50)", "Mains (1m10)", "Pieds (<0m80)"] },
        { type: "subtitle", value: "3. Techniques de Présentation" },
        { type: "list", value: [
          "Implantation Verticale : Favorise la comparaison des prix, guide le regard de haut en bas.",
          "Implantation Horizontale : Plus monotone, utilisée pour les produits de masse.",
          "Facing : Nombre de produits d'une même référence vus de face par le client.",
          "ILV / PLV : Information et Publicité sur le Lieu de Vente."
        ]},
        { type: "expert", value: "ASTUCE : Le niveau des yeux est le plus rentable. On y place les produits à forte marge ou les marques distributeurs (MDD)." },
        { type: "summary", value: "Un merchandising efficace doit faciliter le parcours client tout en provoquant l'achat." }
      ]
    },
    { 
      id: "sbam", 
      title: "Méthode SBAM", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "La méthode SBAM définit les standards de qualité de l'accueil client. C'est le premier levier de fidélisation." },
        { type: "subtitle", value: "1. Décomposition de la Méthode" },
        { type: "text", value: "• SOURIRE : Créer un climat de sympathie immédiat. Il doit être visuel et vocal.\n• BONJOUR : Reconnaître l'existence du client dès son entrée.\n• AU REVOIR : Prendre congé poliment, laisser une dernière impression positive.\n• MERCI : Valoriser l'achat ou simplement la visite du client." },
        { type: "subtitle", value: "2. La Communication Non-Verbale" },
        { type: "text", value: "Le message passe à 93% par le non-verbal (gestes, posture) et le para-verbal (ton, débit).\n• Posture : Ouverte, tournée vers le client.\n• Regard : Direct mais non agressif.\n• Distance : Respecter la zone sociale (1,20m à 3m)." },
        { type: "graph_schema", value: "ÉTAPES DE L'ACCUEIL", steps: ["Identification", "Approche", "Prise de contact", "Orientation"] },
        { type: "subtitle", value: "3. La Règle des 4 x 20" },
        { type: "list", value: [
          "20 premières secondes : L'opinion se forge instantanément.",
          "20 premiers pas : L'allure et le dynamisme du vendeur.",
          "20 premiers mots : La clarté et la politesse de l'élocution.",
          "20 premiers centimètres : Le visage, l'expression et le sourire."
        ]},
        { type: "expert", value: "CONSEIL : L'accueil ne s'arrête pas au 'Bonjour'. C'est une attitude de disponibilité permanente tout au long du parcours client." },
        { type: "summary", value: "L'accueil est la vitrine humaine du point de vente. Il conditionne la réussite de la vente." }
      ]
    },
    { 
      id: "soncas", 
      title: "Méthode SONCAS", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "Le SONCAS est une méthode de typologie des motivations d'achat. Elle permet de personnaliser l'argumentation commerciale." },
        { type: "subtitle", value: "1. Les 6 Profils Psychologiques" },
        { type: "text", value: "• SÉCURITÉ : Peur du risque. Argumentez sur la garantie, la solidité, le SAV.\n• ORGUEIL : Besoin de paraître. Argumentez sur l'exclusivité, le haut de gamme.\n• NOUVEAUTÉ : Attrait pour l'innovation. Argumentez sur le design, la technologie.\n• CONFORT : Recherche de facilité. Argumentez sur l'ergonomie, le gain de temps.\n• ARGENT : Sensibilité au prix. Argumentez sur l'économie, la rentabilité.\n• SYMPATHIE : Importance du relationnel. Argumentez sur le partage, le cadeau." },
        { type: "subtitle", value: "2. L'Argumentation CAP" },
        { type: "text", value: "Pour chaque motivation SONCAS, utilisez la structure CAP :\n• Caractéristique : Fait technique objectif.\n• Avantage : Ce que cela apporte au client.\n• Preuve : Démonstration, test ou label." },
        { type: "graph_schema", value: "PROCESSUS DE VENTE", steps: ["Découverte", "Diagnostic", "Argumentation", "Conclusion"] },
        { type: "subtitle", value: "3. Traitement des Objections" },
        { type: "list", value: [
          "Écouter sans interrompre.",
          "Accepter l'objection ('Je comprends votre remarque...').",
          "Chercher la cause réelle (Est-ce un prétexte ou un vrai frein ?).",
          "Répondre avec un argument adapté au profil SONCAS."
        ]},
        { type: "expert", value: "TECHNIQUE : Un bon vendeur écoute 70% du temps et parle 30% du temps. C'est la phase de découverte qui fait la vente." },
        { type: "summary", value: "Vendre, c'est apporter une solution spécifique à un besoin psychologique identifié." }
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
      const pageHeight = 297;
      let yOffset = 20;

      // --- PAGE DE GARDE ---
      doc.setFillColor(16, 185, 129);
      doc.rect(0, 0, pageWidth, 70, 'F');
      doc.setFontSize(32);
      doc.setTextColor(255, 255, 255);
      doc.text("LIVRET DE RÉVISION", pageWidth / 2, 35, { align: "center" });
      doc.setFontSize(18);
      doc.text("CAP Équipier Polyvalent du Commerce", pageWidth / 2, 52, { align: "center" });
      doc.setFontSize(12);
      doc.text("CONTENU DENSE & EXPERTISE MÉTIER", pageWidth / 2, 62, { align: "center" });

      yOffset = 90;
      doc.setFontSize(14);
      doc.setTextColor(71, 85, 105);
      doc.text("Ce livret regroupe l'essentiel des compétences théoriques et pratiques", margin, yOffset);
      yOffset += 8;
      doc.text("nécessaires à l'obtention de votre diplôme.", margin, yOffset);
      
      yOffset += 25;
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(1);
      doc.line(margin, yOffset, margin + 50, yOffset);
      yOffset += 12;
      doc.setFontSize(20);
      doc.setTextColor(31, 41, 55);
      doc.text("SOMMAIRE DÉTAILLÉ", margin, yOffset);
      yOffset += 15;

      selectedTopics.forEach((id, index) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.setFontSize(12);
          doc.setTextColor(55, 65, 81);
          doc.text(`${index + 1}. ${topic.title.toUpperCase()}`, margin + 5, yOffset);
          doc.setFontSize(10);
          doc.setTextColor(148, 163, 184);
          doc.text(`.................................................................................................................. Page ${index + 2}`, margin + 60, yOffset);
          yOffset += 12;
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
          doc.rect(0, 0, pageWidth, 45, 'F');
          doc.setDrawColor(16, 185, 129);
          doc.setLineWidth(2);
          doc.line(0, 0, 0, 45);

          doc.setFontSize(10);
          doc.setTextColor(16, 185, 129);
          doc.setFont("helvetica", "bold");
          doc.text(topic.bloc.toUpperCase() + " - MODULE PROFESSIONNEL", margin, 20);
          
          doc.setFontSize(24);
          doc.setTextColor(15, 23, 42);
          doc.text(topic.title, margin, 35);
          yOffset = 60;

          topic.content.forEach((item) => {
            if (yOffset > 265) { doc.addPage(); yOffset = 25; }

            switch (item.type) {
              case "subtitle":
                yOffset += 5;
                doc.setFillColor(16, 185, 129);
                doc.rect(margin, yOffset - 5, 3, 8, 'F');
                doc.setFontSize(14);
                doc.setTextColor(15, 23, 42);
                doc.setFont("helvetica", "bold");
                doc.text(item.value, margin + 7, yOffset + 1);
                doc.setFont("helvetica", "normal");
                yOffset += 12;
                break;
              case "text":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                const splitText = doc.splitTextToSize(item.value, 170);
                doc.text(splitText, margin, yOffset);
                yOffset += (splitText.length * 7) + 6;
                break;
              case "list":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                item.value.forEach((li: string) => {
                  if (yOffset > 275) { doc.addPage(); yOffset = 25; }
                  doc.setFillColor(16, 185, 129);
                  doc.rect(margin + 1, yOffset - 3, 1.5, 1.5, 'F');
                  const liText = doc.splitTextToSize(li, 160);
                  doc.text(liText, margin + 8, yOffset);
                  yOffset += (liText.length * 6) + 2;
                });
                yOffset += 4;
                break;
              case "graph_schema":
                yOffset += 5;
                doc.setDrawColor(226, 232, 240);
                doc.setFillColor(255, 255, 255);
                doc.roundedRect(margin, yOffset, 170, 22, 2, 2, 'FD');
                
                const stepWidth = 170 / (item.steps?.length || 1);
                item.steps?.forEach((step: string, i: number) => {
                  const x = margin + (i * stepWidth);
                  doc.setFontSize(8);
                  doc.setTextColor(100, 116, 139);
                  doc.text(`ÉTAPE ${i+1}`, x + stepWidth/2, yOffset + 7, { align: "center" });
                  doc.setFontSize(9);
                  doc.setTextColor(16, 185, 129);
                  doc.setFont("helvetica", "bold");
                  doc.text(step, x + stepWidth/2, yOffset + 15, { align: "center" });
                  doc.setFont("helvetica", "normal");
                  if (i < (item.steps?.length || 0) - 1) {
                    doc.setDrawColor(16, 185, 129);
                    doc.line(x + stepWidth - 5, yOffset + 11, x + stepWidth + 5, yOffset + 11);
                  }
                });
                yOffset += 35;
                break;
              case "expert":
                yOffset += 5;
                const expText = doc.splitTextToSize(item.value, 160);
                const boxH = (expText.length * 6) + 15;
                if (yOffset + boxH > 280) { doc.addPage(); yOffset = 25; }
                
                doc.setFillColor(254, 242, 242);
                doc.setDrawColor(239, 68, 68);
                doc.setLineWidth(0.5);
                doc.roundedRect(margin - 2, yOffset - 5, 174, boxH, 1, 1, 'FD');
                
                doc.setFontSize(9);
                doc.setTextColor(185, 28, 28);
                doc.setFont("helvetica", "bold");
                doc.text("AVIS DE L'EXPERT MÉTIER", margin + 2, yOffset + 2);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(153, 27, 27);
                doc.text(expText, margin + 2, yOffset + 10);
                yOffset += boxH + 10;
                break;
              case "summary":
                yOffset += 5;
                doc.setFillColor(16, 185, 129);
                doc.rect(margin, yOffset, 170, 12, 'F');
                doc.setFontSize(10);
                doc.setTextColor(255, 255, 255);
                doc.setFont("helvetica", "bold");
                doc.text("L'ESSENTIEL : " + item.value, margin + 5, yOffset + 7.5);
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
        doc.text(`Livret de Révision CAP EPC - Session 2026 - Page ${i} / ${totalPages}`, 105, 288, { align: "center" });
      }

      doc.save("Livret_Revision_CAP_EPC_Dense.pdf");
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
          <p className="text-gray-600 max-w-2xl mx-auto">Générez un livret de révision ultra-complet. Contenu dense, vocabulaire technique et expertise métier pour réussir votre CAP.</p>
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
                <p className="text-gray-400 italic text-center py-8">Sélectionnez des thèmes pour générer votre livret ultra-dense</p>
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
                <Download className="mr-2" /> {isGenerating ? "Génération..." : "Générer mon Livret Ultra-Dense"}
              </Button>
              <p className="text-[10px] text-gray-400 mt-4 text-center">
                Inclus : Formules de calcul, Vocabulaire technique et Réglementation.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
