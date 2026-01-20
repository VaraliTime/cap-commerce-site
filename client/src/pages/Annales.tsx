import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Award } from "lucide-react";

export default function Annales() {
  const annales = [
    {
      id: 1,
      titre: "Sujet 2024 - Bloc 1 : Réception",
      description: "Étude de cas complète sur la réception et le contrôle de marchandises",
      difficulte: "Moyen",
      annee: 2024,
      type: "Sujet + Corrigé"
    },
    {
      id: 2,
      titre: "Sujet 2024 - Bloc 2 : Merchandising",
      description: "Analyse d'un agencement de magasin et optimisation des rayons",
      difficulte: "Moyen",
      annee: 2024,
      type: "Sujet + Corrigé"
    },
    {
      id: 3,
      titre: "Sujet 2024 - Bloc 3 : Vente",
      description: "Jeu de rôle client-vendeur avec traitement d'objections",
      difficulte: "Difficile",
      annee: 2024,
      type: "Sujet + Corrigé"
    },
    {
      id: 4,
      titre: "Sujet 2023 - Bloc 1 : Réception",
      description: "Gestion d'une livraison avec anomalies à traiter",
      difficulte: "Moyen",
      annee: 2023,
      type: "Sujet + Corrigé"
    },
    {
      id: 5,
      titre: "Sujet 2023 - Bloc 2 : Merchandising",
      description: "Création d'un plan de masse et calcul de facing",
      difficulte: "Facile",
      annee: 2023,
      type: "Sujet + Corrigé"
    },
    {
      id: 6,
      titre: "Sujet 2023 - Bloc 3 : Vente",
      description: "Argumentation commerciale avec méthode CAP",
      difficulte: "Moyen",
      annee: 2023,
      type: "Sujet + Corrigé"
    }
  ];

  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Facile': return 'bg-green-100 text-green-700';
      case 'Moyen': return 'bg-yellow-100 text-yellow-700';
      case 'Difficile': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 mb-4">
            Annales & Sujets d'Examen
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Consultez les sujets des années précédentes avec leurs corrigés pour vous préparer efficacement à l'examen du CAP EPC.
          </p>
        </section>

        {/* Filtres */}
        <section className="mb-12 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Tous les sujets
          </Button>
          <Button variant="outline" className="border-gray-300">
            2024
          </Button>
          <Button variant="outline" className="border-gray-300">
            2023
          </Button>
          <Button variant="outline" className="border-gray-300">
            Bloc 1
          </Button>
          <Button variant="outline" className="border-gray-300">
            Bloc 2
          </Button>
          <Button variant="outline" className="border-gray-300">
            Bloc 3
          </Button>
        </section>

        {/* Grille des annales */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {annales.map(annale => (
            <Card key={annale.id} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <FileText className="text-emerald-600" size={32} />
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(annale.difficulte)}`}>
                  {annale.difficulte}
                </span>
              </div>
              
              <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">
                {annale.titre}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4">
                {annale.description}
              </p>
              
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <span className="text-xs text-gray-500 font-semibold">Année {annale.annee}</span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-semibold">
                  {annale.type}
                </span>
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Download size={16} className="mr-2" /> Télécharger
              </Button>
            </Card>
          ))}
        </section>

        {/* Section conseils */}
        <section className="bg-emerald-50 rounded-lg p-8 border-2 border-emerald-200">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="text-emerald-600" /> Comment utiliser les annales ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">1️⃣ Testez-vous</h3>
              <p className="text-gray-700">
                Faites le sujet en conditions d'examen (chronomètre, sans ressources).
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">2️⃣ Comparez</h3>
              <p className="text-gray-700">
                Vérifiez votre réponse avec le corrigé officiel et identifiez vos erreurs.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">3️⃣ Progressez</h3>
              <p className="text-gray-700">
                Refaites les sujets difficiles après avoir révisé les points faibles.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce. Annales et sujets d'examen pour le CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
