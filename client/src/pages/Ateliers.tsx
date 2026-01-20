import Navigation from "@/components/Navigation";
import { SimulateurCaisse } from "@/components/SimulateurCaisse";
import { GenerateurBL } from "@/components/GenerateurBL";
import { PlanMasseCreator } from "@/components/PlanMasseCreator";
import { Card } from "@/components/ui/card";
import { Rocket, ShoppingCart, FileText, Layout, Star } from "lucide-react";

export default function Ateliers() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navigation />

      <main className="container max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <section className="mb-20 text-center">
          <div className="inline-block mb-6">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-5 rounded-[2rem] shadow-xl transform -rotate-6">
              <Rocket className="text-emerald-600 dark:text-emerald-400" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Ateliers Pratiques
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passez de la théorie à la pratique avec nos simulateurs interactifs. Entraînez-vous aux gestes professionnels du CAP EPC.
          </p>
        </section>

        <div className="space-y-32">
          {/* Atelier 1 : Caisse */}
          <section id="caisse" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-emerald-600 rounded-2xl shadow-lg text-white">
                <ShoppingCart size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">Atelier 1 : Encaissement</h2>
                <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Bloc 3 : Relation Client</p>
              </div>
            </div>
            <SimulateurCaisse />
          </section>

          {/* Atelier 2 : Réception */}
          <section id="reception" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-blue-600 rounded-2xl shadow-lg text-white">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">Atelier 2 : Contrôle de Réception</h2>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">Bloc 1 : Logistique</p>
              </div>
            </div>
            <GenerateurBL />
          </section>

          {/* Atelier 3 : Merchandising */}
          <section id="merch" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-purple-600 rounded-2xl shadow-lg text-white">
                <Layout size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">Atelier 3 : Implantation Rayon</h2>
                <p className="text-purple-600 font-bold uppercase tracking-widest text-xs">Bloc 2 : Merchandising</p>
              </div>
            </div>
            <PlanMasseCreator />
          </section>
        </div>

        {/* Motivation Section */}
        <section className="mt-32 bg-gray-900 text-white rounded-[3rem] p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 bg-emerald-600/20 w-96 h-96 rounded-full blur-[100px]"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Star className="text-amber-400 mx-auto mb-6" size={48} fill="currentColor" />
            <h2 className="text-4xl font-bold mb-6 font-poppins">Prêt pour l'examen ?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              La répétition est la clé de la maîtrise. Utilisez ces ateliers régulièrement pour que ces gestes deviennent naturels le jour de votre évaluation.
            </p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">100%</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Pratique</div>
              </div>
              <div className="w-px h-12 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">3</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Simulateurs</div>
              </div>
              <div className="w-px h-12 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">∞</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Révisions</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Réussir son CAP Commerce. Ateliers interactifs pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
