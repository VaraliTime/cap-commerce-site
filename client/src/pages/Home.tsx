import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { TrafficChart } from "@/components/TrafficChart";
import { GameChallenge } from "@/components/GameChallenge";
import { Trophy, Card, BookOpen, Layout, CheckCircle, Calendar, Store, Video } from "lucide-react";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Réussir son CAP Commerce
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Préparez-vous efficacement au Certificat d'Aptitude Professionnelle Équipier Polyvalent du Commerce (CAP EPC) avec nos ressources structurées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bloc1">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 text-xl rounded-xl shadow-2xl transition-all hover:scale-105">
                Commencer à réviser
              </Button>
            </Link>
            <Link href="/ressources">
              <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-10 py-7 text-xl rounded-xl transition-all">
                Ressources
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-gray-900"></path>
          </svg>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Traffic Chart & Podium Integration */}
        <section className="mb-20 -mt-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2">
              <TrafficChart />
            </div>
            <div className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/20 dark:to-gray-800 border-amber-200 dark:border-amber-900/30 border-2 rounded-2xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
                <Trophy size={120} className="text-amber-600" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-amber-900 dark:text-amber-400 mb-6 flex items-center gap-2">
                <Trophy className="text-amber-500" /> Podium
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 p-3 bg-white/80 dark:bg-gray-700/80 rounded-xl border border-amber-200 dark:border-amber-900/30 shadow-sm">
                  <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner">1</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900 dark:text-white">Lucas M.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-600">2450</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-gray-700/40 rounded-xl border border-gray-100 dark:border-gray-600">
                  <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-white font-bold shadow-inner">2</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200">Sarah K.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-gray-500">2100</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/60 dark:bg-gray-700/40 rounded-xl border border-gray-100 dark:border-gray-600">
                  <div className="w-8 h-8 bg-amber-600/60 rounded-full flex items-center justify-center text-white font-bold shadow-inner">3</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200">Thomas D.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-700/60">1850</p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-center text-amber-600 dark:text-amber-500 mt-6 font-bold uppercase tracking-widest">
                Mise à jour chaque dimanche
              </p>
            </div>
          </div>
        </section>

        {/* Mini Jeu Challenge */}
        <section className="mb-24 max-w-4xl mx-auto">
          <GameChallenge />
        </section>

        {/* Blocs Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Les 4 blocs de compétences
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tout le programme du CAP EPC organisé de manière claire et structurée pour faciliter votre apprentissage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blocs.map((bloc) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group hover:-translate-y-2">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{bloc.icone}</div>
                  <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {bloc.titre}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                    {bloc.description}
                  </p>
                  <div 
                    className="h-1.5 w-12 rounded-full transition-all group-hover:w-full"
                    style={{ backgroundColor: bloc.couleur }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl p-12 border border-emerald-100 dark:border-emerald-900/30">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Une plateforme complète pour votre réussite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <BookOpen className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Cours structurés</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Contenu pédagogique complet organisé par blocs de compétences.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <Layout className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Schémas interactifs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Illustrations visuelles pour mieux comprendre les processus complexes.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <CheckCircle className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Fiches de révision</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Synthèses et points clés pour vos révisions de dernière minute.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <Calendar className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Outils pratiques</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Cadenciers types, gestion des stocks et plannings de livraison.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <Store className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Merchandising</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Plans de masse et principes d'agencement de magasin.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm h-fit">
                <Video className="text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-2">Vidéos & Podcasts</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Tutoriels et interviews d'experts pour une immersion totale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-900 text-white rounded-3xl p-12 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 bg-emerald-600/20 w-80 h-80 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-poppins text-3xl font-bold mb-8">
              À propos du CAP EPC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-poppins font-bold text-emerald-400 mb-4 text-xl">
                  Qu'est-ce que le CAP EPC ?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Le CAP Équipier Polyvalent du Commerce (EPC) est un diplôme de niveau 3 qui forme les futurs employés du commerce. Il prépare à des postes variés en magasin : vendeur, caissier, équipier de rayon, etc.
                </p>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-emerald-400 mb-4 text-xl">
                  Durée et accès
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  La formation dure généralement 2 ans. Elle est accessible après la 3ème et combine enseignement théorique et pratique en entreprise (alternance ou stage).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
	
      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-emerald-500 mb-6">📚 CAP Commerce</div>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            La plateforme de référence pour les étudiants en CAP Équipier Polyvalent du Commerce.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-600 text-sm">
              © 2026 Réussir son CAP Commerce. Site éducatif pour la préparation du CAP EPC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
