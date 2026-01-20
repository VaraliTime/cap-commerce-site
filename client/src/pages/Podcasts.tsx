import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Podcast, BookOpen, ShoppingCart, Leaf, TrendingUp } from "lucide-react";

export default function Podcasts() {
  const podcastCategories = [
    {
      title: "Retail & Commerce de Détail",
      icon: <ShoppingCart className="text-emerald-600" />,
      podcasts: [
        { 
          title: "Le Podcast du Retail", 
          description: "Décrypte le commerce d'aujourd'hui et éclaire le commerce de demain. Interviews d'experts, dirigeants et consultants du retail.",
          plateformes: ["Spotify", "Apple Podcasts", "Ausha"],
          spotifyUrl: "https://open.spotify.com/show/1rDoz6eLm9OuiRQcWFl69A",
          appleUrl: "https://podcasts.apple.com/us/podcast/le-podcast-du-retail/id1533435090",
          themes: "Digitalisation, RSE, innovation retail",
          icon: "🏪"
        },
        { 
          title: "Je Bosse en Grande Distribution", 
          description: "Jonathan Le Borgne donne la parole aux métiers du terrain : managers, chefs de rayon, acheteurs. Témoignages authentiques sur les réalités du commerce.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/jebosse",
          themes: "Management, transformation digitale, métiers du commerce",
          icon: "👥"
        },
        { 
          title: "Pour toutes ces bonnes raisons", 
          description: "Adrien Bernard, ex-directeur merchandising, partage son expertise sur l'optimisation des linéaires et le category management.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Merchandising, data, IA dans le retail",
          icon: "📊"
        }
      ]
    },
    {
      title: "E-commerce & Stratégies Digitales",
      icon: <TrendingUp className="text-blue-600" />,
      podcasts: [
        { 
          title: "Le Panier", 
          description: "Laurent Kretz part à la rencontre des e-commerçants pour recueillir leurs bonnes pratiques et stratégies gagnantes. Le premier podcast e-commerce français.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/lepanier",
          appleUrl: "https://podcasts.apple.com/podcast/le-panier",
          themes: "Acquisition client, branding, omnicanal",
          icon: "🛒"
        },
        { 
          title: "Les Digital Doers", 
          description: "Cyril du Plessis interroge les leaders du retail et du e-commerce sur leurs parcours et visions. Idéal pour comprendre les enjeux du digital.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Innovation, CRM, marketing digital, omnicanal",
          icon: "💻"
        },
        { 
          title: "Le Café de l'E-commerce", 
          description: "Adrien et Laetitia décryptent chaque semaine l'actualité du commerce électronique avec expertise et humour.",
          plateformes: ["Apple Podcasts", "Spotify"],
          themes: "Actualités e-commerce, marketing digital, retail physique",
          icon: "☕"
        },
        { 
          title: "Les Explorateurs du E-Commerce", 
          description: "Charles Mesnildrey d'E-Commerce Nation vous emmène dans les coulisses du e-commerce en France avec des retours d'expérience exclusifs.",
          plateformes: ["Apple Podcasts", "Spotify"],
          themes: "Acquisition client, optimisation conversions, croissance",
          icon: "🚀"
        }
      ]
    },
    {
      title: "Innovation & Responsabilité",
      icon: <Leaf className="text-green-600" />,
      podcasts: [
        { 
          title: "Au Rayon Futur", 
          description: "Le Groupe Casino met en avant les innovations responsables du secteur : lutte contre le gaspillage, MDD durables, magasins autonomes.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Innovation, RSE, technologie retail",
          icon: "🌱"
        },
        { 
          title: "Sans Filtre Ajouté", 
          description: "Salomé Charrigton raconte les histoires des acteurs de l'agroalimentaire : agriculteurs, producteurs, distributeurs. Un podcast humain et engagé.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Agroalimentaire, traçabilité, acteurs du terrain",
          icon: "🌾"
        }
      ]
    },
    {
      title: "Actualités & Tendances",
      icon: <BookOpen className="text-amber-600" />,
      podcasts: [
        { 
          title: "Les Voix de la Conso", 
          description: "Olivier Dauvers, figure incontournable de l'info retail, décrypte chaque semaine l'actualité de la consommation et de la grande distribution.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Actualités retail, tendances consommation, enjeux économiques",
          icon: "📻"
        }
      ]
    }
  ];

  const PodcastCard = ({ podcast }: { podcast: any }) => (
    <Card className="border-2 border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all bg-white dark:bg-gray-800 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{podcast.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Podcast className="text-emerald-500" size={20} />
            <h3 className="font-poppins font-bold text-gray-900 dark:text-white text-lg">
              {podcast.title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
            {podcast.description}
          </p>
          <div className="mb-3">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Thèmes : </span>
            <span className="text-xs text-gray-600 dark:text-gray-300">{podcast.themes}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {podcast.spotifyUrl && (
          <a 
            href={podcast.spotifyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
          >
            🎵 Spotify
          </a>
        )}
        {podcast.appleUrl && (
          <a 
            href={podcast.appleUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
          >
            🎧 Apple Podcasts
          </a>
        )}
        {!podcast.spotifyUrl && !podcast.appleUrl && (
          <span className="inline-flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
            Disponible sur {podcast.plateformes.join(", ")}
          </span>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
              <Podcast className="text-emerald-600 dark:text-emerald-400" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Podcasts Commerce
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Transformez vos trajets en moments d'apprentissage ! Découvrez une sélection de podcasts 
            incontournables pour explorer l'univers du retail, du e-commerce et du merchandising.
          </p>
        </section>

        <div className="space-y-16">
          {podcastCategories.map((category, idx) => (
            <section key={idx}>
              <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-gray-800">
                {category.icon}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.podcasts.map((podcast, pIdx) => (
                  <PodcastCard key={pIdx} podcast={podcast} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border-2 border-emerald-100 dark:border-emerald-800">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 flex items-center gap-2">
            💡 Pourquoi écouter des podcasts ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">📚 Se former en mobilité</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Profitez de vos déplacements quotidiens pour enrichir vos connaissances sur le commerce et le retail.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">🎯 Rester à jour</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Suivez les dernières tendances, innovations et actualités du secteur grâce aux experts du domaine.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">💼 S'inspirer des pros</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Découvrez les parcours et stratégies des professionnels qui réussissent dans le commerce.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border-2 border-blue-100 dark:border-blue-800">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            🎓 Lien avec le CAP EPC
          </h2>
          <div className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
            <p>
              <strong>Bloc 1 - Réception & Stockage :</strong> "Sans Filtre Ajouté" pour comprendre la chaîne d'approvisionnement
            </p>
            <p>
              <strong>Bloc 2 - Merchandising :</strong> "Pour toutes ces bonnes raisons" pour l'optimisation des linéaires
            </p>
            <p>
              <strong>Bloc 3 - Vente & Relation Client :</strong> "Le Panier" et "Les Digital Doers" pour les stratégies commerciales
            </p>
            <p>
              <strong>Bloc 4 - PSE :</strong> "Au Rayon Futur" pour les innovations responsables et la RSE
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Réussir son CAP Commerce. Podcasts sélectionnés pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
