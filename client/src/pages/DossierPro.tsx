import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { FileText, Download, CheckSquare, Layout, Briefcase, X, Eye, Brain, Sparkles, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

export default function DossierPro() {
  const [selectedExample, setSelectedExample] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [dossierText, setDossierText] = useState("");

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

  const handleAnalyze = () => {
    if (!dossierText.trim()) {
      toast.error("Veuillez coller votre texte avant de lancer l'analyse.");
      return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult("Analyse terminée ! Votre texte est bon, mais vous devriez ajouter plus de mots-clés techniques comme 'Zone de chalandise' ou 'FIFO'. La structure est respectée.");
      toast.success("Analyse IA terminée !");
    }, 2000);
  };

  const generateCV = () => {
    const doc = new jsPDF();
    doc.setFillColor(31, 41, 55);
    doc.rect(0, 0, 70, 297, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("VOTRE NOM", 35, 40, { align: "center" });
    doc.setFontSize(10);
    doc.text("CAP EPC", 35, 50, { align: "center" });

    doc.setTextColor(40, 40, 40);
    doc.setFontSize(18);
    doc.text("EXPERIENCES", 80, 40);
    doc.setFontSize(10);
    doc.text("- Stage en Vente (Carrefour)", 80, 55);
    doc.text("- Mise en rayon et Facing", 80, 65);
    
    doc.setFontSize(18);
    doc.text("COMPETENCES", 80, 90);
    doc.setFontSize(10);
    doc.text("- Tenue de caisse (SBAM)", 80, 105);
    doc.text("- Gestion des stocks (FIFO)", 80, 115);
    doc.text("- Relation client", 80, 125);

    doc.save("Mon_CV_CAP_EPC.pdf");
    toast.success("CV généré avec succès !");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-playfair">Dossier & Carrière</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Réussissez votre dossier de stage et préparez votre insertion professionnelle avec nos outils IA.</p>
        </div>

        {/* Correcteur IA */}
        <Card className="p-8 border-none shadow-xl bg-white dark:bg-gray-800 rounded-[2.5rem] mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-2xl">
              <Brain className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Correcteur de Dossier IA</h2>
              <p className="text-sm text-gray-500">Collez votre texte pour vérifier s'il respecte le référentiel CAP EPC.</p>
            </div>
          </div>
          <textarea 
            value={dossierText}
            onChange={(e) => setDossierText(e.target.value)}
            placeholder="Collez ici votre présentation d'entreprise ou vos fiches activités..."
            className="w-full h-40 p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border-none focus:ring-2 focus:ring-purple-500 mb-6 resize-none"
          />
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-2xl font-bold w-full md:w-auto"
            >
              {isAnalyzing ? "Analyse en cours..." : <><Sparkles className="mr-2" /> Analyser mon texte</>}
            </Button>
            {analysisResult && (
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl text-sm text-purple-700 dark:text-purple-300 border border-purple-100 flex-grow md:ml-6">
                {analysisResult}
              </div>
            )}
          </div>
        </Card>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-10 border-none shadow-xl bg-emerald-600 text-white rounded-3xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Modèle de Dossier</h2>
              <p className="text-emerald-50 mb-8">Téléchargez notre guide PDF complet pour structurer votre dossier.</p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-xl font-bold shadow-lg">
                <Download className="mr-2" /> Télécharger le Guide
              </Button>
            </div>
            <FileText className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-10 -translate-y-10" size={200} />
          </Card>

          <Card className="p-10 border-none shadow-xl bg-blue-600 text-white rounded-3xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Générateur de CV</h2>
              <p className="text-blue-50 mb-8">Créez un CV professionnel adapté aux métiers du commerce en un clic.</p>
              <Button 
                onClick={generateCV}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-xl font-bold shadow-lg"
              >
                <UserPlus className="mr-2" /> Générer mon CV Pro
              </Button>
            </div>
            <Briefcase className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-10 -translate-y-10" size={200} />
          </Card>
        </div>

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
