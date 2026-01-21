import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { TrafficChart } from "@/components/TrafficChart";

export default function Home() {
  const blocs = [
    {
      id: "bloc1",
      titre: "Recevoir et suivre les commandes",
      description: "Maîtrisez les étapes essentielles de la réception des marchandises et du suivi des commandes",
      icone: "📦",
      couleur: "#10B981",
      lien: "/bloc1"
    },
    {
      id: "bloc2",
      titre: "Mettre en valeur et approvisionner",
      description: "Apprenez à présenter les produits de manière attrayante et à gérer efficacement l'approvisionnement des rayons",
      icone: "🛍️",
      couleur: "#059669",
      lien: "/bloc2"
    },
    {
      id: "bloc3",
      titre: "Conseil et accompagnement du client",
      description: "Maîtrisez les techniques de vente et d'accueil pour offrir un excellent service client",
      icone: "👥",
      couleur: "#047857",
      lien: "/bloc3"
    },
    {
      id: "bloc4",
      titre: "Prévention-Santé-Environnement",
      description: "Devenez acteur de votre prévention, de votre santé et de votre environnement professionnel",
      icone: "🛡️",
      couleur: "#065f46",
      lien: "/bloc4"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 mb-4">
            Réussir son CAP Commerce
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Préparez-vous efficacement au Certificat d'Aptitude Professionnelle Équipier Polyvalent du Commerce (CAP EPC) avec nos cours structurés, schémas et fiches de révision.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="/bloc1">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                Commencer à réviser
              </Button>
            </Link>
            <Link href="/ressources">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
                Ressources
              </Button>
            </Link>
          </div>

          {/* Traffic Chart Integration */}
          <div className="max-w-3xl mx-auto">
            <TrafficChart />
          </div>
        </section>

        {/* Blocs Section */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-12 text-center">
            Les 4 blocs de compétences du CAP EPC
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blocs.map((bloc) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
                  <div className="text-5xl mb-4">{bloc.icone}</div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                    {bloc.titre}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {bloc.description}
                  </p>
                  <div 
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: bloc.couleur }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            À propos du CAP EPC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-3">
                Qu'est-ce que le CAP EPC ?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Le CAP Équipier Polyvalent du Commerce (EPC) est un diplôme de niveau 3 qui forme les futurs employés du commerce. Il prépare à des postes variés en magasin : vendeur, caissier, équipier de rayon, etc.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-600 mb-3">
                Durée et accès
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La formation dure généralement 2 ans. Elle est accessible après la 3ème et combine enseignement théorique et pratique en entreprise (alternance ou stage).
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-8 text-center">
            Ce que vous trouverez sur ce site
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Cours structurés</h3>
                <p className="text-gray-600">Contenu pédagogique complet organisé par blocs de compétences</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Schémas et diagrammes</h3>
                <p className="text-gray-600">Illustrations visuelles pour mieux comprendre les processus</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Fiches de révision</h3>
                <p className="text-gray-600">Synthèses et points clés pour vos révisions efficaces</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Cadencier et stocks</h3>
                <p className="text-gray-600">Plannings types de livraison et gestion des stocks</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🏪</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Plans de masse</h3>
                <p className="text-gray-600">Agencement de magasin et principes de merchandising</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🎥</div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-900 mb-2">Vidéos explicatives</h3>
                <p className="text-gray-600">Tutoriels vidéo pour mieux comprendre les concepts</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce. Site éducatif pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
