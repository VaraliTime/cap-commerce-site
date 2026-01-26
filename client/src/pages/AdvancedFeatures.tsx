import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Sparkles, FileText, Users, Zap } from "lucide-react";
import LeaguesAndStreaks from "@/components/LeaguesAndStreaks";
import AIScenarioGenerator from "@/components/AIScenarioGenerator";
import CVGenerator from "@/components/CVGenerator";

export default function AdvancedFeatures() {
  const features = [
    {
      id: "leagues",
      label: "Ligues & Streaks",
      icon: <Trophy className="w-6 h-6" />,
      description: "Compétitions hebdomadaires et séries de révisions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "scenarios",
      label: "Scénarios IA",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Entraînement aux situations de vente réalistes",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "cv",
      label: "Générateur CV",
      icon: <FileText className="w-6 h-6" />,
      description: "Créez votre CV professionnel en commerce",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-12 mt-16 lg:mt-0 max-w-[1400px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 font-playfair">
            Fonctionnalités Avancées
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les outils innovants pour transformer votre apprentissage en une expérience gamifiée et interactive
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 border-none shadow-lg rounded-2xl hover:shadow-xl transition-all cursor-pointer h-full">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.label}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="leagues" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger value="leagues" className="rounded-lg">
              <Trophy size={18} className="mr-2" />
              Ligues
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="rounded-lg">
              <Sparkles size={18} className="mr-2" />
              Scénarios
            </TabsTrigger>
            <TabsTrigger value="cv" className="rounded-lg">
              <FileText size={18} className="mr-2" />
              CV
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leagues" className="space-y-6">
            <LeaguesAndStreaks />
          </TabsContent>

          <TabsContent value="scenarios" className="space-y-6">
            <AIScenarioGenerator />
          </TabsContent>

          <TabsContent value="cv" className="space-y-6">
            <CVGenerator />
          </TabsContent>
        </Tabs>

        {/* Coming Soon Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Card className="p-8 border-none shadow-lg rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-purple-600" />
              Prochainement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🎮 Quiz en Duel</h3>
                <p className="text-gray-600">Affrontez d'autres élèves en temps réel sur des séries de questions</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🏪 Simulateur 3D de Linéaire</h3>
                <p className="text-gray-600">Visualisez l'impact du merchandising en 3D interactif</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">🎫 Analyse de Tickets</h3>
                <p className="text-gray-600">Repérez les erreurs sur des tickets de caisse fictifs</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">💬 Forum Entraide</h3>
                <p className="text-gray-600">Posez vos questions et aidez vos camarades</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Réussir son CAP Commerce. Plateforme d'apprentissage innovante.
          </p>
        </div>
      </footer>
    </div>
  );
}
