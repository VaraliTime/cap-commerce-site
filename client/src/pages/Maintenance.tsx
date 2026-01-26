import { motion } from "framer-motion";
import { Hammer, Clock } from "lucide-react";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-emerald-100 dark:bg-emerald-900/30 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Hammer className="text-emerald-600 w-12 h-12 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mb-4 font-playfair">Mise à jour en cours</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Nous préparons la version 2.0 de votre plateforme CAP Commerce. 
          Le site sera de retour dans quelques instants avec de nouveaux outils révolutionnaires.
        </p>
        <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium">
          <Clock size={20} />
          <span>Retour imminent...</span>
        </div>
      </motion.div>
    </div>
  );
}
