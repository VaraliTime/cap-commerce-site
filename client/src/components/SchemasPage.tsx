import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const schemas = [
  {
    id: "omnicanal",
    titre: "L'écosystème Omnicanal",
    description: "Visualisation de la relation entre le client, les différents canaux de vente et les services associés.",
    image: "/diagrams/omnicanal.png",
    bloc: "Bloc 2"
  },
  {
    id: "sbam",
    titre: "La Méthode SBAM",
    description: "Les 4 piliers fondamentaux de l'accueil client : Sourire, Bonjour, Au revoir, Merci.",
    image: "/diagrams/methode_sbam.png",
    bloc: "Bloc 3"
  },
  {
    id: "cap",
    titre: "La Méthode CAP",
    description: "Structure de l'argumentation de vente : Caractéristique, Avantage, Preuve.",
    image: "/diagrams/methode_cap.png",
    bloc: "Bloc 3"
  }
];

export default function SchemasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            🖼️ Galerie des Schémas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Retrouvez ici toutes les illustrations et schémas pédagogiques pour faciliter votre mémorisation des concepts clés du CAP Commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schemas.map((schema) => (
            <Card key={schema.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="font-poppins text-xl font-semibold text-gray-900">
                    {schema.titre}
                  </h2>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase">
                    {schema.bloc}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {schema.description}
                </p>
              </div>
              <div className="p-4 bg-white flex items-center justify-center min-h-[300px]">
                <img 
                  src={schema.image} 
                  alt={schema.titre}
                  className="max-w-full h-auto rounded shadow-sm"
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-emerald-600 rounded-2xl text-white text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">Besoin d'un autre schéma ?</h3>
          <p className="text-emerald-50 mb-0">
            Ces schémas sont conçus pour vous aider à visualiser les processus complexes. 
            N'hésitez pas à les consulter régulièrement pendant vos révisions.
          </p>
        </div>
      </main>
    </div>
  );
}
