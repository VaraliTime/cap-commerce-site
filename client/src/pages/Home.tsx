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
        <section className="mb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-50/50 -z-10 blur-3xl rounded-full max-w-4xl"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6 animate-bounce">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
            Plateforme n°1 pour le CAP EPC
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Réussir son <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">CAP Commerce</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            La plateforme d'apprentissage complète pour le CAP Équipier Polyvalent du Commerce. 
            Cours interactifs, simulateurs d'examen et outils professionnels pour garantir votre réussite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/bloc1">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-2xl shadow-xl shadow-emerald-200 transition-all hover:scale-105 active:scale-95">
                Commencer à réviser
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-6 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95">
                Mon Tableau de Bord
              </Button>
            </Link>
          </div>

          {/* Stats/Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { label: "Cours Complets", val: "100%", icon: "📖" },
              { label: "Réussite", val: "98%", icon: "🏆" },
              { label: "Utilisateurs", val: "5000+", icon: "👥" },
              { label: "Gratuit", val: "À vie", icon: "🎁" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-sm border border-emerald-100 p-4 rounded-2xl">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-gray-900">{stat.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Traffic Chart Integration */}
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-3xl border border-gray-100 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <span className="p-2 bg-emerald-100 rounded-lg text-emerald-600">📈</span>
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
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4 text-center">
              Parcours de Formation
            </h2>
            <div className="h-1.5 w-24 bg-emerald-600 rounded-full"></div>
            <p className="mt-4 text-gray-500 text-center max-w-xl">
              Explorez les 4 piliers fondamentaux du CAP Équipier Polyvalent du Commerce à travers nos modules interactifs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blocs.map((bloc, index) => (
              <Link key={bloc.id} href={bloc.lien}>
                <div className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-500 cursor-pointer h-full relative overflow-hidden flex flex-col">
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"
                    style={{ backgroundColor: bloc.couleur }}
                  ></div>
                  
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">{bloc.icone}</div>
                  
                  <h3 className="font-poppins text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {bloc.titre}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed flex-1">
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

        {/* About Section */}
        <section className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-[3rem] p-12 mb-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-poppins text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🎓</span> À propos du CAP EPC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="font-poppins text-xl font-bold text-emerald-400 mb-4">
                  Qu'est-ce que le CAP EPC ?
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Le CAP Équipier Polyvalent du Commerce (EPC) est un diplôme d'État de niveau 3. Il forme des professionnels capables d'assurer l'accueil, la vente, le réapprovisionnement et la gestion des stocks dans tous types de points de vente.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <h3 className="font-poppins text-xl font-bold text-emerald-400 mb-4">
                  Débouchés Professionnels
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Une fois diplômé, vous pourrez exercer en tant qu'équipier de vente, employé de commerce, caissier ou conseiller clientèle dans la grande distribution, les boutiques spécialisées ou le commerce de proximité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
              Pourquoi réviser avec nous ?
            </h2>
            <p className="text-gray-500">Des outils conçus par des professionnels pour votre réussite.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cours Structurés", desc: "Contenu pédagogique complet organisé par blocs de compétences officiels.", icon: "📚", color: "bg-blue-50 text-blue-600" },
              { title: "Schémas Interactifs", desc: "Illustrations visuelles et diagrammes pour mémoriser les processus complexes.", icon: "📊", color: "bg-emerald-50 text-emerald-600" },
              { title: "Quiz d'Entraînement", desc: "Testez vos connaissances avec des centaines de questions types examen.", icon: "✅", color: "bg-purple-50 text-purple-600" },
              { title: "Outils Métiers", desc: "Cadenciers, plans de masse et générateurs de documents professionnels.", icon: "📅", color: "bg-orange-50 text-orange-600" },
              { title: "Simulateur Oral", desc: "Préparez l'épreuve EP3 avec notre simulateur d'entretien interactif.", icon: "🎙️", color: "bg-red-50 text-red-600" },
              { title: "Glossaire Audio", desc: "Maîtrisez le vocabulaire technique avec des définitions lues à haute voix.", icon: "🎧", color: "bg-teal-50 text-teal-600" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col p-8 bg-white border border-gray-100 rounded-3xl hover:border-emerald-200 hover:shadow-xl transition-all group">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-bold text-gray-900 mb-3 text-xl">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="mb-24">
          <div className="bg-emerald-50 rounded-[3rem] p-12 border border-emerald-100">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-12 text-center">Ce que disent nos étudiants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Lucas M.", role: "Apprenti en Bac Pro", text: "Grâce aux fiches du Bloc 2, j'ai enfin compris les principes du merchandising. C'est super clair !", avatar: "👨‍🎓" },
                { name: "Sarah L.", role: "Candidate Libre", text: "Le simulateur oral m'a permis de déstresser pour mon épreuve EP3. Un outil indispensable.", avatar: "👩‍🎓" },
                { name: "Thomas D.", role: "Élève en CAP EPC", text: "Le site est fluide et les quiz sont parfaits pour réviser dans le bus. Je recommande à 100%.", avatar: "👨‍🎓" }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50">
                  <div className="text-4xl mb-4">{t.avatar}</div>
                  <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-emerald-600">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-24 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 p-16 rounded-[3rem] text-white shadow-2xl shadow-emerald-200">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Prêt à décrocher votre diplôme ?</h2>
            <p className="text-xl text-emerald-50 mb-10 opacity-90">Accédez à toutes nos ressources gratuitement et commencez vos révisions dès maintenant.</p>
            <Link href="/bloc1">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-8 text-xl font-bold rounded-2xl transition-all hover:scale-105 shadow-lg">
                Commencer les révisions
              </Button>
            </Link>
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
