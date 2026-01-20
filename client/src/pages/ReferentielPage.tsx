import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Info, ClipboardList, GraduationCap, Star } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-600 rounded-2xl mb-4">
              <GraduationCap size={32} />
            </div>
            <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Référentiel & Examen CAP EPC
            </h1>
            <p className="text-lg text-gray-600">
              Tout ce qu'il faut savoir pour réussir vos épreuves le jour du diplôme.
            </p>
          </header>

          <section className="grid gap-8">
            {epreuves.map((ep) => (
              <Card key={ep.id} className="border-none shadow-md overflow-hidden">
                <div className="h-2 bg-emerald-500" />
                <CardHeader className="bg-white border-b border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">{ep.bloc}</span>
                      <CardTitle className="text-2xl font-poppins mt-1">{ep.titre}</CardTitle>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold">
                      Coef. {ep.coef}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
                      <Info size={18} className="text-emerald-500" />
                      Objectif de l'épreuve
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{ep.objectif}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
                      <ClipboardList size={18} className="text-emerald-500" />
                      Compétences évaluées
                    </h4>
                    <ul className="grid gap-3">
                      {ep.competences.map((comp, index) => (
                        <li key={index} className="flex gap-3 text-gray-600">
                          <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-4">
                    <div className="text-amber-500 shrink-0">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-900 mb-1">Conseil de l'expert</p>
                      <p className="text-sm text-amber-800">{ep.conseil}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mt-16 bg-emerald-900 text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap />
              Le mot de la fin pour l'examen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-emerald-50 leading-relaxed">
                  Le CAP EPC n'est pas seulement un examen théorique, c'est une validation de vos <strong>gestes professionnels</strong>. Le jury regarde votre posture, votre tenue et votre vocabulaire technique.
                </p>
                <p className="text-emerald-50 leading-relaxed">
                  N'oubliez pas que chaque bloc est indépendant : si vous échouez à un bloc, vous pouvez le repasser plus tard tout en gardant le bénéfice des autres !
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-3 text-emerald-300">Check-list du jour J :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">✅ Convocation et pièce d'identité</li>
                  <li className="flex items-center gap-2">✅ Tenue professionnelle propre</li>
                  <li className="flex items-center gap-2">✅ Dossier professionnel (pour l'EP3)</li>
                  <li className="flex items-center gap-2">✅ Votre plus beau sourire !</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
