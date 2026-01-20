import Navigation from "@/components/Navigation";
import { CommercialCalculator } from "@/components/CommercialCalculator";
import { Card } from "@/components/ui/card";
import { Wrench, Calculator, Scale, Package, Info, CheckCircle } from "lucide-react";

export default function Outils() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
              <Wrench className="text-blue-600 dark:text-blue-400" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Outils Professionnels
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Des utilitaires interactifs pour maîtriser les calculs commerciaux, la gestion de magasin et la logistique.
          </p>
        </section>

        {/* Calculatrice Commerciale */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Calculatrice Commerciale
            </h2>
          </div>
          <CommercialCalculator />
        </section>

        {/* Autres outils à venir */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/10 dark:to-gray-800 border-2 border-emerald-100 dark:border-emerald-900/30 shadow-lg group hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                <Scale className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Convertisseur d'Unités</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Gérez facilement les conversions de poids (kg/g), de volumes (L/cl) et de dimensions pour vos réceptions et expéditions.
            </p>
            <div className="bg-emerald-100/50 dark:bg-emerald-900/20 py-4 rounded-xl text-center text-emerald-700 dark:text-emerald-400 font-bold text-sm uppercase tracking-widest">
              Bientôt disponible ⏰
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/10 dark:to-gray-800 border-2 border-orange-100 dark:border-orange-900/30 shadow-lg group hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                <Package className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Générateur d'Étiquettes</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Créez des étiquettes prix conformes à la réglementation (Prix au kg/L, mentions obligatoires) pour vos exercices de balisage.
            </p>
            <div className="bg-orange-100/50 dark:bg-orange-900/20 py-4 rounded-xl text-center text-orange-700 dark:text-orange-400 font-bold text-sm uppercase tracking-widest">
              Bientôt disponible ⏰
            </div>
          </Card>
        </section>

        {/* Conseils d'utilisation */}
        <section className="bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-10 border border-blue-100 dark:border-blue-900/30 max-w-5xl mx-auto">
          <h2 className="font-poppins text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Info className="text-blue-600" /> Conseils d'utilisation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold">
                <CheckCircle size={18} />
                <span>Vérification</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Utilisez la calculatrice pour vérifier vos résultats lors de vos exercices de gestion. Ne vous contentez pas de copier le résultat !
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold">
                <CheckCircle size={18} />
                <span>Précision</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                En commerce, on arrondit toujours à deux décimales (ex: 12,45 €). La calculatrice le fait automatiquement pour vous.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold">
                <CheckCircle size={18} />
                <span>Entraînement</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Essayez de retrouver les formules par vous-même avant d'utiliser l'outil. C'est la clé de la réussite à l'examen.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Réussir son CAP Commerce. Outils pédagogiques pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
