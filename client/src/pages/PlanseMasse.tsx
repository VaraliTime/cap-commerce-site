import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function PlansMasse() {
  const [selectedType, setSelectedType] = useState<string>("petit");

  const typesmagasins = [
    {
      id: "petit",
      nom: "Petit magasin (100-200 m²)",
      description: "Commerce de proximité, épicerie, petite surface",
      caracteristiques: [
        "1-2 entrées",
        "Caisse près de l'entrée",
        "2-3 rangées de gondoles",
        "Réserve réduite",
        "Parking limité ou absent"
      ]
    },
    {
      id: "moyen",
      nom: "Magasin moyen (200-500 m²)",
      description: "Supermarché classique",
      caracteristiques: [
        "1-2 entrées principales",
        "Caisses en zone centrale",
        "4-6 rangées de gondoles",
        "Réserve importante",
        "Parking pour 30-50 places"
      ]
    },
    {
      id: "grand",
      nom: "Grand magasin (500+ m²)",
      description: "Hypermarché, grande surface",
      caracteristiques: [
        "2-3 entrées",
        "Zone de caisses centrale",
        "8+ rangées de gondoles",
        "Réserve très importante",
        "Parking pour 100+ places"
      ]
    }
  ];

  const agencements = [
    {
      type: "petit",
      nom: "Agencement petit magasin",
      zones: [
        {
          nom: "Entrée",
          position: "Avant",
          elements: "Porte, vitrine, petite promo"
        },
        {
          nom: "Zone de caisses",
          position: "Droite/Gauche",
          elements: "1-2 caisses, articles impulsifs"
        },
        {
          nom: "Rayons linéaires",
          position: "Centre",
          elements: "2-3 rangées parallèles"
        },
        {
          nom: "Produits frais",
          position: "Fond",
          elements: "Réfrigérés, fruits/légumes"
        },
        {
          nom: "Réserve",
          position: "Arrière",
          elements: "Petit espace de stockage"
        }
      ]
    },
    {
      type: "moyen",
      nom: "Agencement magasin moyen",
      zones: [
        {
          nom: "Entrée principale",
          position: "Avant centre",
          elements: "Portes automatiques, accueil"
        },
        {
          nom: "Zone promotionnelle",
          position: "Entrée gauche/droite",
          elements: "Têtes de gondoles, articles en promotion"
        },
        {
          nom: "Rayons linéaires",
          position: "Centre",
          elements: "4-6 rangées parallèles"
        },
        {
          nom: "Îlots de présentation",
          position: "Centre",
          elements: "Produits saisonniers, best-sellers"
        },
        {
          nom: "Zone produits frais",
          position: "Fond et côtés",
          elements: "Fruits, légumes, viande, laiterie, surgelés"
        },
        {
          nom: "Zone de caisses",
          position: "Avant droit",
          elements: "4-6 caisses, articles impulsifs"
        },
        {
          nom: "Réserve",
          position: "Arrière",
          elements: "Stockage important, quai de déchargement"
        }
      ]
    },
    {
      type: "grand",
      nom: "Agencement hypermarché",
      zones: [
        {
          nom: "Entrée principale",
          position: "Avant centre",
          elements: "Portes automatiques, accueil, info"
        },
        {
          nom: "Zones promotionnelles",
          position: "Entrée et îlots",
          elements: "Têtes de gondoles, articles en promotion"
        },
        {
          nom: "Rayons linéaires",
          position: "Centre",
          elements: "8+ rangées parallèles organisées par catégorie"
        },
        {
          nom: "Îlots centraux",
          position: "Centre",
          elements: "Produits saisonniers, nouveautés, best-sellers"
        },
        {
          nom: "Zone produits frais",
          position: "Périphérie",
          elements: "Fruits, légumes, viande, poisson, laiterie, surgelés"
        },
        {
          nom: "Zone de caisses",
          position: "Avant droit",
          elements: "10-15 caisses, caisses rapides, articles impulsifs"
        },
        {
          nom: "Service client",
          position: "Avant gauche",
          elements: "Accueil, information, retours"
        },
        {
          nom: "Réserve",
          position: "Arrière",
          elements: "Très grande surface, quai de déchargement, zones spécialisées"
        }
      ]
    }
  ];

  const principesMerchandising = [
    {
      principe: "Circulation fluide",
      description: "Organiser les rayons pour que le client circule naturellement dans le magasin",
      exemple: "Produits frais au fond pour forcer la circulation"
    },
    {
      principe: "Zones chaudes",
      description: "Placer les produits à forte marge ou best-sellers aux emplacements visibles",
      exemple: "Niveau des yeux pour les marques leaders"
    },
    {
      principe: "Complémentarité",
      description: "Placer les produits complémentaires près les uns des autres",
      exemple: "Pâtes près des sauces, café près du sucre"
    },
    {
      principe: "Saisonnalité",
      description: "Adapter l'agencement aux saisons et périodes commerciales",
      exemple: "Produits de Noël en novembre-décembre"
    },
    {
      principe: "Accessibilité",
      description: "Faciliter l'accès aux produits pour tous les clients",
      exemple: "Produits populaires à hauteur des mains"
    },
    {
      principe: "Ambiance",
      description: "Créer une atmosphère agréable et accueillante",
      exemple: "Musique, éclairage, propreté, odeurs"
    }
  ];

  const categoriesRayons = [
    {
      categorie: "Produits secs",
      produits: "Pâtes, riz, conserves, épices, sucre, farine",
      placement: "Rayons linéaires centraux",
      hauteur: "Tous niveaux"
    },
    {
      categorie: "Boissons",
      produits: "Eau, sodas, jus, bière, vin, café, thé",
      placement: "Rayons lourds, souvent en bas",
      hauteur: "Niveau des pieds (produits lourds)"
    },
    {
      categorie: "Produits frais",
      produits: "Fruits, légumes, viande, poisson, laiterie",
      placement: "Périphérie du magasin, zones réfrigérées",
      hauteur: "Spécifique selon produit"
    },
    {
      categorie: "Surgelés",
      produits: "Aliments congelés, glaces, plats préparés",
      placement: "Zones réfrigérées, souvent au fond",
      hauteur: "Selon capacité de congélateur"
    },
    {
      categorie: "Hygiène/Nettoyage",
      produits: "Savon, shampoing, détergent, papier toilette",
      placement: "Rayons linéaires, souvent en haut",
      hauteur: "Tous niveaux"
    },
    {
      categorie: "Articles ménagers",
      produits: "Vaisselle, ustensiles, décoration, textiles",
      placement: "Rayons linéaires ou îlots",
      hauteur: "Tous niveaux"
    }
  ];

  const selectedAgencement = agencements.find(a => a.type === selectedType);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            🏪 Plans de masse et agencement
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez les différents types d'agencement de magasin et les principes de merchandising spatial.
          </p>
        </div>

        {/* Types de magasins */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📐 Types de magasins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {typesmagasins.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 rounded-lg border-2 text-left transition-all ${
                  selectedType === type.id
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">
                  {type.nom}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {type.caracteristiques.map((carac, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>{carac}</span>
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </section>

        {/* Agencement sélectionné */}
        {selectedAgencement && (
          <section className="mb-16">
            <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
              {selectedAgencement.nom}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedAgencement.zones.map((zone, idx) => (
                <Card key={idx} className="border border-gray-200 p-6 bg-gray-50">
                  <h3 className="font-poppins font-semibold text-emerald-600 mb-3">
                    {zone.nom}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Position :</strong> {zone.position}</p>
                    <p><strong>Éléments :</strong> {zone.elements}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

         {/* Plans de masse */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🏪 Plans de masse - Agencement de magasin
          </h2>
          
          {/* Image du plan de masse */}
          <div className="mb-12 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <img 
              src="/images/plan_masse_magasin.jpg" 
              alt="Plan de masse d'un magasin de commerce" 
              className="w-full h-auto"
            />
          </div>
          <Card className="border border-gray-200 p-6 bg-white overflow-hidden">
            <div className="mb-6">
              <h3 className="font-poppins font-semibold text-emerald-600 mb-2">
                Organisation spatiale : Rayons, Réserve et Zones Thermiques
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Ce schéma illustre l'organisation type d'un point de vente incluant la <strong>réserve</strong>, 
                les <strong>rayons</strong>, ainsi que la distinction entre <strong>zone chaude</strong> (fort trafic) 
                et <strong>zone froide</strong> (faible trafic).
              </p>
            </div>
            <div className="flex justify-center bg-gray-50 rounded-lg p-4 border border-gray-100">
              <img 
                src="/diagrams/plan_masse_magasin.png" 
                alt="Schéma du plan de masse du magasin" 
                className="max-w-full h-auto shadow-sm rounded"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <h4 className="font-semibold text-red-700 mb-1">🔥 Zone Chaude</h4>
                <p className="text-sm text-red-600">Zone de circulation naturelle où le client se rend spontanément (produits frais, boulangerie, promotions).</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-1">❄️ Zone Froide</h4>
                <p className="text-sm text-blue-600">Zone moins fréquentée nécessitant des produits d'appel ou de première nécessité pour y attirer le client.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Principes de merchandising */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🎯 Principes de merchandising spatial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principesMerchandising.map((principe, idx) => (
              <Card key={idx} className="border-l-4 border-l-emerald-600 border border-gray-200 p-6">
                <h3 className="font-poppins font-semibold text-emerald-700 mb-3">
                  {principe.principe}
                </h3>
                <p className="text-gray-700 mb-2">{principe.description}</p>
                <p className="text-gray-600 text-sm"><strong>Exemple :</strong> {principe.exemple}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Catégories de rayons */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📊 Catégories de rayons et placement
          </h2>
          <div className="space-y-4">
            {categoriesRayons.map((cat, idx) => (
              <Card key={idx} className="border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Catégorie
                    </h4>
                    <p className="text-gray-700 font-medium">{cat.categorie}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Produits
                    </h4>
                    <p className="text-gray-700 text-sm">{cat.produits}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Placement
                    </h4>
                    <p className="text-gray-700 text-sm">{cat.placement}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-600 mb-2">
                      Hauteur
                    </h4>
                    <p className="text-gray-700 text-sm">{cat.hauteur}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-16 bg-emerald-50 rounded-lg p-8 border border-emerald-200">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            💡 Conseils pratiques d'agencement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                À faire
              </h3>
              <ul className="space-y-3">
                {[
                  "Placer les produits frais au fond pour forcer la circulation",
                  "Mettre les best-sellers à hauteur des yeux",
                  "Grouper les produits complémentaires",
                  "Créer des zones promotionnelles visibles",
                  "Maintenir les rayons propres et bien rangés",
                  "Utiliser la signalétique de manière efficace"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                À éviter
              </h3>
              <ul className="space-y-3">
                {[
                  "Surcharger les rayons (moins c'est plus)",
                  "Placer les produits lourds trop haut",
                  "Mélanger les catégories sans logique",
                  "Laisser des rayons vides ou mal rangés",
                  "Ignorer l'accessibilité pour les clients",
                  "Oublier de nettoyer régulièrement"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-red-600 font-bold">✗</span>
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
