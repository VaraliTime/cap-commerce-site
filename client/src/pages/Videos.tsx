import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { PlayCircle, BookOpen, ShoppingCart, ShieldCheck, Layout } from "lucide-react";

export default function Videos() {
  const videoCategories = [
    {
      title: "Bloc 1 : Réception & Stockage",
      icon: <BookOpen className="text-blue-600" />,
      videos: [
        { 
          title: "Le processus de réception", 
          youtubeId: "DK-R2LpGNXg", 
          description: "Définition, déchargement et contrôles à la réception.",
          duree: "6:10",
          source: "YEA"
        },
        { 
          title: "Identifier les documents", 
          youtubeId: "5sx0fT935xs", 
          description: "BL, BC et traçabilité en 3 minutes.",
          duree: "3:00",
          source: "Jérôme Ammouial"
        }
      ]
    },
    {
      title: "Bloc 2 : Merchandising & Rayons",
      icon: <Layout className="text-emerald-600" />,
      videos: [
        { 
          title: "Mise en valeur des produits", 
          youtubeId: "3JfCfgI9zxM", 
          description: "Techniques d'approvisionnement et de mise en rayon.",
          duree: "8:20",
          source: "Jérôme Ammouial"
        },
        { 
          title: "Le Cadencier", 
          youtubeId: "Axv_squaCUw", 
          description: "Comprendre et utiliser le cadencier en magasin.",
          duree: "5:45",
          source: "CAP EPC"
        }
      ]
    },
    {
      title: "Bloc 3 : Vente & Relation Client",
      icon: <ShoppingCart className="text-amber-600" />,
      videos: [
        { 
          title: "La Méthode CAP", 
          youtubeId: "fCL-0e0U5Fw", 
          description: "Exemple concret d'utilisation de la méthode CAP en vente.",
          duree: "10:15",
          source: "Technique de Vente"
        },
        { 
          title: "Traiter les objections", 
          youtubeId: "zQy4zaacHQw", 
          description: "Comment répondre aux freins des clients efficacement.",
          duree: "9:30",
          source: "Formation Commerciale"
        }
      ]
    },
    {
      title: "Bloc 4 : PSE & Sécurité",
      icon: <ShieldCheck className="text-red-600" />,
      videos: [
        { 
          title: "Gestes et Postures", 
          youtubeId: "LW8tH0h0OfQ", 
          description: "Prévention des risques liés à l'activité physique (PRAP).",
          duree: "7:40",
          source: "INRS"
        }
      ]
    }
  ];

  const VideoCard = ({ video }: { video: any }) => (
    <Card className="border-2 border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all bg-white dark:bg-gray-800">
      <div className="relative bg-black aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <PlayCircle className="text-emerald-500" size={20} />
          <h3 className="font-poppins font-bold text-gray-900 dark:text-white text-lg line-clamp-1">
            {video.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-gray-500">⏱️ {video.duree}</span>
          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded">
            {video.source}
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vidéos Pédagogiques
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Une sélection de vidéos ciblées pour maîtriser les compétences clés du CAP EPC.
          </p>
        </section>

        <div className="space-y-16">
          {videoCategories.map((category, idx) => (
            <section key={idx}>
              <div className="flex items-center gap-3 mb-8 border-b pb-4 border-gray-100 dark:border-gray-800">
                {category.icon}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video, vIdx) => (
                  <VideoCard key={vIdx} video={video} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border-2 border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-2">
            💡 Comment bien utiliser ces vidéos ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-3">1. Prenez des notes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Notez les mots-clés et les étapes importantes citées dans la vidéo pour mieux les mémoriser.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-3">2. Pratiquez</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Essayez de refaire les gestes ou de répéter les arguments de vente à voix haute après le visionnage.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-3">3. Testez-vous</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Faites le quiz correspondant sur le site juste après avoir regardé la vidéo pour valider vos acquis.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce. Vidéos sélectionnées pour la préparation du CAP EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
