import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { FileText, Download, CheckSquare, Layout, Briefcase, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { jsPDF } from "jspdf";

export default function DossierPro() {
  const [selectedExample, setSelectedExample] = useState<any | null>(null);

  const sections = [
    {
      title: "Présentation de l'entreprise",
      content: "Décrivez l'enseigne, sa localisation, sa zone de chalandise et son organisation (organigramme).",
      icon: <Briefcase className="text-blue-500" />,
      example: {
        title: "Exemple : Présentation de Carrefour Market",
        text: "Mon stage s'est déroulé au Carrefour Market de Lyon 3ème. C'est un supermarché de proximité de 1500m². Sa zone de chalandise est principalement urbaine (habitants du quartier). L'équipe est composée de 25 salariés sous la direction de M. Martin. L'organisation est divisée en 3 pôles : Frais, Épicerie et Caisse.",
        tips: ["Utilisez des chiffres (m², nombre d'employés)", "Mentionnez le type de commerce (supermarché, boutique, etc.)"]
      }
    },
    {
      title: "Fiches Activités",
      content: "Détaillez vos missions : mise en rayon, encaissement, inventaire. Utilisez le 'JE' et décrivez les outils utilisés.",
      icon: <Layout className="text-emerald-500" />,
      example: {
        title: "Exemple : Mise en rayon (Facing)",
        text: "Chaque matin, j'ai effectué le facing du rayon liquides. J'ai ramené les produits vers l'avant pour donner une impression de plein. J'ai vérifié les dates de péremption (DLC) en appliquant la règle du FIFO : les produits les plus anciens devant. J'ai utilisé un transpalette manuel pour déplacer les palettes de réserve.",
        tips: ["Utilisez des verbes d'action", "Expliquez le 'Pourquoi' de l'action", "Citez les outils utilisés"]
      }
    },
    {
      title: "Analyse d'un produit",
      content: "Choisissez un produit phare et analysez-le : caractéristiques techniques, prix, avantages clients.",
      icon: <FileText className="text-orange-500" />,
      example: {
        title: "Exemple : Analyse d'une Cafetière Nespresso",
        text: "Produit : Cafetière Pixie. Caractéristiques : Pression 19 bars, arrêt automatique. Prix : 99€. Avantages : Rapidité, design compact, large choix de capsules. Argumentaire : 'C'est la machine idéale pour un café de qualité professionnelle à la maison sans prendre de place sur votre plan de travail.'",
        tips: ["Utilisez la méthode CAP (Caractéristiques, Avantages, Preuves)", "N'oubliez pas de mentionner le prix"]
      }
    }
  ];

  const generateModelPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(16, 185, 129); // Emerald 600
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("MODELE DOSSIER PROFESSIONNEL", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.text("CAP Equipier Polyvalent du Commerce (EPC)", 105, 30, { align: "center" });

    // Content
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(16);
    doc.text("Structure du Dossier", 20, 60);
    
    doc.setFontSize(12);
    let y = 75;
    const structure = [
      "1. Page de Garde (Nom, Prénom, Session, Entreprise)",
      "2. Sommaire",
      "3. Présentation de l'entreprise (Fiche d'identité)",
      "4. Fiche Activité n°1 : Réception et mise en rayon",
      "5. Fiche Activité n°2 : Suivi des stocks et cadencier",
      "6. Fiche Activité n°3 : Vente et relation client",
      "7. Analyse d'un produit ou d'une promotion",
      "8. Conclusion et bilan personnel"
    ];

    structure.forEach(item => {
      doc.text(item, 25, y);
      y += 10;
    });

    doc.setFontSize(14);
    doc.text("Conseils de rédaction :", 20, y + 10);
    doc.setFontSize(11);
    doc.text("- Utilisez le 'JE' pour décrire vos actions.", 25, y + 25);
    doc.text("- Joignez des photos de vos réalisations (rayons, vitrines).", 25, y + 35);
    doc.text("- Soyez précis sur les outils utilisés (PDA, transpalette, logiciel).", 25, y + 45);

    doc.save("Modele_Dossier_CAP_EPC.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-playfair">Dossier Professionnel</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Réussissez votre dossier de stage avec nos modèles et exemples interactifs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((s, i) => (
            <Card key={i} className="p-8 border-none shadow-lg bg-white dark:bg-gray-800 rounded-3xl flex flex-col">
              <div className="bg-gray-50 dark:bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{s.content}</p>
              <Button 
                onClick={() => setSelectedExample(s.example)}
                variant="outline" 
                className="w-full rounded-xl border-2 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all"
              >
                <Eye className="mr-2" size={18} /> Voir l'exemple
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-10 border-none shadow-xl bg-emerald-600 text-white rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Prêt à télécharger ?</h2>
            <p className="text-emerald-50 mb-8 max-w-xl">Nous avons préparé un guide complet au format PDF que vous pouvez utiliser comme base pour votre dossier.</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={generateModelPDF}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-xl font-bold shadow-lg"
              >
                <Download className="mr-2" /> Télécharger le Modèle (.pdf)
              </Button>
              <Button className="bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-6 rounded-xl font-bold">
                <CheckSquare className="mr-2" /> Check-list de validation
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-10 -translate-y-10">
            <FileText size={300} />
          </div>
        </Card>

        {/* Modal d'exemple */}
        <AnimatePresence>
          {selectedExample && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-emerald-600">{selectedExample.title}</h3>
                    <button onClick={() => setSelectedExample(null)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-6 border-l-4 border-emerald-500">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      "{selectedExample.text}"
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Conseils du jury :</h4>
                    <ul className="space-y-2">
                      {selectedExample.tips.map((tip: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckSquare className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setSelectedExample(null)}
                    className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 py-6 rounded-xl font-bold"
                  >
                    J'ai compris
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
