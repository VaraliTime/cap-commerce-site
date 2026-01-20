import Navigation from "@/components/Navigation";
import { SimulateurOral } from "@/components/SimulateurOral";
import { Card } from "@/components/ui/card";
import { Award, Mic, FileText, CheckCircle, Info } from "lucide-react";

export default function Examens() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
              <Award className="text-emerald-600 dark:text-emerald-400" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Préparation aux Examens
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Tout pour réussir vos épreuves EP1 et EP2 du CAP EPC. Entraînez-vous en conditions réelles.
          </p>
        </section>

        {/* Simulateur Oral */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Mic className="text-emerald-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Simulateur d'Épreuves Orales
            </h2>
          </div>
          <SimulateurOral />
        </section>

        {/* Conseils Épreuves */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 border-2 border-blue-100 dark:border-blue-900/30 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-6 flex items-center gap-2">
              <FileText /> Épreuve EP1 : Réception
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Savoir identifier les documents (BC, BL, BR).</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Maîtriser les contrôles quantitatifs et qualitatifs.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Connaître les règles de sécurité et d'ergonomie.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-purple-100 dark:border-purple-900/30 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-400 mb-6 flex items-center gap-2">
              <FileText /> Épreuve EP2 : Vente
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Appliquer la méthode SBAM dès le premier contact.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Utiliser l'argumentaire CAP (Caractéristique, Avantage, Preuve).</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Savoir proposer une vente additionnelle pertinente.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Info Box */}
        <section className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl p-8 border border-amber-100 dark:border-amber-900/30">
          <h2 className="font-poppins text-2xl font-bold text-amber-900 dark:text-amber-400 mb-4 flex items-center gap-3">
            <Info /> Le saviez-vous ?
          </h2>
          <p className="text-amber-800 dark:text-amber-500 leading-relaxed">
            L'épreuve orale ne dure que quelques minutes, mais votre posture professionnelle compte pour une grande partie de la note. Entraînez-vous à parler distinctement, à regarder votre interlocuteur et à utiliser les bons termes techniques.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Réussir son CAP Commerce. Ressources pédagogiques pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
