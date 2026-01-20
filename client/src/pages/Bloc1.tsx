import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Bloc1() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "sec1",
      titre: "Généralités sur la réception",
      contenu: "La réception des marchandises est une étape cruciale de la chaîne logistique. Elle garantit que les produits reçus correspondent exactement à la commande passée, tant en quantité qu'en qualité. Le réceptionnaire est responsable de vérifier que tout est conforme avant d'accepter la livraison.",
      points: [
        "La réception est la première étape du processus de mise en stock",
        "Elle requiert rigueur et attention aux détails",
        "Le réceptionnaire doit connaître les procédures de l'entreprise",
        "La traçabilité des produits est essentielle"
      ]
    },
    {
      id: "sec2",
      titre: "Processus de réception",
      contenu: "Le processus de réception suit plusieurs étapes bien définies pour assurer la conformité de la livraison.",
      etapes: [
        { num: 1, titre: "Accueil du transporteur", desc: "Accueillez le livreur avec courtoisie, vérifiez son identité et celle de l'entreprise de transport." },
        { num: 2, titre: "Vérification des documents", desc: "Comparez le Bon de Livraison (BL) avec le Bon de Commande (BC). Vérifiez que les références, quantités et prix correspondent." },
        { num: 3, titre: "Contrôle quantitatif", desc: "Comptez les colis reçus et vérifiez qu'ils correspondent au nombre indiqué sur le BL. Vérifiez également le poids total si applicable." },
        { num: 4, titre: "Contrôle qualitatif", desc: "Inspectez l'état des produits : emballages intacts, dates de péremption valides, absence de dommages." },
        { num: 5, titre: "Signature et Bon de Réception", desc: "Signez le BL. Si tout est conforme, émettez un Bon de Réception (BR). Si des réserves existent, notez-les clairement." },
        { num: 6, titre: "Rangement en stock", desc: "Transportez les marchandises en réserve ou directement en rayon selon la procédure de l'entreprise." }
      ]
    },
    {
      id: "sec3",
      titre: "Documents essentiels",
      documents: [
        { nom: "Bon de Commande (BC)", desc: "Document émis par l'acheteur (magasin) au fournisseur. Contient les références, quantités et prix des produits commandés." },
        { nom: "Bon de Livraison (BL)", desc: "Document émis par le fournisseur ou le transporteur. Accompagne la livraison et liste les produits expédiés." },
        { nom: "Bon de Réception (BR)", desc: "Document interne émis par le réceptionnaire après vérification. Confirme la conformité de la livraison." },
        { nom: "Facture", desc: "Document commercial et fiscal émis par le fournisseur. Utilisée pour le paiement et la comptabilité." }
      ]
    },
    {
      id: "sec4",
      titre: "Rangement et stockage",
      contenu: "Après la réception, les produits doivent être rangés correctement pour faciliter leur accès et préserver leur qualité.",
      principes: [
        { titre: "Règle FIFO", desc: "First In, First Out (Premier Entré, Premier Sorti). Les produits reçus en premier doivent être vendus en premier pour éviter le gaspillage et l'obsolescence." },
        { titre: "Conditions de stockage", desc: "Respectez les conditions spécifiques : température, humidité, luminosité. Certains produits nécessitent une réfrigération ou une protection particulière." },
        { titre: "Étiquetage", desc: "Étiquetez les produits avec la date de réception, la date de péremption (si applicable) et la localisation en réserve." },
        { titre: "Hygiène et sécurité", desc: "Maintenez un espace de stockage propre et organisé. Respectez les normes d'hygiène et de sécurité alimentaire si nécessaire." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📦</span>
            <h1 className="font-playfair text-4xl font-bold text-gray-900">
              Bloc 1 : Recevoir et suivre les commandes
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Maîtrisez les étapes essentielles de la réception des marchandises et du suivi des commandes. Ce bloc couvre les procédures, les documents et les bonnes pratiques de stockage.
          </p>
        </div>

        {/* Schéma */}
        <div className="mb-12 bg-gray-50 rounded-lg p-8">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            Flux de réception
          </h2>
          <img 
            src="/images/reception_flux.png" 
            alt="Flux de réception" 
            className="w-full max-w-2xl mx-auto"
          />
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section) => (
            <Card 
              key={section.id}
              className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-poppins text-xl font-semibold text-gray-900">
                  {section.titre}
                </h3>
                <span className="text-emerald-600 text-2xl">
                  {expandedSection === section.id ? "−" : "+"}
                </span>
              </button>

              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                  {section.contenu && (
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {section.contenu}
                    </p>
                  )}

                  {section.points && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-3">Points clés :</h4>
                      <ul className="space-y-2">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.etapes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Étapes :</h4>
                      <div className="space-y-4">
                        {section.etapes.map((etape) => (
                          <div key={etape.num} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-2">
                              Étape {etape.num} : {etape.titre}
                            </h5>
                            <p className="text-gray-700">{etape.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.documents && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Documents :</h4>
                      <div className="space-y-3">
                        {section.documents.map((doc, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {doc.nom}
                            </h5>
                            <p className="text-gray-700">{doc.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.principes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Principes :</h4>
                      <div className="space-y-3">
                        {section.principes.map((principe, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {principe.titre}
                            </h5>
                            <p className="text-gray-700">{principe.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Fiche de révision */}
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-8 rounded mb-12">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            📝 Fiche de révision rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                Les 6 étapes de la réception
              </h3>
              <ol className="space-y-2 text-gray-700">
                <li>1. Accueil du transporteur</li>
                <li>2. Vérification des documents</li>
                <li>3. Contrôle quantitatif</li>
                <li>4. Contrôle qualitatif</li>
                <li>5. Signature et BR</li>
                <li>6. Rangement en stock</li>
              </ol>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                Documents clés à connaître
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bon de Commande (BC)</li>
                <li>• Bon de Livraison (BL)</li>
                <li>• Bon de Réception (BR)</li>
                <li>• Facture</li>
              </ul>
            </div>
          </div>
        </div>
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
