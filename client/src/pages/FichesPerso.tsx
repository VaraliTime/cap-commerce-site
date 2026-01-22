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
        { type: "subtitle", value: "Les Enjeux" },
        { type: "list", value: ["Éviter la rupture (perte de CA, mécontentement client)", "Éviter le surstock (immobilisation financière, risque de casse/périme)", "Optimiser l'espace de stockage"] },
        { type: "subtitle", value: "Indicateurs Clés" },
        { type: "text", value: "• Stock de sécurité : Niveau minimum pour pallier les retards de livraison.\n• Stock d'alerte : Seuil déclenchant la commande (Stock de sécurité + Stock de roulement).\n• Rotation des stocks : Nombre de fois où le stock est renouvelé sur une période." },
        { type: "example", value: "Cas pratique : Un magasin vend 10 packs d'eau par jour. Le délai de livraison est de 3 jours. Le stock de sécurité est fixé à 20 packs. Le stock d'alerte sera donc : (10 x 3) + 20 = 50 packs." }
      ]
    },
    { 
      id: "inventaire", 
      title: "Types d'Inventaire", 
      bloc: "Bloc 1", 
      content: [
        { type: "text", value: "L'inventaire consiste à compter physiquement les marchandises présentes dans le point de vente et la réserve." },
        { type: "subtitle", value: "Les 3 types d'inventaire" },
        { type: "text", value: "1. Inventaire Annuel : Obligation légale une fois par an. Fermeture du magasin souvent nécessaire.\n2. Inventaire Tournant : Comptage régulier de certaines familles de produits tout au long de l'année.\n3. Inventaire Permanent : Mise à jour en temps réel via le système informatique (entrées/sorties)." },
        { type: "subtitle", value: "La Démarque Inconnue (DI)" },
        { type: "text", value: "C'est la différence entre le stock théorique (informatique) et le stock réel (physique).\nCauses : Vol (client/personnel), erreurs de livraison, casse non enregistrée, erreurs de caisse." },
        { type: "schema", value: "[ STOCK THÉORIQUE ] - [ STOCK RÉEL ] = DÉMARQUE INCONNUE" }
      ]
    },
    { 
      id: "merch", 
      title: "Règles du Merchandising", 
      bloc: "Bloc 2", 
      content: [
        { type: "text", value: "Le merchandising est l'ensemble des techniques pour présenter le produit dans les meilleures conditions matérielles et psychologiques." },
        { type: "subtitle", value: "La Règle des 5B (Kepner)" },
        { type: "list", value: ["Le Bon Produit (assortiment)", "Au Bon Endroit (emplacement)", "Au Bon Moment (saisonnalité)", "Au Bon Prix (étiquetage)", "En Bonne Quantité (linéaire)"] },
        { type: "subtitle", value: "Les Niveaux de Vente" },
        { type: "text", value: "• Niveau des Yeux (1,40m - 1,70m) : Niveau le plus vendeur, produits à forte marge.\n• Niveau des Mains (0,80m - 1,40m) : Niveau de confort, produits indispensables.\n• Niveau des Pieds (< 0,80m) : Produits lourds, volumineux ou bas prix.\n• Niveau du Chapeau (> 1,70m) : Stockage ou signalétique." },
        { type: "example", value: "Exemple : Les céréales pour enfants sont placées au niveau des yeux... des enfants, donc plus bas que les céréales 'santé' pour adultes." }
      ]
    },
    { 
      id: "sbam", 
      title: "Méthode SBAM", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "La méthode SBAM est le socle de la relation client en magasin. Elle permet de créer un climat de confiance dès les premières secondes." },
        { type: "subtitle", value: "Détail de la méthode" },
        { type: "text", value: "S - SOURIRE : Il s'entend même au téléphone. Il doit être sincère.\nB - BONJOUR : Salutation systématique dès l'entrée du client.\nA - AU REVOIR : On raccompagne le client (même s'il n'a rien acheté).\nM - MERCI : Remerciement pour la visite ou l'achat." },
        { type: "subtitle", value: "La Règle des 4 x 20" },
        { type: "list", value: ["Les 20 premières secondes", "Les 20 premiers pas", "Les 20 premiers mots", "Les 20 premiers centimètres (visage/sourire)"] },
        { type: "example", value: "Conseil Pro : Si vous êtes occupé avec un client, un simple regard et un signe de tête vers le nouveau client qui entre valent un 'Bonjour' et le font patienter." }
      ]
    },
    { 
      id: "soncas", 
      title: "Méthode SONCAS", 
      bloc: "Bloc 3", 
      content: [
        { type: "text", value: "Le SONCAS est une méthode d'analyse des motivations d'achat. Elle permet d'adapter son argumentation au profil psychologique du client." },
        { type: "subtitle", value: "Les 6 Leviers" },
        { type: "text", value: "• SÉCURITÉ : Besoin d'être rassuré (garantie, solidité).\n• ORGUEIL : Besoin de se valoriser (prestige, marque).\n• NOUVEAUTÉ : Besoin de changement (innovation, mode).\n• CONFORT : Besoin de facilité (praticité, gain de temps).\n• ARGENT : Besoin d'économie (promotion, rentabilité).\n• SYMPATHIE : Besoin de relationnel (accueil, cadeau)." },
        { type: "example", value: "Argumentation : Pour un client 'SÉCURITÉ', dites : 'Ce modèle est garanti 5 ans'. Pour un client 'ARGENT', dites : 'C'est le meilleur rapport qualité/prix du marché'." }
      ]
    },
    { 
      id: "prap", 
      title: "Gestes et Postures (PRAP)", 
      bloc: "Bloc 4", 
      content: [
        { type: "text", value: "La PRAP (Prévention des Risques liés à l'Activité Physique) vise à réduire les accidents du travail et les maladies professionnelles (TMS)." },
        { type: "subtitle", value: "Les Principes de Sécurité" },
        { type: "list", value: ["Toujours plier les genoux pour ramasser un objet", "Garder le dos droit (alignement vertébral)", "Porter la charge le plus près possible du corps", "Assurer ses appuis (pieds écartés)", "Utiliser les aides à la manutention (transpalette, chariot)"] },
        { type: "subtitle", value: "Les TMS (Troubles Musculo-Squelettiques)" },
        { type: "text", value: "Ce sont des affections des tissus mous (tendons, muscles). Ils représentent 80% des maladies professionnelles dans le commerce." },
        { type: "schema", value: "[ MAUVAIS GESTE ] + [ RÉPÉTITION ] = RISQUE DE TMS" }
      ]
    },
    { 
      id: "dechets", 
      title: "Tri des Déchets", 
      bloc: "Bloc 4", 
      content: [
        { type: "text", value: "Le tri des déchets en magasin est une obligation réglementaire qui s'inscrit dans une démarche de développement durable." },
        { type: "subtitle", value: "Les 5 Flux Obligatoires" },
        { type: "text", value: "1. Papier / Carton (emballages de livraison)\n2. Métal (boîtes de conserve abîmées)\n3. Plastique (films d'entourage de palettes)\n4. Verre (bouteilles cassées)\n5. Bois (palettes cassées)" },
        { type: "subtitle", value: "Gestion des Invendus" },
        { type: "text", value: "• Loi AGEC : Interdiction de jeter les produits non alimentaires.\n• Casse : Produits non vendables mais consommables (dons aux associations).\n• Déchets Organiques : Compostage ou méthanisation." },
        { type: "example", value: "Astuce : Compacter les cartons permet de réduire le volume des déchets et donc le coût de l'enlèvement par les prestataires." }
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
      doc.setFillColor(16, 185, 129); // Emerald 500
      doc.rect(0, 0, pageWidth, 60, 'F');
      
      doc.setFontSize(28);
      doc.setTextColor(255, 255, 255);
      doc.text("LIVRET DE RÉVISION", pageWidth / 2, 30, { align: "center" });
      doc.setFontSize(20);
      doc.text("CAP Équipier Polyvalent du Commerce", pageWidth / 2, 45, { align: "center" });

      yOffset = 80;
      doc.setFontSize(14);
      doc.setTextColor(71, 85, 105); // Slate 600
      doc.text("Document de synthèse personnalisé", margin, yOffset);
      yOffset += 10;
      doc.setFontSize(11);
      doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}`, margin, yOffset);
      
      // --- SOMMAIRE AMÉLIORÉ ---
      yOffset += 30;
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(0.8);
      doc.line(margin, yOffset, margin + 40, yOffset);
      yOffset += 10;
      
      doc.setFontSize(18);
      doc.setTextColor(31, 41, 55);
      doc.text("SOMMAIRE", margin, yOffset);
      yOffset += 15;
      
      const topicPageMap: { [key: string]: number } = {};
      let currentPage = 2; // Le contenu commence à la page 2

      selectedTopics.forEach((id, index) => {
        const topic = topics.find(t => t.id === id);
        if (topic) {
          doc.setFontSize(12);
          doc.setTextColor(55, 65, 81);
          
          // Ligne du sommaire avec pointillés
          const title = `${index + 1}. ${topic.title}`;
          doc.text(title, margin + 5, yOffset);
          
          const pageNumStr = "Page " + currentPage;
          const textWidth = doc.getTextWidth(title);
          const pageNumWidth = doc.getTextWidth(pageNumStr);
          
          // Dessiner les pointillés
          const dotStart = margin + 10 + textWidth;
          const dotEnd = pageWidth - margin - pageNumWidth - 5;
          if (dotEnd > dotStart) {
            let dotPos = dotStart;
            while (dotPos < dotEnd) {
              doc.text(".", dotPos, yOffset);
              dotPos += 3;
            }
          }
          
          doc.text(pageNumStr, pageWidth - margin, yOffset, { align: "right" });
          
          // Estimation simplifiée de l'espace consommé pour le prochain numéro de page
          // Chaque thème prend environ 0.5 à 0.8 page avec le nouveau contenu
          yOffset += 10;
          currentPage++; 
        }
      });

      // --- CONTENU DES FICHES ---
      selectedTopics.forEach((id) => {
        doc.addPage();
        yOffset = 25;

        const topic = topics.find(t => t.id === id);
        if (topic) {
          // En-tête de page de contenu
          doc.setFillColor(248, 250, 252); // Slate 50
          doc.rect(0, 0, pageWidth, 40, 'F');
          doc.setDrawColor(226, 232, 240); // Slate 200
          doc.line(0, 40, pageWidth, 40);

          doc.setFontSize(10);
          doc.setTextColor(16, 185, 129);
          doc.text(topic.bloc.toUpperCase(), margin, 20);
          
          doc.setFontSize(20);
          doc.setTextColor(15, 23, 42); // Slate 900
          doc.text(topic.title, margin, 32);
          
          yOffset = 55;

          topic.content.forEach((item) => {
            // Vérification de sécurité pour le saut de page
            if (yOffset > 260) {
              doc.addPage();
              yOffset = 25;
            }

            switch (item.type) {
              case "subtitle":
                yOffset += 5;
                doc.setFontSize(14);
                doc.setTextColor(16, 185, 129);
                doc.text(item.value, margin, yOffset);
                doc.setLineWidth(0.3);
                doc.line(margin, yOffset + 2, margin + 30, yOffset + 2);
                yOffset += 12;
                break;
              case "text":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85); // Slate 700
                const splitText = doc.splitTextToSize(item.value, 170);
                doc.text(splitText, margin, yOffset);
                yOffset += (splitText.length * 7) + 5;
                break;
              case "list":
                doc.setFontSize(11);
                doc.setTextColor(51, 65, 85);
                item.value.forEach((li: string) => {
                  if (yOffset > 275) { doc.addPage(); yOffset = 25; }
                  doc.setFillColor(16, 185, 129);
                  doc.circle(margin + 2, yOffset - 1, 0.8, 'F');
                  doc.text(li, margin + 7, yOffset);
                  yOffset += 7;
                });
                yOffset += 3;
                break;
              case "example":
                yOffset += 5;
                const exText = doc.splitTextToSize(item.value, 160);
                const boxHeight = (exText.length * 6) + 12;
                
                if (yOffset + boxHeight > 280) { doc.addPage(); yOffset = 25; }
                
                doc.setFillColor(240, 253, 244); // Green 50
                doc.setDrawColor(187, 247, 208); // Green 200
                doc.roundedRect(margin - 2, yOffset - 5, 174, boxHeight, 2, 2, 'FD');
                
                doc.setFontSize(9);
                doc.setTextColor(21, 128, 61); // Green 700
                doc.text("EXEMPLE CONCRET", margin + 2, yOffset);
                yOffset += 6;
                
                doc.setFontSize(10);
                doc.setTextColor(22, 101, 52); // Green 800
                doc.text(exText, margin + 2, yOffset);
                yOffset += (exText.length * 6) + 10;
                break;
              case "schema":
                yOffset += 5;
                if (yOffset > 260) { doc.addPage(); yOffset = 25; }
                doc.setDrawColor(16, 185, 129);
                doc.setLineWidth(0.5);
                doc.setFillColor(255, 255, 255);
                doc.rect(margin, yOffset, 170, 15, 'FD');
                doc.setFontSize(12);
                doc.setTextColor(16, 185, 129);
                doc.text(item.value, 105, yOffset + 9, { align: "center" });
                yOffset += 25;
                break;
            }
          });
        }
      });

      // --- PIED DE PAGE GLOBAL ---
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(148, 163, 184); // Slate 400
        doc.text(`Réussite CAP Commerce - Page ${i} / ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: "center" });
      }

      doc.save("Livret_Revision_CAP_EPC_Premium.pdf");
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
          <p className="text-gray-600 max-w-2xl mx-auto">Créez votre livret de révision complet. Sélectionnez plusieurs thèmes pour générer un document structuré de plusieurs pages.</p>
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
              <p className="text-[10px] text-gray-400 mt-4 text-center">
                Version Premium : Sommaire structuré et mise en page optimisée.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
