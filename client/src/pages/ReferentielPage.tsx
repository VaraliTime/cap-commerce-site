import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Info, ClipboardList, GraduationCap, Star, Calendar } from "lucide-react";
import { PlanningRevision } from "@/components/PlanningRevision";

export default function ReferentielPage() {
  const epreuves = [
    {
      id: "ep1",
      titre: "EP1 : Réception et suivi des commandes",
      bloc: "Bloc 1",
      coef: 3,
      objectif: "Cette épreuve évalue votre capacité à gérer l'arrivée des produits, du camion jusqu'à la réserve.",
      competences: [
        "Participer à la passation des commandes fournisseurs",
        "Réceptionner et contrôler les livraisons (bon de livraison vs commande)",
        "Assurer le suivi des stocks et identifier les ruptures",
        "Maîtriser les outils numériques de gestion de stock"
      ],
      conseil: "Le jour de l'examen, soyez très rigoureux sur le contrôle des colis (état, quantité) et la signature des documents."
    },
    {
      id: "ep2",
      titre: "EP2 : Mettre en valeur et approvisionner",
      bloc: "Bloc 2",
      coef: 4,
      objectif: "L'objectif est de vérifier que vous savez rendre le magasin attractif et plein pour les clients.",
      competences: [
        "Approvisionner et réapprovisionner les rayons selon les règles d'implantation",
        "Mettre en valeur les produits (merchandising et têtes de gondole)",
        "Réaliser l'étiquetage et le balisage informatif ou promotionnel",
        "Maintenir l'état marchand et la propreté du point de vente"
      ],
      conseil: "Attention à la rotation des stocks (FIFO/PEPS) : les produits avec la date la plus courte doivent être devant !"
    },
    {
      id: "ep3",
      titre: "EP3 : Conseiller et accompagner le client",
      bloc: "Bloc 3",
      coef: 5,
      objectif: "C'est l'épreuve de vente. Vous devez montrer votre aisance relationnelle et votre technique commerciale.",
      competences: [
        "Accueillir le client avec la méthode SBAM",
        "Identifier les besoins par un questionnement efficace",
        "Conseiller, argumenter (méthode CAP) et réaliser des ventes additionnelles",
        "Réaliser l'encaissement et proposer les services de fidélité"
      ],
      conseil: "Préparez bien votre fiche de vente. Le jury apprécie particulièrement le sourire et la capacité à rebondir sur les objections."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl mb-4 shadow-sm">
              <GraduationCap size={40} />
            </div>
            <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Référentiel & Examen CAP EPC
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tout ce qu'il faut savoir pour réussir vos épreuves le jour du diplôme.
            </p>
          </header>

          {/* Planning de Révision Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-emerald-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                Votre Planning de Révision
              </h2>
            </div>
            <PlanningRevision />
          </section>

          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="text-emerald-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Détail des Épreuves
            </h2>
          </div>

          <section className="grid gap-8 mb-20">
            {epreuves.map((ep) => (
              <Card key={ep.id} className="border-none shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                <div className="h-2 bg-emerald-500" />
                <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">{ep.bloc}</span>
                      <CardTitle className="text-2xl font-poppins mt-1 text-gray-900 dark:text-white">{ep.titre}</CardTitle>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-lg font-bold">
                      Coef. {ep.coef}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                      <Info size={18} className="text-emerald-500" />
                      Objectif de l'épreuve
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{ep.objectif}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                      <ClipboardList size={18} className="text-emerald-500" />
                      Compétences évaluées
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ep.competences.map((comp, index) => (
                        <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400 text-sm">
                          <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-6 flex gap-4">
                    <div className="text-amber-500 shrink-0">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-900 dark:text-amber-400 mb-1">Conseil de l'expert</p>
                      <p className="text-sm text-amber-800 dark:text-amber-500 leading-relaxed">{ep.conseil}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-emerald-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 bg-white/10 w-80 h-80 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <GraduationCap size={32} />
              Le mot de la fin pour l'examen
            </h2>
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <p className="text-emerald-50 leading-relaxed text-lg">
                  Le CAP EPC n'est pas seulement un examen théorique, c'est une validation de vos <strong>gestes professionnels</strong>. Le jury regarde votre posture, votre tenue et votre vocabulaire technique.
                </p>
                <p className="text-emerald-50 leading-relaxed">
                  N'oubliez pas que chaque bloc est indépendant : si vous échouez à un bloc, vous pouvez le repasser plus tard tout en gardant le bénéfice des autres !
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md border border-white/20">
                <h3 className="font-bold mb-4 text-emerald-300 text-xl">Check-list du jour J :</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Convocation et pièce d'identité
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Tenue professionnelle propre
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Dossier professionnel (pour l'EP3)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px]">✓</div>
                    Votre plus beau sourire !
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
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
