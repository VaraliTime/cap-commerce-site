import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { 
  Podcast, ShoppingCart, Leaf, TrendingUp, Utensils, Star, 
  Download, CheckCircle, FileText, Zap, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Podcasts() {
  // --- Données des Podcasts ---
  const podcastCategories = [
    {
      title: "Commerce Alimentaire",
      subtitle: "Grande Distribution & Agro",
      icon: <Utensils size={32} />,
      color: "from-orange-500 to-red-600",
      podcasts: [
        { 
          title: "Je Bosse en Grande Distribution", 
          description: "Le podcast de référence pour la grande distribution alimentaire.",
          spotifyUrl: "https://open.spotify.com/show/2e7eqTIWTHZaWwCUHgTg3S",
          icon: "🍎"
        },
        { 
          title: "Eat's Business", 
          description: "La revue de presse hebdomadaire du business de la bouffe.",
          spotifyUrl: "https://open.spotify.com/show/6vXvY8V6Y6vXvY8V6Y6vXv",
          icon: "🍱"
        }
      ]
    },
    {
      title: "Retail & Merch",
      subtitle: "Agencement & Stratégie",
      icon: <ShoppingCart size={32} />,
      color: "from-emerald-500 to-teal-600",
      podcasts: [
        { 
          title: "Le Podcast du Retail", 
          description: "Décrypte le commerce d'aujourd'hui et de demain.",
          spotifyUrl: "https://open.spotify.com/show/1rDoz6eLm9OuiRQcWFl69A",
          icon: "🏪"
        },
        { 
          title: "Pour toutes ces bonnes raisons", 
          description: "Expertise sur l'optimisation des linéaires.",
          icon: "📊"
        }
      ]
    },
    {
      title: "E-commerce",
      subtitle: "Vente en ligne & Digital",
      icon: <TrendingUp size={32} />,
      color: "from-blue-500 to-indigo-600",
      podcasts: [
        { 
          title: "Le Panier", 
          description: "Les bonnes pratiques des e-commerçants.",
          spotifyUrl: "https://open.spotify.com/show/lepanier",
          icon: "🛒"
        },
        { 
          title: "Les Digital Doers", 
          description: "Interviews des leaders du digital.",
          icon: "💻"
        }
      ]
    },
    {
      title: "Innovation RSE",
      subtitle: "Responsabilité & Futur",
      icon: <Leaf size={32} />,
      color: "from-green-500 to-emerald-600",
      podcasts: [
        { 
          title: "Au Rayon Futur", 
          description: "Les innovations responsables du secteur.",
          icon: "🌱"
        },
        { 
          title: "La France Bouge", 
          description: "Initiatives positives et novatrices.",
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-6">
            <div className="bg-emerald-600 p-5 rounded-3xl shadow-lg shadow-emerald-200 dark:shadow-none rotate-3">
              <Podcast className="text-white" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bibliothèque de Podcasts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Apprenez les métiers du commerce en écoutant les meilleurs experts du secteur.
          </p>
        </motion.section>

        {/* --- CATEGORIES --- */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <Zap className="text-yellow-500 fill-yellow-500" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Explorez par Univers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {podcastCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className={`h-full border-none shadow-xl overflow-hidden relative transition-all group-hover:shadow-2xl`}>
                  <div className={`h-32 bg-gradient-to-br ${cat.color} p-6 flex items-end justify-between text-white`}>
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                      {cat.icon}
                    </div>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-600 transition-colors">{cat.title}</h3>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">{cat.subtitle}</p>
                    
                    <div className="space-y-4">
                      {cat.podcasts.map((p, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <span className="text-xl">{p.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate">{p.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Téléchargements PDF Blocs */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-emerald-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Fiches de Synthèse par Bloc
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blocPdfs.map((pdf, idx) => (
              <a 
                key={idx} 
                href={pdf.url} 
                download 
                className={`${pdf.color} hover:opacity-90 text-white p-8 rounded-3xl shadow-lg transition-all flex flex-col items-center text-center gap-4 group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform">
                  <Download size={48} />
                </div>
                <Download className="mb-2" size={40} />
                <span className="font-bold text-lg font-poppins">{pdf.title}</span>
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Télécharger le PDF</span>
              </a>
            ))}
          </div>
        </section>

        {/* Épisodes Spécial Examen */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
              Sélection "Spécial Examen"
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {examEpisodes.map((episode, idx) => (
              <Card key={idx} className="border-none shadow-xl overflow-hidden bg-white dark:bg-gray-800 flex flex-col rounded-3xl">
                <div className="p-8 flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {episode.tags.map(tag => (
                      <span key={tag} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
                    {episode.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    Par <span className="font-bold text-gray-700 dark:text-gray-200">{episode.expert}</span> • {episode.podcast}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-inner bg-gray-50 dark:bg-gray-900 mb-8">
                    <iframe 
                      style={{ width: '100%', height: '200px' }} 
                      src={episode.embedUrl} 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 rounded-2xl font-bold text-lg shadow-lg shadow-blue-100 dark:shadow-none"
                  >
                    <a href={episode.pdfUrl} download>
                      <Download className="mr-2" size={20} /> Télécharger la fiche PDF
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-emerald-500 mb-4">📚 CAP Commerce</div>
          <p className="text-gray-400 max-w-md mx-auto">
            © 2026 Réussir son CAP Commerce. Ressources pédagogiques pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
