import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { TrafficChart } from "@/components/TrafficChart";
import { GameChallenge } from "@/components/GameChallenge";
import { Trophy, BookOpen, Layout, CheckCircle, Calendar, Store, Video, ArrowRight } from "lucide-react";

export default function Home() {
  const blocs = [
    {
      id: "bloc1",
      titre: "Bloc 1",
      sousTitre: "Réception & Suivi",
      description: "Maîtrisez les étapes essentielles de la réception des marchandises et du suivi des commandes.",
      icone: "📦",
      couleur: "from-emerald-500 to-emerald-700",
      lien: "/bloc1",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "bloc2",
      titre: "Bloc 2",
      sousTitre: "Merchandising",
      description: "Apprenez à présenter les produits de manière attrayante et à gérer l'approvisionnement.",
      icone: "🛍️",
      couleur: "from-blue-500 to-blue-700",
      lien: "/bloc2",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "bloc3",
      titre: "Bloc 3",
      sousTitre: "Vente & Conseil",
      description: "Maîtrisez les techniques de vente et d'accueil pour offrir un excellent service client.",
      icone: "👥",
      couleur: "from-purple-500 to-purple-700",
      lien: "/bloc3",
      image: "https://images.unsplash.com/photo-1556740734-7f9589451ab8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "bloc4",
      titre: "Bloc 4",
      sousTitre: "PSE",
      description: "Devenez acteur de votre prévention, de votre santé et de votre environnement professionnel.",
      icone: "🛡️",
      couleur: "from-rose-500 to-rose-700",
      lien: "/bloc4",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Réussir son CAP Commerce
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            La plateforme interactive pour maîtriser le CAP Équipier Polyvalent du Commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/bloc1">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95">
                Commencer à réviser
              </Button>
            </Link>
            <Link href="/ressources">
              <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-12 py-8 text-xl rounded-2xl transition-all">
                Ressources
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-gray-950"></path>
          </svg>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Blocs Section - FULL SCREEN REORGANIZATION */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Parcours de Formation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Cliquez sur un bloc pour explorer les modules de compétences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {blocs.map((bloc) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${bloc.image})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${bloc.couleur} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-4xl">
                        {bloc.icone}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                        {bloc.titre}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold mb-4 font-poppins">
                        {bloc.sousTitre}
                      </h3>
                      <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {bloc.description}
                      </p>
                      <div className="flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all">
                        Explorer le module <ArrowRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Traffic Chart & Podium Integration */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl p-4 border border-gray-100 dark:border-gray-800">
              <TrafficChart />
            </div>
            <div className="bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/20 dark:to-gray-900 border-amber-200 dark:border-amber-900/30 border-2 rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
                <Trophy size={150} className="text-amber-600" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-amber-900 dark:text-amber-400 mb-8 flex items-center gap-3">
                <Trophy className="text-amber-500" size={32} /> Podium
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-5 p-4 bg-white/80 dark:bg-gray-800/80 rounded-2xl border border-amber-200 dark:border-amber-900/30 shadow-sm transform hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-lg">1</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-lg">Lucas M.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-600 text-xl">2450</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 bg-white/60 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-lg">2</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">Sarah K.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-gray-500 text-xl">2100</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-4 bg-white/60 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform">
                  <div className="w-10 h-10 bg-amber-600/60 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-lg">3</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">Thomas D.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-700/60 text-xl">1850</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center text-amber-600 dark:text-amber-500 mt-10 font-bold uppercase tracking-widest animate-pulse">
                Mise à jour chaque dimanche
              </p>
            </div>
          </div>
        </section>

        {/* Mini Jeu Challenge */}
        <section className="mb-32 max-w-5xl mx-auto">
          <GameChallenge />
        </section>

        {/* Features Section */}
        <section className="mb-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-[3rem] p-16 border border-emerald-100 dark:border-emerald-900/30">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
            Une plateforme complète pour votre réussite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <BookOpen className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Cours structurés</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Contenu pédagogique complet organisé par blocs de compétences.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <Layout className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Schémas interactifs</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Illustrations visuelles pour mieux comprendre les processus complexes.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <CheckCircle className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Fiches de révision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Synthèses et points clés pour vos révisions de dernière minute.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <Calendar className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Outils pratiques</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Calculatrices, cadenciers types et plannings de livraison.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <Store className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Merchandising</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Plans de masse et principes d'agencement de magasin.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg h-fit">
                <Video className="text-emerald-600" size={32} />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-3 text-xl">Vidéos & Podcasts</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Tutoriels et interviews d'experts pour une immersion totale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-900 text-white rounded-[3rem] p-16 mb-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 bg-emerald-600/20 w-96 h-96 rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="font-poppins text-4xl font-bold mb-10">
              À propos du CAP EPC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-poppins font-bold text-emerald-400 mb-6 text-2xl">
                  Qu'est-ce que le CAP EPC ?
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Le CAP Équipier Polyvalent du Commerce (EPC) est un diplôme de niveau 3 qui forme les futurs employés du commerce. Il prépare à des postes variés en magasin : vendeur, caissier, équipier de rayon, etc.
                </p>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-emerald-400 mb-6 text-2xl">
                  Durée et accès
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  La formation dure généralement 2 ans. Elle est accessible après la 3ème et combine enseignement théorique et pratique en entreprise (alternance ou stage).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
	
      {/* Footer */}
      <footer className="bg-gray-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl font-bold text-emerald-500 mb-8">📚 CAP Commerce</div>
          <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg">
            La plateforme de référence pour les étudiants en CAP Équipier Polyvalent du Commerce.
          </p>
          <div className="border-t border-gray-900 pt-12">
            <p className="text-gray-600 text-sm">
              © 2026 Réussir son CAP Commerce. Site éducatif pour la préparation du CAP EPC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
