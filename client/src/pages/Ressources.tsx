import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import InteractiveGlossary from "@/components/InteractiveGlossary";
import { Card } from "@/components/ui/card";

interface Term {
  terme: string;
  definition: string;
}

export default function Ressources() {
  const [glossaire, setGlossaire] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGlossaire = async () => {
      try {
        const response = await fetch("/content.json");
        const data = await response.json();
        setGlossaire(data.ressources.glossaire || []);
      } catch (err) {
        console.error("Failed to load glossaire:", err);
      } finally {
        setLoading(false);
      }
    };
    loadGlossaire();
  }, []);

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
          <p className="text-xl text-gray-600 max-w-3xl">
            Glossaire, fiches de révision et ressources complémentaires pour votre préparation au CAP EPC.
          </p>
        </div>

        {/* Glossaire Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📚 Glossaire du CAP Commerce
          </h2>
          
          {loading ? (
            <div className="text-center text-gray-600">Chargement du glossaire...</div>
          ) : (
            <InteractiveGlossary terms={glossaire} />
          )}
        </section>

        {/* Fiches Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📝 Fiches de révision rapides
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fiches.map((fiche) => (
              <Card key={fiche.id} className="p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
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
        <section className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded mb-12">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            💡 Conseils pour réussir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Avant l'examen
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Révisez régulièrement les trois blocs de compétences</li>
                <li>✓ Mémorisez les méthodes clés : SBAM, CAP, 5B</li>
                <li>✓ Pratiquez les étapes de la vente en situation réelle</li>
                <li>✓ Apprenez le vocabulaire professionnel</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Pendant l'examen
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Restez professionnel et courtois avec le client</li>
                <li>✓ Appliquez les étapes de la vente dans l'ordre</li>
                <li>✓ Écoutez attentivement les questions</li>
                <li>✓ Utilisez le vocabulaire approprié</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fiches PDF Téléchargeables */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📥 Fiches de Révision PDF Téléchargeables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { titre: "Fiche Synthèse - Bloc 1", desc: "Points clés de la réception", size: "2.3 MB" },
              { titre: "Fiche Synthèse - Bloc 2", desc: "Merchandising et rayons", size: "1.8 MB" },
              { titre: "Fiche Synthèse - Bloc 3", desc: "Vente et accueil client", size: "2.1 MB" },
              { titre: "Fiche Synthèse - Bloc 4", desc: "PSE et environnement", size: "1.9 MB" },
              { titre: "Lexique Complet", desc: "150+ termes techniques", size: "3.2 MB" },
              { titre: "Formules Commerciales", desc: "Calculs avec exemples", size: "1.5 MB" }
            ].map((fiche, idx) => (
              <Card key={idx} className="p-6 border-2 border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📄</span>
                  <span className="text-xs font-bold text-blue-600 uppercase">PDF</span>
                </div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">{fiche.titre}</h3>
                <p className="text-gray-600 text-sm mb-4">{fiche.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Taille: {fiche.size}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors">
                  ⬇️ Télécharger
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* Galerie de Photos */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🖼️ Galerie - Bonnes et Mauvaises Pratiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { titre: "Bon Facing", cat: "Merchandising", desc: "Rayon bien organisé" },
              { titre: "Mauvais Facing", cat: "Merchandising", desc: "À éviter absolument" },
              { titre: "Tête de Gondole", cat: "Merchandising", desc: "Présentation attractive" },
              { titre: "Réserve Organisée", cat: "Réception", desc: "Stockage logique" },
              { titre: "Bon Port de Charge", cat: "PSE", desc: "Posture correcte" },
              { titre: "Mauvaise Posture", cat: "PSE", desc: "Risque de TMS" }
            ].map((photo, idx) => (
              <Card key={idx} className="overflow-hidden border-2 border-green-100 hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <span className="text-4xl">🖼️</span>
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-green-600 uppercase">{photo.cat}</span>
                  <h3 className="font-poppins font-semibold text-gray-900 mt-2">{photo.titre}</h3>
                  <p className="text-gray-600 text-sm mt-2">{photo.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Competences Transversales */}
        <section>
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-8">
            🎯 Compétences transversales
          </h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Au-delà des trois blocs de compétences, le CAP EPC évalue également vos compétences transversales essentielles pour le commerce :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border border-gray-200">
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Comportement professionnel
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Tenue vestimentaire appropriée</li>
                <li>• Ponctualité et assiduité</li>
                <li>• Respect des règles de l'entreprise</li>
                <li>• Travail en équipe</li>
              </ul>
            </Card>

            <Card className="p-6 border border-gray-200">
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Hygiène et sécurité
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Respect des normes d'hygiène</li>
                <li>• Prévention des accidents</li>
                <li>• Gestion des déchets</li>
                <li>• Développement durable</li>
              </ul>
            </Card>
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
