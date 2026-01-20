import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Ressources() {
  const [expandedGlossaire, setExpandedGlossaire] = useState<string | null>(null);

  const glossaire = [
    { id: "fifo", terme: "FIFO", definition: "First In, First Out (Premier Entré, Premier Sorti). Principe de gestion des stocks où les produits reçus en premier sont vendus en premier." },
    { id: "facing", terme: "Facing", definition: "Nombre de produits d'une même référence visibles de face sur le rayon. Un bon facing attire l'attention du client." },
    { id: "gondole", terme: "Gondole", definition: "Meuble de vente composé de plusieurs niveaux de rayons. C'est l'élément principal de présentation des produits en magasin." },
    { id: "tete", terme: "Tête de gondole", definition: "Emplacement promotionnel en bout de rayon. C'est un emplacement très visible et très vendu." },
    { id: "ilv", terme: "ILV", definition: "Information sur le Lieu de Vente. Étiquettes, codes-barres et informations produit affichées en magasin." },
    { id: "plv", terme: "PLV", definition: "Publicité sur le Lieu de Vente. Affiches, présentoirs et éléments de décoration promotionnelle." },
    { id: "demarque", terme: "Démarque inconnue", definition: "Différence entre le stock théorique (selon l'inventaire) et le stock réel. Peut être due aux vols, erreurs ou gaspillage." },
    { id: "omnicanal", terme: "Omnicanal", definition: "Approche commerciale intégrant le commerce en ligne et en magasin physique pour une expérience client fluide." },
    { id: "bc", terme: "Bon de Commande (BC)", definition: "Document émis par l'acheteur (magasin) au fournisseur. Contient les références, quantités et prix des produits commandés." },
    { id: "bl", terme: "Bon de Livraison (BL)", definition: "Document émis par le fournisseur ou le transporteur. Accompagne la livraison et liste les produits expédiés." },
    { id: "br", terme: "Bon de Réception (BR)", definition: "Document interne émis par le réceptionnaire après vérification. Confirme la conformité de la livraison." }
  ];

  const fiches = [
    {
      id: "fiche1",
      titre: "Fiche 1 : Les 6 étapes de la réception",
      contenu: "1. Accueil du transporteur - Courtoisie et vérification d'identité\n2. Vérification des documents - Comparer BC et BL\n3. Contrôle quantitatif - Compter les colis\n4. Contrôle qualitatif - Vérifier l'état des produits\n5. Signature et BR - Émettre le Bon de Réception\n6. Rangement - Mettre en stock ou rayon"
    },
    {
      id: "fiche2",
      titre: "Fiche 2 : Les 5B de Kepner",
      contenu: "Bon produit - Sélectionner les produits appropriés\nBon endroit - Placer aux emplacements stratégiques\nBon moment - Approvisionner au moment opportun\nBonne quantité - Quantité suffisante sans surstock\nBonne information - Signalétique claire et conforme"
    },
    {
      id: "fiche3",
      titre: "Fiche 3 : Niveaux de présentation",
      contenu: "Niveau des yeux (140-170 cm) - Plus vendu, best-sellers\nNiveau des mains (80-140 cm) - Facile d'accès, produits courants\nNiveau des pieds (0-80 cm) - Produits volumineux ou bas prix\nNiveau du chapeau (170+ cm) - Stock ou signalétique"
    },
    {
      id: "fiche4",
      titre: "Fiche 4 : Méthode SBAM",
      contenu: "S - Sourire : Accueil avec sourire sincère\nB - Bonjour : Salutation polite\nA - Au revoir : Fin de l'interaction avec chaleur\nM - Merci : Remerciement pour l'achat ou la visite"
    },
    {
      id: "fiche5",
      titre: "Fiche 5 : Méthode CAP",
      contenu: "C - Caractéristique : Propriétés objectives du produit\nA - Avantage : Bénéfices pour le client\nP - Preuve : Avis clients, certifications, démonstration"
    },
    {
      id: "fiche6",
      titre: "Fiche 6 : Les 7 étapes de la vente",
      contenu: "1. Prise de contact - Accueil SBAM\n2. Découverte des besoins - Questions ouvertes/fermées\n3. Argumentation - Méthode CAP\n4. Traitement des objections - Écoute et réponse\n5. Vente additionnelle - Produits complémentaires\n6. Encaissement - Paiement et monnaie\n7. Prise de congé - Remerciement et invitation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            Ressources
          </h1>
          <p className="text-xl text-gray-600">
            Glossaire, fiches de révision et ressources complémentaires pour votre préparation au CAP EPC.
          </p>
        </div>

        {/* Glossaire Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📚 Glossaire du CAP Commerce
          </h2>
          <div className="space-y-3">
            {glossaire.map((item) => (
              <Card 
                key={item.id}
                className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedGlossaire(expandedGlossaire === item.id ? null : item.id)}
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-poppins font-semibold text-gray-900">
                    {item.terme}
                  </h3>
                  <span className="text-emerald-600 text-xl">
                    {expandedGlossaire === item.id ? "−" : "+"}
                  </span>
                </button>

                {expandedGlossaire === item.id && (
                  <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Fiches de révision Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📝 Fiches de révision rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fiches.map((fiche) => (
              <Card 
                key={fiche.id}
                className="border border-gray-200 p-6 bg-emerald-50 border-l-4 border-l-emerald-600 hover:shadow-md transition-shadow"
              >
                <h3 className="font-poppins font-semibold text-gray-900 mb-4">
                  {fiche.titre}
                </h3>
                <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                  {fiche.contenu}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            💡 Conseils pour réussir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-gray-200 p-6">
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Avant l'examen
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Révisez régulièrement les trois blocs de compétences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Mémorisez les méthodes clés : SBAM, CAP, 5B</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Pratiquez les étapes de la vente en situation réelle</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Apprenez le vocabulaire professionnel</span>
                </li>
              </ul>
            </Card>

            <Card className="border border-gray-200 p-6">
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Pendant l'examen
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Restez professionnel et courtois avec le client</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Appliquez les étapes de la vente dans l'ordre</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Écoutez attentivement les questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Utilisez le vocabulaire approprié</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Compétences transversales Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🎯 Compétences transversales
          </h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Au-delà des trois blocs de compétences, le CAP EPC évalue également vos compétences transversales essentielles pour le commerce :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-poppins font-semibold text-emerald-600 mb-3">
                  Comportement professionnel
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tenue vestimentaire appropriée</li>
                  <li>• Ponctualité et assiduité</li>
                  <li>• Respect des règles de l'entreprise</li>
                  <li>• Travail en équipe</li>
                </ul>
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-emerald-600 mb-3">
                  Hygiène et sécurité
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Respect des normes d'hygiène</li>
                  <li>• Prévention des accidents</li>
                  <li>• Gestion des déchets</li>
                  <li>• Développement durable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce
          </p>
        </div>
      </footer>
    </div>
  );
}
