import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Cadencier() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const cadencierSemaine = [
    {
      jour: "Lundi",
      taches: [
        "🚚 Réception des commandes fournisseurs (matin)",
        "📋 Vérification des documents (BC vs BL)",
        "🔍 Contrôle quantitatif et qualitatif",
        "📊 Mise à jour des stocks informatiques",
        "🏪 Approvisionnement des rayons (après-midi)"
      ],
      horaires: "8h-12h : Réception | 14h-18h : Approvisionnement"
    },
    {
      jour: "Mardi",
      taches: [
        "🛍️ Merchandising et mise en valeur",
        "✨ Nettoyage des rayons et gondoles",
        "🏷️ Vérification des étiquettes de prix",
        "📸 Facing des produits best-sellers",
        "👥 Service client et ventes"
      ],
      horaires: "8h-12h : Merchandising | 14h-18h : Service client"
    },
    {
      jour: "Mercredi",
      taches: [
        "📦 Inventaire partiel des stocks",
        "🔄 Rotation FIFO des produits",
        "🧹 Nettoyage général du magasin",
        "📊 Analyse des ventes du jour",
        "👥 Service client et ventes"
      ],
      horaires: "8h-12h : Inventaire | 14h-18h : Service client"
    },
    {
      jour: "Jeudi",
      taches: [
        "🚚 Réception des commandes fournisseurs (matin)",
        "📋 Vérification et contrôle",
        "🏪 Approvisionnement des rayons",
        "🛍️ Mise en place des promotions",
        "👥 Service client et ventes"
      ],
      horaires: "8h-12h : Réception | 14h-18h : Approvisionnement"
    },
    {
      jour: "Vendredi",
      taches: [
        "🎯 Préparation du week-end (stocks importants)",
        "✨ Nettoyage et rangement complets",
        "🏷️ Vérification des étiquettes promotionnelles",
        "📊 Préparation des commandes pour lundi",
        "👥 Service client intensif"
      ],
      horaires: "8h-12h : Préparation | 14h-18h : Service client"
    },
    {
      jour: "Samedi",
      taches: [
        "👥 Service client prioritaire",
        "🛍️ Mise en valeur des produits",
        "📦 Approvisionnement rapide des rayons",
        "🏷️ Vérification des stocks en rayon",
        "💳 Encaissement et fidélisation"
      ],
      horaires: "9h-13h : Matin | 14h-19h : Après-midi"
    },
    {
      jour: "Dimanche",
      taches: [
        "👥 Service client",
        "📦 Approvisionnement léger si nécessaire",
        "🧹 Nettoyage de fin de journée",
        "📊 Inventaire de clôture",
        "📋 Rapport de fin de semaine"
      ],
      horaires: "9h-13h : Matin | 14h-19h : Après-midi"
    }
  ];

  const cadencierMois = [
    {
      semaine: "Semaine 1",
      activites: [
        "Inventaire complet du stock",
        "Réception des commandes régulières",
        "Mise en place des promotions mensuelles",
        "Nettoyage général du magasin"
      ]
    },
    {
      semaine: "Semaine 2",
      activites: [
        "Réception des commandes régulières",
        "Merchandising des nouveaux produits",
        "Analyse des ventes de la semaine 1",
        "Approvisionnement standard"
      ]
    },
    {
      semaine: "Semaine 3",
      activites: [
        "Réception des commandes régulières",
        "Mise à jour des étiquettes de prix",
        "Nettoyage et rangement complets",
        "Préparation des promotions de fin de mois"
      ]
    },
    {
      semaine: "Semaine 4",
      activites: [
        "Réception des commandes régulières",
        "Mise en place des promotions de fin de mois",
        "Inventaire partiel des stocks",
        "Préparation du mois suivant"
      ]
    }
  ];

  const livraisonsType = [
    {
      fournisseur: "Fournisseur produits frais",
      frequence: "Tous les jours",
      horaire: "6h-8h (avant ouverture)",
      quantite: "Variable selon demande",
      produits: "Fruits, légumes, produits laitiers, viande"
    },
    {
      fournisseur: "Fournisseur produits secs",
      frequence: "2-3 fois par semaine",
      horaire: "8h-10h ou 14h-16h",
      quantite: "Palettes complètes",
      produits: "Conserves, pâtes, riz, épices, etc."
    },
    {
      fournisseur: "Fournisseur boissons",
      frequence: "1-2 fois par semaine",
      horaire: "8h-10h ou 14h-16h",
      quantite: "Palettes lourdes",
      produits: "Eau, sodas, jus, bière, vin"
    },
    {
      fournisseur: "Fournisseur articles non-alimentaires",
      frequence: "1 fois par semaine",
      horaire: "14h-16h",
      quantite: "Cartons mixtes",
      produits: "Hygiène, nettoyage, articles ménagers"
    }
  ];

  const niveauxStock = [
    {
      niveau: "Stock minimum",
      definition: "Quantité minimale à maintenir en rayon",
      action: "Commander immédiatement si atteint",
      exemple: "5 unités pour un produit best-seller"
    },
    {
      niveau: "Stock de sécurité",
      definition: "Quantité pour couvrir les pics de demande",
      action: "Maintenir ce niveau en permanence",
      exemple: "10 unités pour produits courants"
    },
    {
      niveau: "Stock optimal",
      definition: "Quantité idéale en rayon et réserve",
      action: "Objectif à atteindre après livraison",
      exemple: "20 unités en rayon + 30 en réserve"
    },
    {
      niveau: "Stock maximum",
      definition: "Quantité maximale à ne pas dépasser",
      action: "Limiter les commandes pour éviter surstock",
      exemple: "50 unités total (rayon + réserve)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            📅 Cadencier et gestion des stocks
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez les plannings types de livraison, d'approvisionnement et de gestion des stocks en magasin.
          </p>
        </div>

        {/* Cadencier Hebdomadaire */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📋 Cadencier hebdomadaire type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cadencierSemaine.map((jour) => (
              <Card 
                key={jour.jour}
                className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setSelectedDay(selectedDay === jour.jour ? null : jour.jour)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-poppins text-xl font-semibold text-gray-900">
                    {jour.jour}
                  </h3>
                  <span className="text-emerald-600 text-2xl">
                    {selectedDay === jour.jour ? "−" : "+"}
                  </span>
                </button>

                {selectedDay === jour.jour && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-sm text-gray-600 mb-4 font-semibold">
                      ⏰ {jour.horaires}
                    </p>
                    <div className="space-y-2">
                      {jour.taches.map((tache, idx) => (
                        <div key={idx} className="flex gap-3 text-gray-700">
                          <span className="text-emerald-600">✓</span>
                          <span>{tache}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Cadencier Mensuel */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📆 Cadencier mensuel type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cadencierMois.map((semaine, idx) => (
              <Card key={idx} className="border border-gray-200 p-6 bg-emerald-50">
                <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                  {semaine.semaine}
                </h3>
                <ul className="space-y-2">
                  {semaine.activites.map((activite, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-emerald-600">•</span>
                      <span>{activite}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Livraisons type */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🚚 Calendrier des livraisons type
          </h2>
          <div className="space-y-4">
            {livraisonsType.map((livraison, idx) => (
              <Card key={idx} className="border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Fournisseur
                    </h4>
                    <p className="text-gray-700">{livraison.fournisseur}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Fréquence
                    </h4>
                    <p className="text-gray-700">{livraison.frequence}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Horaire
                    </h4>
                    <p className="text-gray-700">{livraison.horaire}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Quantité
                    </h4>
                    <p className="text-gray-700">{livraison.quantite}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Produits
                    </h4>
                    <p className="text-gray-700">{livraison.produits}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Niveaux de stock */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📊 Niveaux de stock et gestion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niveauxStock.map((niveau, idx) => (
              <Card key={idx} className="border-l-4 border-l-emerald-600 border border-gray-200 p-6">
                <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                  {niveau.niveau}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Définition :</strong> {niveau.definition}</p>
                  <p><strong>Action :</strong> {niveau.action}</p>
                  <p><strong>Exemple :</strong> {niveau.exemple}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Checklist réception */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            ✅ Checklist de réception
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Avant la livraison
              </h3>
              <ul className="space-y-3">
                {[
                  "Préparer l'espace de réception",
                  "Vérifier les documents (BC)",
                  "Prévoir les équipements (scanner, balance)",
                  "Informer l'équipe de l'arrivée"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Pendant la livraison
              </h3>
              <ul className="space-y-3">
                {[
                  "Accueillir le livreur",
                  "Vérifier l'identité et le véhicule",
                  "Contrôler quantité et qualité",
                  "Signer le BL avec réserves si nécessaire"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Après la livraison
              </h3>
              <ul className="space-y-3">
                {[
                  "Émettre le Bon de Réception",
                  "Ranger en réserve ou rayon",
                  "Mettre à jour l'inventaire",
                  "Archiver les documents"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">☐</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-4">
                Gestion des anomalies
              </h3>
              <ul className="space-y-3">
                {[
                  "Produit manquant → Réserve sur BL",
                  "Produit endommagé → Refus ou réserve",
                  "Quantité incorrecte → Vérifier et noter",
                  "Date expiration proche → Signaler"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
