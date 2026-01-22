import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { TrafficChart } from "@/components/TrafficChart";
import { Calculator, GraduationCap, BookOpen, Gamepad2, LayoutDashboard, PlayCircle, Trophy, Target, Zap } from "lucide-react";

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

  const newTools = [
    {
      title: "Simulateur d'Examen",
      desc: "Entraînez-vous avec des scénarios réels et un chronomètre.",
      icon: <GraduationCap className="text-white" size={32} />,
      color: "bg-emerald-600",
      link: "/simulateur-examen",
      badge: "Nouveau"
    },
    {
      title: "Calculatrice Pro",
      desc: "Calculez vos marges, prix TTC et TVA instantanément.",
      icon: <Calculator className="text-white" size={32} />,
      color: "bg-blue-600",
      link: "/calculatrice",
      badge: "Indispensable"
    },
    {
      title: "Glossaire Audio",
      desc: "Maîtrisez le vocabulaire technique avec la synthèse vocale.",
      icon: <PlayCircle className="text-white" size={32} />,
      color: "bg-purple-600",
      link: "/glossaire",
      badge: "Audio"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-50/50 dark:bg-emerald-900/10 -z-10 blur-3xl rounded-full max-w-4xl"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold mb-6 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
            Plateforme n°1 pour le CAP EPC
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Réussir son <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">CAP Commerce</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            La plateforme d'apprentissage complète pour le CAP Équipier Polyvalent du Commerce. 
            Cours interactifs, simulateurs d'examen et outils professionnels pour garantir votre réussite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/simulateur-examen">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-2xl shadow-xl shadow-emerald-200 dark:shadow-none transition-all hover:scale-105 active:scale-95">
                Lancer le Simulateur
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-10 py-6 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95">
                Mon Tableau de Bord
              </Button>
            </Link>
          </div>

          {/* New Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {newTools.map((tool, i) => (
              <Link key={i} href={tool.link}>
                <div className="group bg-white dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all cursor-pointer text-left relative overflow-hidden">
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-[10px] font-bold uppercase text-white ${tool.color}`}>
                    {tool.badge}
                  </div>
                  <div className={`${tool.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{tool.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Traffic Chart Integration */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">📈</span>
                Activité de la communauté
              </h3>
              <div className="text-sm text-gray-500">Mise à jour en temps réel</div>
            </div>
            <TrafficChart />
          </div>
        </section>

        {/* Blocs Section */}
        <section className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Parcours de Formation
            </h2>
            <div className="h-1.5 w-24 bg-emerald-600 rounded-full"></div>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-center max-w-xl">
              Explorez les 4 piliers fondamentaux du CAP Équipier Polyvalent du Commerce à travers nos modules interactifs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blocs.map((bloc, index) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-100 dark:hover:shadow-none transition-all duration-500 cursor-pointer h-full relative overflow-hidden flex flex-col">
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"
                    style={{ backgroundColor: bloc.couleur }}
                  ></div>
                  
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">{bloc.icone}</div>
                  
                  <h3 className="font-poppins text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors">
                    {bloc.titre}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-1">
                    {bloc.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div 
                      className="h-1.5 w-16 rounded-full"
                      style={{ backgroundColor: bloc.couleur }}
                    ></div>
                    <span className="text-emerald-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                      Explorer →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-24 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 p-16 rounded-[3rem] text-white shadow-2xl shadow-emerald-200 dark:shadow-none">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Prêt à décrocher votre diplôme ?</h2>
            <p className="text-xl text-emerald-50 mb-10 opacity-90">Accédez à toutes nos ressources gratuitement et commencez vos révisions dès maintenant.</p>
            <Link href="/simulateur-examen">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-8 text-xl font-bold rounded-2xl transition-transform hover:scale-105">
                Lancer l'Examen Blanc
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Réussir son CAP Commerce. Plateforme d'Excellence EPC.
          </p>
        </div>
      </footer>
    </div>
  );
}
