import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Podcast, BookOpen, ShoppingCart, Leaf, TrendingUp, Utensils, Star, Play, Download, CheckCircle, FileText, Globe, Zap } from "lucide-react";

export default function Podcasts() {
  const podcastCategories = [
    {
      title: "Commerce Alimentaire & Grande Distribution",
      icon: <Utensils className="text-orange-600" />,
      podcasts: [
        { 
          title: "Je Bosse en Grande Distribution", 
          description: "Le podcast de référence pour la grande distribution alimentaire. Jonathan Le Borgne donne la parole aux directeurs de magasins, chefs de rayon et experts du secteur.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/2e7eqTIWTHZaWwCUHgTg3S",
          appleUrl: "https://podcasts.apple.com/fr/podcast/je-bosse-en-grande-distribution/id1498304065",
          themes: "Gestion de rayon, management, transformation digitale",
          icon: "🍎"
        },
        { 
          title: "Eat's Business", 
          description: "La revue de presse hebdomadaire du business de la bouffe et de l'agroalimentaire. Idéal pour suivre l'actualité des enseignes et les tendances de consommation.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/6vXvY8V6Y6vXvY8V6Y6vXv",
          themes: "Actualités enseignes, agroalimentaire, tendances",
          icon: "🍱"
        },
        { 
          title: "Sans Filtre Ajouté", 
          description: "Salomé Charrigton explore les coulisses de l'agroalimentaire et de la distribution, du producteur au directeur de magasin.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/0m1X9BwUCXf5yeJhQXVXIx",
          themes: "Coulisses distribution, agroalimentaire, métiers",
          icon: "🌾"
        },
        { 
          title: "Les Voix de la Conso", 
          description: "Olivier Dauvers décrypte l'actualité de la grande consommation et du retail alimentaire avec un regard expert sur les prix et les stratégies.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Prix, inflation, stratégies enseignes",
          icon: "📻"
        }
      ]
    },
    {
      title: "Retail & Merchandising",
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
          title: "Pour toutes ces bonnes raisons", 
          description: "Adrien Bernard, ex-directeur merchandising, partage son expertise sur l'optimisation des linéaires et le category management.",
          plateformes: ["Spotify", "Apple Podcasts"],
          themes: "Merchandising, data, IA dans le retail",
          icon: "📊"
        }
      ]
    },
    {
      title: "E-commerce & Vente",
      icon: <TrendingUp className="text-blue-600" />,
      podcasts: [
        { 
          title: "Le Panier", 
          description: "Laurent Kretz part à la rencontre des e-commerçants pour recueillir leurs bonnes pratiques et stratégies gagnantes.",
          plateformes: ["Spotify", "Apple Podcasts"],
          spotifyUrl: "https://open.spotify.com/show/lepanier",
          appleUrl: "https://podcasts.apple.com/podcast/le-panier",
          themes: "Acquisition client, branding, omnicanal",
          icon: "🛒"
        },
        { 
          title: "Les Digital Doers", 
          description: "Cyril du Plessis interroge les leaders du retail et du e-commerce sur leurs parcours et visions.",
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
          description: "Charles Mesnildrey (E-Commerce Nation) nous emmène dans les coulisses du e-commerce en France.",
          plateformes: ["Apple Podcasts", "Spotify"],
          themes: "Acquisition client, conversion, croissance",
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
          title: "La France Bouge", 
          description: "Émission d'Europe 1 qui met en avant les initiatives positives et novatrices, souvent liées à la grande distribution.",
          plateformes: ["Europe 1", "Spotify"],
          themes: "Entrepreneuriat, innovation, économie locale",
          icon: "🇫🇷"
        }
      ]
    }
  ];

  const examEpisodes = [
    {
      title: "Comment préparer et gérer l'inventaire d'un magasin ?",
      podcast: "Je Bosse en Grande Distribution",
      expert: "Philippe Rovira",
      description: "Un épisode crucial pour comprendre les étapes de l'inventaire, le redressement des stocks et la gestion des écarts. Indispensable pour le Bloc 1.",
      embedUrl: "https://player.captivate.fm/episode/0f35c967-3e00-4703-99e3-5dfa5ecaebba",
      pdfUrl: "/podcast_fiche_inventaire.pdf",
      tags: ["Bloc 1", "Stocks", "Inventaire"]
    },
    {
      title: "Lutter contre la démarque inconnue en magasin",
      podcast: "Les Voix de la Conso",
      expert: "Olivier Dauvers",
      description: "Comprendre les causes du vol et de la casse, et mettre en place des plans d'action efficaces pour protéger la marge.",
      embedUrl: "https://www.youtube.com/embed/VbKeFvnAyD4",
      pdfUrl: "/bloc1_reception_stockage.pdf",
      tags: ["Bloc 1", "Sécurité", "Marge"]
    }
  ];

  const blocPdfs = [
    { title: "Bloc 1 : Réception & Stockage", url: "/bloc1_reception_stockage.pdf", color: "bg-blue-500" },
    { title: "Bloc 2 : Merchandising & Appro", url: "/bloc2_merchandising_approvisionnement.pdf", color: "bg-emerald-500" },
    { title: "Bloc 3 : Conseil & Vente", url: "/bloc3_conseil_accompagnement.pdf", color: "bg-purple-500" },
    { title: "Bloc 4 : PSE & Environnement", url: "/bloc4_pse.pdf", color: "bg-orange-500" }
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
          <span className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
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
        {/* Header */}
        <section className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
              <Podcast className="text-emerald-600 dark:text-emerald-400" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Bibliothèque de Podcasts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Une sélection exhaustive des meilleurs podcasts pour maîtriser tous les aspects du commerce, 
            du terrain à la stratégie digitale.
          </p>
        </section>

        {/* Section Téléchargements PDF Blocs */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-emerald-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Fiches de Synthèse par Bloc
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blocPdfs.map((pdf, idx) => (
              <a 
                key={idx} 
                href={pdf.url} 
                download 
                className={`${pdf.color} hover:opacity-90 text-white p-6 rounded-xl shadow-lg transition-all flex flex-col items-center text-center gap-3 group`}
              >
                <Download className="group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold font-poppins">{pdf.title}</span>
                <span className="text-xs opacity-80">Télécharger le PDF</span>
              </a>
            ))}
          </div>
        </section>

        {/* Podcast de la semaine */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-amber-500 fill-amber-500" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Le Podcast de la Semaine
            </h2>
          </div>
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 rounded-2xl border-none shadow-2xl overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                <Podcast size={80} className="text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wider">
                  Recommandation Merchandising
                </span>
                <h3 className="text-3xl font-bold mb-4 font-poppins">Les fondamentaux du merchandising efficace</h3>
                <p className="text-emerald-50 mb-6 text-lg max-w-2xl">
                  Adrien Bernard nous explique comment optimiser ses linéaires pour booster les ventes. 
                  Un must pour le Bloc 2 !
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="https://open.spotify.com/show/1rDoz6eLm9OuiRQcWFl69A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
                  >
                    <Play size={20} fill="currentColor" /> Écouter l'épisode
                  </a>
                  <a 
                    href="/podcast_fiche_merchandising.pdf" 
                    download
                    className="bg-emerald-800/40 hover:bg-emerald-800/60 text-white border border-white/30 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
                  >
                    <Download size={20} /> Fiche de synthèse PDF
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 bg-white/10 w-64 h-64 rounded-full blur-3xl"></div>
          </Card>
        </section>

        {/* Épisodes Spécial Examen */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Sélection "Spécial Examen"
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examEpisodes.map((episode, idx) => (
              <Card key={idx} className="border-2 border-blue-100 dark:border-blue-900/30 overflow-hidden bg-white dark:bg-gray-800 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {episode.tags.map(tag => (
                      <span key={tag} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-1 rounded uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-poppins">
                    {episode.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                    Par {episode.expert} • {episode.podcast}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-inner bg-gray-50 dark:bg-gray-900 mb-6">
                    <iframe 
                      style={{ width: '100%', height: '180px' }} 
                      src={episode.embedUrl} 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <a 
                    href={episode.pdfUrl} 
                    download
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Download size={18} /> Télécharger la fiche de révision PDF
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Toutes les chaînes */}
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

        {/* Pourquoi écouter ? */}
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
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Réussir son CAP Commerce. Ressources pédagogiques pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
