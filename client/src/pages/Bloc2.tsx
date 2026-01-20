import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Bloc2() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "sec1",
      titre: "Principes du merchandising",
      contenu: "Le merchandising est l'art de présenter les produits de manière à maximiser les ventes et l'attrait du magasin. Il combine la psychologie du consommateur avec des techniques de présentation.",
      objectifs: [
        "Augmenter les ventes et le chiffre d'affaires",
        "Améliorer l'image et l'ambiance du magasin",
        "Faciliter la recherche et l'accès aux produits",
        "Créer une expérience d'achat agréable"
      ]
    },
    {
      id: "sec2",
      titre: "Les 5B de Kepner",
      contenu: "La méthode des 5B est un cadre fondamental pour le merchandising efficace.",
      cinq_b: [
        { lettre: "B", mot: "Bon produit", expl: "Sélectionnez les produits appropriés pour votre clientèle et votre magasin." },
        { lettre: "B", mot: "Bon endroit", expl: "Placez les produits à des emplacements stratégiques : niveau des yeux pour les best-sellers, niveau des pieds pour les produits volumineux." },
        { lettre: "B", mot: "Bon moment", expl: "Approvisionnez les rayons au moment opportun : avant les pics de vente, en fin d'après-midi pour les produits frais." },
        { lettre: "B", mot: "Bonne quantité", expl: "Mettez en rayon une quantité suffisante pour satisfaire la demande sans surstock." },
        { lettre: "B", mot: "Bonne information", expl: "Fournissez une signalétique claire : prix, origine, composition, codes-barres." }
      ]
    },
    {
      id: "sec3",
      titre: "Niveaux de présentation des produits",
      contenu: "La position des produits sur le rayon influence directement les ventes. Les consommateurs achètent plus facilement les produits à hauteur des yeux.",
      niveaux: [
        { nom: "Niveau des yeux", hauteur: "140-170 cm", carac: "Position la plus visible et la plus vendeuse. Réservée aux produits à forte marge ou aux best-sellers.", exemple: "Produits premium, marques leaders, articles promotionnels" },
        { nom: "Niveau des mains", hauteur: "80-140 cm", carac: "Facile d'accès, bonne visibilité. Idéal pour les produits de consommation courante.", exemple: "Produits de base, articles de moyenne gamme" },
        { nom: "Niveau des pieds", hauteur: "0-80 cm", carac: "Moins visible, moins vendu. Réservé aux produits volumineux ou à bas prix.", exemple: "Produits lourds, packs, articles en promotion" },
        { nom: "Niveau du chapeau", hauteur: "170+ cm", carac: "Difficile d'accès. Utilisé pour le stockage ou la signalétique.", exemple: "Stock supplémentaire, panneaux de prix, décoration" }
      ]
    },
    {
      id: "sec4",
      titre: "Approvisionnement des rayons",
      contenu: "L'approvisionnement efficace des rayons est essentiel pour maintenir la disponibilité des produits et l'attractivité du magasin.",
      etapes: [
        { titre: "Vérification des stocks", desc: "Contrôlez régulièrement les niveaux de stock en rayon et en réserve. Identifiez les produits qui manquent ou qui sont en surstock." },
        { titre: "Calcul des quantités", desc: "Déterminez la quantité à mettre en rayon en fonction de la demande, de l'espace disponible et de la capacité de la réserve." },
        { titre: "Respect du FIFO", desc: "Placez les produits les plus anciens en avant et les plus récents à l'arrière pour assurer une rotation correcte." },
        { titre: "Rangement et facing", desc: "Organisez les produits de manière ordonnée, avec un nombre suffisant de produits visibles (facing) pour attirer l'attention." }
      ]
    },
    {
      id: "sec5",
      titre: "Signalétique et communication",
      contenu: "Une bonne signalétique guide le client et facilite ses achats. Elle doit être claire, précise et conforme aux normes.",
      types: [
        { type: "ILV (Information sur le Lieu de Vente)", desc: "Étiquettes de prix, codes-barres, informations produit (composition, origine, conseils d'utilisation).", imp: "Essentielle pour l'information du client et la conformité légale" },
        { type: "PLV (Publicité sur le Lieu de Vente)", desc: "Affiches, présentoirs, bannières, décoration promotionnelle.", imp: "Attire l'attention et crée une ambiance commerciale" },
        { type: "Étiquettes de prix", desc: "Doivent être lisibles, correctes et bien positionnées à proximité du produit.", imp: "Légalement obligatoires et essentielles pour la transparence" }
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
            <span className="text-5xl">🛍️</span>
            <h1 className="font-playfair text-4xl font-bold text-gray-900">
              Bloc 2 : Mettre en valeur et approvisionner
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Apprenez à présenter les produits de manière attrayante et à gérer efficacement l'approvisionnement des rayons. Ce bloc couvre le merchandising, les niveaux de présentation et la signalétique.
          </p>
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

                  {section.objectifs && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-3">Objectifs :</h4>
                      <ul className="space-y-2">
                        {section.objectifs.map((obj, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.cinq_b && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Les 5B de Kepner :</h4>
                      <div className="space-y-3">
                        {section.cinq_b.map((b, idx) => (
                          <div key={idx} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-1">
                              <span className="text-emerald-600 text-lg">{b.lettre}</span> - {b.mot}
                            </h5>
                            <p className="text-gray-700">{b.expl}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.niveaux && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Niveaux de présentation :</h4>
                      <div className="space-y-3">
                        {section.niveaux.map((niveau, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {niveau.nom} ({niveau.hauteur})
                            </h5>
                            <p className="text-gray-700 mb-2"><strong>Caractéristiques :</strong> {niveau.carac}</p>
                            <p className="text-gray-700"><strong>Exemple :</strong> {niveau.exemple}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.etapes && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Étapes :</h4>
                      <div className="space-y-3">
                        {section.etapes.map((etape, idx) => (
                          <div key={idx} className="bg-white p-4 rounded border-l-4 border-emerald-600">
                            <h5 className="font-poppins font-semibold text-gray-900 mb-2">
                              {etape.titre}
                            </h5>
                            <p className="text-gray-700">{etape.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.types && (
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-gray-900 mb-4">Types de signalétique :</h4>
                      <div className="space-y-3">
                        {section.types.map((type, idx) => (
                          <div key={idx} className="bg-white p-4 rounded">
                            <h5 className="font-poppins font-semibold text-emerald-600 mb-2">
                              {type.type}
                            </h5>
                            <p className="text-gray-700 mb-2">{type.desc}</p>
                            <p className="text-gray-600 text-sm"><strong>Importance :</strong> {type.imp}</p>
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
                Les 5B de Kepner
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>B</strong>on produit</li>
                <li>• <strong>B</strong>on endroit</li>
                <li>• <strong>B</strong>on moment</li>
                <li>• <strong>B</strong>onne quantité</li>
                <li>• <strong>B</strong>onne information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                Niveaux de présentation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>👀 Niveau des yeux (140-170 cm)</li>
                <li>✋ Niveau des mains (80-140 cm)</li>
                <li>👞 Niveau des pieds (0-80 cm)</li>
                <li>🎩 Niveau du chapeau (170+ cm)</li>
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
