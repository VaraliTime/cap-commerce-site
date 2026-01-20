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
      
      {/* Hero Section - Centered and Balanced for PC */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-5xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
            Réussir son <span className="text-emerald-400">CAP Commerce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            La plateforme interactive de référence pour maîtriser le CAP Équipier Polyvalent du Commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/bloc1">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                Commencer à réviser
              </Button>
            </Link>
            <Link href="/ressources">
              <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-12 py-8 text-xl rounded-2xl transition-all w-full sm:w-auto">
                Ressources
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-gray-950"></path>
          </svg>
        </div>
      </section>

      <main className="container max-w-7xl mx-auto px-4 py-20">
        
        {/* Blocs Section - Optimized Grid for PC */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Parcours de Formation
            </h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Une organisation structurée par blocs de compétences pour une progression logique et efficace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {blocs.map((bloc) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-emerald-500/10">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${bloc.image})` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${bloc.couleur} opacity-85 group-hover:opacity-90 transition-opacity`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-12 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-xl p-5 rounded-3xl text-5xl shadow-inner">
                        {bloc.icone}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-white/20">
                        {bloc.titre}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins leading-tight">
                        {bloc.sousTitre}
                      </h3>
                      <p className="text-white/90 text-lg mb-10 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
                        {bloc.description}
                      </p>
                      <div className="flex items-center gap-3 font-bold text-xl group-hover:gap-6 transition-all bg-white/10 w-fit px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/10">
                        Explorer le module <ArrowRight size={28} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Traffic Chart & Podium - Balanced Layout for PC */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-8 bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">Activité de la plateforme</h3>
                <p className="text-gray-500 text-sm">Fréquentation en temps réel</p>
              </div>
              <div className="flex-1 min-h-[400px]">
                <TrafficChart />
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-gradient-to-b from-amber-50 to-white dark:from-amber-900/20 dark:to-gray-900 border-amber-200 dark:border-amber-900/30 border-2 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute -right-8 -top-8 opacity-10 rotate-12">
                <Trophy size={200} className="text-amber-600" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-amber-900 dark:text-amber-400 mb-10 flex items-center gap-4">
                <Trophy className="text-amber-500" size={36} /> Podium
              </h3>
              <div className="space-y-6 relative z-10 flex-1">
                <div className="flex items-center gap-6 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-amber-200 dark:border-amber-900/30 shadow-md transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-xl">1</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900 dark:text-white text-xl">Lucas M.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-600 text-2xl">2450</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-5 bg-white/70 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-xl">2</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-xl">Sarah K.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-gray-500 text-2xl">2100</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-5 bg-white/70 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-amber-600/60 rounded-full flex items-center justify-center text-white font-bold shadow-inner text-xl">3</div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-xl">Thomas D.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-700/60 text-2xl">1850</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-amber-600 dark:text-amber-500 mt-12 font-bold uppercase tracking-[0.3em] animate-pulse">
                Mise à jour hebdomadaire
              </p>
            </div>
          </div>
        </section>

        {/* Mini Jeu Challenge - Centered for PC */}
        <section className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">Défi du jour</h2>
            <p className="text-gray-500">Testez vos connaissances en 1 minute !</p>
          </div>
          <GameChallenge />
        </section>

        {/* Features Section - Grid Optimized for PC */}
        <section className="mb-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-[4rem] p-20 border border-emerald-100 dark:border-emerald-900/30 shadow-inner">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white mb-20 text-center">
            Une plateforme complète pour votre réussite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { icon: <BookOpen size={36} />, title: "Cours structurés", desc: "Contenu pédagogique complet organisé par blocs de compétences." },
              { icon: <Layout size={36} />, title: "Schémas interactifs", desc: "Illustrations visuelles pour mieux comprendre les processus complexes." },
              { icon: <CheckCircle size={36} />, title: "Fiches de révision", desc: "Synthèses et points clés pour vos révisions de dernière minute." },
              { icon: <Calendar size={36} />, title: "Outils pratiques", desc: "Calculatrices, cadenciers types et plannings de livraison." },
              { icon: <Store size={36} />, title: "Merchandising", desc: "Plans de masse et principes d'agencement de magasin." },
              { icon: <Video size={36} />, title: "Vidéos & Podcasts", desc: "Tutoriels et interviews d'experts pour une immersion totale." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-[2rem] shadow-xl h-fit transform group-hover:rotate-6 transition-transform">
                  <div className="text-emerald-600">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-4 text-2xl group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section - Wide Layout for PC */}
        <section className="bg-gray-900 text-white rounded-[4rem] p-20 mb-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 bg-emerald-600/20 w-[500px] h-[500px] rounded-full blur-[120px]"></div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="font-poppins text-5xl font-bold mb-12 text-center">
              À propos du CAP EPC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm border border-white/10">
                <h3 className="font-poppins font-bold text-emerald-400 mb-6 text-3xl">
                  Qu'est-ce que le CAP EPC ?
                </h3>
                <p className="text-gray-300 leading-relaxed text-xl font-light">
                  Le CAP Équipier Polyvalent du Commerce (EPC) est un diplôme de niveau 3 qui forme les futurs employés du commerce. Il prépare à des postes variés en magasin : vendeur, caissier, équipier de rayon, etc.
                </p>
              </div>
              <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-sm border border-white/10">
                <h3 className="font-poppins font-bold text-emerald-400 mb-6 text-3xl">
                  Durée et accès
                </h3>
                <p className="text-gray-300 leading-relaxed text-xl font-light">
                  La formation dure généralement 2 ans. Elle est accessible après la 3ème et combine enseignement théorique et pratique en entreprise (alternance ou stage).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
	
      {/* Footer - Centered and Wide for PC */}
      <footer className="bg-gray-950 text-white py-24 border-t border-gray-900">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl font-bold text-emerald-500 mb-10 tracking-tighter">📚 CAP Commerce</div>
          <p className="text-gray-500 max-w-xl mx-auto mb-16 text-xl font-light leading-relaxed">
            La plateforme de référence interactive pour les étudiants en CAP Équipier Polyvalent du Commerce.
          </p>
          <div className="flex justify-center gap-12 mb-16 text-gray-400 font-medium">
            <Link href="/referentiel" className="hover:text-white transition-colors">Référentiel</Link>
            <Link href="/examens" className="hover:text-white transition-colors">Examens</Link>
            <Link href="/outils" className="hover:text-white transition-colors">Outils</Link>
            <Link href="/podcasts" className="hover:text-white transition-colors">Podcasts</Link>
          </div>
          <div className="border-t border-gray-900 pt-12">
            <p className="text-gray-600 text-sm tracking-widest uppercase">
              © 2026 Réussir son CAP Commerce. Site éducatif pour la préparation du CAP EPC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
