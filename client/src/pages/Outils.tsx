import Navigation from "@/components/Navigation";
import { CommercialCalculator } from "@/components/CommercialCalculator";
import { Card } from "@/components/ui/card";
import { Wrench, TrendingUp, Calendar } from "lucide-react";

export default function Outils() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 mb-4">
            Outils Pratiques
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Des calculatrices et utilitaires pour maîtriser les calculs commerciaux et la gestion de magasin.
          </p>
        </section>

        {/* Calculatrice Commerciale */}
        <section className="mb-16">
          <CommercialCalculator />
        </section>

        {/* Autres outils à venir */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-green-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Planning de Livraison</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Générateur interactif pour s'entraîner à organiser les réceptions selon les jours de livraison des fournisseurs.
            </p>
            <div className="h-32 bg-green-100 rounded-lg flex items-center justify-center text-green-700 font-semibold">
              Bientôt disponible ⏰
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-purple-600" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Analyse de Ventes</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Outil pour analyser les données de vente, calculer les tendances et optimiser l'approvisionnement.
            </p>
            <div className="h-32 bg-purple-100 rounded-lg flex items-center justify-center text-purple-700 font-semibold">
              Bientôt disponible ⏰
            </div>
          </Card>
        </section>

        {/* Conseils d'utilisation */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            💡 Conseils d'utilisation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-3">Calculatrice Commerciale</h3>
              <p className="text-gray-700">
                Utilisez-la pour vérifier vos calculs lors des révisions. Les calculs commerciaux sont essentiels à l'examen !
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-3">Précision</h3>
              <p className="text-gray-700">
                Arrondissez toujours à 2 décimales (centimes). C'est la norme en commerce.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-3">Pratique</h3>
              <p className="text-gray-700">
                Entraînez-vous régulièrement avec différentes valeurs pour maîtriser les formules.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce. Outils pédagogiques pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
