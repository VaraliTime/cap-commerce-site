import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, Calculator, BookOpen, Brain, CreditCard, Store, Mic, FileText, ArrowRight, Star, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Simulateur d'Examen",
    desc: "100 questions aléatoires pour s'entraîner en conditions réelles.",
    icon: <GraduationCap className="text-emerald-600" />,
    href: "/simulateur-examen",
    color: "bg-emerald-50"
  },
  {
    title: "Coach IA Oral",
    desc: "Préparez l'épreuve EP3 avec notre simulateur de dialogue intelligent.",
    icon: <Mic className="text-blue-600" />,
    href: "/coach-ia",
    color: "bg-blue-50"
  },
  {
    title: "Flashcards Mémoire",
    desc: "Mémorisez les définitions clés avec la répétition espacée.",
    icon: <Brain className="text-purple-600" />,
    href: "/flashcards",
    color: "bg-purple-50"
  },
  {
    title: "Simulateur de Caisse",
    desc: "Maîtrisez l'encaissement et la relation client en magasin.",
    icon: <CreditCard className="text-amber-600" />,
    href: "/simulateur-caisse",
    color: "bg-amber-50"
  },
  {
    title: "Plan de Masse",
    desc: "Concevez l'implantation de votre point de vente en 2D.",
    icon: <Store className="text-cyan-600" />,
    href: "/plan-interactif",
    color: "bg-cyan-50"
  },
  {
    title: "Calculatrice Pro",
    desc: "Prix, marges, TVA : tous les calculs commerciaux en un clic.",
    icon: <Calculator className="text-rose-600" />,
    href: "/calculatrice",
    color: "bg-rose-50"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-8"
            >
              <Star size={16} fill="currentColor" />
              Plateforme N°1 pour la réussite au CAP EPC
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold font-playfair mb-8 leading-tight dark:text-white"
            >
              Réussissez votre <span className="text-emerald-600">CAP Commerce</span> avec brio.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
            >
              La plateforme d'apprentissage la plus complète : simulateurs IA, outils métiers, 
              quiz interactifs et fiches de révision personnalisées.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/simulateur-examen">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-8 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-200 dark:shadow-none transition-transform hover:scale-105">
                  Lancer le Simulateur <Zap className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/bloc1">
                <Button variant="outline" className="border-2 border-gray-200 dark:border-gray-700 px-10 py-8 rounded-2xl text-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  Explorer les cours
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Vos outils de réussite</h2>
            <p className="text-gray-500 dark:text-gray-400">Tout ce dont vous avez besoin pour maîtriser les 4 blocs du CAP EPC.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={f.href}>
                  <Card className="p-8 border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group bg-white dark:bg-gray-800 rounded-[2.5rem] h-full flex flex-col">
                    <div className={`w-16 h-16 ${f.color} dark:bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                      {f.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 dark:text-white">{f.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 flex-1">{f.desc}</p>
                    <div className="flex items-center text-emerald-600 font-bold text-sm group-hover:gap-2 transition-all">
                      Accéder à l'outil <ArrowRight size={16} className="ml-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold mb-6">Prêt à décrocher votre diplôme ?</h2>
              <p className="text-emerald-100 mb-8">Rejoignez des milliers d'étudiants qui utilisent déjà nos outils pour préparer leur avenir dans le commerce.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-600 bg-emerald-200"></div>
                  ))}
                </div>
                <span className="text-sm font-medium">+5000 étudiants actifs</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest opacity-70">Gratuit</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center">
                <p className="text-4xl font-bold mb-1">24/7</p>
                <p className="text-xs uppercase tracking-widest opacity-70">Accessible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-emerald-100 p-2 rounded-lg dark:bg-emerald-900/30">📚</div>
            <span className="font-playfair font-bold text-xl dark:text-white">CAP Commerce</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 Plateforme de Réussite CAP EPC. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
