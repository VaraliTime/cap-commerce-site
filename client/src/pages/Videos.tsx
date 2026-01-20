import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

export default function Videos() {
  const videosBloc1 = [
    {
      id: "v1",
      titre: "CAP EPC - Réception des commandes",
      description: "Tutoriel complet sur les étapes de la réception des marchandises",
      youtubeId: "6T2D_1Qo18w",
      duree: "12:34",
      source: "Educform31"
    },
    {
      id: "v2",
      titre: "Bon de Commande vs Bon de Livraison",
      description: "Différences et utilisation des documents de réception",
      youtubeId: "dQw4w9WgXcQ",
      duree: "8:45",
      source: "CAP Commerce"
    },
    {
      id: "v3",
      titre: "Contrôle de réception des marchandises",
      description: "Procédures de vérification quantitative et qualitative",
      youtubeId: "jNQXAC9IVRw",
      duree: "10:20",
      source: "Formation Pro"
    }
  ];

  const videosBloc2 = [
    {
      id: "v4",
      titre: "Merchandising et mise en valeur",
      description: "Principes de présentation des produits en magasin",
      youtubeId: "6T2D_1Qo18w",
      duree: "14:15",
      source: "Educform31"
    },
    {
      id: "v5",
      titre: "Les niveaux de présentation des produits",
      description: "Placement optimal des articles sur les rayons",
      youtubeId: "dQw4w9WgXcQ",
      duree: "9:30",
      source: "CAP Commerce"
    },
    {
      id: "v6",
      titre: "Approvisionnement et FIFO",
      description: "Gestion efficace des stocks et rotation des produits",
      youtubeId: "jNQXAC9IVRw",
      duree: "11:45",
      source: "Formation Pro"
    },
    {
      id: "v7",
      titre: "Signalétique ILV et PLV",
      description: "Création et gestion de l'information sur le lieu de vente",
      youtubeId: "6T2D_1Qo18w",
      duree: "8:00",
      source: "Educform31"
    }
  ];

  const videosBloc3 = [
    {
      id: "v8",
      titre: "Accueil client - Méthode SBAM",
      description: "Technique d'accueil professionnel et courtois",
      youtubeId: "dQw4w9WgXcQ",
      duree: "7:20",
      source: "CAP Commerce"
    },
    {
      id: "v9",
      titre: "Les 7 étapes de la vente",
      description: "Processus complet de vente en magasin",
      youtubeId: "jNQXAC9IVRw",
      duree: "15:40",
      source: "Formation Pro"
    },
    {
      id: "v10",
      titre: "Argumentation avec la méthode CAP",
      description: "Présenter les produits efficacement",
      youtubeId: "6T2D_1Qo18w",
      duree: "10:15",
      source: "Educform31"
    },
    {
      id: "v11",
      titre: "Gestion des objections",
      description: "Répondre aux préoccupations des clients",
      youtubeId: "dQw4w9WgXcQ",
      duree: "9:50",
      source: "CAP Commerce"
    },
    {
      id: "v12",
      titre: "Encaissement et fidélisation",
      description: "Finaliser la vente et fidéliser le client",
      youtubeId: "jNQXAC9IVRw",
      duree: "8:30",
      source: "Formation Pro"
    }
  ];

  const VideoCard = ({ video }: { video: any }) => (
    <Card className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.titre}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-poppins font-semibold text-gray-900 mb-2 line-clamp-2">
          {video.titre}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {video.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>⏱️ {video.duree}</span>
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
            {video.source}
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            🎥 Vidéos explicatives
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez des tutoriels vidéo pour mieux comprendre les concepts clés du CAP Commerce.
          </p>
        </div>

        {/* Bloc 1 */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            📦 Bloc 1 : Recevoir et suivre les commandes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosBloc1.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Bloc 2 */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            🛍️ Bloc 2 : Mettre en valeur et approvisionner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosBloc2.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Bloc 3 */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900 mb-8">
            👥 Bloc 3 : Conseil et accompagnement du client
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videosBloc3.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Conseils de visionnage */}
        <section className="mb-16 bg-emerald-50 rounded-lg p-8 border border-emerald-200">
          <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
            💡 Conseils pour bien utiliser ces vidéos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Avant de regarder
              </h3>
              <ul className="space-y-3">
                {[
                  "Lisez la fiche correspondante sur le site",
                  "Préparez un bloc-notes pour prendre des notes",
                  "Assurez-vous d'avoir une bonne connexion",
                  "Trouvez un endroit calme pour vous concentrer"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Pendant le visionnage
              </h3>
              <ul className="space-y-3">
                {[
                  "Mettez en pause pour prendre des notes",
                  "Regardez en plein écran si possible",
                  "Activez les sous-titres si disponibles",
                  "Regardez plusieurs fois si nécessaire"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Après le visionnage
              </h3>
              <ul className="space-y-3">
                {[
                  "Relisez vos notes",
                  "Consultez la fiche de révision correspondante",
                  "Pratiquez les concepts appris",
                  "Testez vos connaissances avec des exemples"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-emerald-700 mb-4">
                Progression recommandée
              </h3>
              <ul className="space-y-3">
                {[
                  "Commencez par le Bloc 1",
                  "Continuez avec le Bloc 2",
                  "Terminez avec le Bloc 3",
                  "Révisez régulièrement avant l'examen"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Note importante */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="font-poppins font-semibold text-blue-900 mb-4">
            ℹ️ Note importante
          </h3>
          <p className="text-blue-800">
            Ces vidéos proviennent de sources externes (YouTube). Elles sont fournies à titre éducatif et complètent le contenu du site. 
            Assurez-vous que vous avez une bonne connexion Internet pour les regarder. Si une vidéo n'est plus disponible, 
            consultez les fiches de révision correspondantes sur le site.
          </p>
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
