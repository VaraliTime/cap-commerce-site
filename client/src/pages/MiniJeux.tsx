import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { 
  Trophy, Target, RefreshCw, Gamepad2, 
  Calculator, Trash2, ShoppingBag, Star,
  CheckCircle2, AlertCircle, CreditCard, Banknote, ScanLine, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function MiniJeux() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  // --- JEU 1 : LE JUSTE PRIX ---
  const [targetPrice, setTargetPrice] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [gameMessage, setGameMessage] = useState("Devinez le prix !");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: "", image: "", price: 0 });

  const items = [
    { name: "iPhone 15 Pro", price: 1229, image: "📱" },
    { name: "Pack d'eau (6x1.5L)", price: 3.45, image: "💧" },
    { name: "PlayStation 5", price: 549, image: "🎮" },
    { name: "Vélo électrique", price: 899, image: "🚲" },
    { name: "Cafetière à grains", price: 399, image: "☕" }
  ];

  const startJustePrix = () => {
    const item = items[Math.floor(Math.random() * items.length)];
    setCurrentItem(item);
    setTargetPrice(item.price);
    setAttempts(0);
    setGameOver(false);
    setUserGuess("");
    setGameMessage("Entrez un prix !");
    setActiveGame("justeprix");
  };

  const handleGuess = () => {
    const guess = parseFloat(userGuess);
    if (isNaN(guess)) return;
    setAttempts(prev => prev + 1);
    if (guess < targetPrice) setGameMessage("C'est PLUS ! ⬆️");
    else if (guess > targetPrice) setGameMessage("C'est MOINS ! ⬇️");
    else {
      setGameMessage(`BRAVO ! Le juste prix était ${targetPrice}€ ! 🎉`);
      setGameOver(true);
    }
    setUserGuess("");
  };

  // --- JEU 2 : CALCUL DE MARGE ---
  const [margeGame, setMargeGame] = useState({ pa: 0, pv: 0, answer: 0, userVal: "", result: "" });
  
  const startMargeGame = () => {
    const pa = Math.floor(Math.random() * 50) + 10;
    const pv = Math.floor(Math.random() * 50) + pa + 5;
    setMargeGame({ pa, pv, answer: pv - pa, userVal: "", result: "" });
    setActiveGame("marge");
  };

  const checkMarge = () => {
    const val = parseFloat(margeGame.userVal);
    if (val === margeGame.answer) {
      setMargeGame(prev => ({ ...prev, result: "Correct ! 🎉" }));
    } else {
      setMargeGame(prev => ({ ...prev, result: `Faux ! La réponse était ${margeGame.answer}€` }));
    }
  };

  // --- JEU 3 : TRI DES DÉCHETS (PSE) ---
  const [pseGame, setPseGame] = useState({ item: "", type: "", result: "" });
  const wasteItems = [
    { name: "Carton d'emballage", type: "jaune" },
    { name: "Bouteille en verre", type: "vert" },
    { name: "Restes alimentaires", type: "marron" },
    { name: "Papier bureau", type: "bleu" }
  ];

  const startPseGame = () => {
    const item = wasteItems[Math.floor(Math.random() * wasteItems.length)];
    setPseGame({ item: item.name, type: item.type, result: "" });
    setActiveGame("pse");
  };

  const checkPse = (choice: string) => {
    if (choice === pseGame.type) {
      setPseGame(prev => ({ ...prev, result: "Bien trié ! ♻️" }));
    } else {
      setPseGame(prev => ({ ...prev, result: `Erreur ! C'était le bac ${pseGame.type}` }));
    }
  };

  // --- JEU 4 : SIMULATEUR DE CAISSE ---
  const [caisseGame, setCaisseGame] = useState({
    total: 0,
    paid: 0,
    changeNeeded: 0,
    userChange: "",
    result: "",
    items: [] as any[]
  });

  const startCaisseGame = () => {
    const products = [
      { name: "Pain", price: 1.20 },
      { name: "Lait", price: 0.95 },
      { name: "Pommes", price: 2.50 },
      { name: "Chocolat", price: 1.80 },
      { name: "Journal", price: 2.20 }
    ];
    const selected = products.sort(() => 0.5 - Math.random()).slice(0, 3);
    const total = parseFloat(selected.reduce((acc, p) => acc + p.price, 0).toFixed(2));
    const paidOptions = [5, 10, 20, 50].filter(v => v > total);
    const paid = paidOptions[Math.floor(Math.random() * paidOptions.length)];
    const changeNeeded = parseFloat((paid - total).toFixed(2));
    
    setCaisseGame({
      total,
      paid,
      changeNeeded,
      userChange: "",
      result: "",
      items: selected
    });
    setActiveGame("caisse");
  };

  const checkCaisse = () => {
    const val = parseFloat(caisseGame.userChange.replace(',', '.'));
    if (val === caisseGame.changeNeeded) {
      setCaisseGame(prev => ({ ...prev, result: "Parfait ! La monnaie est exacte. 💰" }));
    } else {
      setCaisseGame(prev => ({ ...prev, result: `Erreur ! Vous deviez rendre ${caisseGame.changeNeeded}€` }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-6">
            <div className="bg-indigo-600 p-5 rounded-3xl shadow-lg rotate-3">
              <Gamepad2 className="text-white" size={48} />
            </div>
          </div>
          <h1 className="font-playfair text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Mini-Jeux CAP EPC
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Apprenez en vous amusant ! Des défis rapides pour tester vos compétences de futur commerçant.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card Jeu 1 */}
          <Card className="p-6 hover:shadow-2xl transition-all cursor-pointer border-none bg-white dark:bg-gray-800" onClick={startJustePrix}>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Le Juste Prix</h3>
            <p className="text-gray-500 text-sm mb-4">Testez votre connaissance des prix du marché.</p>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Jouer</Button>
          </Card>

          {/* Card Jeu 2 */}
          <Card className="p-6 hover:shadow-2xl transition-all cursor-pointer border-none bg-white dark:bg-gray-800" onClick={startMargeGame}>
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Calcul de Marge</h3>
            <p className="text-gray-500 text-sm mb-4">Maîtrisez les calculs commerciaux de base.</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Jouer</Button>
          </Card>

          {/* Card Jeu 3 */}
          <Card className="p-6 hover:shadow-2xl transition-all cursor-pointer border-none bg-white dark:bg-gray-800" onClick={startPseGame}>
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Trash2 className="text-orange-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Tri Sélectif (PSE)</h3>
            <p className="text-gray-500 text-sm mb-4">Devenez un expert du tri en magasin.</p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">Jouer</Button>
          </Card>

          {/* Card Jeu 4 */}
          <Card className="p-6 hover:shadow-2xl transition-all cursor-pointer border-none bg-white dark:bg-gray-800" onClick={startCaisseGame}>
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ScanLine className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Simulateur Caisse</h3>
            <p className="text-gray-500 text-sm mb-4">Rendez la monnaie sans vous tromper !</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Jouer</Button>
          </Card>
        </div>

        {/* Zone de Jeu Active */}
        <AnimatePresence mode="wait">
          {activeGame && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="p-12 border-none shadow-2xl bg-white dark:bg-gray-800 max-w-4xl mx-auto relative overflow-hidden">
                <Button 
                  variant="ghost" 
                  className="absolute top-4 right-4"
                  onClick={() => setActiveGame(null)}
                >
                  <X size={24} />
                </Button>

                {activeGame === "justeprix" && (
                  <div className="text-center">
                    <div className="text-8xl mb-6">{currentItem.image}</div>
                    <h2 className="text-3xl font-bold mb-2">{currentItem.name}</h2>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl mb-8">
                      <p className="text-xl font-bold text-emerald-700">{gameMessage}</p>
                    </div>
                    {!gameOver ? (
                      <div className="flex gap-4 max-w-md mx-auto">
                        <Input 
                          type="number" 
                          value={userGuess} 
                          onChange={(e) => setUserGuess(e.target.value)}
                          placeholder="Prix en €..."
                          className="text-lg py-6"
                        />
                        <Button onClick={handleGuess} className="bg-emerald-600 px-8">Valider</Button>
                      </div>
                    ) : (
                      <Button onClick={startJustePrix} className="bg-emerald-600">Rejouer</Button>
                    )}
                  </div>
                )}

                {activeGame === "marge" && (
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Calculer la Marge Brute</h2>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                        <p className="text-sm text-gray-500 uppercase">Prix d'Achat</p>
                        <p className="text-4xl font-bold">{margeGame.pa}€</p>
                      </div>
                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl">
                        <p className="text-sm text-gray-500 uppercase">Prix de Vente</p>
                        <p className="text-4xl font-bold">{margeGame.pv}€</p>
                      </div>
                    </div>
                    {margeGame.result ? (
                      <div className="mb-8">
                        <p className="text-2xl font-bold mb-4">{margeGame.result}</p>
                        <Button onClick={startMargeGame}>Suivant</Button>
                      </div>
                    ) : (
                      <div className="flex gap-4 max-w-md mx-auto">
                        <Input 
                          type="number" 
                          value={margeGame.userVal} 
                          onChange={(e) => setMargeGame({...margeGame, userVal: e.target.value})}
                          placeholder="Marge en €..."
                        />
                        <Button onClick={checkMarge}>Vérifier</Button>
                      </div>
                    )}
                  </div>
                )}

                {activeGame === "pse" && (
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Où jeter cet objet ?</h2>
                    <div className="text-6xl mb-8 p-8 bg-gray-50 dark:bg-gray-700 rounded-full inline-block">
                      📦
                    </div>
                    <p className="text-2xl font-bold mb-8">{pseGame.item}</p>
                    
                    {pseGame.result ? (
                      <div className="mb-8">
                        <p className="text-2xl font-bold mb-4">{pseGame.result}</p>
                        <Button onClick={startPseGame}>Suivant</Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <Button onClick={() => checkPse("jaune")} className="bg-yellow-500 hover:bg-yellow-600 h-16">Jaune</Button>
                        <Button onClick={() => checkPse("vert")} className="bg-green-500 hover:bg-green-600 h-16">Vert</Button>
                        <Button onClick={() => checkPse("bleu")} className="bg-blue-500 hover:bg-blue-600 h-16">Bleu</Button>
                        <Button onClick={() => checkPse("marron")} className="bg-amber-800 hover:bg-amber-900 h-16">Marron</Button>
                      </div>
                    )}
                  </div>
                )}

                {activeGame === "caisse" && (
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Simulateur de Caisse</h2>
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl mb-8 text-left">
                      <h4 className="font-bold mb-4 border-b pb-2">Ticket de caisse :</h4>
                      {caisseGame.items.map((item, i) => (
                        <div key={i} className="flex justify-between mb-1">
                          <span>{item.name}</span>
                          <span>{item.price.toFixed(2)}€</span>
                        </div>
                      ))}
                      <div className="flex justify-between mt-4 pt-2 border-t font-bold text-xl text-purple-600">
                        <span>TOTAL</span>
                        <span>{caisseGame.total.toFixed(2)}€</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-8 mb-8">
                      <div className="text-center">
                        <p className="text-sm text-gray-500 uppercase">Le client donne</p>
                        <div className="flex items-center gap-2 text-3xl font-bold text-green-600">
                          <Banknote /> {caisseGame.paid}€
                        </div>
                      </div>
                    </div>

                    {caisseGame.result ? (
                      <div className="mb-8">
                        <p className="text-2xl font-bold mb-4">{caisseGame.result}</p>
                        <Button onClick={startCaisseGame} className="bg-purple-600">Client suivant</Button>
                      </div>
                    ) : (
                      <div className="max-w-md mx-auto">
                        <p className="mb-4 font-medium">Combien devez-vous rendre ?</p>
                        <div className="flex gap-4">
                          <Input 
                            type="text" 
                            value={caisseGame.userChange} 
                            onChange={(e) => setCaisseGame({...caisseGame, userChange: e.target.value})}
                            placeholder="Ex: 4.50"
                            className="text-center text-xl"
                          />
                          <Button onClick={checkCaisse} className="bg-purple-600 px-8">Rendre</Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-emerald-500 mb-4">📚 CAP Commerce</div>
          <p className="text-gray-400">© 2026 Réussir son CAP Commerce. Apprendre par le jeu.</p>
        </div>
      </footer>
    </div>
  );
}
