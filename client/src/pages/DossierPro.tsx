import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { FileText, Download, CheckSquare, Info, Layout, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DossierPro() {
  const sections = [
    {
      title: "Présentation de l'entreprise",
      content: "Décrivez l'enseigne, sa localisation, sa zone de chalandise et son organisation (organigramme).",
      icon: <Briefcase className="text-blue-500" />
    },
    {
      title: "Fiches Activités",
      content: "Détaillez vos missions : mise en rayon, encaissement, inventaire. Utilisez le 'JE' et décrivez les outils utilisés.",
      icon: <Layout className="text-emerald-500" />
    },
    {
      title: "Analyse d'un produit",
      content: "Choisissez un produit phare et analysez-le : caractéristiques techniques, prix, avantages clients.",
      icon: <FileText className="text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 font-playfair">Dossier Professionnel</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Réussissez votre dossier de stage avec nos modèles et conseils méthodologiques.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((s, i) => (
            <Card key={i} className="p-8 border-none shadow-lg bg-white dark:bg-gray-800 rounded-3xl">
              <div className="bg-gray-50 dark:bg-gray-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{s.content}</p>
              <Button variant="outline" className="w-full rounded-xl">Voir l'exemple</Button>
            </Card>
          ))}
        </div>

        <Card className="p-10 border-none shadow-xl bg-emerald-600 text-white rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Prêt à télécharger ?</h2>
            <p className="text-emerald-50 mb-8 max-w-xl">Nous avons préparé un modèle Word complet que vous n'avez plus qu'à remplir pour votre dossier de CAP EPC.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-xl font-bold">
                <Download className="mr-2" /> Modèle Dossier (.docx)
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
      </main>
    </div>
  );
}
